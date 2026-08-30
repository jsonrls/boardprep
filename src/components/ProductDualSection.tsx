"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import img2 from "@/assets/2-800.avif";
import img2Small from "@/assets/2-480.avif";
import img3 from "@/assets/3-800.avif";
import img3Small from "@/assets/3-480.avif";
import img4 from "@/assets/4-800.avif";
import img4Small from "@/assets/4-480.avif";
import lite2 from "@/assets/boardprep-lite/2-800.avif";
import lite2Small from "@/assets/boardprep-lite/2-480.avif";
import lite3 from "@/assets/boardprep-lite/3-800.avif";
import lite3Small from "@/assets/boardprep-lite/3-480.avif";
import lite4 from "@/assets/boardprep-lite/4-800.avif";
import lite4Small from "@/assets/boardprep-lite/4-480.avif";
import lms2 from "@/assets/lms/2-800.avif";
import lms2Small from "@/assets/lms/2-480.avif";
import lms3 from "@/assets/lms/3-800.avif";
import lms3Small from "@/assets/lms/3-480.avif";
// import lms5 from "@/assets/lms/5.png";
import rc2 from "@/assets/rc-9-800.avif";
import rc2Small from "@/assets/rc-9-480.avif";
import rc2Thumbnail from "@/assets/rc-9-320.avif";
import rc3 from "@/assets/rc-3-800.avif";
import rc3Small from "@/assets/rc-3-480.avif";
import lms5 from "@/assets/classroom-1-800.avif";
import lms5Small from "@/assets/classroom-1-480.avif";
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

export interface BoxesProps {
  className?: string;
  rows?: number;
  cols?: number;
}

const productImageSizes =
  "(min-width: 1280px) 520px, (min-width: 768px) 40vw, 55vw";

interface ProductCardData {
  title: string;
  description: React.ReactNode;
  color: string;
  textColor: string;
  link?: string;
  linkLabel?: string;
  customVisual: React.ReactNode;
}

