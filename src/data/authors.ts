import { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "amina-bello",
    name: "Amina Bello",
    role: "Editor-in-Chief",
    gradeLevel: "SS3 Diamond (Arts)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Head of the Editorial Board, two-time Northern Schools Debating Champion, and aspiring investigative journalist focusing on educational equity.",
  },
  {
    id: "farouk-ibrahim",
    name: "Farouk Ibrahim",
    role: "Senior Campus Reporter",
    gradeLevel: "SS2 Gold (Sciences)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Covers STEM initiatives, student council governance, and laboratory innovations. Passionate about green energy on secondary school campuses.",
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
    id: "malam-abubakar-sadiq",
    name: "Malam Abubakar Sadiq",
    role: "Faculty Editorial Advisor",
    gradeLevel: "Head of English & Literature",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Senior educator and patron of the Press Club, mentoring student journalists in verified fact-checking, ethical media literacy, and libel principles.",
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}
