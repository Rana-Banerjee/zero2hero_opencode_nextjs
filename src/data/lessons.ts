// LEARN: Static data files keep content separate from components.
// Why: Lesson content may later come from an API or CMS — keeping it in
// src/data/ means only the data source changes, not the components that use it.

import type { Lesson } from "@/types/lesson";

// LEARN: The `satisfies` keyword (TS 4.9+) checks that each object matches
// the Lesson interface without widening the type — you still get autocomplete
// on individual fields.
export const lessons: Lesson[] = [
  {
    id: "greetings",
    title: "Greetings",
    description:
      "The essential phrases for saying hello, goodbye, and being polite.",
    level: "beginner",
    category: "basics",
  },
  {
    id: "introductions",
    title: "Introductions",
    description:
      "How to introduce yourself, ask someone's name, and say where you're from.",
    level: "beginner",
    category: "basics",
  },
  {
    id: "yes-no-maybe",
    title: "Yes, No & Maybe",
    description:
      "The short words that power every conversation — agreement, refusal, and uncertainty.",
    level: "beginner",
    category: "basics",
  },
  {
    id: "numbers-one-to-ten",
    title: "Numbers 1–10",
    description:
      "Count from one to ten in Kannada. The one place where Kannada script appears too.",
    level: "beginner",
    category: "numbers",
  },
  {
    id: "food-and-drink",
    title: "Food & Drink",
    description:
      "Order a meal, ask for water, and say what you like to eat.",
    level: "beginner",
    category: "survival",
  },
] satisfies Lesson[];

// LEARN: Helper function to find a lesson by ID — returns undefined if not found.
// Explicit return type `Lesson | undefined` makes it clear this can fail.
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
