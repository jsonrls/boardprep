import { BRAND, BRAND_SOCIAL_URLS, formatPageTitle } from "../config/brand.js";
import { PAGE_METADATA, SITE_URL, canonicalUrl, pageMetadataFor } from "./routes.js";

export type SchemaNode = Record<string, unknown>;

export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": SchemaNode[];
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

const organizationReference = {
  "@type": "EducationalOrganization",
  "@id": ORGANIZATION_ID,
  name: BRAND.name,
  url: SITE_URL,
};
const websiteReference = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BRAND.name,
  url: SITE_URL,
};

export const educationalOrganizationSchema: SchemaNode = {
  "@type": "EducationalOrganization",
  "@id": ORGANIZATION_ID,
  name: BRAND.name,
  alternateName: BRAND.alternateName,
  legalName: BRAND.legalName,
  url: SITE_URL,
  description:
    "BoardPrep provides online licensure examination review classes, question drills, and education technology for Philippine board exam takers.",
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}${BRAND.assets.logo}`,
    contentUrl: `${SITE_URL}${BRAND.assets.logo}`,
    width: 512,
    height: 512,
    caption: BRAND.name,
  },
  image: { "@id": LOGO_ID },
  email: BRAND.email,
  telephone: BRAND.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.locality,
    addressRegion: BRAND.address.region,
    postalCode: BRAND.address.postalCode,
    addressCountry: BRAND.address.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: BRAND.address.country,
  },
  knowsAbout: [
    "Philippine licensure examinations",
    "Board exam review classes",
    "Veterinary medicine review",
    "Fisheries review",
    "Agriculture review",
    "Food technology review",
    "Agricultural and biosystems engineering review",
    "Online learning",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: BRAND.phone.e164,
    email: BRAND.email,
    areaServed: BRAND.address.countryCode,
  },
  sameAs: BRAND_SOCIAL_URLS,
};

export const websiteSchema: SchemaNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: BRAND.name,
  alternateName: BRAND.alternateName,
  description:
    "Online board exam review classes, question drills, and study tools for Philippine licensure examinations.",
  inLanguage: BRAND.language,
  publisher: organizationReference,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export type ReviewProgramKey =
  | "vet"
  | "fisheries"
  | "agriculture"
  | "ftle"
  | "abe";

export type ReviewProgram = {
  key: ReviewProgramKey;
  path: string;
  enrollExam: string;
  name: string;
  examName: string;
  shortDescription: string;
  description: string;
  price: number;
  teaches: string[];
};

export const REVIEW_PROGRAMS: ReviewProgram[] = [
  {
    key: "vet",
    path: "/review/vet",
    enrollExam: "vet",
    name: "Veterinarian Licensure Examination Review Class",
    examName: "Veterinarian Licensure Examination",
    shortDescription: "Online preparation for the Veterinarian Licensure Exam.",
    description:
      "Online review program for the Veterinarian Licensure Examination with guided lessons, practice drills, and mock examinations.",
    price: 10999,
    teaches: [
      "Veterinary medicine board exam concepts",
      "Veterinarian licensure exam strategies",
      "Veterinary practice question analysis",
    ],
  },
  {
    key: "fisheries",
    path: "/review/fisheries",
    enrollExam: "fisheries",
    name: "Fisheries Licensure Examination Review Class",
    examName: "Fisheries Licensure Examination",
    shortDescription: "Online preparation for the Fisheries Licensure Exam.",
    description:
      "Online review program for the Fisheries Licensure Examination with guided lessons, practice drills, and mock examinations.",
    price: 999,
    teaches: [
      "Aquaculture",
      "Capture fisheries",
      "Post-harvest fisheries",
      "Aquatic resources and ecology",
    ],
  },
  {
    key: "agriculture",
    path: "/review/agriculture",
    enrollExam: "agri",
    name: "Agriculturists Licensure Examination Review Class",
    examName: "Agriculturists Licensure Examination",
    shortDescription: "Online preparation for the Agriculturists Licensure Exam.",
    description:
      "Online review program for the Agriculturists Licensure Examination with guided lessons, practice quizzes, and mock examinations.",
    price: 6999,
    teaches: [
      "Crop science",
      "Soil science",
      "Animal science",
      "Agricultural economics",
      "Agricultural extension",
    ],
  },
  {
    key: "ftle",
    path: "/review/ftle",
    enrollExam: "ftle",
    name: "Food Technology Licensure Examination Review Class",
    examName: "Food Technology Licensure Examination",
    shortDescription: "Online preparation for the Food Technology Licensure Exam.",
    description:
      "Online review program for the Food Technology Licensure Examination with guided lessons, practice quizzes, and mock examinations.",
    price: 4999,
    teaches: [
      "Food chemistry",
      "Food microbiology",
      "Food processing technology",
      "Food safety and quality assurance",
    ],
  },
  {
    key: "abe",
    path: "/review/abe",
    enrollExam: "abe",
    name: "Agricultural and Biosystems Engineering Licensure Examination Review Class",
    examName: "Agricultural and Biosystems Engineering Licensure Examination",
    shortDescription: "Online preparation for the ABE Licensure Exam.",
    description:
      "Online review program for the Agricultural and Biosystems Engineering Licensure Examination with guided lessons and practice materials.",
    price: 4999,
    teaches: [
      "Agricultural structures",
      "Farm power and machinery",
      "Soil and water engineering",
      "Post-harvest and processing engineering",
    ],
  },
];

export const REVIEW_CLASS_FAQS = [
  {
    question: "Which licensure examinations does BoardPrep cover?",
    answer:
      "BoardPrep offers online review programs for the Veterinarian, Fisheries, Agriculturists, Food Technology, and Agricultural and Biosystems Engineering licensure examinations.",
  },
  {
    question: "Are BoardPrep review classes conducted online?",
    answer:
      "Yes. BoardPrep review classes are delivered online through a mix of live lectures, guided activities, and asynchronous materials that students can revisit.",
  },
  {
    question: "Do the review programs include practice questions and mock exams?",
    answer:
      "Yes. The programs combine concept lessons with curated practice questions, rationales, and exam-focused mock assessments.",
  },
  {
    question: "Can I study at my own pace?",
    answer:
      "Yes. The mix of scheduled and asynchronous learning lets students review recorded or self-paced materials while following the program's guided study flow.",
  },
  {
    question: "How do I enroll in a BoardPrep review class?",
    answer:
      "Choose the review program for your licensure examination, open its program page, and select Enroll to continue to the BoardPrep enrollment form.",
  },
] as const;

export function schemaGraph(nodes: SchemaNode[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function buildBreadcrumbSchema(
  pagePath: string,
  items: Array<{ name: string; path: string }>,
): SchemaNode {
  const pageUrl = canonicalUrl(pagePath);
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function buildWebPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  mainEntityId,
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
  mainEntityId?: string;
}): SchemaNode {
  const pageUrl = canonicalUrl(path);
  return {
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: BRAND.language,
    isPartOf: websiteReference,
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };
}

export function buildHomePageSchema(): JsonLdGraph {
  return schemaGraph([
    educationalOrganizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: formatPageTitle(PAGE_METADATA["/"].title),
      description: PAGE_METADATA["/"].description,
      inLanguage: BRAND.language,
      isPartOf: websiteReference,
      about: organizationReference,
    },
  ]);
}

export function buildFaqSchema(): SchemaNode {
  return buildFaqPageSchema("/review-class", REVIEW_CLASS_FAQS);
}

export function buildFaqPageSchema(
  pagePath: string,
  faqs: ReadonlyArray<{ question: string; answer: string }>,
): SchemaNode {
  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl(pagePath)}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function buildReviewClassPageSchema(): JsonLdGraph {
  const path = "/review-class";
  const pageUrl = canonicalUrl(path);
  const metadata = PAGE_METADATA[path];
  const courseList: SchemaNode = {
    "@type": "ItemList",
    "@id": `${pageUrl}#course-list`,
    name: "BoardPrep Online Review Classes",
    numberOfItems: REVIEW_PROGRAMS.length,
    itemListElement: REVIEW_PROGRAMS.map((program, index) => {
      const courseUrl = canonicalUrl(program.path);
      return {
        "@type": "ListItem",
        position: index + 1,
        url: courseUrl,
        item: {
          "@type": "Course",
          "@id": `${courseUrl}#course`,
          url: courseUrl,
          name: program.name,
          description: program.shortDescription,
          provider: organizationReference,
        },
      };
    }),
  };

  return schemaGraph([
    buildWebPageSchema({
      path,
      name: metadata.title,
      description: metadata.description,
      type: "CollectionPage",
      mainEntityId: `${pageUrl}#course-list`,
    }),
    buildBreadcrumbSchema(path, [
      { name: "Home", path: "/" },
      { name: "Review Classes", path },
    ]),
    courseList,
    buildFaqSchema(),
  ]);
}

