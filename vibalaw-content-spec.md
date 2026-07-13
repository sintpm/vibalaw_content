# Vibalaw Content — Specification

**Version:** 1.2
**Ngày:** 2026-07-13
**BA:** AI Agent
**Status:** 🟡 Chờ confirm

---

## 1. Tổng quan

### 1.1. Mục đích

Xây dựng hệ thống sản xuất nội dung pháp luật đa nền tảng cho thương hiệu **Vibalaw**, bao gồm video ngắn, video dài và podcast. Mục tiêu là trở thành nguồn kiến thức pháp luật đáng tin cậy, dễ hiểu cho người Việt — từ TikTok 60 giây đến podcast 20 phút.

### 1.2. Đối tượng người dùng

- **Primary:** Người Việt 22-45 tuổi, gặp vấn đề pháp lý đời thường (đất đai, ly hôn, lao động, mua bán online...), không có kiến thức luật chuyên sâu
- **Secondary:** Sinh viên luật, người quan tâm tin tức pháp luật, người kinh doanh nhỏ cần hiểu luật liên quan

### 1.3. Mục tiêu

- Xây dựng 3 kênh nội dung có bản sắc riêng biệt trên mỗi nền tảng
- Đạt 100 bài content gốc trong giai đoạn đầu (đang có 13/100)
- Tối đa hoá khả năng tái sử dụng nội dung (1 bài gốc → nhiều format, nhiều nền tảng)
- Xây dựng uy tín thương hiệu Vibalaw trên các nền tảng số

---

## 2. Hệ thống 3 kênh

### 2.1. Định nghĩa kênh

| # | Kênh | Viết tắt | Định vị | Giọng điệu |
|---|------|:--------:|---------|-------------|
| 1 | **Sổ Tay Luật** | STL | Tin tức & kiến thức luật | Chính thống, rõ ràng, số liệu cụ thể. Giọng "người giải thích luật" |
| 2 | **Góc Luật Đời Thường** | GLDT | Kịch bản tình huống thực tế | Gần gũi, có drama, kể chuyện. Giọng "bạn bè tư vấn" |
| 3 | **Luật Sư Kể Chuyện** | LSKC | Câu chuyện nghề & case study | Sâu sắc, trải nghiệm, cảm xúc. Giọng "luật sư chia sẻ" |

### 2.2. Phân biệt chi tiết

| Yếu tố | STL | GLDT | LSKC |
|---------|-----|------|------|
| **Mở đầu** | Đi thẳng vào quy định/vấn đề | "Hãy tưởng tượng bạn..." | "Có một vụ việc khiến tôi nhớ mãi..." |
| **Cấu trúc** | Quy định → giải thích → lưu ý | Tình huống → phân tích → xử lý → bài học | Bối cảnh → diễn biến → kết quả → bài học |
| **Ví dụ** | Con số, so sánh, mức phạt | Kịch bản: "Anh A mua đất..." | Case thật (ẩn danh): "Có khách hàng đến..." |
| **Hook** | Số liệu gây sốc, thay đổi ảnh hưởng túi tiền | "Bạn sẽ làm gì nếu...?" | "Vụ việc này tưởng đơn giản..." |
| **Nguồn content** | AI research + văn bản pháp luật | AI + sáng tạo kịch bản | Luật sư thật kể/cung cấp case |
| **Tần suất** | 5-7 bài/tuần (dễ sản xuất) | 3-4 bài/tuần (cần kịch bản) | 2-3 bài/tuần (phụ thuộc nguồn chuyện) |
| **Tiềm năng viral** | Trung bình (hữu ích) | Cao (drama, tình huống) | Cao (cảm xúc, độc đáo) |

### 2.3. Phân bổ nội dung hiện có theo kênh

Mỗi kênh có file tracking và thư mục content riêng:

| Kênh | File tracking | Thư mục | Số chủ đề | Ghi chú |
|------|--------------|---------|:---------:|---------|
| **STL** | `podcast_list_stl.md` | `content/stl/<slug>/` | 52 | Nhiều nhất — kiến thức, quy định, lao động |
| **GLDT** | `podcast_list_gldt.md` | `content/gldt/<slug>/` | 48 | Tình huống, kịch bản, TMĐT |
| **LSKC** | `podcast_list_lskc.md` | `content/lskc/<slug>/` | 17 | Case study, câu chuyện nghề |

> Một số chủ đề trùng slug giữa các kênh nhưng góc tiếp cận khác nhau. Mỗi kênh sản xuất độc lập.

---

## 3. Nền tảng phân phối

