import { Helmet } from 'react-helmet-async';
import { absoluteBrandUrl, BRAND, formatPageTitle } from '@/config/brand';
import { canonicalUrl, pageMetadataFor } from '@/seo/routes';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  preloadImageHref?: string;
  preloadImageSrcSet?: string;
  preloadImageSizes?: string;
  preloadImageMedia?: string;
  url?: string;
  noindex?: boolean;
  jsonLd?: object;
  ogType?: 'website' | 'article';
}

const OG_IMAGE = absoluteBrandUrl(BRAND.assets.socialImage);

const SEO = ({
  title,
  description,
  image = OG_IMAGE,
  imageAlt,
  preloadImageHref,
  preloadImageSrcSet,
  preloadImageSizes,
  preloadImageMedia,
  url,
  noindex = false,
  jsonLd,
  ogType = 'website',
}: SEOProps) => {
  const pageUrl = canonicalUrl(url ?? '/');
  const routeMetadata = url ? pageMetadataFor(pageUrl) : undefined;
  const siteTitle = formatPageTitle(routeMetadata?.title ?? title);
  const cleanDescription = (routeMetadata?.description ?? description)
    .replace(/\s+/g, ' ')
    .trim();
  const absoluteImage = absoluteBrandUrl(image);
  const serializedJsonLd = jsonLd
    ? JSON.stringify(jsonLd).replace(/</g, '\\u003c')
    : null;

  return (
    <Helmet>
      <html lang={BRAND.language} />
      <title>{siteTitle}</title>
      <meta name="description" content={cleanDescription} />
      {preloadImageHref && (
        <link
          rel="preload"
          as="image"
          href={preloadImageHref}
          imageSrcSet={preloadImageSrcSet}
          imageSizes={preloadImageSizes}
          media={preloadImageMedia}
        />
      )}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      {!noindex && <link rel="canonical" href={pageUrl} />}
      {serializedJsonLd && (
        <script type="application/ld+json">
          {serializedJsonLd}
        </script>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={BRAND.openGraphLocale} />
      <meta property="og:site_name" content={BRAND.name} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt ?? siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={imageAlt ?? siteTitle} />
    </Helmet>
  );
};

export default SEO;
