# CONTEXT.md — Current Project Snapshot

> This file is the single source of truth for where the project is right now.
> It is **replaced** (not appended) at the end of every session — by the agent or manually.
> Keep it short. Its job is to restore context in a new session with minimal tokens.

---

## Status

**Current milestone:** Step 3 complete — ready for Step 4
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
  - Moved landing page to `src/app/(marketing)/page.tsx`
  - Created `src/app/(marketing)/about/page.tsx` with real content
  - Created `src/components/ui/Navbar.tsx` — shared Navbar with `next/link`
  - Updated root layout to render Navbar on all pages

---

## What's Next

Phase 2 complete. Next: Phase 2 Step 4 — Lesson Data Layer.

See PROJECT.md "Build Plan" for the full 17-step sequence.

---

## Active Decisions / Mid-Session Notes

> Decisions made during a session that aren't yet in PROJECT.md go here temporarily.
> Move them to PROJECT.md architecture decisions when they're settled.

- Tailwind v4 uses `@theme` and `@custom-variant` in CSS — no `tailwind.config.ts` needed.
- Navbar is a Server Component (no interactivity needed, just links).

---

## Files Most Recently Touched

- `src/app/(marketing)/page.tsx` — landing page (moved from `src/app/page.tsx`)
- `src/app/(marketing)/about/page.tsx` — about page (new)
- `src/components/ui/Navbar.tsx` — shared Navbar component (new)
- `src/app/layout.tsx` — imported and rendered Navbar

---

## How to Start a New Session

Paste the following into OpenCode at the start of every session:

```
Read AGENTS.md and CONTEXT.md. Do not begin any task until you confirm
you understand the current project state.
```
