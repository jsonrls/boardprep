'use client';
import { ReactLenis } from 'lenis/react';

import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductDualSection from "@/components/ProductDualSection";
import MobileAppSection from "@/components/MobileAppSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Home"
          description="Master your board exam with top-notch drills. Affordable but high-quality question drills curated by board topnotchers."
        />
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <ProductDualSection />
          <MobileAppSection />
          <FeaturesSection />
          <HowItWorksSection />
          <AboutSection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />

      </div>
  );
};

export default Index;
