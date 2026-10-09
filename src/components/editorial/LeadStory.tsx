import Link from "next/link";
import Image from "next/image";
import { Clock, User, ArrowRight } from "lucide-react";
import { Article } from "@/types";

interface LeadStoryProps {
  leadStory: Article;
  secondaryStories: Article[];
}

export function LeadStory({ leadStory, secondaryStories }: LeadStoryProps) {
  return (
    <section aria-label="Lead Editorial Section" className="mb-12">
      {/* Newspaper Top Rules */}
      <div className="border-b border-[var(--rule)] pb-1 mb-6 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--forest)] flex items-center gap-1.5">
          <span className="w-2 h-2 bg-[var(--forest)] inline-block"></span>
          Front Page Dispatches
        </span>
        <span className="text-[11px] text-[var(--slate)] font-serif italic">
          Selected by the Student Editorial Board
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:divide-x lg:divide-[var(--rule)]">
        {/* Dominant Lead Story: 8 Columns */}
        <article className="lg:col-span-8 flex flex-col justify-between group">
          <div>
            {/* Kicker */}
            {leadStory.kicker && (
              <span className="editorial-kicker text-[var(--burgundy)] block mb-2 font-bold">
                {leadStory.kicker}
              </span>
            )}

            {/* Headline */}
            <Link href={`/article/${leadStory.slug}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[var(--ink)] leading-[1.08] hover:text-[var(--forest)] transition-colors mb-4">
                {leadStory.title}
              </h2>
            </Link>

            {/* Large Lead Image */}
            <div className="relative aspect-16/9 sm:aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-3 border border-[var(--rule)]">
              <Image
                src={leadStory.featuredImage}
                alt={leadStory.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Image Caption & Credit */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[11px] text-[var(--slate)] mb-4 border-b border-[var(--rule)] pb-2 gap-1">
              <p className="italic text-[var(--slate)]">{leadStory.imageCaption}</p>
              <span className="font-medium shrink-0 text-[10px] text-[var(--ink)] uppercase">
                {leadStory.imageCredit}
              </span>
            </div>

            {/* Lead Summary */}
            <p className="text-base sm:text-lg text-[var(--ink)] leading-relaxed font-serif mb-5">
              {leadStory.summary}
            </p>
          </div>

          {/* Byline and CTA */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[var(--rule)]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--ink)]">
                By {leadStory.author.name}
              </span>
              <span className="text-[var(--slate)]">({leadStory.author.gradeLevel})</span>
              <span className="text-[var(--rule-dark)]">•</span>
              <span className="text-[var(--slate)]">{leadStory.publishedAt}</span>
              <span className="text-[var(--rule-dark)]">•</span>
              <span className="flex items-center gap-1 text-[var(--slate)]">
                <Clock className="w-3 h-3" />
                {leadStory.readTime}
              </span>
            </div>

            <Link
              href={`/article/${leadStory.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--forest)] hover:text-[var(--burgundy)] transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>

        {/* Secondary Editorial Stories: 4 Columns */}
        <aside className="lg:col-span-4 lg:pl-8 flex flex-col divide-y divide-[var(--rule)] space-y-6">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--slate)] pt-1">
            Top Developing Stories
          </div>

          {secondaryStories.map((story) => (
            <article key={story.id} className="pt-5 first:pt-0 group">
              {story.kicker && (
                <span className="editorial-kicker text-[var(--forest)] block mb-1">
                  {story.kicker}
                </span>
              )}

              <Link href={`/article/${story.slug}`}>
                <h3 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2">
                  {story.title}
                </h3>
              </Link>

              {story.featuredImage && (
                <div className="relative aspect-16/9 w-full overflow-hidden bg-[#e8e6df] mb-2 border border-[var(--rule)]">
                  <Image
                    src={story.featuredImage}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              )}

              <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-2 mb-3 leading-relaxed">
                {story.summary}
              </p>

              <div className="flex items-center justify-between text-[11px] text-[var(--slate)]">
                <span>By {story.author.name}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {story.readTime}
                </span>
              </div>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
