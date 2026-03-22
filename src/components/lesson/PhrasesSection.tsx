import type { Phrase } from "@/types/lesson";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

// Why: PhrasesSection renders standalone phrases for the "phrases" format.
// Extracted from the lesson page to keep it focused on data fetching.

interface PhrasesSectionProps {
  phrases: Phrase[];
}

export function PhrasesSection({ phrases }: PhrasesSectionProps) {
  if (phrases.length === 0) return null;

  return (
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
            <AudioPlayer src={item.audioSrc} label={item.romanised} />
          </li>
        ))}
      </ul>
    </section>
  );
}
