import { siteConfig } from "@/config/site";
import { Bell, Calendar, Compass } from "lucide-react";
import Link from "next/link";

export function AnnouncementStrip() {
  const { currentEdition, institutionLocation } = siteConfig;

  return (
    <aside aria-label="Edition strip" className="bg-[#202522] text-[#F7F5F0] text-xs border-b border-[#2d332f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
        {/* Left: Dateline and edition volume */}
        <div className="flex items-center gap-3 text-[11px] font-medium text-[#c0c2b8]">
          <span className="flex items-center gap-1.5 text-[#F7F5F0]">
            <Calendar className="w-3 h-3 text-[#c0c2b8]" />
            {currentEdition.publishedDate}
          </span>
          <span className="hidden sm:inline text-[#555a56]">•</span>
          <span className="hidden sm:inline">
            {currentEdition.volume}, {currentEdition.issue} ({currentEdition.session})
          </span>
          <span className="hidden md:inline text-[#555a56]">•</span>
          <span className="hidden md:flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#c0c2b8]" />
            {institutionLocation}
          </span>
        </div>

        {/* Center / Right: Genuine Breaking Notice or Current Edition label */}
        <div className="flex items-center gap-2 text-[11px]">
          {currentEdition.breakingNotice ? (
            <div className="flex items-center gap-2">
              <span className="bg-[#873D42] text-white text-[9.5px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-none">
                Update
              </span>
              <span className="truncate max-w-[280px] sm:max-w-md text-[#F7F5F0]">
                {currentEdition.breakingNotice}
              </span>
            </div>
          ) : (
            <span className="text-[#a5a9a5] italic">
              Official Digital Edition — Al-Ihyahz Academy Press Club
            </span>
          )}

          <Link
            href="/editorial-policy"
            className="hidden lg:inline text-[#c0c2b8] hover:text-white underline underline-offset-2 ml-2 transition-colors"
          >
            Editorial Code
          </Link>
        </div>
      </div>
    </aside>
  );
}
