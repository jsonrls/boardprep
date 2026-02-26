import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Target,
  Trophy,
  Clock,
  Layers,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.png";

const benefits = [
  {
    icon: BookOpen,
    title: "Structured Coverage",
    description:
      "Topic-by-topic review aligned with the PRC syllabus so you don’t miss any high-yield concepts.",
  },
  {
    icon: Users,
    title: "Topnotch Mentors",
    description:
      "Learn from board topnotchers and experienced review lecturers who know how the exam is written.",
  },
  {
    icon: Target,
    title: "Exam-Focused Drills",
    description:
      "Hundreds of curated questions, rationales, and mock exams to sharpen test-taking skills.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Mix of live and asynchronous sessions so you can review at your own pace without missing key lectures.",
  },
];

const programs = [
  {
    code: "VET",
    name: "Veterinarian Licensure Exam",
    path: "/review/vet",
    highlight: "Best for DVM graduates and interns preparing for the VLE.",
  },
  {
    code: "FTLE",
    name: "Fisheries Technologist Licensure Exam",
    path: "/review/ftle",
    highlight:
      "Ideal for BS Fisheries graduates who want a focused, concept-driven review.",
  },
  {
    code: "AB",
    name: "Agricultural & Biosystems Engineering",
    path: "/review/abe",
    highlight:
      "Covers core engineering, agriculture, and applied sciences for the AB Engg board.",
  },
  {
    code: "FISH",
    name: "Fisheries Licensure Exam",
    path: "/review/fisheries",
    highlight:
      "For future fisheries professionals who want guided coaching and exam strategies.",
  },
];

const guaranteePoints = [
  "Curated by board topnotchers and industry experts.",
  "Designed to integrate with BoardPrep Question Drills.",
  "Built for board exam takers.",
];

const ReviewClass = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Review Classes"
        description="Join BoardPrep Review Classes for structured, exam-focused preparation across multiple licensure programs, guided by board topnotchers."
      />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-background via-background/80 to-background">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-md bg-cover bg-right bg-no-repeat opacity-100"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Board Exam Review Classes
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Review classes built
                <span className="block">
                  for <em className="not-italic text-accent">Philippine</em>{" "}
                  board exams.
                </span>
              </h1>

              <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-sans max-w-2xl">
                Enroll in structured, high-yield review programs that combine
                live lectures, guided drills, and exam strategies—powered by the
                same team behind BoardPrep Question Drills.
              </p>

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
                <Link to="/enroll" className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto group font-display"
                  >
                    Enroll in a Review Class
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
                <Link to="https://www.myboardprep.com/" className="w-full sm:w-auto ">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="w-full sm:w-auto font-display text-foreground"
                  >
                    Explore Question Drills
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 lg:py-32 bg-muted/30 border-y border-border/60">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Why BoardPrep Review
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Learn smarter, not just{" "}
                <em className="not-italic text-accent">harder</em>.
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Each review class is built around exam patterns, frequent board
                questions, and real performance data from thousands of practice
                drills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`animate-fade-up delay-${(index + 3) * 100} group`}
                >
                  <div className="bg-card rounded-sm p-8 lg:p-9 shadow-soft border border-border/60 h-full">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs grid */}
        {/* <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Programs
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Choose your{" "}
                <em className="not-italic text-accent">review track</em>.
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Pick the program that matches your licensure exam. Each one has
                its own dedicated curriculum, lectures, and drill sets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {programs.map((program, index) => (
                <Link
                  to={program.path}
                  key={program.path}
                  className={`animate-fade-up delay-${(index + 3) * 100} group`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 lg:p-7 hover:border-accent/70 hover:shadow-lg transition-all h-full flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Layers className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Code
                          </p>
                          <p className="font-display text-lg text-foreground">
                            {program.code}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        {program.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {program.highlight}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                        View program details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                      <Trophy className="w-5 h-5 text-amber-500/80" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section> */}

        {/* Guarantee / CTA */}
        <section className="py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-secondary">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -right-10 w-[340px] h-[340px] bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-primary/80 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 px-8 lg:px-16 py-16 lg:py-20 items-center">
                <div>
                  <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                    Built by BoardPrep
                  </p>
                  <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground leading-tight mb-5">
                    Start your{" "}
                    <em className="not-italic text-primary">review journey</em>{" "}
                    with confidence.
                  </h2>
                  <p className="animate-fade-up delay-200 text-secondary-foreground/75 text-base md:text-lg leading-relaxed font-sans mb-6">
                    Our review classes are designed to work hand-in-hand with
                    your self-paced drills, so every lecture, assignment, and
                    quiz moves you closer to your target rating on board exam
                    day.
                  </p>

                  <ul className="animate-fade-up delay-300 space-y-3 mb-8">
                    {guaranteePoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-secondary-foreground/80"
                      >
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary" />
                        <span className="text-sm md:text-base leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
                    <Link to="/enroll" className="w-full sm:w-auto">
                      <Button
                        variant="hero"
                        size="lg"
                        className="w-full sm:w-auto group font-display"
                      >
                        Enroll in a Review Class
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Button>
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button
                        variant="heroOutline"
                        size="lg"
                        className="w-full sm:w-auto font-display"
                      >
                        Talk to our team
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-4 bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-secondary-foreground/90">
                        Sample Weekly Flow
                      </span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary-foreground/10 text-secondary-foreground/70">
                      Typical schedule
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-secondary-foreground/80">
                    <div className="flex justify-between">
                      <span>Monday–Friday</span>
                      <span>Concept lectures</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>Mock Exam</span>
                    </div>
                  </div>
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

export default ReviewClass;

