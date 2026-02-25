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
} from "lucide-react";
import { Link } from "react-router-dom";

import vetHeroBg from "@/assets/vet-hero-bg.png";
import speaker1 from "@/assets/speakers/1.png";
import speaker2 from "@/assets/speakers/2.png";
import speaker3 from "@/assets/speakers/3.png";
import speaker4 from "@/assets/speakers/4.png";
import speaker5 from "@/assets/speakers/5.png";
import speaker6 from "@/assets/speakers/6.png";
import speaker7 from "@/assets/speakers/7.png";
import speaker8 from "@/assets/speakers/8.png";
import speaker9 from "@/assets/speakers/9.png";
import speaker10 from "@/assets/speakers/10.png";
import speaker11 from "@/assets/speakers/11.png";
import speaker12 from "@/assets/speakers/12.png";
import speaker13 from "@/assets/speakers/13.png";
import speaker14 from "@/assets/speakers/14.png";
import speaker15 from "@/assets/speakers/15.png";
import speaker16 from "@/assets/speakers/16.png";
import speaker17 from "@/assets/speakers/17.png";
import speaker18 from "@/assets/speakers/18.png";
import speaker19 from "@/assets/speakers/19.png";
import speaker20 from "@/assets/speakers/20.png";
import speaker21 from "@/assets/speakers/21.png";
import speaker22 from "@/assets/speakers/22.png";
import speaker23 from "@/assets/speakers/23.png";
import speaker24 from "@/assets/speakers/24.png";
import speaker25 from "@/assets/speakers/25.png";
import speaker26 from "@/assets/speakers/26.png";
import speaker27 from "@/assets/speakers/27.png";
import speaker28 from "@/assets/speakers/28.png";
import speaker29 from "@/assets/speakers/29.png";
import speaker30 from "@/assets/speakers/30.png";
import speaker31 from "@/assets/speakers/31.png";
import speaker32 from "@/assets/speakers/32.png";

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
      "Test your knowledge with hundreds of practice questions and detailed explanations.",
  },
];

const curriculumTopics = [
  { title: "Veterinary Anatomy",},
  { title: "Veterinary Physiology",},
  { title: "Veterinary Pathology"},
  { title: "Veterinary Pharmacology"},
  { title: "Veterinary Medicine"},
  { title: "Veterinary Surgery"},
  { title: "Zootechnics"},
  { title: "Veterinary Microbiology and Public Health"},
  { title: "Veterinary Parasitology"},
];

