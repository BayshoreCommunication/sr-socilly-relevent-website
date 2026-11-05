import React from "react";

interface DummyLogoItem {
  id: string;
  name: string;
  component: React.ReactNode;
}

export const dummyLogos: DummyLogoItem[] = [
  {
    id: "carter",
    name: "Carter Injury Law",
    component: (
      <div className="flex flex-col items-center justify-center leading-none text-[#761318]">
        <span className="font-lora text-[21px] sm:text-[24px] font-bold tracking-tight">
          CARTER
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold uppercase mt-1">
          INJURY LAW
        </span>
      </div>
    ),
  },
  {
    id: "mcculloch",
    name: "McCulloch Law",
    component: (
      <div className="flex flex-col items-center justify-center leading-none text-[#761318]">
        <span className="font-lora text-[20px] sm:text-[23px] font-bold tracking-tight">
          McCULLOCH
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-semibold uppercase mt-1">
          LAW
        </span>
      </div>
    ),
  },
  {
    id: "hess",
    name: "Hess Spinal & Medical Center",
    component: (
      <div className="flex items-center gap-2 text-[#761318]">
        <div className="border-[1.5px] border-[#761318] px-1.5 py-0.5 flex items-center justify-center rounded-sm">
          <span className="font-lora text-xl font-black leading-none tracking-tighter">
            HH
          </span>
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-lora text-[15px] sm:text-[17px] font-bold tracking-tight">
            HESS SPINAL
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.16em] font-semibold uppercase">
            &amp; MEDICAL CENTER
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "cynthia",
    name: "Cynthia Waisman Law",
    component: (
      <div className="flex items-center gap-1.5 text-[#761318]">
        <span className="font-lora text-3xl font-light leading-none -mt-0.5">C</span>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-lora text-[14px] sm:text-[16px] font-bold tracking-tight">
            YNTHIA WAISMAN
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.3em] font-semibold uppercase">
            LAW
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "viengphone",
    name: "Viengphone Law",
    component: (
      <div className="flex items-center gap-1.5 text-[#761318]">
        <span className="font-lora text-2xl font-bold tracking-tighter leading-none italic font-serif">
          V
        </span>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-lora text-[14px] sm:text-[16px] font-bold tracking-tight">
            VIENGPHONE
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.3em] font-semibold uppercase">
            LAW
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "lopez",
    name: "Lopez Law Group",
    component: (
      <div className="flex flex-col items-center justify-center leading-none text-[#761318]">
        <span className="font-lora text-[21px] sm:text-[24px] font-bold tracking-tight">
          LOPEZ
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold uppercase mt-1">
          LAW GROUP
        </span>
      </div>
    ),
  },
  {
    id: "sterling",
    name: "Sterling & Associates",
    component: (
      <div className="flex flex-col items-center justify-center leading-none text-[#761318]">
        <span className="font-lora text-[19px] sm:text-[22px] font-bold tracking-tight">
          STERLING
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.22em] font-semibold uppercase mt-1">
          &amp; ASSOCIATES
        </span>
      </div>
    ),
  },
  {
    id: "beacon",
    name: "Beacon Healthcare",
    component: (
      <div className="flex items-center gap-2 text-[#761318]">
        <div className="w-6 h-6 border-[1.5px] border-[#761318] rounded-full flex items-center justify-center">
          <span className="text-xs font-bold leading-none">✚</span>
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-lora text-[15px] sm:text-[17px] font-bold tracking-tight">
            BEACON
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.2em] font-semibold uppercase">
            HEALTHCARE
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "summit",
    name: "Summit Wealth Partners",
    component: (
      <div className="flex flex-col items-center justify-center leading-none text-[#761318]">
        <span className="font-lora text-[20px] sm:text-[23px] font-bold tracking-tight">
          SUMMIT
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.25em] font-semibold uppercase mt-1">
          WEALTH PARTNERS
        </span>
      </div>
    ),
  },
  {
    id: "vanguard",
    name: "Vanguard Legal Group",
    component: (
      <div className="flex flex-col items-center justify-center leading-none text-[#761318]">
        <span className="font-lora text-[19px] sm:text-[22px] font-bold tracking-tight">
          VANGUARD
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] font-semibold uppercase mt-1">
          LEGAL GROUP
        </span>
      </div>
    ),
  },
];

export const TrustedBy: React.FC = () => {
  // Double array to ensure a seamless infinite marquee
  const marqueeItems = [...dummyLogos, ...dummyLogos];

  return (
    <section className="relative w-full bg-[#fffceb] py-8 sm:py-11 border-b border-[#e8dfc3] overflow-hidden select-none">
      {/* Section Header: —— TRUSTED BY LEADING PROFESSIONAL BUSINESSES —— */}
      <div className="w-full flex items-center justify-center gap-3 sm:gap-6 mb-7 sm:mb-9 px-4">
        <span className="h-[1px] w-10 sm:w-20 md:w-32 bg-[#761318]/30" aria-hidden="true" />
        <h2 className="font-lora text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-[#761318] text-center">
          Trusted By Leading Professional Businesses
        </h2>
        <span className="h-[1px] w-10 sm:w-20 md:w-32 bg-[#761318]/30" aria-hidden="true" />
      </div>

      {/* Marquee Wrapper with soft edge gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#fffceb] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#fffceb] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Continuous Animated Marquee Track */}
        <div className="animate-marquee flex items-center py-2">
          {marqueeItems.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center shrink-0"
            >
              <div className="flex items-center justify-center px-7 sm:px-10 h-14 sm:h-16 transition-transform duration-300 hover:scale-105 cursor-default opacity-90 hover:opacity-100">
                {logo.component}
              </div>
              {/* Vertical divider line matching reference screenshot */}
              <span
                className="h-7 sm:h-8 w-[1.5px] bg-[#761318]/25 shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
