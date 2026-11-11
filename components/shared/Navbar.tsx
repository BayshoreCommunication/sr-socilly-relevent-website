"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navItems, SubNavItem } from "./nav-data";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  const getServiceIcon = (title: string) => {
    switch (title) {
      case "Promotional Products":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
      case "SEO & AIO":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        );
      case "Event & Campaign Strategy":
      case "Event and Campaign Strategy":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "Business Apparel":
      case "Business Apparels":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
        );
      case "Digital Marketing Strategy":
      default:
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
    }
  };

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
          <ul className="flex items-center gap-6 lg:gap-9 xl:gap-11">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              if (hasDropdown) {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className={`inline-flex items-center gap-1.5 font-lora text-base lg:text-lg font-medium transition-all duration-200 tracking-wide text-[#761318] hover:text-[#4d0c0f] ${
                        isActive || isServicesDropdownOpen
                          ? "font-bold text-[#550c10]"
                          : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.4}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Clean Dropdown Panel (Only Titles, No Subtitles) */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 sm:w-96 z-50 animate-fadeIn">
                        <div className="bg-[#fffdf7] border-2 border-[#761318] rounded-2xl shadow-xl p-3 border-t-4 border-t-[#761318] overflow-hidden">
                          {/* 5 Services List (Only Titles) */}
                          <div className="space-y-1">
                            {item.children!.map((sub: SubNavItem) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#faf4df] border border-transparent hover:border-[#ebdcb3] transition-all duration-150 text-left"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-[#fdf2f2] text-[#761318] flex items-center justify-center border border-[#ebdcb3]/60 group-hover:bg-[#761318] group-hover:text-white transition-all flex-shrink-0 shadow-2xs">
                                    {getServiceIcon(sub.title)}
                                  </div>
                                  <span className="font-lora font-semibold text-sm sm:text-[14.5px] text-[#171717] group-hover:text-[#761318] transition-colors">
                                    {sub.title}
                                  </span>
                                </div>
                                <span className="text-xs text-[#761318] opacity-0 group-hover:opacity-100 transition-opacity">
                                  →
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* Dropdown Bottom Link */}
                          <div className="mt-2 pt-2 border-t border-[#ebdcb3]/70 text-center">
                            <Link
                              href="/services"
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="font-lora font-bold text-xs text-[#761318] hover:underline inline-flex items-center gap-1 py-1"
                            >
                              <span>View All Services</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-lora text-base lg:text-lg font-medium transition-all duration-200 tracking-wide text-[#761318] hover:text-[#4d0c0f] ${
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
        <div className="absolute left-0 right-0 top-full bg-[#fffceb] border-b-2 border-[#761318] shadow-lg px-6 py-5 transition-all duration-200 z-50 max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              if (hasDropdown) {
                return (
                  <li key={item.label} className="border-b border-[#ebdcb3]/60 pb-3">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`font-lora text-xl font-medium py-1 text-[#761318] hover:text-[#4d0c0f] ${
                          isActive ? "font-bold text-[#550c10]" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        aria-label="Toggle services list"
                        className="p-2 text-[#761318]"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.4}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Services Accordion (Only Titles) */}
                    {isMobileServicesOpen && (
                      <ul className="pl-3 mt-2 space-y-2 border-l-2 border-[#761318]/40">
                        {item.children!.map((sub) => (
                          <li key={sub.title}>
                            <Link
                              href={sub.href}
                              onClick={closeMobileMenu}
                              className="block py-1.5 font-lora font-semibold text-sm text-[#761318] hover:underline"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

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
