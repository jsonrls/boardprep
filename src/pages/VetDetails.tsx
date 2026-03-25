import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Video,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  GraduationCap,
  Target,
  TrendingUp,
  UserPlus,
  Rocket,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import vetHeroBg from "@/assets/vet-hero-bg.png";
import SpeakersGrid from "@/components/SpeakersGrid";

const courseFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description:
      "Complete coverage of all VLE topics with detailed study guides and reference materials.",
  },
  {
    icon: Video,
    title: "Live & Recorded Sessions",
    description:
      "Access high-quality video lectures you can watch anytime, anywhere at your own pace.",
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description:
      "Learn from board topnotchers and licensed veterinarians with proven teaching methods.",
  },
  {
    icon: Target,
    title: "Mock Exams",
    description:
      "Test your knowledge with hundreds of TOO practice questions and detailed explanations.",
  },
];

const curriculumTopics = [
  {
    title: "Veterinary Anatomy",
    subTopics: [
      "Gross Anatomy",
      "Comparative Anatomy",
      "Developmental Anatomy",
      "Microscopic Anatomy",
    ],
  },
  {
    title: "Veterinary Physiology",
    subTopics: [
      "Principles of Physiology",
      "Systemic Physiology I",
      "Systemic Physiology II",
      "Endocrinology",
      "Reproductive Physiology",
    ],
  },
  {
    title: "Veterinary Parasitology",
    subTopics: ["Protozoology", "Entomology", "Helminthology"],
  },
  {
    title: "Veterinary Pathology",
    subTopics: ["General Pathology", "Systemic Pathology", "Clinical Pathology"],
  },
  {
    title: "Veterinary Pharmacology",
    subTopics: ["General Pharmacology", "Clinical Pharmacology", "Toxicology"],
  },
  {
    title: "Veterinary Microbiology and Public Health",
    subTopics: [
      "General Microbiology",
      "Bacteriology and Mycology",
      "Virology",
      "Immunology",
      "Zoonoses, One Health and EIDs",
      "Epidemiology",
      "Food Hygiene",
    ],
  },
  {
    title: "Veterinary Surgery",
    subTopics: [
      "Principles of Surgery",
      "Small Animal Surgery",
      "Large Animal Surgery",
      "Diagnostic Imaging",
    ],
  },
  {
    title: "Zootechnics",
    subTopics: [
      "Breeding and Genetics",
      "Animal Nutrition",
      "Ruminant Production",
      "Swine Production",
      "Equine Production",
      "Poultry Production",
      "Zoo and Exotic Animal Management",
    ],
  },
  {
    title: "Veterinary Medicine",
    subTopics: [
      "Small Animal Medicine",
      "Poultry Medicine",
      "Equine Medicine",
      "Swine Medicine",
      "Ruminant Medicine",
      "Theriogenology",
      "Lab Animal Medicine",
    ],
  },
];

const stats = [
  { icon: Users, value: "1000+", label: "Enrolled DVM" },
  { icon: Clock, value: "150+", label: "Hours of Content" },
  { icon: Star, value: "4.9/5", label: "Reviewee Rating" },
];

const VetDetails = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Online Vet Review Class"
        description="Comprehensive review for the Veterinarian Licensure Examination. Expert instructors, complete materials, and proven results."
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${vetHeroBg})` }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/60" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Veterinarian Licensure Exam
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Online Vet Review Class
              </h1>

              <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-sans">
                Ace the Veterinarian Licensure Examination with comprehensive review materials, expert instructors, and a proven review program designed by board topnotchers.
              </p>

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enroll" className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto group font-display"
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
                    className="w-full sm:w-auto font-display"
                  >
                    Access Learning Platform
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-12 md:gap-80">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`animate-fade-up delay-${index * 100} text-center`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    {stat.label === "Student Rating" ? (
                      <div className="flex items-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-accent fill-accent"
                          />
                        ))}
                      </div>
                    ) : (
                      <stat.icon className="w-6 h-6 text-accent" />
                    )}
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
                <em className="not-italic text-accent">succeed.</em>
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Our vet review class provides comprehensive preparation with
                expert guidance and proven study materials.
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
                Our program covers the <b>9 core subjects</b> of the Veterinary
                Licensure Examination.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {curriculumTopics.map((topic, index) => {
                  return (
                    <div
                      key={topic.title}
                      className={`animate-fade-up delay-${(index + 3) * 100} bg-card border border-border rounded-sm overflow-hidden transition-all duration-300`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-accent/5 transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                          </div>
                          <h3 className="font-display text-lg md:text-xl text-foreground">
                            {topic.title}
                          </h3>
                        </div>
                        {openIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      
                      <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                          openIndex === index ? "grid-rows-[1fr] border-t border-border bg-muted/20 opacity-100" : "grid-rows-[0fr] opacity-0"
                        } overflow-hidden`}
                      >
                        <div className="overflow-hidden">
                          <div className="p-6 md:px-12">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                              {topic.subTopics.map((sub) => (
                                <li key={sub} className="flex items-center gap-3 text-muted-foreground">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                  <span className="text-sm font-sans">{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Expert Instructors
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Learn from the <em className="not-italic text-accent">best!</em>
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Our instructors are board topnotchers and experienced
                veterinarians dedicated to your success.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-6 lg:px-12">
            <SpeakersGrid />
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
                  <em className="not-italic text-primary">VLE</em>?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                  Join hundreds of successful veterinarians  who have passed the
                  Veterinarian Licensure Examination with our comprehensive
                  review program.
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
                      Access BoardPrep Classroom
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </a>
                  <Link to="https://www.myboardprep.com/" className="w-full sm:w-auto">
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

export default VetDetails;
