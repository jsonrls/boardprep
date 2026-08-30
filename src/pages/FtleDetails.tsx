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
  Beaker,
  Target,
  FlaskConical,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import foodTechHeroBg from "@/assets/food-tech-hero-bg.avif";
import foodTechHeroBg640 from "@/assets/food-tech-hero-bg-640.avif";
import ProgramPrice from "@/components/ProgramPrice";
import { buildReviewProgramPageSchema } from "@/seo/schema";
import ReviewProgramGuide from "@/components/ReviewProgramGuide";
import Breadcrumbs from "@/components/Breadcrumbs";
import { foodTechnologyReviewGuide } from "@/content/engineeringReviewGuides";

const courseFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description:
      "Complete coverage of all Food Technology topics with detailed study guides and reference materials.",
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
      "Follow guided explanations that make scientific, regulatory, and processing decisions easier to understand.",
  },
  {
    icon: Target,
    title: "Practice Quizzes",
    description:
      "Test your knowledge with hundreds of practice questions and detailed explanations.",
  },
];

const curriculumTopics = [
  { title: "Food Chemistry", focus: "Components, reactions, properties, and applied calculations" },
  { title: "Food Microbiology", focus: "Microbial behavior, control, spoilage, and food safety" },
  { title: "Food Processing Technology", focus: "Preservation systems, unit operations, and process decisions" },
  { title: "Food Safety & Quality Assurance", focus: "Hazards, quality systems, sanitation, and corrective action" },
  { title: "Food Engineering", focus: "Material and energy balances, equipment, and process principles" },
  { title: "Nutrition & Research", focus: "Nutrition concepts, analysis, experimental design, and interpretation" },
  { title: "Sensory & Product Development", focus: "Sensory methods, product design, and manufacturing context" },
  { title: "Food Laws & Regulations", focus: "Philippine requirements, compliance, ethics, and professional practice" },
];

const stats = [
  { icon: Beaker, value: "4", label: "Official Subject Groups" },
  { icon: Target, value: "25%", label: "Weight per Subject" },
  { icon: CheckCircle2, value: "75%", label: "Passing Rating per Subject" },
  { icon: FlaskConical, value: "₱4,999", label: "Listed Program Fee" },
];

const FtleDetails = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="FTLE Review Class 2026 — Food Technology Licensure Exam"
        description="Prepare for the Food Technology Licensure Examination with PRC-aligned subject coverage, guided lessons, question drills, mock exams, and transparent ₱4,999 pricing."
        url="https://www.myboardprep.org/review/ftle"
        preloadImageHref={foodTechHeroBg}
        preloadImageSrcSet={`${foodTechHeroBg640} 640w, ${foodTechHeroBg} 1400w`}
        preloadImageSizes="100vw"
        jsonLd={buildReviewProgramPageSchema(
          "ftle",
          foodTechHeroBg,
          foodTechnologyReviewGuide.faqs,
        )}
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section data-beasties-container className="critical-render relative pt-32 pb-20 overflow-hidden">
          {/* Background Image */}
          <img
            src={foodTechHeroBg}
            srcSet={`${foodTechHeroBg640} 640w, ${foodTechHeroBg} 1400w`}
            sizes="100vw"
            alt="Food technologist analyzing a sample in a food processing laboratory"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1400}
            height={1400}
            {...{ fetchpriority: "high" }}
            decoding="async"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/60" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <Breadcrumbs
              variant="inverse"
              className="mx-auto mb-6 max-w-4xl text-left"
              items={[
                { label: "Home", to: "/" },
                { label: "Review Classes", to: "/review-class" },
                { label: "Food Technology" },
              ]}
            />
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Beaker className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Food Technology Licensure Exam
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Online Food Technology Board Exam Review
              </h1>

              <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-sans">
                Prepare for the Food Technologists Licensure Examination with
                guided lessons, computations, question drills, and mock exams
                organized around the official PRC subject groups.
              </p>

              <ProgramPrice program="ftle" className="mb-8" />

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enroll?exam=ftle" className="w-full sm:w-auto">
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
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`animate-fade-up delay-${index * 100} text-center`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">
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
        <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Course Features
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Everything you need to{" "}
                <em className="not-italic text-accent">succeed</em>
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Our Food Technology review class provides comprehensive
                preparation with expert guidance and proven study materials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {courseFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`animate-fade-up delay-${(index + 3) * 100} group`}
                >
                  <div className="bg-card rounded-sm p-8 lg:p-10 shadow-soft hover-lift border border-border/50 h-full">
                    <div className="w-14 h-14 bg-accent rounded-sm flex items-center justify-center mb-8">
                      <feature.icon
                        size={26}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section id="curriculum" className="py-28 lg:py-36 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Curriculum
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Comprehensive{" "}
                <em className="not-italic text-accent">coverage</em> of all
                topics
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Our curriculum covers all essential topics for the Food
                Technology Licensure Examination.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {curriculumTopics.map((topic, index) => (
                  <div
                    key={topic.title}
                    className={`animate-fade-up delay-${(index + 3) * 100} bg-card border border-border rounded-sm p-6 hover-lift group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-foreground mb-1">
                            {topic.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{topic.focus}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ReviewProgramGuide content={foodTechnologyReviewGuide} />

        <section className="bg-muted/30 py-12">
          <div className="container mx-auto max-w-5xl px-6 lg:px-12">
            <h2 className="font-display text-2xl text-foreground">Official FTLE references</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Eligibility and professional scope are based on the Philippine Food Technology Act.
              Examination subjects and competency emphasis are based on the PRC materials linked
              below. Always verify the current filing period and examination program directly with
              PRC because administrative dates and instructions may change.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-secondary">
              <li>
                <a href="https://lawphil.net/statutes/repacts/ra2018/ra_11052_2018.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Republic Act No. 11052 — Philippine Food Technology Act
                </a>
              </li>
              <li>
                <a href="https://www.prc.gov.ph/Pages/PRBv4/FoodTechnologyv8.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  PRC Professional Regulatory Board of Food Technology
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
                  <em className="not-italic text-primary">FTLE exam</em>?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                  Build a balanced plan across all four official subject groups,
                  measure your progress with fresh questions, and verify every
                  examination requirement directly with PRC.
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
                  <Link to="/question-drills" className="w-full sm:w-auto">
                    <Button
                      variant="heroOutline"
                      size="lg"
                      className="w-full sm:w-auto font-display"
                    >
                      Try Our Practice Drills
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
  );
};

export default FtleDetails;
