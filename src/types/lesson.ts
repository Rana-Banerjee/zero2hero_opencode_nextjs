// LEARN: interfaces define the shape of objects — prefer interface over type
// for object shapes. type is better for unions and utility types.
// Why: All lesson content is data-driven. Types live in src/types/ so every
// file can import them without circular dependencies.

// LEARN: string literal union — only these three values are valid.
export type LessonLevel = "beginner" | "intermediate" | "advanced";

// LEARN: Each lesson has a format that determines how content is rendered.
// "phrases" = vocab + standalone phrases
// "conversation" = vocab + speaker-attributed dialogue turns
// "mcq" = vocab + multiple choice quiz questions
export type LessonFormat = "phrases" | "conversation" | "mcq";

// A lesson is a container — e.g. "Greetings", "Numbers", "Food".
export interface Lesson {
  id: string;
  title: string;
  kannadaScript: string; // displayed alongside title for visual association
  description: string;
  level: LessonLevel;
  format: LessonFormat; // determines which content section to render
  category: string;
}

// A single vocabulary item — one word or short phrase.
export interface VocabItem {
  id: string;
  lessonId: string;
  romanised: string;
  kannadaScript: string; // displayed alongside romanised text
  english: string;
  audioSrc: string; // path relative to /public/audio/
}

// A longer phrase or sentence used in context.
export interface Phrase {
  id: string;
  lessonId: string;
  romanised: string;
  kannadaScript: string; // displayed alongside romanised text
  english: string;
  audioSrc: string;
  speaker?: string; // used in conversation format, e.g. "You", "Auto Driver"
}

// MCQ option within a question.
export interface McqOption {
  id: string;
  romanised: string;
  kannadaScript: string;
  english: string;
}

// A single multiple-choice question.
export interface McqQuestion {
  id: string;
  lessonId: string;
  prompt: string; // e.g. "What does 'namaskara' mean?"
  kannadaScript: string;
  audioSrc: string;
  options: McqOption[]; // 3–4 choices
  correctOptionId: string;
  explanation?: string; // shown after answering
}
