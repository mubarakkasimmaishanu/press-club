import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al-Ihyahz Press Club | Student Journalism & Official Publication",
    template: "%s | Al-Ihyahz Press Club",
  },
  description:
    "The official student journalism and media publication of Al-Ihyahz Academy, Nigeria. School voices, investigative feature stories, interviews, opinions, and campus coverage.",
  keywords: [
    "Al-Ihyahz Academy",
    "Press Club",
    "Student Journalism",
    "Nigerian Education",
    "School Newspaper",
    "Campus News",
    "Student Voices",
  ],
  authors: [{ name: "Al-Ihyahz Press Club Editorial Board" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pressclub.alihyahz.edu.ng",
    title: "Al-Ihyahz Press Club | Official School Publication",
    description: "Student Journalism. School Voices. Community Stories.",
    siteName: "Al-Ihyahz Press Club",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} min-h-screen scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col font-sans selection:bg-[#345746]/15">
        {children}
      </body>
    </html>
  );
}
