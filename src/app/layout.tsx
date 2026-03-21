import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// LEARN: next/font/google self-hosts fonts — no external requests, zero layout shift.
// LEARN: The variable name --font-sans makes Tailwind's font-sans utility
// automatically use Inter — no extra config needed.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kannada Learning — Speak Kannada",
  description:
    "Learn spoken Kannada through audio-first lessons. Romanised content for English speakers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // LEARN: dark class on <html> activates dark: Tailwind utilities (class strategy).
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
