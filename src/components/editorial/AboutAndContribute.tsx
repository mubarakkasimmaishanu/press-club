import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Shield, BookOpen, Send, Mail, Users, FileCheck } from "lucide-react";

export function AboutAndContribute() {
  return (
    <section aria-label="About the Press Club and Student Contributions" className="mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* About Al-Ihyahz Press Club: 7 Columns */}
        <div className="lg:col-span-7 bg-white border border-[var(--rule)] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[var(--forest)]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--forest)]">
                About The Publication
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[var(--ink)] tracking-tight mb-3">
              Independent Student Journalism at {siteConfig.institution}
            </h3>

            <p className="text-sm text-[var(--ink)] leading-relaxed font-serif mb-4">
              Al-Ihyahz Press Club serves as the official student newsroom and documentary archive for {siteConfig.institution}, Nigeria. Founded on the bedrock of ethical inquiry and civic literacy, our editorial staff consists entirely of enrolled secondary students working under faculty mentorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-xs text-[var(--slate)] border-y border-[var(--rule)] py-4">
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--ink)] block">Editorial Integrity</strong>
                  <span>Strict adherence to verified sourcing, fact-checking, and responsible campus attribution.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--ink)] block">Student Mentorship</strong>
                  <span>Cultivating analytical writing, photojournalism, and investigative literacy in young Nigerians.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[11px] text-[var(--slate)] italic">
              Faculty Patron: {siteConfig.contact.patronName}
            </span>
            <Link
              href="/about"
              className="font-bold uppercase tracking-wider text-[var(--forest)] hover:text-[var(--forest-dark)] underline underline-offset-4"
            >
              Read Editorial Charter & Masthead →
            </Link>
          </div>
        </div>

        {/* Contributions & Stay Connected: 5 Columns */}
        <div className="lg:col-span-5 bg-[#edeae2] border border-[var(--rule-dark)] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[var(--burgundy)]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--burgundy)]">
                Student Submissions & Tips
              </span>
            </div>

            <h3 className="text-2xl font-serif font-black text-[var(--ink)] tracking-tight mb-2">
              Write for the Press Club
            </h3>

            <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed mb-4">
              Are you an Al-Ihyahz student with a story idea, an investigative pitch, an opinion column, or campus photographs? We welcome submissions across all form levels.
            </p>

            <div className="bg-white border border-[var(--rule)] p-3 text-xs text-[var(--slate)] mb-5 space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink)] font-semibold">
                <FileCheck className="w-4 h-4 text-[var(--forest)]" />
                <span>Submission Standards:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li>Articles must include your full name and form class.</li>
                <li>Opinions should observe respectful debate without personal attacks.</li>
                <li>Submit pitches via email or visit Media Lab 2 during prep recess.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href={`mailto:${siteConfig.contact.submissionsEmail}?subject=Story%20Pitch%20-%20Al-Ihyahz%20Press%20Club`}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--forest)] hover:bg-[var(--forest-dark)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Your Pitch to Desk</span>
            </a>
            <div className="text-center text-[10px] text-[var(--slate)] pt-1">
              Direct desk: <span className="font-mono text-[var(--ink)]">{siteConfig.contact.submissionsEmail}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
