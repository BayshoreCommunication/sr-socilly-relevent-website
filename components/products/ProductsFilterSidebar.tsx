"use client";

import React, { useState } from "react";
import { CATEGORIES_LIST, BRANDS_LIST, Product } from "./product-data";

interface FilterSidebarProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedBrands: string[];
  onToggleBrand: (brand: string) => void;
  selectedPriceRange: string | null;
  onSelectPriceRange: (range: string | null) => void;
  selectedDecoration: string[];
  onToggleDecoration: (dec: string) => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  className?: string;
  onCloseMobileDrawer?: () => void;
}

export const ProductsFilterSidebar: React.FC<FilterSidebarProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  selectedBrands,
  onToggleBrand,
  selectedPriceRange,
  onSelectPriceRange,
  selectedDecoration,
  onToggleDecoration,
  onResetFilters,
  hasActiveFilters,
  className = "",
  onCloseMobileDrawer,
}) => {
  // Accordion open/close state for each filter block
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isDecorationOpen, setIsDecorationOpen] = useState(true);

  // Calculate counts dynamically
  const getCategoryCount = (catId: string) => {
    if (catId === "all") return products.length;
    return products.filter((p) => p.category === catId).length;
  };

  const getBrandCount = (brand: string) => {
    return products.filter((p) => p.brand === brand).length;
  };

  const priceRanges = [
    { id: "under-25", label: "Under $25", min: 0, max: 25 },
    { id: "25-50", label: "$25 - $50", min: 25, max: 50 },
    { id: "50-100", label: "$50 - $100", min: 50, max: 100 },
    { id: "over-100", label: "$100 & Above", min: 100, max: 99999 },
  ];

  const decorations = [
    "Custom Embroidery",
    "Laser Engraving",
    "Screen Printing",
    "Full Color Print",
  ];

  return (
    <aside className={`w-full space-y-6 ${className}`}>
      {/* 1. TOP GRADIENT CATEGORY CARD (Faithfully styled after reference design) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#761318] via-[#851218] to-[#45070a] p-5 sm:p-6 text-white shadow-md border border-[#5a090e]">
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/20">
          <h3 className="font-lora text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90">
            Categories
          </h3>
          <span className="text-[11px] font-medium text-white/70 bg-white/15 px-2 py-0.5 rounded-full">
            {products.length} Items
          </span>
        </div>

        <nav aria-label="Product Categories">
          <ul className="space-y-1.5 font-lora">
            {CATEGORIES_LIST.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      if (onCloseMobileDrawer) onCloseMobileDrawer();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm sm:text-[14.5px] transition-all duration-200 text-left ${
                      isActive
                        ? "bg-white text-[#761318] font-bold shadow-sm"
                        : "text-white/85 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? "bg-[#761318]/15 text-[#761318]"
                          : "text-white/60 bg-white/10"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* 2. FILTERS CONTAINER */}
      <div className="bg-white rounded-2xl border border-[#ebdcb3] p-5 sm:p-6 space-y-6 shadow-sm">
        {/* Header with Clear Button */}
        <div className="flex items-center justify-between pb-3 border-b border-[#ebdcb3]">
          <span className="font-lora font-bold text-base text-[#171717] tracking-tight">
            Refine By
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="text-xs font-semibold text-[#761318] hover:text-[#4d0c0f] hover:underline"
            >
              Reset All
            </button>
          )}
        </div>

        {/* Filter 1: Brand */}
        <div>
          <button
            type="button"
            onClick={() => setIsBrandOpen((prev) => !prev)}
            className="w-full flex items-center justify-between font-lora font-semibold text-sm text-[#171717] mb-3 focus:outline-none"
            aria-expanded={isBrandOpen}
          >
            <span className="tracking-wide uppercase text-xs text-[#524941]">Brand</span>
            <span className="text-lg leading-none text-[#761318] font-bold">
              {isBrandOpen ? "−" : "+"}
            </span>
          </button>
          {isBrandOpen && (
            <div className="space-y-2.5 pt-1">
              {BRANDS_LIST.map((brand) => {
                const checked = selectedBrands.includes(brand);
                const count = getBrandCount(brand);
                return (
                  <label
                    key={brand}
                    className="flex items-center justify-between text-sm text-[#3d3830] cursor-pointer hover:text-[#761318] transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleBrand(brand)}
                        className="w-4 h-4 rounded border-[#dfcca0] text-[#761318] focus:ring-[#761318] cursor-pointer accent-[#761318]"
                      />
                      <span className={checked ? "font-semibold text-[#761318]" : ""}>
                        {brand}
                      </span>
                    </span>
                    <span className="text-xs text-[#8c8277] group-hover:text-[#761318]">
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        <div className="h-[1px] bg-[#ebdcb3]/60" />

        {/* Filter 2: Price Range */}
        <div>
          <button
            type="button"
            onClick={() => setIsPriceOpen((prev) => !prev)}
            className="w-full flex items-center justify-between font-lora font-semibold text-sm text-[#171717] mb-3 focus:outline-none"
            aria-expanded={isPriceOpen}
          >
            <span className="tracking-wide uppercase text-xs text-[#524941]">Price Range</span>
            <span className="text-lg leading-none text-[#761318] font-bold">
              {isPriceOpen ? "−" : "+"}
            </span>
          </button>
          {isPriceOpen && (
            <div className="space-y-2.5 pt-1">
              {priceRanges.map((range) => {
                const checked = selectedPriceRange === range.id;
                return (
                  <label
                    key={range.id}
                    className="flex items-center gap-2.5 text-sm text-[#3d3830] cursor-pointer hover:text-[#761318] transition-colors"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      checked={checked}
                      onChange={() =>
                        onSelectPriceRange(checked ? null : range.id)
                      }
                      onClick={() => {
                        if (checked) onSelectPriceRange(null);
                      }}
                      className="w-4 h-4 text-[#761318] border-[#dfcca0] focus:ring-[#761318] cursor-pointer accent-[#761318]"
                    />
                    <span className={checked ? "font-semibold text-[#761318]" : ""}>
                      {range.label}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        <div className="h-[1px] bg-[#ebdcb3]/60" />

        {/* Filter 3: Decoration Method */}
        <div>
          <button
            type="button"
            onClick={() => setIsDecorationOpen((prev) => !prev)}
            className="w-full flex items-center justify-between font-lora font-semibold text-sm text-[#171717] mb-3 focus:outline-none"
            aria-expanded={isDecorationOpen}
          >
            <span className="tracking-wide uppercase text-xs text-[#524941]">
              Decoration Method
            </span>
            <span className="text-lg leading-none text-[#761318] font-bold">
              {isDecorationOpen ? "−" : "+"}
            </span>
          </button>
          {isDecorationOpen && (
            <div className="space-y-2.5 pt-1">
              {decorations.map((dec) => {
                const checked = selectedDecoration.includes(dec);
                return (
                  <label
                    key={dec}
                    className="flex items-center gap-2.5 text-sm text-[#3d3830] cursor-pointer hover:text-[#761318] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggleDecoration(dec)}
                      className="w-4 h-4 rounded border-[#dfcca0] text-[#761318] focus:ring-[#761318] cursor-pointer accent-[#761318]"
                    />
                    <span className={checked ? "font-semibold text-[#761318]" : ""}>
                      {dec}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ProductsFilterSidebar;

