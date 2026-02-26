"use client";
import React, { useRef } from "react";
import Blocks from "@/components/ui/blocks";

const testimonials = [
  {
    name: "Marvin Bryan Salinas",
    role: "Licensed Veterinarian / Associate Professor, Central Luzon State University",
    quote:
      "BoardPrep Classroom's progress monitoring feature helps me closely track each student's learning milestones and provide timely reminders, feedback, or interventions whenever needed.",
    initials: "MS",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Justine Mantele",
    role: "Food Technologist, Bicol University",
    quote:
      "You added so much confidence in how I answered questions and guided me throughout this challenging journey.",
    initials: "JM",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Marian Caling",
    role: "Food Technologist, University of the Philippines Visayas",
    quote:
      "The platform not only catered to this need but also offered an affordable and reliable option for board takers.",
    initials: "MC",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Ryan Quinto",
    role: "Registered Psychologist, St. Paul University Philippines",
    quote:
      "BoardPrep review materials are top-notch and truly on par with other review centers. I especially appreciate the flexibility they offer, allowing me to study at my own pace.",
    initials: "RQ",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Brian Calpito",
    role: "Registered Agriculturist, University of Southern Mindanao",
    quote:
      "BoardPrep questions were all comprehensive. I was able to rationalize many questions from the app and apply them during the actual board exam. I’m truly grateful.",
    initials: "BC",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Dominic Millo",
    role: "Registered Agriculturist, Central Luzon State University",
    quote: "I truly used it as my refresher, and it was a huge help to me.",
    initials: "DM",
    color: "bg-teal-100 text-teal-600",
  },
  {
    name: "Kenneth James Torres II",
    role: "Licensed Veterinarian, Isabela State University",
    quote: "If you want to ace the board exam, choose My Board Prep!",
    initials: "KT",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Job Corcuera",
    role: "Licensed Veterinarian, University of the Philippines Los Baños",
    quote: "Great client support. The support team is very fast and helpful.",
    initials: "JC",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Ivanne Jairoh Melendez",
    role: "Licensed Veterinarian, Central Mindanao University",
    quote:
      "BoardPrep is the only review center I enrolled in. It helped me develop critical thinking skills and strategies for eliminating choices. The topnotchers who taught us, along with their question rationalizations, helped me narrow down which concepts to focus on.",
    initials: "IM",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Mhegly Burato",
    role: "Licensed Fisheries Professional, Bohol Island State University",
    quote:
      "Very helpful with well-equipped questionnaires! I highly recommend this platform.",
    initials: "MB",
    color: "bg-slate-100 text-slate-700",
  },
];

const TESTIMONIALS_PER_ROW = 5;

const chunkTestimonials = <T,>(items: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }
  return chunks;
};

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialPages = chunkTestimonials(testimonials, TESTIMONIALS_PER_ROW);
  const duplicatedPages = [...testimonialPages, ...testimonialPages, ...testimonialPages];
  const reversePages = [...testimonialPages.slice(1), testimonialPages[0]];
  const duplicatedReversePages = [...reversePages, ...reversePages, ...reversePages];

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
    </section>
  );
};

export default TestimonialSection;
