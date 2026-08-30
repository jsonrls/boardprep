import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { buildBasicPageSchema, buildFaqPageSchema } from "@/seo/schema";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";

const professionBanks = [
  {
    name: "Veterinary Medicine",
    path: "/review/vet",
    anchor: "Read the Veterinary Medicine exam review guide",
    coverage: "Foundational, clinical, production, public-health, and professional veterinary subjects.",
  },
  {
    name: "Fisheries",
    path: "/review/fisheries",
    anchor: "Explore the Fisheries licensure review plan",
    coverage: "Aquatic resources and ecology, aquaculture, capture fisheries, and post-harvest fisheries.",
  },
  {
    name: "Agriculture",
    path: "/review/agriculture",
    anchor: "See the Agriculturists board exam curriculum",
    coverage: "Crop science, protection, animal science, soils, economics, marketing, and extension.",
  },
  {
    name: "Food Technology",
    path: "/review/ftle",
    anchor: "Review the FTLE subjects and study timeline",
    coverage: "Food science, microbiology, processing, law, safety, engineering, quality, and sensory work.",
  },
  {
    name: "Agricultural and Biosystems Engineering",
    path: "/review/abe",
    anchor: "Study the ABELE weights and review strategy",
    coverage: "Power and machinery, land and water, structures, environment, bioprocess, and allied engineering.",
  },
] as const;

const drillFeatures = [
  {
    icon: Target,
    title: "Topic-focused practice",
    text: "Isolate one subject or competency before moving into mixed sets that require faster recognition.",
  },
  {
    icon: BookOpenCheck,
    title: "Answer rationales",
    text: "Review why the best answer fits and why plausible alternatives fail instead of memorizing a letter.",
  },
  {
    icon: Clock3,
    title: "Timed sessions",
    text: "Build pacing gradually, then use longer simulations to observe concentration and decision-making under pressure.",
  },
  {
    icon: BarChart3,
    title: "Performance signals",
    text: "Use result patterns to decide which lesson, computation, or competency deserves the next study block.",
  },
] as const;

const questionDrillFaqs = [
  {
    question: "What are BoardPrep Question Drills?",
    answer:
      "BoardPrep Question Drills are online board exam practice sets designed to help candidates retrieve concepts, apply them to examination-style situations, review rationales, and monitor performance over time.",
  },
  {
    question: "Which Philippine licensure exams have practice coverage?",
    answer:
      "BoardPrep supports review paths for Veterinary Medicine, Fisheries, Agriculture, Food Technology, and Agricultural and Biosystems Engineering. Available banks and subscription access can vary, so confirm the current catalog on the drill platform before purchasing.",
  },
  {
    question: "Are the drills a replacement for lectures or official PRC materials?",
    answer:
      "No. Drills work best alongside concept lessons, reliable references, and the latest PRC syllabus or Table of Specifications. Analytics and AI-supported recommendations are study aids, not official examination guidance.",
  },
  {
    question: "How many practice questions should I answer each day?",
    answer:
      "Choose a volume that leaves time to review every error. A smaller set with written corrections can be more valuable than a large set completed without understanding. Increase volume as accuracy and pacing stabilize.",
  },
  {
    question: "Do BoardPrep drills include mock board exams?",
    answer:
      "The broader BoardPrep review workflow includes topic practice and exam-focused mock assessments. Check the active product or review-program details for the exact mock schedule and access included with your plan.",
  },
  {
    question: "How much does access cost?",
    answer:
      "Question-drill plans and availability are shown on the BoardPrep drill platform. Review the current price, profession coverage, access period, renewal terms, and payment instructions there before subscribing.",
  },
  {
    question: "Where should I verify official exam dates and requirements?",
    answer:
      "Use the Professional Regulation Commission website and your PRC online account. Schedules, filing deadlines, testing centers, documentary requirements, permitted calculators, and room assignments can change.",
  },
] as const;

