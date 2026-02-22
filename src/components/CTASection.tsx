import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-muted/30">
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
              <em className="not-italic text-primary">board exam</em>?
            </h2>
            <p className="animate-fade-up delay-200 text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
              Join hundreds of topnotchers and successful examinees who trusted
              BoardPrep for their licensure review. Enroll now to secure your
              license.
            </p>
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://www.myboardprep.com/" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto group font-display"
                >
                  Start Practice Drills
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <Link to="/review/vet" className="w-full sm:w-auto">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full sm:w-auto font-display"
                >
                  View Review Classes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
