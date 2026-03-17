import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-transparent.png";
import { ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";

const BASE_OG_IMAGE = "https://www.myboardprep.org/og-image.png";

const htmlToText = (html: string) => {
  if (typeof document === "undefined") {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  }
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
};

const htmlToParagraphs = (html: string) => {
  // Turn common block boundaries into newlines before stripping tags.
  const withBreaks = html
    .replace(/<\s*br\s*\/?\s*>/gi, "\n")
    .replace(/<\/\s*p\s*>/gi, "\n\n")
    .replace(/<\/\s*div\s*>/gi, "\n\n")
    .replace(/<\/\s*li\s*>/gi, "\n")
    .replace(/<\/\s*h[1-6]\s*>/gi, "\n\n");

  const text = htmlToText(withBreaks);
  return text
    .split(/\n{2,}/g)
    .map((p) => p.trim())
    .filter(Boolean);
};

const renderRichHtml = (html: string): React.ReactNode[] => {
  if (typeof document === "undefined") {
    const paragraphs = htmlToParagraphs(html);
    return paragraphs.map((t, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed">
        {t}
      </p>
    ));
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  const allowed = new Set([
    "P",
    "BR",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "UL",
    "OL",
    "LI",
    "A",
    "STRONG",
    "EM",
    "B",
    "I",
    "BLOCKQUOTE",
    "CODE",
    "PRE",
    "SPAN",
    "DIV",
  ]);

  const walk = (node: Node, key: string): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) return (node.textContent ?? "").replace(/\s+/g, " ");
    if (node.nodeType !== Node.ELEMENT_NODE) return null;

    const el = node as HTMLElement;
    const tag = el.tagName.toUpperCase();

    if (!allowed.has(tag)) {
      return (
        <React.Fragment key={key}>
          {Array.from(el.childNodes).map((c, i) => walk(c, `${key}.${i}`))}
        </React.Fragment>
      );
    }

    const children = Array.from(el.childNodes).map((c, i) => walk(c, `${key}.${i}`));

    switch (tag) {
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6": {
        const level = Number(tag.slice(1));
        const cls =
          level <= 2
            ? "font-display text-xl md:text-2xl text-foreground pt-2"
            : "font-display text-lg md:text-xl text-foreground pt-2";
        const Comp = tag.toLowerCase() as keyof JSX.IntrinsicElements;
        return (
          <Comp key={key} className={cls}>
            {children}
          </Comp>
        );
      }
      case "P":
        return (
          <p key={key} className="text-[#121212] leading-relaxed">
            {children}
          </p>
        );
      case "BR":
        return <br key={key} />;
      case "UL":
        return (
          <ul key={key} className="list-disc pl-6 space-y-2 text-[#121212]">
            {children}
          </ul>
        );
      case "OL":
        return (
          <ol key={key} className="list-decimal pl-6 space-y-2 text-[#121212]">
            {children}
          </ol>
        );
      case "LI":
        return (
          <li key={key} className="leading-relaxed">
            {children}
          </li>
        );
      case "A": {
        const href = el.getAttribute("href") || "#";
        const safeHref =
          href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")
            ? href
            : "#";
        return (
          <a
            key={key}
            href={safeHref}
            target={safeHref.startsWith("http") ? "_blank" : undefined}
            rel={safeHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-semibold text-foreground underline underline-offset-2 decoration-foreground/40 hover:decoration-foreground transition-colors break-words"
          >
            {children}
          </a>
        );
      }
      case "STRONG":
      case "B":
        return (
          <strong key={key} className="text-foreground">
            {children}
          </strong>
        );
      case "EM":
      case "I":
        return <em key={key}>{children}</em>;
      case "BLOCKQUOTE":
        return (
          <blockquote
            key={key}
            className="border-l-4 border-border pl-4 italic text-[#121212]"
          >
            {children}
          </blockquote>
        );
      case "CODE":
        return (
          <code key={key} className="font-mono text-sm bg-muted px-1 py-0.5 rounded">
            {children}
          </code>
        );
      case "PRE":
        return (
          <pre key={key} className="font-mono text-sm bg-muted p-4 rounded overflow-auto">
            {children}
          </pre>
        );
      // span/div are treated as passthrough containers (we ignore inline styles)
      case "SPAN":
      case "DIV":
        return <React.Fragment key={key}>{children}</React.Fragment>;
      default: {
        const Comp = tag.toLowerCase() as keyof JSX.IntrinsicElements;
        return <Comp key={key}>{children}</Comp>;
      }
    }
  };

  const blocks = Array.from(doc.body.childNodes)
    .map((n, i) => walk(n, `b${i}`))
    .filter(Boolean);

  // If content is all inline (e.g. a single div/span), ensure paragraphs still show nicely.
  if (blocks.length === 0) return [];
  return blocks as React.ReactNode[];
};

