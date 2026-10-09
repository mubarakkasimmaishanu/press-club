import Link from "next/link";
import Image from "next/image";
import { MessageSquareQuote, ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { SectionHeading } from "./SectionHeading";

interface OpinionSectionProps {
  opinions: Article[];
}

export function OpinionSection({ opinions }: OpinionSectionProps) {
  return (
    <section aria-label="Opinion and Student Voices" className="mb-14">
      <SectionHeading
        title="Student Voices & Commentary"
        kicker="The Editorial Page"
        href="/opinions"
        actionText="All Opinion Columns"
        badge="Commentary"
      />

      <div className="bg-[#f0ece1] border-t-2 border-b-2 border-[var(--burgundy)] p-6 sm:p-8">
        {/* Editorial Disclaimer strip */}
        <div className="flex items-center gap-2 text-xs text-[var(--burgundy)] font-bold uppercase tracking-wider mb-6 pb-2 border-b border-[var(--rule-dark)]">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Independent Student Commentary — Views Expressed Belong to Authors</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opinions.map((op) => (
            <article
              key={op.id}
              className="bg-white p-5 border border-[var(--rule)] flex flex-col justify-between group"
            >
              <div>
                {/* Author Avatar & Bylines */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--rule)]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--burgundy)] shrink-0 bg-[#e0ded6]">
                    <Image
                      src={op.author.avatar}
                      alt={op.author.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-[var(--ink)] block">
                      {op.author.name}
                    </span>
                    <span className="text-[11px] text-[var(--burgundy)] font-medium block">
                      {op.author.role}
                    </span>
                    <span className="text-[10px] text-[var(--slate)] block">
                      {op.author.gradeLevel}
                    </span>
                  </div>
                </div>

                {/* Kicker */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--slate)] block mb-1">
                  {op.kicker || "PERSPECTIVE"}
                </span>

                {/* Headline */}
                <Link href={`/article/${op.slug}`}>
                  <h3 className="text-lg font-serif font-bold text-[var(--ink)] group-hover:text-[var(--burgundy)] transition-colors leading-snug mb-2">
                    {op.title}
                  </h3>
                </Link>

                {/* Pull-quote / Excerpt */}
                <p className="text-xs sm:text-sm text-[var(--slate)] font-serif italic leading-relaxed mb-4">
                  “{op.summary}”
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--rule)] flex items-center justify-between text-[11px] text-[var(--slate)]">
                <span>{op.publishedAt}</span>
                <Link
                  href={`/article/${op.slug}`}
                  className="font-bold text-[var(--burgundy)] hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Read Column</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
