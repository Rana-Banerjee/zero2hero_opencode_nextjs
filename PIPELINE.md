# PIPELINE.md — Content & Audio Pipeline

## Overview

Lesson content is generated in two separate, sequential stages. They are kept separate
so content can be reviewed and corrected before any API calls are made for audio.

```
Stage 1 — Content Agent (OpenCode)
  Input:  a topic name + format (e.g. "directions" phrases, "auto-driver" conversation)
  Output: updated src/data/lessons.ts and one of:
          - src/data/vocab.ts    (for VocabItem[])
          - src/data/phrases.ts  (for Phrase[])
          - src/data/mcq.ts      (for McqQuestion[])
          with audioSrc paths following the convention
          audio/{lessonId}_{slug}.mp3

Stage 2 — Audio Script (Python)
  Input:  src/data/vocab.ts — reads kannadaScript and audioSrc
  Output: mp3 files written to public/audio/
  How:    Python script using gTTS with lang='kn'
          skips files that already exist — safe to rerun
```

Never run Stage 2 before Stage 1 content has been reviewed. Generating audio for
incorrect romanisation wastes API quota and produces files that must be deleted
and regenerated.

---

## Stage 1 — Content Agent

The Content Agent is an OpenCode agent that follows the instructions in
`CONTENT_AGENT.md`. Invoked manually per topic.

**How to invoke in OpenCode:**
```
Add a new lesson on the topic of "directions" following CONTENT_AGENT.md
```

**What it produces:**
- A new entry in the `lessons` array in `src/data/lessons.ts` (with `format` field)
- Content in the appropriate data file based on format:
  - `src/data/vocab.ts` — VocabItem[] (all formats include vocab)
  - `src/data/phrases.ts` — Phrase[] (for "phrases" and "conversation" formats)
  - `src/data/mcq.ts` — McqQuestion[] (for "mcq" format)
- The lesson ID added to the corresponding lookup map
- All `audioSrc` fields set to the correct path convention

**Review checklist before running Stage 2:**
- [ ] Romanisation reads naturally for an English speaker
- [ ] English translations are accurate
- [ ] All `id` fields follow the `{lessonId}-{slug}` convention
- [ ] All `audioSrc` paths follow `audio/{lessonId}_{slug}.mp3` convention
- [ ] Lesson appears correctly at `/learn/{lessonId}` in `pnpm dev`

---

## Stage 2 — Audio Generation Script

A Python script at `tools/generate_audio.py` that reads `kannadaScript` and
`audioSrc` from all data files (`vocab.ts`, `phrases.ts`, `mcq.ts`) and generates
mp3 files using gTTS.

### Setup (one time)

```bash
pip install gtts
```

No API key, no billing, no account required.

### Example gTTS usage

```python
from gtts import gTTS
tts = gTTS("ನಿನ್ನ ಹೆಸರು ಏನು", lang='kn')
tts.save("output.mp3")
```

### Running the script

```bash
python3 tools/generate_audio.py
```

The script:
1. Reads `kannadaScript` and `audioSrc` from `src/data/vocab.ts`, `src/data/phrases.ts`, and `src/data/mcq.ts`
2. Deduplicates by audioSrc across all files
3. Skips any file that already exists in `public/audio/`
3. For each missing file, calls gTTS with `lang='kn'` and the `kannadaScript` text
4. Saves the mp3 to the `audioSrc` path under `public/`
5. Logs a summary: generated / skipped / failed

---

## File naming convention

All audio files follow this pattern — enforced by the Content Agent:

```
public/audio/{lessonId}_{phrase-slug}.mp3
```

Examples:
```
public/audio/greetings_namaskara.mp3
public/audio/greetings_namaskara-helidru.mp3
public/audio/directions_edakke-hogi.mp3
```

Rules: always lowercase · hyphens within slug · underscore between lessonId and slug · no spaces

---

## Adding a new lesson end-to-end

```
1. pnpm dev                                  # confirm site is running
2. Tell OpenCode: "Add lesson: {topic}"      # Content Agent runs
3. Review generated content in src/data/
4. Check /learn/{lessonId} in the browser
5. Correct any romanisation or translation issues
6. python3 tools/generate_audio.py         # generates mp3s for new entries only
7. Verify audio plays in the browser          # [TODO: audio player not built yet]
8. Commit: "feat: add {topic} lesson with audio"
```

---

## Content status tracker

Update this table as you work through topics.

| Lesson ID          | Content | Reviewed | Audio |
|--------------------|---------|----------|-------|
| greetings          | ✅      | ✅       | ⬜    |
| introductions      | ✅      | ✅       | ⬜    |
| yes-no-maybe       | ✅      | ✅       | ⬜    |
| numbers-one-to-ten | ✅      | ⬜       | ⬜    |
| food-and-drink     | ✅      | ⬜       | ⬜    |

Legend: ✅ done · ⬜ pending · 🔄 in progress