### 3.1. Ma trận nền tảng × kênh

| Nền tảng | STL | GLDT | LSKC | Format chính | Ghi chú |
|----------|:---:|:----:|:----:|-------------|---------|
| **TikTok** | ✅ | ✅ | ✅ | Video ngắn 30-90s | Nền tảng chính, reach cao nhất |
| **YouTube** | ✅ | ✅ | ✅ | Shorts + Long-form | Shorts tái sử dụng từ TikTok, Long-form cho bài sâu |
| **Facebook** | ✅ | ✅ | ✅ | Reels + Video | Đối tượng 30-50 tuổi, share cao |
| **Instagram** | ✅ | ✅ | ❌ | Reels | Trẻ hơn, visual-first |
| **Threads** | ✅ | ✅ | ✅ | Text + link video | Dạng thread giải thích, dẫn link video |
| **Zalo Video** | ✅ | ✅ | ✅ | Video ngắn | Đối tượng 35+, ít cạnh tranh, tin tưởng cao |
| **Spotify** | ✅ | ✅ | ✅ | Podcast audio | Audio dài 3-20 phút |
| **Apple Podcasts** | ✅ | ✅ | ✅ | Podcast audio | Cùng feed với Spotify |

### 3.2. Chi tiết từng nền tảng

#### TikTok — Nền tảng chính

- **3 tài khoản riêng biệt** — mỗi kênh 1 tài khoản
- **Format:** Video dọc 9:16, 30-90 giây
- **Đặc thù:** Hook 3 giây đầu quyết định, trending audio, text overlay
- **Tần suất:** STL 5-7/tuần, GLDT 3-4/tuần, LSKC 2-3/tuần
- **Cross-promotion:** Cuối video dẫn sang kênh khác

#### YouTube — Nền tảng chiều sâu

- **3 kênh riêng biệt** hoặc **1 kênh chung với playlist riêng** (đề xuất: 1 kênh chung giai đoạn đầu, tách sau khi đủ subscriber)
- **Shorts:** Tái sử dụng từ TikTok (cùng video, thêm watermark YouTube)
- **Long-form (5-15 phút):** Ghép nhiều bài cùng chủ đề, hoặc bản đầy đủ của podcast
- **Tần suất Shorts:** Tương đương TikTok. Long-form: 1-2 video/tuần
- **SEO:** Title + description chuẩn SEO, đây là nền tảng search mạnh

#### Meta (Facebook + Instagram + Threads)

**Facebook:**
- **3 Fanpage riêng biệt** — hoặc 1 Fanpage chung "Vibalaw" + 3 series
- **Reels:** Tái sử dụng từ TikTok
- **Post kèm video:** Bài viết ngắn + video embed, người dùng 30-50 tuổi thích đọc + xem
- **Nhóm (Group):** Cân nhắc tạo group "Hỏi đáp pháp luật — Vibalaw" để build community
- **Tần suất:** Reels theo TikTok, thêm 2-3 post text/tuần

**Instagram:**
- **1 tài khoản @vibalaw** — Reels là chính
- **Reels:** Tái sử dụng TikTok (STL + GLDT, bỏ LSKC vì đối tượng trẻ hơn, ít quan tâm nghề luật)
- **Carousel:** Infographic tóm tắt quy định (STL) — 5-7 slide
- **Tần suất:** 4-5 Reels/tuần + 1-2 Carousel/tuần

**Threads:**
- **1 tài khoản @vibalaw** — linked với Instagram
- **Format:** Thread 5-10 đoạn giải thích 1 vấn đề pháp lý, kèm link video
- **Tần suất:** 3-4 thread/tuần

#### Zalo Video

- **1 Zalo OA "Vibalaw"** — tất cả 3 kênh chung
- **Video ngắn:** Tái sử dụng từ TikTok
- **Đặc thù:** Đối tượng 35+, tin tưởng Zalo hơn TikTok, tỷ lệ chuyển đổi tư vấn cao
- **Tần suất:** 3-5 video/tuần (chọn lọc bài hay nhất từ TikTok)

#### Podcast (Spotify + Apple Podcasts)

- **3 show riêng biệt** hoặc **1 show "Vibalaw" với 3 series** (đề xuất: 1 show, 3 series)
- **Format:** Audio MP3, 3-20 phút
- **Single episode:** 3-6 phút (từ bài content đơn)
- **Multi-part episode:** 4-5 phút/phần × 2-4 phần (từ bài tổng hợp)
- **Compilation episode:** 15-20 phút, ghép 3-4 bài cùng chủ đề thành 1 tập dài
- **Tần suất:** 3-5 episode/tuần
- **Đã có sẵn:** Pipeline TTS Vbee trong skill vibalaw-audio, giọng đọc riêng theo kênh:
  - STL: Mạnh Dũng (nam, Bắc, giọng tin tức)
  - GLDT: Mona Phạm (nữ, Nam, giọng story)
  - LSKC: Bảo Trung (nam, Bắc, giọng kể chuyện)

