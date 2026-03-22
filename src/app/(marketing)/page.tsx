import Link from "next/link";

// LEARN: Route groups (marketing) organise routes without affecting the URL.
// This page is served at / — the route group folder name is not in the URL.
// LEARN: This is a React Server Component (RSC) by default — no "use client" needed
// because it has no interactivity or browser APIs.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-brand-yellow sm:text-6xl">
        Namaskara!
      </h1>

      <p className="max-w-md text-lg leading-8 text-zinc-400">
        Learn spoken Kannada through audio-first lessons with Kannada script
        alongside — just speak and recognise.
      </p>

      {/* LEARN: next/link prefetches routes on hover for instant client-side nav. */}
      <Link
        href="/learn"
        className="rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange"
      >
        Start Learning
      </Link>
    </main>
  );
}
