import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import logoFull from "@/assets/logo-transparent.png";
import { PRESS_POSTS } from "@/data/press";

const Press = () => {
  const featuredPost = PRESS_POSTS.length > 0 ? PRESS_POSTS[0] : null;
  const remainingPosts = PRESS_POSTS.slice(1);

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
                  BoardPrep Press
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Insights for a <br />
                  <span className="text-accent relative">
                    Future-Ready Education
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
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-sans">
                  Perspectives on workforce trends, policy shifts, and learning
                  innovations shaping how institutions prepare students for
                  changing careers.
                </p>
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
                    <Link
                      to={`/press/${featuredPost.id}`}
                      className="block text-inherit no-underline"
                    >
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 line-clamp-3 font-sans">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          src={logoFull}
                          alt="BoardPrep Solutions logo"
                          className="w-10 h-10 rounded-full bg-primary/10 object-cover"
                        />
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">
                            {featuredPost.author}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>
                      <Link
                        to={`/press/${featuredPost.id}`}
                        className="inline-flex items-center hover:underline"
                      >
                        Read Article{" "}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Additional Articles Grid */}
          {remainingPosts.length > 0 ? (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="font-display text-2xl text-foreground mb-8">More Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="group rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur text-foreground hover:bg-background">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        <span>{post.date}</span>
                        <span className="text-muted-foreground/40">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link to={`/press/${post.id}`} className="block no-underline text-inherit">
                        <h3 className="font-display text-lg text-foreground mb-2 leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/press/${post.id}`}
                        className="inline-flex items-center text-sm font-medium hover:underline mt-auto"
                      >
                        Read Article <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-display text-foreground mb-2">
                More articles coming soon
              </h3>
              <p className="text-muted-foreground">
                We'll be adding additional stories and insights here soon.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
