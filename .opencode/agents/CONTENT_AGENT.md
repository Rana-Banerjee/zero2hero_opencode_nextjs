# CONTENT_AGENT.md — Content Generation Agent Instructions

## Purpose

This file instructs the OpenCode agent on how to generate new lesson content
for the Kannada learning website. Read this file fully before generating any content.

Also read before starting:
- `AGENTS.md` — coding conventions and behaviour rules
- `src/types/lesson.ts` — the TypeScript interfaces you must satisfy
- `src/data/lessons.ts` — existing lessons to follow as examples
- `src/data/vocab.ts` — existing vocab/phrases to follow as examples

---

## What you will be given

A topic name. Examples: "directions", "shopping", "family", "transport", "time".

---

## What you must produce

Four things, in this order:

1. A new `Lesson` object added to the `lessons` array in `src/data/lessons.ts`
2. A new `VocabItem[]` array in `src/data/vocab.ts`
3. A new `Phrase[]` array in `src/data/vocab.ts`
4. The lesson ID added to both `vocabByLesson` and `phrasesByLesson` lookup maps

Do not create new files. All content goes into the existing data files.

---

## Lesson content rules

### Romanisation
- Use informal, intuitive English romanisation — spell words as an English speaker
  would naturally read them aloud
- No diacritics (no ā, ī, ū, ṭ, ṇ etc.)
- No scholarly notation (not ISO 15919, not IAST)
- Good: "namaskara", "hegiddira", "howdu", "illa", "beku"
- Bad: "namaskāra", "hēgiddīra", "haudu"
- When uncertain between two spellings, choose the one that looks most natural in English

### Vocabulary count
- 6–10 vocab items per lesson — enough to be useful, not overwhelming for a beginner
- 2–4 phrases per lesson — full sentences that use the vocab naturally

### Content quality
- Every vocab item must be genuinely useful for a beginner in a real conversation
- Phrases must feel natural, not textbook-stiff
- English translations must be accurate and idiomatic — not word-for-word literal
- Do not invent words — if uncertain about a Kannada word, leave a
  `# VERIFY: unsure about this word` comment and use your best known alternative

### Audio sources
- Set every `audioSrc` field to the correct path following the convention:
  `audio/{lessonId}_{slug}.mp3`
- The slug is derived from the romanised text: lowercase, spaces to hyphens,
  remove punctuation
- Example: romanised "Namaskara, hege iddira?" → slug "namaskara-hege-iddira"
  → audioSrc "audio/greetings_namaskara-hege-iddira.mp3"
- Do NOT leave audioSrc empty — always populate with the correct path even though
  the file does not exist yet. The audio script will generate the file.

---

## ID conventions

Lesson ID: `{topic-slug}` — lowercase, hyphens, no spaces
- "Directions" → `directions`
- "Food & Drink" → `food-and-drink`
- "At the Market" → `at-the-market`

Vocab/Phrase ID: `{lessonId}-{word-slug}`
- `directions-edakke`
- `directions-hogi-straight`

---

## Lesson object shape

```ts
{
  id: 'directions',
  title: 'Directions',
  description: 'Ask for and understand basic directions in Kannada.',
  level: 'beginner',
  category: 'survival',   // one of: basics | numbers | survival | social | food
}
```

---

## Vocab item shape

```ts
{
  id: 'directions-edakke',
  lessonId: 'directions',
  romanised: 'Edakke',
  english: 'Left',
  audioSrc: 'audio/directions_edakke.mp3',
}
```

## Phrase shape

```ts
{
  id: 'directions-straight-hogi',
  lessonId: 'directions',
  romanised: 'Nere hogi.',
  english: 'Go straight.',
  audioSrc: 'audio/directions_nere-hogi.mp3',
}
```

---

## Lookup map update

After adding the arrays, add the lesson to both maps at the bottom of `vocab.ts`:

```ts
const vocabByLesson: Record<string, VocabItem[]> = {
  // ... existing entries ...
  directions: directionsVocab,      // ← add this
}

const phrasesByLesson: Record<string, Phrase[]> = {
  // ... existing entries ...
  directions: directionsPhrases,    // ← add this
}
```

---

## What you must NOT do

- Do not modify `src/types/lesson.ts` — the interfaces are fixed
- Do not change the structure of existing lessons or vocab
- Do not use `any` types
- Do not add intermediate or advanced content — this app targets absolute beginners only
- Do not use Kannada script anywhere except numerals (handled in a separate lesson)
- Do not hardcode content inside components — all content lives in `src/data/`
- Do not leave `audioSrc` empty or as a placeholder string like `""`

---

## After generating content

Tell the developer:
1. Which lesson ID was created
2. How many vocab items and phrases were added
3. Any words you flagged with `# VERIFY` and why
4. The URL to check: `/learn/{lessonId}`

Then stop. Do not run `pnpm dev`, do not generate audio — the developer reviews
content first before Stage 2 of the pipeline runs.
