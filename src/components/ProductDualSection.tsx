"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import phone from "@/assets/phone.png";
import laptop from "@/assets/laptop.png";
import img70 from "@/assets/70.png";
import img71 from "@/assets/71.png";
import img75 from "@/assets/75.png";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Rocket,
  Gamepad2,
  Gift,
  BookOpen,
  Sparkles,
  Search,
  BarChart3,
  School,
  Bot,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Trophy,
  Smartphone,
  Cloud,
  Star,
  Wallet,
  Users,
  Settings,
  WifiOff,
} from "lucide-react";
import Blocks from "@/components/ui/blocks";

export interface BoxesProps {
  className?: string;
  rows?: number;
  cols?: number;
}

const cards = [
  {
    title: "Mobile App for Everyone!",
    description: (
      <ul className="text-left space-y-4 font-sans">
        <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
          <Rocket className="w-6 h-6 text-indigo-600" /> Offline? No Problem!
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
          <Gamepad2 className="w-6 h-6 text-indigo-600" /> Level Up with
          Gamified Drills
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
          <Gift className="w-6 h-6 text-indigo-600" /> Win Badges as You Learn
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
          <BookOpen className="w-6 h-6 text-indigo-600" /> Updated Questions
          Every Exam
        </li>
      </ul>
    ),
    customVisual: (
      <div className="relative w-full h-full flex items-center justify-center pb-4">
        {/* Left phone */}
        <div className="absolute left-2 w-[40%] z-10 transform -translate-x-2 translate-y-2 opacity-90 transition-transform duration-500">
          <img
            src={img70}
            alt="App Screen 1"
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
        {/* Right phone */}
        <div className="absolute right-2 w-[40%] z-10 transform translate-x-2 translate-y-2 opacity-90 transition-transform duration-500">
          <img
            src={img75}
            alt="App Screen 3"
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
        {/* Center phone */}
        <div className="relative z-20 w-[45%] mb-4 transform transition-transform duration-500">
          <img
            src={img71}
            alt="Main Screen"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    ),
    image: phone,
    imageAlt: "Mobile App Interface",
    color: "bg-product-lavender", // Soft Lavender
    textColor: "text-slate-900",
    imageClass: "w-[60%]",
    link: "https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US",
  },
  {
    title: "Online Classrooms for Universities and Review Centers",
    description: (
      <ul className="text-left space-y-4 font-sans">
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <Users className="w-6 h-6 text-pink-600" /> Teacher and student
          friendly
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <TrendingUp className="w-6 h-6 text-pink-600" /> Tracks student
          performance
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <BarChart3 className="w-6 h-6 text-pink-600" /> With analytics for a
          decision support system
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <Cloud className="w-6 h-6 text-pink-600" /> Supports synchronous and
          asynchronous learning
        </li>
      </ul>
    ),
    image: laptop,
    imageAlt: "LMS Dashboard Interface",
    color: "bg-product-pink", // Pink
    textColor: "text-slate-900",
    imageClass: "w-[90%]",
    link: "https://lms2.myboardprep.com/",
  },
  {
    title: "Online Review Class",
    description: (
      <ul className="text-left space-y-4 font-sans">
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <BookOpen className="w-6 h-6 text-sky-600" /> Comprehensive Review
          Materials
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <Users className="w-6 h-6 text-sky-600" /> Expert Instructors
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <Trophy className="w-6 h-6 text-sky-600" /> Proven Track Record
        </li>
      </ul>
    ),
    image: laptop,
    imageAlt: "Review Class Interface",
    color: "bg-product-teal", // Teal
    textColor: "text-slate-900",
    imageClass: "w-[90%]",
    link: "#",
  },
  {
    title: "BoardPrep Lite (Coming Soon)",
    description: (
      <ul className="text-left space-y-4 font-sans">
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <Settings className="w-6 h-6 text-orange-600" /> Customizable plan
          options
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <Zap className="w-6 h-6 text-orange-600" /> Instant result
        </li>
        <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
          <WifiOff className="w-6 h-6 text-orange-600" /> Works offline
        </li>
      </ul>
    ),
    image: phone,
    imageAlt: "Lite Version Interface",
    color: "bg-product-yellow", // Yellow/Mustard
    textColor: "text-slate-900",
    imageClass: "w-[60%]",
    link: "#",
  },
];

const Card = ({
  i,
  title,
  description,
  image,
  imageAlt,
  color,
  textColor,
  progress,
  range,
  targetScale,
  imageClass,
  link,
  customVisual,
}: {
  i: number;
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  color: string;
  textColor: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  imageClass?: string;
  link?: string;
  customVisual?: React.ReactNode;
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[calc(100vh-6rem)] flex items-start justify-center sticky top-24"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 45}px)`,
        }}
        className={`relative min-h-[550px] h-auto w-full max-w-6xl rounded-md px-12 pt-12 pb-0 origin-top shadow-xl overflow-hidden ${color} flex flex-col justify-center`}
      >
        <div className="grid md:grid-cols-2 gap-12 h-full">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3
                className={`text-3xl md:text-5xl font-display font-bold leading-tight ${textColor}`}
              >
                {title}
              </h3>
              <div className="h-1.5 w-24 bg-white/50 rounded-full" />
            </div>

            <div className="py-4">{description}</div>

            <div className="pt-2">
              {link && (
                <Button
                  variant="link"
                  className={`p-0 h-auto text-lg font-semibold gap-2 ${textColor} hover:opacity-80 transition-opacity group`}
                  asChild
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Learn More{" "}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-full flex items-end justify-center">
            {customVisual ? (
              customVisual
            ) : (
              <div
                className={`relative ${imageClass} transform transition-transform duration-500 hover:scale-[1.02]`}
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProductDualSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="py-24 border-t border-border/50 dark:bg-black bg-white before:absolute before:w-full before:h-full before:bg-linear-to-t  dark:before:from-[#070707] before:from-[#dbdbdb] before:z-1 w-full relative"
      ref={containerRef}
      id="product-dual"
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
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Everything you need to ace your board exams, in one place.
          </p>
        </div>

        {cards.map((card, i) => {
          const step = 1 / cards.length;
          const targetScale = 1 - (cards.length - 1 - i) * 0.05;
          const rangeStart = step * i;

          return (
            <Card
              key={i}
              i={i}
              {...card}
              progress={scrollYProgress}
              range={[rangeStart, 1]}
              targetScale={targetScale}
              customVisual={(card as any).customVisual}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductDualSection;