---

## 4. Định dạng video

### 4.1. Phân loại format sản xuất

| Format | Mô tả | Kênh phù hợp | Nền tảng | Chi phí | Tần suất |
|--------|--------|:------------:|----------|:-------:|----------|
| **AI Video** | Text-to-video, AI voiceover + hình minh hoạ AI/stock | STL, GLDT | TikTok, YT Shorts, Reels | Thấp | Chính — 70% nội dung |
| **Tự quay** | Luật sư/MC nói trước camera, có kịch bản | LSKC, GLDT | TikTok, YouTube, Facebook | Trung bình | Bổ sung — 20% nội dung |
| **Podcast video** | Ghi hình buổi podcast, cắt clip hay | LSKC | YouTube, Spotify Video | Trung bình | Bổ sung — 10% nội dung |

### 4.2. Chi tiết từng format

#### Format 1: AI Video (chính — 70%)

**Quy trình:**
```
Content .md → AI voiceover (Vbee TTS) → AI hình minh hoạ + text overlay → Render video
```

**Đặc điểm:**
- Giọng đọc: Vbee TTS — giọng riêng theo kênh (STL: Mạnh Dũng, GLDT: Mona Phạm, LSKC: Bảo Trung)
- Hình ảnh: Stock video/ảnh + AI generated + text overlay
- Text overlay: Hiển thị điểm chính, số liệu, thuật ngữ
- Template cố định cho mỗi kênh (branding nhất quán)
- Thời lượng: 30-90 giây (TikTok/Shorts/Reels), 3-6 phút (YouTube/Podcast)

**Ưu điểm:**
- Sản xuất nhanh, chi phí thấp, scale được
- Đã có pipeline content → audio trong skill vibalaw-audio
- Không phụ thuộc lịch quay, con người

**Hạn chế:**
- Thiếu yếu tố con người → khó build trust cá nhân
- Giọng TTS chưa tự nhiên 100% — cải thiện dần

**Cần bổ sung:**
- Pipeline: audio → video (hiện chỉ có content → audio)
- Template video cho mỗi kênh (intro, outro, text overlay style)
- Thư viện hình ảnh/video stock theo chủ đề pháp luật

#### Format 2: Tự quay (bổ sung — 20%)

**Quy trình:**
```
Kịch bản → Luật sư/MC quay → Edit → Cắt clip ngắn cho TikTok
```

**Đặc điểm:**
- Người thật nói trước camera (talking head)
- Kịch bản có sẵn từ content .md, điều chỉnh cho tự nhiên
- Quay bằng điện thoại + ring light + mic lavalier — setup đơn giản
- 1 buổi quay (2-3 giờ) → 5-10 video ngắn

**Ưu điểm:**
- Xây trust cá nhân, người xem thấy "con người thật"
- Engagement cao hơn AI video
- Phù hợp nhất cho kênh LSKC

**Hạn chế:**
- Phụ thuộc lịch quay + người quay
- Cần luật sư/MC sẵn sàng lên hình
- Edit tốn thời gian hơn

**Giai đoạn triển khai:** Phase 2 (sau khi kênh đã có nội dung AI ổn định)

#### Format 3: Podcast Video (bổ sung — 10%)

**Quy trình:**
```
Kịch bản → Ghi hình podcast (2 camera) → Episode dài → Cắt clip highlight
```

**Đặc điểm:**
- 2 người: host + luật sư khách mời (hoặc 1 luật sư kể chuyện)
- Ghi hình buổi nói chuyện 15-30 phút
- Cắt thành 5-8 clip ngắn 60-90s cho TikTok
- Upload full episode lên YouTube + Spotify

**Ưu điểm:**
- 1 buổi ghi → rất nhiều content (1 episode dài + 5-8 clip ngắn)
- Xây authority cho thương hiệu
- Định dạng phổ biến, đang trend

**Hạn chế:**
- Setup phức tạp hơn (2 camera, mic, phòng quay)
- Cần khách mời hoặc luật sư partner
- Tần suất thấp (1-2 episode/tháng)

**Giai đoạn triển khai:** Phase 3

---

## 5. Pipeline sản xuất nội dung

