"use client";

// LEARN: "use client" is needed because this component tracks interactive state
// — which option the user selected, whether the answer is correct, and whether
// to show the explanation. Server Components cannot use useState or onClick.

import { useState } from "react";
import type { McqQuestion } from "@/types/lesson";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

// Why: McqSection renders an interactive multiple-choice quiz. Each question
// shows a prompt with audio, four options, and reveals the correct answer
// after the user selects one.

interface McqSectionProps {
  questions: McqQuestion[];
}

interface QuestionState {
  selectedId: string | null;
  isAnswered: boolean;
}

export function McqSection({ questions }: McqSectionProps) {
  // LEARN: Track per-question state — which option was selected and whether
  // the answer has been submitted. Using a Record keyed by question ID.
  const [states, setStates] = useState<Record<string, QuestionState>>({});

  function handleSelect(questionId: string, optionId: string) {
    // Don't allow changing answer after submission
    if (states[questionId]?.isAnswered) return;

    setStates((prev) => ({
      ...prev,
      [questionId]: { selectedId: optionId, isAnswered: true },
    }));
  }

  if (questions.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-brand-amber">
        Quiz — Test Yourself
      </h2>
      <div className="mt-6 space-y-8">
        {questions.map((q, qIndex) => {
          const state = states[q.id];
          const isAnswered = state?.isAnswered ?? false;
          const selectedId = state?.selectedId ?? null;
          const isCorrect = selectedId === q.correctOptionId;

          return (
            <div
              key={q.id}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5"
            >
              {/* Question header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Question {qIndex + 1}
                  </p>
                  <p className="mt-1 text-lg font-medium text-zinc-100">
                    {q.prompt}
                  </p>
                  <p className="mt-1 text-lg text-zinc-400" lang="kn">
                    {q.kannadaScript}
                  </p>
                </div>
                <AudioPlayer src={q.audioSrc} label={q.prompt} />
              </div>

              {/* Options */}
              <div className="mt-4 space-y-2">
                {q.options.map((opt) => {
                  const isSelected = selectedId === opt.id;
                  const isCorrectOption = opt.id === q.correctOptionId;

                  // LEARN: Conditional class names — base style + state styles
                  let optionClass =
                    "flex items-center gap-3 rounded-lg border p-3 transition-colors ";

                  if (!isAnswered) {
                    optionClass +=
                      "border-zinc-700 bg-zinc-800/50 cursor-pointer hover:border-brand-orange hover:bg-zinc-800";
                  } else if (isCorrectOption) {
                    optionClass +=
                      "border-green-600 bg-green-900/30 text-green-300";
                  } else if (isSelected && !isCorrect) {
                    optionClass += "border-red-600 bg-red-900/30 text-red-300";
                  } else {
                    optionClass += "border-zinc-800 bg-zinc-900/30 text-zinc-500";
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={optionClass}
                      disabled={isAnswered}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-600 text-xs font-medium">
                        {opt.romanised.charAt(0)}
                      </span>
                      <div className="text-left">
                        <span className="font-medium">{opt.romanised}</span>
                        <span
                          className="ml-2 text-zinc-400"
                          lang="kn"
                        >
                          {opt.kannadaScript}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Result + explanation */}
              {isAnswered && (
                <div className="mt-4 rounded-lg bg-zinc-800/50 p-3">
                  <p
                    className={`text-sm font-medium ${isCorrect ? "text-green-400" : "text-red-400"}`}
                  >
                    {isCorrect ? "Correct!" : "Not quite."}
                  </p>
                  {q.explanation && (
                    <p className="mt-1 text-sm text-zinc-400">
                      {q.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
