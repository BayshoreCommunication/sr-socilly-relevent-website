"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { PRODUCTS_DATA } from "@/components/products/product-data";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  /** Optional custom list of breadcrumb items. If not provided, it auto-generates from the current pathname. */
  items?: BreadcrumbItem[];
  /** Optional main heading for the banner. If not provided, defaults to the current page title. */
  title?: string;
  /** Optional small kicker or subtitle. */
  subtitle?: string;
  /** Separator style between items. Defaults to "chevron" matching modern luxury design. */
  separator?: "chevron" | "slash" | "dot" | React.ReactNode;
  /** Whether to show a miniature home icon next to the "Home" link. Defaults to false. */
  showHomeIcon?: boolean;
  /** Optional custom label for the root link. Defaults to "Home". */
  homeLabel?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Whether to render as a full-width header banner with the background image. Defaults to true. */
  fullWidth?: boolean;
  /** Custom background image path. Defaults to "/images/home/our-approch/our-approch-bg.png". */
  bgImage?: string;
  /** Whether to inject Schema.org JSON-LD BreadcrumbList for SEO rich snippets. Defaults to true. */
  includeJsonLd?: boolean;
}

const SERVICE_SLUG_TITLES: Record<string, string> = {
  services: "Our Services",
  industries: "Industries We Serve",
  about: "About Us",
  contact: "Contact Us",
  "promotional-products": "Promotional Products",
  "seo-aio": "SEO & AIO",
  "event-and-campaign-strategy": "Event and Campaign Strategy",
  "business-apparels": "Business Apparels",
  "digital-marketing-strategy": "Digital Marketing Strategy",
};

// Convert url slug to friendly title (e.g. "featured-products" -> "Featured Products")
function formatSlugToTitle(slug: string): string {
  if (SERVICE_SLUG_TITLES[slug]) return SERVICE_SLUG_TITLES[slug];
  if (slug === "products") return "Products";
  const matchedProduct = PRODUCTS_DATA.find((p) => p.id === slug);
  if (matchedProduct) return matchedProduct.name;
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  title,
  subtitle,
  separator = "chevron",
  showHomeIcon = false,
  homeLabel = "Home",
  className = "",
  fullWidth = true,
  bgImage = "/images/home/our-approch/our-approch-bg.png",
  includeJsonLd = true,
}) => {
  const pathname = usePathname();

  // If items are not passed, generate them automatically from pathname
  const resolvedItems: BreadcrumbItem[] = React.useMemo(() => {
    if (items && items.length > 0) {
      return items;
    }

    if (!pathname || pathname === "/") {
      return [];
    }

    const segments = pathname.split("/").filter(Boolean);
    return segments.map((seg, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      return {
        label: formatSlugToTitle(decodeURIComponent(seg)),
        href: idx === segments.length - 1 ? undefined : href,
      };
    });
  }, [items, pathname]);

  // Schema.org JSON-LD items (must be called unconditionally before any early return)
  const jsonLdData = React.useMemo(() => {
    if (!includeJsonLd || resolvedItems.length === 0) return null;

    const fullItems = [
      { name: homeLabel, item: "/" },
      ...resolvedItems.map((it) => ({
        name: it.label,
        item: it.href || "",
      })),
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: fullItems.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.name,
        ...(entry.item ? { item: entry.item } : {}),
      })),
    };
  }, [includeJsonLd, homeLabel, resolvedItems]);

  // Do not render anything on the home page or when there are no breadcrumb items
  if (resolvedItems.length === 0) {
    return null;
  }

  // Active page title
  const activeTitle =
    title ||
    resolvedItems[resolvedItems.length - 1]?.label ||
    "Promotional Products";

  // Render chosen separator icon
  const renderSeparator = () => {
    if (React.isValidElement(separator)) {
      return separator;
    }

    if (separator === "slash") {
      return (
        <span className="text-[#f0b5ad]/70 select-none text-xs font-normal" aria-hidden="true">
          /
        </span>
      );
    }

    if (separator === "dot") {
      return (
        <span className="text-[#f0b5ad]/70 select-none text-xs" aria-hidden="true">
          •
        </span>
      );
    }

    // Default "chevron" - sleek SVG matching the reference design
    return (
      <svg
        className="w-3.5 h-3.5 text-[#f0b5ad]/80 select-none flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.4}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    );
  };

  // The Breadcrumb Nav Trail (Links)
  const navTrail = (
    <nav
      aria-label="Breadcrumb"
      className="font-lora select-none mb-2 sm:mb-2.5"
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-medium tracking-wide">
        {/* Root / Home link */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[#f7dcd8] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
          >
            {showHomeIcon && (
              <svg
                className="w-3.5 h-3.5 mb-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            )}
            <span className="hover:underline underline-offset-4 decoration-1 decoration-[#f7dcd8]/60 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold">
              {homeLabel}
            </span>
          </Link>
        </li>

        {/* Subsequent items */}
        {resolvedItems.map((item, index) => {
          const isLast = index === resolvedItems.length - 1;
          const hasHref = Boolean(item.href) && !isLast;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <li aria-hidden="true" className="flex items-center">
                {renderSeparator()}
              </li>

              <li className="inline-flex items-center max-w-[220px] sm:max-w-none">
                {hasHref ? (
                  <Link
                    href={item.href!}
                    className="text-[#f7dcd8] hover:text-white transition-colors truncate hover:underline underline-offset-4 decoration-1 decoration-[#f7dcd8]/60 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="font-bold text-white uppercase tracking-[0.2em] text-[11px] sm:text-xs truncate"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );

  return (
    <>
      {jsonLdData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      )}

      {fullWidth ? (
        <div className={`relative w-full overflow-hidden bg-[#0c0103] py-7 sm:py-9 md:py-11 border-b-[3px] border-[#5e070d] shadow-sm ${className}`}>
          {/* Background Image layer */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src={bgImage}
              alt="Page Header Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-85"
            />
            {/* Rich gradient overlay for impeccable luxury feel and contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7d0b11]/90 via-[#460509]/85 to-[#0c0103]/90" />
            {/* Subtle diagonal ambient light beam */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255, 75, 95, 0.45) 0%, rgba(180, 20, 35, 0.2) 28%, transparent 55%)",
              }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-80 h-36 opacity-30 transform -rotate-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 90, 90, 0.35), transparent)",
              }}
            />
          </div>

          {/* Banner Content Container */}
          <Container className="relative z-10">
            {navTrail}
            <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] tracking-tight">
              {activeTitle}
            </h1>
            {subtitle && (
              <p className="font-lora text-sm sm:text-base text-[#f0d8d6] mt-2 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </Container>
        </div>
      ) : (
        navTrail
      )}
    </>
  );
};

export default Breadcrumb;
