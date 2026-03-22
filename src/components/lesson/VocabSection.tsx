import type { VocabItem } from "@/types/lesson";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

// Why: VocabSection is shared across all lesson formats. Extracting it into
// its own component keeps the lesson page thin and makes the vocab display
// reusable.

interface VocabSectionProps {
  vocab: VocabItem[];
}

export function VocabSection({ vocab }: VocabSectionProps) {
  if (vocab.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-brand-amber">Vocabulary</h2>
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
              <span className="text-sm text-zinc-500">{item.english}</span>
            </div>
            <AudioPlayer src={item.audioSrc} label={item.romanised} />
          </li>
        ))}
      </ul>
    </section>
  );
}