const speakers = [
  {
    id: 1,
    name: "Dr. Rio John Ducusin",
    specialty: "Surgery",
    credential: "VLE 1998 - Top 3",
    image: speaker1,
  },
  {
    id: 2,
    name: "Dr. Virginia Venturina",
    specialty: "Parasitology",
    credential: "Industry Expert",
    image: speaker2,
  },
  {
    id: 3,
    name: "Dr. Jonathan Vitor",
    specialty: "Physiology",
    credential: "Industry Expert",
    image: speaker3,
  },
  {
    id: 4,
    name: "Dr. John King Valdez",
    specialty: "Physiology",
    credential: "VLE 2025 - Top 2",
    image: speaker4,
  },
  // Additional speakers (avatars only; generic metadata)
  {
    id: 5,
    name: "Dr. Romeo Gundran",
    specialty: "Epidemiology",
    credential: "Industry Expert",
    image: speaker5,
  },
  {
    id: 6,
    name: "Dr. Ronalie Rafael",
    specialty: "Veterinary Education",
    credential: "Industry Expert",
    image: speaker6,
  },
  {
    id: 7,
    name: "Dr. Jessica Eugenio",
    specialty: "Zootechnics",
    credential: "VLE 2013 - Top 6",
    image: speaker7,
  },
  {
    id: 8,
    name: "Dr. Dale Bartolome",
    specialty: "Medicine",
    credential: "Industry Expert",
    image: speaker8,
  },
  {
    id: 9,
    name: "Dr. Errol Jay Balagan",
    specialty: "Anatomy",
    credential: "VLE 2011 - Top 2",
    image: speaker9,
  },
  {
    id: 10,
    name: "Dr. Felkins Macabitas",
    specialty: "Surgery",
    credential: "VLE 2013 - Top 1",
    image: speaker10,
  },
  {
    id: 11,
    name: "Dr. Marvin Salinas",
    specialty: "Anatomy",
    credential: "VLE 2015 - Top 4",
    image: speaker11,
  },
  {
    id: 12,
    name: "Dr. Remil Galay",
    specialty: "Parasitology",
    credential: "VLE 2007 - Top 5",
    image: speaker12,
  },
  {
    id: 13,
    name: "Dr. Paul Cadenio",
    specialty: "Pharmacology",
    credential: "VLE 2014 - Top 3",
    image: speaker13,
  },
  {
    id: 14,
    name: "Dr. Jaylord Pioquinto",
    specialty: "Surgery",
    credential: "Industry Expert",
    image: speaker14,
  },
  {
    id: 15,
    name: "Dr. Jorvy Tayag",
    specialty: "Medicine",
    credential: "VLE 2024 - Top 3",
    image: speaker15,
  },
  {
    id: 16,                       
    name: "Dr. Alvin Soriano",
    specialty: "Zootechnics",
    credential: "VLE 2005 - Top 10",
    image: speaker16,
  },
  {
    id: 17,
    name: "Dr. Clarissa Mordeno",
    specialty: "Zootechnics",
    credential: "VLE 2023 - Top 2",
    image: speaker17,
  },
  {
    id: 18,
    name: "Dr. Alli Claravall",
    specialty: "Pharmacology",
    credential: "VLE 2023 - Top 1",
    image: speaker18,
  },
  {
    id: 19,
    name: "Dr. Harvie Portugaliza",
    specialty: "Pathology",
    credential: "VLE 2011 - Top 1",
    image: speaker19,
  },
  {
    id: 20,
    name: "Dr. Jerard Rayala",
    specialty: "Pathology",
    credential: "VLE 2021 - Top 1",
    image: speaker20,
  },
  {
    id: 21,
    name: "Dr. Ian Prado",
    specialty: "Pathology",
    credential: "VLE 2019 - Top 1",
    image: speaker21,
  },
  {
    id: 22,       
    name: "Dr. Razy Sanchez",
    specialty: "Medicine",
    credential: "VLE 2017 - Top 6",
    image: speaker22,
  },
  {
    id: 23,
    name: "Dr. Allan Francia",
    specialty: "Microbiology",
    credential: "VLE 2015 - Top 8",
    image: speaker23,
  },
  {
    id: 24,
    name: "Dr. Xyryl Lynx Doctor",
    specialty: "Medicine",
    credential: "VLE 2025 - Top 1",
    image: speaker24,
  },
  {
    id: 25,
    name: "Dr. Yasser Cabansag",
    specialty: "Medicine",
    credential: "VLE 2011 - Top 7",
    image: speaker25,
  },
  {
    id: 26,
    name: "Dr. Darlene Castro ",
    specialty: "Physiology",
    credential: "VLE 2007 - Top 3",
    image: speaker26,
  },
  {
    id: 27,
    name: "Dr. Joram Gautane",
    specialty: "Medicine",
    credential: "VLE 2015 - Top 3",
    image: speaker27,
  },
  {
    id: 28,
    name: "Dr. Ralph Espinosa",
    specialty: "Zootechnics",
    credential: "VLE 2016 - Top 7",
    image: speaker28,
  },
  {
    id: 29, 
    name: "Dr. Gabriel Tubalinal",
    specialty: "Zootechnics",
    credential: "VLE 2014 - Top 7",
    image: speaker29,
  },
  {
    id: 30, 
    name: "Dr. Philip Sajol",
    specialty: "Pharmacology",
    credential: "VLE 2019 - Top 1",
    image: speaker30,
  },
  {
    id: 31, 
    name: "Dr. Jaypee Gonzales",
    specialty: "Public Health",
    credential: "Public Health",
    image: speaker31,
  },
  {
    id: 32, 
    name: "Dr. Alex Adrian Lo",
    specialty: "Physiology",
    credential: "VLE 2024 - Top 1",
    image: speaker32,
  },
];

