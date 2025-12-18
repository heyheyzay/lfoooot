import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#013E5C',
};

export const metadata: Metadata = {
  title: "Everything Football, One Smart Directory",
  description: "Discover the best curated tools for football fans, analysts, creators, and businesses. Updated weekly.",
  keywords: ["football", "soccer", "tools", "directory", "analytics", "fantasy football", "betting", "football apps", "football platforms", "football resources"],
  authors: [{ name: "Footfolio" }],
  creator: "Footfolio",
  publisher: "Footfolio",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "Everything Football, One Smart Directory",
    description: "Discover the best curated tools for football fans, analysts, creators, and businesses. Updated weekly.",
    siteName: "Lfoooot",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lfoooot - Everything Football, One Smart Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Everything Football, One Smart Directory",
    description: "Discover the best curated tools for football fans, analysts, creators, and businesses. Updated weekly.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lfoooot',
    description: 'Discover the best curated tools for football fans, analysts, creators, and businesses. Updated weekly.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#013E5C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
