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


