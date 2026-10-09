import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Filter, ArrowRight } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { getAllArticles } from "@/data/articles";
import { categories } from "@/data/categories";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "News Archive & All Dispatches",
  description:
    "Explore the complete chronological publication archive of Al-Ihyahz Press Club, covering school news, student investigations, academic milestones, and opinions.",
};

export default function NewsArchivePage() {
  const allArticles = getAllArticles();

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
          <span className="text-[var(--ink)] font-semibold">Publication Archive</span>
        </nav>

        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            AL-IHYAHZ GAZETTE REPOSITORY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            All Published Dispatches
          </h1>
          <p className="text-base text-[var(--slate)] font-serif max-w-3xl leading-relaxed">
            The complete editorial record of student reporting, feature essays, interviews, and campus developments across Al-Ihyahz Academy.
          </p>

          {/* Quick Category Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--rule)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--slate)] mr-1">
              Filter by Desk:
            </span>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="text-xs px-2.5 py-1 bg-white border border-[var(--rule)] hover:border-[var(--forest)] hover:text-[var(--forest)] transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </header>

        {/* Chronological Articles Listing */}
        <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {allArticles.map((article) => (
            <article
              key={article.id}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 group items-start"
            >
              {/* Thumbnail */}
              <div className="md:col-span-3">
                <Link
                  href={`/article/${article.slug}`}
                  className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] border border-[var(--rule)]"
                >
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Text & Content */}
              <div className="md:col-span-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--forest)] mb-1">
                    <Link
                      href={`/category/${article.category}`}
                      className="hover:underline"
                    >
                      {article.categoryName}
                    </Link>
                    {article.kicker && (
                      <>
                        <span className="text-[var(--rule-dark)]">•</span>
                        <span className="text-[var(--slate)]">{article.kicker}</span>
                      </>
                    )}
                  </div>

                  <Link href={`/article/${article.slug}`}>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2">
                      {article.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-2 leading-relaxed mb-3">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--slate)] pt-2 border-t border-[var(--rule)]/60">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--ink)]">
                      By {article.author.name}
                    </span>
                    <span>({article.author.gradeLevel})</span>
                    <span>•</span>
                    <span>{article.publishedAt}</span>
                  </div>

                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[var(--forest)]" />
                    {article.readTime}
                  </span>
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
