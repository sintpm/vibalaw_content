#!/usr/bin/env node
/**
 * Vbee TTS synthesizer for Vibalaw content.
 * Reads a content.md file, splits by pause markers, calls Vbee API, merges MP3.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Config
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODA2NTYzMzN9.OlscIxcecWvxmA5eDRs3Hb56-uyWpdbRtFtgf7WG1lQ';
const APP_ID = 'e70de8a0-6a54-4a7f-8b84-bb9da8fc2edf';
const VOICE = 'n_hanoi_male_namnhenhangamap_story_vc';
const SPEED_RATE = 1.1;
const VBEE_API_URL = 'https://vbee.vn/api/v1/tts';

const INPUT_FILE = join(__dirname, 'thua-ke-dat-dai-khong-di-chuc-content.md');
const OUTPUT_FILE = '/Users/sisi/Projects/claude/Vibalaw/content/lskc/thua-ke-dat-dai-khong-di-chuc/audio/thua-ke-dat-dai-khong-di-chuc.mp3';
const TEMP_DIR = join(__dirname, 'temp_segments');

// Parse content file into segments
function parseContent(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const segments = [];
  let currentText = [];

  function flushText() {
    const text = currentText.join(' ').replace(/\s+/g, ' ').trim();
    if (text.length > 0) {
      segments.push({ type: 'speech', text });
    }
    currentText = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('#')) continue;
    if (trimmed.startsWith('@@narrator')) continue;

    if (trimmed === '{{pause:paragraph}}') {
      flushText();
      segments.push({ type: 'pause', duration: 500 });
    } else if (trimmed === '{{pause:scene}}') {
      flushText();
      segments.push({ type: 'pause', duration: 1500 });
    } else {
      currentText.push(trimmed);
    }
  }
  flushText();

  return segments;
}

// Generate silence MP3
function generateSilence(outputPath, durationMs) {
  const durationSec = durationMs / 1000;
  execSync(
    `ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t ${durationSec} -c:a libmp3lame -b:a 128k "${outputPath}"`,
    { stdio: 'pipe' }
  );
}

// Download audio from link
async function downloadAudio(audioLink, outPath, maxAttempts = 5) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(audioLink, { redirect: 'follow' });
      if (res.ok) {
        await pipeline(Readable.fromWeb(res.body), createWriteStream(outPath));
        return;
      }
      if (res.status >= 300 && res.status < 400) {
        const redirectUrl = res.headers.get('location');
        if (redirectUrl) {
          const rRes = await fetch(redirectUrl);
          if (rRes.ok) {
            await pipeline(Readable.fromWeb(rRes.body), createWriteStream(outPath));
            return;
          }
        }
      }
    } catch (e) {
      console.error(`Download attempt ${i+1} failed: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
  throw new Error(`Failed to download audio after ${maxAttempts} attempts: ${audioLink}`);
}

// Poll for audio ready
async function pollViaCallback(requestId, maxAttempts = 60, delayMs = 3000) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(r => setTimeout(r, delayMs));
    try {
      const res = await fetch(`${VBEE_API_URL}/${requestId}`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'App-Id': APP_ID,
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.result?.audio_link && data.result?.status === 'SUCCESS') {
          return data.result.audio_link;
        }
      }
    } catch { /* retry */ }
  }
  throw new Error(`Audio not ready after polling for request ${requestId}`);
}

// Call Vbee API
async function callVbeeApi(text, maxRetries = 5) {
  const body = {
    app_id: APP_ID,
    input_text: text,
    voice_code: VOICE,
    audio_type: 'mp3',
    bitrate: 128,
    speed_rate: SPEED_RATE,
    response_type: 'direct',
  };

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch(VBEE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'App-Id': APP_ID,
      },
      body: JSON.stringify(body),
    });

    if (res.status >= 500 || res.status === 429) {
      if (attempt < maxRetries) {
        const backoff = Math.min(2000 * Math.pow(2, attempt), 30000);
        console.log(`  Rate limited/server error (${res.status}), waiting ${backoff}ms...`);
        await new Promise(r => setTimeout(r, backoff));
        continue;
      }
      throw new Error(`Vbee API error after ${maxRetries} retries: ${res.status}`);
    }

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Vbee API error: ${res.status} ${errText}`);
    }

    const data = await res.json();

    if (data.status !== 1) {
      throw new Error(`Vbee error: ${JSON.stringify(data)}`);
    }

    if (data.result?.status === 'SUCCESS' && data.result?.audio_link) {
      return data.result.audio_link;
    }

    if (data.result?.status === 'IN_PROGRESS' && data.result?.request_id) {
      return await pollViaCallback(data.result.request_id);
    }

    throw new Error(`Unexpected Vbee response: ${JSON.stringify(data)}`);
  }
}

// Merge all segment files into one MP3
function mergeSegments(segmentPaths, outputPath) {
  const listFile = join(TEMP_DIR, 'filelist.txt');
  const listContent = segmentPaths.map(p => `file '${p}'`).join('\n');
  writeFileSync(listFile, listContent, 'utf-8');

  execSync(
    `ffmpeg -y -f concat -safe 0 -i "${listFile}" -c:a libmp3lame -b:a 128k "${outputPath}"`,
    { stdio: 'pipe' }
  );
}

// Get MP3 duration
function getMp3Duration(filePath) {
  try {
    const output = execSync(
      `ffprobe -v quiet -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim();
    return parseFloat(output);
  } catch {
    return null;
  }
}

// Main
async function main() {
  console.log('Parsing content file...');
  const segments = parseContent(INPUT_FILE);

  const speechCount = segments.filter(s => s.type === 'speech').length;
  const pauseCount = segments.filter(s => s.type === 'pause').length;
  console.log(`Found ${segments.length} segments: ${speechCount} speech, ${pauseCount} pauses`);

  mkdirSync(TEMP_DIR, { recursive: true });

  const segmentPaths = [];

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const padded = String(i).padStart(4, '0');

    if (seg.type === 'pause') {
      const outPath = join(TEMP_DIR, `seg-${padded}-silence.mp3`);
      if (!existsSync(outPath)) {
        console.log(`[${i+1}/${segments.length}] Generating ${seg.duration}ms silence...`);
        generateSilence(outPath, seg.duration);
      } else {
        console.log(`[${i+1}/${segments.length}] Silence exists, skipping.`);
      }
      segmentPaths.push(outPath);
    } else {
      const outPath = join(TEMP_DIR, `seg-${padded}.mp3`);
      if (!existsSync(outPath)) {
        const preview = seg.text.substring(0, 60) + (seg.text.length > 60 ? '...' : '');
        console.log(`[${i+1}/${segments.length}] TTS: "${preview}"`);
        const audioLink = await callVbeeApi(seg.text);
        await downloadAudio(audioLink, outPath);
        // Rate limit delay before next speech segment
        if (i < segments.length - 1) {
          await new Promise(r => setTimeout(r, 1500));
        }
      } else {
        console.log(`[${i+1}/${segments.length}] Speech segment exists, skipping.`);
      }
      segmentPaths.push(outPath);
    }
  }

  console.log('\nMerging all segments...');
  mergeSegments(segmentPaths, OUTPUT_FILE);

  const duration = getMp3Duration(OUTPUT_FILE);
  const minutes = Math.floor(duration / 60);
  const seconds = Math.round(duration % 60);
  console.log(`\nDone! Output: ${OUTPUT_FILE}`);
  console.log(`Duration: ${minutes}m ${seconds}s (${Math.round(duration)}s total)`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
