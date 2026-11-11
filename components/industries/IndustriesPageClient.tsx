"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { INDUSTRIES_DATA } from "./industries-data";

export const IndustriesPageClient: React.FC = () => {
  return (
    <div className="w-full bg-[#fffceb] min-h-screen py-10 sm:py-14 md:py-18">
      <Container>
        {/* ================= 1. PAGE HEADER & INTRO ================= */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#761318] mb-3">
            Sector-Tailored Expertise
          </span>
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#171717] leading-[1.18] tracking-tight mb-4">
            Different Industries. One Strategic Goal.
          </h2>
          <p className="font-lora text-base sm:text-lg text-[#3d3830] leading-relaxed max-w-3xl mx-auto">
            Every industry has its own audience, regulatory nuances, and competitive dynamics. We combine tailored marketing strategies, premium custom merchandise, and dependable digital visibility to help your organization earn trust and command attention.
          </p>
        </div>

        {/* ================= 2. 4-CARD VISUAL SHOWCASE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {INDUSTRIES_DATA.map((item) => (
            <a
              key={item.id}
              href={`#${item.slug}`}
              className="group relative h-[390px] sm:h-[420px] lg:h-[440px] rounded-[22px] overflow-hidden border-2 border-[#761318] shadow-sm hover:shadow-xl transition-all duration-500 block cursor-pointer"
            >
              {/* Card Background Image with hover zoom */}
              <Image
                src={item.imageSrc}
                alt={`${item.category} ${item.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Base Gradient Overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#5a090e]/92 via-[#761318]/65 via-42% to-transparent pointer-events-none transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                aria-hidden="true"
              />

              {/* Hover Gradient Overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#55080c]/96 via-[#761318]/78 via-48% to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                aria-hidden="true"
              />

              {/* Card Bottom Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#f5ebd2] mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-lora text-xl sm:text-[22px] font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Circular Arrow Button */}
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/70 text-white flex items-center justify-center shrink-0 ml-3 transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover Reveal Description */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="font-lora text-[13px] sm:text-[13.5px] leading-relaxed text-[#f7edd2] pt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ================= 3. DEEP-DIVE IN-DEPTH INDUSTRY SECTIONS ================= */}
        <div className="space-y-16 sm:space-y-24 mb-16 sm:mb-24">
          {INDUSTRIES_DATA.map((ind, index) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={ind.id}
                id={ind.slug}
                className="scroll-mt-24 rounded-3xl bg-white border border-[#ebdcb3] p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left / Right Visual Media Column */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#761318] shadow-md group">
                      <Image
                        src={ind.imageSrc}
                        alt={`${ind.category} ${ind.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5a090e]/85 via-transparent to-transparent" />
                      {ind.badge && (
                        <span className="absolute top-4 left-4 bg-[#761318] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                          {ind.badge}
                        </span>
                      )}

                      <div className="absolute bottom-5 inset-x-5 text-white">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f7dcd8] block mb-1">
                          Target Sector
                        </span>
                        <h4 className="font-lora text-2xl font-bold text-white leading-tight">
                          {ind.title}
                        </h4>
                      </div>
                    </div>

                    {/* Quick Metrics Bar below image */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {ind.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-[#faf4e1] rounded-xl border border-[#ebdcb3] p-3 text-center"
                        >
                          <span className="block font-lora text-base sm:text-lg font-bold text-[#761318]">
                            {m.value}
                          </span>
                          <span className="block text-[10px] sm:text-[11px] text-[#554d45] leading-tight line-clamp-2 mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text Breakdown Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div>
                      <span className="font-lora text-xs font-bold tracking-[0.25em] uppercase text-[#761318] block mb-2">
                        {ind.category} Focus
                      </span>
                      <h3 className="font-lora text-2xl sm:text-3xl md:text-4xl font-bold text-[#171717] tracking-tight leading-snug mb-3">
                        {ind.tagline}
                      </h3>
                      <p className="font-lora text-sm sm:text-base text-[#4d453d] leading-relaxed">
                        {ind.description}
                      </p>
                    </div>

                    {/* Who We Serve & Common Challenges */}
                    <div className="bg-[#fbf9f4] rounded-2xl border border-[#ebdcb3]/80 p-5 space-y-3">
                      <div>
                        <strong className="block text-xs font-bold uppercase tracking-wider text-[#761318] mb-1">
                          Audience Profile
                        </strong>
                        <p className="font-lora text-xs sm:text-sm text-[#383129]">
                          {ind.audience}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#ebdcb3]/60">
                        <strong className="block text-xs font-bold uppercase tracking-wider text-[#761318] mb-1.5">
                          Key Challenges We Solve
                        </strong>
                        <ul className="space-y-1 text-xs sm:text-sm text-[#4d453d]">
                          {ind.challenges.map((ch, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <span className="text-[#761318] font-bold">•</span>
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Recommended Merchandise Solutions (2x2 Grid) */}
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wider text-[#761318] mb-3">
                        Proven Promotional Merchandise
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {ind.recommendedSolutions.map((sol, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-white rounded-xl border border-[#ebdcb3] p-4 shadow-2xs"
                          >
                            <h5 className="font-lora font-bold text-sm text-[#171717] mb-1">
                              {sol.title}
                            </h5>
                            <p className="font-lora text-xs text-[#524b43] leading-relaxed">
                              {sol.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Digital Marketing Synergy */}
                    <div className="pt-2">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-[#761318] mb-2">
                        Integrated Digital Marketing Strategy
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {ind.digitalMarketingFocus.map((foc, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-xs bg-[#fdf5eb] text-[#761318] border border-[#ebdcb3] px-3 py-1 rounded-lg font-medium"
                          >
                            ✓ {foc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-[#ebdcb3]/60">
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-bold text-xs sm:text-sm rounded-xl shadow transition-all hover:scale-105"
                      >
                        Request {ind.title} Strategy Deck →
                      </Link>

                      <Link
                        href="/products"
                        className="px-5 py-3 bg-white hover:bg-[#faf4df] text-[#761318] border border-[#ebdcb3] font-lora font-semibold text-xs sm:text-sm rounded-xl transition-all"
                      >
                        Browse Industry Catalog
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ================= 4. VALUE PILLARS: WHY SECTOR-SPECIFIC SOURCING ================= */}
        <div className="bg-[#faf4e1] rounded-3xl border border-[#ebdcb3] p-8 sm:p-12 mb-16 sm:mb-24">
          <div className="max-w-3xl mb-10">
            <span className="font-lora text-xs font-bold tracking-[0.25em] uppercase text-[#761318] block mb-1">
              The SR Promo Advantage
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl md:text-4xl font-bold text-[#171717]">
              Why Tailored Industry Merchandising Matters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#ebdcb3] p-6 shadow-sm">
              <span className="text-2xl mb-3 block">🎯</span>
              <h4 className="font-lora font-bold text-lg text-[#171717] mb-2">
                Calibrated Perception
              </h4>
              <p className="font-lora text-xs sm:text-sm text-[#524b43] leading-relaxed">
                What impresses an executive partner at a law firm differs vastly from what inspires a patient at a wellness clinic. We engineer products that align with your audience&apos;s dignity and expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#ebdcb3] p-6 shadow-sm">
              <span className="text-2xl mb-3 block">🛡️</span>
              <h4 className="font-lora font-bold text-lg text-[#171717] mb-2">
                Compliance & Longevity
              </h4>
              <p className="font-lora text-xs sm:text-sm text-[#524b43] leading-relaxed">
                From BPA-free clinic-grade drinkware to bar-association approved client gifts and NFPA-certified event table throws, our materials comply with strict institutional standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#ebdcb3] p-6 shadow-sm">
              <span className="text-2xl mb-3 block">🔄</span>
              <h4 className="font-lora font-bold text-lg text-[#171717] mb-2">
                Omnichannel Synergy
              </h4>
              <p className="font-lora text-xs sm:text-sm text-[#524b43] leading-relaxed">
                We don&apos;t just print logos. We synchronize your real-world tangible promotional experiences with high-intent SEO, AI search presence, and hyper-targeted digital campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* ================= 5. BOTTOM CUSTOM INDUSTRY CTA BANNER ================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#761318] to-[#45070a] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#55090d]">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2cbcf]">
              Custom Sector Sourcing
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-bold text-white">
              Don&apos;t see your specific industry listed?
            </h3>
            <p className="font-lora text-sm sm:text-base text-white/85 max-w-xl">
              We partner with specialized practices, educational institutions, and luxury service providers across North America. Tell us about your audience and timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-white text-[#761318] hover:bg-[#f6f2e1] font-lora font-bold text-sm sm:text-base rounded-xl shadow-md transition-all whitespace-nowrap hover:scale-105"
          >
            Request Custom Consultation →
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default IndustriesPageClient;

