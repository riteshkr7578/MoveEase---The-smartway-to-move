import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogImage, ogType = 'website' }) => {
  const siteName = 'MoveEase';
  const defaultTitle = 'MoveEase - The Smart Way to Move | Packers and Movers Search';
  const defaultDescription = 'MoveEase is your one-stop solution for finding reliable and affordable packers and movers. We offer home shifting, office relocation, and vehicle transport services.';
  const defaultKeywords = 'packers and movers, moving company, home shifting, office relocation, vehicle transport, MoveEase, local movers';

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const seoUrl = canonical || window.location.href;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) for Local Business/Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "MoveEase",
          "description": defaultDescription,
          "serviceType": "Moving and Relocation Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MoveEase",
            "image": ogImage || "/fav.png"
          },
          "areaServed": "India",
          "keywords": defaultKeywords
        })}
      </script>
    </Helmet>
  );
};

export default SEO;