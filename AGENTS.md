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
- Before writing any non-trivial code, add a short `# Why:` comment explaining the
  architectural decision (e.g. why a Server Component vs Client Component).
- When introducing a new Next.js or TypeScript concept for the first time, add a
  `// LEARN:` inline comment with a one-sentence explanation.
- Prefer **explicit** over implicit — always write out types fully rather than relying
  on inference alone, so the developer can read and understand them.
- Never use `any`. If the type is genuinely unknown, use `unknown` and explain why.

### 2. Incremental, Reviewable Steps
- Break all tasks into small, logical commits. Each commit should represent one
  understandable unit of change.
- Always state what you are about to do **before** doing it, and summarise what changed
  **after**.
- If a task has more than ~3 files to touch, propose a plan and wait for confirmation
  before proceeding.

### 3. Idiomatic Next.js 14+ (App Router)
- Use the **App Router** exclusively. Do not use Pages Router patterns.
- Prefer **React Server Components (RSC)** by default. Only add `"use client"` when
  interactivity or browser APIs are genuinely needed — and leave a `// LEARN:` comment
  explaining why.
- Co-locate component files with their route folders.
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` at appropriate route levels.
- Leverage `next/font`, `next/image`, and `next/link` — never raw `<img>` or `<a>` tags.

### 4. TypeScript Standards
- Enable strict mode (`"strict": true` in `tsconfig.json`). Do not weaken it.
- Define shared types and interfaces in `src/types/` and import from there.
- Prefer `interface` for object shapes, `type` for unions and utility types.
- All async Server Actions and API route handlers must have explicit return types.
- Use Zod for runtime validation of any external data (API responses, form inputs).

### 5. Kannada / Language Domain Rules
- This app teaches **spoken Kannada**. All lesson content is written in informal English
  romanisation — spellings should feel intuitive to an English speaker (e.g. "namaskara",
  "howdu", "illa"). No diacritics, no scholarly notation. Do not introduce Kannada script
  except for numerals (೧, ೨, ೩ … U+0CE6–U+0CEF), where script may appear alongside
  the Roman form.
- When Kannada numeral script is displayed, its containing element must have `lang="kn"`.
  No other `lang="kn"` usage is needed.
- Audio is the primary learning medium — every vocabulary item and phrase must have a
  corresponding audio file. Never add content without a paired audio entry or a clearly
  labelled `[TODO: add audio]` marker.
- Audio file naming: `{lesson-id}_{phrase-slug}.mp3` — always lowercase, hyphens only.
- Lessons must always carry: `id`, `title` (English), `romanised` (pronunciation guide),
  `level` (`beginner | intermediate | advanced`), `category`, and `audioSrc`.
- Do not hardcode content in components — all lesson data lives in `src/data/` or is
  fetched from an API route.

### 6. Project Structure (follow strictly)
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

### 7. Styling
- Use **Tailwind CSS**. No CSS Modules, no inline `style={}` props (except for
  dynamic values that cannot be expressed in Tailwind).
- Support dark mode from the start (`darkMode: 'class'` in Tailwind config).
- Never use raw hex colour values in component code — only use the brand colour
  tokens defined in `tailwind.config.ts`. See `PROJECT.md` for the palette.

### 8. Testing
- Write at least one unit test per utility function in `src/lib/`.
- Use **Vitest** + **React Testing Library** for component tests.
- Test file convention: `{filename}.test.ts` or `{filename}.test.tsx`, co-located with
  the file under test.

### 9. What Agents Must NOT Do
- Do not install packages without stating the reason and asking for approval first.
- Do not modify `AGENTS.md` without explicit user instruction.
- Do not generate placeholder "Lorem ipsum" content — use real romanised Kannada phrases or clearly
  labelled `[TODO: add content]` markers. Never invent pronunciations.
- Do not skip TypeScript errors with `@ts-ignore` or `@ts-expect-error` without a
  written explanation.

---

## Development Workflow (for OpenCode agents)

1. **Read `AGENTS.md` and `CONTEXT.md` first** on every session before touching code.
2. **Clarify before coding** — if the task is ambiguous, ask one focused question.
3. **Check existing patterns** — look at neighbouring files before inventing new ones.
4. **Run checks before finishing** — always run `pnpm typecheck` and `pnpm lint` and
   fix all errors before marking a task done.
5. **Update `CONTEXT.md` at the end of every session** — replace its contents with the
   current state: what's done, what's next, files touched, any mid-session decisions.
   Keep it short — it exists to restore context cheaply, not to be a log.
6. **Leave the codebase learnable** — a developer new to Next.js should be able to read
   any file you produce and understand it within a few minutes.

---

## Key Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm typecheck    # tsc --noEmit
pnpm lint         # ESLint
pnpm test         # Vitest
```


