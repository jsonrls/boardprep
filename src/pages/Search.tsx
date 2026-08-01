import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search as SearchIcon } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const searchablePages = [
  {
    title: "BoardPrep Online Board Exam Review",
    description:
      "Online board exam review classes, question drills, and study tools for Philippine licensure examinations.",
    path: "/",
    terms: "home board prep Philippines licensure exam",
  },
  {
    title: "Online Review Classes",
    description:
      "Compare BoardPrep review programs for veterinary medicine, fisheries, agriculture, food technology, and agricultural engineering.",
    path: "/review-class",
    terms: "review class programs courses",
  },
  {
    title: "Veterinarian Licensure Examination Review",
    description: "Online VLE preparation with guided lessons, practice drills, and mock examinations.",
    path: "/review/vet",
    terms: "vet veterinarian veterinary medicine VLE DVM",
  },
  {
    title: "Fisheries Licensure Examination Review",
    description: "Online Fisheries board exam preparation covering core FPLE topics.",
    path: "/review/fisheries",
    terms: "fisheries FPLE aquaculture",
  },
  {
    title: "Agriculturists Licensure Examination Review",
    description: "Online AgLE preparation covering crop, soil, animal, economics, and extension topics.",
    path: "/review/agriculture",
    terms: "agriculture agriculturist AgLE crop soil animal",
  },
  {
    title: "Food Technology Licensure Examination Review",
    description: "Online FTLE preparation with lessons, practice quizzes, and mock examinations.",
    path: "/review/ftle",
    terms: "food technology FTLE food science",
  },
  {
    title: "Agricultural and Biosystems Engineering Review",
    description: "Online ABELE preparation with guided lessons and practice materials.",
    path: "/review/abe",
    terms: "ABE ABELE agricultural biosystems engineering",
  },
  {
    title: "Question Drills",
    description: "Practice questions for BoardPrep-supported Philippine licensure examinations.",
    path: "/question-drills",
    terms: "practice questions drills mock exam question bank",
  },
  {
    title: "BoardPrep Products",
    description: "Explore question drills, Classroom LMS, review classes, and BoardPrep Lite.",
    path: "/our-products",
    terms: "products mobile app classroom LMS lite",
  },
  {
    title: "About BoardPrep",
    description: "Learn about BoardPrep and its Philippine board exam review platform.",
    path: "/about",
    terms: "company organization team",
  },
  {
    title: "Contact BoardPrep",
    description: "Contact the team about review programs, enrollment, or technical support.",
    path: "/contact",
    terms: "contact email telephone support inquiry",
  },
  {
    title: "BoardPrep News and Updates",
    description: "Read BoardPrep news, announcements, and platform updates.",
    path: "/press",
    terms: "press articles news updates announcements",
  },
] as const;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();
  const normalizedQuery = query.toLocaleLowerCase("en-PH");
  const results = normalizedQuery
    ? searchablePages.filter((page) =>
        `${page.title} ${page.description} ${page.terms}`
          .toLocaleLowerCase("en-PH")
          .includes(normalizedQuery),
      )
    : [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SEO
        title={query ? `Search results for ${query}` : "Search BoardPrep"}
        description="Search BoardPrep review programs, question drills, products, and support pages."
        url="https://www.myboardprep.org/search"
        noindex
      />
      <Header />
      <main className="container mx-auto flex-1 px-6 pb-24 pt-36 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Site search
          </p>
          <h1 className="mb-8 font-display text-4xl font-bold text-foreground md:text-5xl">
            Search BoardPrep
          </h1>

          <form action="/search" method="get" role="search" className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="site-search" className="sr-only">
              Search BoardPrep
            </label>
            <Input
              id="site-search"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Try “veterinarian” or “question drills”"
              className="h-12 flex-1"
            />
            <Button type="submit" size="lg" className="h-12 gap-2">
              <SearchIcon className="h-4 w-4" />
              Search
            </Button>
          </form>

          <section aria-live="polite" className="mt-12">
            {query ? (
              <>
                <h2 className="font-display text-2xl text-foreground">
                  {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
                </h2>
                {results.length > 0 ? (
                  <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-8">
                    {results.map((result) => (
                      <li key={result.path} className="py-6">
                        <Link to={result.path} className="group block">
                          <span className="flex items-center justify-between gap-6 font-display text-xl text-foreground group-hover:text-primary">
                            {result.title}
                            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="mt-2 block leading-relaxed text-muted-foreground">
                            {result.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-muted-foreground">
                    No matching pages were found. Try a licensure exam name, “review class,” or “question drills.”
                  </p>
                )}
              </>
            ) : (
              <p className="text-muted-foreground">
                Enter a keyword to find review programs, study products, and support information.
              </p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
