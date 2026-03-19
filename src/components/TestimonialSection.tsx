"use client";
import React, { useRef } from "react";
import Blocks from "@/components/ui/blocks";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";

type TestimonialItem = {
  id: string;
  name: string;
  role?: string | null;
  content: string;
  imageUrl?: string | null;
};

type TestimonialsResponse = { items: TestimonialItem[] };

const initialsFromName = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("") || "BP";

const colorFor = (s: string) => {
  const colors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-purple-100 text-purple-600",
    "bg-orange-100 text-orange-600",
    "bg-red-100 text-red-600",
    "bg-teal-100 text-teal-600",
    "bg-indigo-100 text-indigo-600",
    "bg-yellow-100 text-yellow-700",
    "bg-pink-100 text-pink-600",
    "bg-slate-100 text-slate-700",
  ];
  let hash = 0;
  for (let i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  return colors[hash % colors.length];
};

const TESTIMONIALS_PER_ROW = 5;

const chunkTestimonials = <T,>(items: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }
  return chunks;
};

const uniqueBy = <T,>(items: T[], key: (item: T) => string): T[] => {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const item of items) {
    const k = key(item);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(item);
  }
  return out;
};

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useQuery({
    queryKey: ["public-testimonials"],
    queryFn: () => apiGet<TestimonialsResponse>("/public/testimonials"),
    staleTime: 60_000,
  });

  const testimonials = (data?.items ?? []).map((t) => ({
    name: t.name,
    role: t.role ?? "",
    quote: t.content,
    initials: initialsFromName(t.name),
    color: colorFor(t.id || t.name),
  }));

  const uniqueTestimonials = uniqueBy(testimonials, (t) => `${t.name}:${t.quote}`);
  const shouldLoop = uniqueTestimonials.length >= TESTIMONIALS_PER_ROW * 2;

  const testimonialPages = shouldLoop
    ? chunkTestimonials(uniqueTestimonials, TESTIMONIALS_PER_ROW).filter(
        (p) => p.length === TESTIMONIALS_PER_ROW,
      )
    : [];

  const hasPages = testimonialPages.length > 0;
  const duplicatedPages = hasPages
    ? [...testimonialPages, ...testimonialPages, ...testimonialPages]
    : [];
  const reversePages = hasPages
    ? [...testimonialPages.slice(1), testimonialPages[0]]
    : [];
  const duplicatedReversePages = hasPages
    ? [...reversePages, ...reversePages, ...reversePages]
    : [];

  return (
    <section
      className="py-20 bg-background overflow-hidden border-t border-border/50 dark:bg-black bg-white before:absolute before:w-full before:h-full before:bg-linear-to-t  dark:before:from-[#070707] before:from-[#dbdbdb] before:z-1 w-full relative"
      ref={containerRef}
    >
      <Blocks
        activeDivsClass="dark:bg-[#131212]  bg-[#9ba1a131]  "
        divClass="dark:border-[#131212] border-[#9ba1a131] "
        classname="w-full opacity-25"
        containerRef={containerRef}
        activeDivs={{
          0: new Set([2, 4, 6]),
          1: new Set([0, 8]),
          2: new Set([1, 3, 5]),
          4: new Set([0, 5, 8]),
          5: new Set([2, 4]),
          7: new Set([2, 6, 9]),
          8: new Set([0, 4]),
          9: new Set([5]),
          10: new Set([3, 6]),
          11: new Set([1, 5]),
          12: new Set([7]),
          13: new Set([2, 4]),
          14: new Set([5]),
          15: new Set([1, 6]),
        }}
      />
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="font-display text-3xl md:text-3xl font-bold text-foreground">
          Trusted by Topnotchers & Professionals
        </h2>
      </div>

      {!shouldLoop ? (
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueTestimonials.map((testimonial) => (
              <div
                key={`${testimonial.name}:${testimonial.quote}`}
                className="p-6 rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm leading-relaxed font-sans">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
            {uniqueTestimonials.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground">
                No testimonials yet.
              </div>
            )}
          </div>
        </div>
      ) : (
      <div className="space-y-8">
        {/* First Row - Scrolling Left (Normal) */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-6 animate-marquee w-max pr-6">
            {duplicatedPages.map((page, pageIndex) => (
              <div
                key={`row1-page-${pageIndex}`}
                className="grid grid-cols-5 gap-6 flex-shrink-0 w-[1796px]"
              >
                {page.map((testimonial, cardIndex) => (
                  <div
                    key={`row1-card-${pageIndex}-${cardIndex}-${testimonial.name}`}
                    className="p-6 rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic text-sm leading-relaxed font-sans">
                      "{testimonial.quote}"
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        {/* Second Row - Scrolling Right (Reverse) */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-6 animate-marquee-reverse w-max pr-6">
            {duplicatedReversePages.map((page, pageIndex) => (
              <div
                key={`row2-page-${pageIndex}`}
                className="grid grid-cols-5 gap-6 flex-shrink-0 w-[1796px]"
              >
                {page.map((testimonial, cardIndex) => (
                  <div
                    key={`row2-card-${pageIndex}-${cardIndex}-${testimonial.name}`}
                    className="p-6 rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic text-sm leading-relaxed font-sans">
                      "{testimonial.quote}"
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
      )}
    </section>
  );
};

export default TestimonialSection;
