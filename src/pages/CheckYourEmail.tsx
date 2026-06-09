import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const CheckYourEmail = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <SEO
        title="Check Your Email"
        description="Confirmation page after submitting the BoardPrep newsletter form."
        url="https://www.myboardprep.org/check-your-email"
      />
      <Header />
      <main className="relative overflow-hidden pt-24">
        <section className="relative min-h-[calc(100vh-6rem)] px-6 py-20 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-secondary/30" />
          <div className="absolute left-1/2 top-20 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto flex min-h-[560px] items-center justify-center"
          >
            <div className="w-full max-w-2xl rounded-2xl border border-border/60 bg-background/90 p-8 text-center shadow-elegant backdrop-blur md:p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-7 w-7" />
                </div>
              </div>

              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                <Mail className="h-4 w-4" />
                Confirmation page
              </p>
              <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
                Check your email
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Thanks for subscribing. Please check your inbox to confirm your
                email address and complete your BoardPrep newsletter signup.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/press">
                    Back to Press
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">Go Home</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CheckYourEmail;
