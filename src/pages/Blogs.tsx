import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 10 Tips for Passing the Veterinarian Board Exam",
    excerpt:
      "Preparing for the board exam can be daunting. Here are the top 10 tips from recent topnotchers to help you ace your review. From study schedules to mental preparation.",
    author: "Dr. Jane Doe",
    date: "October 15, 2025",
    category: "Study Tips",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2670&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Fishery Laws in the Philippines",
    excerpt:
      "A comprehensive guide to the latest updates in fishery laws and regulations that every technologist should know. Stay updated with the changing legal landscape.",
    author: "Engr. John Smith",
    date: "November 2, 2025",
    category: "Fisheries",
    image:
      "https://images.unsplash.com/photo-1544367563-12123d8d5e64?q=80&w=2670&auto=format&fit=crop",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "How to Balance Work and Review",
    excerpt:
      "Many reviewees juggle work and study. Learn effective time management strategies to maximize your preparation without burnout. Success strikes a balance.",
    author: "Sarah Lee",
    date: "September 28, 2025",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Future of Ed-Tech in Professional Licensure",
    excerpt:
      "Explore how technology is revolutionizing the way professionals prepare for their licensure examinations. AI, easy access, and more.",
    author: "BoardPrep Team",
    date: "December 10, 2025",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Essential Books for Veterinarian Medicine",
    excerpt:
      "Don't know where to start? We've compiled a list of the most essential textbooks and references you need for your review journey.",
    author: "Dr. Mark R.",
    date: "January 5, 2026",
    category: "Resources",
    image:
      "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2670&auto=format&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Mental Health Awareness During Review Season",
    excerpt:
      "Taking care of your mind is just as important as studying. Here are strategies to maintain your mental wellbeing during high-pressure review periods.",
    author: "Lisa Chen",
    date: "February 12, 2026",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2670&auto=format&fit=crop",
    readTime: "5 min read",
  },
];

const CATEGORIES = [
  "All",
  "Study Tips",
  "Fisheries",
  "Lifestyle",
  "Technology",
  "Resources",
  "Wellness",
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Header />
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="relative py-16 md:py-24 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-secondary/30 -z-10" />
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={300} strokeWidth={0.5} />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 px-4 py-1 text-primary border-primary/30 bg-primary/5"
                >
                  BoardPrep Blog
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Insights for your <br />
                  <span className="text-accent relative">
                    Licensure Journey
                    <svg
                      className="absolute w-full h-3 -bottom-1 left-0 text-accent/30"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Expert advice, study strategies, and industry updates to help
                  you navigate your path to becoming a licensed professional.
                </p>
              </motion.div>

              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center"
              >
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 bg-background/50 border-border/60 hover:border-primary/50 transition-colors focus:ring-primary/20"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap justify-center gap-2"
              >
                {CATEGORIES.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {cat}
                  </Button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-12">
          {/* Featured Post */}
          {featuredPost && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 backdrop-blur text-foreground hover:bg-background">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs font-medium text-accent mb-4 uppercase tracking-wider">
                      <span>{featuredPost.category}</span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="text-muted-foreground">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Link to="#" className="block">
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">
                            {featuredPost.author}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="hidden sm:flex group/btn"
                      >
                        Read Article{" "}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Regular Blog Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border/40 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-md bg-white/90 text-black font-medium"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative">
                    {/* Decorative background accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full -z-10 transition-all group-hover:bg-accent/10" />

                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      <Link to="#">{post.title}</Link>
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-border/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <User size={14} className="text-primary" />
                        {post.author}
                      </div>
                      <Link
                        to="#"
                        className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Read <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            !featuredPost && (
              <div className="text-center py-20">
                <div className="bg-muted/30 p-6 rounded-full inline-block mb-4">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter.
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 text-primary"
                >
                  Clear filters
                </Button>
              </div>
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
