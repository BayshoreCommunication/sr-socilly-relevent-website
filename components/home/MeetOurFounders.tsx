import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

export const MeetOurFounders: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28 border-b border-[#ebdcb3] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-[1020px] mx-auto mb-14 sm:mb-18 md:mb-20 text-left">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#761318] mb-3 sm:mb-4">
            Meet Our Founders
          </span>
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#171717] leading-[1.2] tracking-tight">
            The People Behind the Brand.
          </h2>
        </div>

        {/* 3 Founders Cards Stack */}
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28 max-w-[1020px] mx-auto">
          {/* Card 1: Jessica Yates (Photo Left, Text Right) */}
          <div className="relative flex flex-col md:flex-row items-center w-full group">
            {/* Portrait Capsule (Left - Larger size, sits at middle) */}
            <div className="relative z-20 w-[180px] sm:w-[205px] md:w-[220px] lg:w-[235px] aspect-[112/175] shrink-0 rounded-full border-2 border-[#800b10] overflow-hidden shadow-md bg-[#3a0609] -mb-8 md:mb-0 transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="/images/home/founders/jessica-yates2.png"
                alt="Jessica Yates - CEO & Brand Strategist"
                fill
                sizes="(max-width: 768px) 210px, 250px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Card Body (Right - Connected at the vertical middle of the image) */}
            <div className="relative z-10 flex-1 w-full bg-white border border-[#800b10] md:border-l-0 rounded-3xl md:rounded-l-none md:rounded-r-full md:-ml-12 lg:-ml-14 pt-12 pb-7 px-6 sm:px-8 md:py-8 lg:py-9 md:pl-16 lg:pl-20 md:pr-10 lg:pr-14 min-h-[210px] md:min-h-[230px] lg:min-h-[245px] flex flex-col justify-between text-left shadow-sm group-hover:shadow-md transition-all duration-300">
              {/* Quote Mark & Body */}
              <div>
                <span
                  className="block font-serif text-3xl sm:text-4xl text-[#761318] leading-none mb-1.5 select-none font-bold"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="font-lora text-xs sm:text-[13.5px] md:text-[14px] text-[#2d2926] leading-relaxed mb-5">
                  Are you relevant online and offline? To me, a strong brand is
                  one that shows up consistently wherever people connect with it.
                  By bringing digital marketing and promotional products
                  together, we help businesses build visibility, earn trust, and
                  create lasting impressions that keep their brand top of mind.
                </p>
              </div>

              {/* Bottom Row: Name/Title + Button */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-1">
                <div>
                  <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717] leading-tight">
                    Jessica Yates
                  </h3>
                  <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#171717] mt-0.5">
                    CEO & Brand Strategist | Socially Relevant
                  </p>
                </div>

                <Link
                  href="/about#team-jessica"
                  className="self-start sm:self-auto px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#98141c] via-[#800b10] to-[#60060a] hover:from-[#aa1821] hover:to-[#760e14] text-white text-xs sm:text-[13px] font-medium shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  Watch Her Story
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Paul Vilim (Text Left, Photo Right - Alternating) */}
          <div className="relative flex flex-col md:flex-row items-center w-full group">
            {/* Card Body (Left on desktop, second on mobile - Connected at the vertical middle of the image) */}
            <div className="order-2 md:order-1 relative z-10 flex-1 w-full bg-white border border-[#800b10] md:border-r-0 rounded-3xl md:rounded-r-none md:rounded-l-full md:-mr-12 lg:-mr-14 pt-12 pb-7 px-6 sm:px-8 md:py-8 lg:py-9 md:pl-10 lg:pl-14 md:pr-16 lg:pr-20 min-h-[210px] md:min-h-[230px] lg:min-h-[245px] flex flex-col justify-between text-left md:text-right shadow-sm group-hover:shadow-md transition-all duration-300">
              {/* Quote Mark & Body */}
              <div>
                <span
                  className="block font-serif text-3xl sm:text-4xl text-[#761318] leading-none mb-1.5 select-none font-bold text-left md:text-right"
                  aria-hidden="true"
                >
                  ”
                </span>
                <p className="font-lora text-xs sm:text-[13.5px] md:text-[14px] text-[#2d2926] leading-relaxed mb-5">
                  Being relevant online and offline takes more than a great idea.
                  It takes the right strategy, the right products, and the right
                  execution. My focus is on making every detail work seamlessly,
                  from sourcing and vendor partnerships to delivery, so every
                  brand experience reflects quality, reliability, and the promise
                  behind your brand.
                </p>
              </div>

              {/* Bottom Row: Button (Left) + Name/Title (Right) */}
              <div className="flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-3 pt-1">
                <Link
                  href="/about#team-paul"
                  className="self-start sm:self-auto px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#98141c] via-[#800b10] to-[#60060a] hover:from-[#aa1821] hover:to-[#760e14] text-white text-xs sm:text-[13px] font-medium shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  Watch His Story
                </Link>

                <div className="text-left md:text-right">
                  <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717] leading-tight">
                    Paul Vilim
                  </h3>
                  <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#171717] mt-0.5">
                    Director of Operations & Sourcing | Socially Relevant
                  </p>
                </div>
              </div>
            </div>

            {/* Portrait Capsule (Right on desktop, first on mobile) */}
            <div className="order-1 md:order-2 relative z-20 w-[180px] sm:w-[205px] md:w-[220px] lg:w-[235px] aspect-[112/175] shrink-0 rounded-full border-2 border-[#800b10] overflow-hidden shadow-md bg-[#3a0609] -mb-8 md:mb-0 transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="/images/home/founders/paul-vilim2.png"
                alt="Paul Vilim - Director of Operations & Sourcing"
                fill
                sizes="(max-width: 768px) 210px, 250px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Card 3: Bentley Sells (Photo Left, Text Right) */}
          <div className="relative flex flex-col md:flex-row items-center w-full group">
            {/* Portrait Capsule (Left - Larger size, sits at middle) */}
            <div className="relative z-20 w-[180px] sm:w-[205px] md:w-[220px] lg:w-[235px] aspect-[112/175] shrink-0 rounded-full border-2 border-[#800b10] overflow-hidden shadow-md bg-[#3a0609] -mb-8 md:mb-0 transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="/images/home/founders/bentley-sells2.png"
                alt="Bentley Sells - Chief Happiness Officer (CHO)"
                fill
                sizes="(max-width: 768px) 210px, 250px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Card Body (Right - Connected at the vertical middle of the image) */}
            <div className="relative z-10 flex-1 w-full bg-white border border-[#800b10] md:border-l-0 rounded-3xl md:rounded-l-none md:rounded-r-full md:-ml-12 lg:-ml-14 pt-12 pb-7 px-6 sm:px-8 md:py-8 lg:py-9 md:pl-16 lg:pl-20 md:pr-10 lg:pr-14 min-h-[210px] md:min-h-[230px] lg:min-h-[245px] flex flex-col justify-center text-left shadow-sm group-hover:shadow-md transition-all duration-300">
              <p className="font-lora text-xs sm:text-[13.5px] md:text-[14px] text-[#2d2926] leading-relaxed mb-4 sm:mb-5">
                Bentley keeps team vibes high and stress levels low. As CHO, he&apos;s
                in charge of daily smiles, surprise Zoom appearances, and
                reminding us all to take a break. His presence is proof that
                good branding starts with good energy.
              </p>

              <div>
                <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717] leading-tight">
                  Bentley Sells
                </h3>
                <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#171717] mt-0.5">
                  Chief Happiness Officer (CHO) | Socially Relevant
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MeetOurFounders;
