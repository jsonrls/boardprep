import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-img-3.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-0" />
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
              <a href="/pre-register" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  <span>Pre-Register Now!</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-foreground w-full sm:w-auto"
                asChild
              >
                <a href="/review/vet">Start Practice Drills</a>
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
