import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      {/* Aurora Background Effects */}
      {/* Aurora Background Effects - Stronger colors from palette */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ffbd59] blur-[100px] opacity-50 z-0 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#51ade5] blur-[100px] opacity-50 z-0 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-[#f14624] blur-[100px] opacity-40 z-0 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      {/* Text protection gradient - Reduced opacity of 'via' color to let blobs show through */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-0 pointer-events-none" />
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 max-w-2xl">
            {/* Tagline */}
            <p className="animate-fade-up text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 text-center md:text-left">
              Ed-Tech Board Exam Prep
            </p>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-display text-6xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8 text-center md:text-left">
              Master your board exam with{" "}
              <em className="not-italic text-accent">top-notch</em> drills.
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-foreground mb-10 leading-relaxed max-w-xl font-light text-center md:text-left">
              Affordable but high-quality question drills curated by board
              topnotchers. Join our self-paced review classes and study at your
              own convenience.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <Link to="/pre-register" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  <span>Get Started Now!</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-foreground w-full sm:w-auto"
                asChild
              >
                <Link to="/review/vet">Start Practice Drills</Link>
              </Button>
            </div>
          </div>

          {/* Image spacer - Optional: if we want to ensure text stays left and doesn't center if we used justify-center. 
              The current flex is "items-center". If there is only one child, it will sit there.
              However, if the user wants the text on the left, we should verify "container" width.
          */}
        </div>
      </div>

      {/* Overlay to ensure text readability if needed - adding a subtle gradient or wash might be safe? 
          User didn't ask for it, but if the image is busy, text is hard to read.
          Let's try to infer from "make it background". Often implies hero background.
          I will add a slight overlay just in case, but maybe transparent for now or light white fade if the image is orange?
          Actually, let's stick to the requested change precisely first.
      */}
    </section>
  );
};

export default HeroSection;
