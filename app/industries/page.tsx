import type { Metadata } from "next";
import IndustriesPageClient from "@/components/industries/IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries We Serve | SR - Socially Relevant Promo",
  description:
    "Tailored marketing and promotional merchandise solutions for Corporate & Business Firms, Personal Injury Attorneys, Chiropractic & Medical Clinics, and Non-Profit Organizations.",
  openGraph: {
    title: "Industries We Serve | SR - Socially Relevant Promo",
    description:
      "Tailored marketing and promotional merchandise solutions for Corporate & Business Firms, Personal Injury Attorneys, Chiropractic & Medical Clinics, and Non-Profit Organizations.",
    url: "https://sr-socilly-relevent-website.vercel.app/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}

