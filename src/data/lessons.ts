// LEARN: Static data files keep content separate from components.
// Why: Lesson content may later come from an API or CMS — keeping it in
// src/data/ means only the data source changes, not the components that use it.

import type { Lesson, LessonLevel, LessonFormat } from "@/types/lesson";

// LEARN: The `satisfies` keyword (TS 4.9+) checks that each object matches
// the Lesson interface without widening the type — you still get autocomplete
// on individual fields.
export const lessons: Lesson[] = [
  {
    id: "greetings",
    title: "Greetings",
    kannadaScript: "ನಮಸ್ಕಾರ",
    description:
      "The essential phrases for saying hello, goodbye, and being polite.",
    level: "beginner",
    format: "phrases",
    category: "basics",
  },
  {
    id: "introductions",
    title: "Introductions",
    kannadaScript: "ಪರಿಚಯ",
    description:
      "How to introduce yourself, ask someone's name, and say where you're from.",
    level: "beginner",
    format: "phrases",
    category: "basics",
  },
  {
    id: "yes-no-maybe",
    title: "Yes, No & Maybe",
    kannadaScript: "ಹೌದು, ಇಲ್ಲ & ಬಹುಶಃ",
    description:
      "The short words that power every conversation — agreement, refusal, and uncertainty.",
    level: "beginner",
    format: "phrases",
    category: "basics",
  },
  {
    id: "numbers-one-to-ten",
    title: "Numbers 1–10",
    kannadaScript: "ಸಂಖ್ಯೆ ೧–೧೦",
    description:
      "Count from one to ten in Kannada.",
    level: "beginner",
    format: "phrases",
    category: "numbers",
  },
  {
    id: "food-and-drink",
    title: "Food & Drink",
    kannadaScript: "ಊಟ & ಪಾನೀಯ",
    description:
      "Order a meal, ask for water, and say what you like to eat.",
    level: "beginner",
    format: "phrases",
    category: "survival",
  },
  {
    id: "greetings-mcq",
    title: "Greetings Quiz",
    kannadaScript: "ನಮಸ್ಕಾರ ಪ್ರಶ್ನೆ",
    description:
      "Test your knowledge of basic Kannada greetings with multiple choice questions.",
    level: "beginner",
    format: "mcq",
    category: "basics",
  },
  {
    id: "yes-no-maybe-mcq",
    title: "Yes, No & Maybe Quiz",
    kannadaScript: "ಹೌದು, ಇಲ್ಲ ಪ್ರಶ್ನೆ",
    description:
      "Quiz yourself on the short words that power every conversation.",
    level: "beginner",
    format: "mcq",
    category: "basics",
  },
  {
    id: "auto-driver",
    title: "Hiring an Auto",
    kannadaScript: "ಆಟೋ ಹಿಡಿಯುವುದು",
    description:
      "Haggle with an auto driver, set the destination, and navigate to Majestic.",
    level: "intermediate",
    format: "conversation",
    category: "survival",
  },
  {
    id: "house-help",
    title: "Talking to House Help",
    kannadaScript: "ಮನೆ ಕೆಲಸದವರ ಜೊತೆ ಮಾತು",
    description:
      "Give daily instructions to your household help — cleaning, washing, and cooking tasks.",
    level: "intermediate",
    format: "conversation",
    category: "survival",
  },
] satisfies Lesson[];

// LEARN: Helper function to find a lesson by ID — returns undefined if not found.
// Explicit return type `Lesson | undefined` makes it clear this can fail.
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

// LEARN: Filters lessons by optional level and format. Returns all lessons
// when no filters are provided. Using undefined params makes the function
// flexible for both filtered and unfiltered views.
export function getLessonsByFilter(
  level?: LessonLevel,
  format?: LessonFormat
): Lesson[] {
  return lessons.filter((lesson) => {
    if (level && lesson.level !== level) return false;
    if (format && lesson.format !== format) return false;
    return true;
  });
}
