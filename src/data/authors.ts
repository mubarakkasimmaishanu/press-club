import { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "hauwau-abubakar-toro",
    name: "Hauwa'u Abubakar Toro",
    role: "Editor-in-Chief & Lead Student Member",
    gradeLevel: "SS3 Diamond (Arts)",
    avatar: "/images/student_speech_valedictory.jpg",
    bio: "Head of the Editorial Board, keynote orator, and coordinator of student journalism dispatches across Al-Ihyahz Academy.",
  },
  {
    id: "safiyya-zakariya",
    name: "Safiyya Zakariya",
    role: "Deputy Editor & Senior Student Member",
    gradeLevel: "SS2 Gold (Sciences)",
    avatar: "/images/debate_speaker_junior.jpg",
    bio: "Lead student reporter, debate society officer, and coordinator of campus news coverage, event reporting, and feature stories.",
  },
  {
    id: "zainab-al-hassan",
    name: "Zainab Al-Hassan",
    role: "Features & Culture Editor",
    gradeLevel: "SS3 Emerald (Commercial)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Directs long-form reporting and cultural dispatches. Writes widely on student mental health, reading culture, and boarding school traditions.",
  },
  {
    id: "chidi-okafor",
    name: "Chidi Okafor",
    role: "Chief Photojournalist",
    gradeLevel: "SS2 Ruby (Arts)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Visual documentarian chronicling school life, sports competitions, and campus architectural transformations with Nikon & Sony DSLR setups.",
  },
  {
    id: "fatima-yusuf",
    name: "Fatima Yusuf",
    role: "Opinion & Letters Editor",
    gradeLevel: "SS3 Sapphire (Arts)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Oversees student discourse, open letters, and ethical debates. Dedicated to amplifying underrepresented student perspectives.",
  },
  {
    id: "malam-mubarak-kasim",
    name: "Malam Mubarak Kasim",
    role: "Press Club Master & Lead Patron",
    gradeLevel: "Faculty Patron & Editorial Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Head Press Club Master guiding student journalists in rigorous reporting, media ethics, verification standards, and public speaking excellence.",
  },
  {
    id: "malama-nabila",
    name: "Malama Nabila",
    role: "Press Club Mistress & Faculty Patron",
    gradeLevel: "Faculty Patron & Writing Mentor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Mentors student writers in creative composition, feature journalism, and investigative reporting techniques.",
  },
  {
    id: "malama-sumayya",
    name: "Malama Sumayya",
    role: "Press Club Mistress & Faculty Patron",
    gradeLevel: "Faculty Patron & Oratory Mentor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Guides student oratory, debate preparation, editorial proofreading, and newsletter publications.",
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}
