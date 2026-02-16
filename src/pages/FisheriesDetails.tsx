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
  Fish,
  Target,
  TrendingUp,
  Waves,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

const courseFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description:
      "Complete coverage of all Fisheries topics with detailed study guides and reference materials.",
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
      "Learn from board topnotchers and licensed fisheries professionals with proven teaching methods.",
  },
  {
    icon: Target,
    title: "Practice Quizzes",
    description:
      "Test your knowledge with hundreds of practice questions and detailed explanations.",
  },
];

const curriculumTopics = [
  { title: "Aquaculture Systems", lessons: 22 },
  { title: "Fish Biology & Physiology", lessons: 18 },
  { title: "Marine Ecology", lessons: 20 },
  { title: "Fisheries Management", lessons: 24 },
  { title: "Capture Fisheries", lessons: 16 },
  { title: "Post-Harvest Technology", lessons: 20 },
  { title: "Aquatic Resources Conservation", lessons: 14 },
  { title: "Fisheries Economics", lessons: 12 },
];

const speakers = [
  {
    name: "Dr. Carlos Rivera",
    specialty: "Aquaculture Systems",
    credential: "Board Topnotcher 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=CarlosRivera",
  },
  {
    name: "Dr. Marina Santos",
    specialty: "Marine Ecology",
    credential: "20+ Years Teaching Experience",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarinaSantos",
  },
  {
    name: "Dr. Jose Aquino",
    specialty: "Fisheries Management",
    credential: "Board Topnotcher 2022",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JoseAquino",
  },
  {
    name: "Dr. Lisa Fernandez",
    specialty: "Post-Harvest Technology",
    credential: "Licensed Fisheries Professional",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=LisaFernandez",
  },
];

const stats = [
  { icon: Users, value: "300+", label: "Students Enrolled" },
  { icon: Clock, value: "100+", label: "Hours of Content" },
  { icon: TrendingUp, value: "92%", label: "Pass Rate" },
  { icon: Star, value: "4.8/5", label: "Student Rating" },
];

const FisheriesDetails = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Fisheries Review Class"
        description="Specialized review materials for Fisheries professionals. Expert instructors, complete materials, and proven results."
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/fisheries-hero-bg.png')",
            }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/60" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Fish className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Fisheries Licensure Exam
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Fisheries Review Class
              </h1>

              <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-sans">
                Master the Fisheries Licensure Examination with specialized
                review materials, expert instructors, and a comprehensive
                curriculum designed by industry professionals.
              </p>

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pre-register" className="w-full sm:w-auto">
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
                Our Fisheries review class provides comprehensive preparation
                with expert guidance and proven study materials.
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
                Our curriculum covers all essential topics for the Fisheries
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
                          <p className="text-sm text-muted-foreground">
                            {topic.lessons} lessons
                          </p>
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
                Our instructors are board topnotchers and experienced fisheries
                professionals dedicated to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {speakers.map((speaker, index) => (
                <div
                  key={speaker.name}
                  className={`animate-fade-up delay-${(index + 3) * 100} bg-card rounded-sm p-8 shadow-soft hover-lift border border-border/50 text-center`}
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
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {speaker.specialty}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-3 py-1">
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
                  <em className="not-italic text-primary">Fisheries exam</em>?
                </h2>
                <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                  Join hundreds of successful students who have passed the
                  Fisheries Licensure Examination with our comprehensive review
                  program.
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

export default FisheriesDetails;
