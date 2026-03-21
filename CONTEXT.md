# CONTEXT.md — Current Project Snapshot

> This file is the single source of truth for where the project is right now.
> It is **replaced** (not appended) at the end of every session — by the agent or manually.
> Keep it short. Its job is to restore context in a new session with minimal tokens.

---

## Status

**Current milestone:** Phase 2 complete — browsable site with lesson content
**Currently working on:** AGENTS.md review + minor improvements
**Last updated:** 2026-03-21

---

## What's Done

### Project Setup & Build
- [X] Phase 1 Step 1 — Scaffold & Configure
- [X] Phase 1 Step 2 — Root Layout & Dark Theme
- [X] Phase 2 Step 3 — Route Groups & Navigation
- [X] Phase 2 Step 4 — Lesson Data Layer
- [X] Phase 2 Step 5 — Dynamic Routes & Lesson Pages

### Documentation (previous sessions)
- [X] AGENTS.md — Tailwind v4, testing marked "planned", Content Pipeline, `satisfies` pattern
- [X] PIPELINE.md — audioSrc fixes, lesson ID fix, table alignment
- [X] CONTENT_AGENT.md — phrase ID fix

### New Lesson Content (previous sessions)
- [X] Food & Drink lesson (`food-and-drink`) — 8 vocab, 3 phrases
- [X] Numbers 1–10 lesson (`numbers-one-to-ten`) — 10 vocab, 2 phrases

### This Session — AGENTS.md Review
- [X] Reviewed full codebase against AGENTS.md for accuracy
- [X] Added `import type` syntax guidance to Imports section
- [X] Added tsconfig.json path alias reference (`@/*` → `./src/*`)
- [X] Confirmed no Cursor rules or Copilot instructions exist
- [X] Verified all Key Commands match `package.json` scripts

### Existing Lessons
- `greetings` — 8 vocab, 3 phrases
- `introductions` — 7 vocab, 3 phrases
- `yes-no-maybe` — 8 vocab, 3 phrases
- `numbers-one-to-ten` — 10 vocab, 2 phrases
- `food-and-drink` — 8 vocab, 3 phrases

---

## What's Next

1. Phase 3 Step 6 — UI Component Library (Button, Card, Badge primitives)
2. Phase 3 Step 7 — Audio playback component + integrate with lesson pages
3. Generate new lesson content via Content Agent (see PIPELINE.md)

See PROJECT.md "Build Plan" for the full step sequence.

---

## Active Decisions / Mid-Session Notes

- Tailwind v4: CSS-first config via `@theme` and `@custom-variant` in `globals.css`. No `tailwind.config.ts`.
- No test setup yet — no Vitest, no test scripts, no test files. Need to install when ready.
- `scripts/generate-audio.ts` doesn't exist — `pnpm generate-audio` is documented but not yet built.
- `VocabItem` interface has no `kannada` script field — Numbers lesson needs this eventually.
- Audio player UI not built yet — lesson pages show `[TODO: audio]` markers.
- All audio src paths follow `audio/{lessonId}_{slug}.mp3` convention (placeholder paths, files don't exist yet).
- Used `satisfies` keyword on lesson and vocab arrays for type-safe literals without widening.
- PROJECT.md still references `tailwind.config.ts` in the Colour Palette section — outdated, should reference `globals.css` `@theme` tokens.

---

## Files Most Recently Touched

- `AGENTS.md` — added `import type` guidance and tsconfig path alias reference
- `CONTEXT.md` — this file, updated with current session state

---

## How to Start a New Session

Paste the following into OpenCode at the start of every session:

```
Read AGENTS.md and CONTEXT.md. Do not begin any task until you confirm
you understand the current project state.
```
