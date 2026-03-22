import Link from "next/link";

// Why: FilterBar is a reusable row of filter pills used for both level and
// format filtering on the /learn page. Each pill is a <Link> so the filter
// state lives in the URL — bookmarkable and shareable.
// LEARN: This is a Server Component — no "use client" needed. Each pill is
// just a Link; the active state is determined by comparing against a prop.

interface FilterItem {
  label: string;
  href: string;
}

interface FilterBarProps {
  label: string; // e.g. "Level" or "Format"
  items: FilterItem[];
  activeHref: string; // href of the currently active filter
}

export function FilterBar({ label, items, activeHref }: FilterBarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-zinc-500">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-brand-orange text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
