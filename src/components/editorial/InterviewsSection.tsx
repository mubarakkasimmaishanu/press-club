import Link from "next/link";
import Image from "next/image";
import { Mic, ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { SectionHeading } from "./SectionHeading";

interface InterviewsSectionProps {
  interviews: Article[];
}

export function InterviewsSection({ interviews }: InterviewsSectionProps) {
  if (!interviews || interviews.length === 0) return null;

  return (
    <section aria-label="Interviews and Profiles" className="mb-14">
      <SectionHeading
        title="Interviews & Profiles"
        kicker="Direct Discourse"
        href="/interviews"
        actionText="All Conversations"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interviews.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-[var(--rule)] p-6 flex flex-col sm:flex-row gap-6 group hover:border-[var(--forest)] transition-all"
          >
            {/* Portrait style image */}
            <div className="relative w-full sm:w-44 aspect-4/5 shrink-0 overflow-hidden bg-[#e8e6df] border border-[var(--rule)]">
              <Image
                src={item.featuredImage}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 176px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 bg-[var(--forest)] text-white p-1">
                <Mic className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Conversation Narrative */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--forest)] block mb-1">
                  {item.kicker || "THE INTERVIEW"}
                </span>
                <Link href={`/article/${item.slug}`}>
                  <h3 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-3 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--rule)] flex items-center justify-between text-[11px] text-[var(--slate)]">
                <span>Interviewer: {item.author.name}</span>
                <Link
                  href={`/article/${item.slug}`}
                  className="font-bold text-[var(--forest)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Transcript</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
