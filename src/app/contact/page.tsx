import Link from "next/link";
import { Metadata } from "next";
import { Mail, MapPin, Send, HelpCircle, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Student Contributions",
  description:
    "Submit story ideas, article pitches, letters to the editor, or contact the Al-Ihyahz Press Club editorial desk.",
};

export default function ContactPage() {
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
          <span className="text-[var(--ink)] font-semibold">Contact & Submissions</span>
        </nav>

        {/* Page Title */}
        <header className="mb-10 pb-6 border-b-2 border-[var(--ink)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--forest)] font-bold block mb-1">
            PRESS ROOM DISPATCH & COMMUNITY TIP LINE
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[var(--ink)] mb-3">
            Contact & Contributions
          </h1>
          <p className="text-lg text-[var(--slate)] font-serif leading-relaxed">
            The Al-Ihyahz Press Club welcomes story leads, guest essays, letters to the editor, and photo submissions from students, faculty, and alumni.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Submissions Guide: 7 Columns */}
          <section id="contribute" className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-[var(--rule)] p-6 sm:p-8">
              <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
                <Send className="w-5 h-5 text-[var(--forest)]" />
                <span>How to Pitch a Story</span>
              </h2>

              <p className="text-sm text-[var(--slate)] leading-relaxed mb-6">
                We believe that every student has a voice and every corner of our academy holds a story worth telling. Whether you witnessed a remarkable classroom debate, built a new robotics model, or wish to share a personal essay, here is how you can submit:
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[var(--ink)]">
                <div className="flex items-start gap-3 p-3 bg-[#f8f7f4] border border-[var(--rule)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                  <div>
                    <strong>1. Student Reporting & Club Activities:</strong>
                    <p className="text-xs text-[var(--slate)] mt-0.5">
                      Send a 2-paragraph summary of the event or topic, who was involved, and when it occurred. Include high-resolution photos if available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f8f7f4] border border-[var(--rule)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                  <div>
                    <strong>2. Opinion Columns & Commentary:</strong>
                    <p className="text-xs text-[var(--slate)] mt-0.5">
                      Columns should be 400 to 700 words, focusing on secondary school life, educational reform, literature, or student leadership.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f8f7f4] border border-[var(--rule)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                  <div>
                    <strong>3. Photojournalism & Essays:</strong>
                    <p className="text-xs text-[var(--slate)] mt-0.5">
                      Submit original JPEG/RAW files accompanied by precise captions identifying subjects, locations, and context.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Mail Actions */}
              <div className="mt-8 pt-6 border-t border-[var(--rule)]">
                <a
                  href={`mailto:${siteConfig.contact.submissionsEmail}?subject=Story%20Pitch%20-%20Al-Ihyahz%20Press%20Club`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--forest)] hover:bg-[var(--forest-dark)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Pitch to Editor ({siteConfig.contact.submissionsEmail})</span>
                </a>
                <span className="block text-center text-[11px] text-[var(--slate)] mt-2 italic">
                  Opens your default email client with pre-formatted submission headers.
                </span>
              </div>
            </div>

            {/* Letters to the Editor */}
            <div id="letters" className="bg-[#edeae1] border border-[var(--rule-dark)] p-6">
              <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-2">
                Letters to the Editor
              </h3>
              <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed mb-4">
                Have thoughts on a published article? Readers may submit concise letters responding to our coverage. Letters must include your full name and student form or institutional designation.
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Letter%20to%20the%20Editor`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--forest)] hover:underline"
              >
                <span>Write a Letter to the Editor →</span>
              </a>
            </div>
          </section>

          {/* Contact Details & Newsroom Desk: 5 Columns */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[var(--rule)] p-6">
              <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-4 pb-2 border-b border-[var(--rule)]">
                Newsroom Headquarters
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--slate)] block mb-1">
                    Physical Newsroom
                  </span>
                  <div className="flex items-start gap-2 text-[var(--ink)] font-medium">
                    <MapPin className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                    <span>{siteConfig.contact.pressRoomLocation}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--slate)] block mb-1">
                    Editorial Inquiries
                  </span>
                  <div className="flex items-center gap-2 text-[var(--ink)] font-medium">
                    <Mail className="w-4 h-4 text-[var(--forest)] shrink-0" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--slate)] block mb-1">
                    Submissions & Tips
                  </span>
                  <div className="flex items-center gap-2 text-[var(--ink)] font-medium">
                    <Mail className="w-4 h-4 text-[var(--forest)] shrink-0" />
                    <a href={`mailto:${siteConfig.contact.submissionsEmail}`} className="hover:underline">
                      {siteConfig.contact.submissionsEmail}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--slate)] block mb-1">
                    Newsroom Hours
                  </span>
                  <p className="text-[var(--slate)]">
                    Monday to Friday: 1:30 PM – 2:15 PM (Afternoon Recess) and 4:30 PM – 5:30 PM (Club Activities Hour)
                  </p>
                </div>
              </div>
            </div>

            {/* Sourcing Transparency Note */}
            <div className="bg-[#edeae1] border border-[var(--rule-dark)] p-5 text-xs text-[var(--slate)] space-y-2">
              <div className="flex items-center gap-1.5 text-[var(--burgundy)] font-bold uppercase text-[11px]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Verification & Sourcing Policy</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Al-Ihyahz Press Club does not publish unverified gossip, defamatory statements, or anonymous rumors. Every submission undergoes review by student editors and our faculty patron.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
