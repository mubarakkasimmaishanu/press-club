import { Article } from "@/types";
import { authors } from "./authors";

export const articles: Article[] = [
  {
    id: "art-1",
    title: "Al-Ihyahz Debate Delegation Claims Northern Zonal Championship in Kaduna",
    slug: "alihyahz-debate-delegation-claims-northern-zonal-championship",
    kicker: "ACADEMIC DISTINCTION",
    summary:
      "A three-member delegation from Al-Ihyahz Academy defeated nineteen competing secondary institutions after a grueling five-round debate on sustainable education finance in Nigeria.",
    body: [
      "KADUNA — In an electric final round held at the Arewa House Auditorium on Thursday afternoon, the Al-Ihyahz Academy Senior Debating Team secured first place at the Northern Schools Inter-Collegiate Invitational Championship, marking the institution's third zonal victory in five academic sessions.",
      "The championship motion—'This House Would Mandate Sovereign Resource Taxation Specifically Ring-Fenced for Secondary STEM Infrastructure in West Africa'—saw SS3 Lead Speaker Hauwa'u Abubakar Toro and first-speaker Safiyya Zakariya deliver an airtight rebuttal against Kaduna State Champions Federal Government College.",
      "Chief Adjudicator Dr. Haruna Danbatta commended the delegation for their empirical rigor: 'What distinguished Al-Ihyahz was not merely rhetorical elegance, but an astonishing command of budgetary statistics and policy precedent. Secondary students rarely synthesize macro-fiscal realities with such composure.'",
      "The victory qualifies the delegation for the All-Nigeria National Finals scheduled for December in the Federal Capital Territory, Abuja. The school administration has confirmed a civic reception in the Academy Quadrangle on Monday morning.",
      "Speaking shortly after receiving the golden trophy, Hauwa'u Abubakar Toro remarked on the intensive preparation behind the trophy: 'Our debate society spent three months interrogating fiscal white papers in the library after prep hours. This is proof that Nigerian students possess the intellectual depth to participate in national development conversations.'"
    ],
    pullQuote: {
      quote: "What distinguished Al-Ihyahz was not merely rhetorical elegance, but an astonishing command of budgetary statistics and policy precedent.",
      attribution: "Dr. Haruna Danbatta, Chief Adjudicator",
    },
    category: "school-news",
    categoryName: "School News",
    author: authors[0], // Hauwa'u Abubakar Toro
    publishedAt: "October 8, 2026",
    readTime: "4 min read",
    featuredImage: "/images/trophy_champions.jpg",
    imageCaption: "Delegation champions Hauwa'u Abubakar Toro and Safiyya Zakariya proudly display the championship trophy and academic medals.",
    imageCredit: "Photo: Al-Ihyahz Press Club Archive",
    tags: ["Debate", "Academic Excellence", "Kaduna Championship", "Student Leadership"],
    isLead: true,
    isSampleContent: true,
    editorialNote: "Official Photo & Coverage: Al-Ihyahz Press Club reporting on student academic achievements.",
  },
  {
    id: "art-2",
    title: "Junior Engineers Society Unveils Solar-Assisted Inverter in Campus Library",
    slug: "junior-engineers-solar-assisted-inverter-campus-library",
    kicker: "STEM INNOVATION",
    summary:
      "Using salvaged lithium cells, micro-controllers, and locally fabricated solar mounts, the Academy's STEM Club has achieved continuous 24-hour reading lighting in the main reference wing.",
    body: [
      "AL-IHYAHZ CAMPUS — Frequent electrical grid fluctuations will no longer interrupt evening prep hours in the senior reference wing, following the formal commissioning of an experimental 3.5kVA solar inverter engineered by the Junior Engineers and Technicians Society (JETS).",
      "The project, which began during the third term of the previous academic session under the supervision of Physics instructor Engr. Kabir Usman, integrates 8 monocrystalline rooftop panels with recycled, tested lithium-ion packs gathered from obsolete school computer monitors.",
      "The system currently powers forty LED reading stations, the digital card catalog terminal, and the automated attendance scanners in the library's main study hall.",
      "'We wanted to demonstrate that technical education in Nigerian secondary schools should not remain purely theoretical on chalkboard diagrams,' said student reporter Safiyya Zakariya (SS2). 'When students can build working energy solutions for their own schoolmates, the sense of agency is transformative.'",
      "The Academy Directorate has allocated supplementary seed funding to explore expanding the pilot array to the Senior Biology and Chemistry laboratories before the end of the term."
    ],
    pullQuote: {
      quote: "Technical education in Nigerian schools cannot remain theoretical diagrams on a chalkboard.",
      attribution: "Safiyya Zakariya, Deputy Editor",
    },
    category: "education",
    categoryName: "Education & STEM",
    author: authors[1], // Safiyya Zakariya
    publishedAt: "October 7, 2026",
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "JETS members test the charge controller circuit inside the Senior Library reading annex.",
    imageCredit: "Photo: Chidi Okafor / Al-Ihyahz Press Club",
    tags: ["STEM", "Solar Energy", "JETS Club", "Campus Infrastructure"],
    isSecondary: true,
    isSampleContent: true,
    editorialNote: "Demonstration Article: Published as realistic editorial sample for Al-Ihyahz Press Club digital edition.",
  },
  {
    id: "art-3",
    title: "Editorial: Why Prefectorial Accountability Must Start in the Assembly Hall",
    slug: "editorial-why-prefectorial-accountability-must-start-in-assembly-hall",
    kicker: "STUDENT VOICE & OPINION",
    summary:
      "The traditional appointment of student prefects often prioritizes administrative compliance over student advocacy. It is time for a transparent town-hall model.",
    body: [
      "In secondary schools across Nigeria, the morning bell signifies more than the beginning of classes; it marks the reaffirmation of an ancient hierarchy. Senior prefects, clad in distinctive blazers, pace before rows of junior students, dispensing directives with unquestioned authority.",
      "Yet, as our institution prepares for the 2026/2027 Prefectorial Investiture, we must pose a fundamental question: To whom is a student leader primarily accountable? To the school disciplinary committee alone, or also to the student body they are appointed to represent?",
      "In too many schools, prefects become administrative enforcers rather than empathetic mediators. When a dormitory's water supply falters or dining allocations shrink, the prefect often feels pressured to suppress student complaints rather than relaying them constructively to housemasters.",
      "Al-Ihyahz Academy has consistently championed civic responsibility. Introducing monthly 'Hall Town Halls'—where students can respectfully dialogue with their prefects and house captains under faculty moderation—would cultivate true democratic ethos early in our formative years.",
      "Leadership without consultation breeds quiet cynicism; leadership rooted in accountability prepares young Nigerians for real civic stewardship."
    ],
    pullQuote: {
      quote: "Leadership without consultation breeds quiet cynicism; leadership rooted in accountability prepares young Nigerians for real civic stewardship.",
      attribution: "Fatima Yusuf, Opinion Editor",
    },
    category: "opinions",
    categoryName: "Opinions & Student Voices",
    author: authors[4], // Fatima Yusuf
    publishedAt: "October 6, 2026",
    readTime: "3 min read",
    featuredImage: "/images/student_speech_valedictory.jpg",
    imageCaption: "Student orator and editorial board member addresses the Academy assembly at the annual symposium.",
    imageCredit: "Photo: Al-Ihyahz Press Club Archive",
    tags: ["Opinion", "Student Governance", "Prefects", "Campus Ethics"],
    isOpinion: true,
    isSecondary: true,
    isSampleContent: true,
    editorialNote: "Opinion Piece: Reflects the editorial opinion of the student writer; does not represent institutional policy.",
  },
  {
    id: "art-4",
    title: "The Principal's Address: 'Fostering Independent Inquiry in an Era of Digital Distraction'",
    slug: "interview-principal-fostering-independent-inquiry-digital-distraction",
    kicker: "EXECUTIVE INTERVIEW",
    summary:
      "Dr. Idris Mahmud speaks to the Press Club about digital learning guidelines, library revamps, and preparing Al-Ihyahz scholars for international tertiary admissions.",
    body: [
      "PRESS ROOM — Ahead of the Academy's Founders' Commemoration Week, Editor-in-Chief Hauwa'u Abubakar Toro sat down with Academy Principal Dr. Idris Mahmud in his study to discuss academic strategy, classroom mobile policies, and the evolving mandate of student journalism.",
      "PRESS CLUB: Dr. Mahmud, the Board recently introduced managed tablet computers in SS1 through SS3 classes. How are educators balancing digital tools with classic textual deep-reading?",
      "DR. MAHMUD: 'Technology is neither salvation nor ruin; it is an amplifier. When we issued curriculum tablets, we deliberately chose not to replace physical texts. A student who cannot sustain forty-five minutes of uninterrupted reading in a printed novel will struggle with complex university analysis. Our rule remains: digital devices for data gathering and simulation, notebooks and printed literature for sustained cognitive depth.'",
      "PRESS CLUB: What role does the school administration envision for an independent student press club?",
      "DR. MAHMUD: 'A school that fears the honest pens of its students does not believe in its own educational mission. We expect Al-Ihyahz Press Club to be vigilant, factual, and constructive. Report our triumphs, yes, but do not hesitate to shine a polite, rigorous light on our logistical shortcomings. That is how institutions mature.'",
      "The full unedited transcript of the one-hour conversation will be archived in the Academy Press Library repository."
    ],
    pullQuote: {
      quote: "A school that fears the honest pens of its students does not believe in its own educational mission.",
      attribution: "Dr. Idris Mahmud, Academy Principal",
    },
    category: "interviews",
    categoryName: "Interviews & Profiles",
    author: authors[0], // Hauwa'u Abubakar Toro
    publishedAt: "October 5, 2026",
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Dr. Idris Mahmud during the Press Club interview in the Administrative Hall.",
    imageCredit: "Photo: Chidi Okafor / Al-Ihyahz Press Club",
    tags: ["Interview", "School Leadership", "Digital Learning", "Academy Vision"],
    isInterview: true,
    isSampleContent: true,
    editorialNote: "Demonstration Interview: Published as realistic editorial sample for Al-Ihyahz Press Club digital edition.",
  },
  {
    id: "art-5",
    title: "Behind the Whistle: A Special Report on the 14th Inter-House Athletics Preparations",
    slug: "special-report-14th-inter-house-athletics-preparations",
    kicker: "SPORTS & CULTURE",
    summary:
      "From dawn relay practices on the grass oval to late-night banner design in the dormitories, we go inside the four houses preparing for the biggest day of the athletic calendar.",
    body: [
      "CAMPUS SPORTS COMPLEX — At 5:45 AM, well before the morning reveille sounds across the boarding quadrangles, the distinct thud of spiked running shoes echoes off the concrete bleachers of the school sports pavilion.",
      "Four houses—Dan Fodio (Blue), Bello (Green), Amina (Yellow), and Macaulay (Red)—are currently locked in intense conditioning sessions ahead of the 14th Annual Inter-House Athletics Meet scheduled for November 14.",
      "Reigning champions House Dan Fodio enter the competition with high expectations, yet House Amina's track contingent has shown formidable form in the 4x100m inter-class trials.",
      "'Every year, people focus only on the final Saturday races,' observes House Bello captain Tunde Adeleke. 'They don't see the weeks of junior students ironing marching banners, the kitchen staff preparing extra glucose water, or the silent hours spent treating ankle sprains in the infirmary. That collective pride is what makes Inter-House legendary.'",
      "The Press Club sports desk will provide live text commentaries and photo dispatches throughout competition week."
    ],
    category: "features",
    categoryName: "Features & Long-Form",
    author: authors[2], // Zainab Al-Hassan
    publishedAt: "October 4, 2026",
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "House athletes complete morning interval sprints on the 400m track.",
    imageCredit: "Photo: Chidi Okafor / Al-Ihyahz Press Club",
    tags: ["Sports", "Inter-House", "Campus Culture", "Athletics"],
    isFeature: true,
    isSampleContent: true,
    editorialNote: "Demonstration Article: Published as realistic editorial sample for Al-Ihyahz Press Club digital edition.",
  },
  {
    id: "art-6",
    title: "Secondary Literacy Survey: Boarding Students Read Average of 12 Novels per Term",
    slug: "secondary-literacy-survey-boarding-students-reading-culture",
    kicker: "LITERARY DESK",
    summary:
      "A student-conducted survey across Junior and Senior secondary classes reveals that non-curriculum literature remains robust despite the proliferation of smartphones.",
    body: [
      "The English Literary Society, in collaboration with the Press Club editorial survey desk, has published the findings of its 2026 Campus Reading Audit. Administered to 480 enrolled students across JSS2 through SS3, the data paints an encouraging portrait of adolescent literacy.",
      "Contrary to conventional wisdom that mobile screens have destroyed reading habits, 74% of surveyed boarding students reported finishing at least two independent African literature texts every month.",
      "Authors Chinua Achebe, Buchi Emecheta, Chimamanda Ngozi Adichie, and Wole Soyinka topped the list of most widely read domestic literary icons, alongside popular global science fiction titles.",
      "'The compulsory 30-minute silent reading period instituted after dinner has proven decisive,' explains Literature prefect Zainab Al-Hassan. 'It creates a calm sanctuary in an otherwise bustling boarding environment.'",
      "The Literary Society will host its annual Book Fair and Creative Writing Anthology launch in the multipurpose auditorium next month."
    ],
    category: "education",
    categoryName: "Education & STEM",
    author: authors[2], // Zainab Al-Hassan
    publishedAt: "October 3, 2026",
    readTime: "4 min read",
    featuredImage: "/images/academic_graduates.jpg",
    imageCaption: "Senior scholars in academic convocation robes at the Al-Ihyahz Academy valedictory investiture.",
    imageCredit: "Photo: Al-Ihyahz Press Club Archive",
    tags: ["Literacy", "Academic Excellence", "Graduates", "Education"],
    isSampleContent: true,
    editorialNote: "Official Photo & Coverage: Al-Ihyahz Press Club reporting on school academic ceremonies.",
  },
  {
    id: "art-7",
    title: "Press Club Cohort & Campus Community: Students Champion Literacy & Media Skills",
    slug: "press-club-cohort-campus-community-students-champion-literacy",
    kicker: "CAMPUS CULTURE",
    summary:
      "Student reporters and press members gathered for their termly newsroom orientation and school documentary session in the Academy quadrangle.",
    body: [
      "AL-IHYAHZ CAMPUS — Dressed in their formal academy ties and shirts, members of the Al-Ihyahz Press Club gathered on the school grounds for the start of the term's media literacy orientation program.",
      "The club, which brings together secondary students from across junior and senior arms, trains students in factual reportage, news writing, interview etiquette, and visual storytelling.",
      "'Being part of the Press Club teaches us how to observe our school community thoughtfully,' said Deputy Editor Safiyya Zakariya. 'We learn to give voice to students' academic projects, sports tournaments, and club achievements.'",
      "The press cohort will be publishing fortnightly dispatches and photo essays across the academic session."
    ],
    category: "campus-life",
    categoryName: "Campus Life & Culture",
    author: authors[1], // Safiyya Zakariya
    publishedAt: "October 2, 2026",
    readTime: "3 min read",
    featuredImage: "/images/press_club_cohort.jpg",
    imageCaption: "Al-Ihyahz Press Club student members in uniform on campus.",
    imageCredit: "Photo: Al-Ihyahz Press Club Archive",
    tags: ["Press Club", "Campus Life", "Students", "School Uniform"],
    isSampleContent: true,
    editorialNote: "Demonstration Article: Published as realistic editorial sample for Al-Ihyahz Press Club digital edition.",
  },
  {
    id: "art-8",
    title: "WAEC and NECO Digital Transition: What Candidates Need to Know for 2027",
    slug: "waec-neco-digital-transition-candidates-guide-2027",
    kicker: "ACADEMIC ADVISORY",
    summary:
      "A breakdown of the computer-based testing modules being introduced for objective papers, with strategic prep advice from Academy subject teachers.",
    body: [
      "As national examination bodies accelerate the rollout of computer-based assessments for senior school certifications, Al-Ihyahz Academy has commenced simulated weekly CBT testing for all SS2 and SS3 students.",
      "The transition, which began with select subjects in major urban centres, requires students to demonstrate speed and technical precision in navigating computerized interface calculators, question matrices, and electronic formula sheets.",
      "Vice Principal (Academics) Mrs. Victoria Adeyemi advised candidates during Monday assembly: 'Typing agility and screen stamina are now as vital as memorizing chemical equations. Do not wait until mock examination week to familiarize yourself with the testing environment.'",
      "The Academy Computer Centre will remain open on Saturday mornings for self-paced testing simulations."
    ],
    category: "school-news",
    categoryName: "School News",
    author: authors[0], // Hauwa'u Abubakar Toro
    publishedAt: "September 29, 2026",
    readTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Students seated for timed digital simulation tests in the ICT Suite.",
    imageCredit: "Photo: Chidi Okafor / Al-Ihyahz Press Club",
    tags: ["WAEC", "NECO", "CBT", "Exams", "Education"],
    isSampleContent: true,
    editorialNote: "Demonstration Article: Published as realistic editorial sample for Al-Ihyahz Press Club digital edition.",
  },
];

