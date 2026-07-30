export const BRAND = {
  name: "BoardPrep",
  alternateName: "MyBoardPrep",
  legalName: "Board Prep Solutions, Incorporated",
  siteUrl: "https://www.myboardprep.org",
  language: "en-PH",
  openGraphLocale: "en_PH",
  email: "acewithboardprep@gmail.com",
  phone: {
    display: "+63 917 142 9725",
    e164: "+639171429725",
  },
  address: {
    street:
      "Level 10-1 Fort Legend Tower, 31st Street & 3rd Avenue, Bonifacio Global City",
    locality: "Taguig City",
    region: "Metro Manila",
    postalCode: "1634",
    countryCode: "PH",
    country: "Philippines",
    full:
      "Level 10-1 Fort Legend Tower, 31st Street & 3rd Avenue, Bonifacio Global City, Taguig City, Metro Manila 1634, Philippines",
  },
  social: {
    facebook: "https://www.facebook.com/myboardprep",
    instagram: "https://www.instagram.com/myboardprep/",
    linkedin: "https://www.linkedin.com/company/board-prep/",
    tiktok: "https://www.tiktok.com/@myboardprep",
  },
  assets: {
    logo: "/favicon-512.png",
    socialImage: "/og-image.png",
  },
} as const;

export const PRODUCT_LINKS = {
  drills: "https://class.myboardprep.com/",
  mobileApp:
    "https://play.google.com/store/apps/details?id=com.myboardprep.bpsmobile&hl=en-US",
  mobileAppIos: "https://apps.apple.com/ph/app/boardprep/id6741724168",
  classroom: "https://lms2.myboardprep.com/",
  lite: "https://apps.apple.com/ca/app/boardprep-lite/id6756837074",
  liteAndroid:
    "https://play.google.com/store/apps/details?id=com.boardprepsolutionsincorporated.boardpreprlite",
  nextSteps: "https://nextstepsph.com/",
} as const;

export const BRAND_SOCIAL_URLS = Object.values(BRAND.social);

export function formatPageTitle(title: string): string {
  const cleanTitle = title.trim();
  if (!cleanTitle) return BRAND.name;
  return cleanTitle.toLocaleLowerCase("en-PH").includes(BRAND.name.toLowerCase())
    ? cleanTitle
    : `${cleanTitle} | ${BRAND.name}`;
}

export function absoluteBrandUrl(pathOrUrl: string): string {
  return new URL(pathOrUrl, BRAND.siteUrl).toString();
}
