"use client";

import { useEffect, useState, useRef } from "react";
import { Search, X, ArrowUpRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { searchArticles } from "@/data/articles";
import { Article } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 1) {
      setResults(searchArticles(val));
    } else {
      setResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[var(--paper)] border-2 border-[var(--ink)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--rule)] bg-white gap-3">
          <Search className="w-5 h-5 text-[var(--slate)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id="search-modal-title"
            value={query}
            onChange={handleSearch}
            placeholder="Search headlines, authors, topics (e.g. debate, solar, waec)..."
            className="w-full bg-transparent text-sm sm:text-base text-[var(--ink)] placeholder:text-[var(--slate)] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              className="text-xs text-[var(--slate)] hover:text-[var(--ink)] px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 hover:bg-[var(--rule)] text-[var(--slate)] hover:text-[var(--ink)] transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[var(--rule)]">
          {query.trim().length === 0 ? (
            <div className="py-8 text-center text-sm text-[var(--slate)]">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-[var(--forest)]/60" />
              <p className="font-serif italic">Type keywords to search the Al-Ihyahz Press archive.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-xs">
                <span className="font-medium text-[var(--ink)]">Suggested:</span>
                {["Debate", "Solar Inverter", "WAEC CBT", "Opinions", "Inter-House"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setQuery(tag);
                      setResults(searchArticles(tag));
                    }}
                    className="px-2 py-0.5 bg-white border border-[var(--rule)] hover:border-[var(--forest)] hover:text-[var(--forest)] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((article) => (
              <article key={article.id} className="py-3.5 first:pt-0 last:pb-0 group">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[var(--forest)] mb-1">
                  <span>{article.categoryName}</span>
                  <span className="text-[var(--rule-dark)]">•</span>
                  <span className="text-[var(--slate)] font-normal flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <Link
                  href={`/article/${article.slug}`}
                  onClick={onClose}
                  className="block group"
                >
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors line-clamp-1 flex items-center justify-between">
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2 text-[var(--forest)]" />
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--slate)] line-clamp-2 mt-1">
                    {article.summary}
                  </p>
                </Link>
                <div className="mt-1.5 text-[11px] text-[var(--slate)]">
                  By <span className="font-medium text-[var(--ink)]">{article.author.name}</span> ({article.author.gradeLevel}) • {article.publishedAt}
                </div>
              </article>
            ))
          ) : (
            <div className="py-8 text-center text-sm text-[var(--slate)]">
              <p>No published articles match “{query}”.</p>
              <p className="text-xs mt-1">Check your spelling or try broader terms like “news” or “student”.</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-[#edeae1] px-4 py-2 text-[11px] text-[var(--slate)] flex justify-between items-center border-t border-[var(--rule)]">
          <span>Search index updated for current term</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
