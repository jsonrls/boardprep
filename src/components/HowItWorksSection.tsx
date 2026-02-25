import { useEffect, useMemo, useState } from "react";
import { Globe, MousePointerClick, CreditCard, Rocket } from "lucide-react";

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
  const progressPercent = useMemo(() => {
    if (steps.length <= 1) return 0;
    return (activeStep / (steps.length - 1)) * 100;
  }, [activeStep]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 lg:py-36 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Simple Process
          </p>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            How Are Question Drills Work?
          </h2>
          <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
            Getting started is easy. Follow these simple steps to access your
            comprehensive review materials.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl lg:max-w-none mx-auto">
          {/* Desktop progress track */}
          <div className="hidden lg:block absolute top-[2.25rem] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[3px] bg-border/40 rounded-full" />
          <div className="hidden lg:block absolute top-[2.25rem] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[3px] pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-secondary/40 via-secondary to-secondary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((item, index) => {
              const isCompleted = index < activeStep;
              const isCurrent = index === activeStep;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`animate-fade-up delay-${(index + 3) * 100} relative text-center group focus:outline-none`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div
                      className={[
                        "w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto shadow-soft transition-all duration-500 ease-out border-2",
                        isCompleted || isCurrent
                          ? "bg-secondary border-secondary scale-105 shadow-[0_0_30px_hsl(var(--secondary)/0.35)]"
                          : "bg-card border-border group-hover:border-secondary/70",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "font-display text-xl lg:text-2xl transition-colors duration-300",
                          isCompleted || isCurrent
                            ? "text-white"
                            : "text-muted-foreground",
                        ].join(" ")}
                      >
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center mb-4 lg:mb-6 transition-colors duration-300 mx-auto ${
                      isCurrent ? "animate-wiggle-once" : ""
                    }`}
                  >
                    <item.icon
                      size={24}
                      className={`transition-all duration-500 ${
                        isCompleted || isCurrent
                          ? "text-secondary scale-130"
                          : "text-muted-foreground group-hover:text-secondary"
                      }`}
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3
                    className={`font-display text-lg lg:text-2xl mb-3 lg:mb-4 transition-colors duration-300 ${
                      isCompleted || isCurrent
                        ? "text-foreground"
                        : "text-foreground/80 group-hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-[0.95rem] font-sans text-center">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