export const photoStories = [
  {
    id: "ps-1",
    title: "In Pictures: Campus Life & The Al-Ihyahz Press Club Cohort",
    slug: "life-inside-alihyahz-boarding-quadrangles",
    eventDate: "October 2026",
    photographer: authors[3], // Chidi Okafor
    coverImage: "/images/press_club_cohort.jpg",
    caption: "Al-Ihyahz Press Club members and students gather in uniform under the campus shade.",
    description: "Visual documentation of our student reporters, academic assemblies, and campus spirit across Al-Ihyahz Academy.",
    tags: ["Press Club", "Campus Life", "Students", "Academy"],
    isSampleContent: true,
    photos: [
      {
        url: "/images/press_club_cohort.jpg",
        caption: "Press Club members and students assemble on campus in official academy uniform.",
        credit: "Al-Ihyahz Press Club Archive"
      },
      {
        url: "/images/trophy_champions.jpg",
        caption: "Debate and academic champions holding the golden trophy and medals.",
        credit: "Al-Ihyahz Press Club Archive"
      },
      {
        url: "/images/student_speech_valedictory.jpg",
        caption: "Student orator addresses the assembly at the school symposium.",
        credit: "Al-Ihyahz Press Club Archive"
      },
      {
        url: "/images/academic_graduates.jpg",
        caption: "Scholars in blue graduation robes and caps during valedictory honors.",
        credit: "Al-Ihyahz Press Club Archive"
      },
      {
        url: "/images/debate_speaker_junior.jpg",
        caption: "Junior orator speaks with microphone during inter-class public speaking.",
        credit: "Al-Ihyahz Press Club Archive"
      }
    ]
  },
  {
    id: "ps-2",
    title: "Moments of Glory: Zonal Academic & Debate Honors",
    slug: "battle-of-eloquence-zonal-debate-tournament",
    eventDate: "October 2026",
    photographer: authors[3], // Chidi Okafor
    coverImage: "/images/trophy_champions.jpg",
    caption: "Golden trophy presentation celebrating academic excellence and oratory brilliance.",
    description: "Photojournalistic coverage of Al-Ihyahz Academy students excelling at inter-school competitions and public speaking tournaments.",
    tags: ["Debate", "Trophy", "Academic Excellence", "Oratory"],
    isSampleContent: true,
    photos: [
      {
        url: "/images/trophy_champions.jpg",
        caption: "Trophy and medal presentation celebrating victory.",
        credit: "Al-Ihyahz Press Club Archive"
      },
      {
        url: "/images/student_speech_valedictory.jpg",
        caption: "Keynote presentation at the podium during the awards assembly.",
        credit: "Al-Ihyahz Press Club Archive"
      },
      {
        url: "/images/debate_speaker_junior.jpg",
        caption: "Junior student delivering persuasive arguments with microphone.",
        credit: "Al-Ihyahz Press Club Archive"
      }
    ]
  }
];

// Helper functions
export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.category === categorySlug);
}

export function getLeadStory(): Article {
  return articles.find((article) => article.isLead) || articles[0];
}

export function getSecondaryStories(): Article[] {
  return articles.filter((article) => article.isSecondary);
}

export function getLatestStories(limit = 6): Article[] {
  return articles.slice(0, limit);
}

export function getFeatureArticles(): Article[] {
  return articles.filter((article) => article.isFeature);
}

export function getOpinionArticles(): Article[] {
  return articles.filter((article) => article.isOpinion);
}

export function getInterviewArticles(): Article[] {
  return articles.filter((article) => article.isInterview);
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 3): Article[] {
  return articles
    .filter((article) => article.slug !== currentSlug && article.category === category)
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.categoryName.toLowerCase().includes(q) ||
      article.author.name.toLowerCase().includes(q) ||
      article.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}
