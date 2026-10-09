"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Search, BookOpen, Send, ShieldCheck, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenuDrawer({
  isOpen,
  onClose,
  onOpenSearch,
}: MobileMenuDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
      className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-[88%] max-w-sm bg-[var(--paper)] h-full shadow-2xl flex flex-col border-r border-[var(--ink)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top brand & close */}
        <div className="p-4 border-b border-[var(--rule)] flex items-center justify-between bg-white">
          <div>
            <span className="font-serif font-black text-lg tracking-tight text-[var(--ink)] block">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--forest)] block">
              Al-Ihyahz Academy, Nigeria
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[var(--rule)] text-[var(--ink)] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search trigger */}
        <div className="p-4 border-b border-[var(--rule)]">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3 py-2 bg-white border border-[var(--rule)] text-xs text-[var(--slate)] hover:border-[var(--forest)] transition-colors text-left"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[var(--forest)]" />
              <span>Search publication archive...</span>
            </span>
            <span className="text-[10px] font-mono bg-[var(--paper)] px-1.5 py-0.5 border border-[var(--rule)]">
              Search
            </span>
          </button>
        </div>

        {/* Main Section Links */}
        <div className="p-4 border-b border-[var(--rule)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--slate)] block mb-2">
            Main Sections
          </span>
          <nav className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="px-2.5 py-1.5 text-sm font-medium text-[var(--ink)] hover:bg-white hover:text-[var(--forest)] border-l-2 border-transparent hover:border-[var(--forest)] transition-all"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Categories Directory */}
        <div className="p-4 border-b border-[var(--rule)] bg-[#f3f0e8]/50">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--slate)] block mb-2">
            Editorial Desks
          </span>
          <div className="grid grid-cols-1 gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-2 py-1 text-xs text-[var(--ink)] hover:text-[var(--forest)]"
              >
                <span>{cat.name}</span>
                <span className="text-[9px] font-mono text-[var(--slate)]">
                  {cat.editorialTag}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Actions & Submit */}
        <div className="p-4 space-y-2 border-b border-[var(--rule)]">
          <Link
            href="/contact#contribute"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2 bg-[var(--forest)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--forest-dark)] transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit a Story / Tip</span>
          </Link>
          <Link
            href="/editorial-policy"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-[var(--rule)] text-xs font-semibold text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--forest)]" />
            <span>Editorial Standards</span>
          </Link>
        </div>

        {/* Press Room Contact Footer */}
        <div className="p-4 mt-auto text-[11px] text-[var(--slate)] space-y-1.5 bg-[#ede9dd]">
          <div className="flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--forest)]" />
            <span>{siteConfig.contact.pressRoomLocation}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 shrink-0 text-[var(--forest)]" />
            <span>{siteConfig.contact.submissionsEmail}</span>
          </div>
          <p className="pt-2 text-[10px] italic border-t border-[var(--rule)]">
            {siteConfig.descriptor}
          </p>
        </div>
      </div>
    </div>
  );
}