### 5.1. Nguyên tắc "1 content gốc → N output"

```
                    ┌─────────────────────────────────┐
                    │     CONTENT GỐC (.md)           │
                    │  Research → Viết bài 700-1200 từ │
                    └──────────────┬──────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
     ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
     │  AUDIO (3-6')  │  │ VIDEO NGẮN     │  │ TEXT POST      │
     │  Podcast MP3   │  │ 30-90s clip    │  │ Thread/Post    │
     └───────┬────────┘  └───────┬────────┘  └───────┬────────┘
             │                   │                   │
     ┌───────┴────────┐  ┌──────┴─────────┐  ┌──────┴─────────┐
     │ Spotify        │  │ TikTok         │  │ Threads        │
     │ Apple Podcasts │  │ YT Shorts      │  │ Facebook Post  │
     │ YouTube (audio)│  │ IG Reels       │  │ Zalo Article   │
     └────────────────┘  │ FB Reels       │  └────────────────┘
                         │ Zalo Video     │
                         └────────────────┘
```

**Từ 1 bài content gốc, tạo ra:**
1. **1 audio podcast** (3-6 phút) → Spotify, Apple, YouTube audio
2. **1-3 video ngắn** (30-90 giây) → TikTok, Shorts, Reels, Zalo
3. **1 text post** → Threads, Facebook, Zalo article
4. **1 carousel** (nếu phù hợp) → Instagram

### 5.2. Workflow sản xuất hàng tuần

#### Batch production — sản xuất theo đợt

```
Thứ 2: Research + viết 5-7 bài content gốc (AI)
Thứ 3: Review content → Audio-convert → Tạo audio (AI)
Thứ 4: Tạo video từ audio (AI video) → Review
Thứ 5: Đăng tải batch 1 (TikTok, Shorts, Reels)
Thứ 6: Đăng tải batch 2 + text posts (Facebook, Threads, Zalo)
Thứ 7-CN: Quay video thật (nếu có lịch) + chuẩn bị tuần sau
```

#### Lịch đăng bài tuần mẫu

| Ngày | STL | GLDT | LSKC |
|------|-----|------|------|
| T2 | 1 bài TikTok/Shorts | 1 bài TikTok/Shorts | — |
| T3 | 1 bài TikTok/Shorts | — | 1 bài TikTok (video thật) |
| T4 | 1 bài TikTok/Shorts | 1 bài TikTok/Shorts | — |
| T5 | 1 bài TikTok/Shorts | 1 bài TikTok/Shorts | 1 bài TikTok |
| T6 | 1 bài TikTok/Shorts | — | — |
| T7 | — | 1 bài TikTok/Shorts | 1 bài TikTok (video thật) |
| CN | 1 bài TikTok/Shorts | — | — |
| **Tổng** | **5-7** | **3-4** | **2-3** |

> Podcast episodes đăng 3-5 lần/tuần trên Spotify/Apple, ghép từ audio đã có.

### 5.3. Quy trình sản xuất chi tiết (AI Video)

```
Step 1: Chọn chủ đề từ podcast_list_<kênh>.md
        → Xác định kênh (STL/GLDT/LSKC)
        │
Step 2: Research + viết content gốc (.md)
        → Dùng skill vibalaw-audio
        → Điều chỉnh giọng điệu theo kênh
        │
Step 3: Audio-convert + validate độ dài
        → TTS Vbee → MP3
        │
Step 4: Tạo video từ audio
        → AI hình minh hoạ + text overlay
        → Template theo kênh (màu sắc, intro, outro)
        │
Step 5: Cắt clip ngắn 30-90s cho video ngắn
        → Chọn đoạn hook nhất
        → Thêm subtitle + text overlay
        │
Step 6: Đăng tải + tracking
        → Cập nhật podcast_list_<kênh>.md
        → Metadata cho từng nền tảng
        │
Step 7: Đo lường + tối ưu
        → View, engagement, save, share
        → Điều chỉnh content tuần sau
```

---

## 6. Branding theo kênh

### 6.1. Visual identity

| Yếu tố | STL | GLDT | LSKC |
|---------|-----|------|------|
| **Màu chủ đạo** | Xanh navy + trắng | Xanh lá + vàng ấm | Nâu đất + gold |
| **Tone** | Professional, clean | Friendly, warm | Premium, trust |
| **Icon/Logo** | Cuốn sổ + biểu tượng luật | Người + dấu hỏi | Ghế luật sư + micro |
| **Font chữ overlay** | Sans-serif, bold | Rounded, friendly | Serif, elegant |
| **Intro video** | 2s — logo + "Sổ Tay Luật" | 2s — logo + "Góc Luật Đời Thường" | 2s — logo + "Luật Sư Kể Chuyện" |

