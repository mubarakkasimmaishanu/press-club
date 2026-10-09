import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Mic, ArrowRight, Clock } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { getInterviewArticles } from "@/data/articles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interviews & Profiles",
  description:
    "Exclusive interviews with academy leadership, faculty mentors, alumni, and student council pioneers at Al-Ihyahz Academy.",
};

export default function InterviewsPage() {
  const interviews = getInterviewArticles();

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
          <span className="text-[var(--ink)] font-semibold">Interviews</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            CONVERSATIONS & PROFILES DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Interviews & Profiles
          </h1>
          <p className="text-base sm:text-lg text-[var(--slate)] font-serif max-w-3xl leading-relaxed">
            First-person discussions with educational administrators, subject specialists, student leaders, and visiting dignitaries.
          </p>
        </header>

        {/* Interviews List */}
        <div className="space-y-8">
          {interviews.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-[var(--rule)] p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start group hover:border-[var(--forest)] transition-all"
            >
              <div className="relative w-full md:w-56 aspect-4/5 shrink-0 overflow-hidden bg-[#e8e6df] border border-[var(--rule)]">
                <Image
                  src={item.featuredImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 224px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[var(--forest)] text-white p-1.5">
                  <Mic className="w-4 h-4" />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--forest)] block mb-1">
                    {item.kicker || "THE INTERVIEW"}
                  </span>
                  <Link href={`/article/${item.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-tight mb-3">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-sm sm:text-base text-[var(--slate)] font-serif leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--rule)] flex flex-wrap items-center justify-between text-xs gap-3">
                  <div>
                    <span className="font-semibold text-[var(--ink)]">
                      Conducted by: {item.author.name}
                    </span>
                    <span className="text-[11px] text-[var(--slate)] block">
                      Published: {item.publishedAt} • {item.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/article/${item.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[var(--forest)] hover:underline"
                  >
                    <span>Read Full Transcript</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
