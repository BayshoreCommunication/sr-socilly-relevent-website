import React from "react";
import Container from "../shared/Container";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 1. Promotional Products Icon (Cup, Bag, Cap)
const PromotionalProductsIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#b8141e]"
  >
    {/* Shopping Bag (Center/Back) */}
    <path d="M28 22H46C47.1 22 48 22.9 48 24V44C48 45.1 47.1 46 46 46H28C26.9 46 26 45.1 26 44V24C26 22.9 26.9 22 28 22Z" />
    <path d="M33 22V17C33 14.8 34.8 13 37 13C39.2 13 41 14.8 41 17V22" />

    {/* Coffee Tumbler / Cup (Left) */}
    <path d="M11 23H24L22.2 43H12.8L11 23Z" />
    <path d="M10 19H25V23H10V19Z" />
    {/* Cup Sleeve / Band */}
    <line x1="11.8" y1="29" x2="23.2" y2="29" />
    <line x1="12.2" y1="35" x2="22.8" y2="35" />

    {/* Baseball Cap (Foreground) */}
    <path d="M22 51C22 43.5 28.5 40 37 40C44.5 40 48.5 43.5 49 51" />
    {/* Cap Visor */}
    <path
      d="M17 51C22 49 33 49 44 50C48.5 50.5 50.5 52.5 46 54C37 56.5 24 55.5 17 51Z"
      fill="#fdf2f2"
    />
    <circle cx="37" cy="40" r="1.2" fill="currentColor" />

    {/* Ambient sparkles */}
    <path
      d="M7 14L8.2 11.8L10.5 10.5L8.2 9.2L7 7L5.8 9.2L3.5 10.5L5.8 11.8Z"
      fill="currentColor"
      stroke="none"
    />
    <circle cx="51" cy="18" r="1" fill="currentColor" stroke="none" />
    <circle cx="55" cy="24" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

// 2. SEO & AIO Icon (Browser with chart and magnifying glass)
const SeoAioIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#b8141e]"
  >
    {/* Browser Window */}
    <rect x="7" y="14" width="48" height="33" rx="4" />
    <line x1="7" y1="22" x2="55" y2="22" />
    {/* Window Header Dots */}
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="18" r="1" fill="currentColor" stroke="none" />
    <circle cx="20" cy="18" r="1" fill="currentColor" stroke="none" />

    {/* Chart Bars */}
    <rect x="13" y="34" width="3.5" height="8" rx="0.8" />
    <rect x="19.5" y="28" width="3.5" height="14" rx="0.8" />
    <rect x="26" y="24" width="3.5" height="18" rx="0.8" />

    {/* Trend Line with Arrow */}
    <path d="M15 33L21.5 26.5L28 22.5L34 19" />
    <path d="M30.5 19H34V22.5" />

    {/* Magnifying Glass (Right) */}
    <circle cx="41.5" cy="35.5" r="8.5" fill="#fdf2f2" />
    <line x1="47.5" y1="41.5" x2="55" y2="49" strokeWidth="2.4" />
    {/* Lens reflection/cross */}
    <path d="M38.5 32.5A4.5 4.5 0 0 1 44.5 34" strokeWidth="1.4" />
  </svg>
);

// 3. Event and Campaign Strategy Icon (Calendar & Megaphone)
const EventStrategyIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#b8141e]"
  >
    {/* Calendar */}
    <rect x="9" y="17" width="38" height="34" rx="4" />
    <line x1="9" y1="25" x2="47" y2="25" />
    {/* Calendar Spirals / Rings */}
    <line x1="16" y1="13" x2="16" y2="18" strokeWidth="2" />
    <line x1="28" y1="13" x2="28" y2="18" strokeWidth="2" />
    <line x1="40" y1="13" x2="40" y2="18" strokeWidth="2" />

    {/* Star inside calendar */}
    <path
      d="M20 31.5L21.3 34.5L24.5 34.8L22 37L22.8 40.2L20 38.5L17.2 40.2L18 37L15.5 34.8L18.7 34.5Z"
      fill="currentColor"
      stroke="none"
    />
    {/* Date dots */}
    <circle cx="31" cy="33" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="38" cy="33" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="31" cy="39" r="1.3" fill="currentColor" stroke="none" />

    {/* Megaphone / Bullhorn */}
    <g transform="rotate(-15 42 41)">
      <path d="M34 38L47 31V47L34 40Z" fill="#fdf2f2" />
      <rect x="31" y="38" width="3" height="4" rx="0.5" />
      <path d="M37 40V46C37 47 36 47.5 35 47.5" />
      {/* Sound waves */}
      <path d="M50 34C52 36.5 52 41.5 50 44" />
      <path d="M54 31C57 34.5 57 43.5 54 47" />
    </g>

    {/* Celebration sparkles */}
    <circle cx="51" cy="20" r="1" fill="currentColor" stroke="none" />
    <circle cx="56" cy="26" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

