import Link from "next/link";
import { lessons } from "@/data/lessons";

// Why: This is the lesson index — a Server Component that lists all available lessons.
// Data is imported directly from src/data/ because it's static. When we add an API
// later, only this import changes.

// LEARN: The App Router renders Server Components by default. No "use client"
// needed here because there's no interactivity — just a list of links.

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-brand-yellow">
        Lessons
      </h1>
      <p className="mt-3 text-lg text-zinc-400">
        Pick a lesson to start learning spoken Kannada.
      </p>

      {/* LEARN: Tailwind's space-y utility adds consistent vertical gaps
          between child elements — cleaner than margin on each item. */}
      <ul className="mt-10 space-y-4">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            {/* LEARN: next/link renders an <a> tag with client-side navigation.
                The whole card is clickable. */}
            <Link
              href={`/learn/${lesson.id}`}
              className="group block rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-brand-orange hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-brand-yellow">
                  {lesson.title}
                </h2>
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                  {lesson.level}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-500">
                {lesson.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
