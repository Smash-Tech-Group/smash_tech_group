import AboutHeader from "@/features/components/AboutHeader";
import AboutHero from "@/features/components/AboutHero";
import CoreValues from "@/features/components/CoreValues";
import MissionVision from "@/features/components/MissionVision";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* About Us Header */}
      <AboutHeader />

      {/* Hero Section */}
      <AboutHero />

      {/* Mission and Vision Section */}
      <MissionVision />

      

      {/* Additional sections will be added here */}
    </main>
  );
}
