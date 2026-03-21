# PROJECT.md — Kannada Learning Website

## Goals

This project has three interrelated goals, all equally important:

1. **Build** a spoken Kannada learning website for English speakers — romanised content and audio-first, with Kannada script used only for numerals
2. **Learn** Next.js and TypeScript through hands-on construction
3. **Learn** how to work effectively with AI coding agents (OpenCode)

The project is deliberately chosen so that goals 2 and 3 serve goal 1 — every
feature built is a real Next.js/TypeScript lesson in disguise.

---

## Milestones

- [ ] Project scaffold — App Router, TypeScript strict mode, Tailwind, Supabase connection
- [ ] First lesson page — romanised Kannada phrases, basic layout
- [ ] Audio playback — every vocabulary item and phrase has a paired audio file
- [ ] Numbers lesson — the one place Kannada numeral script (೧ ೨ ೩) appears alongside Roman
- [ ] AI content pipeline — agent + pipeline to generate and validate lesson content at scale
- [ ] Spaced-repetition quiz component
- [ ] Progress tracking via Supabase
- [ ] User authentication via Supabase Auth
- [ ] Deployed to Vercel

---

## Build Plan

Each step is self-contained — you can stop after any step and have something working. Steps 1–5 give you a browsable site, 6–9 add polish and test coverage, 10–14 add backend, 15–17 complete the product.

### Phase 1: Foundation

