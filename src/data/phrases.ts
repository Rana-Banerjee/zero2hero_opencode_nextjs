// LEARN: Phrases are linked to lessons via lessonId.
// Why: Separating phrases from vocab lets each data file stay focused on one
// content type. Phrases may have an optional speaker field for conversation format.

import type { Phrase } from "@/types/lesson";

// --- Greetings lesson ---

export const greetingsPhrases: Phrase[] = [
  {
    id: "greetings-namaskara-helidru",
    lessonId: "greetings",
    romanised: "Namaskara, hege iddira?",
    kannadaScript: "ನಮಸ್ಕಾರ, ಹೇಗೆ ಇದ್ದೀರಾ?",
    english: "Hello, how are you?",
    audioSrc: "audio/greetings_namaskara-helidru.mp3",
  },
  {
    id: "greetings-dhanyavaadagalu-beku",
    lessonId: "greetings",
    romanised: "Dhanyavaadagalu, tumba chennagiddini.",
    kannadaScript: "ಧನ್ಯವಾದಗಳು, ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೀನಿ.",
    english: "Thank you, I am very well.",
    audioSrc: "audio/greetings_dhanyavaadagalu-beku.mp3",
  },
] satisfies Phrase[];

// --- Introductions lesson ---

export const introductionsPhrases: Phrase[] = [
  {
    id: "intro-full-intro",
    lessonId: "introductions",
    romanised: "Namaskara, nanna hesaru Ravi. Ninna hesaru yenu?",
    kannadaScript: "ನಮಸ್ಕಾರ, ನನ್ನ ಹೆಸರು ರವಿ. ನಿನ್ನ ಹೆಸರು ಏನು?",
    english: "Hello, my name is Ravi. What is your name?",
    audioSrc: "audio/intro_full-intro.mp3",
  },
] satisfies Phrase[];

// --- Yes/No/Maybe lesson ---

export const yesNoPhrases: Phrase[] = [
  {
    id: "yesno-coffee-beku",
    lessonId: "yes-no-maybe",
    romanised: "Coffee beka?",
    kannadaScript: "ಕಾಫಿ ಬೇಕಾ?",
    english: "Do you want coffee?",
    audioSrc: "audio/yesno_coffee-beku.mp3",
  },
  {
    id: "yesno-coffee-beku-reply",
    lessonId: "yes-no-maybe",
    romanised: "Howdu, coffee beku. Dhanyavaadagalu.",
    kannadaScript: "ಹೌದು, ಕಾಫಿ ಬೇಕು. ಧನ್ಯವಾದಗಳು.",
    english: "Yes, I want coffee. Thank you.",
    audioSrc: "audio/yesno_coffee-beku-reply.mp3",
  },
] satisfies Phrase[];

// --- Numbers 1–10 lesson ---

export const numbersOneToTenPhrases: Phrase[] = [
  {
    id: "numbers-one-to-ten-counting",
    lessonId: "numbers-one-to-ten",
    romanised: "Ondu, yeradu, mooru!",
    kannadaScript: "ಒಂದು, ಎರಡು, ಮೂರು!",
    english: "One, two, three!",
    audioSrc: "audio/numbers-one-to-ten_counting.mp3",
  },
  {
    id: "numbers-one-to-ten-eshtu",
    lessonId: "numbers-one-to-ten",
    romanised: "Eshtu? Aaidu.",
    kannadaScript: "ಎಷ್ಟು? ಐದು.",
    english: "How many? Five.",
    audioSrc: "audio/numbers-one-to-ten_eshtu.mp3",
  },
] satisfies Phrase[];

// --- Food & Drink lesson ---

