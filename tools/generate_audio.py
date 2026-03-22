#!/usr/bin/env python3
"""
generate_audio.py — Stage 2 of the content pipeline.

Reads kannadaScript and audioSrc pairs from src/data/vocab.ts
and generates mp3 files in public/audio/ using gTTS.

Usage:
    pip install gtts
    python scripts/generate_audio.py

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

VOCAB_FILE = Path("src/data/vocab.ts")
PUBLIC_DIR = Path("public")


# ---------------------------------------------------------------------------
# Parser — extracts (kannadaScript, audioSrc) pairs from vocab.ts
# ---------------------------------------------------------------------------

def parse_vocab_file(path: Path) -> list[dict]:
    """
    Parse all objects in vocab.ts that have both kannadaScript and audioSrc fields.
    Returns a list of dicts with keys: kannadaScript, audioSrc, id (for logging).
    """
    if not path.exists():
        print(f"ERROR: {path} not found. Are you running from the project root?")
        sys.exit(1)

    content = path.read_text(encoding="utf-8")
    entries = []

    # Match individual object blocks between { and the closing },
    # Works for both VocabItem and Phrase objects
    object_pattern = re.compile(r'\{([^{}]+?)\}', re.DOTALL)

    for match in object_pattern.finditer(content):
        block = match.group(1)

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

    return entries


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
            print(f"  SKIP     {entry['audioSrc']}")
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
            print(f"  FAILED   {entry['audioSrc']} — {e}")
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
    print("Reading:", VOCAB_FILE)

    entries = parse_vocab_file(VOCAB_FILE)

    if not entries:
        print(
            "\nNo entries with kannadaScript found in vocab.ts.\n"
            "Make sure the Content Agent has added kannadaScript fields to all entries.\n"
            "See CONTENT_AGENT.md for instructions."
        )
        sys.exit(0)

    generate_audio(entries)