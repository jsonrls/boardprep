import { GraduationCap, PlayCircle, Wallet, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Curated by Topnotchers",
    description:
      "Drills and materials expertly crafted by board exam topnotchers for maximum relevance.",
  },
  {
    icon: PlayCircle,
    title: "Self-Paced Learning",
    description:
      "Review at your own speed with accessible materials anytime, anywhere.",
  },
  {
    icon: Wallet,
    title: "Affordable Quality",
    description:
      "Our subscription allows you to save a swooping average of 94% of review costs.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Effective",
    description:
      "Designed to build confidence and mastery for your upcoming board examination.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="products" className="py-28 lg:py-12 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Why Choose BoardPrep
          </p>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Comprehensive tools for your{" "}
            <em className="not-italic text-accent">licensure</em> journey
          </h2>
          <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed">
            We bridge the gap between affordability and quality, offering you
            the best resources to secure your professional license.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
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
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
