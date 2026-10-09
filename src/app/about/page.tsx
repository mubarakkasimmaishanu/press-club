import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Shield, BookOpen, Users, Award, CheckCircle, Mail, MapPin } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { authors } from "@/data/authors";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About the Press Club | Editorial Charter & Board",
  description:
    "Learn about Al-Ihyahz Press Club, the official student journalism and media publication of Al-Ihyahz Academy, Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      <AnnouncementStrip />
      <Masthead />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--slate)] border-b border-[var(--rule)] pb-2.5">
          <Link href="/" className="hover:text-[var(--forest)]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--ink)] font-semibold">About Al-Ihyahz Press Club</span>
        </nav>

        {/* Page Title */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            INSTITUTIONAL EDITORIAL CHARTER
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            About Al-Ihyahz Press Club
          </h1>
          <p className="text-lg text-[var(--slate)] font-serif leading-relaxed">
            {siteConfig.descriptor}
          </p>
        </header>

        {/* Mission & Purpose */}
        <section className="bg-white border border-[var(--rule)] p-6 sm:p-8 mb-10">
          <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-4">
            Our Mission & Editorial Foundation
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[var(--ink)] leading-relaxed font-serif">
            <p>
              The Al-Ihyahz Press Club is the official student-led news organization and documentary publication of Al-Ihyahz Academy, Nigeria. Functioning under faculty advisorship, our primary mission is to provide rigorous, truthful, and balanced coverage of academic pursuits, campus culture, debate tournaments, scientific inquiries, and community outreach.
            </p>
            <p>
              We view secondary school journalism not merely as an extracurricular hobby, but as an indispensable training ground for critical media literacy, investigative ethics, democratic discourse, and clear communication. Through factual reporting and thoughtful commentary, our student reporters chronicle the evolving story of our academy with integrity and courage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-[var(--rule)]">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[var(--forest)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif font-bold text-sm text-[var(--ink)]">Verifiable Truth</h3>
                <p className="text-xs text-[var(--slate)] mt-1">
                  We check facts with primary campus sources before putting ink to paper or publishing online dispatches.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[var(--forest)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif font-bold text-sm text-[var(--ink)]">Student Empowerment</h3>
                <p className="text-xs text-[var(--slate)] mt-1">
                  Students manage the newsroom, write the leads, take the photographs, and debate editorial decisions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[var(--forest)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif font-bold text-sm text-[var(--ink)]">Ethical Standards</h3>
                <p className="text-xs text-[var(--slate)] mt-1">
                  Strict adherence to fair attribution, respectful debate, and transparent correction policies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Editorial Board */}
        <section id="editorial-board" className="mb-10">
          <div className="border-b border-[var(--ink)] pb-2 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
              The Student Editorial Board & Staff
            </h2>
            <p className="text-xs text-[var(--slate)]">
              Current masthead officers for the {siteConfig.currentEdition.session}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authors.map((author) => (
              <div
                key={author.id}
                className="bg-white border border-[var(--rule)] p-5 flex items-start gap-4"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[var(--rule)] bg-[#dedcd4] shrink-0">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[var(--ink)]">
                    {author.name}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--forest)] block">
                    {author.role}
                  </span>
                  <span className="text-[11px] text-[var(--slate)] block mb-2 font-mono">
                    {author.gradeLevel}
                  </span>
                  <p className="text-xs text-[var(--slate)] leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Independence & Institutional Relationship */}
        <section className="bg-[#edeae1] border border-[var(--rule-dark)] p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-3">
            Institutional Relationship & Advisorship
          </h2>
          <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed mb-4">
            Al-Ihyahz Press Club is sponsored by the <strong>{siteConfig.contact.patronName}</strong> of Al-Ihyahz Academy. While faculty advisors provide editorial training, legal guidance, and safety oversight, all editorial writing, story ideation, investigations, and layout designs originate from the student staff.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <Link
              href="/editorial-policy"
              className="text-[var(--forest)] hover:underline"
            >
              Read our full Editorial Standards Policy →
            </Link>
            <Link
              href="/contact#contribute"
              className="text-[var(--burgundy)] hover:underline"
            >
              Learn how to submit a story idea →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
