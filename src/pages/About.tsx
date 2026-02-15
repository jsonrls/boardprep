import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary overflow-hidden">
          {/* Background Image/Pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${new URL("@/assets/logo-transparent.png", import.meta.url).href})`,
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
                Board Prep Solutions is dedicated to enhancing educational
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
                Board Prep Solutions envisions becoming a leading driver of
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                {/* Partner Logo Placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-24 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-muted-foreground font-medium font-sans">
                      Partner {i}
                    </span>
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
                    src: new URL("@/assets/dzxl.png", import.meta.url).href,
                    alt: "DZXL",
                  },
                  {
                    src: new URL("@/assets/sup.jpg", import.meta.url).href,
                    alt: "Startup Philippines",
                  },
                  {
                    src: new URL("@/assets/mb.jpg", import.meta.url).href,
                    alt: "Manila Bulletin",
                  },
                ].map((media, index) => (
                  <div
                    key={index}
                    className="h-32 flex items-center justify-center p-4 overflow-hidden"
                  >
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
                    src: new URL("@/assets/pcieerd.jpg", import.meta.url).href,
                    alt: "DOST PCIEERD",
                  },
                  {
                    src: new URL("@/assets/PFA Logo.png", import.meta.url).href,
                    alt: "PFA",
                  },
                  {
                    src: new URL("@/assets/logo_ch_print.png", import.meta.url)
                      .href,
                    alt: "Recognition",
                  },
                ].map((award, index) => (
                  <div
                    key={index}
                    className="h-32 rounded-lg flex items-center justify-center  p-4 overflow-hidden"
                  >
                    <img
                      src={award.src}
                      alt={award.alt}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