export function buildReviewProgramPageSchema(
  key: ReviewProgramKey,
  image: string,
  faqs?: ReadonlyArray<{ question: string; answer: string }>,
): JsonLdGraph {
  const program = REVIEW_PROGRAMS.find((item) => item.key === key);
  if (!program) throw new Error(`Unknown review program schema key: ${key}`);

  const pageUrl = canonicalUrl(program.path);
  const metadata = pageMetadataFor(program.path);
  const courseId = `${pageUrl}#course`;
  const productId = `${pageUrl}#product`;
  const offerId = `${pageUrl}#offer`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}/${image.replace(/^\/+/, "")}`;
  const offer: SchemaNode = {
    "@type": "Offer",
    "@id": offerId,
    url: `${SITE_URL}/enroll?exam=${program.enrollExam}`,
    priceCurrency: "PHP",
    price: program.price.toString(),
    availability: "https://schema.org/InStock",
    seller: organizationReference,
    itemOffered: { "@id": productId },
  };

  const nodes: SchemaNode[] = [
    buildWebPageSchema({
      path: program.path,
      name: metadata?.title ?? program.name,
      description: metadata?.description ?? program.description,
      mainEntityId: courseId,
    }),
    buildBreadcrumbSchema(program.path, [
      { name: "Home", path: "/" },
      { name: "Review Classes", path: "/review-class" },
      { name: program.examName, path: program.path },
    ]),
    {
      "@type": "Course",
      "@id": courseId,
      url: pageUrl,
      name: program.name,
      description: program.shortDescription,
      provider: organizationReference,
      inLanguage: BRAND.language,
      educationalLevel: "Professional licensure examination preparation",
      about: program.examName,
      image: imageUrl,
      teaches: program.teaches,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["online", "synchronous", "asynchronous"],
      },
      offers: { "@id": offerId },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    },
    {
      "@type": "Product",
      "@id": productId,
      url: pageUrl,
      name: program.name,
      description: program.description,
      image: imageUrl,
      brand: organizationReference,
      category: "Online licensure examination review program",
      isRelatedTo: { "@id": courseId },
      offers: { "@id": offerId },
    },
    offer,
  ];

  if (faqs?.length) nodes.push(buildFaqPageSchema(program.path, faqs));
  return schemaGraph(nodes);
}

export function buildBasicPageSchema({
  path,
  name,
  description,
  type,
  breadcrumbs,
  aboutOrganization = false,
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
  breadcrumbs: Array<{ name: string; path: string }>;
  aboutOrganization?: boolean;
}): JsonLdGraph {
  const metadata = pageMetadataFor(path);
  const page = buildWebPageSchema({
    path,
    name: metadata?.title ?? name,
    description: metadata?.description ?? description,
    type,
  });
  if (aboutOrganization) page.about = organizationReference;
  return schemaGraph([page, buildBreadcrumbSchema(path, breadcrumbs)]);
}

export type ArticleSchemaInput = {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished?: string | null;
  dateModified?: string | null;
};

export function buildArticlePageSchema(input: ArticleSchemaInput): JsonLdGraph {
  const path = `/press/${input.id}`;
  const pageUrl = canonicalUrl(path);
  const articleId = `${pageUrl}#article`;
  return schemaGraph([
    buildWebPageSchema({
      path,
      name: input.title,
      description: input.description,
      type: "WebPage",
      mainEntityId: articleId,
    }),
    buildBreadcrumbSchema(path, [
      { name: "Home", path: "/" },
      { name: "Press", path: "/press" },
      { name: input.title, path },
    ]),
    {
      "@type": "Article",
      "@id": articleId,
      headline: input.title,
      description: input.description,
      image: [input.image],
      datePublished: input.datePublished ?? undefined,
      dateModified: input.dateModified ?? input.datePublished ?? undefined,
      author: /board\s*prep/i.test(input.author)
        ? organizationReference
        : {
            "@type": "Person",
            name: input.author || `${BRAND.name} Editorial Team`,
          },
      publisher: {
        ...organizationReference,
        logo: {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          url: `${SITE_URL}${BRAND.assets.logo}`,
          width: 512,
          height: 512,
        },
      },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      inLanguage: BRAND.language,
    },
  ]);
}

