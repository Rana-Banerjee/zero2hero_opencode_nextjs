import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { lessons, getLessonById } from "@/data/lessons";
import { getVocabForLesson } from "@/data/vocab";
import { getPhrasesForLesson } from "@/data/phrases";
import { getMcqForLesson } from "@/data/mcq";
import { VocabSection } from "@/components/lesson/VocabSection";
import { PhrasesSection } from "@/components/lesson/PhrasesSection";
import { ConversationSection } from "@/components/lesson/ConversationSection";
import { McqSection } from "@/components/lesson/McqSection";

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
  const mcqQuestions = getMcqForLesson(lesson.id);

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

      {/* Vocab section — shared across all formats */}
      <VocabSection vocab={vocab} />

      {/* Format-specific content section */}
      {lesson.format === "phrases" && (
        <PhrasesSection phrases={phrases} />
      )}

      {lesson.format === "conversation" && (
        <ConversationSection phrases={phrases} />
      )}

      {lesson.format === "mcq" && (
        <McqSection questions={mcqQuestions} />
      )}

      {/* Empty state — no content for this format yet */}
      {lesson.format === "phrases" && phrases.length === 0 && vocab.length === 0 && (
        <section className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-zinc-500">
            Content for this lesson is coming soon.
          </p>
        </section>
      )}
      {lesson.format === "conversation" && phrases.length === 0 && vocab.length === 0 && (
        <section className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-zinc-500">
            This conversation lesson is coming soon.
          </p>
        </section>
      )}
      {lesson.format === "mcq" && mcqQuestions.length === 0 && vocab.length === 0 && (
        <section className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-zinc-500">
            This quiz is coming soon.
          </p>
        </section>
      )}
    </main>
  );
}
