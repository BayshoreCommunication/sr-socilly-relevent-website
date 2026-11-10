import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SERVICES_LIST,
  getServiceBySlug,
} from "@/components/services/services-data";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | SR - Socially Relevant",
    };
  }

  return {
    title: `${service.title} | SR - Socially Relevant Promo Services`,
    description: service.tagline,
    openGraph: {
      title: `${service.title} | SR - Socially Relevant Promo Services`,
      description: service.tagline,
      url: `https://sr-socilly-relevent-website.vercel.app/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

