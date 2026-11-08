"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navItems } from "./nav-data";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 w-full bg-[#fffceb] border-b-[3px] border-[#761318] z-50 shadow-sm transition-all duration-200">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#761318] rounded"
          aria-label="SR Socially Relevant Promo Home"
        >
          <Image
            src="/images/logo/SR-promo-Logo-1.png"
            alt="SR Socially Relevant Promo"
            width={240}
            height={55}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Desktop Navigation" className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-lora text-lg font-medium transition-all duration-200 tracking-wide text-[#761318] hover:text-[#4d0c0f] ${
                      isActive
                        ? "font-bold text-[#550c10] underline underline-offset-4 decoration-2 decoration-[#761318]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#761318] hover:bg-[#f3edd0] focus:outline-none focus:ring-2 focus:ring-[#761318] transition-colors"
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMobileMenuOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-[#fffceb] border-b-2 border-[#761318] shadow-lg px-6 py-5 transition-all duration-200 z-50">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block font-lora text-xl font-medium py-1 text-[#761318] hover:text-[#4d0c0f] ${
                      isActive ? "font-bold text-[#550c10]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
