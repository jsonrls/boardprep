import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 bg-card shadow-soft py-3 lg:py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={shouldUseColoredLogo ? logoFull : logoWhite}
              alt="Sentinel Vet Diagnostics"
              className="h-8 lg:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu className={cn(shouldUseLightText ? "dark" : "")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2")}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 data-[active]:bg-transparent data-[state=open]:bg-transparent">Product</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover">
                      <ListItem href="https://www.myboardprep.com" target="_blank" rel="noopener noreferrer" title="Question Drills">
                        Practice with our comprehensive question bank.
                      </ListItem>
                      <ListItem href="https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US" target="_blank" rel="noopener noreferrer" title="Mobile App">
                        Download our mobile application.
                      </ListItem>
                      <ListItem href="https://lms2.myboardprep.com/" target="_blank" rel="noopener noreferrer" title="BoardPrep Classroom">
                        Interactive classroom environment.
                      </ListItem>
                      <ListItem title="iOS (Coming Soon)" href="#" className="opacity-50 cursor-not-allowed">
                        iOS version is currently in development.
                      </ListItem>
                      <ListItem title="BoardPrep Lite (Coming App)" href="#" className="opacity-50 cursor-not-allowed">
                        A lighter version for quick review.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2 data-[active]:bg-transparent data-[state=open]:bg-transparent">Review Class</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover">
                      <ListItem href="/review/vet" title="Veterinary Licensure Exam">
                        Review for Veterinary Licensure Exam.
                      </ListItem>
                      <ListItem href="/review/ftle" title="Fisheries Licensure Exam">
                        Review for Fisheries Technologist Licensure Ezxam.
                      </ListItem>
                      <ListItem href="/review/fisheries" title="Fisheries Licensure Exam">
                        Fisheries specialized review materials.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2")}>
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/blogs" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2")}>
                      Blogs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent border-b-2 border-transparent hover:border-accent rounded-none px-2")}>
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="hero"
              size="default"
              asChild
            >
              <Link to="/pre-register">
                Pre-register
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-colors text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden -mx-6 lg:-mx-12 px-6 lg:px-12 bg-background border-b border-border overflow-hidden"
            >
              <div className="py-4 flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-sm font-medium py-3 border-b border-border/50 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="products" className="border-b border-border/50">
                    <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline text-foreground">Product</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4 py-2">
                        <Link to="/question-drills" className="text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>Question Drills</Link>
                        <Link to="/mobile-app" className="text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>Mobile App</Link>
                        <span className="text-sm py-2 text-muted-foreground/50">iOS (Coming Soon)</span>
                        <span className="text-sm py-2 text-muted-foreground/50">BoarPrep Lite (Coming App)</span>
                        <Link to="/classroom" className="text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>BoardPrep Classroom</Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="review" className="border-b border-border/50">
                    <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline text-foreground">Review Class</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4 py-2">
                        <Link to="/review/vet" className="text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>VET</Link>
                        <Link to="/review/ftle" className="text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>FTLE</Link>
                        <Link to="/review/fisheries" className="text-sm py-2 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>Fisheries</Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  to="/about"
                  className="text-sm font-medium py-3 border-b border-border/50 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/blogs"
                  className="text-sm font-medium py-3 border-b border-border/50 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium py-3 border-b border-border/50 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Button variant="hero" className="mt-6 w-full" asChild>
                  <Link to="/pre-register">
                    Pre-register
                  </Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
