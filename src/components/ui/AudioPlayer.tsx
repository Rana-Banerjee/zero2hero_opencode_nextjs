"use client";

// LEARN: "use client" is needed here because this component uses React hooks
// (useState, useRef) and browser APIs (HTMLAudioElement). Server Components
// cannot use these — they run only on the server.

import { useState, useRef } from "react";

// Why: Audio playback requires client-side JavaScript. This component is a
// reusable play/pause button that works with any audio file path.

// LEARN: interface defines the props this component accepts. Keeping it
// explicit (not inferred) makes the component self-documenting.
interface AudioPlayerProps {
  src: string; // path relative to /public, e.g. "audio/greetings_namaskara.mp3"
  label: string; // accessible label for screen readers, e.g. "Play Namaskara"
}

// LEARN: Named export — matches the project convention for shared components.
export function AudioPlayer({ src, label }: AudioPlayerProps) {
  // LEARN: useRef holds a mutable reference that persists across renders
  // without triggering re-renders. Here it points to the <audio> element.
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // LEARN: useState tracks whether audio is currently playing. When state
  // changes, React re-renders the component with the updated UI.
  const [isPlaying, setIsPlaying] = useState(false);

  function handleToggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // LEARN: .play() returns a Promise — some browsers block autoplay until
      // the user interacts with the page. .catch() handles that gracefully.
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  }

  // LEARN: onEnded fires when the audio finishes. We reset state so the
  // button shows the play icon again.
  function handleEnded() {
    setIsPlaying(false);
  }

  // Prefix with "/" so the path resolves from the public/ directory.
  const fullSrc = `/${src}`;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 transition-colors hover:bg-brand-orange hover:text-white"
    >
      {/* LEARN: The <audio> element is hidden — it exists only to play sound.
          The visible UI is the button with an SVG icon. */}
      <audio
        ref={audioRef}
        src={fullSrc}
        onEnded={handleEnded}
        preload="metadata"
      />

      {isPlaying ? (
        // Pause icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Play icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
