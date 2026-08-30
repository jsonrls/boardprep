import { useRef, useState } from "react";
import { ArrowRight, BicepsFlexed, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const moduleImage = (filename: string) => `/modules/${encodeURIComponent(filename)}`;

const modules = [
  {
    title: "Veterinary Medicine",
    examTitle: "Veterinarians Licensure Exam",
    description:
      "Advanced animal care and medical training for aspiring veterinarians.",
    tags: ["6 Years", "Doctorate"],
    image: moduleImage("Veterinary Medicine-640.avif"),
    imageMedium: moduleImage("Veterinary Medicine-480.avif"),
    imageSmall: moduleImage("Veterinary Medicine-320.avif"),
    imageAlt: "Illustration of a veterinary medicine student examining a cat",
    highlight: false,
  },
  {
    title: "Fisheries",
    examTitle: "Fisheries Professional Licensure Exam",
    description:
      "For aspiring professionals. Focus on fundamentals and practical skills.",
    tags: ["2-4 Years", "Undergrad"],
    image: moduleImage("Fisheries-640.avif"),
    imageMedium: moduleImage("Fisheries-480.avif"),
    imageSmall: moduleImage("Fisheries-320.avif"),
    imageAlt: "Illustration of a fisheries professional holding a basket of fish",
    highlight: false,
  },
  {
    title: "Psychology",
    examTitle: "Psychologists and Psychometricians Licensure Exam",
    description:
      "For future practitioners. From beginner concepts to advanced methodologies.",
    tags: ["4 Years", "All levels"],
    image: moduleImage("Psychology-640.avif"),
    imageMedium: moduleImage("Psychology-480.avif"),
    imageSmall: moduleImage("Psychology-320.avif"),
    imageAlt: "Illustration representing psychology licensure exam preparation",
    highlight: false,
  },
  {
    title: "Agriculture",
    examTitle: "Agriculturists Licensure Exam",
    description:
      "Comprehensive coaching and concepts to take your knowledge to the next level.",
    tags: ["4 Years", "Licensure"],
    image: moduleImage("Agriculture-640.avif"),
    imageMedium: moduleImage("Agriculture-480.avif"),
    imageSmall: moduleImage("Agriculture-320.avif"),
    imageAlt: "Illustration of an agriculturist holding harvested produce",
    highlight: false,
  },
  {
    title: "Criminology",
    examTitle: "Criminology Licensure Exam",
    description:
      "Extensive training and preparation for criminal justice careers.",
    tags: ["4 Years", "Core"],
    image: moduleImage("Criminology-640.avif"),
    imageMedium: moduleImage("Criminology-480.avif"),
    imageSmall: moduleImage("Criminology-320.avif"),
    imageAlt: "Illustration of an aspiring criminology professional in uniform",
    highlight: false,
  },
  {
    title: "Food Technology",
    examTitle: "Professional Food Technologists Licensure Exam",
    description:
      "Advanced techniques and laboratory practice for food innovation.",
    tags: ["2-4 Years", "Advanced"],
    image: moduleImage("Food Technology-640.avif"),
    imageMedium: moduleImage("Food Technology-480.avif"),
    imageSmall: moduleImage("Food Technology-320.avif"),
    imageAlt: "Illustration of a food technologist examining a food sample",
    highlight: false,
  },
  {
    title: "Agricultural and Biosystems Engineering",
    examTitle: "Agricultural and Biosystems Engineers Licensure Exam",
    description:
      "Modern engineering and biosystems approaches to agriculture.",
    tags: ["5 Years", "Engineering"],
    image: moduleImage("Agricultural Biosystems and Engineering-640.avif"),
    imageMedium: moduleImage("Agricultural Biosystems and Engineering-480.avif"),
    imageSmall: moduleImage("Agricultural Biosystems and Engineering-320.avif"),
    imageAlt: "Illustration representing agricultural and biosystems engineering",
    highlight: false,
  },
];

const ModulesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-20">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            BoardPrep <span className="text-accent">Modules</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            From agriculture and fisheries to criminology, psychology, and
            veterinary medicine, BoardPrep supports review journeys built for
            different licensure paths.
          </p>


        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 w-full">
          {/* Full-bleed bleed logic using negative margins */}
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`-mx-6 flex w-[calc(100%+3rem)] gap-5 overflow-x-auto px-6 pb-12 pt-4 lg:-mx-12 lg:w-[calc(100%+6rem)] lg:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
              isDragging ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {modules.map((item, index) => (
              <article
                key={index}
                className={`group relative flex w-[260px] shrink-0 snap-center flex-col overflow-hidden rounded-[2.5rem] border border-black/5 shadow-sm transition-transform duration-500 sm:w-[300px] md:w-[320px] ${
                  item.highlight ? "bg-[#c4fc38]" : "bg-[#f4efe8]"
                } ${isDragging ? "pointer-events-none" : "hover:-translate-y-2"}`}
              >
                {/* Top content area */}
                <div className="flex flex-1 flex-col px-6 pb-2 pt-8 sm:px-8">
                  {/* Title stacked nicely */}
                  {/* Title stacked nicely */}
                  <div className="mb-4 flex flex-col justify-end">
                    <h3 className="mb-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-black sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="pr-2 text-[0.8rem] font-medium leading-[1.3] text-black/90 sm:text-[1.1rem]">
                      {item.examTitle}
                    </p>
                  </div>


                </div>

                {/* Bottom Image Container nestled seamlessly */}
                <div className="relative mt-auto px-2 pb-2">
                  <div className="bg-[#f09e28] relative h-[180px] w-full overflow-hidden rounded-[2rem] sm:h-[220px]">
                    <img
                      src={item.image}
                      srcSet={`${item.imageSmall} 320w, ${item.imageMedium} 480w, ${item.image} 640w`}
                      sizes="(min-width: 640px) 320px, 260px"
                      alt={item.imageAlt}
                      className="h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105 pt-2"
                      width={320}
                      height={220}
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient overlay on image bottom to ensure Read More contrast */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/20 to-transparent" />

                    
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
