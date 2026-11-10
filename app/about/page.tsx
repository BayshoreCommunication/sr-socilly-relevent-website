import type { Metadata } from "next";
import { AboutPageClient } from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Socially Relevant Promo",
  description:
    "We are a full-service advertising specialties company offering a wide range of promotional items and apparel to promote your company offline and online. Meet our team and discover our quality programs.",
  openGraph: {
    title: "About Us | Socially Relevant Promo",
    description:
      "We are a full-service advertising specialties company offering a wide range of promotional items and apparel to promote your company offline and online.",
    url: "https://www.sociallyrelevantpromo.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

