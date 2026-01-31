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
  Tractor,
  Target,
  TrendingUp,
  Sprout,
} from "lucide-react";

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
      "Learn from board topnotchers and licensed agricultural engineers with proven teaching methods.",
  },
  {
    icon: Target,
    title: "Practice Quizzes",
    description:
      "Test your knowledge with hundreds of practice questions and detailed explanations.",
  },
];

const curriculumTopics = [
  { title: "Agricultural Structures and Allied Subjects", lessons: 26 },
  { title: "Farm Power and Machinery", lessons: 24 },
  { title: "Soil and Water Engineering", lessons: 28 },
  { title: "Post-Harvest and Processing Engineering", lessons: 22 },
  { title: "Agricultural Systems and Management", lessons: 20 },
  { title: "Mathematics and Basic Sciences", lessons: 18 },
];

const stats = [
  { label: "Pass Rate", value: "92%", icon: TrendingUp },
  { label: "Study Hours", value: "120+", icon: Clock },
  { label: "Practice Questions", value: "1,500+", icon: Target },
  { label: "Expert Instructors", value: "8+", icon: Users },
];

const speakers = [
  {
    name: "Engr. Maria Santos",
    specialty: "Agricultural Structures",
    credential: "Board Topnotcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    name: "Engr. Juan Dela Cruz",
    specialty: "Farm Machinery",
    credential: "Licensed ABE",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
  },
  {
    name: "Engr. Ana Reyes",
    specialty: "Soil & Water Engineering",
    credential: "Board Topnotcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    name: "Engr. Carlos Mendoza",
    specialty: "Post-Harvest Engineering",
    credential: "Licensed ABE",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
];

const AbeDetails = () => {
  return (
    <>
      <SEO
        title="Agricultural and Biosystems Engineering Review | BoardPrep"
        description="Comprehensive review program for Agricultural and Biosystems Engineering Licensure Exam. Expert instructors, practice materials, and proven success strategies."
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${new URL("@/assets/abe-hero-bg.png", import.meta.url).href})`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/60" />

          {/* Content */}
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Tractor className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Agricultural & Biosystems Engineering
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up delay-100">
                Master Your ABE Board Exam
              </h1>

              <p className="text-xl text-white mb-8 animate-fade-up delay-200">
                Join our comprehensive review program designed by board
                topnotchers and industry experts. Get the knowledge and
                confidence you need to pass the Agricultural and Biosystems
                Engineering Licensure Exam.
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
                    className="w-full sm:w-auto group"
                  >
                    Access LMS
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </a>
                <a href="#curriculum" className="w-full sm:w-auto">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    View Curriculum
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <p className="text-muted-foreground">{feature.description}</p>
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                    <p className="text-sm text-muted-foreground">
                      {topic.lessons} comprehensive lessons
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expert Instructors */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Learn from the Best
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our instructors are board topnotchers and experienced
                agricultural engineers dedicated to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-block mb-4">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-32 h-32 rounded-full mx-auto border-4 border-accent/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {speaker.specialty}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1">
                    <Award className="w-3 h-3 text-secondary" />
                    <span className="text-xs font-medium text-secondary">
                      {speaker.credential}
                    </span>
                  </div>
                </div>
              ))}
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
                  <em className="not-italic text-primary">ABE Board Exam</em>?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of successful agricultural engineers who
                  trusted BoardPrep for their licensure exam preparation.
                </p>
                <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full sm:w-auto group"
                    >
                      Access Learning Platform
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </a>
                  <a href="/pre-register" className="w-full sm:w-auto">
                    <Button
                      variant="heroOutline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Pre-Register Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AbeDetails;