#### Step 1 — Scaffold & Configure
- `pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- Add brand colour tokens to `tailwind.config.ts`, set `darkMode: 'class'`
- Verify `tsconfig.json` has `"strict": true`

**Learn:** App Router folder structure, Tailwind config, TypeScript strict mode

#### Step 2 — Root Layout & Dark Theme
- Root layout with dark background (`bg-zinc-950`), `next/font` (Inter)
- Minimal landing page at `src/app/page.tsx`

**Learn:** Layouts wrap every page, `next/font` eliminates layout shift, `darkMode: 'class'`, Server Components are default

---

### Phase 2: Routing & Data

#### Step 3 — Route Groups & Navigation
- Move landing page to `src/app/(marketing)/page.tsx`
- Add `src/app/(marketing)/about/page.tsx`
- Shared `Navbar` component with `next/link`

**Learn:** Route groups `(groupName)`, `next/link` for client-side nav, co-locating components

#### Step 4 — Lesson Data Layer
- `src/types/lesson.ts` — `Lesson`, `VocabItem`, `Phrase` interfaces
- `src/data/lessons.ts` — static array of beginner lessons with real romanised Kannada
- `src/data/vocab.ts` — vocabulary items linked to lessons

**Learn:** TypeScript interfaces (`interface` over `type` for objects), data-driven architecture, file organisation

#### Step 5 — Dynamic Routes & Lesson Pages
- `src/app/learn/page.tsx` — lesson index
- `src/app/learn/[lessonId]/page.tsx` — individual lesson
- `src/app/learn/[lessonId]/not-found.tsx` — 404 for invalid IDs

**Learn:** Dynamic `[params]`, `generateStaticParams()` for SSG, `notFound()`, data fetching in Server Components

---

### Phase 3: Components & Styling

#### Step 6 — UI Component Library
- `src/components/ui/Button.tsx`, `Card.tsx`, `Badge.tsx`
- Each uses brand colours, accepts variants via props

**Learn:** Component composition, Tailwind utilities, TypeScript props with interfaces, named exports

#### Step 7 — Lesson Components
- `src/components/lesson/LessonCard.tsx`, `VocabList.tsx`, `PhraseBlock.tsx`
- Wire into lesson pages from Step 5

**Learn:** Component hierarchy, props drilling, Tailwind layout (flexbox, grid)

---

### Phase 4: Interactivity & Audio

#### Step 8 — Audio Playback
- `src/components/lesson/AudioPlayer.tsx` — `"use client"` (browser APIs)
- `src/lib/audio-utils.ts` — helpers, `src/lib/audio-utils.test.ts`
- Sample `.mp3` files in `public/audio/`

**Learn:** When to use `"use client"`, RSC boundary, custom hooks (`useAudioPlayback`), `public/` directory

#### Step 9 — First Tests
- Vitest config, `"test": "vitest"` script
- `pnpm test -- audio-utils` to run a single test

**Learn:** Vitest basics (`describe`, `it`, `expect`), co-located test files

---

### Phase 5: Special Content

#### Step 10 — Numbers Lesson (Kannada Script)
- `src/app/learn/numbers/page.tsx` — dedicated numbers lesson
- `src/components/lesson/NumeralCard.tsx` — shows `1` + `೧` side by side

**Learn:** Unicode rendering, `lang="kn"` attribute, static routes vs dynamic

---

### Phase 6: API & Backend

#### Step 11 — API Route Handlers
- `src/app/api/lessons/route.ts` — GET all lessons
- `src/app/api/lessons/[lessonId]/route.ts` — GET single lesson

**Learn:** Route handlers (`GET`, `POST`), `NextResponse.json()`, type-safe params

#### Step 12 — Supabase Integration
- `src/lib/supabase.ts` (browser client), `src/lib/supabase-server.ts` (server client)
- `.env.local` for Supabase URL and anon key

**Learn:** `NEXT_PUBLIC_` prefix, two Supabase clients, `@supabase/ssr`, Zod-validate responses

---

### Phase 7: Auth & User Features

#### Step 13 — Authentication
- `src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`
- `src/middleware.ts` — protect `/learn` routes

**Learn:** Middleware, Supabase Auth flow, server-side session validation

#### Step 14 — Progress Tracking
- `src/app/api/progress/route.ts`, `src/components/lesson/ProgressBar.tsx`
- Supabase table: `user_progress`

**Learn:** Server Actions (`use server`), optimistic UI, database schema design

---

### Phase 8: Quiz & Spaced Repetition

#### Step 15 — Quiz Component
- `src/components/quiz/QuizEngine.tsx` — `"use client"` — `useReducer` state machine
- `src/components/quiz/QuestionCard.tsx`
- `src/lib/srs.ts` — SM-2 algorithm, `src/lib/srs.test.ts`

**Learn:** `useReducer` for complex state, algorithm implementation, testing stateful components with RTL

---

### Phase 9: Polish & Deploy

#### Step 16 — Error Boundaries & Loading States
- `src/app/learn/error.tsx`, `src/app/learn/loading.tsx`
- `src/app/learn/[lessonId]/loading.tsx`

**Learn:** `error.tsx` must be Client Component, `loading.tsx` via Suspense, `reset()` recovery

#### Step 17 — Vercel Deployment
- Connect GitHub repo, set env vars in dashboard, verify preview deployments

**Learn:** Zero-config deploys, production env vars, preview deployments per branch

---

### Summary

| Step | What You Build | Key Concept Learned |
|------|---------------|---------------------|
| 1 | Scaffold | App Router structure, Tailwind config |
| 2 | Root layout + dark theme | Layouts, `next/font`, dark mode |
| 3 | Route groups + nav | Routing, `next/link`, RSC defaults |
| 4 | Lesson data + types | TypeScript interfaces, data architecture |
| 5 | Dynamic lesson pages | `[params]`, `generateStaticParams`, `notFound()` |
| 6 | UI primitives | Component composition, Tailwind utilities |
| 7 | Lesson components | Component hierarchy, props |
| 8 | Audio player | `"use client"`, browser APIs, custom hooks |
| 9 | First tests | Vitest, running single tests |
| 10 | Numbers lesson | Unicode, `lang` attribute |
| 11 | API routes | Route handlers, `NextResponse` |
| 12 | Supabase | Env vars, server vs browser clients |
| 13 | Auth | Middleware, Supabase Auth, session management |
| 14 | Progress tracking | Server Actions, database schema |
| 15 | Quiz + SRS | `useReducer`, algorithms, RTL testing |
| 16 | Error/loading UX | `error.tsx`, `loading.tsx`, Suspense |
| 17 | Deploy | Vercel, env vars in production |

---

## Architecture Decisions

> Record significant decisions here as they are made, with the date and reasoning.
> This is your project memory — especially useful when resuming after a break.

| Date | Decision | Reasoning |
|------|----------|-----------|
| — | App Router (not Pages Router) | Current Next.js standard; better for learning RSC model |
| — | pnpm | Fast, strict dependency resolution; switched from npm |
| — | Tailwind CSS | Utility-first; good fit for component-based UI |
| — | Vitest + RTL | Lightweight, Vite-native testing |
| — | Spoken Kannada only | Lowers barrier to entry; script is a separate skill from speech |
| — | Kannada script for numerals only | Numbers have a natural visual pairing; all other content is romanised |
| — | Supabase | Managed Postgres with built-in auth; good Next.js integration |
| — | AI-generated lesson content | Scalable; requires a dedicated content pipeline (see Milestones) |
| — | Absolute beginners only (initially) | Keeps scope tight; no multi-level complexity at the start |
| — | Informal romanisation | Intuitive for English speakers; no diacritics or scholarly notation |
| — | Colour palette: #FFD400 → #FF5F00 | Warm yellow-to-orange ramp; energetic and distinctive |

### Colour Palette

Define these as custom tokens in `tailwind.config.ts`. Never use raw hex values in components.

| Token name     | Hex       | Role                   |
|----------------|-----------|------------------------|
| `brand-yellow` | `#FFD400` | Primary / highlights   |
| `brand-amber`  | `#FFC300` | Secondary / hover      |
| `brand-orange` | `#FF8C00` | Accents / interactive  |
| `brand-deep`   | `#FF5F00` | CTAs / strong emphasis |

Pair with a dark neutral background (`zinc-950` or `#0F0F0F`) — this palette does not work on white.

```ts
// tailwind.config.ts
colors: {
  brand: {
    yellow: '#FFD400',
    amber:  '#FFC300',
    orange: '#FF8C00',
    deep:   '#FF5F00',
  }
}
```

---


