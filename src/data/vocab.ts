// LEARN: Vocab items are linked to lessons via lessonId.
// Why: Separating vocab from lessons lets you fetch just the words for a lesson
// without loading all lesson metadata — important when this becomes an API.

import type { VocabItem } from "@/types/lesson";

// --- Greetings lesson ---

export const greetingsVocab: VocabItem[] = [
  {
    id: "greetings-namaskara",
    lessonId: "greetings",
    romanised: "Namaskara",
    kannadaScript: "ನಮಸ್ಕಾರ",
    english: "Hello / Greetings",
    audioSrc: "audio/greetings_namaskara.mp3",
  },
  {
    id: "greetings-dhanyavaadagalu",
    lessonId: "greetings",
    romanised: "Dhanyavaadagalu",
    kannadaScript: "ಧನ್ಯವಾದಗಳು",
    english: "Thank you",
    audioSrc: "audio/greetings_dhanyavaadagalu.mp3",
  },
  {
    id: "greetings-dayavittu",
    lessonId: "greetings",
    romanised: "Dayavittu",
    kannadaScript: "ದಯವಿಟ್ಟು",
    english: "Please",
    audioSrc: "audio/greetings_dayavittu.mp3",
  },
  {
    id: "greetings-ksamisi",
    lessonId: "greetings",
    romanised: "Kshamisi",
    kannadaScript: "ಕ್ಷಮಿಸಿ",
    english: "Excuse me / Sorry",
    audioSrc: "audio/greetings_ksamisi.mp3",
  },
  {
    id: "greetings-hegiddira",
    lessonId: "greetings",
    romanised: "Hegiddira?",
    kannadaScript: "ಹೇಗಿದ್ದೀರಾ?",
    english: "How are you?",
    audioSrc: "audio/greetings_hegiddira.mp3",
  },
  {
    id: "greetings-chennagiddini",
    lessonId: "greetings",
    romanised: "Chennagiddini",
    kannadaScript: "ಚೆನ್ನಾಗಿದ್ದೀನಿ",
    english: "I am fine",
    audioSrc: "audio/greetings_chennagiddini.mp3",
  },
] satisfies VocabItem[];

// --- Introductions lesson ---

export const introductionsVocab: VocabItem[] = [
  {
    id: "intro-naanu",
    lessonId: "introductions",
    romanised: "Naanu",
    kannadaScript: "ನಾನು",
    english: "I / me",
    audioSrc: "audio/intro_naanu.mp3",
  },
  {
    id: "intro-neevu",
    lessonId: "introductions",
    romanised: "Neevu",
    kannadaScript: "ನೀವು",
    english: "You (respectful)",
    audioSrc: "audio/intro_neevu.mp3",
  },
  {
    id: "intro-hesaru",
    lessonId: "introductions",
    romanised: "Hesaru",
    kannadaScript: "ಹೆಸರು",
    english: "Name",
    audioSrc: "audio/intro_hesaru.mp3",
  },
  {
    id: "intro-naanu-yaru",
    lessonId: "introductions",
    romanised: "Ninna hesaru yenu?",
    kannadaScript: "ನಿನ್ನ ಹೆಸರು ಏನು?",
    english: "What is your name?",
    audioSrc: "audio/intro_naanu-yaru.mp3",
  },
  {
    id: "intro-naa-hesaru",
    lessonId: "introductions",
    romanised: "Nanna hesaru...",
    kannadaScript: "ನನ್ನ ಹೆಸರು...",
    english: "My name is...",
    audioSrc: "audio/intro_naa-hesaru.mp3",
  },
  {
    id: "intro-elli-beku",
    lessonId: "introductions",
    romanised: "Neenu yaava oorina hudugi?",
    kannadaScript: "ನೀನು ಯಾವ ಊರಿನ ಹುಡುಗಿ?",
    english: "Where are you from?",
    audioSrc: "audio/intro_elli-beku.mp3",
  },
] satisfies VocabItem[];

// --- Yes/No/Maybe lesson ---

