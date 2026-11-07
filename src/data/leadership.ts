export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  category: "management" | "patrons" | "students";
  departmentOrClass: string;
  bio: string;
  image?: string;
  isHighRole?: boolean;
}

export const schoolManagement: LeadershipMember[] = [
  {
    id: "dir-1",
    name: "Engr. Zaharaddeen Haruna",
    role: "School Director",
    category: "management",
    departmentOrClass: "Directorate & Governing Council",
    bio: "School Director of Al-Ihyahz Academy, overseeing strategic vision, institutional infrastructure, and student leadership development.",
    image: "/images/director.jpg",
    isHighRole: true,
  },
  {
    id: "dir-2",
    name: "Dr. Idris Mahmud",
    role: "Academy Principal",
    category: "management",
    departmentOrClass: "School Administration",
    bio: "Principal of Al-Ihyahz Academy, guiding academic standards, international college admissions, and student civic development.",
    isHighRole: true,
  },
  {
    id: "dir-3",
    name: "Mrs. Victoria Adeyemi",
    role: "Vice Principal (Academics)",
    category: "management",
    departmentOrClass: "Academic Directorate",
    bio: "Supervises senior secondary WAEC/NECO curricula, STEM laboratory programs, and computer-based assessment transitions.",
    isHighRole: true,
  },
  {
    id: "dir-4",
    name: "Ustaz Mohammed Bello",
    role: "Vice Principal (Administration & Student Affairs)",
    category: "management",
    departmentOrClass: "Administration & Hostels",
    bio: "Oversees campus discipline, hostel governance, sports coordination, and boarding student welfare.",
    isHighRole: false,
  },
];

export const pressClubMasters: LeadershipMember[] = [
  {
    id: "master-1",
    name: "Malam Mubarak Kasim",
    role: "Press Club Master & Lead Patron",
    category: "patrons",
    departmentOrClass: "Faculty Patron & Editorial Director",
    bio: "Head Press Club Master guiding student journalists in rigorous reporting, media ethics, verification standards, and public speaking excellence.",
    isHighRole: true,
  },
  {
    id: "master-2",
    name: "Malama Nabila",
    role: "Press Club Mistress & Faculty Patron",
    category: "patrons",
    departmentOrClass: "Department of Humanities & Literature",
    bio: "Mentors student writers in creative composition, feature journalism, and investigative reporting techniques.",
    isHighRole: true,
  },
  {
    id: "master-3",
    name: "Malama Sumayya",
    role: "Press Club Mistress & Faculty Patron",
    category: "patrons",
    departmentOrClass: "Department of Languages & Communication",
    bio: "Guides student oratory, debate preparation, editorial proofreading, and newsletter publications.",
    isHighRole: true,
  },
];

export const studentHighRoles: LeadershipMember[] = [
  {
    id: "stu-1",
    name: "Hauwa'u Abubakar Toro",
    role: "Editor-in-Chief & Student Member",
    category: "students",
    departmentOrClass: "Senior Secondary (SS3)",
    bio: "Senior student journalist, keynote orator, and Editor-in-Chief coordinating news dispatches, assembly reports, and student editorial investigations across Al-Ihyahz Academy.",
    image: "/images/student_speech_valedictory.jpg",
    isHighRole: true,
  },
  {
    id: "stu-2",
    name: "Safiyya Zakariya",
    role: "Deputy Editor & Student Member",
    category: "students",
    departmentOrClass: "Senior Secondary (SS2)",
    bio: "Lead student reporter, debate society officer, and Deputy Editor leading event reporting, academic coverage, and junior press mentorship.",
    image: "/images/debate_speaker_junior.jpg",
    isHighRole: true,
  },
];

export const studentMembers = studentHighRoles;
