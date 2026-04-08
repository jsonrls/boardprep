import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  GraduationCap,
  Rocket,
  Smartphone,
  Sparkles,
  Monitor,
} from "lucide-react";
import { useMemo, useState, type ComponentType } from "react";
import { Link } from "react-router-dom";

type ProductCategory = "All" | "Apps" | "Platform" | "Programs";

type ProductLink =
  | { kind: "internal"; to: string }
  | { kind: "external"; href: string };

type Product = {
  title: string;
  description: string;
  category: Exclude<ProductCategory, "All">;
  Icon: ComponentType<{ className?: string }>;
  link: ProductLink;
  cta: string;
  badges?: string[];
  storeLinks?: Array<{
    platform: "play" | "appstore";
    label: string;
    href: string;
    comingSoon?: boolean;
  }>;
};

const StoreIcon = ({ platform }: { platform: "play" | "appstore" }) => {
  if (platform === "play") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="currentColor"
      >
        <path d="M3.8 2.2a1 1 0 0 0-.3.8v18c0 .5.3.8.7.9l10.3-10L3.8 2.2Z" />
        <path d="M16.2 10.6 6 4.6l7.8 7.3 2.4-1.3Z" />
        <path d="m16.2 13.4-2.4-1.3L6 19.4l10.2-6Z" />
        <path d="m20.3 11-2.6-1.5-2.3 1.4 2.3 1.3 2.6-1.2a.8.8 0 0 0 0-1Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
    >
      <path d="M15.6 3.1c-.9.1-2 .7-2.6 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.6-1.2.7-.8 1.1-1.8.9-3Z" />
      <path d="M19.9 15.8c-.5 1.2-.8 1.7-1.4 2.7-.9 1.4-2.1 3.1-3.6 3.1-1.3 0-1.7-.8-3.5-.8-1.8 0-2.2.8-3.5.8-1.5 0-2.6-1.5-3.5-2.9-2.5-3.8-2.8-8.2-1.2-10.6 1.1-1.6 2.8-2.6 4.4-2.6 1.7 0 2.7.9 4.1.9 1.3 0 2.2-.9 4.1-.9 1.4 0 2.9.8 4 2.1-3.5 1.9-3 6.8.1 8.2Z" />
    </svg>
  );
};

