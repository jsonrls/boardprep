import { useRef, useState } from "react";
import { Globe, MousePointerClick, CreditCard, Rocket } from "lucide-react";
import { useAnimationFrame } from "framer-motion";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Visit Website",
    description: (
      <>
        Go to{" "}
        <a
          href="https://www.myboardprep.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          website
        </a>{" "}
        to explore our available question drill packages and review materials.
      </>
    ),
  },
  {
    icon: MousePointerClick,
    step: "02",
    title: "Select Subscription",
    description:
      "Choose the Question Drill plan that fits your needs and click the 'Subscribe' button to proceed.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Secure Payment",
    description:
      "Our system will guide you through a secure payment channel to safely complete your transaction.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Drilling",
    description:
      "Receive instant access to the question bank and dashboard to begin your board exam preparation.",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);

  // Animation configuration
  const DURATION = 6000; // Time for line to travel full width (ms)
  const PAUSE = 1500; // Pause time after completion (ms)
  const TOTAL_CYCLE = DURATION + PAUSE;

  useAnimationFrame((t) => {
    // Calculate cycle time
    const timeInCycle = t % TOTAL_CYCLE;

    // Check if we are in the active animation phase
    if (timeInCycle <= DURATION) {
      const progress = timeInCycle / DURATION;

      // Update line width directly for performance
      if (lineRef.current) {
        lineRef.current.style.width = `${progress * 100}%`;
        lineRef.current.style.opacity = "1";
      }

      // Calculate which step should be active
      // 3 segments for 4 items: 0% (Item 0), 33% (Item 1), 66% (Item 2), 100% (Item 3)
      const exactIndex = progress * (steps.length - 1); // 0 to 3
      const currentIndex = Math.floor(exactIndex + 0.2); // Add small buffer to trigger slightly early

      // Ensure we don't exceed max index
      const safeIndex = Math.min(currentIndex, steps.length - 1);

      if (safeIndex !== activeStep) {
        setActiveStep(safeIndex);
      }
    } else {
      // Pause/Reset phase
      if (lineRef.current) {
        // Fade out line at end
        const fadeProgress = (timeInCycle - DURATION) / 500; // Fade over 500ms
        lineRef.current.style.opacity = `${Math.max(0, 1 - fadeProgress)}`;
      }

      // Reset active step at the very end of pause, ready for next cycle
      if (timeInCycle > TOTAL_CYCLE - 100 && activeStep !== -1) {
        setActiveStep(-1);
      }
      // Reset active step to 0 as soon as we restart (handled by start of next loop implicitly logic-wise,
      // but strictly we want step 0 to light up immediately at t=0)
    }
  });

  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Simple Process
          </p>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            How it works
          </h2>
          <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed">
            Getting started is easy. Follow these simple steps to access your
            comprehensive review materials.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Background Line (Inactive Track) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-border/40" />

          {/* Animated Running Light Line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] pointer-events-none">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent w-0 relative"
              style={{ willChange: "width" }}
            >
              {/* Glowing Head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full blur-md shadow-[0_0_15px_rgba(255,165,0,0.8)] opacity-80 translate-x-1/2" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full translate-x-1/2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((item, index) => {
              const isActive = index <= activeStep;

              return (
                <div
                  key={item.title}
                  className={`animate-fade-up delay-${(index + 3) * 100} relative text-center group`}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 mx-auto mb-8">
                    <div
                      className={`
                      w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-soft transition-all duration-500 ease-out
                      ${
                        isActive
                          ? "bg-accent border-2 border-accent scale-110 shadow-[0_0_30px_rgba(255,165,0,0.3)]"
                          : "bg-card border-2 border-border"
                      }
                    `}
                    >
                      <span
                        className={`
                        font-display text-2xl transition-colors duration-300
                        ${isActive ? "text-white" : "text-muted-foreground"}
                      `}
                      >
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <item.icon
                      size={26}
                      className={`transition-all duration-500 ${isActive ? "text-accent scale-110" : "text-muted-foreground"}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className={`font-display text-2xl mb-4 transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
