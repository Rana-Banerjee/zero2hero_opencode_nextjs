# CONTEXT.md — Current Project Snapshot

> This file is the single source of truth for where the project is right now.
> It is **replaced** (not appended) at the end of every session — by the agent or manually.
> Keep it short. Its job is to restore context in a new session with minimal tokens.

---

## Status

**Current milestone:** Lesson format system with filtering implemented
**Currently working on:** Multi-format architecture (phrases / conversation / MCQ) with level × format filtering
**Last updated:** 2026-03-22

---

## What's Done

### Project Setup & Build
- [X] Phase 1 Step 1 — Scaffold & Configure
- [X] Phase 1 Step 2 — Root Layout & Dark Theme
- [X] Phase 2 Step 3 — Route Groups & Navigation
- [X] Phase 2 Step 4 — Lesson Data Layer
- [X] Phase 2 Step 5 — Dynamic Routes & Lesson Pages

### Audio Playback
- [X] AudioPlayer client component (play/pause with SVG icons)
- [X] Audio playback on lesson pages for vocab and phrases

### Kannada Script Display
- [X] `kannadaScript` displayed alongside romanised text on all lesson pages
- [X] `kannadaScript` added to Lesson type and all lesson data
- [X] `lang="kn"` on all elements displaying Kannada script

### Lesson Format System
- [X] `LessonFormat` type: "phrases" | "conversation" | "mcq"
- [X] `format` field added to Lesson interface and all lesson data
- [X] `McqOption` and `McqQuestion` types
- [X] `speaker?` optional field on Phrase (for conversation format)
- [X] Split vocab.ts into vocab.ts + phrases.ts
- [X] Created mcq.ts with sample MCQ data (greetings, yes/no quizzes)
- [X] `getLessonsByFilter(level?, format?)` helper in lessons.ts

### Components
- [X] `VocabSection` — extracted, shared across all formats
- [X] `PhrasesSection` — standalone phrases rendering
- [X] `ConversationSection` — chat-style with speaker badges + turn numbers
- [X] `McqSection` — interactive quiz with answer checking (use client)
- [X] `FilterBar` — reusable filter pill row (Server Component)
- [X] `AudioPlayer` — play/pause button component

### Filtering
- [X] `/learn` page with URL-based filtering via searchParams
- [X] Two filter bars: Level (All/Beginner/Intermediate/Advanced) + Format (Phrases/Conversation/MCQ)
- [X] Default format: "phrases"
- [X] Lesson cards show both level and format badges

### Existing Lessons
- `greetings` — beginner, phrases — 6 vocab, 2 phrases
- `introductions` — beginner, phrases — 6 vocab, 1 phrase
- `yes-no-maybe` — beginner, phrases — 6 vocab, 2 phrases
- `numbers-one-to-ten` — beginner, phrases — 10 vocab, 2 phrases
- `food-and-drink` — beginner, phrases — 8 vocab, 3 phrases
- `greetings-mcq` — beginner, mcq — 6 vocab, 4 questions
- `yes-no-maybe-mcq` — beginner, mcq — 6 vocab, 2 questions
- `auto-driver` — intermediate, conversation — 10 vocab, 12 dialogue turns
- `house-help` — intermediate, conversation — 10 vocab, 12 dialogue turns

### Docs Updated
- [X] AGENTS.md — format system, content pipeline
- [X] PROJECT.md — milestones, architecture decisions
- [X] PIPELINE.md — multi-file data structure
- [X] CONTENT_AGENT.md — format-aware generation instructions

---

## What's Next

1. Create conversation lesson content (auto driver, fruit vendor, house help)
2. Intermediate lessons with conversation format
3. Generate audio for MCQ questions and new content
4. Phase 3 Step 6 — UI Component Library (Button, Card, Badge primitives)
5. Progress tracking via Supabase

---

## Architecture Notes

- Each lesson has exactly one `format` — the detail page switches renderer based on it
- Vocab section appears on ALL formats
- Data files are split by content type: vocab.ts, phrases.ts, mcq.ts
- Filter state lives in URL (`?level=beginner&format=phrases`) — no client state
- McqSection is the only `"use client"` lesson component (tracks selected answers)
- `ConversationSection` reuses Phrase type with optional `speaker` field
- `pnpm typecheck` and `pnpm lint` both pass clean

---

## How to Start a New Session

Paste the following into OpenCode at the start of every session:

```
Read AGENTS.md and CONTEXT.md. Do not begin any task until you confirm
you understand the current project state.
```
