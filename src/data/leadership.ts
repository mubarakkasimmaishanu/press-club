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
    name: "Alhaji (Dr.) Mustapha Al-Ihyahz",
    role: "Chairman & Executive Director",
    category: "management",
    departmentOrClass: "Governing Council",
    bio: "Visionary founder of Al-Ihyahz Academy, championing academic excellence, moral discipline, and digital transformation.",
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
    name: "Malam Abubakar Sadiq",
    role: "Press Club Master & Faculty Patron",
    category: "patrons",
    departmentOrClass: "Department of English & Media Studies",
    bio: "Senior English master and patron of the Press Club, mentoring student journalists in ethical reporting, fact-checking, and editorial literacy.",
    isHighRole: true,
  },
  {
    id: "master-2",
    name: "Mrs. Zainab Ibrahim",
    role: "Assistant Press Club Mistress & ICT Patron",
    category: "patrons",
    departmentOrClass: "Department of Computer Science & ICT",
    bio: "Coordinates the digital publishing suite, broadcast recording equipment, and web dissemination for student dispatches.",
    isHighRole: false,
  },
];

export const studentHighRoles: LeadershipMember[] = [
  {
    id: "stu-1",
    name: "Amina Bello",
    role: "Editor-in-Chief, Press Club",
    category: "students",
    departmentOrClass: "SS3 Diamond (Arts)",
    bio: "Chief editorial director of the Gazette, award-winning national orator, and valedictory speaker.",
    image: "/images/student_speech_valedictory.jpg",
    isHighRole: true,
  },
  {
    id: "stu-2",
    name: "Farouk Ibrahim",
    role: "President, Press Club & JETS Lead",
    category: "students",
    departmentOrClass: "SS2 Gold (Sciences)",
    bio: "Head of investigative reporting, senior debate champion, and solar energy project team coordinator.",
    image: "/images/trophy_champions.jpg",
    isHighRole: true,
  },
  {
    id: "stu-3",
    name: "Tunde Adeleke",
    role: "Head Boy & Student Council Liaison",
    category: "students",
    departmentOrClass: "SS3 Ruby (Sciences)",
    bio: "Senior prefect of the Academy and liaison between the Student Representative Council and the Press Room.",
    image: "/images/academic_graduates.jpg",
    isHighRole: true,
  },
  {
    id: "stu-4",
    name: "Maryam Al-Hassan",
    role: "Head Girl & Literary Prefect",
    category: "students",
    departmentOrClass: "SS3 Emerald (Commercial)",
    bio: "Senior school prefect, campus literacy coordinator, and lead writer for cultural features.",
    image: "/images/debate_speaker_junior.jpg",
    isHighRole: true,
  },
  {
    id: "stu-5",
    name: "Chidi Okafor",
    role: "Chief Photojournalist",
    category: "students",
    departmentOrClass: "SS2 Ruby (Arts)",
    bio: "Leads the photography bureau, capturing sports tournaments, assembly dispatches, and campus photo essays.",
    image: "/images/press_club_cohort.jpg",
    isHighRole: false,
  },
  {
    id: "stu-6",
    name: "Fatima Yusuf",
    role: "Opinion & Letters Editor",
    category: "students",
    departmentOrClass: "SS3 Sapphire (Arts)",
    bio: "Curates commentary, student submissions, and open letters on secondary education reform.",
    isHighRole: false,
  },
];
