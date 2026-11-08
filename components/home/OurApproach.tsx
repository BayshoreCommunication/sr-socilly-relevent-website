import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

export const OurApproach: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0103] py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#2b0407]">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10">
        <Image
          src="/images/home/our-approch/our-approch-bg.png"
          alt="Our 360° Approach Background"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
        {/* Subtle gradient vignette to blend seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Kicker */}
            <span className="inline-block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#f7dcd8] mb-3 sm:mb-4">
              Our 360° Approach
            </span>

            {/* Heading */}
            <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] font-bold text-white leading-[1.16] tracking-tight mb-5 sm:mb-6">
              Strategize. Execute.
              <br />
              Connect. Amplify. Grow.
            </h2>

            {/* Paragraph */}
            <p className="font-lora text-base sm:text-lg text-[#e7ded4] leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal">
              We bring digital and real-world marketing together to strengthen
              your brand, build meaningful connections, and keep your business
              relevant online, offline, and throughout your community.
            </p>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#b5141e] via-[#8c0e15] to-[#730a10] text-white font-medium text-sm sm:text-base shadow-[0_6px_20px_rgba(181,20,30,0.45)] hover:shadow-[0_8px_28px_rgba(181,20,30,0.65)] hover:from-[#c81924] hover:to-[#850f16] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-[#d63b46]/40"
            >
              <span>See How It Works</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans text-base">
                →
              </span>
            </Link>
          </div>

          {/* Right Column: 360 Graphic Image */}
          <div className="lg:col-span-6 flex items-center justify-center z-10 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[560px] aspect-[1371/1148] flex items-center justify-center">
              <Image
                src="/images/home/our-approch/360.png"
                alt="Our 360° Approach - Strategy, Execute, Connect, Amplify, Grow"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 520px, 560px"
                className="object-contain drop-shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurApproach;
