import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://sr-socilly-relevent-website.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "SR - Socially Relevant Promo",
  description: "Promoting meaningful ideas and socially relevant media.",
  openGraph: {
    title: "SR - Socially Relevant Promo",
    description: "Promoting meaningful ideas and socially relevant media.",
    url: "https://sr-socilly-relevent-website.vercel.app",
    siteName: "SR - Socially Relevant Promo",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SR - Socially Relevant Promo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SR - Socially Relevant Promo",
    description: "Promoting meaningful ideas and socially relevant media.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#fffceb] text-[#171717] font-lora">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
