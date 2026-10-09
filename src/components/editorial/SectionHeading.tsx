import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  kicker?: string;
  href?: string;
  actionText?: string;
  badge?: string;
}

export function SectionHeading({
  title,
  kicker,
  href,
  actionText,
  badge,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[var(--ink)] pb-2 mb-6 gap-2">
      <div>
        {kicker && (
          <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--forest)] block mb-1">
            {kicker}
          </span>
        )}
        <div className="flex items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink)] tracking-tight">
            {title}
          </h2>
          {badge && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-[var(--forest)]/10 text-[var(--forest)] border border-[var(--forest)]/20">
              {badge}
            </span>
          )}
        </div>
      </div>

      {href && actionText && (
        <Link
          href={href}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--forest)] hover:text-[var(--burgundy)] transition-colors pb-0.5"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