export const yesNoVocab: VocabItem[] = [
  {
    id: "yesno-howdu",
    lessonId: "yes-no-maybe",
    romanised: "Howdu",
    kannadaScript: "ಹೌದು",
    english: "Yes",
    audioSrc: "audio/yesno_howdu.mp3",
  },
  {
    id: "yesno-illa",
    lessonId: "yes-no-maybe",
    romanised: "Illa",
    kannadaScript: "ಇಲ್ಲ",
    english: "No",
    audioSrc: "audio/yesno_illa.mp3",
  },
  {
    id: "yesno-beku",
    lessonId: "yes-no-maybe",
    romanised: "Beku",
    kannadaScript: "ಬೇಕು",
    english: "Want / need",
    audioSrc: "audio/yesno_beku.mp3",
  },
  {
    id: "yesno-beda",
    lessonId: "yes-no-maybe",
    romanised: "Beda",
    kannadaScript: "ಬೇಡ",
    english: "Don't want",
    audioSrc: "audio/yesno_beda.mp3",
  },
  {
    id: "yesno-sari",
    lessonId: "yes-no-maybe",
    romanised: "Sari",
    kannadaScript: "ಸರಿ",
    english: "Okay / alright",
    audioSrc: "audio/yesno_sari.mp3",
  },
  {
    id: "yesno-ashte",
    lessonId: "yes-no-maybe",
    romanised: "Ashte",
    kannadaScript: "ಅಷ್ಟೆ",
    english: "That's all / enough",
    audioSrc: "audio/yesno_ashte.mp3",
  },
] satisfies VocabItem[];

// --- Numbers 1–10 lesson ---

export const numbersOneToTenVocab: VocabItem[] = [
  {
    id: "numbers-one-to-ten-ondu",
    lessonId: "numbers-one-to-ten",
    romanised: "Ondu",
    kannadaScript: "ಒಂದು",
    english: "One",
    audioSrc: "audio/numbers-one-to-ten_ondu.mp3",
  },
  {
    id: "numbers-one-to-ten-yeradu",
    lessonId: "numbers-one-to-ten",
    romanised: "Yeradu",
    kannadaScript: "ಎರಡು",
    english: "Two",
    audioSrc: "audio/numbers-one-to-ten_yeradu.mp3",
  },
  {
    id: "numbers-one-to-ten-mooru",
    lessonId: "numbers-one-to-ten",
    romanised: "Mooru",
    kannadaScript: "ಮೂರು",
    english: "Three",
    audioSrc: "audio/numbers-one-to-ten_mooru.mp3",
  },
  {
    id: "numbers-one-to-ten-naalku",
    lessonId: "numbers-one-to-ten",
    romanised: "Naalku",
    kannadaScript: "ನಾಲ್ಕು",
    english: "Four",
    audioSrc: "audio/numbers-one-to-ten_naalku.mp3",
  },
  {
    id: "numbers-one-to-ten-aidu",
    lessonId: "numbers-one-to-ten",
    romanised: "Aidu",
    kannadaScript: "ಐದು",
    english: "Five",
    audioSrc: "audio/numbers-one-to-ten_aaidu.mp3",
  },
  {
    id: "numbers-one-to-ten-aaru",
    lessonId: "numbers-one-to-ten",
    romanised: "Aaru",
    kannadaScript: "ಆರು",
    english: "Six",
    audioSrc: "audio/numbers-one-to-ten_aaru.mp3",
  },
  {
    id: "numbers-one-to-ten-yelu",
    lessonId: "numbers-one-to-ten",
    romanised: "Yelu",
    kannadaScript: "ಏಳು",
    english: "Seven",
    audioSrc: "audio/numbers-one-to-ten_yelu.mp3",
  },
  {
    id: "numbers-one-to-ten-entu",
    lessonId: "numbers-one-to-ten",
    romanised: "Entu",
    kannadaScript: "ಎಂಟು",
    english: "Eight",
    audioSrc: "audio/numbers-one-to-ten_entu.mp3",
  },
  {
    id: "numbers-one-to-ten-ombattu",
    lessonId: "numbers-one-to-ten",
    romanised: "Ombattu",
    kannadaScript: "ಒಂಬತ್ತು",
    english: "Nine",
    audioSrc: "audio/numbers-one-to-ten_ombattu.mp3",
  },
  {
    id: "numbers-one-to-ten-hattu",
    lessonId: "numbers-one-to-ten",
    romanised: "Hattu",
    kannadaScript: "ಹತ್ತು",
    english: "Ten",
    audioSrc: "audio/numbers-one-to-ten_hattu.mp3",
  },
] satisfies VocabItem[];

