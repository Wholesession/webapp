import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wholesession.com"),
  title: {
    default: "Wholesession - Level up to senior roles in tech",
    template: "%s | Wholesession",
  },
  description: "Cohort-based learning taught by tech practitioners from Moniepoint, Google, and more. Master production-grade skills.",
  keywords: ["coding bootcamp", "senior engineer", "AI development", "Vibe coding", "backend development", "microservices", "system design", "mentorship", "cohort based learning"],
  authors: [{ name: "Wholesession Team" }],
  creator: "Wholesession",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wholesession.com",
    title: "Wholesession - Level up to senior roles in tech",
    description: "Cohort-based learning taught by tech practitioners from Moniepoint, Google, and more.",
    siteName: "Wholesession",
    images: [
      {
        url: "/ws-seo.jpg",
        width: 1200,
        height: 630,
        alt: "Wholesession - Mastering Tech Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesession - Level up to senior roles in tech",
    description: "Cohort-based learning taught by tech practitioners from Moniepoint, Google, and more.",
    images: ["/ws-seo.jpg"],
    creator: "@wholesession",
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
  verification: {
    google: "lckv-8eKlVDbdXisoztAeFw-__fPLOjvocbIcfudtjo",
  },
};

import { Toaster } from "sonner";
import { SupportBubble } from "@/components/support-bubble";
import { AnnouncementBar } from "@/components/announcement-bar";
import { MetaPixel } from "@/components/meta-pixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
      >
        <MetaPixel />
        <AnnouncementBar />
        {/* Structured Data for Google Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://wholesession.com",
              "logo": "https://wholesession.com/ws-seo.jpg",
              "name": "Wholesession",
              "description": "Cohort-based learning taught by tech practitioners.",
              "sameAs": [
                "https://twitter.com/wholesession",
                "https://linkedin.com/company/wholesession"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wholesession.com/courses?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {children}
        <SupportBubble />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
