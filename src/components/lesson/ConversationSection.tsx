import type { Phrase } from "@/types/lesson";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

// Why: ConversationSection renders dialogue turns in a chat-style layout.
// Each phrase may have a speaker field (e.g. "You", "Auto Driver") which
// gets a styled badge. The array order defines the conversation flow.

interface ConversationSectionProps {
  phrases: Phrase[];
}

export function ConversationSection({ phrases }: ConversationSectionProps) {
  if (phrases.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-brand-amber">Conversation</h2>
      <ol className="mt-4 space-y-4">
        {phrases.map((turn, index) => (
          <li
            key={turn.id}
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-400">
                {index + 1}
              </span>
              {turn.speaker && (
                <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-brand-amber">
                  {turn.speaker}
                </span>
              )}
            </div>
            <div className="mt-2 flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-medium text-zinc-100">
                  {turn.romanised}
                </p>
                <p className="mt-1 text-lg text-zinc-400" lang="kn">
                  {turn.kannadaScript}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{turn.english}</p>
              </div>
              <AudioPlayer src={turn.audioSrc} label={turn.romanised} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
