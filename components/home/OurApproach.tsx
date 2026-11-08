import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

export const OurApproach: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#2b0407] bg-[#0a0103] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/our-approch/our-approch-bg.png')",
      }}
    >
      {/* High-res Image overlay element for optimal Next.js rendering */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/home/our-approch/our-approch-bg.png"
          alt="Our 360° Approach Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10">
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

          {/* Right Column: 360 Graphic Image with multi-layer animation */}
          <div className="lg:col-span-6 flex items-center justify-center z-10 mt-6 lg:mt-0">
            <div className="relative w-full max-w-[560px] aspect-[1371/1148] flex items-center justify-center group">
              {/* 1. Pulsing Ambient Glow Aura */}
              <div className="absolute inset-0 m-auto w-[72%] h-[72%] rounded-full bg-gradient-to-tr from-[#98141c]/45 via-[#d32f2f]/30 to-[#f59e0b]/20 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-85 animate-approach-glow" />

              {/* 2. Rotating Circular Orbit Accent Ring with glowing beads */}
              <div className="absolute inset-0 m-auto w-[86%] h-[86%] rounded-full border border-dashed border-[#ffcf73]/30 pointer-events-none animate-approach-orbit">
                {/* Orbiting glowing bead 1 (gold) */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ffcf73] shadow-[0_0_12px_#ffcf73]" />
                {/* Orbiting glowing bead 2 (ruby red) */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e53935] shadow-[0_0_10px_#e53935]" />
              </div>

              {/* 3. Floating 360 Graphic Image */}
              <div className="relative w-full h-full flex items-center justify-center animate-approach-float">
                <Image
                  src="/images/home/our-approch/360.png"
                  alt="Our 360° Approach - Strategy, Execute, Connect, Amplify, Grow"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 520px, 560px"
                  className="object-contain drop-shadow-[0_16px_45px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurApproach;
