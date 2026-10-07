import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url }) {
  const siteName = "Crelova creative";
  const defaultDescription = "Crelova creative is a dedicated digital marketing agency transforming your vision into reality through innovative marketing, SEO, and web development strategies.";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Transforming Vision into Reality`;
  const metaDescription = description || defaultDescription;
  const siteUrl = "https://crelovacreative.com";
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;
  const image = `${siteUrl}/assets/logo.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
