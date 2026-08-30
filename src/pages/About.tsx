import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import logoTransparent from "@/assets/logo-transparent.png";
import pcieerd from "@/assets/pcieerd.jpg";
import sustainabilityPh from "@/assets/sustainability-ph.png";
import pvma from "@/assets/pvma.png";
import prevail from "@/assets/prevail.png";
import dzxl from "@/assets/dzxl.png";
import startupPh from "@/assets/sup.jpg";
import manilaBulletin from "@/assets/mb.jpg";
import pfaLogo from "@/assets/PFA Logo.png";
import logoChPrint from "@/assets/logo_ch_print.png";
import { buildBasicPageSchema } from "@/seo/schema";
import { BRAND } from "@/config/brand";
import { PAGE_METADATA } from "@/seo/routes";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={PAGE_METADATA["/about"].title}
        description={PAGE_METADATA["/about"].description}
        url="/about"
        jsonLd={buildBasicPageSchema({
          path: "/about",
          name: "About BoardPrep",
          description:
            PAGE_METADATA["/about"].description,
          type: "AboutPage",
          aboutOrganization: true,
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "About BoardPrep", path: "/about" },
          ],
        })}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          data-beasties-container
          className="critical-render relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary overflow-hidden"
        >
          {/* Background Image/Pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${logoTransparent})`,
              backgroundSize: "60%",
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/80 to-secondary/80" />

          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              About <span className="text-primary">BoardPrep</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-sans">
              Empowering students to achieve their dreams through innovative,
              accessible, and effective board exam preparation.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify md:text-left font-sans">
                {BRAND.legalName} is dedicated to enhancing educational
                quality through expert consultancy services, technology-enabled
                review programs and comprehensive competency development
                programs. Our mission is to strengthen higher education
                institutions, improve learner outcomes, and equip professionals
                with the skills and competencies needed to excel in a modern,
                competitive workforce.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify md:text-left font-sans">
                {BRAND.legalName} envisions becoming a leading driver of
                innovation in higher education by delivering transformative
                digital learning solutions and professional development
                programs. We aim to empower institutions, uplift learners, and
                help build a globally competitive workforce prepared for the
                demands of a rapidly evolving world.
              </p>
            </div>

            {/* Partners Section */}
            <div className="pt-8 text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Our Partners
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[
                  {
                    src: pcieerd,
                    alt: "DOST-PCIEERD",
                    width: 1556,
                    height: 1566,
                  },
                  {
                    src: sustainabilityPh,
                    alt: "Sustainability PH",
                    width: 480,
                    height: 406,
                  },
                  {
                    src: pvma,
                    alt: "Philippine Veterinary Medical Association Singapore",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    src: prevail,
                    alt: "Prime Real Estate Values and Integrated Learnings, Inc. (PREVAIL)",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    src: "/assets/images/ascot.png",
                    alt: "Aurora State College of Technology (ASCOT)",
                    width: 1440,
                    height: 1440,
                  }
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="h-24 flex items-center justify-center p-4 overflow-hidden"
                  >
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* As seen on Section */}
            <div className="pt-8 text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                As seen on
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center opacity-70">
                {[
                  {
                    src: dzxl,
                    alt: "DZXL 558 Manila, RMN Networks",
                    width: 800,
                    height: 687,
                  },
                  {
                    src: startupPh,
                    alt: "Start Up Podcast",
                    width: 2048,
                    height: 2048,
                  },
                  {
                    src: manilaBulletin,
                    alt: "Manila Bulletin",
                    width: 1000,
                    height: 1000,
                  },
                ].map((media, index) => (
                  <div
                    key={index}
                    className="h-32 flex items-center justify-center p-4 overflow-hidden bg-transparent"
                  >
                    <img
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      className="max-w-full max-h-full object-contain transition-all duration-300 bg-transparent"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Awards and Recognitions Section */}
            <div className="pt-8 text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Awards & Recognitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center opacity-70">
                {[
                  {
                    src: pcieerd,
                    alt: "DOST-PCIEERD recognition",
                    width: 1556,
                    height: 1566,
                  },
                  {
                    src: pfaLogo,
                    alt: "PFA",
                    width: 1708,
                    height: 531,
                  },
                  {
                    src: logoChPrint,
                    alt: "Recognition",
                    width: 460,
                    height: 112,
                  },
                ].map((award, index) => (
                  <div
                    key={index}
                    className="h-32 rounded-lg flex items-center justify-center p-4 overflow-hidden bg-transparent"
                  >
                    <img
                      src={award.src}
                      alt={award.alt}
                      width={award.width}
                      height={award.height}
                      className="max-w-full max-h-full object-contain transition-all duration-300 bg-transparent"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
