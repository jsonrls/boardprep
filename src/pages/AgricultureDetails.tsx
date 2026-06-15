import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Leaf,
  Sprout,
  Star,
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Video,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "/modules/agri.jpg";

const courseFeatures = [
  {
    icon: BookOpen,
    title: "Board-Focused Materials",
    description:
      "Review notes and guided handouts organized around the core areas commonly tested in the Agriculturists Licensure Exam.",
  },
  {
    icon: Video,
    title: "Live and Recorded Sessions",
    description:
      "Join structured lectures, then revisit recordings when you need to reinforce crop, soil, animal, and economics topics.",
  },
  {
    icon: Award,
    title: "Expert Mentors",
    description:
      "Learn from licensed agriculturists, board topnotchers, and instructors who translate technical topics into exam-ready concepts.",
  },
  {
    icon: Target,
    title: "Practice and Rationales",
    description:
      "Build speed and accuracy with quizzes, diagnostic checkpoints, and explanations that sharpen your decision-making.",
  },
];

const curriculumTopics = [
  {
    title: "Crop Science",
    lessons: [
      "Nature and Importance of Agriculture",
      "Classification of Crops. Botanical and Agricultural System of Classification",
      "Nature and Composition of Crop Plants",
      "Plant Growth and Development",
      "Factors Affecting Crop Production",
      "Crop Improvement, Seed Selection and Biotechnology",
      "Sustainable Crop Production",
      "Crop Production Practices",
      "Site Selection Characterization",
      "Introduction to Crop Biotechnology"
    ]
  },
  {
    title: "Soil Science",
    lessons: [
      "Soil Concept, Definition, and Functions",
      "Soil Formation and Development",
      "Physical Properties of Soils",
      "Chemical Properties of Soils",
      "Soil Biological Processes",
      "Soil Fertility and Management with Fertilizer Computation",
      "Soil Survey and Soil Classification",
      "Soil Biotechnology",
      "Soil Conservation and Management"
    ]
  },
  {
    title: "Animal Science",
    lessons: [
      "Anatomy and Physiology of Farm Animals",
      "Genetics and Animal Breeding",
      "Animal Nutrition",
      "Slaughtering, Processing, and Marketing of Animals and their Products",
      "Swine Production and Management",
      "Poultry Production and Management",
      "Dairy Production and Management",
      "Goat Production and Management",
      "Beef Cattle Production and Management",
      "Animal Diseases",
      "Introduction to Animal Biotechnology"
    ]
  },
  {
    title: "Crop Protection",
    lessons: [
      "F. Pest Management (F1, F2, & F4)",
      "C. Arthropods and Vertebrate Pests (C1)",
      "A. Nature and Importance of Crop Protection & D. Weeds (D1 & D2)",
      "B. Plant Pathogens (B3)",
      "B. Plant Pathogens (B2.6. Analyze the symptoms caused by Bacteria)",
      "B. Plant Pathogens (B2.4. Identify the symptoms caused by Fungi)",
      "F3-Pesticide Calculation & D. Weeds (D3-D5)",
      "C. Arthropods and Vertebrate Pests (C2-C3) & E. Invasive Species",
      "B. Plant Pathogens (Identify the groups of plant parasitic nematodes)",
      "B. Plant Pathogens (B1 & B2.1-2.3)"
    ]
  },
  {
    title: "Agricultural Marketing and Economics",
    lessons: [
      "Introduction: Nature and Method, Economizing Problem, Market System",
      "D&S, Equilibrium Elasticity",
      "Microeconomics 1: Market Models, Theory of Consumer Demand, Theory of Production",
      "Microeconomics 2: Cost of Production, Price and Output Determination, Pricing and Employment of Resources",
      "Macroeconomics (Measuring Economy's Performance up to Money and Banking)",
      "Agricultural Policy and Development with International Economics",
      "Agricultural Marketing",
      "Agriculture and Economic Growth with Agribusiness and Entrepreneurship"
    ]
  },
  {
    title: "Agricultural Extension",
    lessons: [
      "Overview of Agricultural Extension",
      "Theoretical and Practical Frameworks of Agricultural Extension",
      "Practice of Agricultural Extension",
      "Attributes of Technology",
      "Communication in Extension",
      "Technology Diffusion and Adoption",
      "Program Planning, Monitoring and Evaluation",
      "Adult Teaching and Learning",
      "Community Organizing"
    ]
  }
];

