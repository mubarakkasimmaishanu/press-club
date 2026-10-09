export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  institution: string;
  institutionLocation: string;
  motto: string;
  descriptor: string;
  currentEdition: {
    volume: string;
    issue: string;
    term: string;
    session: string;
    publishedDate: string;
    breakingNotice?: string;
  };
  navigation: NavItem[];
  footerNavigation: {
    categories: NavItem[];
    publication: NavItem[];
    legal: NavItem[];
  };
  contact: {
    email: string;
    submissionsEmail: string;
    pressRoomLocation: string;
    patronName: string;
  };
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  editorialPolicySummary: string;
}

export const siteConfig: SiteConfig = {
  name: "Al-Ihyahz Press Club",
  shortName: "The Al-Ihyahz Gazette",
  institution: "Al-Ihyahz Academy",
  institutionLocation: "Kano & Abuja, Nigeria",
  motto: "Veritas, Integritas et Vox Studiosorum",
  descriptor: "Student Journalism. School Voices. Community Stories.",
  currentEdition: {
    volume: "Vol. IV",
    issue: "No. 2",
    term: "First Term",
    session: "2026/2027 Academic Session",
    publishedDate: "Friday, 9 October 2026",
    // Only display breaking notice if genuine breaking news exists
    breakingNotice: "Academy Debate Delegation advances to National Finals in Abuja",
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "School News", href: "/category/school-news" },
    { title: "Current Affairs", href: "/category/news-current-affairs" },
    { title: "Features", href: "/features" },
    { title: "Interviews", href: "/interviews" },
    { title: "Opinions", href: "/opinions" },
    { title: "Education", href: "/category/education" },
    { title: "Campus Life", href: "/category/campus-life" },
    { title: "Events", href: "/category/events" },
    { title: "Photo Stories", href: "/photo-stories" },
    { title: "About", href: "/about" },
  ],
  footerNavigation: {
    categories: [
      { title: "School News", href: "/category/school-news" },
      { title: "Features & Long-form", href: "/features" },
      { title: "Student Opinions", href: "/opinions" },
      { title: "Staff & Student Interviews", href: "/interviews" },
      { title: "Campus Life & Culture", href: "/category/campus-life" },
      { title: "Photojournalism", href: "/photo-stories" },
      { title: "Events & Debates", href: "/category/events" },
      { title: "Education & STEM", href: "/category/education" },
    ],
    publication: [
      { title: "About Al-Ihyahz Press Club", href: "/about" },
      { title: "Editorial Board & Writers", href: "/about#editorial-board" },
      { title: "Submit a Story / Tip", href: "/contact#contribute" },
      { title: "Letters to the Editor", href: "/contact#letters" },
      { title: "Contact Press Room", href: "/contact" },
      { title: "Publication Archive", href: "/news" },
    ],
    legal: [
      { title: "Editorial Standards & Code of Ethics", href: "/editorial-policy" },
      { title: "Corrections & Retractions Policy", href: "/editorial-policy#corrections" },
      { title: "Student Privacy Policy", href: "/privacy" },
      { title: "Photojournalism Ethics", href: "/editorial-policy#photo-ethics" },
    ],
  },
  contact: {
    email: "pressclub@alihyahz.edu.ng",
    submissionsEmail: "editor.press@alihyahz.edu.ng",
    pressRoomLocation: "Media Lab 2, Humanities Building, Al-Ihyahz Academy Campus",
    patronName: "Department of English & Media Studies",
  },
  social: {
    twitter: "https://x.com/alihyahz_press",
    instagram: "https://instagram.com/alihyahz_pressclub",
  },
  editorialPolicySummary:
    "Al-Ihyahz Press Club operates as an independent student-led journalistic forum under faculty advisory. We adhere strictly to ethical verification, truth, balance, fair attribution, and responsible reporting of school and community matters.",
};