// --- Food & Drink lesson ---

export const foodAndDrinkVocab: VocabItem[] = [
  {
    id: "food-and-drink-thindi",
    lessonId: "food-and-drink",
    romanised: "Thindi",
    kannadaScript: "ತಿಂಡಿ",
    english: "Snack / tiffin",
    audioSrc: "audio/food-and-drink_thindi.mp3",
  },
  {
    id: "food-and-drink-ootta",
    lessonId: "food-and-drink",
    romanised: "Ootta",
    kannadaScript: "ಊಟ",
    english: "Meal / food",
    audioSrc: "audio/food-and-drink_ootta.mp3",
  },
  {
    id: "food-and-drink-neeru",
    lessonId: "food-and-drink",
    romanised: "Neeru",
    kannadaScript: "ನೀರು",
    english: "Water",
    audioSrc: "audio/food-and-drink_neeru.mp3",
  },
  {
    id: "food-and-drink-uppin",
    lessonId: "food-and-drink",
    romanised: "Uppin",
    kannadaScript: "ಉಪ್ಪಿನ್",
    english: "Salt",
    audioSrc: "audio/food-and-drink_uppin.mp3",
  },
  {
    id: "food-and-drink-khaasi",
    lessonId: "food-and-drink",
    romanised: "Khaasi",
    kannadaScript: "ಖಾಸಿ",
    english: "Cough / spicy",
    audioSrc: "audio/food-and-drink_khaasi.mp3",
  },
  {
    id: "food-and-drink-sakkaare",
    lessonId: "food-and-drink",
    romanised: "Sakkaare",
    kannadaScript: "ಸಕ್ಕರೆ",
    english: "Sugar",
    audioSrc: "audio/food-and-drink_sakkaare.mp3",
  },
  {
    id: "food-and-drink-haaki",
    lessonId: "food-and-drink",
    romanised: "Haaki",
    kannadaScript: "ಹಾಕಿ",
    english: "Put / add",
    audioSrc: "audio/food-and-drink_haaki.mp3",
  },
  {
    id: "food-and-drink-sari-aaythu",
    lessonId: "food-and-drink",
    romanised: "Sari aaythu",
    kannadaScript: "ಸರಿ ಆಯ್ತು",
    english: "That's fine / okay then",
    audioSrc: "audio/food-and-drink_sari-aaythu.mp3",
  },
] satisfies VocabItem[];

// --- Auto Driver lesson ---

export const autoDriverVocab: VocabItem[] = [
  {
    id: "auto-driver-auto",
    lessonId: "auto-driver",
    romanised: "Auto",
    kannadaScript: "ಆಟೋ",
    english: "Auto rickshaw",
    audioSrc: "audio/auto-driver_auto.mp3",
  },
  {
    id: "auto-driver-meter",
    lessonId: "auto-driver",
    romanised: "Meter",
    kannadaScript: "ಮೀಟರ್",
    english: "Meter (fare meter)",
    audioSrc: "audio/auto-driver_meter.mp3",
  },
  {
    id: "auto-driver-eshtu",
    lessonId: "auto-driver",
    romanised: "Eshtu?",
    kannadaScript: "ಎಷ್ಟು?",
    english: "How much?",
    audioSrc: "audio/auto-driver_eshtu.mp3",
  },
  {
    id: "auto-driver-hogbeku",
    lessonId: "auto-driver",
    romanised: "Hogbeku",
    kannadaScript: "ಹೋಗ್ಬೇಕು",
    english: "Need to go",
    audioSrc: "audio/auto-driver_hogbeku.mp3",
  },
  {
    id: "auto-driver-nere",
    lessonId: "auto-driver",
    romanised: "Nere",
    kannadaScript: "ನೇರೆ",
    english: "Straight",
    audioSrc: "audio/auto-driver_nere.mp3",
  },
  {
    id: "auto-driver-baaldakke",
    lessonId: "auto-driver",
    romanised: "Baaldakke",
    kannadaScript: "ಬಾಲ್ದಕ್ಕೆ",
    english: "To the right",
    audioSrc: "audio/auto-driver_baaldakke.mp3",
  },
  {
    id: "auto-driver-edakke",
    lessonId: "auto-driver",
    romanised: "Edakke",
    kannadaScript: "ಎಡಕ್ಕೆ",
    english: "To the left",
    audioSrc: "audio/auto-driver_edakke.mp3",
  },
  {
    id: "auto-driver-nillisi",
    lessonId: "auto-driver",
    romanised: "Nillisi",
    kannadaScript: "ನಿಲ್ಲಿಸಿ",
    english: "Stop",
    audioSrc: "audio/auto-driver_nillisi.mp3",
  },
  {
    id: "auto-driver-bandiddini",
    lessonId: "auto-driver",
    romanised: "Bandiddini",
    kannadaScript: "ಬಂದಿದ್ದೀನಿ",
    english: "I have come / I arrived",
    audioSrc: "audio/auto-driver_bandiddini.mp3",
  },
  {
    id: "auto-driver-haaki",
    lessonId: "auto-driver",
    romanised: "Haaki",
    kannadaScript: "ಹಾಕಿ",
    english: "Put / start (the meter)",
    audioSrc: "audio/auto-driver_haaki.mp3",
  },
] satisfies VocabItem[];

