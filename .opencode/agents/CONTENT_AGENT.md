# CONTENT_AGENT.md — Content Generation Agent Instructions

## Purpose

This file instructs the OpenCode agent on how to generate new lesson content
for the Kannada learning website. Read this file fully before generating any content.

Also read before starting:

- `AGENTS.md` — coding conventions and behaviour rules
- `src/types/lesson.ts` — the TypeScript interfaces you must satisfy
- `src/data/lessons.ts` — existing lessons to follow as examples
- `src/data/vocab.ts` — existing vocab items to follow as examples
- `src/data/phrases.ts` — existing phrases to follow as examples
- `src/data/mcq.ts` — existing MCQ questions to follow as examples

---

## What you will be given

A topic name and a format. Examples:

- "directions" format: phrases
- "auto-driver" format: conversation
- "greetings" format: mcq

---

## What you must produce

Depending on the format, produce these items in order:

**For all formats:**

1. A new `Lesson` object added to the `lessons` array in `src/data/lessons.ts`
2. A new `VocabItem[]` array in `src/data/vocab.ts`
3. The lesson ID added to the `vocabByLesson` lookup map

**For "phrases" format:**
4. A new `Phrase[]` array in `src/data/phrases.ts`
5. The lesson ID added to the `phrasesByLesson` lookup map

**For "conversation" format:**
4. A new `Phrase[]` array in `src/data/phrases.ts` — each phrase must have a `speaker` field
5. The lesson ID added to the `phrasesByLesson` lookup map

**For "mcq" format:**
4. A new `McqQuestion[]` array in `src/data/mcq.ts`
5. The lesson ID added to the `mcqByLesson` lookup map

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

### Kannada script

- Always populate `kannadaScript` with the accurate Kannada script representation
  of the `romanised` field
- `kannadaScript` is used for gTTS audio generation also
- `romanised` and `kannadaScript` must correspond to the same word or phrase

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
  kannadaScript: 'ದಿಕ್ಕುಗಳು',
  description: 'Ask for and understand basic directions in Kannada.',
  level: 'beginner',        // beginner | intermediate | advanced
  format: 'phrases',        // phrases | conversation | mcq
  category: 'survival',     // one of: basics | numbers | survival | social | food
}
```

---

## Vocab item shape

```ts
{
  id: 'directions-edakke',
  lessonId: 'directions',
  romanised: 'Edakke',
  kannadaScript: 'ಎಡಕ್ಕೆ',
  english: 'Left',
  audioSrc: 'audio/directions_edakke.mp3',
}
```

## Phrase shape

```ts
{
  id: 'directions-nere-hogi',
  lessonId: 'directions',
  romanised: 'Nere hogi.',
  kannadaScript: 'ನೇರೆ ಹೋಗಿ.',
  english: 'Go straight.',
  audioSrc: 'audio/directions_nere-hogi.mp3',
  speaker: 'Auto Driver',   // optional — only for conversation format
}
```

## MCQ question shape

```ts
{
  id: 'mcq-greetings-namaskara',
  lessonId: 'greetings-mcq',
  prompt: "What does 'Namaskara' mean?",
  kannadaScript: 'ನಮಸ್ಕಾರ',
  audioSrc: 'audio/greetings-mcq_namaskara.mp3',
  options: [
    { id: 'opt-a', romanised: 'Hello', kannadaScript: 'ಹಲೋ', english: 'Hello' },
    { id: 'opt-b', romanised: 'Goodbye', kannadaScript: 'ವಿದಾಯ', english: 'Goodbye' },
    { id: 'opt-c', romanised: 'Thank you', kannadaScript: 'ಧನ್ಯವಾದ', english: 'Thank you' },
    { id: 'opt-d', romanised: 'Please', kannadaScript: 'ದಯವಿಟ್ಟು', english: 'Please' },
  ],
  correctOptionId: 'opt-a',
  explanation: "'Namaskara' is the standard greeting in Kannada.",
}
```

---

## Lookup map update

After adding the arrays, add the lesson to the relevant lookup map(s):

```ts
// src/data/vocab.ts
const vocabByLesson: Record<string, VocabItem[]> = {
  // ... existing entries ...
  directions: directionsVocab,      // ← add this
}

// src/data/phrases.ts (for phrases and conversation formats)
const phrasesByLesson: Record<string, Phrase[]> = {
  // ... existing entries ...
  directions: directionsPhrases,    // ← add this
}

// src/data/mcq.ts (for mcq format)
const mcqByLesson: Record<string, McqQuestion[]> = {
  // ... existing entries ...
  'directions-mcq': directionsMcq,  // ← add this
}
```

---

## What you must NOT do

- Do not modify `src/types/lesson.ts` — the interfaces are fixed
- Do not change the structure of existing lessons or vocab
- Do not use `any` types
- Do not hardcode content inside components — all content lives in `src/data/`
- Do not leave `audioSrc` empty or as a placeholder string like `""`
- For conversation format: every phrase MUST have a `speaker` field
- For MCQ format: every question must have 3–4 options and a valid `correctOptionId`

---

## After generating content

1. Tell the developer which lesson ID was created, how many vocab items
   and phrases were added, and the URL to check: `/learn/{lessonId}`
2. Run: python scripts/generate_audio.py
3. Report the generated / skipped / failed summary from the script output
4. Then stop — do not run pnpm dev
