import AboutHeader from "@/features/components/AboutHeader";
import AboutHero from "@/features/components/AboutHero";
import CoreValues from "@/features/components/CoreValues";
import MissionVision from "@/features/components/MissionVision";
import CEOSection from "@/features/components/CEOSection";
import CommitmentSection from "@/features/components/CommitmentSection";
import FAQSection from "@/features/components/FAQSection";
import AboutCTA from "@/features/components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* About Us Header */}
      <AboutHeader />

      {/* Hero Section */}
      <AboutHero />

      {/* Mission and Vision Section */}
      <MissionVision />

      {/* Core Values Section */}
      <CoreValues />

      
      {/* CEO Section */}
      <CEOSection />

      {/* CTA Section */}
      
      {/* Commitment to Excellence Section */}
      <CommitmentSection />

      
      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <AboutCTA />
    </main>
  );
}
