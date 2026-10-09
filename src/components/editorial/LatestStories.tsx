import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { SectionHeading } from "./SectionHeading";

interface LatestStoriesProps {
  articles: Article[];
}

export function LatestStories({ articles }: LatestStoriesProps) {
  return (
    <section aria-label="Latest Publications" className="mb-14">
      <SectionHeading
        title="Latest Publications"
        kicker="The News Feed"
        href="/news"
        actionText="View All News Archive"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col justify-between border-b md:border-b-0 pb-6 md:pb-0 border-[var(--rule)] group"
          >
            <div>
              {/* Thumbnail */}
              <Link
                href={`/article/${article.slug}`}
                className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-3 border border-[var(--rule)]"
              >
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                />
              </Link>

              {/* Kicker & Category */}
              <div className="flex items-center gap-2 mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--forest)]">
                <Link
                  href={`/category/${article.category}`}
                  className="hover:text-[var(--burgundy)] transition-colors"
                >
                  {article.categoryName}
                </Link>
                {article.kicker && (
                  <>
                    <span className="text-[var(--rule-dark)]">•</span>
                    <span className="text-[var(--slate)] font-semibold truncate">
                      {article.kicker}
                    </span>
                  </>
                )}
              </div>

              {/* Headline */}
              <Link href={`/article/${article.slug}`}>
                <h3 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2 line-clamp-2">
                  {article.title}
                </h3>
              </Link>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-2 leading-relaxed mb-4">
                {article.summary}
              </p>
            </div>

            {/* Metadata Footer */}
            <div className="pt-2 border-t border-[var(--rule)] flex items-center justify-between text-[11px] text-[var(--slate)]">
              <div>
                <span className="font-medium text-[var(--ink)]">
                  {article.author.name}
                </span>
                <span className="block text-[10px] text-[var(--slate)]">
                  {article.publishedAt}
                </span>
              </div>
              <span className="flex items-center gap-1 font-mono text-[10px]">
                <Clock className="w-3 h-3 text-[var(--forest)]" />
                {article.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
