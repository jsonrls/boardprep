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
import { buildHomePageSchema } from "@/seo/schema";
import { PAGE_METADATA } from "@/seo/routes";
import heroImage from "@/assets/hero.avif";
import heroImage640 from "@/assets/hero-640.avif";

const Index = () => {
  return (
      <div className="min-h-screen bg-background">
        <SEO
          title={PAGE_METADATA["/"].title}
          description={PAGE_METADATA["/"].description}
          url="/"
          preloadImageHref={heroImage}
          preloadImageSrcSet={`${heroImage640} 640w, ${heroImage} 1600w`}
          preloadImageSizes="100vw"
          preloadImageMedia="(min-width: 768px)"
          jsonLd={buildHomePageSchema()}
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
