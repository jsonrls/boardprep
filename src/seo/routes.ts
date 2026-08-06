import { BRAND } from "../config/brand";

export const SITE_URL = BRAND.siteUrl;

export type PageMetadata = {
  title: string;
  description: string;
};

export const PAGE_METADATA = {
  "/": {
    title: "Board Exam Review Philippines 2026",
    description:
      "Prepare for Philippine licensure exams with BoardPrep's expert-led online review classes, question drills, mock exams, and adaptive study tools.",
  },
  "/review-class": {
    title: "Online Board Exam Review Classes Philippines",
    description:
      "Compare online review classes for Veterinary Medicine, Fisheries, Agriculture, Food Technology, and ABE licensure exams. View courses, features, and fees.",
  },
  "/review/vet": {
    title: "Veterinary Medicine Board Exam Review 2026",
    description:
      "Join BoardPrep's online Veterinary Medicine review for the 2026 VLE. Get expert lessons, question drills, mock exams, AI study tools, and complete materials.",
  },
  "/review/fisheries": {
    title: "Fisheries Board Exam Review 2026",
    description:
      "Prepare for the 2026 Fisheries Professionals Licensure Exam with expert-led lessons, targeted drills, mock exams, AI study tools, and complete materials.",
  },
  "/review/agriculture": {
    title: "Agriculture Board Exam Review 2026",
    description:
      "Prepare for the 2026 Agriculturists Licensure Examination with expert mentors, PRC-aligned lessons, question drills, mock exams, and AI study tools.",
  },
  "/review/ftle": {
    title: "Food Technology Board Exam Review 2026",
    description:
      "Prepare for the 2026 Food Technologists Licensure Exam with expert-led lessons, question drills, mock exams, AI study tools, and complete review materials.",
  },
  "/review/abe": {
    title: "Agricultural Engineering Board Review 2026",
    description:
      "Prepare for the 2026 ABELE with expert-led lessons, engineering problem drills, mock exams, AI study tools, complete materials, and transparent fees.",
  },
  "/question-drills": {
    title: "Board Exam Question Drills Philippines",
    description:
      "Practice thousands of licensure exam questions for Veterinary Medicine, Fisheries, Agriculture, Food Technology, and ABE, with expert-written rationales.",
  },
  "/our-products": {
    title: "Board Exam Review Products & Study Tools",
    description:
      "Compare BoardPrep question drills, online review classes, Classroom LMS, mobile study tools, and BoardPrep Lite for Philippine licensure exams.",
  },
  "/about": {
    title: "About Our Board Exam Review Platform",
    description:
      "Learn how BoardPrep builds accessible online review programs, question drills, and education technology for Philippine licensure exam candidates.",
  },
  "/contact": {
    title: "Contact & Enrollment Support",
    description:
      "Contact BoardPrep for help choosing a review program, enrollment, payment, account access, or licensure exam preparation in the Philippines.",
  },
  "/press": {
    title: "Board Exam News & Education Insights",
    description:
      "Read BoardPrep news, licensure exam updates, education technology insights, learning research, product announcements, and student resources in the Philippines.",
  },
} as const satisfies Record<string, PageMetadata>;

export type SitemapRoute = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  title: string;
  description: string;
};

export const INDEXABLE_ROUTES: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1, ...PAGE_METADATA["/"] },
  {
    path: "/review-class",
    changeFrequency: "monthly",
    priority: 0.9,
    ...PAGE_METADATA["/review-class"],
  },
  {
    path: "/review/vet",
    changeFrequency: "monthly",
    priority: 0.9,
    ...PAGE_METADATA["/review/vet"],
  },
  {
    path: "/review/fisheries",
    changeFrequency: "monthly",
    priority: 0.9,
    ...PAGE_METADATA["/review/fisheries"],
  },
  {
    path: "/review/agriculture",
    changeFrequency: "monthly",
    priority: 0.9,
    ...PAGE_METADATA["/review/agriculture"],
  },
  {
    path: "/review/ftle",
    changeFrequency: "monthly",
    priority: 0.9,
    ...PAGE_METADATA["/review/ftle"],
  },
  {
    path: "/review/abe",
    changeFrequency: "monthly",
    priority: 0.9,
    ...PAGE_METADATA["/review/abe"],
  },
  {
    path: "/question-drills",
    changeFrequency: "monthly",
    priority: 0.8,
    ...PAGE_METADATA["/question-drills"],
  },
  {
    path: "/our-products",
    changeFrequency: "monthly",
    priority: 0.8,
    ...PAGE_METADATA["/our-products"],
  },
  {
    path: "/about",
    changeFrequency: "yearly",
    priority: 0.7,
    ...PAGE_METADATA["/about"],
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.7,
    ...PAGE_METADATA["/contact"],
  },
  {
    path: "/press",
    changeFrequency: "weekly",
    priority: 0.7,
    ...PAGE_METADATA["/press"],
  },
];

export const NOINDEX_ROUTES = [
  "/enroll",
  "/practice",
  "/classroom",
  "/ios",
  "/lite",
  "/check-your-email",
  "/subscription-confirmed",
  "/api-endpoints",
  "/search",
] as const;

export const PRERENDER_ROUTES = [
  ...INDEXABLE_ROUTES.map(({ path }) => path),
  ...NOINDEX_ROUTES,
];

export function normalizePathname(pathname: string): string {
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withLeadingSlash === "/") return "/";
  return withLeadingSlash.replace(/\/+$/, "");
}

export function pageMetadataFor(urlOrPath: string): PageMetadata | undefined {
  const url = new URL(urlOrPath, SITE_URL);
  const pathname = normalizePathname(url.pathname);
  return (PAGE_METADATA as Record<string, PageMetadata>)[pathname];
}

export function canonicalUrl(urlOrPath = "/"): string {
  const url = new URL(urlOrPath, SITE_URL);
  url.protocol = "https:";
  url.host = new URL(SITE_URL).host;
  url.search = "";
  url.hash = "";
  url.pathname = normalizePathname(url.pathname);
  return url.toString().replace(/\/$/, url.pathname === "/" ? "/" : "");
}
