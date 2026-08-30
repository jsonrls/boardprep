import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-white.webp";
import logoFullSmall from "@/assets/logo-white-400.webp";
import { BRAND } from "@/config/brand";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: "All Products", href: "/our-products" },
    { label: "Review Classes", href: "/review-class" },
    { label: "Veterinary Review", href: "/review/vet" },
    { label: "Fisheries Review", href: "/review/fisheries" },
    { label: "Agriculture Review", href: "/review/agriculture" },
    { label: "Food Technology Review", href: "/review/ftle" },
    { label: "Agricultural Engineering Review", href: "/review/abe" },
    { label: "Question Drills", href: "/question-drills" },
    { label: "Press", href: "/press" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#3971C2] text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="relative grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-14">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img
              src={logoFull}
              srcSet={`${logoFullSmall} 400w, ${logoFull} 800w`}
              sizes="180px"
              alt="BoardPrep Solutions"
              className="mb-5 h-11 w-auto object-contain"
              width={800}
              height={245}
              loading="lazy"
              decoding="async"
            />
            <p className="mb-6 max-w-sm font-sans text-sm leading-6 text-white/65">
              Online review classes, question drills, and study tools for
              Philippine licensure exam candidates.
            </p>
            <div className="flex gap-3">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BRAND.name} on Facebook`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BRAND.name} on Instagram`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BRAND.name} on LinkedIn`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BRAND.name} on TikTok`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-black hover:text-white"
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
          <div className="lg:col-span-4">
            <p className="mb-5 font-display text-lg font-semibold text-white">
              Quick Links
            </p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-5 font-display text-lg font-semibold text-white">
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-accent"
                />
                <span className="font-sans text-sm leading-6 text-white/60">
                  {BRAND.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <a
                  href={`tel:${BRAND.phone.e164}`}
                  className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-accent"
                >
                  {BRAND.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all font-sans text-sm text-white/60 transition-colors duration-300 hover:text-accent"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 md:flex-row">
          <p className="font-sans text-xs text-white/45 sm:text-sm">
            © {currentYear} {BRAND.legalName}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/45 sm:text-sm">
            {BRAND.name} — online licensure exam review in the Philippines.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
