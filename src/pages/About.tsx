import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
              About <span className="text-secondary">BoardPrep</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              <p className="text-lg text-muted-foreground leading-relaxed">
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
              <p className="text-lg text-muted-foreground leading-relaxed">
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
                    <span className="text-muted-foreground font-medium">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                {/* Media Logo Placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-24 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-muted-foreground font-medium">
                      Media {i}
                    </span>
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
                {/* Award Placeholders */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-32 bg-muted/50 rounded-lg flex flex-col items-center justify-center border border-border/50 hover:bg-muted transition-colors p-4"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <span className="text-muted-foreground font-medium">
                      Award Title {i}
                    </span>
                    <span className="text-xs text-muted-foreground/60 mt-1">
                      Organization
                    </span>
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