export const foodAndDrinkPhrases: Phrase[] = [
  {
    id: "food-and-drink-ootta-aaytha",
    lessonId: "food-and-drink",
    romanised: "Ootta aaytha?",
    kannadaScript: "ಊಟ ಆಯ್ತಾ?",
    english: "Have you eaten?",
    audioSrc: "audio/food-and-drink_ootta-aaytha.mp3",
  },
  {
    id: "food-and-drink-coffee-beku",
    lessonId: "food-and-drink",
    romanised: "Coffee beku, dayavittu.",
    kannadaScript: "ಕಾಫಿ ಬೇಕು, ದಯವಿಟ್ಟು.",
    english: "I want coffee, please.",
    audioSrc: "audio/food-and-drink_coffee-beku.mp3",
  },
  {
    id: "food-and-drink-neeru-beku",
    lessonId: "food-and-drink",
    romanised: "Neeru beku. Dhanyavaadagalu.",
    kannadaScript: "ನೀರು ಬೇಕು. ಧನ್ಯವಾದಗಳು.",
    english: "I want water. Thank you.",
    audioSrc: "audio/food-and-drink_neeru-beku.mp3",
  },
] satisfies Phrase[];

// --- Auto Driver conversation lesson ---
// Why: This is a real-world scenario — hailing an auto to Majestic bus stand.
// Each phrase has a speaker field to identify who is talking.
// The array order defines the conversation flow.

export const autoDriverPhrases: Phrase[] = [
  {
    id: "auto-driver-1",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Anna, Majestic hogbekaa?",
    kannadaScript: "ಅಣ್ಣ, ಮಜೆಸ್ಟಿಕ್ ಹೋಗ್ಬೇಕಾ?",
    english: "Brother, can you go to Majestic?",
    audioSrc: "audio/auto-driver_1.mp3",
  },
  {
    id: "auto-driver-2",
    lessonId: "auto-driver",
    speaker: "Auto Driver",
    romanised: "Haudu, banni. Meter haakthini.",
    kannadaScript: "ಹೌದು, ಬನ್ನಿ. ಮೀಟರ್ ಹಾಕ್ತೀನಿ.",
    english: "Yes, come. I'll put the meter.",
    audioSrc: "audio/auto-driver_2.mp3",
  },
  {
    id: "auto-driver-3",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Sari. Illi nere hogi, aamele baaldakke togoli.",
    kannadaScript: "ಸರಿ. ಇಲ್ಲಿ ನೇರೆ ಹೋಗಿ, ಆಮೇಲೆ ಬಾಲ್ದಕ್ಕೆ ತೊಗೊಳಿ.",
    english: "Okay. Go straight here, then take right.",
    audioSrc: "audio/auto-driver_3.mp3",
  },
  {
    id: "auto-driver-4",
    lessonId: "auto-driver",
    speaker: "Auto Driver",
    romanised: "Sari. Eshtu doora ide?",
    kannadaScript: "ಸರಿ. ಎಷ್ಟು ದೂರ ಇದೆ?",
    english: "Okay. How far is it?",
    audioSrc: "audio/auto-driver_4.mp3",
  },
  {
    id: "auto-driver-5",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Iru, ondu ATM nillisi. HuNage beku.",
    kannadaScript: "ಇರು, ಒಂದು ಎಟಿಎಮ್ ನಿಲ್ಲಿಸಿ. ಹುಣಗೆ ಬೇಕು.",
    english: "Wait, stop at an ATM. I need cash.",
    audioSrc: "audio/auto-driver_5.mp3",
  },
  {
    id: "auto-driver-6",
    lessonId: "auto-driver",
    speaker: "Auto Driver",
    romanised: "Sari. Illi ide, nillistini.",
    kannadaScript: "ಸರಿ. ಇಲ್ಲಿ ಇದೆ, ನಿಲ್ಲಿಸ್ತೀನಿ.",
    english: "Okay. There's one here, I'll stop.",
    audioSrc: "audio/auto-driver_6.mp3",
  },
  {
    id: "auto-driver-7",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Dhanyavaadagalu. Banni, hogona.",
    kannadaScript: "ಧನ್ಯವಾದಗಳು. ಬನ್ನಿ, ಹೋಗೋಣ.",
    english: "Thank you. Come, let's go.",
    audioSrc: "audio/auto-driver_7.mp3",
  },
  {
    id: "auto-driver-8",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Nere bus stand munde nillisi.",
    kannadaScript: "ನೇರೆ ಬಸ್ ಸ್ಟಾಂಡ್ ಮುಂದೆ ನಿಲ್ಲಿಸಿ.",
    english: "Stop right in front of the bus stand.",
    audioSrc: "audio/auto-driver_8.mp3",
  },
  {
    id: "auto-driver-9",
    lessonId: "auto-driver",
    speaker: "Auto Driver",
    romanised: "Bandidini. Meteralli eshtu barutte — nodi.",
    kannadaScript: "ಬಂದಿದ್ದೀನಿ. ಮೀಟರ್‌ಅಲ್ಲಿ ಎಷ್ಟು ಬರುತ್ತೆ — ನೋಡಿ.",
    english: "We've arrived. See what the meter shows.",
    audioSrc: "audio/auto-driver_9.mp3",
  },
  {
    id: "auto-driver-10",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Eshtu aaythu?",
    kannadaScript: "ಎಷ್ಟು ಆಯ್ತು?",
    english: "How much is it?",
    audioSrc: "audio/auto-driver_10.mp3",
  },
  {
    id: "auto-driver-11",
    lessonId: "auto-driver",
    speaker: "Auto Driver",
    romanised: "Meteralli haaku — ombattu rupaayi aaythu.",
    kannadaScript: "ಮೀಟರ್‌ಅಲ್ಲಿ ಹಾಕು — ಒಂಬತ್ತು ರುಪಾಯಿ ಆಯ್ತು.",
    english: "Check the meter — it's ninety rupees.",
    audioSrc: "audio/auto-driver_11.mp3",
  },
  {
    id: "auto-driver-12",
    lessonId: "auto-driver",
    speaker: "You",
    romanised: "Sari, thagoli. Dhanyavaadagalu, anna.",
    kannadaScript: "ಸರಿ, ತೊಗೊಳಿ. ಧನ್ಯವಾದಗಳು, ಅಣ್ಣ.",
    english: "Okay, take it. Thank you, brother.",
    audioSrc: "audio/auto-driver_12.mp3",
  },
] satisfies Phrase[];

