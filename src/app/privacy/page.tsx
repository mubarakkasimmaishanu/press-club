import Link from "next/link";
import { Metadata } from "next";
import { Shield, Lock, Eye, Users } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Student Privacy & Media Policy",
  description:
    "Privacy protections, media consent guidelines, and data policies for students, parents, and contributors at Al-Ihyahz Press Club.",
};

export default function PrivacyPolicyPage() {
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
          <span className="text-[var(--ink)] font-semibold">Privacy Policy</span>
        </nav>

        {/* Page Title */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            DATA PROTECTION & STUDENT SAFEGUARDING
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Student Privacy Policy
          </h1>
          <p className="text-lg text-[var(--slate)] font-serif leading-relaxed">
            How Al-Ihyahz Press Club safeguards the privacy, personal details, and photography rights of enrolled secondary students.
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[var(--ink)] leading-relaxed font-serif bg-white border border-[var(--rule)] p-6 sm:p-10">
          <section>
            <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--forest)]" />
              <span>1. Student Identity and Attribution</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed">
              We respect the privacy of adolescent scholars. Byline identification is limited to the student’s first and last name, along with their academic arm/form (e.g., “SS2 Science”). Personal contact numbers, residential hostel room numbers, home addresses, or private phone details are never published under any circumstances.
            </p>
          </section>

          <section className="pt-6 border-t border-[var(--rule)]">
            <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[var(--forest)]" />
              <span>2. Photography and Media Consent</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed">
              All photography undertaken during school assemblies, sports meets, laboratory demonstrations, and academic debates is conducted under Al-Ihyahz Academy institutional media guidelines. Any student, parent, or guardian wishing to request the removal or redaction of a photograph from our digital archive may submit a formal request to our faculty patron at <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--forest)] font-semibold underline">{siteConfig.contact.email}</a>.
            </p>
          </section>

          <section className="pt-6 border-t border-[var(--rule)]">
            <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[var(--forest)]" />
              <span>3. Web Data and Tracking</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed">
              This publication operates as an educational reading portal. We do not sell user data, run third-party advertising networks, or deploy commercial tracking cookies. Technical logs collected by our host provider (Vercel) are used strictly for security monitoring and aggregated page-view analytics.
            </p>
          </section>

          <section className="pt-6 border-t border-[var(--rule)]">
            <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--forest)]" />
              <span>4. Editorial Inquiries & Oversight</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed">
              Questions regarding our privacy protocol or student safety should be directed to:
            </p>
            <div className="mt-2 text-xs font-mono text-[var(--slate)] bg-[#f8f7f4] p-3 border border-[var(--rule)]">
              Faculty Patron: Department of English & Media Studies<br />
              Al-Ihyahz Academy, Kano & Abuja, Nigeria<br />
              Email: {siteConfig.contact.email}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
