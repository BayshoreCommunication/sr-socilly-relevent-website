import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

export const Pricing: React.FC = () => {
  return (
    <section className="w-full bg-[#fffceb] py-16 sm:py-20 md:py-24 border-b border-[#ebdcb3]">
      <Container>
        {/* Section Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#761318] mb-3 sm:mb-4">
            Pricing
          </span>
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#171717] leading-[1.18] tracking-tight mb-4 sm:mb-5">
            Your Marketing. Handled.
          </h2>
          <p className="font-lora text-sm sm:text-base md:text-[17.5px] text-[#3d3830] leading-relaxed">
            A complete marketing partnership to keep your brand visible online,
            recognized in person, and connected in your community.
            <br className="hidden sm:inline" />
            Choose the support you need, from our 360° Membership to individual
            services.
          </p>
        </div>

        {/* 2 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: 360° Membership (Featured Primary Card - 7 Columns) */}
          <div className="lg:col-span-7 bg-[#70090e] rounded-3xl p-6 sm:p-8 md:p-9 text-white flex flex-col justify-between shadow-lg relative overflow-hidden border border-[#55060a]">
            {/* Top Area: Features on Left + Product Mockup on Right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch mb-6 sm:mb-8">
              {/* Left Column: Title, Subtitle, 4 Features */}
              <div className="sm:col-span-7 flex flex-col">
                <span className="block font-lora text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#fbd6d9] mb-1.5">
                  Our 360° Membership
                </span>
                <h3 className="font-lora font-bold text-2xl sm:text-3xl lg:text-[34px] text-white leading-[1.15] mb-2">
                  360° Membership
                </h3>
                <p className="font-lora text-xs sm:text-sm text-[#f7e9e8]/90 leading-relaxed mb-6">
                  Ongoing marketing support for businesses ready to grow.
                </p>

                {/* 4 Feature Items */}
                <div className="space-y-4">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ffd5d8] mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm leading-snug">
                        Social Media Management
                      </h4>
                      <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed">
                        A consistent, professionally managed presence.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ffd5d8] mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm leading-snug">
                        Local SEO & AIO
                      </h4>
                      <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed">
                        Ongoing optimization to help more customers find you.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ffd5d8] mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm leading-snug">
                        Creative Content & Video
                      </h4>
                      <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed">
                        Planned content and short-form video that brings your
                        brand to life.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ffd5d8] mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm leading-snug">
                        Marketing Strategy & Support
                      </h4>
                      <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed">
                        Monthly planning, performance reviews, and
                        recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High Quality Product Kit Mockup Image */}
              <div className="sm:col-span-5 relative w-full h-[320px] sm:h-full min-h-[300px] sm:min-h-full rounded-2xl overflow-hidden border border-white/15 shadow-md">
                <Image
                  src="/images/home/pricing/membership-products1.png"
                  alt="360° Membership Promo Kit showcasing branded tumblers, caps, journals, and pens"
                  fill
                  sizes="(max-width: 640px) 100vw, 350px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom Area: Exclusive Member Benefits + CTA Button */}
            <div className="w-full flex flex-col gap-4">
              {/* Exclusive Member Benefits Banner */}
              <div className="w-full bg-[#4e0508]/75 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 border border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#70090e]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#70090e]"
                  >
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-lora text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#ffd5d8]">
                    Exclusive Member Benefits
                  </span>
                  <p className="text-white/90 text-xs sm:text-[13px] leading-snug">
                    Preferred pricing on promotional products, branded apparel,
                    corporate gifts, and event essentials.
                  </p>
                </div>
              </div>

              {/* Become a Member CTA Button */}
              <Link
                href="#contact"
                className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#eedec8] hover:bg-[#f6ebd9] text-[#70090e] font-lora font-semibold text-base sm:text-lg text-center transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
              >
                <span>Become a 360° Member</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Card 2: Individual Services (Secondary A La Carte Card - 5 Columns) */}
          <div className="lg:col-span-5 bg-[#ded5d2] rounded-3xl p-6 sm:p-8 md:p-9 flex flex-col justify-between border border-[#cbbeba] shadow-sm">
            {/* Top Area: Header & 6 Service Items */}
            <div>
              <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#761318] mb-1.5">
                À La Carte Services
              </span>
              <h3 className="font-lora font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#171717] leading-[1.15] mb-2.5">
                Individual Services
              </h3>
              <p className="font-lora font-medium text-[#26211e] text-sm sm:text-[15px] leading-snug mb-2">
                Need a specific service or have a one-time project?
              </p>
              <p className="text-xs sm:text-[13px] text-[#4d4643] leading-relaxed mb-6 sm:mb-8">
                We offer a full range of marketing services that can be
                customized to fit your goals.
              </p>

              {/* 6 Service Items with White Circular Badges */}
              <div className="space-y-3 sm:space-y-3.5">
                {/* Item 1: Social Media Management */}
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#cfc0bc] text-[#761318]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#26211e] text-xs sm:text-sm">
                    Social Media Management
                  </span>
                </div>

                {/* Item 2: SEO & AIO */}
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#cfc0bc] text-[#761318]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#26211e] text-xs sm:text-sm">
                    SEO & AIO
                  </span>
                </div>

                {/* Item 3: Website Design & Development */}
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#cfc0bc] text-[#761318]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#26211e] text-xs sm:text-sm">
                    Website Design & Development
                  </span>
                </div>

                {/* Item 4: Content Creation & Video */}
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#cfc0bc] text-[#761318]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#26211e] text-xs sm:text-sm">
                    Content Creation & Video
                  </span>
                </div>

                {/* Item 5: Promotional Products & Apparel */}
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#cfc0bc] text-[#761318]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.51a2 2 0 0 0 1.98 1.67h.16L6 9.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5l1-.63h.16a2 2 0 0 0 1.98-1.67l.58-3.51a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#26211e] text-xs sm:text-sm">
                    Promotional Products & Apparel
                  </span>
                </div>

                {/* Item 6: Event & Campaign Strategy */}
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#cfc0bc] text-[#761318]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <polygon points="12 12 13 14 15 14 13.5 15.5 14 17.5 12 16 10 17.5 10.5 15.5 9 14 11 14 12 12" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#26211e] text-xs sm:text-sm">
                    Event & Campaign Strategy
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Area: Request Custom Proposal CTA Button */}
            <div className="mt-8">
              <Link
                href="#contact"
                className="w-full py-3.5 sm:py-4 px-6 rounded-full border-2 border-[#761318] bg-white/70 hover:bg-white text-[#761318] hover:text-[#500c10] font-lora font-semibold text-base sm:text-lg text-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
              >
                <span>Request a Custom Proposal</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

