import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#fffceb] border-t-[3px] border-[#761318] pt-12 sm:pt-16 pb-8 mt-auto text-[#2b2621]">
      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          {/* Column 1: Brand Logo & Description */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#761318] rounded"
              aria-label="Socially Relevant Promo Homepage"
            >
              <Image
                src="/images/logo/SR-promo-Logo-1.png"
                alt="Socially Relevant Promo Logo"
                width={200}
                height={50}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="font-lora text-[13.5px] sm:text-sm leading-relaxed text-[#3a332a] max-w-sm">
              A company combining digital marketing and promotional products to help
              professional firms build brand visibility and meaningful connections
              online, offline, and within their communities.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h3 className="font-lora font-bold text-lg sm:text-xl text-[#761318]">
              Explore
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 font-lora text-[13.5px] sm:text-sm text-[#3a332a]">
              <li>
                <Link href="/" className="hover:text-[#761318] hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#761318] hover:underline transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#761318] hover:underline transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/featured-products" className="hover:text-[#761318] hover:underline transition-colors">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#761318] hover:underline transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h3 className="font-lora font-bold text-lg sm:text-xl text-[#761318]">
              Our Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 font-lora text-[13.5px] sm:text-sm text-[#3a332a]">
              <li className="flex items-center gap-2">
                <span className="text-[#761318] text-xs leading-none">•</span>
                <span>Promotional Products</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#761318] text-xs leading-none">•</span>
                <span>Event & Campaign Strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#761318] text-xs leading-none">•</span>
                <span>Business Apparel</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#761318] text-xs leading-none">•</span>
                <span>Digital Marketing Strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#761318] text-xs leading-none">•</span>
                <span>SEO & AIO</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-3.5">
            <h3 className="font-lora font-bold text-lg sm:text-xl text-[#761318]">
              Connect With Us
            </h3>

            {/* Email link with envelope icon */}
            <a
              href="mailto:Jsells@sociallyrelevantpromo.com"
              className="inline-flex items-center gap-2 text-[#241f1a] hover:text-[#761318] transition-colors group"
            >
              <svg
                className="h-5 w-5 shrink-0 text-[#761318] group-hover:scale-105 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-lora font-semibold text-[13.5px] sm:text-sm whitespace-nowrap">
                Jsells@sociallyrelevantpromo.com
              </span>
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all duration-200 border border-[#e5dcb7]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all duration-200 border border-[#e5dcb7]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all duration-200 border border-[#e5dcb7]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.55c0 2.24-.76 4.49-2.31 6.13-1.69 1.8-4.14 2.77-6.59 2.58-2.6-.2-5.02-1.64-6.39-3.86-1.55-2.48-1.58-5.83-.09-8.34 1.4-2.38 3.96-3.92 6.72-4.01v4.13c-1.39.06-2.75.83-3.41 2.06-.75 1.37-.58 3.19.43 4.39.95 1.14 2.52 1.62 3.98 1.25 1.26-.32 2.29-1.38 2.57-2.65.08-.37.12-.76.12-1.14V.02h.64z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all duration-200 border border-[#e5dcb7]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 sm:pt-8 border-t border-[#ebdfb8] flex flex-col sm:flex-row items-center justify-between gap-4 font-lora text-xs sm:text-[13.5px] text-[#761318]">
          <p>© 2026 Socially Relevant Promo. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
