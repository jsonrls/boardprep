import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const siteUrl = "https://www.myboardprep.org";

const indexablePaths = [
  "/",
  "/review-class",
  "/review/vet",
  "/review/fisheries",
  "/review/agriculture",
  "/review/ftle",
  "/review/abe",
  "/question-drills",
  "/our-products",
  "/about",
  "/contact",
  "/press",
];

const noindexPaths = [
  "/enroll",
  "/practice",
  "/classroom",
  "/ios",
  "/lite",
  "/check-your-email",
  "/subscription-confirmed",
  "/api-endpoints",
  "/search",
];

const failures = [];
const titles = new Map();
const descriptions = new Map();

const fail = (message) => failures.push(message);

const htmlPathFor = (route) =>
  route === "/"
    ? path.join(dist, "index.html")
    : path.join(dist, `${route.slice(1)}.html`);

const readHtml = (route) => {
  const file = htmlPathFor(route);
  if (!fs.existsSync(file)) {
    fail(`${route}: missing prerendered file ${path.relative(root, file)}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
};

const attribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
};

const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];

const matchingMeta = (html, name) =>
  tags(html, "meta").filter((tag) => attribute(tag, "name").toLowerCase() === name);

const canonicalTags = (html) =>
  tags(html, "link").filter((tag) =>
    attribute(tag, "rel")
      .toLowerCase()
      .split(/\s+/)
      .includes("canonical"),
  );

const titleValues = (html) =>
  [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((match) =>
    match[1].replace(/\s+/g, " ").trim(),
  );

const visibleWordCount = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

const checkJsonLd = (route, html) => {
  const scripts = [
    ...html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  if (scripts.length === 0) fail(`${route}: missing JSON-LD`);
  scripts.forEach((match, index) => {
    try {
      JSON.parse(match[1]);
    } catch {
      fail(`${route}: invalid JSON-LD block ${index + 1}`);
    }
  });
};

const checkHeadingOrder = (route, html) => {
  const levels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  if (levels.filter((level) => level === 1).length !== 1) {
    fail(`${route}: expected exactly one H1, found ${levels.filter((level) => level === 1).length}`);
  }
  for (let index = 1; index < levels.length; index += 1) {
    if (levels[index] > levels[index - 1] + 1) {
      fail(`${route}: heading order skips from H${levels[index - 1]} to H${levels[index]}`);
      break;
    }
  }
};

const checkLocalAssets = (route, html) => {
  const candidates = [];
  for (const tag of tags(html, "img")) {
    const hasAltAttribute = /\balt(?:\s*=|\s|>)/i.test(tag);
    const alt = attribute(tag, "alt");
    const isDecorative =
      attribute(tag, "aria-hidden").toLowerCase() === "true" ||
      ["none", "presentation"].includes(attribute(tag, "role").toLowerCase());
    if (!hasAltAttribute) fail(`${route}: image is missing an alt attribute`);
    if (hasAltAttribute && !alt && !isDecorative) {
      fail(`${route}: image has empty alt text but is not marked decorative`);
    }
    candidates.push(attribute(tag, "src"));
    const srcset = attribute(tag, "srcset");
    candidates.push(...srcset.split(",").map((entry) => entry.trim().split(/\s+/)[0]));
  }
  for (const tag of [...tags(html, "link"), ...tags(html, "script")]) {
    candidates.push(attribute(tag, tag.toLowerCase().startsWith("<link") ? "href" : "src"));
  }

  for (const candidate of candidates.filter(Boolean)) {
    if (!candidate.startsWith("/")) continue;
    const pathname = decodeURIComponent(candidate.split(/[?#]/)[0]);
    const assetFile = path.join(dist, pathname);
    if (!fs.existsSync(assetFile)) fail(`${route}: missing local asset ${pathname}`);
  }
};

for (const route of indexablePaths) {
  const html = readHtml(route);
  if (!html) continue;

  const routeTitles = titleValues(html);
  const descriptionTags = matchingMeta(html, "description");
  const routeCanonicals = canonicalTags(html);
  const expectedCanonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;

  if (routeTitles.length !== 1 || !routeTitles[0]) {
    fail(`${route}: expected one non-empty title, found ${routeTitles.length}`);
  } else {
    const duplicate = titles.get(routeTitles[0]);
    if (duplicate) fail(`${route}: title duplicates ${duplicate}`);
    titles.set(routeTitles[0], route);
  }

  if (descriptionTags.length !== 1 || !attribute(descriptionTags[0] ?? "", "content")) {
    fail(`${route}: expected one non-empty meta description, found ${descriptionTags.length}`);
  } else {
    const value = attribute(descriptionTags[0], "content");
    const duplicate = descriptions.get(value);
    if (duplicate) fail(`${route}: description duplicates ${duplicate}`);
    descriptions.set(value, route);
  }

  if (routeCanonicals.length !== 1) {
    fail(`${route}: expected one canonical, found ${routeCanonicals.length}`);
  } else if (attribute(routeCanonicals[0], "href") !== expectedCanonical) {
    fail(
      `${route}: canonical is ${attribute(routeCanonicals[0], "href")}, expected ${expectedCanonical}`,
    );
  }

  if (html.includes("file:///")) fail(`${route}: contains a file:/// URL`);
  checkHeadingOrder(route, html);
  checkJsonLd(route, html);
  checkLocalAssets(route, html);
}

for (const route of noindexPaths) {
  const html = readHtml(route);
  if (!html) continue;
  const robots = matchingMeta(html, "robots").map((tag) => attribute(tag, "content").toLowerCase());
  if (!robots.some((value) => value.includes("noindex"))) fail(`${route}: missing noindex`);
  if (canonicalTags(html).length !== 0) fail(`${route}: noindex page should not have a canonical`);
  if (html.includes("file:///")) fail(`${route}: contains a file:/// URL`);
  checkLocalAssets(route, html);
}

const sitemapFile = path.join(dist, "sitemap.xml");
if (!fs.existsSync(sitemapFile)) {
  fail("sitemap.xml: missing from dist");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  for (const route of indexablePaths) {
    const expected = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
    if (!sitemapUrls.includes(expected)) fail(`sitemap.xml: missing ${expected}`);
  }
  for (const route of noindexPaths) {
    if (sitemapUrls.includes(`${siteUrl}${route}`)) fail(`sitemap.xml: includes noindex route ${route}`);
  }
}

const questionDrillsHtml = readHtml("/question-drills");
if (questionDrillsHtml && visibleWordCount(questionDrillsHtml) < 500) {
  fail("/question-drills: fewer than 500 prerendered visible words");
}

const pressHtml = readHtml("/press");
for (const href of ["/review-class", "/question-drills", "/our-products"]) {
  if (pressHtml && !pressHtml.includes(`href="${href}"`)) fail(`/press: missing link to ${href}`);
}

if (failures.length > 0) {
  console.error(`SEO build verification failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `SEO build verification passed for ${indexablePaths.length} indexable and ${noindexPaths.length} noindex routes.`,
);