// 4. Business Apparels Icon (T-Shirt & Polo Shirt)
const BusinessApparelsIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#b8141e]"
  >
    {/* Left T-Shirt */}
    <g>
      <path d="M17 21C18.5 24 22.5 24 24 21" />
      <path d="M17 21L11 24.5L7 30L11.5 33.5L14 29V47H27V36" />
      <line x1="7" y1="30" x2="11.5" y2="33.5" />
    </g>

    {/* Right Polo Shirt (Overlapping in front) */}
    <g>
      {/* Body */}
      <path
        d="M36 21L30 24.5L26 30L30.5 33.5L33 29V47H52V29L54.5 33.5L59 30L55 24.5L49 21"
        fill="#fdf2f2"
      />
      {/* Collar */}
      <path d="M36 21L42.5 27L49 21" />
      <path d="M39 21L42.5 25L46 21" />
      {/* Placket */}
      <line x1="42.5" y1="27" x2="42.5" y2="34" />
      <circle cx="42.5" cy="29" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="42.5" cy="32" r="0.75" fill="currentColor" stroke="none" />
      {/* Sleeve hem */}
      <line x1="54.5" y1="33.5" x2="59" y2="30" />
      <line x1="30.5" y1="33.5" x2="26" y2="30" />
    </g>
  </svg>
);

// 5. Digital Marketing Strategy Icon (Smartphone with Social Badges)
const DigitalMarketingIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#b8141e]"
  >
    {/* Smartphone */}
    <rect x="9" y="11" width="28" height="42" rx="4" />
    {/* Speaker notch */}
    <line x1="19" y1="15" x2="27" y2="15" strokeWidth="1.6" />
    {/* Home indicator */}
    <line x1="20" y1="49" x2="26" y2="49" strokeWidth="1.6" />

    {/* Screen Chart */}
    <rect x="13.5" y="36" width="3" height="7" rx="0.6" />
    <rect x="18.5" y="30" width="3" height="13" rx="0.6" />
    <rect x="23.5" y="24" width="3" height="19" rx="0.6" />
    {/* Trend Line */}
    <path d="M15 35L20 29L25 23L30 20" />
    <path d="M27 20H30V23" />

    {/* Social Icons Stack on the Right */}
    {/* Instagram */}
    <g transform="translate(42, 11)">
      <rect x="0" y="0" width="13" height="13" rx="3.5" />
      <circle cx="6.5" cy="6.5" r="2.8" />
      <circle cx="9.8" cy="3.2" r="0.65" fill="currentColor" stroke="none" />
    </g>

    {/* Facebook */}
    <g transform="translate(42, 26)">
      <rect x="0" y="0" width="13" height="13" rx="3.5" />
      <path
        d="M8.5 4H7.2C6.3 4 5.8 4.5 5.8 5.4V6.5H4.5V8.5H5.8V13H7.8V8.5H9.5L9.8 6.5H7.8V5.6C7.8 5.2 8 5 8.4 5H9.5V4H8.5Z"
        fill="currentColor"
        stroke="none"
      />
    </g>

    {/* YouTube / Play */}
    <g transform="translate(42, 41)">
      <rect x="0" y="0" width="13" height="13" rx="3.5" />
      <polygon points="5,4 10,6.5 5,9" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

export const servicesData: ServiceItem[] = [
  {
    id: "promotional-products",
    title: "Promotional Products",
    description:
      "Custom-branded products that create lasting impressions and keep your business top of mind.",
    icon: <PromotionalProductsIcon />,
  },
  {
    id: "seo-aio",
    title: "SEO & AIO",
    description:
      "Increase your search visibility and appear in both traditional and AI-powered search results to attract more clients.",
    icon: <SeoAioIcon />,
  },
  {
    id: "event-campaign-strategy",
    title: "Event and Campaign Strategy",
    description:
      "Plan and execute engaging events and targeted campaigns that build relationships and drive real results.",
    icon: <EventStrategyIcon />,
  },
  {
    id: "business-apparels",
    title: "Business Apparels",
    description:
      "High-quality branded apparel for your team, clients, and events that strengthens your brand identity.",
    icon: <BusinessApparelsIcon />,
  },
  {
    id: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    description:
      "Create engaging content, manage social media, and run targeted campaigns that increase brand awareness and generate new business.",
    icon: <DigitalMarketingIcon />,
  },
];

export const OurServices: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24 w-full">
      {/* 1. Header Banner */}
      <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#7d0b11] via-[#460509] to-[#0c0103] py-8 sm:py-10 md:py-11 border-b border-[#5e070d]">
        {/* Subtle geometric light accent line across bottom left */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            background:
              "linear-gradient(115deg, rgba(255, 75, 95, 0.45) 0%, rgba(180, 20, 35, 0.2) 28%, transparent 55%)",
          }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-80 h-36 pointer-events-none opacity-30 transform -rotate-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 90, 90, 0.35), transparent)",
          }}
        />

        <Container>
          <div className="relative z-10">
            <span className="block font-lora text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#f7dcd8] mb-2 sm:mb-2.5">
              Our Services
            </span>
            <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] tracking-tight">
              Everything Your Brand Needs to Stand Out.
            </h2>
          </div>
        </Container>
      </div>

      {/* 2. Content Section */}
      <div className="w-full bg-[#fffceb] pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24 border-b border-[#ebdcb3]">
        <Container>
          {/* Subtitle / Intro Heading */}
          <h3 className="font-lora text-xl sm:text-2xl md:text-[23px] lg:text-[25px] font-bold text-[#171717] leading-[1.3] max-w-4xl mb-10 sm:mb-12">
            Whether you need more visibility online, a stronger brand presence, or a more strategic approach to client appreciation, we&apos;ve got you covered.
          </h3>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-[#e8dec5] p-5 sm:p-6 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(118,19,24,0.12)] hover:border-[#dfc8a0] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Circular Icon Badge */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#fdf2f2] border border-[#fbd4d8] flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {service.icon}
                </div>

                {/* Card Title */}
                <h4 className="font-bold text-base sm:text-[17px] text-[#b8141e] leading-snug mb-3">
                  {service.title}
                </h4>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-[#3f3a34] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurServices;