// --- House Help lesson ---

export const houseHelpVocab: VocabItem[] = [
  {
    id: "house-help-olagane",
    lessonId: "house-help",
    romanised: "Olagane",
    kannadaScript: "ಒಳಗಣೆ",
    english: "Inside / indoors",
    audioSrc: "audio/house-help_olagane.mp3",
  },
  {
    id: "house-help-kesaru",
    lessonId: "house-help",
    romanised: "Kesaru",
    kannadaScript: "ಕಸರು",
    english: "Sweeping / dust",
    audioSrc: "audio/house-help_kesaru.mp3",
  },
  {
    id: "house-help-thoDi",
    lessonId: "house-help",
    romanised: "ThoDi",
    kannadaScript: "ತೊಡಿ",
    english: "Mopping",
    audioSrc: "audio/house-help_thoDi.mp3",
  },
  {
    id: "house-help-bittige",
    lessonId: "house-help",
    romanised: "Bittige",
    kannadaScript: "ಬಿಟ್ಟಿಗೆ",
    english: "Vessels / utensils",
    audioSrc: "audio/house-help_bittige.mp3",
  },
  {
    id: "house-help-baTTige",
    lessonId: "house-help",
    romanised: "BaTTige",
    kannadaScript: "ಬಟ್ಟಿಗೆ",
    english: "Clothes",
    audioSrc: "audio/house-help_baTTige.mp3",
  },
  {
    id: "house-help-neeru",
    lessonId: "house-help",
    romanised: "Neeru",
    kannadaScript: "ನೀರು",
    english: "Water",
    audioSrc: "audio/house-help_neeru.mp3",
  },
  {
    id: "house-help-ootta",
    lessonId: "house-help",
    romanised: "Ootta",
    kannadaScript: "ಊಟ",
    english: "Cooking / meal",
    audioSrc: "audio/house-help_ootta.mp3",
  },
  {
    id: "house-help-saLedu",
    lessonId: "house-help",
    romanised: "SaLedu",
    kannadaScript: "ಸಾಲೆದು",
    english: "Salary / wages",
    audioSrc: "audio/house-help_saLedu.mp3",
  },
  {
    id: "house-help-reNNe",
    lessonId: "house-help",
    romanised: "ReNNe",
    kannadaScript: "ರೆಣ್ಣೆ",
    english: "Iron (clothes)",
    audioSrc: "audio/house-help_reNNe.mp3",
  },
  {
    id: "house-help-raatri",
    lessonId: "house-help",
    romanised: "Raatri",
    kannadaScript: "ರಾತ್ರಿ",
    english: "Night",
    audioSrc: "audio/house-help_raatri.mp3",
  },
] satisfies VocabItem[];

// --- Helper: get all vocab for a lesson ---

// LEARN: A plain object maps lessonId → vocab list. This is simpler than a
// database query and works well for static data.
const vocabByLesson: Record<string, VocabItem[]> = {
  greetings: greetingsVocab,
  introductions: introductionsVocab,
  "yes-no-maybe": yesNoVocab,
  "numbers-one-to-ten": numbersOneToTenVocab,
  "food-and-drink": foodAndDrinkVocab,
  "auto-driver": autoDriverVocab,
  "house-help": houseHelpVocab,
};

export function getVocabForLesson(lessonId: string): VocabItem[] {
  return vocabByLesson[lessonId] ?? [];
}
