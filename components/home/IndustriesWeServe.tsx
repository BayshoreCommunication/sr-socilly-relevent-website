import React from "react";
import Image from "next/image";
import Container from "../shared/Container";

export interface IndustryCardItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const industryCards: IndustryCardItem[] = [
  {
    id: "business-firms",
    category: "CORPORATE &",
    title: "Business Firms",
    description:
      "Branded solutions that strengthen culture, impress clients, and keep your business top of mind.",
    imageSrc: "/images/home/we-serve/business-firms.png",
  },
  {
    id: "organizations",
    category: "NON-PROFIT",
    title: "Organizations",
    description:
      "Meaningful merchandise that amplifies your mission and inspires your community.",
    imageSrc: "/images/home/we-serve/organization.png",
  },
  {
    id: "attorneys",
    category: "PERSONAL INJURY",
    title: "Attorneys",
    description:
      "Thoughtful branded products that build trust, show appreciation, and keep your firm top of mind.",
    imageSrc: "/images/home/we-serve/attorneys.png",
  },
  {
    id: "medical-clinics",
    category: "CHIROPRACTIC, WELLNESS &",
    title: "Medical Clinics",
    description:
      "Practical, high-quality branded items that enhance the patient experience and grow your practice.",
    imageSrc: "/images/home/we-serve/medical-clinics.png",
  },
];

export const IndustriesWeServe: React.FC = () => {
  return (
    <section id="industries" className="scroll-mt-24 w-full bg-[#fffceb] py-16 sm:py-20 md:py-24 border-b border-[#ebdcb3]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#761318] mb-3">
            Industries We Serve
          </span>
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#171717] leading-[1.18] tracking-tight mb-4">
            Different Industries. One Strategic Goal.
          </h2>
          <p className="font-lora text-base sm:text-lg text-[#3d3830] leading-relaxed max-w-3xl">
            Every industry has its own audience, challenges, and opportunities.
            We bring together tailored marketing strategies and thoughtful
            promotional experiences to help your business stand out.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryCards.map((item) => (
            <div
              key={item.id}
              className="group relative h-[390px] sm:h-[420px] lg:h-[440px] rounded-[22px] overflow-hidden border-2 border-[#761318] shadow-sm hover:shadow-xl transition-all duration-500 block cursor-default"
            >
              {/* Card Background Image with hover zoom */}
              <Image
                src={item.imageSrc}
                alt={`${item.category} ${item.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Base Gradient Overlay (default unhovered: covers bottom title area with higher opacity) */}
              <div
                className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#5a090e]/92 via-[#761318]/65 via-42% to-transparent pointer-events-none transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                aria-hidden="true"
              />

              {/* Hover Gradient Overlay (enhanced opacity for full text contrast) */}
              <div
                className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#55080c]/96 via-[#761318]/78 via-48% to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                aria-hidden="true"
              />

              {/* Card Bottom Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                {/* Header Row: Category, Title & Circular Button */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#f5ebd2] mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-lora text-xl sm:text-[22px] font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Circular Arrow Button (visible by default, smoothly vanishes on hover) */}
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/70 text-white flex items-center justify-center shrink-0 ml-3 transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover Reveal Description (slides up and fades in on hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="font-lora text-[13px] sm:text-[13.5px] leading-relaxed text-[#f7edd2] pt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustriesWeServe;
