import Link from "next/link";
import Image from "next/image";
import { Camera, Images, ArrowRight } from "lucide-react";
import { photoStories } from "@/data/articles";
import { SectionHeading } from "./SectionHeading";

export function PhotoEssaysGrid() {
  return (
    <section aria-label="Photojournalism and Campus Events" className="mb-14">
      <SectionHeading
        title="Photojournalism & Visual Stories"
        kicker="The Lens Desk"
        href="/photo-stories"
        actionText="View Full Gallery"
        badge="Photo Essay"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photoStories.map((story) => (
          <article
            key={story.id}
            className="bg-white border border-[var(--rule)] overflow-hidden group hover:border-[var(--forest)] transition-all"
          >
            {/* Visual Cover */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e6df]">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 flex items-center gap-1.5 backdrop-blur-xs">
                <Images className="w-3.5 h-3.5 text-[var(--forest-light)]" />
                <span>{story.photos.length} Photographs</span>
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-5">
              <div className="flex items-center justify-between text-[11px] text-[var(--slate)] mb-1.5">
                <span className="flex items-center gap-1 font-medium text-[var(--forest)]">
                  <Camera className="w-3 h-3" />
                  {story.photographer.name} ({story.photographer.role})
                </span>
                <span>{story.eventDate}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug mb-2">
                {story.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed mb-4">
                {story.description}
              </p>

              <div className="pt-3 border-t border-[var(--rule)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {story.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-[#f0eee9] text-[var(--slate)] px-2 py-0.5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/photo-stories"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--forest)] hover:text-[var(--burgundy)] transition-colors"
                >
                  <span>Explore Photo Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
