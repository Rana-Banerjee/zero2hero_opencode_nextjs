# CONTEXT.md — Current Project Snapshot

> This file is the single source of truth for where the project is right now.
> It is **replaced** (not appended) at the end of every session — by the agent or manually.
> Keep it short. Its job is to restore context in a new session with minimal tokens.

---

## Status

**Current milestone:** Step 2 complete — ready for Step 3
**Currently working on:** Phase 1 complete
**Last updated:** 2026-03-21

---

## What's Done

- [X] AGENTS.md — agent behaviour rules, code style (imports, naming, error handling)
- [X] PROJECT.md — goals, milestones, 17-step build plan, architecture decisions, colour palette
- [X] CONTEXT.md — this file
- [X] Phase 1 Step 1 — Scaffold & Configure
- [X] Phase 1 Step 2 — Root Layout & Dark Theme
  - Inter font via `next/font/google`, variable set to `--font-sans`
  - Body: `bg-zinc-950`, `text-zinc-100`, `font-sans` (uses Inter)
  - Minimal landing page with brand colours and `next/link`
  - Removed custom `--color-background`/`--color-foreground` CSS vars (use Tailwind built-ins)

---

## What's Next

Phase 1 complete. Next: Phase 2 Step 3 — Route Groups & Navigation.

See PROJECT.md "Build Plan" for the full 17-step sequence.

---

## Active Decisions / Mid-Session Notes

> Decisions made during a session that aren't yet in PROJECT.md go here temporarily.
> Move them to PROJECT.md architecture decisions when they're settled.

- Tailwind v4 uses `@theme` and `@custom-variant` in CSS — no `tailwind.config.ts` needed.

---

## Files Most Recently Touched

- `package.json` — renamed to "kannada-learning", added `typecheck` script
- `src/app/globals.css` — brand colours, dark mode variant
- `src/app/layout.tsx` — Inter font, dark class, metadata
- `src/app/page.tsx` — minimal landing page

---

## How to Start a New Session

Paste the following into OpenCode at the start of every session:

```
Read AGENTS.md and CONTEXT.md. Do not begin any task until you confirm
you understand the current project state.
```
