# CONTEXT.md — Current Project Snapshot

> This file is the single source of truth for where the project is right now.
> It is **replaced** (not appended) at the end of every session — by the agent or manually.
> Keep it short. Its job is to restore context in a new session with minimal tokens.

---

## Status

**Current milestone:** Step 5 complete — browsable site with lesson content
**Currently working on:** Phase 2 complete
**Last updated:** 2026-03-21

---

## What's Done

- [X] AGENTS.md — agent behaviour rules, code style (imports, naming, error handling)
- [X] PROJECT.md — goals, milestones, 17-step build plan, architecture decisions, colour palette
- [X] CONTEXT.md — this file
- [X] Phase 1 Step 1 — Scaffold & Configure
- [X] Phase 1 Step 2 — Root Layout & Dark Theme
- [X] Phase 2 Step 3 — Route Groups & Navigation
- [X] Phase 2 Step 4 — Lesson Data Layer
- [X] Phase 2 Step 5 — Dynamic Routes & Lesson Pages
  - `src/app/learn/page.tsx` — lesson index listing all 5 lessons
  - `src/app/learn/[lessonId]/page.tsx` — individual lesson with vocab + phrases
  - `src/app/learn/[lessonId]/not-found.tsx` — 404 for invalid lesson IDs
  - Uses `generateStaticParams()` for SSG, `notFound()` for missing lessons
  - Dynamic `generateMetadata()` for per-lesson `<title>`

---

## What's Next

Phase 2 complete — browsable site with lesson content. Next: Phase 3 Step 6 — UI Component Library.

See PROJECT.md "Build Plan" for the full 17-step sequence.

---

## Active Decisions / Mid-Session Notes

- Tailwind v4 uses `@theme` and `@custom-variant` in CSS — no `tailwind.config.ts` needed.
- Navbar is a Server Component (no interactivity needed, just links).
- Used `satisfies` keyword on lesson and vocab arrays for type-safe literals without widening.
- Audio placeholders marked with `[TODO: audio]` — will be wired up in Step 8.

---

## Files Most Recently Touched

- `src/app/learn/page.tsx` — lesson index (new)
- `src/app/learn/[lessonId]/page.tsx` — dynamic lesson page (new)
- `src/app/learn/[lessonId]/not-found.tsx` — 404 page (new)

---

## How to Start a New Session

Paste the following into OpenCode at the start of every session:

```
Read AGENTS.md and CONTEXT.md. Do not begin any task until you confirm
you understand the current project state.
```
