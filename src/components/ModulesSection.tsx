import { useRef, useState, useEffect } from "react";
import { ArrowRight, BicepsFlexed, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const moduleImage = (filename: string) => `/modules/${encodeURIComponent(filename)}`;

const modules = [
  {
    title: "Veterinarians Licensure Examination",
    description:
      "Advanced animal care and medical training for aspiring veterinarians.",
    tags: ["6 Years", "Doctorate"],
    image: moduleImage("Veterinary Medicine.png"),
    highlight: false,
  },
  {
    title: "Professional Food Technologists Licensure Examination",
    description:
      "Advanced techniques and laboratory practice for food innovation.",
    tags: ["2-4 Years", "Advanced"],
    image: moduleImage("Food Technology.png"),
    highlight: false,
  },
  {
    title: "Fisheries Professional Licensure Examination",
    description:
      "For aspiring professionals. Focus on fundamentals and practical skills.",
    tags: ["2-4 Years", "Undergrad"],
    image: moduleImage("Fisheries.png"),
    highlight: false,
  },
  {
    title: "Psychologists and Psychometricians Licensure Examination",
    description:
      "For future practitioners. From beginner concepts to advanced methodologies.",
    tags: ["4 Years", "All levels"],
    image: moduleImage("Psychology.png"),
    highlight: false,
  },
  {
    title: "Agriculturists Licensure Examination",
    description:
      "Comprehensive coaching and concepts to take your knowledge to the next level.",
    tags: ["4 Years", "Licensure"],
    image: moduleImage("Agriculture.png"),
    highlight: false,
  },
  {
    title: "Criminology Licensure Examination",
    description:
      "Extensive training and preparation for criminal justice careers.",
    tags: ["4 Years", "Core"],
    image: moduleImage("Criminology.png"),
    highlight: false,
  },
  {
    title: "Agricultural and Biosystems Engineers Licensure Examination",
    description:
      "Modern engineering and biosystems approaches to agriculture.",
    tags: ["5 Years", "Engineering"],
    image: moduleImage("Agricultural Biosystems and Engineering.png"),
    highlight: false,
  },
];

const ModulesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isDragging || isHovered) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Check if we've reached the end
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by approximately one card width
          scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 1500); // Trigger auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
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
            Exam Prep <span className="text-accent">Modules</span>
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
            onMouseEnter={handleMouseEnter}
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
                  <h3 className="mb-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-black">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[13px] font-medium leading-relaxed tracking-tight sm:text-sm ${
                      item.highlight ? "text-black/80" : "text-black/60"
                    } pr-4`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Image Container nestled seamlessly */}
                <div className="relative mt-auto px-2 pb-2">
                  <div className="bg-[#f09e28] relative h-[180px] w-full overflow-hidden rounded-[2rem] sm:h-[220px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105 pt-2"
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
