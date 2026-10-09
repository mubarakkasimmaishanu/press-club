import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { SectionHeading } from "./SectionHeading";

interface FeaturesSpotlightProps {
  features: Article[];
}

export function FeaturesSpotlight({ features }: FeaturesSpotlightProps) {
  if (!features || features.length === 0) return null;
  const mainFeature = features[0];
  const sideFeatures = features.slice(1);

  return (
    <section aria-label="Features and Long-form Journalism" className="mb-14">
      <SectionHeading
        title="Features & Long-Form Journalism"
        kicker="Special Reporting"
        href="/features"
        actionText="All Features"
        badge="In-Depth"
      />

      <div className="bg-[#edeae2] border border-[var(--rule-dark)] p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Long-form Visual */}
          <div className="lg:col-span-7">
            <Link
              href={`/article/${mainFeature.slug}`}
              className="block relative aspect-16/10 w-full overflow-hidden bg-black/10 border border-[var(--rule-dark)] group"
            >
              <Image
                src={mainFeature.featuredImage}
                alt={mainFeature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#202522] text-[#F7F5F0] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                Long-form Read
              </div>
            </Link>
            <div className="text-[11px] text-[var(--slate)] mt-1.5 flex justify-between">
              <span className="italic">{mainFeature.imageCaption}</span>
              <span className="text-[10px] uppercase font-mono">{mainFeature.imageCredit}</span>
            </div>
          </div>

          {/* Main Long-form Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--burgundy)] block mb-1">
                {mainFeature.kicker || "CANDID REPORTAGE"}
              </span>

              <Link href={`/article/${mainFeature.slug}`}>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[var(--ink)] hover:text-[var(--forest)] transition-colors leading-tight mb-3">
                  {mainFeature.title}
                </h3>
              </Link>

              <p className="text-sm text-[var(--ink)] leading-relaxed font-serif mb-4">
                {mainFeature.summary}
              </p>

              {mainFeature.pullQuote && (
                <blockquote className="my-4 pl-3 border-l-2 border-[var(--forest)] text-xs italic font-serif text-[var(--slate)]">
                  “{mainFeature.pullQuote.quote}”
                </blockquote>
              )}
            </div>

            <div className="pt-3 border-t border-[var(--rule)] flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-[var(--ink)] block">
                  By {mainFeature.author.name}
                </span>
                <span className="text-[11px] text-[var(--slate)]">
                  {mainFeature.author.gradeLevel} • {mainFeature.publishedAt}
                </span>
              </div>
              <Link
                href={`/article/${mainFeature.slug}`}
                className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider text-[var(--forest)] hover:text-[var(--burgundy)] transition-colors"
              >
                <span>Read Feature</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary feature strips if any */}
        {sideFeatures.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[var(--rule-dark)] grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideFeatures.map((item) => (
              <div key={item.id} className="flex gap-4 items-start group">
                <Link
                  href={`/article/${item.slug}`}
                  className="relative w-28 h-20 shrink-0 overflow-hidden bg-black/10 border border-[var(--rule)]"
                >
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </Link>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--forest)] block">
                    {item.categoryName}
                  </span>
                  <Link href={`/article/${item.slug}`}>
                    <h4 className="text-sm font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </Link>
                  <span className="text-[10px] text-[var(--slate)] mt-1 block">
                    By {item.author.name} • {item.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
