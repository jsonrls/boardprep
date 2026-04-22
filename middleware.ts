// Vercel Edge Middleware for Vite SPA
// Intercepts social media crawler requests to /press/:id routes
// and serves pre-rendered HTML with correct Open Graph meta tags.

const CRAWLER_UA_PATTERNS = [
    "facebookexternalhit",
    "facebookcatalog",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "whatsapp",
    "slackbot",
    "telegrambot",
    "discordbot",
    "pinterest",
    "googlebot",
    "bingbot",
    "applebot",
    "ia_archiver",
];

function isCrawler(userAgent: string): boolean {
    const ua = userAgent.toLowerCase();
    return CRAWLER_UA_PATTERNS.some((pattern) =>
        ua.includes(pattern.toLowerCase())
    );
}

const SITE_URL = "https://www.myboardprep.org";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_OG_DESCRIPTION =
    "Master your licensure exams with BoardPrep. Comprehensive question banks and expert review materials.";
const PUBLIC_API_BASE_URL =
    process.env.PUBLIC_API_BASE_URL ||
    process.env.VITE_API_URL ||
    process.env.API_BASE_URL ||
    "https://admin-boardprep.vercel.app/api";

type PublicPressItem = {
    title?: string | null;
    content?: string | null;
    imageUrl?: string | null;
};

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function excerptFromHtml(html: string, maxLength = 180): string {
    const text = stripHtml(html);
    if (!text) return DEFAULT_OG_DESCRIPTION;
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength).trimEnd()}...`;
}

function toAbsoluteImageUrl(image: string | null | undefined): string {
    if (!image) return DEFAULT_OG_IMAGE;
    if (/^https?:\/\//i.test(image)) return image;
    if (image.startsWith("/")) return `${SITE_URL}${image}`;
    return `${SITE_URL}/${image}`;
}

async function fetchPressMetaById(
    articleId: string
): Promise<{ title: string; description: string; image: string } | null> {
    try {
        const encodedId = encodeURIComponent(articleId);
        const endpoint = `${PUBLIC_API_BASE_URL.replace(/\/+$/, "")}/public/press/${encodedId}`;
        const res = await fetch(endpoint, {
            headers: { accept: "application/json" },
        });
        if (!res.ok) return null;
        const payload = (await res.json()) as { item?: PublicPressItem | null };
        const item = payload?.item;
        if (!item?.title) return null;

        return {
            title: item.title,
            description: excerptFromHtml(item.content ?? ""),
            image: toAbsoluteImageUrl(item.imageUrl),
        };
    } catch {
        return null;
    }
}

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

export default async function middleware(
    request: Request
): Promise<Response | undefined> {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";

    // Let regular browsers through unchanged
    if (!isCrawler(userAgent)) return undefined;

    const fullUrl = `${SITE_URL}${url.pathname}`;

    // /press index page
    if (url.pathname === "/press" || url.pathname === "/press/") {
        const html = buildMetaHtml(
            fullUrl,
            "BoardPrep Press | Insights for a Future-Ready Education",
            "Perspectives on workforce trends, policy shifts, and learning innovations shaping how institutions prepare students for changing careers.",
            DEFAULT_OG_IMAGE
        );
        return new Response(html, {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" },
        });
    }

    // /press/:id article page
    const pressMatch = url.pathname.match(/^\/press\/([^/]+)$/);
    if (!pressMatch) return undefined;

    const articleId = pressMatch[1];
    const meta = await fetchPressMetaById(articleId);
    const html = buildMetaHtml(
        fullUrl,
        meta?.title ?? "BoardPrep | Ace Your Board Exams",
        meta?.description ?? DEFAULT_OG_DESCRIPTION,
        meta?.image ?? DEFAULT_OG_IMAGE
    );
    return new Response(html, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
    });
}

export const config = {
    matcher: ["/press", "/press/:path*"],
};
