import Link from "next/link";
import { categories } from "@/data/categories";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function CategoryBrowse() {
  return (
    <section aria-label="Browse by Category" className="mb-14">
      <SectionHeading
        title="Editorial Desks & Sections"
        kicker="Directory"
        href="/news"
        actionText="Full Archive"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group p-4 bg-white border border-[var(--rule)] hover:border-[var(--forest)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono tracking-widest font-bold text-[var(--forest)] uppercase">
                  {cat.editorialTag}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--slate)] group-hover:text-[var(--forest)] transition-colors" />
              </div>
              <h3 className="text-base font-serif font-bold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors mb-1">
                {cat.name}
              </h3>
              <p className="text-[11px] text-[var(--slate)] line-clamp-2 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-[#f0eee9] text-[10px] uppercase font-bold tracking-wider text-[var(--forest)]">
              Explore Desk →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
