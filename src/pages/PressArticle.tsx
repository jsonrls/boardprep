import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-transparent.png";
import { ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getPressPostById } from "@/data/press";

// Threads SVG icon (no lucide equivalent)
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.332C56.954 24.458 74.204 17.143 97.013 16.974c22.976.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.643 32.788 28.08 19.882 44.485 13.224 67.315 13.001 96v.028c.223 28.683 6.88 51.513 19.787 67.918 14.504 18.437 36.094 27.885 64.271 28.08h.113c25.212-.173 42.984-6.713 57.672-21.398 19.757-19.743 19.194-44.42 12.67-59.571-4.723-11.005-13.762-19.913-25.977-25.069Zm-45.374 44.741c-10.447.571-21.3-4.101-21.845-14.158-.393-7.363 5.245-15.575 22.196-16.552 1.94-.112 3.847-.168 5.722-.168 6.146 0 11.878.6 17.063 1.76-1.939 24.188-13.054 28.591-23.136 29.118Z" />
  </svg>
);

const buildShareUrls = (url: string, title: string) => ({
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  threads: `https://www.threads.net/intent/post?text=${encodeURIComponent(title + " " + url)}`,
  x: `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
});

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
                The press article you're looking for doesn't exist.
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

  // Renders a paragraph, turning "App Store" / "Google Play" into clickable links
  const renderParagraph = (text: string) => {
    const replacements: { label: string; url: string }[] = [];
    if (post.appStoreUrl) replacements.push({ label: "App Store", url: post.appStoreUrl });
    if (post.playStoreUrl) replacements.push({ label: "Google Play", url: post.playStoreUrl });

    if (replacements.length === 0) return <>{text}</>;

    const pattern = new RegExp(`(${replacements.map((r) => r.label).join("|")})`, "g");
    const parts = text.split(pattern);

    return (
      <>
        {parts.map((part, i) => {
          const match = replacements.find((r) => r.label === part);
          return match ? (
            <a
              key={i}
              href={match.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-2 decoration-foreground/40 hover:decoration-foreground transition-colors"
            >
              {part}
            </a>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </>
    );
  };

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

                  <div className="flex items-center gap-2 flex-wrap">
                    {(() => {
                      const pageUrl = window.location.href;
                      const share = buildShareUrls(pageUrl, post.title);
                      const iconBtn =
                        "inline-flex items-center justify-center h-9 w-9 rounded-md border transition-all duration-200";
                      return (
                        <>
                          <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Share:</span>
                          {/* Facebook */}
                          <a
                            href={share.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Share on Facebook"
                            className={`${iconBtn} border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white`}
                          >
                            <Facebook className="h-4 w-4" />
                          </a>
                          {/* LinkedIn */}
                          <a
                            href={share.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Share on LinkedIn"
                            className={`${iconBtn} border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                          {/* Threads */}
                          <a
                            href={share.threads}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Share on Threads"
                            className={`${iconBtn} border-foreground text-foreground hover:bg-foreground hover:text-background`}
                          >
                            <ThreadsIcon className="h-4 w-4" />
                          </a>
                          {/* X (Twitter) */}
                          <a
                            href={share.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Share on X"
                            className={`${iconBtn} border-foreground text-foreground hover:bg-foreground hover:text-background`}
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        </>
                      );
                    })()}
                    {post.sourceUrl ? (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={post.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Source{" "}
                          <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </Button>
                    ) : null}
                  </div>
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
                        {renderParagraph(block.text)}
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