### 6.2. Naming convention trên nền tảng

| Nền tảng | STL | GLDT | LSKC |
|----------|-----|------|------|
| **TikTok** | @sotayluat.vibalaw | @gocluatdoithuong.vibalaw | @luatsukeChuyện.vibalaw |
| **YouTube** | Vibalaw — Sổ Tay Luật (playlist) | Vibalaw — Góc Luật Đời Thường (playlist) | Vibalaw — Luật Sư Kể Chuyện (playlist) |
| **Facebook** | Fanpage: Vibalaw (1 page, 3 series) | — | — |
| **Instagram** | @vibalaw (1 account) | — | — |
| **Zalo** | Vibalaw OA (1 OA) | — | — |
| **Podcast** | Vibalaw Podcast (1 show, 3 series) | — | — |

> **Chiến lược:** TikTok tách 3 tài khoản riêng (algorithm ưu tiên kênh chuyên biệt). Các nền tảng khác gom chung 1 tài khoản/page, dùng playlist/series phân loại.

### 6.3. Audio branding

Đã có sẵn trong skill vibalaw-audio:

**Giọng đọc riêng theo kênh** — tạo nhận diện âm thanh:

| Kênh | Giọng | Voice ID | Đặc điểm |
|------|-------|----------|----------|
| **STL** | Mạnh Dũng (Nam, Bắc) | `hn_male_manhdung_news_48k-fhg` | Giọng tin tức, chính thống, quyền uy |
| **GLDT** | Mona Phạm (Nữ, Nam) | `s_hochiminh_female_monaphamthanhthuy3773_story_vc` | Giọng story, gần gũi, ấm áp |
| **LSKC** | Bảo Trung (Nam, Bắc) | `n_hanoi_male_baotrungdoctruyen_story_vc` | Giọng kể chuyện, narrative, sâu sắc |

**Intro/outro phân biệt video vs podcast:**

| Platform | Intro | Outro | Vibalaw |
|----------|-------|-------|---------|
| **Video ngắn** (TikTok, Shorts, Reels) | KHÔNG dùng — đi thẳng vào hook | CTA tự nhiên (follow, save, share) | KHÔNG nhắc trong audio — chỉ hiện ở watermark, bio, description |
| **Podcast** (Spotify, Apple) | 8 câu random theo kênh (chỉ tên kênh, không nhắc Vibalaw) | 8 câu random theo kênh | Nhắc "Vi-ba-law" nhẹ 1 lần cuối outro |

> **Chiến lược branding:** Channel-first, không brand-first. Nội dung tự nhiên, không quảng cáo. Vibalaw chỉ xuất hiện ở: profile bio, description, watermark video, và soft mention cuối podcast.

**Cần bổ sung:**
- Jingle/nhạc nền ngắn (3-5 giây) cho mỗi kênh — tạo nhận diện âm thanh
- Sound effect chuyển đoạn (cho video)

---

## 7. Nội dung — Lĩnh vực pháp luật

### 7.1. Phân bổ theo lĩnh vực (tổng hợp 3 kênh)

| Lĩnh vực | STL | GLDT | LSKC | Content đã có |
|-----------|:---:|:----:|:----:|:------------:|
| Đất đai | 8 | 10 | 4 | 0 |
| Hôn nhân - Gia đình | 10 | 8 | 4 | 0 |
| Dân sự | 9 | 12 | 6 | 0 |
| Lao động | 14 | 8 | 1 | 0 |
| Hình sự | 4 | 6 | 2 | 0 |
| TMĐT / Công nghệ | 4 | 4 | 0 | 0 |
| Quy định mới (tổng hợp) | 3 | 0 | 0 | 0 |
| **Tổng** | **52** | **48** | **17** | **0** |

> 13 bài content cũ (thư mục gốc `content/<slug>/`) cần viết lại theo template kênh mới.

### 7.2. Quy tắc nội dung (từ skill vibalaw-audio)

- **Chính xác pháp lý là ưu tiên số 1** — sai con số, sai điều luật → mất uy tín
- **Web search BẮT BUỘC** cho văn bản pháp luật mới, mức phạt, con số cụ thể
- **Inverted Pyramid** — điểm quan trọng nhất lên đầu
- **Giọng có nhấn nhá** — không ngang ngang đọc văn bản, phải có nhịp, câu hỏi tu từ
- **Tiếng Việt thuần** — tránh thuật ngữ tiếng Anh
- **Trích dẫn 2 lớp:** content.md giữ đầy đủ số điều/khoản, audio-convert chỉ nêu tên luật
- **Audio 3-6 phút/file**, tối đa 1,200 từ
- **Disclaimer** trong content.md, KHÔNG đọc trong audio

