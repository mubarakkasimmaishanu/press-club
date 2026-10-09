import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "school-news",
    name: "School News",
    slug: "school-news",
    description: "Official bulletins, academic policy updates, examination briefings, and developments across Al-Ihyahz Academy campuses.",
    editorialTag: "NEWS DESK",
  },
  {
    id: "news-current-affairs",
    name: "News & Current Affairs",
    slug: "news-current-affairs",
    description: "Regional educational developments, inter-school national conferences, and external events impacting secondary education in Nigeria.",
    editorialTag: "PUBLIC AFFAIRS",
  },
  {
    id: "features",
    name: "Features & Long-Form",
    slug: "features",
    description: "In-depth journalistic investigations, student cohort journeys, STEM laboratory initiatives, and cultural essays.",
    editorialTag: "SPECIAL REPORT",
  },
  {
    id: "interviews",
    name: "Interviews & Profiles",
    slug: "interviews",
    description: "Direct conversations with school leadership, alumni scholars, subject teachers, and pioneering student council officers.",
    editorialTag: "THE CONVERSATION",
  },
  {
    id: "opinions",
    name: "Opinions & Student Voices",
    slug: "opinions",
    description: "Commentaries, student perspectives, letters to the editor, and analytical discourse on adolescent leadership and education.",
    editorialTag: "COMMENTARY",
  },
  {
    id: "education",
    name: "Education & STEM",
    slug: "education",
    description: "Curriculum discussions, Olympiad preparation, robotics clubs, digital literacy, and scholarship resources for secondary students.",
    editorialTag: "ACADEMICS",
  },
  {
    id: "campus-life",
    name: "Campus Life & Culture",
    slug: "campus-life",
    description: "Hostel traditions, dining hall debates, arts exhibitions, Islamic society symposiums, and daily life at Al-Ihyahz Academy.",
    editorialTag: "COMMUNITY",
  },
  {
    id: "events",
    name: "Events & Competitions",
    slug: "events",
    description: "Inter-House athletic games, national debate tournaments, speech competitions, and graduation valedictory ceremonies.",
    editorialTag: "DISPATCHES",
  },
  {
    id: "photo-stories",
    name: "Photojournalism",
    slug: "photo-stories",
    description: "Visual storytelling capturing candid campus moments, athletic triumphs, and community outreach through the lens of student photojournalists.",
    editorialTag: "GALLERY",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
