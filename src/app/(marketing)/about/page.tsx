import type { Metadata } from "next";

// LEARN: Each page can export its own metadata — Next.js merges it with
// the parent layout's metadata to build the final <head>.
export const metadata: Metadata = {
  title: "About — Kannada Learning",
  description:
    "Why learn spoken Kannada? A free, audio-first approach for English speakers.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-brand-yellow">
        About
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
        <p>
          Kannada is spoken by over 45 million people, primarily in Karnataka,
          India. This app focuses on <strong className="text-zinc-200">spoken
          Kannada</strong> — the everyday language you hear in conversation,
          not the formal literary register.
        </p>

        <p>
          All lessons use intuitive English romanisation. No diacritics, no
          scholarly notation — just spellings that sound right to an English
          speaker (e.g. &ldquo;namaskara&rdquo;, &ldquo;howdu&rdquo;,
          &ldquo;illa&rdquo;).
        </p>

        <p>
          Kannada script (ಕನ್ನಡ) is displayed alongside every romanised word and
          phrase. This helps you start recognising the written form while you
          focus on speaking.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-brand-amber">
          How it works
        </h2>

        <ol className="list-inside list-decimal space-y-3">
          <li>Listen to a phrase spoken by a native speaker.</li>
          <li>Read the romanised spelling and English meaning.</li>
          <li>Repeat until it feels natural.</li>
          <li>Test yourself with spaced-repetition quizzes.</li>
        </ol>
      </div>
    </main>
  );
}
