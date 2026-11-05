import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#7a080e] via-[#520408] to-[#250103] py-14 sm:py-16 md:py-20 lg:py-24 text-white">
      {/* Ambient lighting glows with gentle pulse animation */}
      <div
        className="pointer-events-none absolute -top-24 -left-20 h-[520px] w-[520px] rounded-full bg-[#e81d26] opacity-35 blur-[95px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#b8121a] opacity-20 blur-3xl animate-glow-pulse delay-500"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-14">
        {/* Left Column: Heading, Subtitle, Description & CTA */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
          {/* Animated Heading */}
          <h1 className="font-lora text-4xl sm:text-5xl md:text-[52px] lg:text-[58px] xl:text-[64px] font-bold leading-[1.14] tracking-tight mb-6 sm:mb-8">
            <span className="block text-white animate-hero-fade-up delay-100">
              Are You Visible
            </span>
            <span className="block text-[#ffedbd] mt-1 sm:mt-2 animate-hero-fade-up delay-200">
              Online &amp; Offline?
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="font-lora text-xl sm:text-2xl lg:text-[25px] font-medium leading-[1.38] text-white mb-6 sm:mb-7 tracking-normal animate-hero-fade-up delay-350">
            <p>Your Business Is Established.</p>
            <p>Let&apos;s Keep It in the Conversation.</p>
          </div>

          {/* Animated Description */}
          <p className="font-lora text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-white/95 max-w-xl mb-8 sm:mb-10 animate-hero-fade-up delay-500">
            Connecting digital marketing, branded merchandise, and community campaigns through our 360 Approach.
          </p>

          {/* Animated CTA Button */}
          <div className="animate-hero-fade-up delay-650">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#ffedbd] px-8 sm:px-9 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-[#ffedbd] transition-all duration-300 hover:bg-[#ffedbd] hover:text-[#520408] hover:shadow-[0_0_25px_rgba(255,237,189,0.35)] focus:outline-none focus:ring-2 focus:ring-[#ffedbd] focus:ring-offset-2 focus:ring-offset-[#520408]"
            >
              <span>Explore Our Services</span>
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 font-sans text-xl leading-none"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Animated Mockup Image with floating levitation */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end animate-hero-slide-right delay-200">
          <div className="relative w-full max-w-[540px] lg:max-w-none flex items-center justify-center animate-float-gentle">
            <Image
              src="/images/home/hero/hero-section-image-2.png"
              alt="Socially Relevant Promo digital marketing and branded promotional merchandise mockup"
              width={703}
              height={491}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
