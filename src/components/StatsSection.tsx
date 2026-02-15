import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  {
    value: 15000,
    suffix: "+",
    label: "Questions from various industries",
  },
  {
    value: 7000,
    suffix: "+",
    label: "Subscribers",
  },
  {
    value: 100,
    suffix: "+",
    label: "Board topnotchers and specialist question contributors",
  },
  {
    value: 50,
    suffix: "%",
    label: "Better than national passing average",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest),
        );
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-secondary border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 text-accent lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`animate-fade-up delay-${(index + 1) * 100}`}
            >
              <h3 className="font-display text-4xl lg:text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white text-sm lg:text-base leading-tight max-w-[160px] mx-auto font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
