import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  FileText,
  Smartphone,
  School,
  Zap,
  Stethoscope,
  Utensils,
  Fish,
  Sprout,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Always use colored logo and dark text since background is white
  const shouldUseColoredLogo = true;
  const shouldUseLightText = false;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled ? "py-3" : "py-4 lg:py-6",
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={cn(
            "transition-[box-shadow,background-color,padding] duration-500 ease-out",
            isScrolled
              ? "bg-card/95 backdrop-blur-lg shadow-elegant px-6 py-3"
              : "bg-card/95 backdrop-blur-lg shadow-soft px-6 py-3",
            isStyleOpen ? "rounded-2xl" : "rounded-full",
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={shouldUseColoredLogo ? logoFull : logoWhite}
                alt="Sentinel Vet Diagnostics"
                className="h-8 lg:h-10 w-auto"
                width={150}
                height={40}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu className={cn(shouldUseLightText ? "dark" : "")}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 font-display",
                        )}
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 data-[active]:bg-transparent data-[state=open]:bg-transparent font-display">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[350px] gap-1 p-2 bg-popover">
                        <ListItem
                          href="https://www.myboardprep.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Question Drills"
                          icon={FileText}
                        />
                        <ListItem
                          href="https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Mobile App"
                          icon={Smartphone}
                        />
                        <ListItem
                          href="https://lms2.myboardprep.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="BoardPrep Classroom"
                          icon={School}
                        />

                        <ListItem
                          title="BoardPrep Lite (Coming App)"
                          href="#"
                          className="opacity-50 cursor-not-allowed"
                          icon={Zap}
                        />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 data-[active]:bg-transparent data-[state=open]:bg-transparent font-display">
                      Review Class
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[350px] gap-1 p-2 bg-popover">
                        <ListItem
                          href="/review/vet"
                          title="Veterinarian"
                          icon={Stethoscope}
                        />
                        <ListItem
                          href="/review/ftle"
                          title="Food Technology"
                          icon={Utensils}
                        />
                        <ListItem
                          href="/review/fisheries"
                          title="Fisheries"
                          icon={Fish}
                        />
                        <ListItem
                          href="/review/abe"
                          title="Agri & Biosystems"
                          icon={Sprout}
                        />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/blogs"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 font-display",
                        )}
                      >
                        Blogs
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/contact"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 font-display",
                        )}
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/about"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 font-display",
                        )}
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="https://www.myboardprep.com/" className="flex items-center gap-2">
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full sm:w-auto group font-display"
                >
                  Get Started Now
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 transition-colors text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => {
                if (!isMenuOpen) setIsStyleOpen(true);
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence onExitComplete={() => setIsStyleOpen(false)}>
            {isMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden -mx-6 lg:-mx-12 px-6 lg:px-12 border-b border-border overflow-hidden"
              >
                <div className="py-4 flex flex-col space-y-2">
                  <Link
                    to="/"
                    className="text-sm font-medium py-4 border-b border-border/50 text-foreground font-display"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="products"
                      className="border-b border-border/50"
                    >
                      <AccordionTrigger className="text-sm font-medium py-4 hover:no-underline text-foreground font-display">
                        Product
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4 py-2">
                          <Link
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Question Drills
                          </Link>
                          <Link
                            to="/mobile-app"
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Mobile App
                          </Link>

                          <span className="text-sm py-2 text-muted-foreground/50 font-sans">
                            BoarPrep Lite (Coming App)
                          </span>
                          <Link
                            to="/classroom"
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            BoardPrep Classroom
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="review"
                      className="border-b border-border/50"
                    >
                      <AccordionTrigger className="text-sm font-medium py-4 hover:no-underline text-foreground font-display">
                        Review Class
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4 py-2">
                          <Link
                            to="/review/vet"
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Veterinarian Licensure Exam
                          </Link>
                          <Link
                            to="/review/ftle"
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Food Technology Licensure Exam
                          </Link>
                          <Link
                            to="/review/fisheries"
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Fisheries Licensure Exam
                          </Link>
                          <Link
                            to="/review/abe"
                            className="text-sm py-2 text-muted-foreground font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Agricultural and Biosystems Engineering Licensure
                            Exam
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    to="/blogs"
                    className="text-sm font-medium py-4 border-b border-border/50 text-foreground font-display"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm font-medium py-4 border-b border-border/50 text-foreground font-display"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/about"
                    className="text-sm font-medium py-4 border-b border-border/50 text-foreground font-display"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>

                  <Button variant="hero" className="mt-6 w-full" asChild>
                    <Link
                      to="/pre-register"
                      className="flex items-center justify-center gap-2 font-display"
                    >
                      <Sparkles size={16} />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, href, icon: Icon, ...props }, ref) => {
  const isExternal =
    href?.startsWith("http") ||
    href?.startsWith("mailto") ||
    href?.startsWith("tel");

  if (!isExternal && href) {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            className={cn(
              "group block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              className,
            )}
            {...(props as any)}
          >
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
              )}
              <div className="text-sm font-medium leading-none font-display">
                {title}
              </div>
              <ChevronRight className="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground/50" />
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "group block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </div>
            )}
            <div className="text-sm font-medium leading-none font-display">
              {title}
            </div>
            <ChevronRight className="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground/50" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