export function buildAggregateRatingSchema({
  ratingValue,
  ratingCount,
  reviewCount,
}: {
  ratingValue: number;
  ratingCount?: number;
  reviewCount?: number;
}): SchemaNode | null {
  const hasValidRating =
    Number.isFinite(ratingValue) && ratingValue >= 1 && ratingValue <= 5;
  const hasValidCount =
    (Number.isInteger(ratingCount) && (ratingCount ?? 0) > 0) ||
    (Number.isInteger(reviewCount) && (reviewCount ?? 0) > 0);
  if (!hasValidRating || !hasValidCount) return null;
  return {
    "@type": "AggregateRating",
    ratingValue,
    bestRating: 5,
    worstRating: 1,
    ...(ratingCount ? { ratingCount } : {}),
    ...(reviewCount ? { reviewCount } : {}),
  };
}

export function buildReviewSchema({
  itemReviewedId,
  author,
  reviewBody,
  ratingValue,
  datePublished,
}: {
  itemReviewedId: string;
  author: string;
  reviewBody: string;
  ratingValue?: number;
  datePublished?: string;
}): SchemaNode | null {
  const hasValidRating =
    Number.isFinite(ratingValue) &&
    (ratingValue ?? 0) >= 1 &&
    (ratingValue ?? 0) <= 5;
  if (!itemReviewedId || !author || !reviewBody || !hasValidRating) return null;
  return {
    "@type": "Review",
    itemReviewed: { "@id": itemReviewedId },
    author: { "@type": "Person", name: author },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    ...(datePublished ? { datePublished } : {}),
  };
}
