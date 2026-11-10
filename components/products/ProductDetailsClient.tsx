"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { Product, getRelatedProducts } from "./product-data";
import ProductCard from "./ProductCard";

interface ProductDetailsClientProps {
  product: Product;
}

export const ProductDetailsClient: React.FC<ProductDetailsClientProps> = ({
  product,
}) => {
  // Gallery images (fallback to product image)
  const images =
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.imageSrc];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "Standard");
  const [selectedDecoration, setSelectedDecoration] = useState(product.decoration[0] || "Standard Imprint");
  const [quantity, setQuantity] = useState(product.moq);
  const [activeTab, setActiveTab] = useState<"details" | "delivery" | "artwork">("details");

  // Quote Request Form State
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  });

  const relatedProducts = getRelatedProducts(product, 3);

  // Next/Prev image handlers
  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsQuoteFormOpen(false);
    }, 2800);
  };

  return (
    <div className="w-full bg-[#fffceb] py-8 sm:py-12 md:py-16">
      <Container>
        {/* Main 2-Column Product Detail Layout (Matching reference design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: SHOWCASE BOX ================= */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="relative w-full rounded-3xl bg-white border border-[#ebdcb3] p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between overflow-hidden">
              {/* Top Row: Designer / Brand info & Review Rating */}
              <div className="flex items-center justify-between pb-4 border-b border-[#ebdcb3]/60">
                <span className="font-lora text-xs sm:text-sm text-[#736a61]">
                  Curated by{" "}
                  <strong className="font-semibold text-[#171717]">
                    {product.brand}
                  </strong>
                </span>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                  <span className="text-[#f59e0b] font-bold">★ {product.rating}</span>
                  <span className="text-[#8c8276]">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Angle / Variant Indicator Dotted Pill (Matching reference design: — ⚬ — —) */}
              <div className="flex items-center justify-center gap-2 py-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Show image angle ${idx + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeImageIndex === idx
                        ? "w-8 bg-[#761318]"
                        : "w-3 bg-[#dfcca0] hover:bg-[#761318]/50"
                    }`}
                  />
                ))}
              </div>

              {/* Main Product Image Container with Carousel Navigation Arrows */}
              <div className="relative w-full aspect-square max-h-[460px] flex items-center justify-center my-4 group">
                {/* Left Arrow Button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                    className="absolute left-2 sm:left-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-[#761318] text-[#761318] hover:text-white border border-[#ebdcb3] shadow-md flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}

                <div className="relative w-full h-full p-4 flex items-center justify-center">
                  <Image
                    src={images[activeImageIndex]}
                    alt={product.name}
                    width={520}
                    height={520}
                    priority
                    className="w-full h-full object-contain drop-shadow-md transition-all duration-300"
                  />
                </div>

                {/* Right Arrow Button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next image"
                    className="absolute right-2 sm:right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-[#761318] text-[#761318] hover:text-white border border-[#ebdcb3] shadow-md flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}

                {/* Badge if available */}
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-[#761318] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Bottom Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#ebdcb3]/60">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden p-1 bg-[#fbf9f4] border transition-all ${
                        activeImageIndex === idx
                          ? "border-2 border-[#761318] shadow-sm scale-105"
                          : "border-[#ebdcb3] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Sourcing Confidence Guarantee */}
            <div className="bg-[#fbf9ed] border border-[#ebdcb3] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm text-[#4d453d]">
              <div className="flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <strong className="block font-semibold text-[#171717]">
                    Free Virtual Proof & Visual Mockup
                  </strong>
                  <span>See your logo before printing. 100% satisfaction guarantee.</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PRODUCT INFO & ORDERING ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-[#761318] mb-1.5">
                  {product.brand}
                </span>

                <h1 className="font-lora text-3xl sm:text-4xl md:text-[42px] font-bold text-[#171717] tracking-tight leading-[1.18] mb-2">
                  {product.name}
                </h1>

                <span className="block font-lora text-xs sm:text-sm text-[#8a8074]">
                  Item code: {product.sku}
                </span>
              </div>

              {/* Description Section */}
              <div>
                <span className="block font-lora text-xs font-bold uppercase tracking-[0.2em] text-[#736a61] mb-2">
                  Description
                </span>
                <p className="font-lora text-sm sm:text-base text-[#4a433d] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="py-2">
                <span className="block font-lora text-xs font-bold uppercase tracking-[0.2em] text-[#736a61] mb-1.5">
                  Price
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-lora text-3xl sm:text-4xl md:text-[40px] font-bold text-[#761318]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="font-lora text-xl sm:text-2xl text-[#94897d] line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-[#70685f] font-medium ml-1">
                    / piece • Min. {product.moq} pcs
                  </span>
                </div>
              </div>

              {/* Color / Finish Selector (Matching dropdown in reference design) */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="block font-lora text-xs font-bold uppercase tracking-[0.2em] text-[#736a61] mb-2">
                    Color / Finish
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {product.colors.map((c) => {
                      const isSelected = selectedColor === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setSelectedColor(c)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                            isSelected
                              ? "bg-[#761318] text-white border-[#761318] shadow-sm font-bold"
                              : "bg-white text-[#383129] border-[#dfcca0] hover:border-[#761318]"
                          }`}
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Decoration Method */}
              <div>
                <span className="block font-lora text-xs font-bold uppercase tracking-[0.2em] text-[#736a61] mb-2">
                  Decoration Method
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.decoration.map((dec) => {
                    const isSelected = selectedDecoration === dec;
                    return (
                      <button
                        key={dec}
                        type="button"
                        onClick={() => setSelectedDecoration(dec)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                          isSelected
                            ? "bg-[#550c10] text-white border-[#550c10] shadow-sm font-bold"
                            : "bg-white text-[#383129] border-[#dfcca0] hover:border-[#761318]"
                        }`}
                      >
                        {dec}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity & Add to Quote Action (Matching layout: [QTY ⌄] + [ACTION BUTTON]) */}
              <div>
                <span className="block font-lora text-xs font-bold uppercase tracking-[0.2em] text-[#736a61] mb-2">
                  Quantity (Min. {product.moq} pcs)
                </span>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Quantity Select Input */}
                  <div className="relative w-full sm:w-36">
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      aria-label="Select order quantity"
                      className="w-full appearance-none bg-white border border-[#dfcca0] rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#761318] cursor-pointer"
                    >
                      <option value={product.moq}>{product.moq} pcs (MOQ)</option>
                      <option value={product.moq * 2}>{product.moq * 2} pcs</option>
                      <option value={100}>100 pcs (Tier 2 Discount)</option>
                      <option value={250}>250 pcs (Tier 3 Discount)</option>
                      <option value={500}>500 pcs (Bulk Master)</option>
                      <option value={1000}>1,000+ pcs (Enterprise)</option>
                    </select>
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#761318] font-bold">
                      ▼
                    </span>
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    type="button"
                    onClick={() => setIsQuoteFormOpen(true)}
                    className="flex-1 py-3.5 px-6 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <span>Request Free Proof & Quote</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Fast Quote Form Accordion / Dropdown */}
              {isQuoteFormOpen && (
                <div className="rounded-2xl bg-[#faf5e4] border border-[#ebdcb3] p-5 sm:p-6 shadow-sm transition-all animate-fadeIn">
                  {isSubmitted ? (
                    <div className="text-center py-6 space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#761318] text-white flex items-center justify-center mx-auto text-xl">
                        ✓
                      </div>
                      <h3 className="font-lora text-xl font-bold text-[#171717]">
                        Quote Request Received!
                      </h3>
                      <p className="font-lora text-xs sm:text-sm text-[#4d463e]">
                        Our promotional branding specialist will contact you with volume pricing and digital mockups within 2-4 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#ebdcb3]">
                        <h3 className="font-lora font-bold text-base text-[#171717]">
                          Get Tailored Pricing for {quantity} Units
                        </h3>
                        <button
                          type="button"
                          onClick={() => setIsQuoteFormOpen(false)}
                          className="text-xs text-[#761318] font-semibold hover:underline"
                        >
                          Close
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#dfcca0] bg-white text-[#171717] outline-none focus:ring-1 focus:ring-[#761318]"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Work Email *"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#dfcca0] bg-white text-[#171717] outline-none focus:ring-1 focus:ring-[#761318]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Company / Organization"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#dfcca0] bg-white text-[#171717] outline-none focus:ring-1 focus:ring-[#761318]"
                        />
                        <input
                          type="text"
                          placeholder="Target In-Hands Date (Optional)"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#dfcca0] bg-white text-[#171717] outline-none focus:ring-1 focus:ring-[#761318]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-bold text-xs sm:text-sm rounded-lg shadow transition-colors"
                      >
                        Submit Quote Request
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* ================= BOTTOM TABS (DETAILS | DELIVERY | ARTWORK) ================= */}
            <div className="mt-10 pt-6 border-t border-[#ebdcb3]">
              {/* Tab Navigation (Matching DETAILS | DELIVERY | RETURN in screenshot) */}
              <div className="flex items-center gap-6 sm:gap-8 pb-3 border-b border-[#ebdcb3]/60">
                {(
                  [
                    { id: "details", label: "DETAILS" },
                    { id: "delivery", label: "DELIVERY & LEAD TIME" },
                    { id: "artwork", label: "DECORATION SPECS" },
                  ] as const
                ).map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative font-lora text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase transition-colors pb-1.5 focus:outline-none ${
                        isActive
                          ? "text-[#761318]"
                          : "text-[#736a61] hover:text-[#761318]"
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#761318] rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panes */}
              <div className="pt-4 font-lora text-xs sm:text-sm text-[#4d453d] leading-relaxed">
                {activeTab === "details" && (
                  <div className="space-y-3">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {Object.entries(product.specifications).map(
                        ([key, val]) => (
                          <li
                            key={key}
                            className="flex items-baseline justify-between py-1 border-b border-[#ebdcb3]/40"
                          >
                            <span className="font-semibold text-[#171717]">
                              {key}:
                            </span>
                            <span className="text-[#554d45]">{val}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {activeTab === "delivery" && (
                  <div className="space-y-2.5">
                    <p>
                      <strong>Standard Production:</strong> {product.leadTime}
                    </p>
                    <p>
                      <strong>Rush Services:</strong> Available on select items (2 - 3 business days). Inquire with your account specialist.
                    </p>
                    <p>
                      <strong>Drop-Shipping:</strong> Individual recipient fulfillment available for distributed workforces and client appreciation campaigns.
                    </p>
                  </div>
                )}

                {activeTab === "artwork" && (
                  <div className="space-y-2.5">
                    <p>
                      <strong>Supported Artwork Files:</strong> Vector format preferred (.AI, .EPS, .PDF, or high-res .SVG).
                    </p>
                    <p>
                      <strong>Digital Proof:</strong> You will receive a complimentary full-color digital proof showing exact sizing, PMS color match, and placement before production begins.
                    </p>
                    <p>
                      <strong>Included Decor:</strong> {product.decoration.join(", ")}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RELATED MERCHANDISE SECTION ================= */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-12 border-t border-[#ebdcb3]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#761318] block mb-1">
                  Complete The Collection
                </span>
                <h2 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
                  Related Promotional Merchandise
                </h2>
              </div>

              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#761318] hover:underline"
              >
                <span>View Full Catalog</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  viewMode="grid"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailsClient;

