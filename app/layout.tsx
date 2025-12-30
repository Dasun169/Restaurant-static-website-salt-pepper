import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./../app/components/layout/Navbar";
import Footer from "./../app/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salt & Pepper | Luxury Fine Dining Restaurant - Colombo",
  description:
    "Experience exquisite culinary artistry at Colombo's premier fine dining destination. Authentic cuisine, elegant ambiance, and premium service.",
  keywords: [
    "luxury restaurant Colombo",
    "fine dining Sri Lanka",
    "Salt & Pepper restaurant",
    "gourmet cuisine",
    "romantic dinner Colombo",
  ],
  authors: [{ name: "Salt & Pepper Restaurant" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saltpepper.lk",
    title: "Salt & Pepper | Luxury Fine Dining",
    description: "Experience exquisite cuisine in an elegant atmosphere",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Salt & Pepper Restaurant Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt & Pepper | Luxury Fine Dining",
    description: "Experience exquisite cuisine in an elegant atmosphere",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop",
    ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
