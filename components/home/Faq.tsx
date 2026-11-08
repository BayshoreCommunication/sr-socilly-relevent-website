"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../shared/Container";

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "01",
    number: "01",
    question: "What services does Socially Relevant Promo offer?",
    answer:
      "We provide end-to-end marketing solutions including Social Media Management, Local SEO & AIO, Video & Creative Content, Web Design & Development, and high-quality branded promotional products and apparel.",
  },
  {
    id: "02",
    number: "02",
    question: "What is the difference between membership and contract services?",
    answer:
      "Our 360° Membership provides dedicated, ongoing monthly marketing support, continuous optimization, and preferred partner pricing. Contract services are tailored for one-time projects or specialized standalone campaigns.",
  },
  {
    id: "03",
    number: "03",
    question: "Which membership plan is right for my business?",
    answer:
      "During our initial discovery consultation, we evaluate your current market presence, audience reach, and business goals to recommend or customize the exact tier of support that maximizes your ROI.",
  },
  {
    id: "04",
    number: "04",
    question: "Can I combine online marketing with promotional products?",
    answer:
      "Absolutely. We help connect your online presence with branded merchandise, client gifts, events, and offline campaigns for a consistent brand experience.",
  },
  {
    id: "05",
    number: "05",
    question: "Do you work with specific industries?",
    answer:
      "Yes. We have specialized experience with corporate & business firms, non-profit organizations, personal injury attorneys, chiropractic & medical wellness clinics, and community-driven brands.",
  },
  {
    id: "06",
    number: "06",
    question: "How do we get started?",
    answer:
      "Getting started is quick and seamless. Simply request a custom proposal or book a strategy call with our team. We'll map out a tailored plan to elevate your brand both online and offline.",
  },
];

export const Faq: React.FC = () => {
  // Default open item "04" to match the design mockup
  const [openId, setOpenId] = useState<string | null>("04");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Split into 2 columns (01, 02, 03) and (04, 05, 06)
  const col1 = FAQ_DATA.slice(0, 3);
  const col2 = FAQ_DATA.slice(3, 6);

  const renderCard = (item: FaqItem) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        onClick={() => toggleItem(item.id)}
        className={`w-full rounded-2xl bg-[#fffdf5] transition-all duration-300 cursor-pointer shadow-sm ${
          isOpen
            ? "border-2 border-[#761318] p-5 sm:p-6 shadow-md"
            : "border border-[#ebd9cd] p-4 sm:p-5 hover:border-[#dfc6b3] hover:shadow"
        }`}
      >
        {/* Header row: Number badge + Question + Toggle Icon */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5 flex-1 text-left">
            {/* Number Badge */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fde9eb] flex items-center justify-center shrink-0">
              <span className="font-lora font-bold text-xs sm:text-sm text-[#761318]">
                {item.number}
              </span>
            </div>

            {/* Question Text */}
            <h3
              className={`font-lora font-bold text-base sm:text-[17px] leading-snug transition-colors duration-200 ${
                isOpen ? "text-[#761318]" : "text-[#171717]"
              }`}
            >
              {item.question}
            </h3>
          </div>

          {/* Plus / Close Icon */}
          <div className="shrink-0 flex items-center justify-center w-6 h-6">
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#761318]"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#171717]"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
          </div>
        </div>

        {/* Expanded Answer Content */}
        {isOpen && (
          <div className="mt-3.5 pt-3.5 border-t border-[#f0e3d8] animate-fadeIn">
            <p className="text-[#3d3830] text-xs sm:text-[13.5px] leading-relaxed pl-1 sm:pl-12">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#d5cbc9] py-16 sm:py-20 md:py-24 border-b border-[#c2b6b4]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-12 md:mb-14 text-left">
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-bold text-[#171717] leading-[1.2] tracking-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-lora text-base sm:text-lg md:text-[18px] text-[#3d3830] leading-relaxed">
            Quick answers to help you choose the right marketing solution for
            your business.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {/* Column 1: Items 01, 02, 03 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {col1.map(renderCard)}
          </div>

          {/* Column 2: Items 04, 05, 06 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {col2.map(renderCard)}
          </div>
        </div>

        {/* Bottom Floating Pill: "Still Have Questions? Let's Talk →" */}
        <div className="max-w-xl mx-auto mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-full border border-[#ebd8cc] px-6 sm:px-8 py-3.5 sm:py-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all duration-300 hover:shadow-md">
          <div>
            <h3 className="font-lora font-bold text-lg sm:text-xl md:text-[22px] leading-snug">
              <span className="text-[#171717]">Still Have </span>
              <span className="text-[#761318]">Questions?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#4d4643]">
              Let&apos;s find the right approach for your brand.
            </p>
          </div>

          <Link
            href="#contact"
            className="shrink-0 px-6 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#98141c] to-[#760e14] hover:from-[#aa1821] hover:to-[#851117] text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-1.5"
          >
            <span>Let&apos;s Talk</span>
            <span className="font-sans text-sm">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Faq;

