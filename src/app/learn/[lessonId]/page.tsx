import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { lessons, getLessonById } from "@/data/lessons";
import { getVocabForLesson, getPhrasesForLesson } from "@/data/vocab";

// LEARN: generateStaticParams tells Next.js which dynamic routes to pre-render
// at build time (Static Site Generation). Without this, every request would
// hit the server. The return value must match the dynamic segment names —
// here [lessonId] → { lessonId: "greetings" }.
export function generateStaticParams() {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

// LEARN: In Next.js 15+, params is a Promise — you must await it before
// accessing its properties. This enables streaming and parallel data fetching.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return { title: "Lesson Not Found" };
  }

  return {
    title: `${lesson.title} — Kannada Learning`,
    description: lesson.description,
  };
}

// LEARN: The page component receives params as a Promise. The key name matches
// the folder name [lessonId]. This is a Server Component — no "use client".
// Why: async/await in Server Components lets you fetch data directly
// without useEffect or external data-fetching libraries.
export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  // LEARN: notFound() triggers the nearest not-found.tsx boundary.
  // It's like a 404 response but rendered as a React component.
  if (!lesson) {
    notFound();
  }

  const vocab = getVocabForLesson(lesson.id);
  const phrases = getPhrasesForLesson(lesson.id);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/learn" className="hover:text-brand-yellow">
          Lessons
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-300">{lesson.title}</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-brand-yellow">
        {lesson.title}
      </h1>
      {/* LEARN: lang="kn" tells browsers/screen readers this is Kannada text. */}
      <p className="mt-1 text-2xl text-zinc-500" lang="kn">
        {lesson.kannadaScript}
      </p>
      <p className="mt-3 text-lg text-zinc-400">{lesson.description}</p>

      {/* Vocab section */}
      {vocab.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-brand-amber">
            Vocabulary
          </h2>
          <ul className="mt-4 space-y-3">
            {vocab.map((item) => (
              <li
                key={item.id}
                className="flex items-baseline justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
              >
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg font-medium text-zinc-100">
                      {item.romanised}
                    </span>
                    <span className="text-lg text-zinc-400" lang="kn">
                      {item.kannadaScript}
                    </span>
                  </div>
                  <span className="text-sm text-zinc-500">
                    {item.english}
                  </span>
                </div>
                {/* TODO: add audio playback button */}
                <span className="text-xs text-zinc-600">[TODO: audio]</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Phrases section */}
      {phrases.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-brand-amber">Phrases</h2>
          <ul className="mt-4 space-y-3">
            {phrases.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
              >
                <p className="text-lg font-medium text-zinc-100">
                  {item.romanised}
                </p>
                <p className="mt-1 text-lg text-zinc-400" lang="kn">
                  {item.kannadaScript}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{item.english}</p>
                {/* TODO: add audio playback button */}
                <span className="mt-2 inline-block text-xs text-zinc-600">
                  [TODO: audio]
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Lessons with no content yet */}
      {vocab.length === 0 && phrases.length === 0 && (
        <section className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-zinc-500">
            Content for this lesson is coming soon.
          </p>
        </section>
      )}
    </main>
  );
}
