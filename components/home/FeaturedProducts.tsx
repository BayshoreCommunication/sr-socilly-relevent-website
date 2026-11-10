import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

export interface FeaturedProductItem {
  id: string;
  title: string[];
  imageSrc: string;
  alt: string;
  href: string;
}

export const FEATURED_PRODUCTS_DATA: FeaturedProductItem[] = [
  {
    id: "promotional-products",
    title: ["Promotional", "Products"],
    imageSrc: "/images/home/featured-products/promotional-products.png",
    alt: "Custom promotional products including branded tumblers, polo shirts, and caps",
    href: "/services",
  },
  {
    id: "client-patient-gifts",
    title: ["Client &", "Patient Gifts"],
    imageSrc: "/images/home/featured-products/client-patient-gifts.png",
    alt: "Curated client and patient appreciation gift sets",
    href: "/services",
  },
  {
    id: "branded-essentials",
    title: ["Branded", "Essentials"],
    imageSrc: "/images/home/featured-products/branded-essentials.png",
    alt: "Corporate branded stationery, journals, and executive pens",
    href: "/services",
  },
  {
    id: "business-apparels",
    title: ["Business", "Apparels"],
    imageSrc: "/images/home/featured-products/business-apparels.png",
    alt: "Custom embroidered corporate jackets and company apparel",
    href: "/services",
  },
  {
    id: "tradeshow-promotions",
    title: ["Event &", "Tradeshow", "Promotions"],
    imageSrc: "/images/home/featured-products/tradeshow-promotions.png",
    alt: "Event booth displays, banners, and promotional merchandise",
    href: "/services",
  },
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="scroll-mt-24 w-full bg-[#d5cbc9] py-16 sm:py-20 md:py-24 border-b border-[#c2b6b4]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-12 md:mb-14">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#761318] mb-3 sm:mb-4">
            Featured Products
          </span>
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#171717] leading-[1.2] tracking-tight mb-4 sm:mb-5">
            Make Your Brand Part of Their Everyday.
          </h2>
          <p className="font-lora text-base sm:text-lg md:text-[19px] text-[#332f2c] leading-relaxed max-w-4xl">
            From branded apparel and corporate gifts to promotional products and
            event essentials, we help put your business in the places, moments,
            and conversations that matter.
          </p>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {FEATURED_PRODUCTS_DATA.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative flex flex-col rounded-2xl overflow-hidden border-2 border-[#761318] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#761318]"
            >
              {/* Product Photo with aspect 1:1 and hover scale */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#e8dedb]">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* White Card Footer with Red Top Border, Centered Title, and Circular Arrow Button */}
              <div className="w-full bg-white border-t-2 border-[#761318] px-4 py-4 sm:px-5 sm:py-4.5 flex items-center justify-between gap-3 min-h-[96px] sm:min-h-[106px] transition-colors duration-300">
                {/* Title */}
                <h3 className="font-lora font-bold text-base sm:text-[17.5px] lg:text-[18.5px] text-[#761318] leading-[1.22] tracking-tight">
                  {product.title.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                {/* Circular Arrow Button */}
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#761318] flex items-center justify-center shrink-0 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#520c10]"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;

