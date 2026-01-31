"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import logoShort from "@/assets/logo-full.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About BoardPrep
            </p>
            <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Your All-In-One Platform for{" "}
              <em className="not-italic text-accent">Mastering Board Exams</em>
            </h2>
            <div className="space-y-6">
              <p className="animate-fade-up delay-200 text-muted-foreground leading-relaxed text-lg">
                BoardPrep redefines licensure preparation by combining{" "}
                <strong>gamified drills for students</strong> with{" "}
                <strong>powerful analytics for universities</strong>. We bridge
                the gap between hard work and smart study.
              </p>
              <p className="animate-fade-up delay-300 text-muted-foreground leading-relaxed text-lg">
                Study smarter, train harder, and predict your success with every
                click. Whether you're a student aiming for the top spot or an
                institution tracking performance, BoardPrep is your ultimate
                partner.
              </p>
            </div>

            {/* Key Points */}
            <div className="animate-fade-up delay-400 grid sm:grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-primary pl-6">
                <h4 className="font-display text-xl text-foreground mb-2">
                  Gamified Learning
                </h4>
                <p className="text-muted-foreground text-sm">
                  Engaging question banks and drills designed to keep students
                  motivated and retention high.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h4 className="font-display text-xl text-foreground mb-2">
                  Predictive Analytics
                </h4>
                <p className="text-muted-foreground text-sm">
                  Data-driven insights that help universities identify strengths
                  and weaknesses to improve board passing rates.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Logo/Visual */}
          <div className="animate-fade-up delay-300 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150" />
              <img
                src={logoShort}
                alt="BoardPrep Logo"
                className="relative w-64 md:w-80 lg:w-96 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
