import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getPressPostById } from "@/data/press";

const PressArticle = () => {
  const { id } = useParams();
  const post = typeof id === "string" ? getPressPostById(id) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center py-20">
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                Article not found
              </h1>
              <p className="text-muted-foreground mb-8">
                The press article you’re looking for doesn’t exist.
              </p>
              <Button asChild variant="outline">
                <Link to="/press">Back to Press</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
              <Link to="/press" className="inline-flex items-center gap-2 my-6 text-foreground hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to Press
              </Link>

            <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-soft">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-background/80 backdrop-blur text-foreground hover:bg-background">
                    {post.category}
                  </Badge>
                  <h1 className="font-display text-2xl md:text-4xl text-white mt-3 leading-tight">
                    {post.title}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
                    <span>{post.date}</span>
                    <span className="text-white/40">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoFull}
                      alt="BoardPrep Solutions logo"
                      className="w-10 h-10 rounded-full bg-primary/10 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">
                        Press • {post.category}
                      </p>
                    </div>
                  </div>

                  {post.sourceUrl ? (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={post.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Source <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>

                <div className="space-y-6">
                  {post.content.map((block, idx) => {
                    if (block.type === "h2") {
                      return (
                        <h2
                          key={idx}
                          className="font-display text-xl md:text-2xl text-foreground"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === "ul") {
                      return (
                        <ul
                          key={idx}
                          className="list-decimal pl-5 space-y-2 text-muted-foreground"
                        >
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {block.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PressArticle;

