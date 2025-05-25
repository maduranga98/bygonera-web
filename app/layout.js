// app/layout.js
import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

// Vintage serif font for headings and elegant text
const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

// Script font for decorative elements
const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

// Modern sans-serif for body text
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bygone Era Artist - Vintage Photography in Sri Lanka",
  description:
    "Professional vintage photography services in Kuliyapitiya, Sri Lanka. Specializing in elegant portrait sessions, wedding photography, and artistic vintage-style captures. Elegance in vintage frames.",
  keywords: [
    "vintage photography",
    "portrait photography",
    "wedding photographer",
    "Sri Lanka photographer",
    "Kuliyapitiya photographer",
    "vintage portraits",
    "artistic photography",
    "photo restoration",
    "bygone era",
    "vintage frames",
    "elegant photography",
  ],
  authors: [{ name: "Bygone Era Artist" }],
  creator: "Bygone Era Artist",
  publisher: "Bygone Era Artist",

  // Open Graph metadata for social media
  openGraph: {
    title: "Bygone Era Artist - Vintage Photography in Sri Lanka",
    description:
      "Capturing timeless elegance through vintage-inspired photography. Professional portrait and wedding photography services in Kuliyapitiya, Sri Lanka.",
    url: "https://bygone-era-artist.com",
    siteName: "Bygone Era Artist",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bygone Era Artist - Vintage Photography",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Bygone Era Artist - Vintage Photography",
    description:
      "Elegance in vintage frames. Professional vintage photography in Sri Lanka.",
    images: ["/twitter-image.jpg"],
    creator: "@bygoneeraartist",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search engines
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Geographic targeting
  other: {
    "geo.region": "LK-7", // Western Province, Sri Lanka
    "geo.placename": "Kuliyapitiya",
    "geo.position": "7.4675;80.0409", // Approximate coordinates for Kuliyapitiya
    ICBM: "7.4675, 80.0409",
  },

  // Category and classification
  category: "photography",
  classification: "business",

  // Contact and business information
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-77-799-0726",
    contactType: "customer service",
    email: "bygoneeraartist@gmail.com",
    availableLanguage: ["English", "Sinhala"],
    areaServed: "LK",
  },
};

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d97706" },
    { media: "(prefers-color-scheme: dark)", color: "#92400e" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dancingScript.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://bygone-era-artist.com",
              name: "Bygone Era Artist",
              alternateName: "Bygone Era Photography",
              description:
                "Professional vintage photography services specializing in portraits, weddings, and artistic photography in Kuliyapitiya, Sri Lanka.",
              url: "https://bygone-era-artist.com",
              telephone: "+94-77-799-0726",
              email: "bygoneeraartist@gmail.com",
              foundingDate: "2019",
              founder: {
                "@type": "Person",
                name: "Bygone Era Artist",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kuliyapitiya",
                addressRegion: "North Western Province",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.4675",
                longitude: "80.0409",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              priceRange: "LKR 15,000 - LKR 75,000",
              serviceArea: {
                "@type": "State",
                name: "Sri Lanka",
              },
              areaServed: "Sri Lanka",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Photography Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vintage Portrait Photography",
                      description:
                        "Classic portrait sessions with vintage styling",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Wedding Photography",
                      description:
                        "Romantic wedding photography with vintage aesthetic",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Art & Conceptual Photography",
                      description:
                        "Creative artistic sessions with vintage themes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Photo Restoration Services",
                      description:
                        "Professional restoration of old photographs",
                    },
                  },
                ],
              },
              sameAs: [
                "https://web.facebook.com/bygoneeraartist",
                "https://www.instagram.com/bygoneeraartist",
              ],
              image: "/logo.jpg",
              logo: "/logo.jpg",
              slogan: "Elegance in Vintage Frames",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Amara Perera",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "The vintage portrait session was absolutely magical. Every frame captured the timeless elegance I was looking for.",
                },
              ],
            }),
          }}
        />

        {/* Performance and SEO optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />

        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Bygone Era Artist" />
        <meta name="application-name" content="Bygone Era Artist" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>

      <body className="antialiased text-amber-900 bg-gradient-to-b from-amber-50 to-stone-100">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-700 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content">{children}</div>

        {/* Performance monitoring and analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance observer for Core Web Vitals
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  list.getEntries().forEach((entry) => {
                    // Log performance metrics (replace with your analytics)
                    console.log('Performance metric:', entry.name, entry.value);
                  });
                });
                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'cumulative-layout-shift'] });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
