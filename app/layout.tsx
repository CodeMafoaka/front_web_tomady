import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://front-web-tomady.vercel.app";

export const metadata: Metadata = {
  title: "Tomady — Ton coach nutrition dans ta poche",
  description:
    "Tomady est l'application mobile qui suit tes repas, construit des plans personnalisés et discute avec toi pour atteindre tes objectifs.",
  keywords: [
    "Tomady",
    "nutrition",
    "coach",
    "santé",
    "alimentation",
    "application mobile",
    "IA",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      fr: SITE_URL,
      en: SITE_URL,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo/logo web.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    apple: "/logo/logo web.png",
  },
  openGraph: {
    title: "Tomady — Ton coach nutrition dans ta poche",
    description:
      "Suis tes repas, atteins tes objectifs, mange mieux — dans une seule app.",
    type: "website",
    url: SITE_URL,
    siteName: "Tomady",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/logo/logo web.png",
        width: 1200,
        height: 630,
        alt: "Tomady — Coach nutrition mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomady — Ton coach nutrition dans ta poche",
    description:
      "Suis tes repas, atteins tes objectifs, mange mieux — dans une seule app.",
    images: ["/logo/logo web.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Tomady",
  category: "Health & Fitness",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tomady",
  operatingSystem: "ANDROID, IOS",
  applicationCategory: "HealthApplication",
  description:
    "Tomady est l'application mobile qui suit tes repas, construit des plans personnalisés et discute avec toi pour atteindre tes objectifs nutritionnels.",
  url: SITE_URL,
  downloadUrl: `${SITE_URL}/downloads/tomady-v1.0.0.apk`,
  softwareVersion: "1.0.0",
  fileSize: "18 MB",
  inLanguage: ["fr-FR", "en-US"],
  applicationSubCategory: "NutritionTracking",
  operatingRequirements: "Android 8+, iOS 14+",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "Tomady Inc.",
  },
  image: `${SITE_URL}/logo/logo web.png`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-foreground overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}