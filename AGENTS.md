# AGENTS.md — Kannada Learning Website

## Context

This is a **spoken Kannada** learning app for English speakers, built with Next.js 14+
and TypeScript. All content is in English romanisation — Kannada script is used only
for numerals. The developer is learning Next.js, TypeScript, and OpenCode alongside
building it — so **clarity and pedagogy matter as much as correctness**.

See `PROJECT.md` for goals, milestones, and roadmap.

---

## Agent Behaviour Rules

### 1. Teach As You Build
- Before writing non-trivial code, add a short `# Why:` comment explaining the
  architectural decision (e.g. why a Server Component vs Client Component).
- When introducing a new Next.js or TypeScript concept, add a `// LEARN:` inline
  comment with a one-sentence explanation.
- Prefer **explicit** over implicit — write out types fully rather than relying on
  inference alone, so the developer can read and understand them.
- Never use `any`. If the type is genuinely unknown, use `unknown` and explain why.

### 2. Incremental, Reviewable Steps
- Break tasks into small, logical commits. Each commit = one understandable unit.
- State what you are about to do **before** doing it, summarise **after**.
- If a task touches >3 files, propose a plan and wait for confirmation.

### 3. Idiomatic Next.js 14+ (App Router)
- Use the **App Router** exclusively. No Pages Router patterns.
- Prefer **React Server Components (RSC)** by default. Only add `"use client"` when
  interactivity or browser APIs are genuinely needed — leave a `// LEARN:` comment.
- Co-locate component files with their route folders.
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` at appropriate route levels.
- Leverage `next/font`, `next/image`, and `next/link` — never raw `<img>` or `<a>`.

### 4. TypeScript Standards
- Strict mode on (`"strict": true`). Do not weaken it.
- Shared types and interfaces live in `src/types/` — import from there.
- Prefer `interface` for object shapes, `type` for unions and utility types.
- All async Server Actions and API route handlers must have explicit return types.
- Use Zod for runtime validation of external data (API responses, form inputs).

### 5. Kannada / Language Domain Rules
- All lesson content is informal English romanisation — intuitive spellings (e.g.
  "namaskara", "howdu", "illa"). No diacritics, no scholarly notation.
- Kannada script only for numerals (೧, ೨, ೩ … U+0CE6–U+0CEF). Containing element
  must have `lang="kn"`. No other `lang="kn"` usage.
- Audio is the primary learning medium — every vocab item and phrase must have a
  paired audio file or a `[TODO: add audio]` marker.
- Audio file naming: `{lesson-id}_{phrase-slug}.mp3` — lowercase, hyphens only.
- Lesson fields: `id`, `title` (English), `romanised`, `level` (beginner |
  intermediate | advanced), `category`, `audioSrc`.
- Never hardcode lesson content in components — all data lives in `src/data/` or
  is fetched from an API route.

### 6. What Agents Must NOT Do
- Do not install packages without stating the reason and asking for approval.
- Do not modify `AGENTS.md` without explicit user instruction.
- Do not generate placeholder content — use real romanised Kannada or `[TODO]` markers.
- Do not suppress TypeScript errors with `@ts-ignore` without a written explanation.

---

## Code Style

### Imports
- Use the `@/` path alias for all internal imports (e.g. `import { Button } from '@/components/ui/Button'`).
- Import order (blank line between groups):
  1. React / Next.js
  2. External libraries
  3. Internal (`@/`)
- Prefer **named exports** over default exports for components and utilities.
  Default exports are acceptable only for `page.tsx`, `layout.tsx`, `loading.tsx`,
  `error.tsx`, and `not-found.tsx` (Next.js convention).

### Naming
- **Components**: PascalCase files and exports (`LessonCard`, `AudioPlayer`).
- **Functions / hooks**: camelCase (`formatDuration`, `useAudioPlayback`).
- **Files / folders**: kebab-case (`lesson-card.tsx`, `src/lib/audio-utils.ts`).
- **Constants**: SCREAMING_SNAKE_CASE (`MAX_LESSON_DURATION`).
- **Types / interfaces**: PascalCase (`Lesson`, `AudioTrack`).

### Functions & Error Handling
- All exported functions need explicit parameter and return types.
- Use early returns to avoid deep nesting.
- Use `notFound()` from `next/navigation` when a resource doesn't exist.
- API route handlers: catch errors, return structured JSON `{ error: string }`.
- Validate all form inputs and external data with Zod schemas before use.

---

## Project Structure (follow strictly)

```
src/
  app/                  # Next.js App Router — routes only
    (marketing)/        # Route group: landing, about
    learn/              # Core learning routes
      [lessonId]/
    api/                # API route handlers
  components/           # Shared UI components
    ui/                 # Primitives (Button, Card, Badge…)
    lesson/             # Domain-specific components
  data/                 # Static lesson/word/phrase data (JSON or TS)
  lib/                  # Utilities, helpers, constants
  types/                # Shared TypeScript types & interfaces
  hooks/                # Custom React hooks (client-side only)
public/
  audio/                # Lesson audio files
  images/
```

### Styling
- Use **Tailwind CSS**. No CSS Modules, no inline `style={}` (except dynamic values).
- Dark mode from the start (`darkMode: 'class'`).
- Never use raw hex colours — only brand tokens from `tailwind.config.ts`:
  `brand-yellow`, `brand-amber`, `brand-orange`, `brand-deep`.

### Testing
- At least one unit test per utility in `src/lib/`.
- **Vitest** + **React Testing Library** for component tests.
- Test files: `{filename}.test.ts` or `{filename}.test.tsx`, co-located with source.

---

## Development Workflow

1. **Read `AGENTS.md` and `CONTEXT.md` first** on every session before touching code.
2. **Clarify before coding** — if the task is ambiguous, ask one focused question.
3. **Check existing patterns** — look at neighbouring files before inventing new ones.
4. **Run checks before finishing** — always run `pnpm typecheck` and `pnpm lint` and
   fix all errors before marking a task done.
5. **Update `CONTEXT.md`** at the end of every session — replace its contents with the
   current state. Keep it short.
6. **Leave the codebase learnable** — a developer new to Next.js should be able to
   read any file and understand it within a few minutes.

---

## Key Commands

```bash
pnpm dev                  # Start development server
pnpm build                # Production build
pnpm typecheck            # tsc --noEmit
pnpm lint                 # ESLint
pnpm test                 # Run all tests
pnpm test -- <pattern>    # Run a single test file (e.g. pnpm test -- audio-utils)
pnpm test -- --watch      # Watch mode
```
