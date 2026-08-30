import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import logoFull from "@/assets/logo-full.webp";
import logoFullSmall from "@/assets/logo-full-400.webp";
import logoFullMedium from "@/assets/logo-full-600.webp";
import { buildBasicPageSchema } from "@/seo/schema";
import { BRAND } from "@/config/brand";
import { PAGE_METADATA } from "@/seo/routes";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={PAGE_METADATA["/contact"].title}
        description={PAGE_METADATA["/contact"].description}
        url="/contact"
        jsonLd={buildBasicPageSchema({
          path: "/contact",
          name: "Contact BoardPrep",
          description:
            PAGE_METADATA["/contact"].description,
          type: "ContactPage",
          aboutOrganization: true,
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ],
        })}
      />
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section
          data-beasties-container
          className="critical-render pt-32 pb-12 lg:pt-40 lg:pb-20 bg-secondary/5"
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
              Contact <span className="text-secondary">BoardPrep</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Have questions about our review programs or need technical
              support? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                          Email
                        </p>
                        <a
                          href={`mailto:${BRAND.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-sans"
                        >
                          {BRAND.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                          Phone
                        </p>
                        <a
                          href={`tel:${BRAND.phone.e164}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-sans"
                        >
                          {BRAND.phone.display}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <Facebook size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                         Facebook Messenger
                        </p>
                        <a
                          href={BRAND.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors font-sans"
                        >
                          @myboardprep
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                         Address
                        </p>
                        <p className="text-muted-foreground font-sans">
                          {BRAND.address.full}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Follow Us
                  </h2>
                  <div className="flex gap-4">
                    <a
                      href={BRAND.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${BRAND.name} on Facebook`}
                      className="bg-secondary/5 hover:bg-[#1877F2] hover:text-white transition-colors duration-300 p-4 text-foreground transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href={BRAND.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${BRAND.name} on Instagram`}
                      className="bg-secondary/5 hover:bg-[#E4405F] hover:text-white transition-colors duration-300 p-4 text-foreground transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href={BRAND.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${BRAND.name} on LinkedIn`}
                      className="bg-secondary/5 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 p-4 text-foreground transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href={BRAND.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${BRAND.name} on TikTok`}
                      className="bg-secondary/5 hover:bg-[#000000] hover:text-white transition-colors duration-300 p-4 text-foreground transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
              </div>

              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-end">
                <img
                  src={logoFull}
                  srcSet={`${logoFullSmall} 400w, ${logoFullMedium} 600w, ${logoFull} 800w`}
                  sizes="(min-width: 1024px) 384px, 80vw"
                  alt="Board Prep Solutions Incorporated"
                  className="max-w-full h-auto max-h-48 object-contain"
                  width={800}
                  height={246}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Contact Form */}
              {/* <div className="bg-card p-8 lg:p-10 rounded-3xl border border-border shadow-sm">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-sans">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        className="h-12 bg-background font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-sans">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        className="h-12 bg-background font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-sans">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="juandelacruz@gmail.com"
                      className="h-12 bg-background font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-sans">
                      Message
                    </label>
                    <Textarea
                      placeholder="How can we help you?"
                      className="min-h-[150px] bg-background resize-none font-sans"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-12 text-base font-display"
                  >
                    Send Message
                  </Button>
                </form>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
