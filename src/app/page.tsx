import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { LeadStory } from "@/components/editorial/LeadStory";
import { LatestStories } from "@/components/editorial/LatestStories";
import { CategoryBrowse } from "@/components/editorial/CategoryBrowse";
import { FeaturesSpotlight } from "@/components/editorial/FeaturesSpotlight";
import { OpinionSection } from "@/components/editorial/OpinionSection";
import { InterviewsSection } from "@/components/editorial/InterviewsSection";
import { PhotoEssaysGrid } from "@/components/editorial/PhotoEssaysGrid";
import { AboutAndContribute } from "@/components/editorial/AboutAndContribute";
import {
  getLeadStory,
  getSecondaryStories,
  getLatestStories,
  getFeatureArticles,
  getOpinionArticles,
  getInterviewArticles,
} from "@/data/articles";

export default function HomePage() {
  const leadStory = getLeadStory();
  const secondaryStories = getSecondaryStories();
  const latestStories = getLatestStories(6);
  const featureArticles = getFeatureArticles();
  const opinionArticles = getOpinionArticles();
  const interviewArticles = getInterviewArticles();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)]">
      {/* 1. Announcement & Edition Strip */}
      <AnnouncementStrip />

      {/* 2. Official Masthead & Navigation */}
      <Masthead />

      {/* 3. Main Editorial Broadsheet Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Editorial Front Page Alert / Clarification */}
        <div className="mb-6 p-2.5 bg-[#edeae1] border-l-2 border-[var(--forest)] text-[11px] text-[var(--slate)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong className="text-[var(--ink)]">Official Student Newsroom:</strong> Reporting on academic achievements, campus discourse, and student leadership across Al-Ihyahz Academy.
          </span>
          <span className="font-mono text-[10px] text-[var(--forest)] font-semibold shrink-0">
            AUTUMN TERM • 2026 EDITION
          </span>
        </div>

        {/* Lead Editorial Front Page */}
        <LeadStory
          leadStory={leadStory}
          secondaryStories={secondaryStories}
        />

        {/* Thin Structural Divider */}
        <div className="h-px bg-[var(--rule)] my-10" />

        {/* Latest Publications Grid */}
        <LatestStories articles={latestStories} />

        {/* Thin Structural Divider */}
        <div className="h-px bg-[var(--rule)] my-10" />

        {/* Features & Long-form Spotlight */}
        <FeaturesSpotlight features={featureArticles} />

        {/* Opinions & Student Voices */}
        <OpinionSection opinions={opinionArticles} />

        {/* Interviews & Profiles */}
        <InterviewsSection interviews={interviewArticles} />

        {/* Photojournalism & Visual Stories */}
        <PhotoEssaysGrid />

        {/* Browse by Category Directory */}
        <CategoryBrowse />

        {/* About the Press Club & Submissions */}
        <AboutAndContribute />
      </main>

      {/* 4. Comprehensive Institutional Footer */}
      <Footer />
    </div>
  );
}
