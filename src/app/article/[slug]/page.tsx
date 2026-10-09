import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Calendar, User, ArrowLeft, Share2, AlertCircle, Bookmark } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/data/articles";
import { siteConfig } from "@/config/site";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | ${siteConfig.name}`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      <AnnouncementStrip />
      <Masthead />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--slate)] border-b border-[var(--rule)] pb-2.5">
          <Link href="/" className="hover:text-[var(--forest)]">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/category/${article.category}`}
            className="hover:text-[var(--forest)] font-medium"
          >
            {article.categoryName}
          </Link>
          <span>/</span>
          <span className="truncate max-w-[200px] sm:max-w-md text-[var(--ink)]">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          {/* Category & Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <Link
              href={`/category/${article.category}`}
              className="text-xs font-bold uppercase tracking-wider text-[var(--forest)] hover:underline"
            >
              {article.categoryName}
            </Link>
            {article.kicker && (
              <>
                <span className="text-[var(--rule-dark)]">•</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--burgundy)]">
                  {article.kicker}
                </span>
              </>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] leading-[1.12] mb-4">
            {article.title}
          </h1>

          {/* Standfirst / Summary */}
          <p className="text-lg sm:text-xl text-[var(--slate)] font-serif leading-relaxed mb-6 italic">
            {article.summary}
          </p>

          {/* Byline and Publication Metadata */}
          <div className="flex flex-wrap items-center justify-between border-y border-[var(--rule)] py-3 text-xs gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--rule)] bg-[#dedcd4] shrink-0">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-[var(--ink)] block">
                  By {article.author.name}
                </span>
                <span className="text-[11px] text-[var(--slate)] block">
                  {article.author.role} • {article.author.gradeLevel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[var(--slate)]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[var(--forest)]" />
                {article.publishedAt}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-[var(--forest)]" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image & Caption */}
        <figure className="mb-8">
          <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] border border-[var(--rule)]">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-[var(--slate)] flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--rule)] pb-2 gap-1">
            <span className="italic">{article.imageCaption}</span>
            <span className="font-semibold text-[10px] uppercase shrink-0 text-[var(--ink)]">
              {article.imageCredit}
            </span>
          </figcaption>
        </figure>

        {/* Sample Content Banner */}
        {article.isSampleContent && (
          <aside className="mb-8 p-3 bg-[#edeae1] border-l-2 border-[var(--forest)] text-xs text-[var(--slate)] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--ink)]">Editorial Notice:</strong> {article.editorialNote || "This article is an editorial sample demonstrating the publication formatting of Al-Ihyahz Press Club."}
            </div>
          </aside>
        )}

        {/* Article Body Content */}
        <article className="prose prose-lg max-w-none text-[var(--ink)] leading-relaxed space-y-5 text-base sm:text-lg font-serif">
          {article.body.map((paragraph, idx) => (
            <p
              key={idx}
              className={`${idx === 0 ? "editorial-dropcap" : ""} leading-[1.8]`}
            >
              {paragraph}
            </p>
          ))}

          {/* Pull quote if available */}
          {article.pullQuote && (
            <figure className="my-8 py-5 px-6 bg-[#edeae2] border-l-4 border-[var(--forest)] not-italic">
              <blockquote className="text-xl sm:text-2xl font-serif font-bold text-[var(--ink)] leading-snug">
                “{article.pullQuote.quote}”
              </blockquote>
              <figcaption className="mt-2 text-xs uppercase tracking-wider font-sans font-semibold text-[var(--forest)]">
                — {article.pullQuote.attribution}
              </figcaption>
            </figure>
          )}
        </article>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-10 pt-4 border-t border-[var(--rule)] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--slate)]">
              Tags:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-white border border-[var(--rule)] text-[var(--ink)] hover:border-[var(--forest)] transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-8 p-6 bg-white border border-[var(--rule)] flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--forest)] shrink-0 bg-[#e0ded6]">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-serif font-bold text-lg text-[var(--ink)]">
                {article.author.name}
              </h3>
              <span className="text-[11px] font-semibold text-[var(--forest)] uppercase">
                • {article.author.role}
              </span>
            </div>
            <p className="text-xs text-[var(--slate)] leading-relaxed mb-1">
              {article.author.bio}
            </p>
            <span className="text-[10px] font-mono text-[var(--slate)]">
              Affiliation: {article.author.gradeLevel}, Al-Ihyahz Academy
            </span>
          </div>
        </div>

        {/* Correction Policy & Tip Line footer */}
        <div className="mt-6 p-4 bg-[#edeae1] border border-[var(--rule)] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[var(--slate)] gap-3">
          <div>
            <strong className="text-[var(--ink)] block">Correction or Sourcing Inquiry?</strong>
            <span>
              Al-Ihyahz Press Club upholds rigorous verification. Report factual inaccuracies directly to the newsroom.
            </span>
          </div>
          <Link
            href="/editorial-policy#corrections"
            className="text-xs font-bold uppercase tracking-wider text-[var(--forest)] hover:underline shrink-0"
          >
            Submit Correction Request →
          </Link>
        </div>

        {/* Related Stories */}
        {relatedArticles.length > 0 && (
          <section className="mt-14 pt-8 border-t-2 border-[var(--ink)]">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--ink)] mb-6">
              More From {article.categoryName}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <article key={rel.id} className="group">
                  <Link
                    href={`/article/${rel.slug}`}
                    className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-2.5 border border-[var(--rule)]"
                  >
                    <Image
                      src={rel.featuredImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </Link>
                  <Link href={`/article/${rel.slug}`}>
                    <h4 className="font-serif font-bold text-base text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </Link>
                  <span className="text-[10px] text-[var(--slate)] mt-1 block">
                    {rel.publishedAt} • {rel.readTime}
                  </span>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