### 7.3. Content format theo thời lượng

| Loại | Thời lượng | Dùng cho | Nền tảng |
|------|-----------|----------|----------|
| **Clip ngắn** | 30-60 giây | 1 ý chính, 1 hook, 1 kết luận | TikTok, Shorts, Reels |
| **Clip trung** | 60-90 giây | 1 tình huống + phân tích ngắn | TikTok, Shorts, Reels |
| **Audio ngắn** | 3-4 phút | Q&A, tin pháp luật | Podcast |
| **Audio trung** | 4-5 phút | Hướng dẫn, phân tích | Podcast |
| **Audio dài** | 5-6 phút | Pillar, tổng hợp | Podcast |
| **Video dài** | 8-15 phút | Phân tích sâu, ghép nhiều bài | YouTube long-form |
| **Compilation** | 15-20 phút | Ghép 3-4 bài cùng chủ đề | YouTube, Podcast |

---

## 8. Kế hoạch triển khai theo phase

### Phase 1 — Foundation (Tháng 1-2)

**Mục tiêu:** Hoàn thiện pipeline AI video, đăng bài đều trên TikTok + Podcast

**Việc cần làm:**
- [ ] Hoàn thành 50/100 bài content gốc (hiện có 13)
- [ ] Setup 3 tài khoản TikTok (STL, GLDT, LSKC)
- [ ] Setup 1 show podcast trên Spotify + Apple (3 series)
- [ ] Xây pipeline: content → audio → video ngắn (AI)
- [ ] Tạo template video cho mỗi kênh (intro, outro, overlay style)
- [ ] Đăng 10-14 video/tuần trên TikTok (tổng 3 kênh)
- [ ] Đăng 3-5 podcast episode/tuần

**KPI:**
- 50 bài content gốc
- 100+ video TikTok đã đăng
- 40+ podcast episodes

### Phase 2 — Expand (Tháng 3-4)

**Mục tiêu:** Mở rộng sang YouTube, Facebook, bắt đầu quay video thật

**Việc cần làm:**
- [ ] Hoàn thành 100/100 bài content gốc
- [ ] Setup kênh YouTube (1 kênh, 3 playlist)
- [ ] Repost Shorts từ TikTok → YouTube
- [ ] Setup Fanpage Facebook + bắt đầu Reels
- [ ] Tìm luật sư partner sẵn sàng lên hình
- [ ] Quay 2-4 video thật/tháng (LSKC + GLDT)
- [ ] Bắt đầu IG Reels + Threads

**KPI:**
- 100 bài content gốc
- Presence trên 5+ nền tảng
- 4-8 video quay thật

### Phase 3 — Scale (Tháng 5-6)

**Mục tiêu:** Podcast video, compilation, build community

**Việc cần làm:**
- [ ] Bắt đầu ghi hình podcast (1-2 episode/tháng)
- [ ] Tạo YouTube long-form (8-15 phút)
- [ ] Compilation episodes (ghép theo chủ đề)
- [ ] Setup Zalo OA + Zalo Video
- [ ] Facebook Group "Hỏi đáp pháp luật — Vibalaw"
- [ ] Phân tích data → tối ưu content theo performance

**KPI:**
- 2-4 podcast video episodes
- 4+ YouTube long-form
- Community group hoạt động

### Phase 4 — Optimize (Tháng 7+)

**Mục tiêu:** Tối ưu dựa trên data, mở rộng lĩnh vực, monetize

**Việc cần làm:**
- [ ] Phân tích top-performing content → sản xuất thêm chủ đề tương tự
- [ ] Mở rộng danh sách chủ đề (100 → 200)
- [ ] A/B test format, hook, thời lượng
- [ ] Cân nhắc monetize: tư vấn pháp lý, khóa học, affiliate
- [ ] Collab với creator pháp luật khác

---

## 9. Đánh giá & đề xuất tối ưu

### 9.1. Điểm mạnh hiện tại

