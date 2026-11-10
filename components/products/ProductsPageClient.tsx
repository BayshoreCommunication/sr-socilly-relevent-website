"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  PRODUCTS_DATA,
  CATEGORIES_LIST,
  Product,
} from "./product-data";
import ProductsFilterSidebar from "./ProductsFilterSidebar";
import ProductCard from "./ProductCard";

type SortOption = "popular" | "newest" | "cheapest" | "discounts";

export const ProductsPageClient: React.FC = () => {
  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );
  const [selectedDecoration, setSelectedDecoration] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sort & View State
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mobile Drawer State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Handlers
  const handleToggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleToggleDecoration = (dec: string) => {
    setSelectedDecoration((prev) =>
      prev.includes(dec) ? prev.filter((d) => d !== dec) : [...prev, dec]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrands([]);
    setSelectedPriceRange(null);
    setSelectedDecoration([]);
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedBrands.length > 0 ||
    selectedPriceRange !== null ||
    selectedDecoration.length > 0 ||
    searchQuery.trim().length > 0;

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_DATA];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Price range filter
    if (selectedPriceRange) {
      if (selectedPriceRange === "under-25") {
        result = result.filter((p) => p.price < 25);
      } else if (selectedPriceRange === "25-50") {
        result = result.filter((p) => p.price >= 25 && p.price <= 50);
      } else if (selectedPriceRange === "50-100") {
        result = result.filter((p) => p.price >= 50 && p.price <= 100);
      } else if (selectedPriceRange === "over-100") {
        result = result.filter((p) => p.price > 100);
      }
    }

    // Decoration filter
    if (selectedDecoration.length > 0) {
      result = result.filter((p) =>
        p.decoration.some((d) => selectedDecoration.includes(d))
      );
    }

    // Sorting
    if (sortBy === "popular") {
      result.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount);
    } else if (sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sortBy === "cheapest") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "discounts") {
      result.sort((a, b) => {
        const discA = a.originalPrice ? a.originalPrice - a.price : 0;
        const discB = b.originalPrice ? b.originalPrice - b.price : 0;
        return discB - discA;
      });
    }

    return result;
  }, [
    selectedCategory,
    selectedBrands,
    selectedPriceRange,
    selectedDecoration,
    searchQuery,
    sortBy,
  ]);

  // Current category name for header
  const currentCategoryObj = CATEGORIES_LIST.find(
    (c) => c.id === selectedCategory
  );
  const pageTitle =
    selectedCategory === "all"
      ? "Promotional Products"
      : currentCategoryObj?.name || "Products";

  return (
    <div className="w-full bg-[#fffceb] min-h-screen py-6 sm:py-8 md:py-10">
      <Container>
        {/* Sub-Header / Search & Count Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#ebdcb3]">
          <div className="flex items-center gap-2.5">
            <h2 className="font-lora text-lg sm:text-xl font-bold text-[#171717]">
              {selectedCategory === "all" ? "All Merchandise" : currentCategoryObj?.name}
            </h2>
            <span className="text-xs font-semibold text-[#761318] bg-[#fdf5eb] border border-[#ebdcb3] px-2.5 py-0.5 rounded-full shadow-2xs">
              {filteredProducts.length} items
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by name, brand, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-7 py-2 text-xs sm:text-sm rounded-full border border-[#dfcca0] bg-white text-[#171717] focus:ring-2 focus:ring-[#761318] focus:border-transparent outline-none transition-all placeholder:text-[#999999] shadow-2xs"
            />
            <svg
              className="w-4 h-4 text-[#8a8176] absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8a8176] hover:text-[#761318]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 3. Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Left Sidebar (3 Cols) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <ProductsFilterSidebar
              products={PRODUCTS_DATA}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedBrands={selectedBrands}
              onToggleBrand={handleToggleBrand}
              selectedPriceRange={selectedPriceRange}
              onSelectPriceRange={setSelectedPriceRange}
              selectedDecoration={selectedDecoration}
              onToggleDecoration={handleToggleDecoration}
              onResetFilters={handleResetFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </div>

          {/* Mobile Filter Trigger Bar (Visible below lg) */}
          <div className="lg:hidden flex items-center justify-between gap-3 p-3 bg-white rounded-xl border border-[#ebdcb3] shadow-sm">
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 bg-[#761318] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filter Products</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>

            <span className="text-xs text-[#736a61] font-medium">
              Showing {filteredProducts.length} of {PRODUCTS_DATA.length}
            </span>
          </div>

          {/* Right Product Listings Area (9 Cols) */}
          <div className="lg:col-span-9 flex flex-col space-y-6">
            {/* Sort & View Controls Bar (Directly from reference screenshot tabs) */}
            <div className="bg-white rounded-2xl border border-[#ebdcb3] px-4 sm:px-6 py-2.5 sm:py-3 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Sorting Tabs with Brand Underline Indicator */}
              <div className="flex items-center overflow-x-auto w-full sm:w-auto scrollbar-none gap-6 sm:gap-8 pb-1 sm:pb-0">
                {(
                  [
                    { id: "popular", label: "POPULAR FIRST" },
                    { id: "newest", label: "NEWEST FIRST" },
                    { id: "cheapest", label: "CHEAPEST FIRST" },
                    { id: "discounts", label: "DISCOUNTS FIRST" },
                  ] as const
                ).map((tab) => {
                  const isActive = sortBy === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSortBy(tab.id)}
                      className={`relative py-2 font-lora text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap focus:outline-none ${
                        isActive
                          ? "text-[#761318]"
                          : "text-[#736a61] hover:text-[#761318]"
                      }`}
                    >
                      {tab.label}
                      {/* Active underline indicator */}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#761318] rounded-full transition-all" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* View Switchers (Grid vs List) */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-2 rounded-lg border transition-all ${
                    viewMode === "grid"
                      ? "bg-[#761318] text-white border-[#761318] shadow-sm"
                      : "bg-[#fbf9f4] text-[#736a61] border-[#ebdcb3] hover:text-[#761318]"
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-2 rounded-lg border transition-all ${
                    viewMode === "list"
                      ? "bg-[#761318] text-white border-[#761318] shadow-sm"
                      : "bg-[#fbf9f4] text-[#736a61] border-[#ebdcb3] hover:text-[#761318]"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Active Filter Badges */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-[#706860] font-medium mr-1">
                  Active filters:
                </span>
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#761318] border border-[#ebdcb3] rounded-full text-xs font-semibold shadow-2xs">
                    Category: {currentCategoryObj?.name}
                    <button
                      type="button"
                      onClick={() => setSelectedCategory("all")}
                      className="hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedBrands.map((brand) => (
                  <span
                    key={brand}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#761318] border border-[#ebdcb3] rounded-full text-xs font-semibold shadow-2xs"
                  >
                    Brand: {brand}
                    <button
                      type="button"
                      onClick={() => handleToggleBrand(brand)}
                      className="hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#761318] border border-[#ebdcb3] rounded-full text-xs font-semibold shadow-2xs">
                    Price filter
                    <button
                      type="button"
                      onClick={() => setSelectedPriceRange(null)}
                      className="hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedDecoration.map((dec) => (
                  <span
                    key={dec}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#761318] border border-[#ebdcb3] rounded-full text-xs font-semibold shadow-2xs"
                  >
                    {dec}
                    <button
                      type="button"
                      onClick={() => handleToggleDecoration(dec)}
                      className="hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[#761318] hover:underline font-bold ml-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product Grid / List Showcase (3 Columns on Desktop matching reference design) */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-[#ebdcb3] p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#faf5e4] text-[#761318] flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-lora text-xl font-bold text-[#171717]">
                  No Products Found
                </h3>
                <p className="font-lora text-sm text-[#736a61] max-w-md mx-auto">
                  We could not find any merchandise matching your selected filters. Try broadening your criteria or reset the filters.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-semibold text-xs sm:text-sm rounded-xl shadow transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode="grid"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode="list"
                  />
                ))}
              </div>
            )}

            {/* Bottom Custom Sourcing Banner */}
            <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#761318] to-[#45070a] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#55090d]">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2cbcf]">
                  Custom Sourcing & Design
                </span>
                <h3 className="font-lora text-xl sm:text-2xl font-bold text-white">
                  Looking for something specific or customized?
                </h3>
                <p className="font-lora text-sm text-white/80 max-w-xl">
                  Our team sources from over 1,000 verified ethical manufacturing partners. Tell us your budget and project timeline, and we will build a tailored product deck.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white text-[#761318] hover:bg-[#f6f2e1] font-lora font-bold text-sm rounded-xl shadow-md transition-all whitespace-nowrap hover:scale-105"
              >
                Inquire Custom Swag
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Filters Slide-over Drawer */}
      {isMobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs lg:hidden animate-fadeIn"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm h-full bg-[#fffceb] p-6 overflow-y-auto shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#ebdcb3]">
                <h2 className="font-lora font-bold text-lg text-[#171717]">
                  Filter Catalog
                </h2>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-white border border-[#ebdcb3] text-[#761318] flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              </div>

              <ProductsFilterSidebar
                products={PRODUCTS_DATA}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedBrands={selectedBrands}
                onToggleBrand={handleToggleBrand}
                selectedPriceRange={selectedPriceRange}
                onSelectPriceRange={setSelectedPriceRange}
                selectedDecoration={selectedDecoration}
                onToggleDecoration={handleToggleDecoration}
                onResetFilters={handleResetFilters}
                hasActiveFilters={hasActiveFilters}
                onCloseMobileDrawer={() => setIsMobileFilterOpen(false)}
              />
            </div>

            <div className="pt-6 border-t border-[#ebdcb3] mt-6">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-[#761318] text-white font-lora font-bold text-sm rounded-xl shadow-md"
              >
                View {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPageClient;

