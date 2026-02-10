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
        {/* ==================== HOME PAGE SECTIONS ==================== */}
        
        {/* Header/Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <HeroLayout>
            <Hero />
        </HeroLayout>
        
        {/* Partner Marquee */}
        <Marquee />
        
        {/* About Us Section (Home Page) */}
        <AboutUs />
        
        {/* What We Do Section */}
        <WhatWeDo />
        
        {/* Core Purpose Section */}
        <CorePurpose />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Global Reach Section */}
        <GlobalReach />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Call to Action Section */}
        <CTA />
        
        {/* ==================== END HOME PAGE SECTIONS ==================== */}
    </main>
  )
}