// --- House Help conversation lesson ---
// Why: A daily interaction — employer gives instructions to household help
// for the day's tasks: sweeping, mopping, washing, and cooking.

export const houseHelpPhrases: Phrase[] = [
  {
    id: "house-help-1",
    lessonId: "house-help",
    speaker: "House Help",
    romanised: "Namaskara, akka. Bandidini.",
    kannadaScript: "ನಮಸ್ಕಾರ, ಅಕ್ಕ. ಬಂದಿದ್ದೀನಿ.",
    english: "Hello, madam. I've come.",
    audioSrc: "audio/house-help_1.mp3",
  },
  {
    id: "house-help-2",
    lessonId: "house-help",
    speaker: "You",
    romanised: "Banni, banni. Enu maadtira eeDaga?",
    kannadaScript: "ಬನ್ನಿ, ಬನ್ನಿ. ಏನು ಮಾಡ್ತೀರಾ ಈಡಗ?",
    english: "Come, come. What are you doing today?",
    audioSrc: "audio/house-help_2.mp3",
  },
  {
    id: "house-help-3",
    lessonId: "house-help",
    speaker: "House Help",
    romanised: "Kesaru, thoDi, bittige ele oLedu. Sariyaa?",
    kannadaScript: "ಕಸರು, ತೊಡಿ, ಬಿಟ್ಟಿಗೆ ಎಲೆ ಒಳೆದು. ಸರಿಯಾ?",
    english: "Sweeping, mopping, and washing utensils. Is that okay?",
    audioSrc: "audio/house-help_3.mp3",
  },
  {
    id: "house-help-4",
    lessonId: "house-help",
    speaker: "You",
    romanised: "Haudu. Mundina kaDe kesaru maadi, aamele olagane thoDi haaki.",
    kannadaScript: "ಹೌದು. ಮುಂದಿನ ಕಡೆ ಕಸರು ಮಾಡಿ, ಆಮೇಲೆ ಒಳಗಣೆ ತೊಡಿ ಹಾಕಿ.",
    english: "Yes. Sweep the front first, then mop inside.",
    audioSrc: "audio/house-help_4.mp3",
  },
  {
    id: "house-help-5",
    lessonId: "house-help",
    speaker: "House Help",
    romanised: "Neeru illa. TaNDre kaaythaa?",
    kannadaScript: "ನೀರು ಇಲ್ಲ. ತಂದ್ರೆ ಕಾಯ್ತಾ?",
    english: "There's no water. Should I wait until you bring some?",
    audioSrc: "audio/house-help_5.mp3",
  },
  {
    id: "house-help-6",
    lessonId: "house-help",
    speaker: "You",
    romanised: "Kitchenalli ide. Aalli hogi thagoLkoLi.",
    kannadaScript: "ಕಿಚನ್‌ಅಲ್ಲಿ ಇದೆ. ಅಲ್ಲಿ ಹೋಗಿ ತೊಗೊಳ್ಕೊಳಿ.",
    english: "It's in the kitchen. Go and take it from there.",
    audioSrc: "audio/house-help_6.mp3",
  },
  {
    id: "house-help-7",
    lessonId: "house-help",
    speaker: "House Help",
    romanised: "Sari, akka. BaTTige yella oLedini.",
    kannadaScript: "ಸರಿ, ಅಕ್ಕ. ಬಟ್ಟಿಗೆ ಎಲ್ಲ ಒಳೆದಿನಿ.",
    english: "Okay, madam. I've washed all the clothes.",
    audioSrc: "audio/house-help_7.mp3",
  },
  {
    id: "house-help-8",
    lessonId: "house-help",
    speaker: "You",
    romanised: "Tumba chennagiddira. Coffee bekaa?",
    kannadaScript: "ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೀರಾ. ಕಾಫಿ ಬೇಕಾ?",
    english: "You've done very well. Do you want coffee?",
    audioSrc: "audio/house-help_8.mp3",
  },
  {
    id: "house-help-9",
    lessonId: "house-help",
    speaker: "House Help",
    romanised: "Haudu, coffee beku. Dhanyavaadagalu.",
    kannadaScript: "ಹೌದು, ಕಾಫಿ ಬೇಕು. ಧನ್ಯವಾದಗಳು.",
    english: "Yes, I want coffee. Thank you.",
    audioSrc: "audio/house-help_9.mp3",
  },
  {
    id: "house-help-10",
    lessonId: "house-help",
    speaker: "You",
    romanised: "EE tingu saLedu thagoli — hathu rupaayi.",
    kannadaScript: "ಈ ತಿಂಗಳ ಸಾಲೆದು ತೊಗೊಳಿ — ಹತ್ತು ರುಪಾಯಿ.",
    english: "Take this month's wages — ten rupees.",
    audioSrc: "audio/house-help_10.mp3",
  },
  {
    id: "house-help-11",
    lessonId: "house-help",
    speaker: "House Help",
    romanised: "Dhanyavaadagalu, akka. NaLe bartini.",
    kannadaScript: "ಧನ್ಯವಾದಗಳು, ಅಕ್ಕ. ನಾಳೆ ಬರ್ತೀನಿ.",
    english: "Thank you, madam. I'll come tomorrow.",
    audioSrc: "audio/house-help_11.mp3",
  },
  {
    id: "house-help-12",
    lessonId: "house-help",
    speaker: "You",
    romanised: "Sari. NaLe bittige ele oLed bidi. Illaadiddini.",
    kannadaScript: "ಸರಿ. ನಾಳೆ ಬಿಟ್ಟಿಗೆ ಎಲೆ ಒಳೆದು ಬಿಡಿ. ಇಲ್ಲಾದಿದ್ದೀನಿ.",
    english: "Okay. Tomorrow just wash the utensils and leave. I won't be here.",
    audioSrc: "audio/house-help_12.mp3",
  },
] satisfies Phrase[];

// --- Helper: get all phrases for a lesson ---

const phrasesByLesson: Record<string, Phrase[]> = {
  greetings: greetingsPhrases,
  introductions: introductionsPhrases,
  "yes-no-maybe": yesNoPhrases,
  "numbers-one-to-ten": numbersOneToTenPhrases,
  "food-and-drink": foodAndDrinkPhrases,
  "auto-driver": autoDriverPhrases,
  "house-help": houseHelpPhrases,
};

export function getPhrasesForLesson(lessonId: string): Phrase[] {
  return phrasesByLesson[lessonId] ?? [];
}
