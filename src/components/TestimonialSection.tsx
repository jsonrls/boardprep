"use client";
import React, { useRef } from "react";
import Blocks from "@/components/ui/blocks";

const testimonials = [
  {
    name: "Dr. James Mitchell",
    role: "Veterinarian",
    quote:
      "BoardPrep was instrumental in my licensure exam success. The questions were spot-on with the actual board exam.",
    initials: "JM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Sarah Chen",
    role: "Fisheries Graduate",
    quote:
      "The analytics helped me identify my weak spots early on. I wouldn't have passed without focusing on those areas.",
    initials: "SC",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Mark Davis",
    role: "Vet Med Student",
    quote:
      "Gamified drills made studying addictive. I actually looked forward to reviewing every day!",
    initials: "MD",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Topnotcher (Rank 3)",
    quote:
      "Highly recommended for anyone serious about topping the board. The difficulty level prepares you well.",
    initials: "ER",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Alex Thompson",
    role: "University Professor",
    quote:
      "As an educator, the LMS features allow me to track student progress effectively. A game changer.",
    initials: "AT",
    color: "bg-red-100 text-red-600",
  },
];

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

      <div className="space-y-8">
        {/* First Row - Scrolling Left (Normal) */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-6 animate-marquee w-max pr-6">
            {/* Duplicate list to ensure seamless looping */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="w-[350px] md:w-[400px] flex-shrink-0 p-6 rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
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
              ),
            )}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        {/* Second Row - Scrolling Right (Reverse) */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-6 animate-marquee-reverse w-max pr-6">
            {/* Duplicate list to ensure seamless looping */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="w-[350px] md:w-[400px] flex-shrink-0 p-6 rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
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
              ),
            )}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
