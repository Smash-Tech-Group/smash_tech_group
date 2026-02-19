import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import Navbar from '@/features/components/Navbar';
import Footer from '@/features/components/Footer';
import TawkTo from '@/components/TawkTo';

export const metadata: Metadata = {
  title: 'Smash Technology | Building Digital Products That Power Businesses',
  description:
    'Smash Technology is a global technology company building digital products that power businesses and everyday experiences. We design and deploy scalable platforms focused on reliability, efficiency, and long-term value.',
  keywords: [
    'Smash Technology',
    'Smash Tech Group',
    'fintech',
    'digital products',
    'technology company',
    'Nigeria',
    'South Africa',
    'scalable platforms',
  ],
  authors: [{ name: 'Smash Technology' }],
  robots: 'index, follow',
  metadataBase: new URL('https://smashtechgroup.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://smashtechgroup.com',
    title: 'Smash Technology | Building Digital Products That Power Businesses',
    description:
      'A global technology company building digital products that power businesses and everyday experiences across industries and markets.',
    siteName: 'Smash Technology',
    images: [
      {
        url: '/fav.svg',
        width: 512,
        height: 512,
        alt: 'Smash Technology Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smash Technology | Building Digital Products That Power Businesses',
    description:
      'A global technology company building digital products that power businesses and everyday experiences.',
    images: ['/fav.svg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Smash Technology',
  alternateName: 'Smash Tech Group',
  url: 'https://smashtechgroup.com/',
  logo: 'https://smashtechgroup.com/static/media/smash-logo.63e10aec8ae7bd06fb4e.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+2349097403297',
      contactType: 'customer service',
      areaServed: ['NG', 'GH', 'CM', 'KE', 'NA', 'BW', 'US', 'GB', 'AE'],
      availableLanguage: ['en', 'Hausa', 'Yoruba', 'fr', 'es', 'Portuguese'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+2348100693634',
      contactType: 'sales',
      areaServed: [
        'NG', 'NE', 'GH', 'CM', 'ZA', 'CZ', 'UY', 'CO', 'FR', 'DE', 'IT', 'US', 'GB', 'TN', 'AE',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
        <TawkTo />
      </body>
    </html>
  );
}
