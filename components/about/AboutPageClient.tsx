"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

interface ProgramItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const QUALITY_PROGRAMS: ProgramItem[] = [
  {
    title: "Corporate Recognition Programs",
    description: "Honor leadership and milestone contributions with premium executive keepsakes and engraved mementos.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Premiums and Incentives Sales",
    description: "High-value rewards that motivate sales teams, accelerate conversion rates, and celebrate top producers.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Trade Show Programs",
    description: "High-impact booth giveaways, banners, lanyards, and interactive items that stop foot traffic.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Safety Programs",
    description: "OSHA-compliant branded apparel, high-visibility workwear, and zero-incident incentive merchandise.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Service Awards",
    description: "Meaningful 5, 10, and 20-year tenure awards recognizing dedication, loyalty, and career anniversaries.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Employee Recognition",
    description: "Welcome onboarding kits, employee-of-the-month rewards, and wellness appreciation packages.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Product Introductions",
    description: "Unboxing launch kits and influencer gift sets designed to build immediate buzz around new releases.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Business Gifts",
    description: "Curated client thank-you gifts, executive holiday boxes, and luxury desktop accessories.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    title: "Sport Tournaments",
    description: "Custom golf balls, moisture-wicking polos, medals, team jerseys, and branded sponsor towels.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    title: "Company Outings",
    description: "Team retreat swag bags, outdoor gear, sunglasses, insulated coolers, and commemorative t-shirts.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Thank You, Programs",
    description: "Targeted appreciation tokens for referral partners, patient loyalty, and long-standing clients.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Services: Stores & Fulfillment",
    description: "Custom on-demand online swag portals, company company stores, inventory storage, and individual dropshipping.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export const AboutPageClient: React.FC = () => {
  return (
    <div className="w-full bg-[#fffceb] min-h-screen py-10 sm:py-14 md:py-20">
      <Container>
        {/* ================= 1. ABOUT SOCIALLY RELEVANT PROMO ================= */}
        <section className="max-w-4xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd0] border border-[#ebdcb3] text-[#761318] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#761318]" />
            About Socially Relevant Promo
          </div>

          <h1 className="font-lora text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight leading-[1.18] mb-6">
            We are a full-service advertising specialties company offering a wide range of promotional items and apparel to promote your company offline and online.
          </h1>

          <p className="font-lora text-base sm:text-lg text-[#3f3830] leading-relaxed mb-6">
            We help you find a cost-effective way to market and promote your business with custom promotional items that speak to your customers and clients. With the number of companies we work with, the possibilities are only limited by your imagination.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-bold text-sm sm:text-base rounded-xl shadow-md transition-all hover:scale-105"
            >
              Contact Us To Get Started →
            </Link>
            <Link
              href="/products"
              className="px-6 py-3.5 bg-white hover:bg-[#f4ebd0] text-[#761318] border border-[#ebdcb3] font-lora font-bold text-sm sm:text-base rounded-xl transition-all"
            >
              Explore Our Product Catalog
            </Link>
          </div>
        </section>

        {/* ================= 2. QUALITY PROGRAMS SECTION ================= */}
        <section className="mb-20 sm:mb-28">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="font-lora text-xs font-bold uppercase tracking-widest text-[#761318] block mb-2">
              Capabilities & Offerings
            </span>
            <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl font-bold text-[#171717] leading-tight mb-3">
              We Can Assist Your Marketing Objectives With These Quality Programs:
            </h2>
            <p className="font-lora text-sm sm:text-base text-[#5a5043]">
              From corporate culture initiatives to external revenue campaigns, our programs deliver measurable ROI and unforgettable brand impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {QUALITY_PROGRAMS.map((program, idx) => (
              <div
                key={idx}
                className="bg-[#fbf8ed] border border-[#ebdcb3] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#761318]/50 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#761318]/10 text-[#761318] flex items-center justify-center mb-4 group-hover:bg-[#761318] group-hover:text-white transition-colors duration-200">
                    {program.icon}
                  </div>
                  <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717] group-hover:text-[#761318] transition-colors mb-2">
                    {program.title}
                  </h3>
                  <p className="font-lora text-xs sm:text-sm text-[#4d453d] leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. MEET THE TEAM SECTION ================= */}
        <section id="team" className="mb-20 sm:mb-28 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="font-lora text-xs font-bold uppercase tracking-widest text-[#761318] block mb-2">
              Leadership & Culture
            </span>
            <h2 className="font-lora text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717]">
              Meet The Team
            </h2>
            <p className="font-lora text-sm sm:text-base text-[#5a5043] mt-3">
              The strategists, sourcing experts, and brand builders dedicated to making your merchandise relevant across every platform.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
            {/* Member 1: Jessica Sells */}
            <div
              id="team-jessica"
              className="scroll-mt-28 bg-[#fbf8ed] border border-[#ebdcb3] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all hover:shadow-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#761318] via-[#a82026] to-[#761318]" />
              <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
                {/* Portrait Capsule */}
                <div className="relative z-10 w-[180px] sm:w-[210px] md:w-[230px] aspect-[112/165] shrink-0 rounded-full border-2 border-[#800b10] overflow-hidden shadow-md bg-[#3a0609]">
                  <Image
                    src="/images/home/founders/jessica-yates2.png"
                    alt="Jessica Sells - COO & Brand Strategist"
                    fill
                    sizes="(max-width: 768px) 210px, 240px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Bio Content */}
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                  <span className="inline-block self-center md:self-start text-xs font-bold tracking-widest uppercase text-[#761318] bg-[#f4ebd0] px-3 py-1 rounded-full mb-3">
                    Brand Strategy & Leadership
                  </span>
                  <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
                    Jessica Sells
                  </h3>
                  <p className="font-lora font-semibold text-sm sm:text-base text-[#761318] mt-1 mb-5">
                    COO & Brand Strategist | Relevant Promos
                  </p>

                  <div className="space-y-3.5 font-lora text-sm sm:text-base text-[#3d362e] leading-relaxed">
                    <p>
                      Jessica Sells got her start working in her dad’s promotional products business, learning firsthand how tangible items can shape brand identity. Now with over a decade of experience and a background in digital marketing, she leads Relevant Promos with a strategy-first approach that blends physical products with digital awareness.
                    </p>
                    <p>
                      From everyday merch to campaign-driven pieces, Jessica helps businesses turn branded products into powerful tools that build visibility, trust, and relevance, on every platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Member 2: Paul Vilim */}
            <div
              id="team-paul"
              className="scroll-mt-28 bg-[#fbf8ed] border border-[#ebdcb3] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all hover:shadow-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#761318] via-[#a82026] to-[#761318]" />
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10">
                {/* Portrait Capsule */}
                <div className="relative z-10 w-[180px] sm:w-[210px] md:w-[230px] aspect-[112/165] shrink-0 rounded-full border-2 border-[#800b10] overflow-hidden shadow-md bg-[#3a0609]">
                  <Image
                    src="/images/home/founders/paul-vilim2.png"
                    alt="Paul Vilim - Director of Operations & Sourcing"
                    fill
                    sizes="(max-width: 768px) 210px, 240px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Bio Content */}
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                  <span className="inline-block self-center md:self-start text-xs font-bold tracking-widest uppercase text-[#761318] bg-[#f4ebd0] px-3 py-1 rounded-full mb-3">
                    Global Sourcing & Operations
                  </span>
                  <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
                    Paul Vilim
                  </h3>
                  <p className="font-lora font-semibold text-sm sm:text-base text-[#761318] mt-1 mb-5">
                    Director of Operations & Sourcing | Relevant Promos
                  </p>

                  <div className="space-y-3.5 font-lora text-sm sm:text-base text-[#3d362e] leading-relaxed">
                    <p>
                      With a background in luxury hospitality and over a decade in marketing and business development, Paul brings operational precision and product expertise to the table.
                    </p>
                    <p>
                      At Relevant Promos, he oversees sourcing, vendor partnerships, and backend logistics, ensuring every branded order is delivered on time, on budget, and exactly as planned.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Member 3: Bentley Sells */}
            <div
              id="team-bentley"
              className="scroll-mt-28 bg-[#fbf8ed] border border-[#ebdcb3] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all hover:shadow-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#761318] via-[#a82026] to-[#761318]" />
              <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
                {/* Portrait Capsule */}
                <div className="relative z-10 w-[180px] sm:w-[210px] md:w-[230px] aspect-[112/165] shrink-0 rounded-full border-2 border-[#800b10] overflow-hidden shadow-md bg-[#3a0609]">
                  <Image
                    src="/images/home/founders/bentley-sells2.png"
                    alt="Bentley Sells - Chief Happiness Officer (CHO)"
                    fill
                    sizes="(max-width: 768px) 210px, 240px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Bio Content */}
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                  <span className="inline-block self-center md:self-start text-xs font-bold tracking-widest uppercase text-[#761318] bg-[#f4ebd0] px-3 py-1 rounded-full mb-3">
                    Team Spirit & Morale
                  </span>
                  <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
                    Bentley Sells
                  </h3>
                  <p className="font-lora font-semibold text-sm sm:text-base text-[#761318] mt-1 mb-5">
                    Chief Happiness Officer (CHO) | Relevant Promos
                  </p>

                  <div className="space-y-3.5 font-lora text-sm sm:text-base text-[#3d362e] leading-relaxed">
                    <p>
                      Bentley keeps team vibes high and stress levels low. As CHO, he’s in charge of daily smiles, surprise Zoom appearances, and reminding us all to take a break.
                    </p>
                    <p>
                      His presence is proof that good branding starts with good energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. OUR MISSION SECTION ================= */}
        <section className="bg-gradient-to-br from-[#761318] via-[#550c10] to-[#3a0609] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#a82026]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block font-lora text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#ffedbd]">
              Our Guiding Purpose
            </span>

            <h2 className="font-lora text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Our Mission
            </h2>

            <div className="space-y-4 font-lora text-base sm:text-lg md:text-xl text-[#fbf8ed]/90 leading-relaxed max-w-3xl mx-auto">
              <p>
                Socially Relevant Promo is more than just a promotional product company. With a background in digital marketing, we know how to turn branded merchandise into a strategic tool, keeping your business relevant and making your marketing dollars go further.
              </p>
              <p>
                From everyday merch to high-impact pieces for events, teams, and giveaways, we deliver products that get attention and drive results.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-4 text-center">
                <span className="block font-lora font-bold text-lg text-[#ffedbd]">
                  Fast Turnaround
                </span>
                <span className="block text-xs text-white/80 mt-1">
                  Speed & reliability on every order
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-4 text-center">
                <span className="block font-lora font-bold text-lg text-[#ffedbd]">
                  Competitive Pricing
                </span>
                <span className="block text-xs text-white/80 mt-1">
                  Volume discounts & honest budgets
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-4 text-center">
                <span className="block font-lora font-bold text-lg text-[#ffedbd]">
                  Strategy Included
                </span>
                <span className="block text-xs text-white/80 mt-1">
                  Digital synergy with every piece
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-[#fffceb] text-[#761318] hover:bg-[#ffedbd] font-lora font-bold text-base rounded-xl transition-all shadow-md hover:scale-105"
              >
                <span>Contact Us To Get Started</span>
                <span className="text-xl leading-none">→</span>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutPageClient;

