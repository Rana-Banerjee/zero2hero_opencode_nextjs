import Link from "next/link";

// LEARN: not-found.tsx is rendered when notFound() is called in a parent
// page or layout. It must be a Client Component if it uses hooks, but can
// be a Server Component when it's just static content like this.

export default function LessonNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-brand-orange">
        Lesson not found
      </h1>
      <p className="mt-4 text-lg text-zinc-400">
        That lesson doesn&apos;t exist — maybe it&apos;s still being written.
      </p>
      <Link
        href="/learn"
        className="mt-8 inline-block rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange"
      >
        Back to Lessons
      </Link>
    </main>
  );
}