const cards: ProductCardData[] = [
  {
    title: "Question Drills for Everyone!",
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
      <div className="relative w-full h-full flex items-center justify-center group overflow-visible">
        {/* Left phone */}
        <div className="absolute left-[-5%] md:left-[5%] w-[55%] md:w-[65%] z-10 transform -rotate-[15deg] -translate-x-[20%] translate-y-8 opacity-80 transition-all duration-700 ease-out group-hover:-rotate-[25deg] group-hover:-translate-x-[35%] group-hover:scale-105 group-hover:opacity-100 drop-shadow-xl">
          <div className="product-float">
            <img src={img2} srcSet={`${img2Small} 480w, ${img2} 800w`} sizes={productImageSizes} alt="BoardPrep mobile app Learning Board welcome screen" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Right phone */}
        <div className="absolute right-[-5%] md:right-[5%] w-[55%] md:w-[65%] z-10 transform rotate-[15deg] translate-x-[20%] translate-y-8 opacity-80 transition-all duration-700 ease-out group-hover:rotate-[25deg] group-hover:translate-x-[35%] group-hover:scale-105 group-hover:opacity-100 drop-shadow-xl">
          <div className="product-float product-float-delay-1">
            <img src={img3} srcSet={`${img3Small} 480w, ${img3} 800w`} sizes={productImageSizes} alt="BoardPrep mobile app learning-performance analytics dashboard" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Center phone (now tilted) */}
        <div className="relative w-[65%] md:w-[75%] z-20 transform -rotate-[5deg] translate-y-[-10px] transition-all duration-700 ease-out group-hover:rotate-[0deg] group-hover:-translate-y-4 group-hover:scale-110 drop-shadow-2xl">
          <div className="product-float product-float-delay-2">
            <img src={img4} srcSet={`${img4Small} 480w, ${img4} 800w`} sizes={productImageSizes} alt="BoardPrep mobile app Top Performers leaderboard" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    ),
    color: "bg-product-lavender", // Soft Lavender
    textColor: "text-slate-900",
    link: "https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US",
    linkLabel: "Download BoardPrep Mobile App",
  },
  {
    title: "BoardPrep® Classroom",
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
    color: "bg-product-pink", // Pink
    textColor: "text-slate-900",
    customVisual: (
      <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center group overflow-visible">
        {/* Back Left Image */}
        <div className="absolute left-[-15%] md:left-[-5%] w-[60%] md:w-[65%] z-10 transform -rotate-6 -translate-y-4 opacity-80 transition-all duration-700 ease-out group-hover:-rotate-12 group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:opacity-100">
          <div className="product-float w-full h-full flex items-center justify-center filter drop-shadow-xl">
            <img src={lms2} srcSet={`${lms2Small} 480w, ${lms2} 800w`} sizes={productImageSizes} alt="BoardPrep Classroom teacher dashboard with veterinary and fisheries courses" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Back Right Image */}
        <div className="absolute right-[-15%] md:right-[-5%] w-[60%] md:w-[65%] z-10 transform rotate-6 -translate-y-4 opacity-80 transition-all duration-700 ease-out group-hover:rotate-12 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-100">
          <div className="product-float product-float-delay-1 w-full h-full flex items-center justify-center filter drop-shadow-xl">
            <img src={lms3} srcSet={`${lms3Small} 480w, ${lms3} 800w`} sizes={productImageSizes} alt="BoardPrep Classroom veterinary medicine course modules" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Center Main Image */}
        <div className="absolute w-[80%] md:w-[85%] z-20 transform -translate-y-2 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4">
          <div className="product-float product-float-delay-2 w-full h-full flex items-center justify-center filter drop-shadow-2xl">
            <img src={lms5} srcSet={`${lms5Small} 480w, ${lms5} 800w`} sizes={productImageSizes} alt="BoardPrep Classroom student veterinary physiology lesson" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    ),
    link: "https://lms2.myboardprep.com/",
    linkLabel: "Open BoardPrep Classroom",
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
          <Trophy className="w-6 h-6 text-sky-600" /> TOS-based Mock Exams
        </li>
      </ul>
    ),
    color: "bg-product-teal", // Teal
    textColor: "text-slate-900",
    customVisual: (
      <div className="w-full h-[400px] md:h-[520px] flex items-center justify-center overflow-visible">
        <div className="flex w-full h-full items-center justify-center px-2 md:px-4">
          <div className="basis-[76%] md:basis-[100%] shrink-0">
            <div className="product-float w-full h-full flex items-center justify-center drop-shadow-2xl">
              <img
                src={rc3}
                srcSet={`${rc3Small} 480w, ${rc3} 800w`}
                sizes={productImageSizes}
                alt="BoardPrep students attending a live online review class"
                className="w-full h-auto object-contain rounded-lg"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="basis-[34%] md:basis-[50%] shrink-0 -ml-6 md:-ml-12">
            <div className="product-float product-float-delay-1 w-full h-full flex items-center justify-center drop-shadow-xl">
              <img
                src={rc2}
                srcSet={`${rc2Thumbnail} 320w, ${rc2Small} 480w, ${rc2} 800w`}
                sizes="(min-width: 1280px) 260px, (min-width: 768px) 20vw, 28vw"
                alt="BoardPrep veterinary pathology review notes on a tablet"
                className="w-full h-auto object-contain rounded-lg"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    ),
    link: "/review-class",
    linkLabel: "View Review Class Programs",
  },
  {
    title: "BoardPrep® Lite",
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
    color: "bg-product-green", // Green
    textColor: "text-slate-900",
    customVisual: (
      <div className="relative w-full h-full flex items-center justify-center group overflow-visible">
        {/* Left phone */}
        <div className="absolute left-[-5%] md:left-[5%] w-[55%] md:w-[65%] z-10 transform -rotate-[15deg] -translate-x-[20%] translate-y-8 opacity-80 transition-all duration-700 ease-out group-hover:-rotate-[25deg] group-hover:-translate-x-[35%] group-hover:scale-105 group-hover:opacity-100 drop-shadow-xl">
          <div className="product-float">
            <img src={lite3} srcSet={`${lite3Small} 480w, ${lite3} 800w`} sizes={productImageSizes} alt="BoardPrep Lite dashboard showing a Vet Med flashcard deck" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Right phone */}
        <div className="absolute right-[-5%] md:right-[5%] w-[55%] md:w-[65%] z-10 transform rotate-[15deg] translate-x-[20%] translate-y-8 opacity-80 transition-all duration-700 ease-out group-hover:rotate-[25deg] group-hover:translate-x-[35%] group-hover:scale-105 group-hover:opacity-100 drop-shadow-xl">
          <div className="product-float product-float-delay-1">
            <img src={lite2} srcSet={`${lite2Small} 480w, ${lite2} 800w`} sizes={productImageSizes} alt="BoardPrep Lite Vet Med deck with 200 review cards" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Center phone (now tilted) */}
        <div className="relative w-[65%] md:w-[75%] z-20 transform -rotate-[5deg] translate-y-[-10px] transition-all duration-700 ease-out group-hover:rotate-[0deg] group-hover:-translate-y-4 group-hover:scale-110 drop-shadow-2xl">
          <div className="product-float product-float-delay-2">
            <img src={lite4} srcSet={`${lite4Small} 480w, ${lite4} 800w`} sizes={productImageSizes} alt="BoardPrep Lite create-your-deck screen for custom flashcards" className="w-full h-auto object-contain" width={800} height={800} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    ),
    link: "https://apps.apple.com/au/app/boardprep-lite/id6756837074",
    linkLabel: "Download BoardPrep Lite",
  },
];

const Card = ({
  i,
  title,
  description,
  color,
  textColor,
  link,
  linkLabel,
  customVisual,
}: {
  i: number;
  title: string;
  description: React.ReactNode;
  color: string;
  textColor: string;
  link?: string;
  linkLabel?: string;
  customVisual: React.ReactNode;
}) => {
  return (
    <div
      className="h-[calc(100vh-6rem)] flex items-start justify-center sticky top-24"
    >
      <div
        style={{
          top: `calc(${i * 45}px)`,
        }}
        className={`relative h-[700px] lg:h-[550px] w-full max-w-6xl rounded-md px-6 pt-8 pb-8 md:px-12 lg:px-20 md:pt-12 md:pb-12 origin-top shadow-xl overflow-hidden transition-transform duration-500 ${color} flex flex-col justify-center`}
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

            <div className="pt-4 pb-0">{description}</div>

            <div className="pt-0">
              {link && (
                <Button
                  variant="link"
                  className={`p-0 h-auto text-lg font-semibold gap-2 ${textColor} hover:opacity-80 transition-opacity group`}
                  asChild
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {linkLabel ?? title}{" "}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div
            className="relative h-full flex items-center justify-center"
          >
            {customVisual}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDualSection = () => {
  return (
    <section
      className="content-auto py-24 mb-0 border-t border-border/50 dark:bg-black bg-white before:absolute before:w-full before:h-full before:bg-linear-to-t  dark:before:from-[#070707] before:from-[#dbdbdb] before:z-1 w-full relative"
      id="product-dual"
    >
      <div aria-hidden="true" className="decorative-grid absolute inset-0 opacity-25" />
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
          return (
            <Card
              key={i}
              i={i}
              {...card}
              customVisual={card.customVisual}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductDualSection;