const Products = () => {
  const products = useMemo<Product[]>(
    () => [
      {
        title: "BoardPrep Drills",
        description:
          "Question drills built for board exam readiness—practice anywhere, track progress, and stay consistent.",
        category: "Platform",
        Icon: BookOpen,
        link: { kind: "external", href: "https://www.myboardprep.com" },
        cta: "Open Drills",
        badges: ["Web"],
      },
      {
        title: "BoardPrep Mobile App",
        description:
          "Gamified drills on Android so you can practice on the go—great for daily streaks and quick reviews.",
        category: "Apps",
        Icon: Smartphone,
        link: {
          kind: "external",
          href: "https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US",
        },
        cta: "Get on Google Play",
        badges: ["Android", "iOS"],
        storeLinks: [
          {
            platform: "play",
            label: "Get on Google Play",
            href: "https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US",
          },
          {
            platform: "appstore",
            label: "Coming Soon",
            href: "#",
            comingSoon: true,
          },
        ],
      },
      {
        title: "BoardPrep Classroom",
        description:
          "A classroom-friendly LMS for teachers and students with analytics that help guide review strategy.",
        category: "Platform",
        Icon: Monitor,
        link: { kind: "external", href: "https://lms2.myboardprep.com/" },
        cta: "Open Classroom",
        badges: ["Web"],
      },
      {
        title: "Online Review Class",
        description:
          "Structured review with expert instructors and TOS-based mock exams—built for exam-day confidence.",
        category: "Programs",
        Icon: GraduationCap,
        link: { kind: "internal", to: "/review-class" },
        cta: "View Program",
        badges: ["Program"],
      },
      {
        title: "BoardPrep Lite",
        description:
          "A lighter experience with customizable plans and fast results—designed to keep review simple and focused.",
        category: "Apps",
        Icon: Sparkles,
        link: {
          kind: "external",
          href: "https://apps.apple.com/ca/app/boardprep-lite/id6756837074",
        },
        cta: "Get on the App Store",
        badges: ["Android", "iOS"],
        storeLinks: [
          {
            platform: "play",
            label: "Get on Google Play",
            href: "https://play.google.com/store/apps/details?id=com.boardprepsolutionsincorporated.boardpreprlite",
          },
          {
            platform: "appstore",
            label: "Get on the App Store",
            href: "https://apps.apple.com/ca/app/boardprep-lite/id6756837074",
          },
        ],
      },
      {
        title: "Next Steps Program",
        description:
          "Career-forward programs to help you progress beyond exams—skills, direction, and momentum.",
        category: "Programs",
        Icon: Rocket,
        link: { kind: "external", href: "https://nextstepsph.com/" },
        cta: "Explore Next Steps",
        badges: ["Program"],
      },
    ],
    [],
  );

  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Products"
        description="Explore all BoardPrep products: question drills, Classroom LMS, online review classes, and BoardPrep Lite."
        url="https://www.myboardprep.org/products"
      />
      <Header />
      <main className="flex-1 pt-24">
        <section className="relative pt-12 pb-8 lg:pt-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-sans text-muted-foreground">
                <span className="sr-only">Breadcrumb:</span>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>{" "}
                <span aria-hidden="true">/</span>{" "}
                <span className="text-foreground">Products</span>
              </p>

              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold tracking-tight">
                Choose the{" "}
                <span className="text-gradient">right product</span> for your review
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
                Drills, classroom tools, and guided programs designed to help you prepare with
                structure—and practice with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {(["All", "Apps", "Platform", "Programs"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActiveCategory(c)}
                    className={cn(
                      "h-11 px-4 rounded-full border text-sm font-medium font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      activeCategory === c
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-card text-foreground border-border hover:bg-muted",
                    )}
                    aria-pressed={activeCategory === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((p) => {
                const CardInner = (
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl border border-border bg-background/60 flex items-center justify-center shrink-0">
                        <p.Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-display text-xl font-semibold text-foreground">
                          {p.title}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">
                          {p.description}
                        </p>
                        {p.badges?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.badges.map((b) => (
                              <span
                                key={b}
                                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground font-sans"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      {p.storeLinks?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {p.storeLinks.map((storeLink) => (
                            storeLink.comingSoon ? (
                              <Button
                                key={storeLink.label}
                                variant="secondary"
                                className="h-11 flex-1 min-w-[170px] opacity-70 cursor-not-allowed rounded-full"
                                disabled
                                aria-label={`${storeLink.label}: ${p.title}`}
                              >
                                <StoreIcon platform={storeLink.platform} />
                                {storeLink.label}
                              </Button>
                            ) : (
                              <Button
                                key={storeLink.label}
                                variant="secondary"
                                asChild
                                className="h-11 flex-1 min-w-[170px] rounded-full rounded-full"
                              >
                                <a
                                  href={storeLink.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${storeLink.label}: ${p.title} (opens in a new tab)`}
                                >
                                  <StoreIcon platform={storeLink.platform} />
                                  {storeLink.label}
                                </a>
                              </Button>
                            )
                          ))}
                        </div>
                      ) : p.link.kind === "internal" ? (
                        <Button variant="secondary" asChild className="h-11 rounded-full">
                          <Link to={p.link.to} aria-label={`${p.cta}: ${p.title}`}>
                            {p.cta}
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="secondary" asChild className="h-11 rounded-full">
                          <a
                            href={p.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.cta}: ${p.title} (opens in a new tab)`}
                          >
                            {p.cta}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                );

                // Make the entire card clickable only when it won't create nested interactive controls.
                // We keep interaction predictable by using the primary CTA as the main action.
                return <div key={p.title}>{CardInner}</div>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

