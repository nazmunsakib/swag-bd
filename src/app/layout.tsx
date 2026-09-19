import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/data/categories";
import { imageFor } from "@/data/images";

const GTM_ID = "GTM-TCM64N8W";

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

const gtmNoscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const defaultImage = imageFor("hero-merch")!;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SWAG.bd | Bangladesh's Style & Lifestyle Platform",
    template: "%s | SWAG.bd",
  },
  description: siteConfig.description,
  keywords: [
    "men's fashion Bangladesh",
    "watches",
    "sunglasses",
    "streetwear",
    "accessories",
    "style guides",
    "custom merchandise Bangladesh",
    "custom printing Bangladesh",
    "Dhaka fashion",
    "SWAG.bd",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: "SWAG.bd" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "fashion",
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "SWAG.bd | Bangladesh's Style & Lifestyle Platform",
    description: siteConfig.description,
    images: [
      {
        url: defaultImage.src,
        width: 1200,
        height: 630,
        alt: defaultImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWAG.bd | Bangladesh's Style & Lifestyle Platform",
    description: siteConfig.description,
    images: [defaultImage.src],
    site: siteConfig.twitterHandle,
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <meta name="theme-color" content="#171310" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://plus.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: gtmNoscript }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-clay focus:px-4 focus:py-2 focus:text-[12px] focus:font-semibold focus:uppercase focus:tracking-label focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}