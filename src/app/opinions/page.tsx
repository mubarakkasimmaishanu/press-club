import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MessageSquareQuote, ArrowRight, Clock } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { getOpinionArticles } from "@/data/articles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Opinions & Student Voices",
  description:
    "Student perspectives, analytical commentaries, and editorial discourse from the secondary scholars of Al-Ihyahz Academy.",
};

export default function OpinionsPage() {
  const opinions = getOpinionArticles();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      <AnnouncementStrip />
      <Masthead />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--slate)] border-b border-[var(--rule)] pb-2.5">
          <Link href="/" className="hover:text-[var(--forest)]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--ink)] font-semibold">Opinions & Commentary</span>
        </nav>

        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-[var(--burgundy)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--burgundy)] font-bold block mb-1">
            THE EDITORIAL BOARD & COMMENTARY DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Student Voices & Opinions
          </h1>
          <p className="text-base sm:text-lg text-[var(--slate)] font-serif max-w-3xl leading-relaxed">
            Analytical discourse, personal columns, and respectful debate on youth leadership, campus life, examination systems, and society.
          </p>

          <div className="mt-5 p-3 bg-[#edeae1] border-l-4 border-[var(--burgundy)] text-xs text-[var(--slate)]">
            <strong className="text-[var(--burgundy)]">Editorial Disclaimer:</strong> Articles published in the Opinion section represent the personal viewpoints of the signed student authors and do not constitute an official stance of Al-Ihyahz Academy or the Press Club.
          </div>
        </header>

        {/* Opinions Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opinions.map((op) => (
            <article
              key={op.id}
              className="bg-white border border-[var(--rule)] p-6 flex flex-col justify-between group hover:border-[var(--burgundy)] transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--rule)]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--burgundy)] bg-[#e8e6df] shrink-0">
                    <Image
                      src={op.author.avatar}
                      alt={op.author.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[var(--ink)]">
                      {op.author.name}
                    </h3>
                    <span className="text-[11px] text-[var(--burgundy)] font-semibold block">
                      {op.author.role}
                    </span>
                    <span className="text-[10px] text-[var(--slate)] block">
                      {op.author.gradeLevel}
                    </span>
                  </div>
                </div>

                <span className="editorial-kicker text-[var(--slate)] block mb-1">
                  {op.kicker || "OPINION"}
                </span>

                <Link href={`/article/${op.slug}`}>
                  <h2 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--burgundy)] transition-colors leading-snug mb-3">
                    {op.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-[var(--slate)] font-serif italic leading-relaxed mb-4">
                  “{op.summary}”
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--rule)] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[var(--slate)]">{op.publishedAt}</span>
                <Link
                  href={`/article/${op.slug}`}
                  className="font-bold text-[var(--burgundy)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Column</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
