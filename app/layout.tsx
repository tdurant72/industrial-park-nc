import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
// import { TailwindBreakpointIndicator } from "@/components/tailwind-breakpoint-indicator";

const font = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "NCGTP",
  description: "North Carolina Global TransPark - A premier logistics and aerospace hub designed to accelerate business growth and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "NCGTP - North Carolina Global TransPark",
                "url": "https://www.ncgtp.com/",
                "description": "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
                "image": "https://www.ncgtp.com/og-image-ncgtp.png",
                "keywords": [
                  "NCGTP",
                  "North Carolina Global TransPark",
                  "logistics hub",
                  "aerospace park",
                  "industrial park",
                  "business growth",
                  "infrastructure",
                  "site selection",
                  "business incentives",
                  "supply chain solutions",
                  "manufacturing",
                  "distribution center",
                  "transportation network",
                  "economic development",
                  "Eastern North Carolina"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "NCGTP - North Carolina Global TransPark",
                "url": "https://www.ncgtp.com/",
                "telephone": "+1-555-555-5555",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 TransPark Dr",
                  "addressLocality": "Kinston",
                  "addressRegion": "NC",
                  "postalCode": "28504",
                  "addressCountry": "US"
                },
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.ncgtp.com/og-image-ncgtp.png"
                }
              }
            ])
          }}
        />
      </head>
      <body
        className={font.className}
      >
        {/* <TailwindBreakpointIndicator /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