- **Pipeline AI đã có:** Skill vibalaw-audio hoạt động tốt (content → audio-convert → TTS → MP3)
- **117 chủ đề đã lên danh sách** (STL: 52, GLDT: 48, LSKC: 17), mỗi kênh tracking riêng
- **13 bài content cũ** cần viết lại theo template kênh mới
- **Tracking system** tách riêng 3 file `podcast_list_stl.md`, `podcast_list_gldt.md`, `podcast_list_lskc.md`
- **Thư mục content tách theo kênh:** `content/stl/`, `content/gldt/`, `content/lskc/`
- **Giọng đọc riêng theo kênh:** 3 voice Vbee (Mạnh Dũng, Mona Phạm, Bảo Trung)

### 9.2. Gap cần bổ sung

| Gap | Mức độ | Đề xuất |
|-----|:------:|---------|
| **Chưa có pipeline audio → video** | Cao | Cần tool/workflow chuyển audio + text → video ngắn (CapCut, Canva Video, hoặc AI tool) |
| **Chưa có template video** | Cao | Thiết kế 3 bộ template (STL, GLDT, LSKC) — intro, outro, text overlay, màu sắc |
| **Chưa có subtitle tự động** | Trung bình | Tích hợp auto-caption (CapCut, Whisper) — TikTok ưu tiên video có subtitle |
| **Chưa có scheduling tool** | Trung bình | Dùng tool lên lịch đăng bài đa nền tảng (Later, Buffer, hoặc Meta Business Suite) |
| **Chưa có luật sư lên hình** | Trung bình | Tìm 1-2 luật sư partner cho LSKC — Phase 2 |
| **Chưa có jingle/nhạc nền** | Thấp | Tạo nhạc nhận diện ngắn cho mỗi kênh — Phase 2 |
| **Chưa tracking đa nền tảng** | Thấp | Bổ sung cột tracking cho YouTube, Facebook, Podcast trong các file podcast_list — hoặc dùng sheet riêng |

### 9.3. Đề xuất tối ưu nội dung

**1. Tái cấu trúc content cho đa format:**

Hiện content gốc viết cho audio 3-6 phút. Cần bổ sung:
- **Hook script** (30 giây) — trích đoạn gây tò mò nhất làm video ngắn
- **Key points** (3-5 bullet) — làm text post/carousel
- **Thread script** (5-10 đoạn ngắn) — cho Threads/X

→ Đề xuất: Bổ sung vào output structure của vibalaw-audio, thêm file `<slug>-short-scripts.md` chứa các format ngắn.

**2. Content pillar theo tuần:**

Mỗi tuần tập trung 1 lĩnh vực, tất cả 3 kênh cùng đề cập từ góc nhìn khác nhau:

```
Tuần "Đất đai":
  STL: "Tách thửa đất 2026 — quy định mới"
  GLDT: "Mua đất giấy tay, 3 năm sau mất trắng — vì sao?"
  LSKC: "Vụ tranh chấp đất 5 anh em — luật sư kể lại"
```

→ Tạo hiệu ứng cộng hưởng, cross-promotion tự nhiên.

**3. Evergreen vs Trending content:**

| Loại | Tỷ lệ | Ví dụ | Chiến lược |
|------|:-----:|-------|-----------|
| **Evergreen** | 70% | Thừa kế, ly hôn, mua đất | Sản xuất trước, đăng đều, SEO dài hạn |
| **Trending** | 30% | Luật mới hiệu lực, vụ việc hot | Sản xuất nhanh trong 24-48h, capitalize momentum |

**4. Repurpose matrix mở rộng:**

1 bài content gốc (ví dụ: "Mua đất chưa có sổ đỏ") có thể tạo ra:

| Output | Nền tảng | Ghi chú |
|--------|----------|---------|
| Video ngắn 60s — hook | TikTok, Shorts, Reels | Đoạn hay nhất |
| Video ngắn 90s — tình huống | TikTok (GLDT) | Kịch bản "Anh A mua đất..." |
| Audio podcast 5 phút | Spotify, Apple | Bài đầy đủ |
| Carousel 7 slides | Instagram | Infographic tóm tắt |
| Thread 8 đoạn | Threads | Giải thích step-by-step |
| Facebook post + video | Facebook | Bài viết + embed video |
| Zalo article | Zalo OA | Bài viết dài |

→ **1 content gốc = 7 outputs** trên 7+ nền tảng.

---

## 10. Rủi ro & giả định

### 10.1. Rủi ro

| Rủi ro | Impact | Mitigation |
|--------|:------:|------------|
| AI voice chưa tự nhiên → người xem bỏ qua | Cao | Cải thiện dần, pha trộn video thật 20-30% |
| Thông tin pháp lý sai → mất uy tín | Rất cao | Web search bắt buộc, disclaimer rõ ràng, review trước đăng |
| TikTok thay đổi algorithm → reach giảm | Trung bình | Đa nền tảng, không phụ thuộc 1 platform |
| Không tìm được luật sư lên hình | Trung bình | Phase 1 chạy 100% AI, tìm partner từ Phase 2 |
| Burn-out vì quá nhiều nền tảng | Trung bình | Batch production, repurpose tối đa, tập trung TikTok + Podcast trước |

