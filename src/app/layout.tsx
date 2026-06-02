import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Satellite Engineers | Industrial Engineering Solutions, Ahmedabad",
  description:
    "Satellite Engineers — CPRI approved electrical panel manufacturer, turnkey electrical project specialists, and material handling experts based in Ahmedabad, Gujarat, India. 20+ years of industrial engineering excellence.",
  keywords: [
    "electrical panels ahmedabad",
    "CPRI approved panels",
    "coal handling plant",
    "material handling equipment",
    "turnkey electrical projects Gujarat",
    "industrial engineering",
    "conveyor belt services",
    "dust control systems",
    "sheet metal fabrication",
  ],
  openGraph: {
    title: "Satellite Engineers | Industrial Engineering Solutions",
    description:
      "CPRI approved electrical panels, turnkey electrical projects, and material handling solutions based in Ahmedabad, India.",
    siteName: "Satellite Engineers",
    locale: "en_IN",
    type: "website",
  },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Satellite Engineers",
  description:
    "Industrial engineering company specializing in electrical panels (CPRI approved), turnkey electrical projects, material handling equipment, and coal handling plants.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "93/1, Mahalaxmi Industrial Estate, GIDC Vatva Road, Nr. Cadila Crossing, Opp. Navi Vasahat, Jasodanagar",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
  },
  telephone: "+91-94260-78294",
  faxNumber: "+91-79-25832360",
  email: "sateng2001@gmail.com",
  foundingDate: "2001",
  areaServed: "India",
  serviceType: [
    "Electrical Panel Manufacturing",
    "Turnkey Electrical Projects",
    "Material Handling Equipment",
    "Coal Handling Plants",
    "Dust Control Systems",
    "Conveyor Belt Services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
