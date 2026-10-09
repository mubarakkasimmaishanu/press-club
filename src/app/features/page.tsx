import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { getFeatureArticles } from "@/data/articles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Features & Long-Form Journalism",
  description:
    "In-depth investigative reports, student profiles, cultural essays, and campus deep-dives from Al-Ihyahz Press Club.",
};

export default function FeaturesPage() {
  const features = getFeatureArticles();

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
          <span className="text-[var(--ink)] font-semibold">Features</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            LONG-FORM EDITORIAL DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Features & Investigative Writing
          </h1>
          <p className="text-base sm:text-lg text-[var(--slate)] font-serif max-w-3xl leading-relaxed">
            Extended journalism dedicated to comprehensive storytelling, institutional inquiries, student cohort experiences, and cultural dispatches.
          </p>
        </header>

        {/* Features Grid */}
        <div className="space-y-12">
          {features.map((feature, idx) => (
            <article
              key={feature.id}
              className={`p-6 sm:p-8 bg-white border border-[var(--rule)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <Link
                  href={`/article/${feature.slug}`}
                  className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] border border-[var(--rule)] group"
                >
                  <Image
                    src={feature.featuredImage}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>
                <div className="text-[11px] text-[var(--slate)] mt-2 flex justify-between">
                  <span className="italic">{feature.imageCaption}</span>
                  <span className="font-mono text-[10px] uppercase">{feature.imageCredit}</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--burgundy)] block mb-1">
                    {feature.kicker || "SPECIAL REPORT"}
                  </span>
                  <Link href={`/article/${feature.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-[var(--ink)] hover:text-[var(--forest)] transition-colors leading-tight mb-3">
                      {feature.title}
                    </h2>
                  </Link>
                  <p className="text-sm sm:text-base text-[var(--slate)] font-serif leading-relaxed mb-4">
                    {feature.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--rule)] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[var(--ink)] block">
                      By {feature.author.name}
                    </span>
                    <span className="text-[11px] text-[var(--slate)]">
                      {feature.author.gradeLevel} • {feature.publishedAt}
                    </span>
                  </div>
                  <Link
                    href={`/article/${feature.slug}`}
                    className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-[var(--forest)] hover:underline"
                  >
                    <span>Read Full Feature</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
