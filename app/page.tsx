
import { ReactLenis } from 'lenis/react'
import { Metadata } from "next";
import ShaderBackground from "@/components/ui/shader-background2";
import Hero from "@/components/sections/Hero";
import BusinessAdvantages from "@/components/sections/business-advantages";
import Infrastructure from "@/components/sections/infrastructure";
import { Partners } from '@/components/sections/partners';
import Latest from "@/components/sections/latest";
import Faq from "@/components/sections/faq";
import Process from "@/components/sections/process";
import StickyExpertButton from "@/components/sticky-expert-button";
import ConciergeRelocationBlurb from "@/components/concierge-relocation-blurb";
import MapSection from "@/components/sections/map-section";
export const metadata: Metadata = {
  title: "NCGTP - North Carolina Global TransPark",
  description: "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
  keywords: [
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
  ],
  openGraph: {
    title: "NCGTP - North Carolina Global TransPark",
    description: "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
    url: "https://www.ncgtp.com/",
    siteName: "NCGTP",
    images: [
      {
        url: "https://www.ncgtp.com/og-image-ncgtp.png",
        width: 1200,
        height: 630,
        alt: "NCGTP - North Carolina Global TransPark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ncgtp.com/",
  }
}
// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "NCGTP - North Carolina Global TransPark",
//   "url": "https://www.ncgtp.com/",
//   "description": "Discover the North Carolina Global TransPark (NCGTP), a premier logistics and aerospace industrial park designed to accelerate business growth and innovation. Explore our state-of-the-art infrastructure, strategic location, and business advantages that make NCGTP the ideal destination for your next venture.",
//   "streetAddress": "2711 Gardner Rd",
//   "addressLocality": "Kinston",
//   "addressRegion": "NC",
//   "postalCode": "28504",
//   "addressCountry": "USA",
//   "image": "https://www.ncgtp.com/og-image-ncgtp.png",
//   "keywords": [
//     "NCGTP",
//     "North Carolina Global TransPark",
//     "logistics hub",
//     "aerospace park",
//     "industrial park",
//     "business growth",
//     "infrastructure",
//     "site selection",
//     "business incentives",
//     "supply chain solutions",
//     "manufacturing",
//     "distribution center",
//     "transportation network",
//     "economic development",
//     "Eastern North Carolina"
//   ],
//   "publisher": {
//     "@type": "Organization",
//     "name": "NCGTP",
//     "url": "https://www.ncgtp.com/",
//     "logo": {
//       "@type": "ImageObject",
//       "url": "https://www.ncgtp.com/og-image-ncgtp.png"
//     }
//   }
// };
const Home = () => {
  return (
    <main className="relative">
      <ReactLenis root>
        <Hero />
        <BusinessAdvantages />
        <Infrastructure />
        <ConciergeRelocationBlurb />
        <Process />
        <Partners />
        <MapSection />
        <Latest />
        <Faq />
        <ShaderBackground />
        <StickyExpertButton />
      </ReactLenis>
    </main>
  );
}

export default Home;