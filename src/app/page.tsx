import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Send, Camera, MessageSquareQuote, Shield } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import {
  getLeadStory,
  getSecondaryStories,
  getAllArticles,
  getOpinionArticles,
  photoStories,
} from "@/data/articles";
import { siteConfig } from "@/config/site";
import { LeadershipColumns } from "@/components/editorial/LeadershipColumns";

export default function HomePage() {
  const leadStory = getLeadStory();
  const secondaryStories = getSecondaryStories().slice(0, 2);
  const excludeIds = new Set([leadStory.id, ...secondaryStories.map((s) => s.id)]);
  const latestStories = getAllArticles().filter((a) => !excludeIds.has(a.id)).slice(0, 3);
  const opinions = getOpinionArticles().slice(0, 2);
  const featuredPhoto = photoStories[0];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      {/* 1. Slim Announcement & Edition Bar */}
      <AnnouncementStrip />

      {/* 2. Official Masthead & Navigation */}
      <Masthead />

      {/* 3. Streamlined Editorial Homepage */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-12">
        {/* Section 1: Front Page Showcase (Lead Story + 2 Side Stories) */}
        <section aria-label="Lead Stories" className="border-b border-[var(--rule)] pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Lead Story (8 Cols) */}
            <article className="lg:col-span-8 group">
              <span className="editorial-kicker text-[var(--forest)] font-bold block mb-2">
                {leadStory.kicker || "LEAD STORY"}
              </span>

              <Link href={`/article/${leadStory.slug}`}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[var(--ink)] hover:text-[var(--forest)] transition-colors leading-[1.12] mb-4">
                  {leadStory.title}
                </h2>
              </Link>

              <Link
                href={`/article/${leadStory.slug}`}
                className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-3 border border-[var(--rule)]"
              >
                <Image
                  src={leadStory.featuredImage}
                  alt={leadStory.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
              </Link>

              <div className="text-[11px] text-[var(--slate)] mb-3 flex justify-between items-center border-b border-[var(--rule)] pb-1.5">
                <span className="italic">{leadStory.imageCaption}</span>
                <span className="font-mono uppercase text-[10px]">{leadStory.imageCredit}</span>
              </div>

              <p className="text-base sm:text-lg text-[var(--slate)] font-serif leading-relaxed mb-4">
                {leadStory.summary}
              </p>

              <div className="flex items-center justify-between text-xs text-[var(--slate)] pt-2 border-t border-[var(--rule)]">
                <div>
                  <span className="font-semibold text-[var(--ink)]">
                    By {leadStory.author.name}
                  </span>
                  <span className="text-[11px] ml-1">({leadStory.author.gradeLevel})</span>
                  <span className="mx-2">•</span>
                  <span>{leadStory.publishedAt}</span>
                </div>

                <Link
                  href={`/article/${leadStory.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider text-[var(--forest)] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>

            {/* Top Side Dispatches (4 Cols) */}
            <aside className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[var(--rule)] space-y-6">
              <div className="border-b border-[var(--ink)] pb-1 text-xs font-bold uppercase tracking-widest text-[var(--ink)]">
                Campus Highlights
              </div>

              {secondaryStories.map((story) => (
                <article key={story.id} className="group border-b border-[var(--rule)] pb-6 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--forest)] block mb-1">
                    {story.categoryName}
                  </span>

                  <Link href={`/article/${story.slug}`}>
                    <h3 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2">
                      {story.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-2 leading-relaxed mb-3">
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

        {/* Section 2: Recent Dispatches (Clean 3-column row) */}
        <section aria-label="Recent Stories" className="border-b border-[var(--rule)] pb-10">
          <div className="flex items-center justify-between border-b border-[var(--ink)] pb-2 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
              Recent Dispatches
            </h2>
            <Link
              href="/news"
              className="text-xs font-semibold uppercase tracking-wider text-[var(--forest)] hover:underline flex items-center gap-1"
            >
              <span>View All News</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestStories.map((item) => (
              <article key={item.id} className="group bg-white p-4 border border-[var(--rule)] flex flex-col justify-between">
                <div>
                  <Link
                    href={`/article/${item.slug}`}
                    className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-3 border border-[var(--rule)]"
                  >
                    <Image
                      src={item.featuredImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--forest)] block mb-1">
                    {item.categoryName}
                  </span>

                  <Link href={`/article/${item.slug}`}>
                    <h3 className="text-lg font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[var(--slate)] line-clamp-2 leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--rule)] flex items-center justify-between text-[11px] text-[var(--slate)]">
                  <span>{item.publishedAt}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[var(--forest)]" />
                    {item.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Student Perspectives & Visual Dispatch (2 Columns) */}
        <section aria-label="Student Perspectives and Photo Dispatch" className="border-b border-[var(--rule)] pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Student Opinions (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between border-b border-[var(--burgundy)] pb-2 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquareQuote className="w-4 h-4 text-[var(--burgundy)]" />
                  <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
                    Student Perspectives
                  </h2>
                </div>
                <Link
                  href="/opinions"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--burgundy)] hover:underline"
                >
                  All Opinions →
                </Link>
              </div>

              <div className="space-y-4">
                {opinions.map((op) => (
                  <article
                    key={op.id}
                    className="p-5 bg-white border border-[var(--rule)] flex flex-col sm:flex-row gap-4 items-start group"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--burgundy)] shrink-0 bg-[#e8e6df]">
                      <Image
                        src={op.author.avatar}
                        alt={op.author.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[var(--slate)] mb-1">
                        <span className="font-bold text-[var(--ink)]">{op.author.name}</span>
                        <span>•</span>
                        <span>{op.author.gradeLevel}</span>
                      </div>
                      <Link href={`/article/${op.slug}`}>
                        <h3 className="text-lg font-serif font-bold text-[var(--ink)] group-hover:text-[var(--burgundy)] transition-colors leading-snug mb-1">
                          {op.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-[var(--slate)] line-clamp-2 leading-relaxed">
                        “{op.summary}”
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Photo Essay Feature (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between border-b border-[var(--forest)] pb-2 mb-6">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[var(--forest)]" />
                  <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
                    Campus in Focus
                  </h2>
                </div>
                <Link
                  href="/photo-stories"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--forest)] hover:underline"
                >
                  Gallery →
                </Link>
              </div>

              {featuredPhoto && (
                <div className="bg-white border border-[var(--rule)] p-4 group">
                  <Link
                    href="/photo-stories"
                    className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] mb-3 border border-[var(--rule)]"
                  >
                    <Image
                      src={featuredPhoto.coverImage}
                      alt={featuredPhoto.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <h3 className="font-serif font-bold text-lg text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors mb-1">
                    {featuredPhoto.title}
                  </h3>
                  <p className="text-xs text-[var(--slate)] line-clamp-2 leading-relaxed mb-3">
                    {featuredPhoto.description}
                  </p>
                  <div className="text-[11px] text-[var(--slate)] pt-2 border-t border-[var(--rule)] flex justify-between items-center">
                    <span>Photo: {featuredPhoto.photographer.name}</span>
                    <span className="font-mono text-[10px] text-[var(--forest)] font-semibold">
                      {featuredPhoto.photos.length} Photos
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: School Management & Press Leadership Directory */}
        <LeadershipColumns />

        {/* Section 5: Newsroom & Student Submissions (Clean, unified card) */}
        <section aria-label="About the Newsroom" className="bg-white border border-[var(--rule)] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--forest)] block mb-1">
                The Student Newsroom
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink)] mb-2">
                Al-Ihyahz Press Club
              </h2>
              <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed mb-4">
                The official student journalism and media publication of Al-Ihyahz Academy, Nigeria. Dedicated to factual reporting, student expression, and campus storytelling under faculty mentorship.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link href="/about" className="text-[var(--forest)] hover:underline">
                  Our Mission & Board →
                </Link>
                <Link href="/editorial-policy" className="text-[var(--slate)] hover:underline">
                  Editorial Standards →
                </Link>
                <Link href="/contact" className="text-[var(--slate)] hover:underline">
                  Press Room Office →
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#edeae1] p-5 border border-[var(--rule-dark)] text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-1">
                Have a Story or Tip?
              </span>
              <p className="text-xs text-[var(--slate)] mb-3">
                Students and staff are invited to pitch story ideas, event coverage, or letters.
              </p>
              <Link
                href="/contact#contribute"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-[var(--forest)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--forest-dark)] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit a Story</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Institutional Footer */}
      <Footer />
    </div>
  );
}
