import CTASection from "@/features/components/business/CTASection";
import HeroBanner from "@/features/components/business/HeroBanner";
import IntroSection from "@/features/components/business/IntroSection";
import ProductsSection from "@/features/components/business/Productssection";
import StatsSection from "@/features/components/business/StatsSection";
import LHero from "@/features/components/LHero";
import BlogImage from '../../../public/about.png';

export default function Home() {
  return (
    <main className="min-h-screen">
        <LHero
          image={BlogImage}
          title="Business"
        />
        <IntroSection />
        <StatsSection />
        <ProductsSection />
        <CTASection />
    </main>
  )
}