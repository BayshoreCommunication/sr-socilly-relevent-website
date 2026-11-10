"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode,
}) => {
  const isGrid = viewMode === "grid";
  const detailUrl = `/products/${product.id}`;

  if (!isGrid) {
    // List View Layout
    return (
      <div className="group bg-white rounded-2xl border border-[#ebdcb3] p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#761318]/60 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
        {/* Thumbnail Frame */}
        <Link
          href={detailUrl}
          className="relative w-full sm:w-48 aspect-square rounded-xl bg-[#fbf9f4] overflow-hidden flex items-center justify-center p-3 border border-[#ebdcb3]/60 flex-shrink-0"
        >
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {product.badge && (
            <span className="absolute top-2.5 left-2.5 bg-[#761318] text-white text-[10.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          )}
        </Link>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-between w-full h-full">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#761318]">
                {product.brand}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-[#706860]">Min. {product.moq} pcs</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-[#8a8177]">SKU: {product.sku}</span>
            </div>

            <Link href={detailUrl}>
              <h3 className="font-lora text-lg sm:text-xl font-bold text-[#171717] group-hover:text-[#761318] transition-colors line-clamp-1 mb-2">
                {product.name}
              </h3>
            </Link>

            <p className="font-lora text-sm text-[#4d463e] line-clamp-2 mb-3 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {product.decoration.map((dec) => (
                <span
                  key={dec}
                  className="text-[11px] bg-[#fbf8ed] text-[#761318] border border-[#ebdcb3] px-2 py-0.5 rounded-md font-medium"
                >
                  {dec}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#ebdcb3]/60">
            <div className="flex items-baseline gap-2.5">
              <span className="font-lora text-xl font-bold text-[#761318]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="font-lora text-sm text-[#91877c] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Link
              href={detailUrl}
              className="px-4 py-2 bg-[#761318] hover:bg-[#550c10] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 inline-flex items-center gap-1.5"
            >
              <span>View Details</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Grid View Layout (closely matched to user reference screenshot)
  return (
    <div className="group bg-white rounded-2xl border border-[#ebdcb3] hover:border-[#761318] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Top Image Showcase */}
      <Link
        href={detailUrl}
        className="relative w-full aspect-square bg-[#fbf9f4] p-4 flex items-center justify-center border-b border-[#ebdcb3]/60 overflow-hidden block"
      >
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={360}
          height={360}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#761318] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm z-10">
            {product.badge}
          </span>
        )}

        {/* Floating Action Button */}
        <span
          className="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-200 py-2.5 bg-[#761318]/95 hover:bg-[#550c10] text-white font-lora text-xs sm:text-sm font-semibold rounded-xl text-center shadow-md backdrop-blur-sm z-10 block"
        >
          View Details & Pricing →
        </span>
      </Link>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between text-center">
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-[#761318] mb-1">
            {product.brand}
          </span>

          <Link href={detailUrl}>
            <h3 className="font-lora text-[15.5px] sm:text-base font-bold text-[#171717] group-hover:text-[#761318] transition-colors leading-snug line-clamp-2 min-h-[42px] mb-2">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Pricing line */}
        <div className="pt-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-lora text-lg sm:text-xl font-bold text-[#761318]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-lora text-sm text-[#9c9388] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="block text-[11.5px] text-[#706860] mt-1 font-medium">
            Min. Order: {product.moq} pcs
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