const stats = [
  { icon: Users, value: "1000+", label: "Enrolled DVM" },
  { icon: Clock, value: "150+", label: "Hours of Content" },
  { icon: Star, value: "4.9/5", label: "Student Rating" },
];

const VetDetails = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="VET Review Class"
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
                VET Review Class
              </h1>

              <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-sans">
                Master the Veterinarian Licensure Examination with comprehensive
                review materials, expert instructors, and a proven curriculum
                designed by board topnotchers.
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
                <em className="not-italic text-accent">succeed</em>
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                Learn from the <em className="not-italic text-accent">best</em>
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Our instructors are board topnotchers and experienced
                veterinarians dedicated to your success.
              </p>
            </div>
          </div>

          {/* Full-width marquee rows */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0">
            <div className="space-y-8">
              {/* First Row - Scrolling Left (similar to testimonials) */}
              <div className="relative w-full overflow-hidden group">
                <div className="flex gap-6 animate-marquee w-max pr-6">
                  {[...speakers.slice(0, 16), ...speakers.slice(0, 16), ...speakers.slice(0, 16)].map(
                    (speaker, index) => (
                      <div
                        key={`vet-row1-${index}-${speaker.name}`}
                        className="w-[260px] md:w-[320px] flex-shrink-0"
                      >
                        <p>{speaker.id}</p>
                        <div className="bg-card rounded-sm p-8 shadow-soft border border-border/50 text-center h-full flex flex-col items-center justify-center">
                          <div className="relative inline-block mb-4">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto border-4 border-accent/20 object-cover"
                            />
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                              <Star className="w-5 h-5 text-white fill-white" />
                            </div>
                          </div>
                          <h3 className="font-display text-lg md:text-xl text-foreground mb-2">
                            {speaker.name}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground mb-3">
                            {speaker.specialty}
                          </p>
                          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1 mt-auto">
                            <Award className="w-3 h-3 text-secondary" />
                            <span className="text-[11px] md:text-xs font-medium text-secondary">
                              {speaker.credential}
                            </span>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent" />
              </div>

              {/* Second Row - Scrolling Right (reverse) */}
              <div className="relative w-full overflow-hidden group">
                <div className="flex gap-6 animate-marquee-reverse w-max pr-6">
                  {[...speakers.slice(16), ...speakers.slice(16), ...speakers.slice(16)].map(
                    (speaker, index) => (
                      <div
                        key={`vet-row2-${index}-${speaker.name}`}
                        className="w-[260px] md:w-[320px] flex-shrink-0"
                      >
                        <div className="bg-card rounded-sm p-8 shadow-soft border border-border/50 text-center h-full flex flex-col items-center justify-center">
                          <div className="relative inline-block mb-4">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto border-4 border-accent/20 object-cover"
                            />
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                              <Star className="w-5 h-5 text-white fill-white" />
                            </div>
                          </div>
                          <h3 className="font-display text-lg md:text-xl text-foreground mb-2">
                            {speaker.name}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground mb-3">
                            {speaker.specialty}
                          </p>
                          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1 mt-auto">
                            <Award className="w-3 h-3 text-secondary" />
                            <span className="text-[11px] md:text-xs font-medium text-secondary">
                              {speaker.credential}
                            </span>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent" />
              </div>
            </div>
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
                  <em className="not-italic text-primary">VLE exam</em>?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                  Join hundreds of successful students who have passed the
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

export default VetDetails;
