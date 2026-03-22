# CONTEXT.md — Current Project Snapshot

> This file is the single source of truth for where the project is right now.
> It is **replaced** (not appended) at the end of every session — by the agent or manually.
> Keep it short. Its job is to restore context in a new session with minimal tokens.

---

## Status

**Current milestone:** Multi-format lesson system with audio playback — complete
**Currently working on:** Consolidating completed work, documenting state for handoff
**Last updated:** 2026-03-22

---

## What's Done

### Project Setup & Build
- [X] Phase 1 Step 1 — Scaffold & Configure (Next.js 16, React 19, Tailwind v4)
- [X] Phase 1 Step 2 — Root Layout & Dark Theme (`@custom-variant dark`)
- [X] Phase 2 Step 3 — Route Groups & Navigation
- [X] Phase 2 Step 4 — Lesson Data Layer
- [X] Phase 2 Step 5 — Dynamic Routes & Lesson Pages

### Lesson Format System
- [X] `LessonFormat` type: "phrases" | "conversation" | "mcq"
- [X] `format` field on all lessons
- [X] `McqOption`, `McqQuestion` types in `src/types/lesson.ts`
- [X] `speaker?` optional field on `Phrase` (backward compatible)
- [X] Data split: `vocab.ts`, `phrases.ts`, `mcq.ts` with lookup helpers

### Components
- [X] `VocabSection` — shared across all formats
- [X] `PhrasesSection` — standalone phrases
- [X] `ConversationSection` — chat-style timeline, speaker badges, turn numbers
- [X] `McqSection` — interactive quiz (only `"use client"` lesson component)
- [X] `FilterBar` — reusable filter pill row (Server Component)
- [X] `AudioPlayer` — play/pause with SVG icons, useRef, aria-label

### Pages & Filtering
- [X] `/learn` — level × format filtering via URL searchParams
- [X] `/learn/[lessonId]` — format-based rendering switch
- [X] Lesson cards show level + format badges

### Audio
- [X] AudioPlayer integrated on lesson detail pages (vocab + phrases)
- [X] `tools/generate_audio.py` — reads all 3 data files, brace-depth parser, deduplicates by audioSrc

### Kannada Script Display
- [X] `kannadaScript` on every Lesson, VocabItem, Phrase, McqOption
- [X] `lang="kn"` on all elements displaying Kannada script
- [X] Displayed on lesson index, detail, landing page, about page

### All 9 Lessons with Audio (96 audio files in `public/audio/`)
- `greetings` — beginner, phrases — 6 vocab, 2 phrases
- `introductions` — beginner, phrases — 6 vocab, 1 phrase
- `yes-no-maybe` — beginner, phrases — 6 vocab, 2 phrases
- `numbers-one-to-ten` — beginner, phrases — 10 vocab, 2 phrases
- `food-and-drink` — beginner, phrases — 8 vocab, 3 phrases
- `greetings-mcq` — beginner, mcq — 6 vocab, 4 questions
- `yes-no-maybe-mcq` — beginner, mcq — 6 vocab, 2 questions
- `auto-driver` — intermediate, conversation — 10 vocab, 12 dialogue turns
- `house-help` — intermediate, conversation — 10 vocab, 12 dialogue turns

### Documentation
- [X] AGENTS.md, PROJECT.md, PIPELINE.md, CONTEXT.md, CONTENT_AGENT.md all current

---

## What's Next

1. **Phase 3 Step 6 — UI Component Library** — Button, Card, Badge primitives in `src/components/ui/`
2. **Progress tracking** — Supabase integration for user progress
3. **More conversation lessons** — fruit vendor, teacher (follow CONTENT_AGENT.md workflow)

---

## Architecture Notes

- Next.js 16, React 19, Tailwind v4 (CSS-first config, no `tailwind.config.ts`)
- App Router exclusively, React Server Components by default
- Brand tokens only: `brand-yellow`, `brand-amber`, `brand-orange`, `brand-deep`
- Filter state in URL (`?level=beginner&format=phrases`), not client state
- `ConversationSection` reuses Phrase type with optional `speaker` field
- `pnpm typecheck && pnpm lint` both pass clean
- Package manager: pnpm

---

## How to Start a New Session

Paste the following into OpenCode at the start of every session:

```
Read AGENTS.md and CONTEXT.md. Do not begin any task until you confirm
you understand the current project state.
```
