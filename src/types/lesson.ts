// LEARN: interfaces define the shape of objects — prefer interface over type
// for object shapes. type is better for unions and utility types.
// Why: All lesson content is data-driven. Types live in src/types/ so every
// file can import them without circular dependencies.

// LEARN: string literal union — only these three values are valid.
export type LessonLevel = "beginner" | "intermediate" | "advanced";

// A lesson is a container — e.g. "Greetings", "Numbers", "Food".
export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: LessonLevel;
  category: string;
}

// A single vocabulary item — one word or short phrase.
export interface VocabItem {
  id: string;
  lessonId: string;
  romanised: string;
  english: string;
  audioSrc: string; // path relative to /public/audio/
}

// A longer phrase or sentence used in context.
export interface Phrase {
  id: string;
  lessonId: string;
  romanised: string;
  english: string;
  audioSrc: string;
}
