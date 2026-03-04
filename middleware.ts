// Vercel Edge Middleware for Vite SPA
// Intercepts social media crawler requests to /press/:id routes
// and serves pre-rendered HTML with correct Open Graph meta tags.

const CRAWLER_UA_PATTERNS = [
    "facebookexternalhit",
    "facebookcatalog",
    "Facebot",
    "Twitterbot",
    "LinkedInBot",
    "WhatsApp",
    "Slackbot",
    "TelegramBot",
    "Discordbot",
    "Pinterest",
    "Googlebot",
    "bingbot",
    "Applebot",
];

function isCrawler(userAgent: string): boolean {
    const ua = userAgent.toLowerCase();
    return CRAWLER_UA_PATTERNS.some((pattern) =>
        ua.includes(pattern.toLowerCase())
    );
}

// Mirrors src/data/press.ts — keep in sync when adding new articles
const PRESS_OG_DATA: Record<
    string,
    { title: string; description: string; image: string }
> = {
    "microcredentials-and-technology": {
        title:
            "Microcredentials and Technology: The Urgency for Schools to Shape the Future of Learning",
        description:
            "Work is changing faster than traditional curricula can keep up. Microcredentials can complement degrees with shorter, verifiable skill units, especially when powered by the right technology to track competencies and issue trusted credentials.",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
};

const SITE_URL = "https://www.myboardprep.org";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

function buildMetaHtml(
    url: string,
    title: string,
    description: string,
    image: string
): string {
    const escaped = (s: string) =>
        s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${escaped(title)}</title>
    <meta name="description" content="${escaped(description)}" />
    <meta property="og:title" content="${escaped(title)}" />
    <meta property="og:description" content="${escaped(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escaped(url)}" />
    <meta property="og:site_name" content="BoardPrep" />
    <meta property="og:image" content="${escaped(image)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escaped(title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@BoardPrep" />
    <meta name="twitter:title" content="${escaped(title)}" />
    <meta name="twitter:description" content="${escaped(description)}" />
    <meta name="twitter:image" content="${escaped(image)}" />
  </head>
  <body>
    <h1>${escaped(title)}</h1>
    <p>${escaped(description)}</p>
  </body>
</html>`;
}

export default function middleware(request: Request): Response | undefined {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";

    // Only intercept social media crawlers on /press/:id routes
    if (!isCrawler(userAgent)) return undefined;

    const pressMatch = url.pathname.match(/^\/press\/([^/]+)$/);
    if (!pressMatch) return undefined;

    const articleId = pressMatch[1];
    const og = PRESS_OG_DATA[articleId];

    const fullUrl = `${SITE_URL}${url.pathname}`;
    const title = og?.title ?? "BoardPrep | Ace Your Board Exams";
    const description =
        og?.description ??
        "Master your licensure exams with BoardPrep. Comprehensive question banks and expert review materials.";
    const image = og?.image ?? DEFAULT_OG_IMAGE;

    const html = buildMetaHtml(fullUrl, title, description, image);
    return new Response(html, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
    });
}

export const config = {
    matcher: ["/press/:path*"],
};
