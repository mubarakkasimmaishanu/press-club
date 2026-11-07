import Image from "next/image";
import { School, Award, Sparkles, UserCheck, ShieldCheck, GraduationCap } from "lucide-react";
import { schoolManagement, pressClubMasters, studentHighRoles } from "@/data/leadership";

export function LeadershipColumns() {
  return (
    <section aria-label="School & Press Club Leadership" className="mb-14">
      {/* Editorial Header */}
      <div className="border-b-2 border-[var(--ink)] pb-3 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--forest)] block mb-1">
            GOVERNANCE & EDITORIAL DIRECTORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[var(--ink)] tracking-tight">
            School Management, Patrons & Student Leadership
          </h2>
        </div>
        <span className="text-xs text-[var(--slate)] font-serif italic">
          Official Roster • 2026/2027 Academic Session
        </span>
      </div>

      {/* 3 Structured Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Column 1: School Management (Directors, Principal, Teachers) */}
        <div className="bg-white border border-[var(--rule)] p-6 flex flex-col h-full shadow-xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[var(--rule)]">
            <div className="w-8 h-8 rounded-full bg-[var(--forest)]/10 text-[var(--forest)] flex items-center justify-center shrink-0">
              <School className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[var(--ink)] leading-tight">
                School Management
              </h3>
              <span className="text-[10px] font-mono uppercase text-[var(--slate)]">
                Directorate, Principal & Academic Deans
              </span>
            </div>
          </div>

          <div className="space-y-5 divide-y divide-[var(--rule)]">
            {schoolManagement.map((person) => (
              <div key={person.id} className="pt-4 first:pt-0">
                {person.image ? (
                  /* Dignified Framed Portrait for School Director */
                  <div className="mb-3">
                    <div className="flex items-start gap-4 bg-[#f8f7f4] p-3 border border-[var(--rule)]">
                      {/* Executive Portrait Frame */}
                      <div className="relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 overflow-hidden border-2 border-[var(--forest)] ring-1 ring-[var(--forest)]/20 shadow-xs bg-[#e8e6df]">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[var(--forest)] text-white inline-block mb-1">
                          School Directorate
                        </span>
                        <h4 className="font-serif font-bold text-base text-[var(--ink)] leading-tight">
                          {person.name}
                        </h4>
                        <div className="text-xs font-semibold text-[var(--forest)] mt-0.5">
                          {person.role}
                        </div>
                        <div className="text-[10.5px] font-mono text-[var(--slate)] mt-0.5">
                          {person.departmentOrClass}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-[var(--slate)] leading-relaxed mt-2.5 px-0.5">
                      {person.bio}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-serif font-bold text-base text-[var(--ink)]">
                        {person.name}
                      </h4>
                      {person.isHighRole && (
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[#edeae1] border border-[var(--rule)] text-[var(--ink)] shrink-0">
                          Dean
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-[var(--forest)] mb-0.5">
                      {person.role}
                    </div>
                    <div className="text-[11px] font-mono text-[var(--slate)] mb-1.5">
                      {person.departmentOrClass}
                    </div>
                    <p className="text-xs text-[var(--slate)] leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Press Club Masters & Faculty Advisors */}
        <div className="bg-white border border-[var(--rule)] p-6 flex flex-col h-full shadow-xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[var(--rule)]">
            <div className="w-8 h-8 rounded-full bg-[var(--forest)]/10 text-[var(--forest)] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[var(--ink)] leading-tight">
                Press Club Masters
              </h3>
              <span className="text-[10px] font-mono uppercase text-[var(--slate)]">
                Faculty Patrons & Advisory Desk
              </span>
            </div>
          </div>

          <div className="space-y-4 divide-y divide-[var(--rule)]">
            {pressClubMasters.map((master) => (
              <div key={master.id} className="pt-3.5 first:pt-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-serif font-bold text-base text-[var(--ink)]">
                    {master.name}
                  </h4>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[#edeae1] border border-[var(--rule)] text-[var(--forest)] shrink-0">
                    Faculty Patron
                  </span>
                </div>
                <div className="text-xs font-semibold text-[var(--forest)] mb-0.5">
                  {master.role}
                </div>
                <div className="text-[11px] font-mono text-[var(--slate)] mb-1">
                  {master.departmentOrClass}
                </div>
                <p className="text-xs text-[var(--slate)] leading-relaxed">
                  {master.bio}
                </p>
              </div>
            ))}

            {/* Advisory Charter Box */}
            <div className="pt-4 bg-[#fbfaf8] p-3.5 border border-[var(--rule)] text-xs text-[var(--slate)] mt-3">
              <strong className="text-[var(--ink)] block mb-1">Faculty Mentorship Mandate:</strong>
              <p className="text-[11px] leading-relaxed">
                The Press Club Masters provide mentorship on journalistic ethics, primary verification, editorial clarity, and decorum, training student voices to report with truth and maturity.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Student Members */}
        <div className="bg-white border-2 border-[var(--forest)] p-6 flex flex-col h-full relative shadow-xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[var(--rule)]">
            <div className="w-8 h-8 rounded-full bg-[var(--burgundy)]/10 text-[var(--burgundy)] flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[var(--ink)] leading-tight">
                Student Members
              </h3>
              <span className="text-[10px] font-mono uppercase text-[var(--slate)]">
                Student Editorial Board & Reporters
              </span>
            </div>
          </div>

          <div className="space-y-5 divide-y divide-[var(--rule)]">
            {studentHighRoles.map((student) => (
              <div key={student.id} className="pt-4 first:pt-0">
                <div className="flex items-start gap-4 bg-[#f8f7f4] p-3 border border-[var(--rule)]">
                  {/* Dignified Framed Student Portrait */}
                  {student.image && (
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 overflow-hidden border-2 border-[var(--forest)] ring-1 ring-[var(--forest)]/20 shadow-xs bg-[#e8e6df]">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        sizes="96px"
                        className="object-cover object-top"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[var(--burgundy)] text-white inline-block mb-1">
                      Student Member
                    </span>
                    <h4 className="font-serif font-bold text-base text-[var(--ink)] leading-tight">
                      {student.name}
                    </h4>
                    <div className="text-xs font-semibold text-[var(--forest)] mt-0.5">
                      {student.role}
                    </div>
                    <div className="text-[10.5px] font-mono text-[var(--slate)] mt-0.5">
                      {student.departmentOrClass}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[var(--slate)] leading-relaxed mt-2.5 px-0.5">
                  {student.bio}
                </p>
              </div>
            ))}

            {/* Editorial Mandate Box */}
            <div className="pt-4 bg-[#fbfaf8] p-3.5 border border-[var(--rule)] text-xs text-[var(--slate)] mt-3">
              <strong className="text-[var(--ink)] block mb-1">Student Newsroom Fellowship:</strong>
              <p className="text-[11px] leading-relaxed">
                Hauwa&apos;u Abubakar Toro and Safiyya Zakariya steer student reporting, interview coverage, and debate tournament documentation under the faculty guidance of the Press Club Masters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
