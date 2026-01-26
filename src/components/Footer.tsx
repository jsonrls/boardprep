import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoFull from "@/assets/logo-white.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const quickLinks = [
    { label: "Question Drills", href: "https://www.myboardprep.com", isHash: false },
    { label: "BoardPrep Classroom", href: "https://lms2.myboardprep.com/", isHash: false },
    { label: "Mobile App", href: "https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US", isHash: false },
    { label: "About Us", href: "/about", isHash: false },
    { label: "Contact Us", href: "/contact", isHash: false },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logoFull}
              alt="BoardPrep"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/60 leading-relaxed mb-8 max-w-sm">
              Leading provider of accessible and high-quality board exam review materials.
              Trusted by future professionals.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/sentinelvetdiagnostics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/sentinel.vet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://ph.linkedin.com/company/board-prep"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@myboardprep"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => {
                if (link.isHash) {
                  // For hash links, navigate to home page with hash if not already there
                  const href = location.pathname === "/" ? link.href : `/${link.href}`;
                  return (
                    <li key={link.label}>
                      <a
                        href={href}
                        className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/60 text-sm">
                  Level 10-1 Fort Legend Tower, 31st Street & 3rd Avenue, Bonifacio Global City, Taguig City, 1634, Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+639171429725"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                >
                  +63 917 142 9725
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:acewithboardprep@gmail.com "
                  className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                >
                  acewithboardprep@gmail.com 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} BoardPrep. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="#"
              className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
