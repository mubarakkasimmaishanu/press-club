import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, CheckCircle2, AlertTriangle, FileText, Mail, Info } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Editorial Standards & Code of Ethics",
  description:
    "The official journalistic standards, fact-checking principles, corrections policy, and ethical guidelines of Al-Ihyahz Press Club.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      <AnnouncementStrip />
      <Masthead />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--slate)] border-b border-[var(--rule)] pb-2.5">
          <Link href="/" className="hover:text-[var(--forest)]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--ink)] font-semibold">Editorial Policy & Ethics</span>
        </nav>

        {/* Page Title */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            STANDARDS OF JOURNALISTIC INTEGRITY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Editorial Policy & Code of Ethics
          </h1>
          <p className="text-lg text-[var(--slate)] font-serif leading-relaxed">
            The foundational charter governing reporting, attribution, student commentary, photographic authenticity, and corrections at Al-Ihyahz Press Club.
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-8 text-sm sm:text-base text-[var(--ink)] leading-relaxed font-serif">
          {/* Section 1: Core Commitment */}
          <section className="bg-white border border-[var(--rule)] p-6 sm:p-8">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--forest)]" />
              <span>1. Commitment to Truth & Responsible Reporting</span>
            </h2>
            <p className="mb-3">
              Al-Ihyahz Press Club exists to inform, educate, and reflect the student community of Al-Ihyahz Academy. As student journalists, we pledge to prioritize truthfulness, balance, and context above speed or sensation.
            </p>
            <p>
              We report on school events, academic performance, policy transitions, and campus traditions as they occur. Our writers do not invent events, embellish quotations, fabricate statistics, or present speculation as established fact.
            </p>
          </section>

          {/* Section 2: Verification and Sourcing */}
          <section className="bg-white border border-[var(--rule)] p-6 sm:p-8">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--forest)]" />
              <span>2. Sourcing and Attribution</span>
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Named Attribution:</strong> Whenever feasible, statements, facts, and opinions must be attributed to named individuals (e.g., student officials, subject teachers, or club coordinators).
              </li>
              <li>
                <strong>Primary Evidence:</strong> In reporting tournament outcomes or administrative announcements, student writers cross-reference official score sheets, notice boards, and patron briefs.
              </li>
              <li>
                <strong>Plagiarism:</strong> Plagiarism is strictly prohibited. Any student author found copying text from external publications, AI tools, or other writers without explicit attribution faces immediate disqualification from the newsroom.
              </li>
            </ul>
          </section>

          {/* Section 3: Separation of News and Opinion */}
          <section className="bg-white border border-[var(--rule)] p-6 sm:p-8">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--forest)]" />
              <span>3. Separation of News from Commentary</span>
            </h2>
            <p className="mb-3">
              We maintain a rigorous boundary between reported news and opinion:
            </p>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>
                <strong>News Articles:</strong> Must be written in an objective, neutral third-person voice without editorial bias or unverified editorializing.
              </li>
              <li>
                <strong>Opinion Columns & Editorials:</strong> Must be clearly identified with category labels, bylines, and student author credentials. They represent the personal analysis of the writer, not institutional policy.
              </li>
            </ul>
          </section>

          {/* Section 4: Photojournalism Ethics */}
          <section id="photo-ethics" className="bg-white border border-[var(--rule)] p-6 sm:p-8">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--forest)]" />
              <span>4. Photojournalism & Visual Integrity</span>
            </h2>
            <p className="mb-3">
              Visual journalism must document reality accurately. Student photojournalists must adhere to the following standards:
            </p>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>No staged scenarios presented as spontaneous campus events.</li>
              <li>No digital alteration, AI generation, or removal of visual elements that misrepresents the scene.</li>
              <li>Every image must carry an honest caption and named photographer credit.</li>
            </ul>
          </section>

          {/* Section 5: Corrections & Retractions */}
          <section id="corrections" className="bg-[#edeae1] border border-[var(--rule-dark)] p-6 sm:p-8">
            <h2 className="text-2xl font-serif font-bold text-[var(--burgundy)] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[var(--burgundy)]" />
              <span>5. Corrections & Retractions Policy</span>
            </h2>
            <p className="mb-4">
              We acknowledge mistakes promptly and transparently. When a factual error is discovered in a published article:
            </p>
            <ul className="space-y-2 list-disc list-inside text-sm mb-6">
              <li>The correction will be noted clearly at the foot of the updated article with the date and exact nature of the change.</li>
              <li>Significant factual retractions will be reviewed with our Faculty Patron and marked explicitly in our digital archive.</li>
            </ul>

            <div className="p-4 bg-white border border-[var(--rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
              <div>
                <strong className="text-[var(--ink)] block">Have a Correction to Report?</strong>
                <span className="text-[var(--slate)]">
                  Contact our Editor-in-Chief directly with article link and supporting proof.
                </span>
              </div>
              <a
                href={`mailto:${siteConfig.contact.submissionsEmail}?subject=Correction%20Request%20-%20Al-Ihyahz%20Gazette`}
                className="px-3.5 py-2 bg-[var(--forest)] text-white font-bold uppercase tracking-wider hover:bg-[var(--forest-dark)] transition-colors shrink-0 text-center"
              >
                Submit Correction Request
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
