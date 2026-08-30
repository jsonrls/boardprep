import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ExternalLink, Quote } from "lucide-react";
import type { ReviewProgramGuide as ReviewProgramGuideContent } from "@/content/reviewGuides";

type ReviewProgramGuideProps = {
  content: ReviewProgramGuideContent;
};

const professionLinks: Record<
  string,
  {
    drillAnchor: string;
    peers: Array<{ to: string; label: string; description: string }>;
  }
> = {
  "Veterinary Medicine": {
    drillAnchor: "Practice Veterinary Medicine board exam questions",
    peers: [
      {
        to: "/review/fisheries",
        label: "Explore the Fisheries licensure review",
        description: "Compare another life-science pathway covering aquatic resources, production, and food quality.",
      },
      {
        to: "/review/agriculture",
        label: "Review the Agriculture board exam program",
        description: "See how BoardPrep approaches animal science, crops, soils, economics, and extension.",
      },
    ],
  },
  Fisheries: {
    drillAnchor: "Try Fisheries licensure exam question drills",
    peers: [
      {
        to: "/review/agriculture",
        label: "Compare the online Agriculture review",
        description: "Explore a related food-systems profession with six connected examination areas.",
      },
      {
        to: "/review/vet",
        label: "See the Veterinary Medicine review plan",
        description: "Review a clinical and production-focused licensure preparation pathway.",
      },
    ],
  },
  Agriculture: {
    drillAnchor: "Practice Agriculturists Licensure Exam questions",
    peers: [
      {
        to: "/review/abe",
        label: "Compare the ABELE engineering review",
        description: "Move from agricultural science into machinery, water, structures, energy, and bioprocess systems.",
      },
      {
        to: "/review/fisheries",
        label: "Explore the Fisheries review class",
        description: "Compare aquaculture, capture fisheries, aquatic ecology, and post-harvest coverage.",
      },
    ],
  },
  "Food Technology": {
    drillAnchor: "Practice FTLE questions and processing problems",
    peers: [
      {
        to: "/review/agriculture",
        label: "Explore the Agriculture licensure review",
        description: "Connect food manufacturing knowledge with production, soils, animals, markets, and extension.",
      },
      {
        to: "/review/abe",
        label: "Compare the Agricultural and Biosystems Engineering review",
        description: "See the engineering pathway behind processing, energy, structures, machinery, and water systems.",
      },
    ],
  },
  "Agricultural and Biosystems Engineering": {
    drillAnchor: "Work through ABELE calculations and question drills",
    peers: [
      {
        to: "/review/agriculture",
        label: "Compare the Agriculturists board exam review",
        description: "Explore the science, production, economics, and extension side of Philippine agriculture.",
      },
      {
        to: "/review/ftle",
        label: "Review the Food Technology licensure program",
        description: "Connect bioprocess engineering with food safety, processing, quality, and manufacturing practice.",
      },
    ],
  },
};

const professionLawSources: Record<string, { href: string; label: string }> = {
  "Veterinary Medicine": {
    href: "https://lawphil.net/statutes/repacts/ra2004/ra_9268_2004.html",
    label: "Philippine Veterinary Medicine Act of 2004",
  },
  Fisheries: {
    href: "https://lawphil.net/statutes/repacts/ra2019/ra_11398_2019.html",
    label: "Philippine Fisheries Profession Act",
  },
  Agriculture: {
    href: "https://lawphil.net/statutes/repacts/ra2025/ra_12215_2025.html",
    label: "Philippine Agriculturists Act",
  },
  "Food Technology": {
    href: "https://lawphil.net/statutes/repacts/ra2018/ra_11052_2018.html",
    label: "Philippine Food Technology Act",
  },
  "Agricultural and Biosystems Engineering": {
    href: "https://lawphil.net/statutes/repacts/ra2016/ra_10915_2016.html",
    label: "Philippine Agricultural and Biosystems Engineering Act",
  },
};

