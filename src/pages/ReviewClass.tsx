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
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.avif";
import heroImage640 from "@/assets/hero-640.avif";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  REVIEW_CLASS_FAQS,
  REVIEW_PROGRAMS,
  buildReviewClassPageSchema,
} from "@/seo/schema";

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
    name: "Food Technology Licensure Exam",
    path: "/review/ftle",
    highlight:
      "Ideal for BS Food Technology graduates who want a focused, concept-driven review.",
  },
  {
    code: "AGRI",
    name: "Agriculturists Licensure Exam",
    path: "/review/agriculture",
    highlight:
      "For agriculture graduates reviewing crop, soil, animal, economics, and extension topics.",
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

const programPrice = new Map(REVIEW_PROGRAMS.map((program) => [program.key, program.price]));
const formatPhp = (price: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(price);

const reviewProcess = [
  {
    title: "Diagnose your baseline",
    description:
      "Start with the official PRC scope and an honest assessment so your calendar reflects demonstrated gaps, not only favorite subjects.",
  },
  {
    title: "Learn in guided blocks",
    description:
      "Use lectures, organized notes, and worked examples to rebuild concepts before asking practice questions to confirm understanding.",
  },
  {
    title: "Drill and correct",
    description:
      "Complete focused and mixed question sets, read every rationale, and classify errors as knowledge, application, computation, or pacing problems.",
  },
  {
    title: "Simulate and refine",
    description:
      "Use timed mock exams to test subject balance and endurance, then return to the weakest competency with a smaller corrective loop.",
  },
] as const;

const ReviewClass = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Online Review Classes Philippines — Licensure Exam Preparation"
        description="Join BoardPrep Online Review Classes for structured, exam-focused preparation across Vet, Fisheries, Agriculture, FTLE, and ABE licensure programs, guided by board topnotchers."
        url="https://www.myboardprep.org/review-class"
        preloadImageHref={heroImage}
        preloadImageSrcSet={`${heroImage640} 640w, ${heroImage} 1600w`}
        preloadImageSizes="100vw"
        jsonLd={buildReviewClassPageSchema()}
      />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section data-beasties-container className="critical-render relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-background via-background/80 to-background">
          <img
            src={heroImage}
            srcSet={`${heroImage640} 640w, ${heroImage} 1600w`}
            sizes="100vw"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-100 md:w-md"
            width={1600}
            height={1516}
            {...{ fetchpriority: "high" }}
            decoding="async"
          />
          <div className="container relative mx-auto px-6 lg:px-12">
            <Breadcrumbs
              className="mb-6 max-w-4xl"
              items={[{ label: "Home", to: "/" }, { label: "Review Classes" }]}
            />
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Board Exam Review Classes
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Online Review Classes
                <span className="block">
                  for <em className="not-italic text-accent">Philippine Board Exams</em>
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
        <section className="py-24 lg:py-32 bg-background">
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
                          {program.code === "AGRI" ? (
                            <Wheat className="w-5 h-5 text-accent" />
                          ) : (
                            <Layers className="w-5 h-5 text-accent" />
                          )}
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
                      <p className="mt-3 font-display text-lg text-secondary">
                        {formatPhp(programPrice.get(
                          program.code === "VET"
                            ? "vet"
                            : program.code === "FTLE"
                              ? "ftle"
                              : program.code === "AGRI"
                                ? "agriculture"
                                : program.code === "AB"
                                  ? "abe"
                                  : "fisheries",
                        ) ?? 0)}
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
        </section>

        <section className="border-y border-border/60 bg-muted/30 py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  How online review works
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-foreground md:text-4xl">
                  Turn a broad licensure syllabus into a repeatable weekly system
                </h2>
                <div className="mt-6 space-y-5 leading-7 text-muted-foreground">
                  <p>
                    A Philippine board exam review class should do more than deliver long lectures.
                    BoardPrep combines guided instruction with self-paced materials, question drills,
                    rationales, and exam-focused assessments. The aim is to help each reviewee decide
                    what to study next and collect evidence that a weak area is improving.
                  </p>
                  <p>
                    AI-supported analytics can organize practice results and surface patterns, such as
                    a consistently weak subject or a drop in accuracy during timed work. Treat those
                    signals as planning aids. They do not replace the official PRC Table of
                    Specifications, qualified instruction, or your own review of a worked solution.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  <Link to="/question-drills" className="inline-flex items-center gap-2 font-medium text-secondary hover:underline">
                    Learn how BoardPrep Question Drills work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/our-products" className="font-medium text-secondary hover:underline">
                    Compare the complete BoardPrep product suite
                  </Link>
                </div>
              </div>

              <ol className="grid gap-5 sm:grid-cols-2">
                {reviewProcess.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 font-display text-sm text-secondary">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 font-display text-xl text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Timeline, access, and pricing
              </p>
              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Choose a program you can follow consistently
              </h2>
              <div className="mt-6 grid gap-8 text-base leading-7 text-muted-foreground md:grid-cols-2">
                <div className="space-y-4">
                  <p>
                    Candidates with twelve or more weeks can begin with diagnostics and foundations,
                    rotate through the complete official scope, and preserve several weeks for mixed
                    drills and mock exams. An eight-week plan can compress those blocks. A four-week
                    sprint should prioritize verified gaps and high-value cumulative practice rather
                    than trying to watch every lesson at double speed.
                  </p>
                  <p>
                    The right pace depends on graduation recency, work obligations, baseline scores,
                    and the number of calculation-heavy subjects. Keep one rest or catch-up block each
                    week. No review provider can guarantee a passing result; useful progress evidence
                    includes better accuracy on unseen questions, fewer repeated errors, balanced
                    subject performance, and improved pacing on timed assessments.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Current listed program fees are transparent: Veterinary Medicine ₱10,999,
                    Fisheries ₱999, Agriculture ₱6,999, Food Technology ₱4,999, and Agricultural and
                    Biosystems Engineering ₱4,999. Each dedicated page explains the profession-specific
                    curriculum and links to an enrollment form with that examination selected.
                  </p>
                  <p>
                    Before paying, confirm the active cohort schedule, access period, live and recorded
                    arrangements, payment instructions, and exact inclusions. PRC application fees,
                    travel, accommodation, permitted calculators, and other personal examination costs
                    are separate. BoardPrep deliberately asks candidates to verify dates because PRC
                    schedules, deadlines, testing centers, and room assignments can change.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
                <h3 className="font-display text-2xl text-foreground">Official scheduling source</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Use the current PRC master schedule for examination dates and filing periods, then
                  consult the relevant Professional Regulatory Board page for the latest syllabus,
                  Table of Specifications, resolutions, and examination-day program.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <a href="https://www.prc.gov.ph/2026-schedule-examination" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    PRC examination schedule
                  </a>
                  <a href="https://www.prc.gov.ph/professional-regulatory-boards" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    PRC Professional Regulatory Boards
                  </a>
                  <a href="https://www.prc.gov.ph/list-of-requirements" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    PRC application requirements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section id="faq" className="border-t border-border/60 bg-background py-24 lg:py-32">
          <div className="container mx-auto max-w-4xl px-6 lg:px-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Frequently Asked Questions
            </p>
            <h2 className="mb-10 font-display text-3xl leading-tight text-foreground md:text-4xl">
              About BoardPrep review classes
            </h2>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-8">
              {REVIEW_CLASS_FAQS.map(({ question, answer }) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-foreground">
                    {question}
                    <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 font-sans leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReviewClass;
