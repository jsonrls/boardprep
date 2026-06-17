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
import ModulesSection from "@/components/ModulesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Board Exam Review Philippines 2026"
          description="Master your licensure exam with BoardPrep. Affordable, high-quality question drills and expert review classes for Vet, Fisheries, Agriculture, FTLE, and ABE board exams."
          url="https://www.myboardprep.org/"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BoardPrep",
            "url": "https://www.myboardprep.org",
            "logo": "https://www.myboardprep.org/favicon.png",
            "description": "BoardPrep provides affordable, high-quality licensure exam review classes and question drills for Philippines board exam takers.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "url": "https://www.myboardprep.org/contact"
            },
            "sameAs": []
          }}
        />
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <ModulesSection />
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
