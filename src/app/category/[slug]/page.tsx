import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ArrowRight, BookOpen, Layers } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { getArticlesByCategory } from "@/data/articles";
import { categories, getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/config/site";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} | ${siteConfig.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      <AnnouncementStrip />
      <Masthead />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--slate)] border-b border-[var(--rule)] pb-2.5">
          <Link href="/" className="hover:text-[var(--forest)]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--ink)] font-semibold">{category.name}</span>
        </nav>

        {/* Category Header Masthead */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--forest)] font-bold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>EDITORIAL DESK: {category.editorialTag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            {category.name}
          </h1>

          <p className="text-base sm:text-lg text-[var(--slate)] font-serif max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </header>

        {/* Articles List / Grid */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[var(--rule)] p-5 flex flex-col justify-between group hover:border-[var(--forest)] transition-all"
              >
                <div>
                  <Link
                    href={`/article/${article.slug}`}
                    className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-3 border border-[var(--rule)]"
                  >
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {article.kicker && (
                    <span className="editorial-kicker text-[var(--forest)] block mb-1">
                      {article.kicker}
                    </span>
                  )}

                  <Link href={`/article/${article.slug}`}>
                    <h3 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-3 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--rule)] flex items-center justify-between text-[11px] text-[var(--slate)]">
                  <div>
                    <span className="font-medium text-[var(--ink)] block">
                      By {article.author.name}
                    </span>
                    <span className="text-[10px]">{article.publishedAt}</span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <Clock className="w-3 h-3 text-[var(--forest)]" />
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-[var(--rule-dark)] bg-white p-8">
            <BookOpen className="w-10 h-10 mx-auto text-[var(--forest)]/50 mb-3" />
            <h3 className="text-lg font-serif font-bold text-[var(--ink)]">
              No Published Dispatches Yet in {category.name}
            </h3>
            <p className="text-xs text-[var(--slate)] max-w-md mx-auto mt-2 leading-relaxed">
              Student correspondents are actively reporting for this desk. Check back for upcoming editions or submit a tip.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--forest)] hover:underline"
            >
              ← Return to Front Page
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
