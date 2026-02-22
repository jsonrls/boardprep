import { Button } from "@/components/ui/button";
import { Play, Smartphone } from "lucide-react";
import phoneMockup from "@/assets/mobile-app.png";
import googlePlayLogo from "@/assets/google-play.png";
import appleLogo from "@/assets/apple-logo.png";

const MobileAppSection = () => {
  return (
    <section className="pt-24 pb-0 bg-secondary overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-accent opacity-20 animate-float">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
      <div
        className="absolute bottom-20 right-10 text-primary opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <rect width="40" height="40" rx="4" transform="rotate(45 20 20)" />
        </svg>
      </div>
      <div
        className="absolute top-40 right-1/3 text-warning opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        >
          <path d="M5 5L25 25M5 25L25 5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end h-full">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-up self-center pb-8 lg:pb-0">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
              Level Up Your <br />
              <span className="text-background">Board Prep</span>
            </h2>

            <p className="text-lg md:text-xl text-background font-light max-w-xl mx-auto lg:mx-0 font-sans">
              Boost your skills, beat the boards —{" "}
              <br className="hidden md:inline" />
              with the{" "}
              <strong className="font-medium text-background font-display">
                BoardPrep® App!
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black/90 text-white px-5 py-2.5 hover:bg-black/75 transition-all duration-300 shadow-xl border border-white/20 group rounded-full backdrop-blur-sm cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
                  <img
                    src={googlePlayLogo}
                    alt="Google Play"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 font-medium">
                    Get it on
                  </div>
                  <div className="text-lg font-bold font-sans leading-none">
                    Google Play
                  </div>
                </div>
              </a>

              {/* App Store Button (Disabled) */}
              <button
                disabled
                className="flex items-center justify-center gap-3 bg-white/10 text-white px-5 py-2.5 cursor-not-allowed border border-white/20 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={appleLogo}
                    alt="App Store"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 font-medium">
                    Coming soon
                  </div>
                  <div className="text-lg font-bold font-sans leading-none">
                    App Store
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mockup Image */}
          <div className="relative animate-fade-up delay-200 flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] transform -rotate-[5deg] transition-all duration-700 hover:rotate-[0deg] hover:scale-105">
              <img
                src={phoneMockup}
                alt="BoardPrep App Interface"
                className="relative z-10 w-full h-auto scale-125 drop-shadow-2xl"
              />

              {/* Floating Elements on top/around phone */}
              <div
                className="absolute -right-12 top-20 bg-white p-3 rounded-xl shadow-elegant animate-float hidden md:flex items-center gap-3 z-20 border border-border/50"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-glow" />
                <div>
                  <span className="block text-xs font-bold text-foreground font-display">
                    98% Passing Rate
                  </span>
                  <span className="block text-[10px] text-muted-foreground font-sans">
                    Average user score
                  </span>
                </div>
              </div>
              <div
                className="absolute -left-12 bottom-32 bg-white p-3 rounded-xl shadow-elegant animate-float hidden md:flex items-center gap-3 z-20 border border-border/50"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Smartphone size={16} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-foreground font-display">
                    Gamified Drills
                  </span>
                  <span className="block text-[10px] text-muted-foreground font-sans">
                    Learn while playing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
