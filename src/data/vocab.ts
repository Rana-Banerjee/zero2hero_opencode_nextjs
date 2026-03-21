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

// --- Numbers 1–10 lesson ---
// Why: This is the one lesson where Kannada script (೧, ೨, ೩ …) should appear
// alongside romanised text. The VocabItem interface doesn't have a script field yet —
// add one when building the dedicated Numbers UI component.

export const numbersOneToTenVocab: VocabItem[] = [
  {
    id: "numbers-one-to-ten-ondu",
    lessonId: "numbers-one-to-ten",
    romanised: "Ondu",
    english: "One",
    audioSrc: "audio/numbers-one-to-ten_ondu.mp3",
  },
  {
    id: "numbers-one-to-ten-yeradu",
    lessonId: "numbers-one-to-ten",
    romanised: "Yeradu",
    english: "Two",
    audioSrc: "audio/numbers-one-to-ten_yeradu.mp3",
  },
  {
    id: "numbers-one-to-ten-mooru",
    lessonId: "numbers-one-to-ten",
    romanised: "Mooru",
    english: "Three",
    audioSrc: "audio/numbers-one-to-ten_mooru.mp3",
  },
  {
    id: "numbers-one-to-ten-naalku",
    lessonId: "numbers-one-to-ten",
    romanised: "Naalku",
    english: "Four",
    audioSrc: "audio/numbers-one-to-ten_naalku.mp3",
  },
  {
    id: "numbers-one-to-ten-aidu",
    lessonId: "numbers-one-to-ten",
    romanised: "Aidu",
    english: "Five",
    audioSrc: "audio/numbers-one-to-ten_aaidu.mp3",
  },
  {
    id: "numbers-one-to-ten-aaru",
    lessonId: "numbers-one-to-ten",
    romanised: "Aaru",
    english: "Six",
    audioSrc: "audio/numbers-one-to-ten_aaru.mp3",
  },
  {
    id: "numbers-one-to-ten-yelu",
    lessonId: "numbers-one-to-ten",
    romanised: "Yelu",
    english: "Seven",
    audioSrc: "audio/numbers-one-to-ten_yelu.mp3",
  },
  {
    id: "numbers-one-to-ten-entu",
    lessonId: "numbers-one-to-ten",
    romanised: "Entu",
    english: "Eight",
    audioSrc: "audio/numbers-one-to-ten_entu.mp3",
  },
  {
    id: "numbers-one-to-ten-ombattu",
    lessonId: "numbers-one-to-ten",
    romanised: "Ombattu",
    english: "Nine",
    audioSrc: "audio/numbers-one-to-ten_ombattu.mp3",
  },
  {
    id: "numbers-one-to-ten-hattu",
    lessonId: "numbers-one-to-ten",
    romanised: "Hattu",
    english: "Ten",
    audioSrc: "audio/numbers-one-to-ten_hattu.mp3",
  },
] satisfies VocabItem[];

export const numbersOneToTenPhrases: Phrase[] = [
  {
    id: "numbers-one-to-ten-counting",
    lessonId: "numbers-one-to-ten",
    romanised: "Ondu, yeradu, mooru!",
    english: "One, two, three!",
    audioSrc: "audio/numbers-one-to-ten_counting.mp3",
  },
  {
    id: "numbers-one-to-ten-eshtu",
    lessonId: "numbers-one-to-ten",
    romanised: "Eshtu? Aaidu.",
    english: "How many? Five.",
    audioSrc: "audio/numbers-one-to-ten_eshtu.mp3",
  },
] satisfies Phrase[];

// --- Food & Drink lesson ---

export const foodAndDrinkVocab: VocabItem[] = [
  {
    id: "food-and-drink-thindi",
    lessonId: "food-and-drink",
    romanised: "Thindi",
    english: "Snack / tiffin",
    audioSrc: "audio/food-and-drink_thindi.mp3",
  },
  {
    id: "food-and-drink-ootta",
    lessonId: "food-and-drink",
    romanised: "Ootta",
    english: "Meal / food",
    audioSrc: "audio/food-and-drink_ootta.mp3",
  },
  {
    id: "food-and-drink-neeru",
    lessonId: "food-and-drink",
    romanised: "Neeru",
    english: "Water",
    audioSrc: "audio/food-and-drink_neeru.mp3",
  },
  {
    id: "food-and-drink-uppin",
    lessonId: "food-and-drink",
    romanised: "Uppin",
    english: "Salt",
    audioSrc: "audio/food-and-drink_uppin.mp3",
  },
  {
    id: "food-and-drink-khaasi",
    lessonId: "food-and-drink",
    romanised: "Khaasi",
    english: "Cough / spicy",
    audioSrc: "audio/food-and-drink_khaasi.mp3",
  },
  {
    id: "food-and-drink-sakkaare",
    lessonId: "food-and-drink",
    romanised: "Sakkaare",
    english: "Sugar",
    audioSrc: "audio/food-and-drink_sakkaare.mp3",
  },
  {
    id: "food-and-drink-haaki",
    lessonId: "food-and-drink",
    romanised: "Haaki",
    english: "Put / add",
    audioSrc: "audio/food-and-drink_haaki.mp3",
  },
  {
    id: "food-and-drink-sari-aaythu",
    lessonId: "food-and-drink",
    romanised: "Sari aaythu",
    english: "That's fine / okay then",
    audioSrc: "audio/food-and-drink_sari-aaythu.mp3",
  },
] satisfies VocabItem[];

export const foodAndDrinkPhrases: Phrase[] = [
  {
    id: "food-and-drink-ootta-aaytha",
    lessonId: "food-and-drink",
    romanised: "Ootta aaytha?",
    english: "Have you eaten?",
    audioSrc: "audio/food-and-drink_ootta-aaytha.mp3",
  },
  {
    id: "food-and-drink-coffee-beku",
    lessonId: "food-and-drink",
    romanised: "Coffee beku, dayavittu.",
    english: "I want coffee, please.",
    audioSrc: "audio/food-and-drink_coffee-beku.mp3",
  },
  {
    id: "food-and-drink-neeru-beku",
    lessonId: "food-and-drink",
    romanised: "Neeru beku. Dhanyavaadagalu.",
    english: "I want water. Thank you.",
    audioSrc: "audio/food-and-drink_neeru-beku.mp3",
  },
] satisfies Phrase[];

// --- Helper: get all vocab for a lesson ---

// LEARN: A plain object maps lessonId → vocab list. This is simpler than a
// database query and works well for static data.
const vocabByLesson: Record<string, VocabItem[]> = {
  greetings: greetingsVocab,
  introductions: introductionsVocab,
  "yes-no-maybe": yesNoVocab,
  "numbers-one-to-ten": numbersOneToTenVocab,
  "food-and-drink": foodAndDrinkVocab,
};

const phrasesByLesson: Record<string, Phrase[]> = {
  greetings: greetingsPhrases,
  introductions: introductionsPhrases,
  "yes-no-maybe": yesNoPhrases,
  "numbers-one-to-ten": numbersOneToTenPhrases,
  "food-and-drink": foodAndDrinkPhrases,
};

export function getVocabForLesson(lessonId: string): VocabItem[] {
  return vocabByLesson[lessonId] ?? [];
}

export function getPhrasesForLesson(lessonId: string): Phrase[] {
  return phrasesByLesson[lessonId] ?? [];
}
