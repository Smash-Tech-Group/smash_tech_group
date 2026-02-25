import Hero from "@/features/components/Hero";
import Navbar from "@/features/components/Navbar";
import HeroLayout from "./layouts/HeroLayout";
import Marquee from "@/features/components/Marquee";
import AboutUs from "@/features/components/AboutUs";
import WhatWeDo from "@/features/components/What_we_do";
import CorePurpose from "@/features/components/CorePurpose";
import WhyChooseUs from "@/features/components/WhyUs";
import Blog from "@/features/components/Blog";
import GlobalReach from "@/features/components/GlobalReach";
import Testimonials from "@/features/components/Testimonials";
import CTA from "@/features/components/Cta";


export default function Home() {
  return (
    <main className="min-h-screen">
        <HeroLayout>
          <Hero />
        </HeroLayout>
        <Marquee />
        <AboutUs />
        <WhatWeDo />
        <CorePurpose />
        <WhyChooseUs />
        {/* <Blog /> */}
        <GlobalReach />
        <Testimonials />
        <CTA />
    </main>
  )
}