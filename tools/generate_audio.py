#!/usr/bin/env python3
"""
generate_audio.py — Stage 2 of the content pipeline.

Reads kannadaScript and audioSrc pairs from:
  - src/data/vocab.ts      (VocabItem[])
  - src/data/phrases.ts    (Phrase[] — including conversation turns)
  - src/data/mcq.ts        (McqQuestion[])

Generates mp3 files in public/audio/ using gTTS.

Usage:
    pip install gtts
    python tools/generate_audio.py

- Safe to rerun — skips files that already exist.
- One failure does not stop the whole run.
- Run this AFTER reviewing content from the Content Agent.
"""

import re
import os
import sys
from pathlib import Path

try:
    from gtts import gTTS
except ImportError:
    print("ERROR: gtts is not installed. Run: pip install gtts")
    sys.exit(1)


# ---------------------------------------------------------------------------
# Paths — assumes script is run from the project root
# ---------------------------------------------------------------------------

DATA_DIR = Path("src/data")
PUBLIC_DIR = Path("public")

# All data files that contain kannadaScript + audioSrc entries
DATA_FILES = [
    DATA_DIR / "vocab.ts",
    DATA_DIR / "phrases.ts",
    DATA_DIR / "mcq.ts",
]


# ---------------------------------------------------------------------------
# Parser — extracts (kannadaScript, audioSrc) pairs from a TypeScript file
# ---------------------------------------------------------------------------

def parse_data_file(path: Path) -> list[dict]:
    """
    Parse all objects in a .ts data file that have both kannadaScript and audioSrc fields.
    Returns a list of dicts with keys: kannadaScript, audioSrc, id (for logging).
    Works for VocabItem, Phrase (including conversation turns), and McqQuestion.

    Uses brace-depth matching to handle nested objects (e.g. McqQuestion
    containing McqOption objects inside its options array).
    """
    if not path.exists():
        return []

    content = path.read_text(encoding="utf-8")
    entries = []

    # LEARN: Brace-depth parser — finds top-level { } blocks by tracking
    # nesting depth. This handles nested objects that a simple regex cannot.
    depth = 0
    start = None

    for i, ch in enumerate(content):
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start is not None:
                block = content[start + 1 : i]

                # Extract kannadaScript field
                kannada_match = re.search(
                    r'kannadaScript\s*:\s*["\']([^"\']+)["\']', block
                )
                # Extract audioSrc field
                audio_match = re.search(
                    r'audioSrc\s*:\s*["\']([^"\']+)["\']', block
                )
                # Extract id field for logging
                id_match = re.search(
                    r'\bid\s*:\s*["\']([^"\']+)["\']', block
                )

                if kannada_match and audio_match:
                    entries.append({
                        "id": id_match.group(1) if id_match else "unknown",
                        "kannadaScript": kannada_match.group(1).strip(),
                        "audioSrc": audio_match.group(1).strip(),
                    })

                start = None

    return entries


def parse_all_data_files() -> list[dict]:
    """
    Read all data files and return a combined list of entries.
    Deduplicates by audioSrc to avoid processing the same file twice.
    """
    all_entries: list[dict] = []
    seen_audio: set[str] = set()

    for data_file in DATA_FILES:
        if not data_file.exists():
            print(f"  SKIP FILE {data_file} (not found)")
            continue

        entries = parse_data_file(data_file)
        new_count = 0

        for entry in entries:
            if entry["audioSrc"] not in seen_audio:
                seen_audio.add(entry["audioSrc"])
                all_entries.append(entry)
                new_count += 1

        print(f"  READ     {data_file} — {new_count} entries")

    return all_entries


# ---------------------------------------------------------------------------
# Audio generation
# ---------------------------------------------------------------------------

def generate_audio(entries: list[dict]) -> None:
    generated = 0
    skipped = 0
    failed = 0
    failed_ids = []

    print(f"\nFound {len(entries)} entries with kannadaScript.\n")

    for entry in entries:
        output_path = PUBLIC_DIR / entry["audioSrc"]

        # Skip if file already exists
        if output_path.exists():
            print(f"  SKIP       {entry['audioSrc']}")
            skipped += 1
            continue

        # Create parent directory if needed
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # Generate audio
        try:
            tts = gTTS(entry["kannadaScript"], lang="kn")
            tts.save(str(output_path))
            print(f"  GENERATED  {entry['audioSrc']}  ({entry['kannadaScript']})")
            generated += 1
        except Exception as e:
            print(f"  FAILED     {entry['audioSrc']} — {e}")
            failed += 1
            failed_ids.append(entry["id"])

    # Summary
    print("\n" + "─" * 50)
    print(f"  Generated : {generated}")
    print(f"  Skipped   : {skipped}  (already exist)")
    print(f"  Failed    : {failed}")
    if failed_ids:
        print(f"\n  Failed IDs:")
        for fid in failed_ids:
            print(f"    - {fid}")
    print("─" * 50)

    if failed > 0:
        sys.exit(1)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    print("Kannada Audio Generator")
    print("Reading data files:\n")

    entries = parse_all_data_files()

    if not entries:
        print(
            "\nNo entries with kannadaScript found in any data file.\n"
            "Make sure the Content Agent has added kannadaScript fields to all entries.\n"
            "See CONTENT_AGENT.md for instructions."
        )
        sys.exit(0)

    generate_audio(entries)
