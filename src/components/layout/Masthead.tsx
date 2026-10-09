"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Send, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SearchModal } from "./SearchModal";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export function Masthead() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[var(--paper)] border-b border-[var(--rule)]">
        {/* Top Masthead Row: Meta, Wordmark, and Fast Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
          {/* Newspaper Header Meta: Left / Center / Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 items-center border-b border-[var(--rule)] pb-3 text-xs text-[var(--slate)]">
            {/* Left metadata */}
            <div className="hidden md:flex flex-col">
              <span className="font-semibold text-[var(--ink)] tracking-wider uppercase text-[11px]">
                {siteConfig.institution}
              </span>
              <span className="text-[11px] text-[var(--slate)]">
                {siteConfig.motto}
              </span>
            </div>

            {/* Mobile menu trigger + Logo on small screens */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-[var(--rule)] text-[var(--ink)] hover:border-[var(--ink)] text-xs font-medium"
                aria-label="Open navigation menu"
              >
                <Menu className="w-4 h-4" />
                <span>Sections</span>
              </button>
            </div>

            {/* Center: Publication volume info */}
            <div className="text-right md:text-center">
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 bg-[#eae7de] border border-[var(--rule)] text-[var(--ink)]">
                {siteConfig.currentEdition.session}
              </span>
            </div>

            {/* Right: Search & Submit CTAs */}
            <div className="hidden md:flex items-center justify-end gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-1.5 text-xs text-[var(--ink)] hover:text-[var(--forest)] px-2 py-1 border border-transparent hover:border-[var(--rule)] transition-all"
                title="Search Articles"
              >
                <Search className="w-3.5 h-3.5 text-[var(--forest)]" />
                <span className="font-medium">Search</span>
              </button>

              <Link
                href="/contact#contribute"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--paper)] bg-[var(--forest)] hover:bg-[var(--forest-dark)] px-3 py-1.5 transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>Submit Story</span>
              </Link>
            </div>
          </div>

          {/* Central Newspaper Masthead Wordmark */}
          <div className="text-center py-5 sm:py-7">
            <Link href="/" className="inline-block group focus:outline-hidden">
              <span className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[var(--forest)] mb-1">
                The Official Student Publication of {siteConfig.institution}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-[var(--ink)] leading-none hover:text-[#183025] transition-colors">
                {siteConfig.name.toUpperCase()}
              </h1>
            </Link>

            <div className="mt-3 flex items-center justify-center gap-3 max-w-xl mx-auto">
              <div className="h-px bg-[var(--rule-dark)] flex-1" />
              <p className="text-xs sm:text-sm font-serif italic text-[var(--slate)] tracking-wide shrink-0">
                {siteConfig.descriptor}
              </p>
              <div className="h-px bg-[var(--rule-dark)] flex-1" />
            </div>
          </div>

          {/* Mobile search bar trigger */}
          <div className="md:hidden pt-1 pb-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3 py-2 bg-white border border-[var(--rule)] text-xs text-[var(--slate)]"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[var(--forest)]" />
                <span>Search news, features, opinions...</span>
              </span>
              <span className="text-[10px] font-mono bg-[var(--paper)] px-1 border border-[var(--rule)]">
                FIND
              </span>
            </button>
          </div>
        </div>

        {/* Primary Desktop Navigation Bar with double rules */}
        <div className="border-t-2 border-b border-[var(--ink)] bg-[var(--paper)] hidden md:block">
          <nav
            aria-label="Main Navigation"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <ul className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase py-2.5 overflow-x-auto no-scrollbar">
              {siteConfig.navigation.map((item) => (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className="text-[var(--ink)] hover:text-[var(--forest)] px-2.5 py-1 border-b-2 border-transparent hover:border-[var(--forest)] transition-all"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Interactive Mobile Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}
