# PROJECT.md — Kannada Learning Website

## Goals

This project has three interrelated goals, all equally important:

1. **Build** a spoken Kannada learning website for English speakers — romanised content and audio-first, with Kannada script displayed alongside for visual association
2. **Learn** Next.js and TypeScript through hands-on construction
3. **Learn** how to work effectively with AI coding agents (OpenCode)

The project is deliberately chosen so that goals 2 and 3 serve goal 1 — every
feature built is a real Next.js/TypeScript lesson in disguise.

---

## Milestones

- [ ] Project scaffold — App Router, TypeScript strict mode, Tailwind, Supabase connection
- [ ] First lesson page — romanised Kannada phrases with Kannada script, basic layout
- [ ] Audio playback — every vocabulary item and phrase has a paired audio file
- [ ] Numbers lesson — counting, with Kannada script for all numbers
- [ ] Lesson format system — phrases, conversation, and MCQ formats with level filtering
- [ ] Conversation lessons — auto driver, fruit vendor, house help dialogues
- [ ] MCQ quiz lessons — interactive multiple-choice with answer checking
- [ ] AI content pipeline — Stage 1: Content Agent generates lessons/vocab · Stage 2: audio script generates mp3s via gTTS (see PIPELINE.md)
- [ ] Progress tracking via Supabase
- [ ] User authentication via Supabase Auth
- [ ] Deployed to Vercel

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
| — | Kannada script displayed alongside romanised | Helps learners associate spoken form with written script |
| — | Lesson format system (phrases / conversation / MCQ) | Scalable — new formats can be added without changing the lesson model |
| — | Two-axis filtering: level × format | Independent filters; default to "phrases" format |
| — | Phrase.speaker optional field for conversations | Extends existing type without breaking beginner lessons |
| — | URL-based filter state (searchParams) | Bookmarkable, works with Server Components, no client state needed |
| — | Supabase | Managed Postgres with built-in auth; good Next.js integration |
| — | AI-generated lesson content | Scalable; requires a dedicated content pipeline (see PIPELINE.md) |
| — | gTTS (Python) for audio generation | Free, no billing; uses Kannada script as input which ensures correct pronunciation |
| — | Two-stage content pipeline | Separates content review from audio generation; avoids wasted API calls |
| — | Informal romanisation | Intuitive for English speakers; no diacritics or scholarly notation |
| — | Colour palette: #FFD400 → #FF5F00 | Warm yellow-to-orange ramp; energetic and distinctive |

### Colour Palette

Define these as custom tokens in `src/app/globals.css` with `@theme inline { ... }`. Never use raw hex values in components.

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