const formatPhp = (price: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(price);

const ReviewProgramGuide = ({ content }: ReviewProgramGuideProps) => (
  <section id="complete-review-guide" className="content-auto border-y border-border/60 bg-background py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <article className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Complete program guide
          </p>
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            {content.introTitle}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <nav aria-label={`${content.profession} review guide sections`} className="mt-10 rounded-2xl border border-border bg-muted/30 p-5">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.16em] text-foreground">
            On this page
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {content.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="text-secondary hover:underline">
                {section.label}
              </a>
            ))}
            <a href="#student-success" className="text-secondary hover:underline">Student success</a>
            <a href="#enrollment-and-pricing" className="text-secondary hover:underline">Enrollment and pricing</a>
            <a href="#program-faqs" className="text-secondary hover:underline">FAQs</a>
          </div>
        </nav>

        <aside aria-labelledby="related-review-resources" className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Related BoardPrep resources
          </p>
          <h2 id="related-review-resources" className="mt-3 font-display text-2xl text-foreground">
            Continue building your {content.profession} study plan
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <Link to="/question-drills" className="font-display text-lg text-secondary hover:underline">
                {professionLinks[content.profession]?.drillAnchor ?? "Practice with BoardPrep Question Drills"}
              </Link>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Learn how focused sets, rationales, analytics, and mock-board practice support active recall.
              </p>
            </div>
            <div>
              <Link to="/review-class" className="font-display text-lg text-secondary hover:underline">
                Compare every online board exam review class
              </Link>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Review all five professions, current listed prices, study formats, and enrollment guidance.
              </p>
            </div>
            <div>
              <Link to="/our-products" className="font-display text-lg text-secondary hover:underline">
                Explore BoardPrep apps and study tools
              </Link>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Compare the drills platform, mobile apps, classroom tools, and guided review programs.
              </p>
            </div>
            {professionLinks[content.profession]?.peers.map((peer) => (
              <div key={peer.to}>
                <Link to={peer.to} className="font-display text-lg text-secondary hover:underline">
                  {peer.label}
                </Link>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{peer.description}</p>
              </div>
            ))}
            <div>
              <Link to={content.enrollmentPath} className="font-display text-lg text-secondary hover:underline">
                Start the {content.profession} enrollment form
              </Link>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Confirm the active cohort, current access period, inclusions, and payment instructions before submitting.
              </p>
            </div>
          </div>
        </aside>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {content.sections.map((section) => (
            <section id={section.id} key={section.id} className="scroll-mt-28 rounded-2xl border border-border bg-card p-7 shadow-soft md:p-9">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                {section.label}
              </p>
              <h2 className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 leading-7 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section id="student-success" className="scroll-mt-28 mt-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Student success stories
          </p>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            {content.storiesTitle}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
            {content.storiesIntro}
          </p>
          <div className={`mt-8 grid gap-6 ${content.stories.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
            {content.stories.map((story) => (
              <figure key={story.name} className="rounded-2xl bg-secondary p-7 text-secondary-foreground md:p-9">
                <Quote aria-hidden="true" className="mb-5 h-8 w-8 text-primary" />
                <blockquote className="text-lg leading-8">“{story.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-secondary-foreground/15 pt-5">
                  <strong className="block font-display text-lg">{story.name}</strong>
                  <span className="mt-1 block text-sm text-secondary-foreground/70">{story.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="enrollment-and-pricing" className="scroll-mt-28 mt-20 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Enrollment process
            </p>
            <h2 className="font-display text-3xl text-foreground">{content.enrollmentTitle}</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{content.enrollmentIntro}</p>
            <ol className="mt-8 space-y-5">
              {content.enrollmentSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-sm text-secondary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to={content.enrollmentPath} className="mt-8 inline-flex items-center gap-2 font-medium text-secondary hover:underline">
              Open the enrollment form <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <aside className="rounded-2xl bg-secondary p-7 text-secondary-foreground md:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Transparent pricing</p>
            <p className="mt-4 font-display text-4xl text-white">{formatPhp(content.price)}</p>
            <p className="mt-5 leading-7 text-secondary-foreground/75">{content.pricingCopy}</p>
            <h3 className="mt-8 font-display text-xl">Program inclusions</h3>
            <ul className="mt-4 space-y-3">
              {content.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-secondary-foreground/80">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section id="program-faqs" className="scroll-mt-28 mt-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">FAQs</p>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Questions about the {content.profession} review program
          </h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-8">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-foreground">
                  {faq.question}
                  <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-4xl pt-4 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Examination information was checked against the{" "}
            <a
              href={content.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-secondary hover:underline"
            >
              {content.officialSourceLabel} <ExternalLink className="h-3.5 w-3.5" />
            </a>
            {professionLawSources[content.profession] && (
              <>
                {" "}and the{" "}
                <a
                  href={professionLawSources[content.profession].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {professionLawSources[content.profession].label}
                </a>
              </>
            )}
            . Candidates should also verify the{" "}
            <a
              href="https://www.prc.gov.ph/2026-schedule-examination"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              official 2026 PRC examination schedule
            </a>{" "}
            and{" "}
            <a
              href="https://www.prc.gov.ph/list-of-requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              current PRC documentary requirements
            </a>{" "}
            before filing.
          </p>
        </section>
      </article>
    </div>
  </section>
);

export default ReviewProgramGuide;
