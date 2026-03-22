import Link from "next/link";
import type { LessonLevel, LessonFormat } from "@/types/lesson";
import { getLessonsByFilter } from "@/data/lessons";
import { FilterBar } from "@/components/ui/FilterBar";

// Why: This is the lesson index — a Server Component that lists all available
// lessons with optional level and format filtering via URL searchParams.
// Data is imported directly from src/data/ because it's static. When we add
// an API later, only the import changes.

// LEARN: The App Router renders Server Components by default. No "use client"
// needed here because there's no client-side interactivity — filter state
// lives in the URL as query params.

// LEARN: searchParams is a Promise in Next.js 15+ — must await before reading.
export default async function LearnPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string; format?: string }>;
}) {
  const { level: rawLevel, format: rawFormat } = await searchParams;

  // LEARN: Validate searchParams against our string literal unions.
  // Never trust URL params — always validate before use.
  const validLevels: LessonLevel[] = ["beginner", "intermediate", "advanced"];
  const validFormats: LessonFormat[] = ["phrases", "conversation", "mcq"];

  const activeLevel = validLevels.includes(rawLevel as LessonLevel)
    ? (rawLevel as LessonLevel)
    : undefined;

  // Default to "phrases" format when no format is specified.
  const activeFormat = validFormats.includes(rawFormat as LessonFormat)
    ? (rawFormat as LessonFormat)
    : "phrases";

  const filteredLessons = getLessonsByFilter(activeLevel, activeFormat);

  // Build filter hrefs — each combination of level + format produces a URL.
  // LEARN: Helper to build hrefs with optional params. This keeps the JSX clean.
  function buildHref(level?: string, fmt?: string): string {
    const params = new URLSearchParams();
    if (level) params.set("level", level);
    if (fmt) params.set("format", fmt);
    const qs = params.toString();
    return qs ? `/learn?${qs}` : "/learn";
  }

  const levelItems = [
    { label: "All", href: buildHref(undefined, activeFormat) },
    { label: "Beginner", href: buildHref("beginner", activeFormat) },
    { label: "Intermediate", href: buildHref("intermediate", activeFormat) },
    { label: "Advanced", href: buildHref("advanced", activeFormat) },
  ];

  const formatItems = [
    { label: "Phrases", href: buildHref(activeLevel, "phrases") },
    { label: "Conversation", href: buildHref(activeLevel, "conversation") },
    { label: "MCQ", href: buildHref(activeLevel, "mcq") },
  ];

  const activeLevelHref = activeLevel
    ? buildHref(activeLevel, activeFormat)
    : buildHref(undefined, activeFormat);

  const activeFormatHref = buildHref(activeLevel, activeFormat);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-brand-yellow">
        Lessons
      </h1>
      <p className="mt-3 text-lg text-zinc-400">
        Pick a lesson to start learning spoken Kannada.
      </p>

      {/* Filters */}
      <div className="mt-8 space-y-3">
        <FilterBar
          label="Level"
          items={levelItems}
          activeHref={activeLevelHref}
        />
        <FilterBar
          label="Format"
          items={formatItems}
          activeHref={activeFormatHref}
        />
      </div>

      {/* Lesson cards */}
      <ul className="mt-10 space-y-4">
        {filteredLessons.length === 0 && (
          <li className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-zinc-500">
              No lessons found for this filter. Try a different combination.
            </p>
          </li>
        )}
        {filteredLessons.map((lesson) => (
          <li key={lesson.id}>
            <Link
              href={`/learn/${lesson.id}`}
              className="group block rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-brand-orange hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-brand-yellow">
                    {lesson.title}
                  </h2>
                  <p className="text-sm text-zinc-500" lang="kn">
                    {lesson.kannadaScript}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                    {lesson.level}
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-brand-amber">
                    {lesson.format}
                  </span>
                </div>
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
