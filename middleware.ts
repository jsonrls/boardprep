import { INDEXABLE_ROUTES, canonicalUrl } from "./src/seo/routes.js";
import { buildArticlePageSchema } from "./src/seo/schema.js";
import {
  absoluteBrandUrl,
  BRAND,
  formatPageTitle,
} from "./src/config/brand.js";
import { metaDescriptionFromHtml } from "./src/seo/meta.js";

const DEFAULT_OG_IMAGE = absoluteBrandUrl(BRAND.assets.socialImage);
const DEFAULT_OG_DESCRIPTION =
  "Master your licensure exams with BoardPrep question drills, study tools, and expert-led review classes.";
const PUBLIC_API_BASE_URL =
  process.env.PUBLIC_API_BASE_URL ||
  process.env.VITE_API_URL ||
  process.env.API_BASE_URL ||
  "https://boardprep-backend.vercel.app/api";

type PublicPressItem = {
  id?: string | null;
  title?: string | null;
  content?: string | null;
  author?: string | null;
  imageUrl?: string | null;
  date?: string | null;
  updatedAt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

type PressLookup =
  | { status: "found"; item: Required<Pick<PublicPressItem, "title">> & PublicPressItem }
  | { status: "not-found" }
  | { status: "unavailable" };

function excerptFromHtml(html: string, maxLength = 155): string {
  return metaDescriptionFromHtml(html, maxLength) || DEFAULT_OG_DESCRIPTION;
}

function toAbsoluteImageUrl(image: string | null | undefined): string {
  if (!image) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(image)) return image;
  return absoluteBrandUrl(image);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeXml(value: string): string {
  return escapeHtml(value).replace(/'/g, "&apos;");
}

function dateOnly(value: string | null | undefined): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

async function fetchPressById(articleId: string): Promise<PressLookup> {
  try {
    const endpoint = `${PUBLIC_API_BASE_URL.replace(/\/+$/, "")}/public/press/${encodeURIComponent(articleId)}`;
    const response = await fetch(endpoint, { headers: { accept: "application/json" } });

    if (response.status === 404) return { status: "not-found" };
    if (!response.ok) return { status: "unavailable" };

    const payload = (await response.json()) as { item?: PublicPressItem | null };
    if (!payload.item?.title) return { status: "not-found" };
    return { status: "found", item: payload.item as Required<Pick<PublicPressItem, "title">> & PublicPressItem };
  } catch {
    return { status: "unavailable" };
  }
}

async function fetchPressList(): Promise<PublicPressItem[]> {
  try {
    const endpoint = `${PUBLIC_API_BASE_URL.replace(/\/+$/, "")}/public/press`;
    const response = await fetch(endpoint, { headers: { accept: "application/json" } });
    if (!response.ok) return [];
    const payload = (await response.json()) as { items?: PublicPressItem[] };
    return Array.isArray(payload.items) ? payload.items : [];
  } catch {
    return [];
  }
}

function buildArticleHead(url: string, item: PublicPressItem): string {
  const editorialTitle = item.title || `${BRAND.name} article`;
  const title = formatPageTitle(item.seoTitle?.trim() || editorialTitle);
  const description = excerptFromHtml(
    item.seoDescription?.trim() || item.content || DEFAULT_OG_DESCRIPTION,
  );
  const image = toAbsoluteImageUrl(item.imageUrl);
  const articleId = decodeURIComponent(new URL(url).pathname.split("/").pop() || "article");
  const structuredData = JSON.stringify(
    buildArticlePageSchema({
      id: item.id || articleId,
      title: editorialTitle,
      description,
      image,
      author: item.author || `${BRAND.name} Editorial Team`,
      datePublished: item.date,
      dateModified: item.updatedAt ?? item.date,
    }),
  ).replace(/</g, "\\u003c");

  return `
    <title data-rh="true">${escapeHtml(title)}</title>
    <meta data-rh="true" name="description" content="${escapeHtml(description)}" />
    <meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link data-rh="true" rel="canonical" href="${escapeHtml(url)}" />
    <meta data-rh="true" property="og:type" content="article" />
    <meta data-rh="true" property="og:locale" content="${BRAND.openGraphLocale}" />
    <meta data-rh="true" property="og:site_name" content="${BRAND.name}" />
    <meta data-rh="true" property="og:url" content="${escapeHtml(url)}" />
    <meta data-rh="true" property="og:title" content="${escapeHtml(title)}" />
    <meta data-rh="true" property="og:description" content="${escapeHtml(description)}" />
    <meta data-rh="true" property="og:image" content="${escapeHtml(image)}" />
    <meta data-rh="true" property="og:image:width" content="1200" />
    <meta data-rh="true" property="og:image:height" content="630" />
    <meta data-rh="true" property="og:image:alt" content="${escapeHtml(editorialTitle)}" />
    <meta data-rh="true" name="twitter:card" content="summary_large_image" />
    <meta data-rh="true" name="twitter:url" content="${escapeHtml(url)}" />
    <meta data-rh="true" name="twitter:title" content="${escapeHtml(title)}" />
    <meta data-rh="true" name="twitter:description" content="${escapeHtml(description)}" />
    <meta data-rh="true" name="twitter:image" content="${escapeHtml(image)}" />
    <meta data-rh="true" name="twitter:image:alt" content="${escapeHtml(editorialTitle)}" />
    <script data-rh="true" type="application/ld+json">${structuredData}</script>`;
}

function buildNotFoundHtml(): string {
  return `<!doctype html>
<html lang="${BRAND.language}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Article Not Found | ${BRAND.name}</title>
    <meta name="robots" content="noindex, follow" />
  </head>
  <body><main><h1>Article not found</h1><p>The requested ${BRAND.name} article does not exist.</p></main></body>
</html>`;
}

function buildUnavailableResponse(): Response {
  return new Response("Press content is temporarily unavailable.", {
    status: 503,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Retry-After": "300",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}

async function buildSitemap(): Promise<Response> {
  const pressItems = await fetchPressList();
  const staticEntries = INDEXABLE_ROUTES.map(
    ({ path, changeFrequency, priority }) => `  <url>
    <loc>${escapeXml(canonicalUrl(path))}</loc>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
  );
  const pressEntries = pressItems
    .filter((item): item is PublicPressItem & { id: string } => Boolean(item.id))
    .map((item) => {
      const lastModified = dateOnly(item.updatedAt ?? item.date);
      return `  <url>
    <loc>${escapeXml(canonicalUrl(`/press/${item.id}`))}</loc>${
      lastModified ? `\n    <lastmod>${lastModified}</lastmod>` : ""
    }
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...pressEntries].join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

export default async function middleware(request: Request): Promise<Response | undefined> {
  const requestUrl = new URL(request.url);

  if (requestUrl.pathname === "/sitemap.xml") {
    return buildSitemap();
  }

  const pressMatch = requestUrl.pathname.match(/^\/press\/([^/]+)\/?$/);
  if (!pressMatch) return undefined;

  const lookup = await fetchPressById(pressMatch[1]);
  if (lookup.status === "not-found") {
    return new Response(buildNotFoundHtml(), {
      status: 404,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }
  if (lookup.status === "unavailable") return buildUnavailableResponse();

  const shellResponse = await fetch(new URL("/app-shell", request.url), {
    headers: { accept: "text/html" },
  });
  if (!shellResponse.ok) return buildUnavailableResponse();

  const articleUrl = canonicalUrl(requestUrl.pathname);
  const shell = await shellResponse.text();
  const html = shell.replace("</head>", `${buildArticleHead(articleUrl, lookup.item)}\n</head>`);
  const headers = new Headers(shellResponse.headers);
  headers.delete("content-length");
  headers.delete("etag");
  headers.delete("x-robots-tag");
  headers.set("Content-Type", "text/html; charset=utf-8");
  headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");

  return new Response(html, { status: 200, headers });
}

export const config = {
  matcher: ["/sitemap.xml", "/press/:path*"],
};
