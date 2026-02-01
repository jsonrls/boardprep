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
          className="underline text-accent font-semibold"
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
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((item, index) => (
              <div
                key={item.title}
                className={`animate-fade-up delay-${(index + 3) * 100} relative text-center`}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto mb-8">
                  <div className="w-16 h-16 bg-accent border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto shadow-soft">
                    <span className="font-display text-2xl text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <item.icon
                    size={26}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-2xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
