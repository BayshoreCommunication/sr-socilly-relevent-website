import type { Metadata } from "next";
import ProductsPageClient from "@/components/products/ProductsPageClient";

export const metadata: Metadata = {
  title: "Products & Promotional Merchandise | SR - Socially Relevant",
  description:
    "Explore premium promotional products, custom corporate apparel, branded drinkware, client gifts, and tradeshow event displays tailored for professional firms.",
  openGraph: {
    title: "Products & Promotional Merchandise | SR - Socially Relevant",
    description:
      "Explore premium promotional products, custom corporate apparel, branded drinkware, client gifts, and tradeshow event displays.",
    url: "https://sr-socilly-relevent-website.vercel.app/products",
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}

