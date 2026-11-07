---
name: user-memory
description: Stores user preferences, project specifications, and persistent details for current and future sessions.
---

# User Memory & Details: Al-Ihyahz Press Club

## 1. Project Specifications
- **Client / Publication:** Al-Ihyahz Press Club (Official student journalism & media publication of Al-Ihyahz Academy, Nigeria).
- **Motto / Descriptor:** "Student Journalism. School Voices. Community Stories."
- **Publication Nature:** Real institutional digital newspaper / newsroom. Not a generic portfolio, SaaS blog, or neon-gradient AI site.
- **Deployment Target:** Vercel.
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide React icons.
- **Core User Preference (Starting Point):** Simplified, clean, breathable layout and sections for the initial launch. Avoid overwhelming density or overly advanced clutter while preserving authoritative editorial character.
- **Authentic Imagery Folder:** `public/images/` containing authentic school photos:
  - `director.jpg` / `director_engr_zaharaddeen_haruna.jpg` (School Director Engr. Zaharaddeen Haruna, executive portrait)
  - `press_club_cohort.jpg` (Student cohort & assembly in uniform)
  - `trophy_champions.jpg` (Debate/academic trophy winners holding golden cup and medals)
  - `student_speech_valedictory.jpg` (Student member Hauwa'u Abubakar Toro speaking at podium with mic)
  - `debate_speaker_junior.jpg` (Student member Safiyya Zakariya speaking into microphone)
  - `academic_graduates.jpg` (Scholars in blue graduation robes and mortarboards)
- **Leadership Directory Columns (`src/data/leadership.ts`):**
  - Column 1: School Management (School Director: Engr. Zaharaddeen Haruna [framed executive portrait], Principal: Dr. Idris Mahmud, Vice Principals)
  - Column 2: Press Club Masters (Malam Mubarak Kasim, Malama Nabila, Malama Sumayya)
  - Column 3: Student Members (Hauwa'u Abubakar Toro [Editor-in-Chief], Safiyya Zakariya [Deputy Editor])

## 2. Editorial Design & Brand Tokens
- **Primary Ink:** Deep charcoal `#202522`
- **Paper Background:** Warm off-white `#F7F5F0`
- **Editorial Green (Identity):** Muted forest green `#345746`
- **Accent:** Restrained burgundy `#873D42`
- **Secondary Text:** Slate grey `#686D69`
- **Borders / Rules:** Soft grey `#DCDDD6`
- **Card / Surface White:** `#FFFFFF`
- **Typography:**
  - Headlines: Editorial Serif (Newsreader / Playfair / Libre Baskerville / Serif fallback)
  - UI / Body: Clean Sans-serif (Inter / Source Sans fallback)
- **Design Philosophy:**
  - Newspaper print discipline: thin rules, column grids, asymmetrical lead story hierarchy.
  - No purple/blue gradients, no neon glassmorphism, no bloated decorative cards or fake statistics.
  - Contextualized in Nigerian secondary school educational environment (literacy, debates, academic excellence, student leadership, community).

## 3. Route Architecture
- `/` - Homepage (Lead story, secondary columns, latest feed, features, opinions, photojournalism, about, join)
- `/news` - News listing & archive
- `/category/[slug]` - Dynamic category hub
- `/article/[slug]` - Editorial article detail view with reading time, author bio, related stories, print-inspired layout
- `/features` - Long-form journalism & deep dives
- `/opinions` - Student voice & commentary (clearly distinguished from news)
- `/interviews` - Profiles & interviews
- `/photo-stories` - Visual photojournalism gallery
- `/about` - Editorial board, mission, standards
- `/contact` - Submissions, tip lines, contact
- `/editorial-policy` - Standards, sourcing, corrections policy
- `/privacy` - Data and privacy standards

## 4. Content Architecture
- Centralized configuration: `src/config/site.ts` (brand, social links, metadata, edition dates).
- Typed local data repository: `src/data/articles.ts`, `src/data/categories.ts`, `src/data/team.ts`.
- Ready for future headless CMS or API integration without refactoring UI.