const baseSchema = buildBasicPageSchema({
  path: "/question-drills",
  name: "BoardPrep Question Drills",
  description:
    "Board exam practice questions for veterinary medicine, fisheries, agriculture, food technology, and agricultural engineering licensure examinations.",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Question Drills", path: "/question-drills" },
  ],
});

const questionDrillsSchema = {
  ...baseSchema,
  "@graph": [...baseSchema["@graph"], buildFaqPageSchema("/question-drills", questionDrillFaqs)],
};

const QuestionDrills = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Question Drills — Board Exam Practice Questions Philippines"
        description="Practice Philippine licensure exam questions with guided rationales, timed drills, progress analytics, and review paths for Vet, Fisheries, Agriculture, FTLE, and ABE."
        url="https://www.myboardprep.org/question-drills"
        jsonLd={questionDrillsSchema}
      />
      <Header />
      <main className="flex-1">
        <section data-beasties-container className="critical-render border-b border-border bg-muted/30 pb-20 pt-36 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <Breadcrumbs
              className="mb-6"
              items={[{ label: "Home", to: "/" }, { label: "Question Drills" }]}
            />
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Online board exam question bank
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Board Exam Practice Questions and Question Drills
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                BoardPrep Question Drills help licensure candidates move from passive reading to
                active recall, application, and error correction. Practice by topic, study the
                rationale, track patterns, and build toward timed mock-board conditions without
                treating a large question count as a shortcut to understanding.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/practice">
                    Start Practice Drills <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/review-class">Compare Review Classes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">How drills fit your review</p>
              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Practice should diagnose, teach, and confirm—not just produce a score
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  A board exam practice question is useful when it reveals what you can retrieve
                  without notes and what you can apply to a new situation. Begin with an official
                  PRC syllabus or Table of Specifications for your profession. Use a baseline set
                  to identify weak areas, return to the relevant lesson, and then answer a fresh set.
                  That loop gives every drill a job: diagnose a gap, develop a skill, or confirm
                  retention.
                </p>
                <p>
                  BoardPrep’s online licensure exam drills support self-paced study, but self-paced
                  does not mean unplanned. Set a weekly subject rotation, protect time for rationale
                  review, and mix older topics into new sessions. Candidates preparing for the
                  Veterinary, Fisheries, Agriculturists, Food Technology, or ABE licensure exam can
                  use the relevant review page below to understand the official scope before choosing
                  a question bank.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {professionBanks.map((bank) => (
                <article key={bank.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-display text-xl text-foreground">{bank.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{bank.coverage}</p>
                  <Link to={bank.path} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
                    {bank.anchor} <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Learning features</p>
              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                A complete practice cycle for concepts, pacing, and decisions
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {drillFeatures.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6">
                  <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2 lg:px-12">
            <article className="rounded-2xl border border-border bg-card p-7 md:p-9">
              <BrainCircuit className="h-8 w-8 text-accent" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl text-foreground">Use AI-supported analytics carefully</h2>
              <div className="mt-5 space-y-4 leading-7 text-muted-foreground">
                <p>
                  Performance analytics can organize results into useful signals: a candidate may
                  be accurate in recall questions but inconsistent in computations, or strong in one
                  official subject while avoiding another. AI-supported recommendations can use those
                  patterns to suggest a next topic or drill.
                </p>
                <p>
                  Treat every recommendation as a study aid. It does not replace the PRC scope,
                  qualified instruction, a complete reference, or your own review of the rationale.
                  Confirm that a suggested priority is supported by enough fresh attempts. If the same
                  gap appears in several sets, schedule concept review and deliberate practice.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-secondary p-7 text-secondary-foreground md:p-9">
              <ClipboardCheck className="h-8 w-8 text-primary" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl text-white">Move from drills to mock-board conditions</h2>
              <div className="mt-5 space-y-4 leading-7 text-secondary-foreground/75">
                <p>
                  Topic practice builds components; a mock exam tests the complete system. Once your
                  accuracy is reasonably stable, combine official subject groups, set a time limit,
                  use only currently permitted tools, and take realistic breaks. Record unanswered
                  items, changed answers, and accuracy late in the session.
                </p>
                <p>
                  Review the mock by competency, not only total score. Relearn the weakest concepts,
                  solve parallel problems, and run another fresh simulation later. BoardPrep review
                  classes combine guided coverage with drills and exam-focused assessments for
                  candidates who want more structure than a standalone practice bank.
                </p>
              </div>
              <Link to="/review-class" className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline">
                Explore online review programs <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Eight-week framework</p>
                <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                  A realistic question-drill study plan
                </h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Adjust the pace to your diagnostic result and available hours. Do not publish an old
                  examination date in your calendar; first verify the active PRC schedule, then count
                  backward and leave a buffer for filing, travel, and rest.
                </p>
              </div>
              <ol className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Weeks 1–2", "Take a baseline, map errors to the official scope, and rebuild priority concepts with small focused sets."],
                  ["Weeks 3–4", "Rotate through remaining subjects, write corrections, and mix earlier topics to protect retention."],
                  ["Weeks 5–6", "Increase mixed and timed work, use analytics to rebalance study time, and complete longer assessments."],
                  ["Weeks 7–8", "Run fresh mock exams, fix repeated gaps, rehearse logistics, and taper into lighter high-yield recall."],
                ].map(([period, text]) => (
                  <li key={period} className="rounded-2xl border border-border bg-card p-6">
                    <strong className="font-display text-xl text-foreground">{period}</strong>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <article>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Truthful success measures</p>
                <h2 className="mt-4 font-display text-3xl text-foreground">Measure learning, not a marketing promise</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  No question bank can guarantee a license. Useful evidence is personal and repeatable:
                  improved accuracy on unseen items, fewer repeated error types, balanced performance
                  across official subjects, stronger pacing, and the ability to explain an answer before
                  looking at the choices. Keep a dated error log and compare fresh sets rather than
                  repeating familiar questions until the score looks high.
                </p>
              </article>
              <aside className="rounded-2xl border border-border bg-card p-7 md:p-9">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Access and pricing</p>
                <h2 className="mt-4 font-display text-3xl text-foreground">Review the active plan before subscribing</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Drill-bank prices, profession coverage, subscription periods, and promotions can
                  change. BoardPrep therefore displays the current commercial details on the practice
                  platform instead of publishing a potentially stale amount here. Before paying, check
                  the included profession, access period, renewal terms, payment channel, and support
                  contact. Review-class fees are listed separately on each program page.
                </p>
                <a href="https://www.myboardprep.com/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-medium text-secondary hover:underline">
                  Check current Question Drill plans <ArrowRight className="h-4 w-4" />
                </a>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <Link to="/our-products" className="text-secondary hover:underline">
                    Compare all BoardPrep study products
                  </Link>
                  <Link to="/review-class" className="text-secondary hover:underline">
                    Add guided review classes to your drill plan
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="question-drills-faq" className="border-t border-border bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto max-w-5xl px-6 lg:px-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Frequently asked questions</p>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Questions about online board exam practice
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-8">
              {questionDrillFaqs.map(({ question, answer }) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-foreground">
                    {question}
                    <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-4xl pt-4 leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xl text-foreground">Official planning references</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Use BoardPrep to practice, and use the Professional Regulation Commission as the
                authority for the current examination calendar, application requirements, Board
                resolutions, and profession-specific Tables of Specification.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
                <li><a href="https://www.prc.gov.ph/2026-schedule-examination" target="_blank" rel="noopener noreferrer" className="hover:underline">PRC examination schedule</a></li>
                <li><a href="https://www.prc.gov.ph/list-of-requirements" target="_blank" rel="noopener noreferrer" className="hover:underline">PRC list of requirements</a></li>
                <li><a href="https://www.prc.gov.ph/professional-regulatory-boards" target="_blank" rel="noopener noreferrer" className="hover:underline">PRC regulatory boards</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuestionDrills;
