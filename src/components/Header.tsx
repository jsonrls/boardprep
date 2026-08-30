import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  UserPlus,
  ArrowRight,
  FileText,
  Smartphone,
  School,
  Zap,
  Stethoscope,
  Utensils,
  Rocket,
  Cpu,
  ChevronRight,
  Fish,
  Wheat,
} from "lucide-react";
import { useState, useEffect, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoFull from "@/assets/logo-full.webp";
import logoFullSmall from "@/assets/logo-full-400.webp";
import logoFullMedium from "@/assets/logo-full-600.webp";
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
import { PRODUCT_LINKS } from "@/config/brand";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let animationFrame = 0;
    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          animationFrame = 0;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Always use colored logo and dark text since background is white
  const shouldUseLightText = false;

  return (
    <header
      data-beasties-container
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
            isMenuOpen ? "rounded-2xl" : "rounded-full",
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logoFull}
                srcSet={`${logoFullSmall} 400w, ${logoFullMedium} 600w, ${logoFull} 800w`}
                sizes="(min-width: 1024px) 130px, 104px"
                alt="My Board Prep Solutions, Incorporated"
                className="h-8 lg:h-10 w-auto"
                width={800}
                height={246}
                decoding="async"
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
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 rounded-none px-2 font-display",
                          location.pathname === "/"
                            ? "border-accent text-accent-foreground"
                            : "border-transparent hover:border-accent",
                        )}
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 rounded-none px-2 data-[active]:bg-transparent data-[state=open]:bg-transparent font-display",
                        location.pathname.startsWith("/our-products") ||
                          location.pathname.startsWith("/mobile-app") ||
                          location.pathname.startsWith("/classroom")
                          ? "border-accent text-accent-foreground"
                          : "border-transparent hover:border-accent",
                      )}
                    >
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[350px] gap-1 p-2 bg-popover">
                        <ListItem href="/our-products" title="All Products" icon={Cpu} />
                        <ListItem
                          href={PRODUCT_LINKS.drills}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="BoardPrep Drills"
                          icon={FileText}
                        />
                        <ListItem
                          href={PRODUCT_LINKS.mobileApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="BoardPrep Mobile App"
                          icon={Smartphone}
                        />
                        <ListItem
                          href={PRODUCT_LINKS.classroom}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="BoardPrep Classroom"
                          icon={School}
                        />

                        <ListItem
                          title="BoardPrep Lite (FREE!)"
                          href={PRODUCT_LINKS.lite}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={Zap}
                        />
                        <ListItem
                          title="Next Steps Program"
                          href={PRODUCT_LINKS.nextSteps}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={Rocket}
                        />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 rounded-none px-2 data-[active]:bg-transparent data-[state=open]:bg-transparent font-display",
                        location.pathname.startsWith("/review")
                          ? "border-accent text-accent-foreground"
                          : "border-transparent hover:border-accent",
                      )}
                    >
                      Review Class
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[350px] gap-1 p-2 bg-popover">
                        <ListItem
                          href="/review-class"
                          title="All Review Classes"
                          icon={School}
                        />
                        <ListItem
                          href="/review/vet"
                          title="Veterinary Medicine"
                          icon={Stethoscope}
                        />
                        <ListItem
                          href="/review/fisheries"
                          title="Fisheries"
                          icon={Fish}
                        />
                        <ListItem
                          href="/review/agriculture"
                          title="Agriculture"
                          icon={Wheat}
                        />
                        <ListItem
                          href="/review/ftle"
                          title="Food Technology"
                          icon={Utensils}
                        />
                        <ListItem
                          href="/review/abe"
                          title="Agricultural Engineering"
                          icon={Cpu}
                        />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/press"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 rounded-none px-2 font-display",
                          location.pathname.startsWith("/press")
                            ? "border-accent text-accent-foreground"
                            : "border-transparent hover:border-accent",
                        )}
                      >
                        Press
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/contact"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 rounded-none px-2 font-display",
                          location.pathname.startsWith("/contact")
                            ? "border-accent text-accent-foreground"
                            : "border-transparent hover:border-accent",
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
                          "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 rounded-none px-2 font-display",
                          location.pathname.startsWith("/about")
                            ? "border-accent text-accent-foreground"
                            : "border-transparent hover:border-accent",
                        )}
                      >
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/enroll" className="flex items-center gap-2">
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full sm:w-auto group font-display"
                >
                  Enroll Now
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden transition-colors text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => {
                const nextMenuState = !isMenuOpen;
                setIsMenuOpen(nextMenuState);
              }}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <nav
                id="mobile-navigation"
                className="animate-fade-in lg:hidden -mx-6 lg:-mx-12 px-6 lg:px-12 border-b border-border overflow-hidden"
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
                        Products
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4 py-2">
                          <Link
                            to="/our-products"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Cpu className="h-4 w-4" />
                            All Products
                          </Link>
                          <a
                            href={PRODUCT_LINKS.drills}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <FileText className="h-4 w-4" />
                            BoardPrep Drills
                          </a>
                          <a
                            href={PRODUCT_LINKS.mobileApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Smartphone className="h-4 w-4" />
                            BoardPrep Mobile App
                          </a>

                          <a
                            href={PRODUCT_LINKS.lite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Zap className="h-4 w-4" />
                            BoardPrep Lite (FREE!)
                          </a>
                          <a
                            href={PRODUCT_LINKS.classroom}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <School className="h-4 w-4" />
                            BoardPrep Classroom
                          </a>
                          <a
                            href={PRODUCT_LINKS.nextSteps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Rocket className="h-4 w-4" />
                            Next Steps Program
                          </a>
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
                            to="/review-class"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <School className="h-4 w-4" />
                            All Review Classes
                          </Link>
                          <Link
                            to="/review/vet"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Stethoscope className="h-4 w-4" />
                            Veterinary Medicine
                          </Link>
                          <Link
                            to="/review/fisheries"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Fish className="h-4 w-4" />
                            Fisheries
                          </Link>
                          <Link
                            to="/review/agriculture"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Wheat className="h-4 w-4" />
                            Agriculture
                          </Link>
                          <Link
                            to="/review/ftle"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Utensils className="h-4 w-4" />
                            Food Technology
                          </Link>
                          <Link
                            to="/review/abe"
                            className="text-sm py-2 text-muted-foreground font-sans inline-flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Cpu className="h-4 w-4" />
                            Agricultural Engineering
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    to="/press"
                    className="text-sm font-medium py-4 border-b border-border/50 text-foreground font-display"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Press
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
                      to="/enroll"
                      className="flex items-center justify-center gap-2 font-display"
                    >
                      <UserPlus size={16} />
                      Enroll Now!
                    </Link>
                  </Button>
                </div>
              </nav>
            )}
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
