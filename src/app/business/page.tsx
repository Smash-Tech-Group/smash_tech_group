import CTASection from "@/features/components/business/CTASection";
import HeroBanner from "@/features/components/business/HeroBanner";
import IntroSection from "@/features/components/business/IntroSection";
import ProductsSection from "@/features/components/business/Productssection";
import StatsSection from "@/features/components/business/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
        <HeroBanner />
        <IntroSection />
        <StatsSection />
        <ProductsSection />
        <CTASection />
    </main>
  )
}