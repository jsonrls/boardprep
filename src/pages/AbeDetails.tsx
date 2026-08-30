import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Video,
  Award,
  CheckCircle2,
  ArrowRight,
  Tractor,
  Target,
  Sprout,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import abeHeroBg from "@/assets/abe-hero-bg.avif";
import abeHeroBg640 from "@/assets/abe-hero-bg-640.avif";
import ProgramPrice from "@/components/ProgramPrice";
import { buildReviewProgramPageSchema } from "@/seo/schema";
import ReviewProgramGuide from "@/components/ReviewProgramGuide";
import Breadcrumbs from "@/components/Breadcrumbs";
import { agriculturalBiosystemsEngineeringReviewGuide } from "@/content/engineeringReviewGuides";

const courseFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description:
      "Complete coverage of all Agricultural and Biosystems Engineering topics with detailed study guides and reference materials.",
  },
  {
    icon: Video,
    title: "Recorded Sessions",
    description:
      "Access high-quality video lectures you can watch anytime, anywhere at your own pace.",
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description:
      "Follow guided solutions that explain method selection, units, assumptions, and engineering judgment.",
  },
  {
    icon: Target,
    title: "Practice Quizzes",
    description:
      "Test your knowledge with hundreds of practice questions and detailed explanations.",
  },
];

const curriculumTopics = [
  { title: "Structures, Environment & Bioprocess", focus: "The PRC subject group carrying 36% of the examination" },
  { title: "Power, Energy & Machinery", focus: "Machine design, capacity, mechanization, energy, and controls" },
  { title: "Land & Water Resources", focus: "Hydrology, hydraulics, irrigation, drainage, and conservation" },
  { title: "Processing & Postharvest Systems", focus: "Drying, refrigeration, storage, processing, and waste systems" },
  { title: "Project & Professional Practice", focus: "Feasibility, research, management, laws, standards, and ethics" },
  { title: "Mathematics & Engineering Science", focus: "Computations, mechanics, statistics, heat, fluids, and economy" },
];

const stats = [
  { label: "Official Exam Groups", value: "3", icon: Tractor },
  { label: "Largest Subject Weight", value: "36%", icon: Target },
  { label: "Required Weighted Average", value: "70%", icon: CheckCircle2 },
  { label: "Listed Program Fee", value: "₱4,999", icon: Sprout },
];

const AbeDetails = () => {
  return (
    <>
      <SEO
        title="ABELE Review Class 2026 — Agricultural and Biosystems Engineering Licensure Exam"
        description="Prepare for the ABE Licensure Examination with PRC-aligned coverage, engineering drills, worked solutions, mock exams, and transparent ₱4,999 pricing."
        url="https://www.myboardprep.org/review/abe"
        preloadImageHref={abeHeroBg}
        preloadImageSrcSet={`${abeHeroBg640} 640w, ${abeHeroBg} 1400w`}
        preloadImageSizes="100vw"
        jsonLd={buildReviewProgramPageSchema(
          "abe",
          abeHeroBg,
          agriculturalBiosystemsEngineeringReviewGuide.faqs,
        )}
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section data-beasties-container className="critical-render relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img
            src={abeHeroBg}
            srcSet={`${abeHeroBg640} 640w, ${abeHeroBg} 1400w`}
            sizes="100vw"
            alt="Precision agriculture with irrigation, tractors, drones and renewable energy systems"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1400}
            height={1400}
            {...{ fetchpriority: "high" }}
            decoding="async"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/60" />

          {/* Content */}
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 text-center">
            <Breadcrumbs
              variant="inverse"
              className="mx-auto mb-6 max-w-3xl text-left"
              items={[
                { label: "Home", to: "/" },
                { label: "Review Classes", to: "/review-class" },
                { label: "Agricultural and Biosystems Engineering" },
              ]}
            />
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Tractor className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Agricultural & Biosystems Engineering
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up delay-100">
                Agricultural Engineering Board Exam Review
              </h1>

              <p className="text-xl text-white mb-8 animate-fade-up delay-200 font-sans">
                Build your ABELE preparation around the official PRC subject
                weights with guided engineering lessons, worked problems,
                question drills, and timed mock examinations.
              </p>

              <ProgramPrice program="abe" className="mb-8" />

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enroll?exam=abe" className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto group"
                  >
                    <UserPlus size={16} />
                    Enroll Now
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
                <a
                  href="https://lms2.myboardprep.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Access Learning Platform
                  </Button>
                </a>
              </div>
            </div>
          </div>
          </section>

        {/* Stats Section */}
          <section className="py-16 border-y bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </section>

        {/* Course Features */}
          <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Why Choose Our ABE Review Program?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
                Everything you need to excel in your Agricultural and Biosystems
                Engineering board exam, all in one comprehensive package.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </section>

        {/* Curriculum Overview */}
          <section id="curriculum" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Comprehensive Curriculum
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
                Our review program covers all major topics in the ABE licensure
                exam with in-depth lessons and practice materials.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {curriculumTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-lg border border-border bg-card hover:border-accent transition-all animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Sprout className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">{topic.title}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </section>

          <ReviewProgramGuide content={agriculturalBiosystemsEngineeringReviewGuide} />

          <section className="bg-muted/30 py-12">
            <div className="container mx-auto max-w-5xl px-6 lg:px-12">
              <h2 className="font-display text-2xl text-foreground">Official ABELE references</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Eligibility, passing rules, and professional scope are based on the Philippine
                Agricultural and Biosystems Engineering Act. Subject weights and competency
                coverage follow PRC materials. Verify current application dates, testing centers,
                and examination-day instructions directly with PRC.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-secondary">
                <li>
                  <a href="https://lawphil.net/statutes/repacts/ra2016/ra_10915_2016.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Republic Act No. 10915 — Philippine Agricultural and Biosystems Engineering Act
                  </a>
                </li>
                <li>
                  <a href="https://www.prc.gov.ph/Pages/PRBv4/AgriculturalBiosystemsEngineering.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    PRC Professional Regulatory Board of Agricultural and Biosystems Engineering
                  </a>
                </li>
                <li>
                  <a href="https://www.prc.gov.ph/2026-schedule-examination" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    PRC schedule of licensure examinations
                  </a>
                </li>
              </ul>
            </div>
          </section>

        {/* CTA Section */}
          <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="relative bg-secondary overflow-hidden rounded-3xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
              </div>

              <div className="relative z-10 py-20 lg:py-28 px-8 lg:px-16 text-center">
                <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                  Get Started Today
                </p>
                <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-secondary-foreground leading-tight mb-6 max-w-4xl mx-auto">
                  Ready to ace your{" "}
                  <em className="not-italic text-primary">ABE Board Exam</em>?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                  Practice method selection, computations, and engineering
                  judgment across all three weighted subject groups, then verify
                  every examination requirement directly with PRC.
                </p>
                <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://lms2.myboardprep.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full sm:w-auto group font-display"
                    >
                      Access Learning Platform
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </a>
                  <Link to="/enroll?exam=abe" className="w-full sm:w-auto">
                    <Button
                      variant="heroOutline"
                      size="lg"
                      className="w-full sm:w-auto font-display"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AbeDetails;
