import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Page Not Found"
        description="The page you’re looking for doesn’t exist. Return to BoardPrep’s homepage to continue exploring review tools and resources."
      />
      <Header />
      <main className="flex-1 flex items-center justify-center px-6">
        <section className="text-center max-w-xl mx-auto py-20">
          <p className="text-sm font-mono tracking-[0.2em] text-primary/70 mb-4 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl font-display font-bold text-foreground">
            Page not found
          </h1>
          <p className="mb-8 text-lg text-muted-foreground font-sans">
            The page you’re looking for might have been moved, renamed, or no longer exists.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Back to home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Contact support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
