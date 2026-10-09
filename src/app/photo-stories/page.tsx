import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Camera, Calendar, Images, User } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { photoStories } from "@/data/articles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Photojournalism & Visual Stories",
  description:
    "Visual storytelling and photo essays capturing campus events, athletics, and everyday moments at Al-Ihyahz Academy.",
};

export default function PhotoStoriesPage() {
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
          <span className="text-[var(--ink)] font-semibold">Photojournalism</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            THE LENS & VISUAL DOCUMENTATION DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Photo Stories & Dispatches
          </h1>
          <p className="text-base sm:text-lg text-[var(--slate)] font-serif max-w-3xl leading-relaxed">
            Documenting authentic school life, sports tournaments, laboratory breakthroughs, and boarding traditions through the lenses of student photojournalists.
          </p>
        </header>

        {/* Photo Essays Collection */}
        <div className="space-y-16">
          {photoStories.map((story) => (
            <article
              key={story.id}
              className="bg-white border border-[var(--rule)] p-6 sm:p-8"
            >
              {/* Story Intro */}
              <div className="max-w-3xl mb-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--slate)] mb-2">
                  <span className="flex items-center gap-1 font-semibold text-[var(--forest)]">
                    <Camera className="w-3.5 h-3.5" />
                    {story.photographer.name} ({story.photographer.gradeLevel})
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {story.eventDate}
                  </span>
                  <span>•</span>
                  <span className="font-mono text-[11px] bg-[#f0eee9] px-2 py-0.5">
                    {story.photos.length} Photographs
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-black text-[var(--ink)] mb-3">
                  {story.title}
                </h2>
                <p className="text-sm sm:text-base text-[var(--slate)] font-serif leading-relaxed">
                  {story.description}
                </p>
              </div>

              {/* Photo Essay Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {story.photos.map((photo, pIdx) => (
                  <figure key={pIdx} className="group">
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df] border border-[var(--rule)]">
                      <Image
                        src={photo.url}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-[var(--slate)] flex justify-between items-start gap-2">
                      <span className="italic">{photo.caption}</span>
                      <span className="text-[10px] uppercase font-mono shrink-0 text-[var(--ink)]">
                        {photo.credit}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {story.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#f0eee9] text-[var(--slate)] text-[10px]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-[var(--slate)] italic">
                  Al-Ihyahz Press Club Visual Archive
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