/** Updates a <meta> tag by property or name, then returns a restore function. */
function swapMetaContent(selector: string, newContent: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) return () => { };
  const prev = el.getAttribute("content") ?? "";
  el.setAttribute("content", newContent);
  return () => el.setAttribute("content", prev);
}

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

  type PressItem = {
    id: string;
    title: string;
    content: string;
    author: string;
    imageUrl?: string | null;
    date: string;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["public-press", id],
    enabled: typeof id === "string" && id.length > 0,
    queryFn: () => apiGet<{ item: PressItem }>(`/public/press/${id}`),
    staleTime: 60_000,
  });

  const post = data?.item;

  const formattedDate = useMemo(() => {
    if (!post?.date) return "";
    const d = new Date(post.date);
    if (Number.isNaN(d.getTime())) return post.date;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long" });
  }, [post?.date]);

  const readTime = useMemo(() => {
    const text = post?.content ?? "";
    const words = htmlToText(text).trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 220));
    return `${minutes} min read`;
  }, [post?.content]);

  const richNodes = useMemo(() => {
    const html = (post?.content ?? "").trim();
    if (!html) return [];
    return renderRichHtml(html);
  }, [post?.content]);

  // Dynamically update og:image for this article page; restore on unmount
  useEffect(() => {
    if (!post) return;
    const imageUrl =
      post.imageUrl && post.imageUrl.startsWith("http")
        ? post.imageUrl
        : post.imageUrl
          ? `https://www.myboardprep.org${post.imageUrl}`
          : BASE_OG_IMAGE;

    const restoreOg = swapMetaContent('meta[property="og:image"]', imageUrl);
    const restoreTwitter = swapMetaContent('meta[name="twitter:image"]', imageUrl);
    const restoreTitle = swapMetaContent('meta[property="og:title"]', post.title);
    const restoreDesc = swapMetaContent(
      'meta[property="og:description"]',
      htmlToText(post.content ?? "").slice(0, 160)
    );
    const restoreUrl = swapMetaContent(
      'meta[property="og:url"]',
      window.location.href
    );

    return () => {
      restoreOg();
      restoreTwitter();
      restoreTitle();
      restoreDesc();
      restoreUrl();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center py-20">
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                {isLoading ? "Loading article…" : "Article not found"}
              </h1>
              <p className="text-muted-foreground mb-8">
                {isLoading
                  ? "Please wait while we load this press item."
                  : "The press article you're looking for doesn't exist."}
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
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 text-[#121212]">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/press" className="inline-flex items-center gap-2 my-6 text-foreground hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to Press
            </Link>

            <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-soft">
              <div className="relative h-72 md:h-[420px] overflow-hidden">
                <img
                  src={
                    post.imageUrl ||
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop"
                  }
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <Badge className="bg-background/85 backdrop-blur text-foreground hover:bg-background">
                    Press/News
                  </Badge>
                  <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mt-4 leading-tight tracking-tight">
                    {post.title}
                  </h1>
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/85">
                    <span>{formattedDate}</span>
                    <span className="text-white/40">•</span>
                    <span>{readTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-12 lg:p-14">
                <div className="flex flex-col gap-8">
                  <div className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={logoFull}
                          alt="BoardPrep Solutions logo"
                          className="w-10 h-10 rounded-full bg-primary/10 object-cover"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground truncate">{post.author}</p>
                          <p className="text-xs text-muted-foreground">Press • Press/News</p>
                        </div>
                      </div>

                      {(() => {
                        const pageUrl = window.location.href;
                        const share = buildShareUrls(pageUrl, post.title);
                        const iconBtn =
                          "inline-flex items-center justify-center h-9 w-9 rounded-md border transition-all duration-200";
                        return (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-medium text-muted-foreground mr-1">
                              Share
                            </span>
                            <a
                              href={share.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Share on Facebook"
                              className={`${iconBtn} border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white`}
                            >
                              <Facebook className="h-4 w-4" />
                            </a>
                            <a
                              href={share.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Share on LinkedIn"
                              className={`${iconBtn} border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white`}
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                              href={share.threads}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Share on Threads"
                              className={`${iconBtn} border-foreground text-foreground hover:bg-foreground hover:text-background`}
                            >
                              <ThreadsIcon className="h-4 w-4" />
                            </a>
                            <a
                              href={share.x}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Share on X"
                              className={`${iconBtn} border-foreground text-foreground hover:bg-foreground hover:text-background`}
                            >
                              <Twitter className="h-4 w-4" />
                            </a>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  <article className="min-w-0">
                    <div className="space-y-6 text-[15px] md:text-base leading-relaxed">
                      {richNodes}
                    </div>
                  </article>
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