const stats = [
  { icon: Users, value: "300+", label: "Reviewees Guided" },
  { icon: Clock, value: "100+", label: "Review Hours" },
  { icon: TrendingUp, value: "TOS", label: "Aligned Mock Exams" },
  { icon: Star, value: "4.8/5", label: "Learner Rating" },
];

const AgricultureDetails = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Agriculture Review Class"
        description="BoardPrep Agriculture review class for the Agriculturists Licensure Exam with expert mentors, guided lessons, practice quizzes, and mock exams."
      />
      <Header />

      <main className="flex-grow">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/55 via-secondary/70 to-secondary/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,190,86,0.28),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_28%)]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Wheat className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Agriculturists Licensure Exam
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Agriculture Review Class
              </h1>

              <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-sans">
                Prepare for the Agriculturists Licensure Exam with a structured
                program that connects crop, soil, animal, economics, and
                extension concepts to exam-style practice.
              </p>

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enroll" className="w-full sm:w-auto">
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

        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
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

        <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Course Features
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Review with{" "}
                <em className="not-italic text-accent">field-tested</em>{" "}
                structure
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                The Agriculture review class is built to help you connect broad
                technical coverage with the kind of questions you will meet on
                exam day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {courseFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-fade-up group"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
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

        <section id="curriculum" className="py-28 lg:py-36 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Curriculum
              </p>
              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Core areas for{" "}
                <em className="not-italic text-accent">agriculture</em>{" "}
                review
              </h2>
              <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                Study blocks are grouped so you can move from fundamentals to
                exam application without losing the bigger agricultural systems
                view.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <div className="flex flex-col gap-4">
                  {curriculumTopics.map((topic, index) => (
                    <div
                      key={topic.title}
                      className="animate-fade-up bg-card border border-border rounded-sm hover-lift group"
                      style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    >
                      <AccordionItem value={`topic-${index}`} className="border-none">
                        <AccordionTrigger className="hover:no-underline p-6 text-left [&[data-state=open]>svg]:rotate-180">
                          <div className="flex items-center gap-4 text-left">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h3 className="font-display text-lg text-foreground mb-1">
                                {topic.title}
                              </h3>
                              <p className="text-sm text-muted-foreground font-normal">
                                {topic.lessons.length} core topics
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-0 border-t border-border/50 bg-muted/10">
                          {(() => {
                            const mid = Math.ceil(topic.lessons.length / 2);
                            const leftCol = topic.lessons.slice(0, mid);
                            const rightCol = topic.lessons.slice(mid);
                            return (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
                                <ul className="space-y-3">
                                  {leftCol.map((lesson, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                      <span>{lesson}</span>
                                    </li>
                                  ))}
                                </ul>
                                <ul className="space-y-3">
                                  {rightCol.map((lesson, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                      <span>{lesson}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })()}
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-16 items-start">
              <div>
                <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                  Review Flow
                </p>
                <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                  From concepts to{" "}
                  <em className="not-italic text-accent">exam confidence</em>
                </h2>
                <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
                  Each week is designed to tighten recall, deepen
                  understanding, and turn broad agriculture coverage into
                  repeatable exam habits.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Wheat,
                    title: "Learn",
                    description: "Core lectures and guided notes",
                  },
                  {
                    icon: Leaf,
                    title: "Practice",
                    description: "Topic quizzes and rationales",
                  },
                  {
                    icon: Sprout,
                    title: "Simulate",
                    description: "Mock exams and final coaching",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="animate-fade-up bg-card border border-border/60 rounded-sm p-6 shadow-soft"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="relative bg-secondary overflow-hidden rounded-3xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
              </div>

              <div className="relative z-10 py-20 lg:py-28 px-8 lg:px-16 text-center">
                <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                  Get Started Today
                </p>
                <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-secondary-foreground leading-tight mb-6 max-w-4xl mx-auto">
                  Ready to prepare for your{" "}
                  <em className="not-italic text-primary">
                    Agriculture board exam
                  </em>
                  ?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                  Join a guided Agriculture review class built for consistent
                  study, targeted practice, and confident exam execution.
                </p>
                <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/enroll" className="w-full sm:w-auto">
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full sm:w-auto group font-display"
                    >
                      Enroll Now
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </Link>
                  <Link to="/question-drills" className="w-full sm:w-auto">
                    <Button
                      variant="heroOutline"
                      size="lg"
                      className="w-full sm:w-auto font-display"
                    >
                      Try Practice Drills
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

export default AgricultureDetails;
