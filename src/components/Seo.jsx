import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://siddshekhar.me').replace(/\/$/, '');
const pageTitle = 'Siddhant Shekhar | Computer Science Engineer Portfolio';
const pageDescription =
  'Portfolio of Siddhant Shekhar, a Computer Science Engineering student focused on full-stack development, projects, and certifications.';
const pageKeywords =
  'Siddhant Shekhar, portfolio, computer science engineer, full stack developer, react portfolio, web developer, projects, certifications';
const canonicalUrl = `${siteUrl}/`;
const ogImage = `${siteUrl}/og-image.jpg`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Siddhant Shekhar',
  url: siteUrl,
  email: 'mailto:shekharsidhant88@gmail.com',
  jobTitle: 'Computer Science Engineering Student',
  sameAs: [
    'https://github.com/siddhantshekhar18',
    'https://www.linkedin.com/in/siddhant-shekhar-776579254/',
    'https://x.com/SiddShekhar18',
    'https://www.instagram.com/dead.soul__18',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Siddhant Shekhar Portfolio',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function Seo() {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Siddhant Shekhar" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a1020" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Siddhant Shekhar portfolio preview" />
      <meta property="og:site_name" content="Siddhant Shekhar Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Siddhant Shekhar portfolio preview" />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
}
