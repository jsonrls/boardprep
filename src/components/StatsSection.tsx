import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

type HomeStat = {
  id?: string;
  label: string;
  value: number;
  suffix: string;
  order?: number;
};

const defaultStats: HomeStat[] = [
  {
    value: 20000,
    suffix: "+",
    label: "Questions from various industries",
    order: 0,
  },
  {
    value: 7000,
    suffix: "+",
    label: "Subscribers",
    order: 1,
  },
  {
    value: 100,
    suffix: "+",
    label: "Board topnotcher and industry expert question contributors",
    order: 2,
  },
];

const StatsSection = () => {
  const [stats, setStats] = useState<HomeStat[]>(defaultStats);

  useEffect(() => {
    let isMounted = true;
    const fetchStats = async () => {
      try {
        const response = await apiGet<{ items?: HomeStat[] }>("/public/home-stats");
        if (!isMounted || !Array.isArray(response.items) || response.items.length === 0) {
          return;
        }
        const normalized = response.items
          .filter((item) => typeof item.label === "string" && typeof item.value === "number" && typeof item.suffix === "string")
          .filter((item) => !/passing rate/i.test(item.label))
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        if (normalized.length > 0) {
          setStats(normalized);
        }
      } catch {
        // Keep default stats when API is not available.
      }
    };

    const runWhenIdle = () => void fetchStats();
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(runWhenIdle, { timeout: 4_000 });
    } else {
      timeoutId = window.setTimeout(runWhenIdle, 2_000);
    }

    return () => {
      isMounted = false;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home-stats" className="py-12 bg-secondary border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 text-accent sm:grid-cols-3 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`animate-fade-up delay-${(index + 1) * 100}`}
            >
              <p className="font-display text-4xl lg:text-5xl font-bold mb-2">
                <span className="inline-flex items-center">
                  {Intl.NumberFormat("en-PH").format(stat.value)}
                  {stat.suffix}
                </span>
              </p>
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
