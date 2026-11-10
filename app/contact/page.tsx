import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Socially Relevant Promo",
  description:
    "If you have any questions or want to place a telephone order, please feel free to contact Socially Relevant Promo via phone or email. Call 813.679.0524 or email Jsells@sociallyrelevantpromo.com.",
  openGraph: {
    title: "Contact Us | Socially Relevant Promo",
    description:
      "If you have any questions or want to place a telephone order, please feel free to contact Socially Relevant Promo via phone or email.",
    url: "https://www.sociallyrelevantpromo.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

