// LEARN: Vocab items are linked to lessons via lessonId.
// Why: Separating vocab from lessons lets you fetch just the words for a lesson
// without loading all lesson metadata — important when this becomes an API.

import type { VocabItem, Phrase } from "@/types/lesson";

// --- Greetings lesson ---

export const greetingsVocab: VocabItem[] = [
  {
    id: "greetings-namaskara",
    lessonId: "greetings",
    romanised: "Namaskara",
    english: "Hello / Greetings",
    audioSrc: "audio/greetings_namaskara.mp3",
  },
  {
    id: "greetings-dhanyavaadagalu",
    lessonId: "greetings",
    romanised: "Dhanyavaadagalu",
    english: "Thank you",
    audioSrc: "audio/greetings_dhanyavaadagalu.mp3",
  },
  {
    id: "greetings-dayavittu",
    lessonId: "greetings",
    romanised: "Dayavittu",
    english: "Please",
    audioSrc: "audio/greetings_dayavittu.mp3",
  },
  {
    id: "greetings-ksamisi",
    lessonId: "greetings",
    romanised: "Kshamisi",
    english: "Excuse me / Sorry",
    audioSrc: "audio/greetings_ksamisi.mp3",
  },
  {
    id: "greetings-hegiddira",
    lessonId: "greetings",
    romanised: "Hegiddira?",
    english: "How are you?",
    audioSrc: "audio/greetings_hegiddira.mp3",
  },
  {
    id: "greetings-chennagiddini",
    lessonId: "greetings",
    romanised: "Chennagiddini",
    english: "I am fine",
    audioSrc: "audio/greetings_chennagiddini.mp3",
  },
] satisfies VocabItem[];

export const greetingsPhrases: Phrase[] = [
  {
    id: "greetings-namaskara-helidru",
    lessonId: "greetings",
    romanised: "Namaskara, hege iddira?",
    english: "Hello, how are you?",
    audioSrc: "audio/greetings_namaskara-helidru.mp3",
  },
  {
    id: "greetings-dhanyavaadagalu-beku",
    lessonId: "greetings",
    romanised: "Dhanyavaadagalu, tumba chennagiddini.",
    english: "Thank you, I am very well.",
    audioSrc: "audio/greetings_dhanyavaadagalu-beku.mp3",
  },
] satisfies Phrase[];

// --- Introductions lesson ---

export const introductionsVocab: VocabItem[] = [
  {
    id: "intro-naanu",
    lessonId: "introductions",
    romanised: "Naanu",
    english: "I / me",
    audioSrc: "audio/intro_naanu.mp3",
  },
  {
    id: "intro-neevu",
    lessonId: "introductions",
    romanised: "Neevu",
    english: "You (respectful)",
    audioSrc: "audio/intro_neevu.mp3",
  },
  {
    id: "intro-hesaru",
    lessonId: "introductions",
    romanised: "Hesaru",
    english: "Name",
    audioSrc: "audio/intro_hesaru.mp3",
  },
  {
    id: "intro-naanu-yaru",
    lessonId: "introductions",
    romanised: "Ninna hesaru yenu?",
    english: "What is your name?",
    audioSrc: "audio/intro_naanu-yaru.mp3",
  },
  {
    id: "intro-naa-hesaru",
    lessonId: "introductions",
    romanised: "Nanna hesaru...",
    english: "My name is...",
    audioSrc: "audio/intro_naa-hesaru.mp3",
  },
  {
    id: "intro-elli-beku",
    lessonId: "introductions",
    romanised: "Neenu yaava oorina hudugi?",
    english: "Where are you from?",
    audioSrc: "audio/intro_elli-beku.mp3",
  },
] satisfies VocabItem[];

export const introductionsPhrases: Phrase[] = [
  {
    id: "intro-full-intro",
    lessonId: "introductions",
    romanised: "Namaskara, nanna hesaru Ravi. Ninna hesaru yenu?",
    english: "Hello, my name is Ravi. What is your name?",
    audioSrc: "audio/intro_full-intro.mp3",
  },
] satisfies Phrase[];

// --- Yes/No/Maybe lesson ---

export const yesNoVocab: VocabItem[] = [
  {
    id: "yesno-howdu",
    lessonId: "yes-no-maybe",
    romanised: "Howdu",
    english: "Yes",
    audioSrc: "audio/yesno_howdu.mp3",
  },
  {
    id: "yesno-illa",
    lessonId: "yes-no-maybe",
    romanised: "Illa",
    english: "No",
    audioSrc: "audio/yesno_illa.mp3",
  },
  {
    id: "yesno-beku",
    lessonId: "yes-no-maybe",
    romanised: "Beku",
    english: "Want / need",
    audioSrc: "audio/yesno_beku.mp3",
  },
  {
    id: "yesno-beda",
    lessonId: "yes-no-maybe",
    romanised: "Beda",
    english: "Don't want",
    audioSrc: "audio/yesno_beda.mp3",
  },
  {
    id: "yesno-sari",
    lessonId: "yes-no-maybe",
    romanised: "Sari",
    english: "Okay / alright",
    audioSrc: "audio/yesno_sari.mp3",
  },
  {
    id: "yesno-ashte",
    lessonId: "yes-no-maybe",
    romanised: "Ashte",
    english: "That's all / enough",
    audioSrc: "audio/yesno_ashte.mp3",
  },
] satisfies VocabItem[];

export const yesNoPhrases: Phrase[] = [
  {
    id: "yesno-coffee-beku",
    lessonId: "yes-no-maybe",
    romanised: "Coffee beka?",
    english: "Do you want coffee?",
    audioSrc: "audio/yesno_coffee-beku.mp3",
  },
  {
    id: "yesno-coffee-beku-reply",
    lessonId: "yes-no-maybe",
    romanised: "Howdu, coffee beku. Dhanyavaadagalu.",
    english: "Yes, I want coffee. Thank you.",
    audioSrc: "audio/yesno_coffee-beku-reply.mp3",
  },
] satisfies Phrase[];

// --- Helper: get all vocab for a lesson ---

// LEARN: A plain object maps lessonId → vocab list. This is simpler than a
// database query and works well for static data.
const vocabByLesson: Record<string, VocabItem[]> = {
  greetings: greetingsVocab,
  introductions: introductionsVocab,
  "yes-no-maybe": yesNoVocab,
};

const phrasesByLesson: Record<string, Phrase[]> = {
  greetings: greetingsPhrases,
  introductions: introductionsPhrases,
  "yes-no-maybe": yesNoPhrases,
};

export function getVocabForLesson(lessonId: string): VocabItem[] {
  return vocabByLesson[lessonId] ?? [];
}

export function getPhrasesForLesson(lessonId: string): Phrase[] {
  return phrasesByLesson[lessonId] ?? [];
}
