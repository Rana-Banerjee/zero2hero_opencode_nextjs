import Link from "next/link";

// LEARN: This is a Server Component — it has no interactivity, just navigation links.
// No "use client" directive needed. Next.js renders it on the server for fast loads.
// Why: A shared Navbar lives in components/ (not inside a route) so every
// layout can import it. Using named export keeps imports explicit.
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* LEARN: next/link does client-side navigation without full page reloads. */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-brand-yellow transition-colors hover:text-brand-amber"
        >
          Kannada Learning
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <li>
            <Link
              href="/learn"
              className="transition-colors hover:text-brand-yellow"
            >
              Lessons
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-brand-yellow"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
