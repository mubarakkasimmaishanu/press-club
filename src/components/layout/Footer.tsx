import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldAlert, BookOpen, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1b201d] text-[#e6e8e2] border-t-4 border-[var(--forest)] mt-16 text-xs">
      {/* Top Banner: Mission & Verification statement */}
      <div className="border-b border-[#2d342f] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[var(--forest)] flex items-center justify-center text-white shrink-0 font-serif font-black text-lg">
              AI
            </div>
            <div>
              <span className="font-serif font-bold text-base text-white block">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-[#a1a69e]">
                Student Journalism Forum of {siteConfig.institution}, Nigeria
              </span>
            </div>
          </div>

          <div className="text-xs text-[#a1a69e] max-w-xl">
            <p>
              <strong className="text-white">Editorial Notice:</strong> {siteConfig.editorialPolicySummary}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Column 1: Identity & Dispatch */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[var(--forest-light)] block">
              Publication Dispatch
            </span>
            <p className="text-xs text-[#c2c6bd] leading-relaxed">
              Serving as the documentary voice and journalistic archive for students, faculty, and the wider school community. Dedicated to truth, critical literacy, and thoughtful discourse.
            </p>

            <div className="pt-2 space-y-1.5 text-[11px] text-[#a1a69e]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--forest-light)]" />
                <span>{siteConfig.contact.pressRoomLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-[var(--forest-light)]" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[10px] font-mono tracking-wide uppercase px-2 py-1 bg-[#262c28] border border-[#38403a] text-[#c2c6bd]">
                {siteConfig.currentEdition.volume} • {siteConfig.currentEdition.term} ({siteConfig.currentEdition.session})
              </span>
            </div>
          </div>

          {/* Column 2: Editorial Desks */}
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-white block mb-3 border-b border-[#2d342f] pb-1">
              Desks & Sections
            </span>
            <ul className="space-y-2">
              {siteConfig.footerNavigation.categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#a1a69e] hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Publication */}
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-white block mb-3 border-b border-[#2d342f] pb-1">
              The Newsroom
            </span>
            <ul className="space-y-2">
              {siteConfig.footerNavigation.publication.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#a1a69e] hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Standards & Policies */}
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-white block mb-3 border-b border-[#2d342f] pb-1">
              Standards & Legal
            </span>
            <ul className="space-y-2">
              {siteConfig.footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#a1a69e] hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal, Copyright & Attribution Strip */}
      <div className="border-t border-[#262d27] bg-[#141815] py-4 text-[11px] text-[#868b83]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved. Published for {siteConfig.institution}.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#a1a69e] font-medium">
              Student-led secondary school journalism
            </span>
            <span className="text-[#454c47]">•</span>
            <Link
              href="/editorial-policy#corrections"
              className="text-[#a1a69e] hover:text-white underline underline-offset-2"
            >
              Request a Correction
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
