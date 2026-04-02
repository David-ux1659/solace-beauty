import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";

export const metadata: Metadata = {
  title: {
    default: "Authentic Haitian Food in Manchester, NH | Alliyah & Geralda's Kitchen",
    template: "%s | Alliyah & Geralda's Kitchen",
  },
  description:
    "Fresh homemade Haitian plates served every weekend in Manchester, NH. Oxtail, lasagna, soup joumou, and more. Pre-order now — limited quantities available.",
  keywords: [
    "Haitian food Manchester NH",
    "Caribbean restaurant",
    "Haitian oxtail",
    "Haitian lasagna",
    "soup joumou",
    "Caribbean catering",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alliyah & Geralda's Kitchen",
    title: "Authentic Haitian Food in Manchester, NH | Alliyah & Geralda's Kitchen",
    description:
      "Fresh homemade Haitian plates served every weekend. Oxtail, lasagna, soup joumou & more. Limited availability — pre-order now.",
    images: [{ url: "/images/food/haitian-plate-takeout.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Haitian Food — Alliyah & Geralda's Kitchen",
    description: "Weekend-only Haitian plates in Manchester, NH. Pre-order now.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://alliyahandgeraldaskitchen.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Alliyah & Geralda's Kitchen",
  alternateName: "Alliyah and Geralda's Kitchen",
  description:
    "Authentic Haitian food served fresh every weekend in Manchester, NH. Specializing in oxtail, Haitian lasagna, soup joumou, and homemade Caribbean plates.",
  url: "https://alliyahandgeraldaskitchen.com",
  telephone: "+1-603-555-0123",
  servesCuisine: ["Haitian", "Caribbean"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "560 Candia Rd",
    addressLocality: "Manchester",
    addressRegion: "NH",
    postalCode: "03109",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "14:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "14:00", closes: "19:00" },
  ],
  priceRange: "$$",
  image: "/images/food/haitian-plate-takeout.jpg",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
