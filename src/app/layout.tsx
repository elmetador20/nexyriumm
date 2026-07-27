import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateProfessionalServiceSchema,
} from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Nexyrium | Startup Fundraising & Investor Readiness Platform",
    template: "%s | Nexyrium",
  },
  description:
    "Nexyrium helps startup founders become investor-ready with pitch deck creation, financial modeling, startup valuation, investor outreach, and fundraising strategy. Your dedicated fundraising consultant in India.",
  keywords: [
    "Pitch Deck Services",
    "Pitch Deck Consultant",
    "Startup Fundraising",
    "Fundraising Consultant India",
    "Startup Consulting",
    "Financial Model",
    "Investor Outreach",
    "Startup Valuation",
    "Fundraising Strategy",
    "VC Consulting",
    "Angel Investor Consulting",
    "Investor Ready Startup",
    "Startup Documentation",
    "Pre Seed Funding",
    "Seed Funding",
    "Startup Growth Consulting",
  ],
  authors: [{ name: "Nexyrium" }],
  creator: "Nexyrium",
  publisher: "Nexyrium",
  metadataBase: new URL("https://www.nexyrium.in"),
  alternates: {
    canonical: "https://www.nexyrium.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nexyrium.in",
    siteName: "Nexyrium",
    title: "Nexyrium | Startup Fundraising & Investor Readiness Platform",
    description:
      "Nexyrium helps startup founders become investor-ready with pitch deck creation, financial modeling, investor outreach, and fundraising strategy.",
    images: [
      {
        url: "/nexyrium.jpeg",
        width: 1200,
        height: 630,
        alt: "Nexyrium - Startup Fundraising Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexyrium | Startup Fundraising & Investor Readiness Platform",
    description:
      "Nexyrium helps startup founders become investor-ready with pitch deck creation, financial modeling, investor outreach, and fundraising strategy.",
    images: ["/nexyrium.jpeg"],
    creator: "@nexyrium",
  },
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
  icons: {
    icon: "/nexyrium.jpeg",
    shortcut: "/nexyrium.jpeg",
    apple: "/nexyrium.jpeg",
  },
  verification: {
    // Add these when you have the codes:
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth antialiased selection:bg-amber-500/30 selection:text-amber-200",
        inter.variable
      )}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#050507] text-zinc-100 font-sans">
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generateProfessionalServiceSchema()} />
        <Navbar />
        <main className="flex-1 flex flex-col" id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
