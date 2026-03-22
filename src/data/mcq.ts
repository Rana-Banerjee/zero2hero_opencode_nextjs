// LEARN: MCQ questions are linked to lessons via lessonId.
// Why: Quiz content is a different format from phrases or conversations.
// Each question has a prompt, multiple options, and a correct answer.

import type { McqQuestion } from "@/types/lesson";

// --- Greetings MCQ lesson ---

export const greetingsMcq: McqQuestion[] = [
  {
    id: "mcq-greetings-namaskara",
    lessonId: "greetings-mcq",
    prompt: "What does 'Namaskara' mean?",
    kannadaScript: "ನಮಸ್ಕಾರ",
    audioSrc: "audio/greetings-mcq_namaskara.mp3",
    options: [
      {
        id: "opt-a",
        romanised: "Hello",
        kannadaScript: "ಹಲೋ",
        english: "Hello",
      },
      {
        id: "opt-b",
        romanised: "Goodbye",
        kannadaScript: "ವಿದಾಯ",
        english: "Goodbye",
      },
      {
        id: "opt-c",
        romanised: "Thank you",
        kannadaScript: "ಧನ್ಯವಾದ",
        english: "Thank you",
      },
      {
        id: "opt-d",
        romanised: "Please",
        kannadaScript: "ದಯವಿಟ್ಟು",
        english: "Please",
      },
    ],
    correctOptionId: "opt-a",
    explanation:
      "'Namaskara' is the standard greeting in Kannada, equivalent to 'Hello'.",
  },
  {
    id: "mcq-greetings-hegiddira",
    lessonId: "greetings-mcq",
    prompt: "How do you ask 'How are you?' in Kannada?",
    kannadaScript: "ಹೇಗಿದ್ದೀರಾ?",
    audioSrc: "audio/greetings-mcq_hegiddira.mp3",
    options: [
      {
        id: "opt-a",
        romanised: "Chennagiddini",
        kannadaScript: "ಚೆನ್ನಾಗಿದ್ದೀನಿ",
        english: "I am fine",
      },
      {
        id: "opt-b",
        romanised: "Hegiddira?",
        kannadaScript: "ಹೇಗಿದ್ದೀರಾ?",
        english: "How are you?",
      },
      {
        id: "opt-c",
        romanised: "Dhanyavaadagalu",
        kannadaScript: "ಧನ್ಯವಾದಗಳು",
        english: "Thank you",
      },
      {
        id: "opt-d",
        romanised: "Kshamisi",
        kannadaScript: "ಕ್ಷಮಿಸಿ",
        english: "Excuse me",
      },
    ],
    correctOptionId: "opt-b",
    explanation:
      "'Hegiddira?' literally means 'How are you?' — the respectful form.",
  },
  {
    id: "mcq-greetings-dayavittu",
    lessonId: "greetings-mcq",
    prompt: "Which word means 'Please'?",
    kannadaScript: "ದಯವಿಟ್ಟು",
    audioSrc: "audio/greetings-mcq_dayavittu.mp3",
    options: [
      {
        id: "opt-a",
        romanised: "Kshamisi",
        kannadaScript: "ಕ್ಷಮಿಸಿ",
        english: "Sorry",
      },
      {
        id: "opt-b",
        romanised: "Namaskara",
        kannadaScript: "ನಮಸ್ಕಾರ",
        english: "Hello",
      },
      {
        id: "opt-c",
        romanised: "Dayavittu",
        kannadaScript: "ದಯವಿಟ್ಟು",
        english: "Please",
      },
      {
        id: "opt-d",
        romanised: "Chennagiddini",
        kannadaScript: "ಚೆನ್ನಾಗಿದ್ದೀನಿ",
        english: "I am fine",
      },
    ],
    correctOptionId: "opt-c",
    explanation:
      "'Dayavittu' means 'Please' — used when making a request.",
  },
  {
    id: "mcq-greetings-dhanyavaadagalu",
    lessonId: "greetings-mcq",
    prompt: "What is the Kannada word for 'Thank you'?",
    kannadaScript: "ಧನ್ಯವಾದಗಳು",
    audioSrc: "audio/greetings-mcq_dhanyavaadagalu.mp3",
    options: [
      {
        id: "opt-a",
        romanised: "Dhanyavaadagalu",
        kannadaScript: "ಧನ್ಯವಾದಗಳು",
        english: "Thank you",
      },
      {
        id: "opt-b",
        romanised: "Kshamisi",
        kannadaScript: "ಕ್ಷಮಿಸಿ",
        english: "Sorry",
      },
      {
        id: "opt-c",
        romanised: "Hegiddira?",
        kannadaScript: "ಹೇಗಿದ್ದೀರಾ?",
        english: "How are you?",
      },
      {
        id: "opt-d",
        romanised: "Namaskara",
        kannadaScript: "ನಮಸ್ಕಾರ",
        english: "Hello",
      },
    ],
    correctOptionId: "opt-a",
    explanation:
      "'Dhanyavaadagalu' means 'Thank you' — the plural form shows extra respect.",
  },
] satisfies McqQuestion[];

// --- Yes/No/Maybe MCQ lesson ---

export const yesNoMcq: McqQuestion[] = [
  {
    id: "mcq-yesno-howdu",
    lessonId: "yes-no-maybe-mcq",
    prompt: "What does 'Howdu' mean?",
    kannadaScript: "ಹೌದು",
    audioSrc: "audio/yes-no-maybe-mcq_howdu.mp3",
    options: [
      {
        id: "opt-a",
        romanised: "No",
        kannadaScript: "ಇಲ್ಲ",
        english: "No",
      },
      {
        id: "opt-b",
        romanised: "Yes",
        kannadaScript: "ಹೌದು",
        english: "Yes",
      },
      {
        id: "opt-c",
        romanised: "Maybe",
        kannadaScript: "ಬಹುಶಃ",
        english: "Maybe",
      },
      {
        id: "opt-d",
        romanised: "Okay",
        kannadaScript: "ಸರಿ",
        english: "Okay",
      },
    ],
    correctOptionId: "opt-b",
    explanation:
      "'Howdu' means 'Yes' — the most common way to agree in Kannada.",
  },
  {
    id: "mcq-yesno-illa",
    lessonId: "yes-no-maybe-mcq",
    prompt: "How do you say 'No' in Kannada?",
    kannadaScript: "ಇಲ್ಲ",
    audioSrc: "audio/yes-no-maybe-mcq_illa.mp3",
    options: [
      {
        id: "opt-a",
        romanised: "Beku",
        kannadaScript: "ಬೇಕು",
        english: "Want",
      },
      {
        id: "opt-b",
        romanised: "Sari",
        kannadaScript: "ಸರಿ",
        english: "Okay",
      },
      {
        id: "opt-c",
        romanised: "Illa",
        kannadaScript: "ಇಲ್ಲ",
        english: "No",
      },
      {
        id: "opt-d",
        romanised: "Ashte",
        kannadaScript: "ಅಷ್ಟೆ",
        english: "That's all",
      },
    ],
    correctOptionId: "opt-c",
    explanation:
      "'Illa' means 'No' — short and direct.",
  },
] satisfies McqQuestion[];

// --- Helper: get all MCQ questions for a lesson ---

const mcqByLesson: Record<string, McqQuestion[]> = {
  "greetings-mcq": greetingsMcq,
  "yes-no-maybe-mcq": yesNoMcq,
};

export function getMcqForLesson(lessonId: string): McqQuestion[] {
  return mcqByLesson[lessonId] ?? [];
}
