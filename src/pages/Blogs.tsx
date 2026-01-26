import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

// Mock Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 10 Tips for Passing the Veterinary Board Exam",
    excerpt: "Preparing for the board exam can be daunting. Here are the top 10 tips from recent topnotchers to help you ace your review.",
    author: "Dr. Jane Doe",
    date: "October 15, 2025",
    category: "Study Tips",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Understanding Fishery Laws in the Philippines",
    excerpt: "A comprehensive guide to the latest updates in fishery laws and regulations that every technologist should know.",
    author: "Engr. John Smith",
    date: "November 2, 2025",
    category: "Fisheries",
    image: "https://images.unsplash.com/photo-1544367563-12123d8d5e64?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "How to Balance Work and Review",
    excerpt: "Many reviewees juggle work and study. Learn effective time management strategies to maximize your preparation without burnout.",
    author: "Sarah Lee",
    date: "September 28, 2025",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Future of Ed-Tech in Professional Licensure",
    excerpt: "Explore how technology is revolutionizing the way professionals prepare for their licensure examinations.",
    author: "BoardPrep Team",
    date: "December 10, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="bg-secondary/30 py-16 md:py-24 mb-12">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Our <span className="text-accent">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights, tips, and updates to help you on your journey to becoming a licensed professional.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="font-display text-xl text-foreground mb-3 leading-tight line-clamp-2">
                    <Link to="#" className="hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group">
                        Read Article <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
