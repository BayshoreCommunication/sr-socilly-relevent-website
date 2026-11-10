import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PRODUCTS_DATA,
  getProductById,
} from "@/components/products/product-data";
import ProductDetailsClient from "@/components/products/ProductDetailsClient";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | SR - Socially Relevant",
    };
  }

  return {
    title: `${product.name} | SR - Socially Relevant Promo`,
    description: product.description,
    openGraph: {
      title: `${product.name} | SR - Socially Relevant Promo`,
      description: product.description,
      images: [
        {
          url: product.imageSrc,
          width: 600,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}