### 10.2. Giả định

- Pipeline audio → video có thể xây bằng CapCut API hoặc tool AI tương đương
- Tài khoản TikTok mới có thể đạt reach organic nếu content tốt + đăng đều
- Giọng TTS Vbee đủ chất lượng cho video ngắn (30-90s thì chấp nhận được)
- 1 người (+ AI) có thể quản lý Phase 1 (TikTok + Podcast), cần thêm người từ Phase 2

---

## 11. Tổng hợp tài nguyên cần thiết

### Đã có

| Tài nguyên | Trạng thái |
|-----------|-----------|
| Skill vibalaw-audio (pipeline content → audio) | ✅ Hoạt động |
| 117 chủ đề đã phân loại kênh | ✅ 3 file: `podcast_list_stl.md`, `podcast_list_gldt.md`, `podcast_list_lskc.md` |
| 13 bài content cũ (cần rewrite) | ⚠️ Trong `content/<slug>/` — cần chuyển sang thư mục kênh |
| TTS Vbee (3 giọng: Mạnh Dũng, Mona Phạm, Bảo Trung) | ✅ API key sẵn |
| Telegram bot gửi content | ✅ Trong skill |
| Thư mục content theo kênh | ✅ `content/stl/`, `content/gldt/`, `content/lskc/` |
| Tracking system | ✅ 3 file riêng theo kênh |

### Cần xây thêm

| Tài nguyên | Ưu tiên | Phase |
|-----------|:-------:|:-----:|
| Pipeline audio → video ngắn | P0 | 1 |
| 3 bộ template video (STL, GLDT, LSKC) | P0 | 1 |
| 3 tài khoản TikTok | P0 | 1 |
| 1 show Podcast (Spotify + Apple) | P0 | 1 |
| Kênh YouTube | P1 | 2 |
| Fanpage Facebook | P1 | 2 |
| Scheduling tool | P1 | 2 |
| Luật sư partner lên hình | P1 | 2 |
| Instagram + Threads | P2 | 2 |
| Zalo OA | P2 | 3 |
| Jingle/nhạc nền | P2 | 2 |
| Pipeline podcast video | P3 | 3 |

---

## 12. Glossary

| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| Content gốc | File .md chứa nội dung bài viết đầy đủ, dùng làm nguồn cho mọi format |
| Audio-convert | File .md đã chuyển đổi format cho TTS đọc (bỏ metadata, heading, thêm pause) |
| Hook | 3 giây đầu tiên video / câu đầu tiên audio, quyết định người xem có tiếp tục không |
| Repurpose | Tái sử dụng 1 nội dung gốc thành nhiều format khác nhau cho nhiều nền tảng |
| Batch production | Sản xuất hàng loạt theo đợt thay vì làm từng bài |
| Evergreen content | Nội dung không bị lỗi thời, hữu ích lâu dài |
| Trending content | Nội dung theo thời sự, cần sản xuất nhanh |
| STL | Sổ Tay Luật — kênh kiến thức & cập nhật |
| GLDT | Góc Luật Đời Thường — kênh tình huống thực tế |
| LSKC | Luật Sư Kể Chuyện — kênh câu chuyện nghề |

---

## 13. Changelog

| Version | Ngày | Thay đổi | Author |
|---------|------|----------|--------|
| 1.0 | 2026-07-13 | Initial draft | AI Agent |
| 1.1 | 2026-07-13 | Cập nhật: giọng đọc riêng theo kênh (STL: Mạnh Dũng, GLDT: Mona Phạm, LSKC: Bảo Trung), branding tự nhiên (không nhắc Vibalaw trong video, soft mention cuối podcast) | AI Agent |
| 1.2 | 2026-07-13 | Tách tracking thành 3 file riêng (`podcast_list_stl/gldt/lskc.md`), thư mục content theo kênh (`content/stl/`, `content/gldt/`, `content/lskc/`), cập nhật số liệu chủ đề (117 tổng: STL 52, GLDT 48, LSKC 17), 13 bài cũ cần rewrite | AI Agent |

---

**Signoff:**
- [ ] Đã đọc và đồng ý
- [ ] Ngày confirm: ________
- [ ] Tên người confirm: ________
