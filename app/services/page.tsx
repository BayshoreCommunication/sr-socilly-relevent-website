import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { servicesData } from "@/components/home/OurServices";

export const metadata: Metadata = {
  title: "Our Services | SR - Socially Relevant Promo",
  description:
    "Explore our complete marketing and promotional services: Promotional Products, Event & Campaign Strategy, Business Apparel, Digital Marketing Strategy, and SEO & AIO.",
  openGraph: {
    title: "Our Services | SR - Socially Relevant Promo",
    description:
      "Explore our complete marketing and promotional services: Promotional Products, Event & Campaign Strategy, Business Apparel, Digital Marketing Strategy, and SEO & AIO.",
    url: "https://sr-socilly-relevent-website.vercel.app/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#fffceb] min-h-screen py-10 sm:py-14 md:py-16">
      <Container>
        {/* Intro Subtitle Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#761318] mb-3">
            Comprehensive Growth Solutions
          </span>
          <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#171717] leading-[1.22] tracking-tight mb-4">
            Everything Your Brand Needs to Stand Out.
          </h2>
          <p className="font-lora text-base sm:text-lg text-[#3d3830] leading-relaxed max-w-3xl mx-auto">
            Whether you need more visibility online, a stronger brand presence, or a more strategic approach to client appreciation, we&apos;ve got you covered.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {servicesData.map((service) => {
            const serviceSlug =
              service.id === "event-campaign-strategy"
                ? "event-and-campaign-strategy"
                : service.id;
            const serviceUrl = `/services/${serviceSlug}`;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-[#ebdcb3] p-6 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(118,19,24,0.12)] hover:border-[#761318]/50 transition-all duration-300 hover:-translate-y-1 justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Circular Icon Badge */}
                  <Link
                    href={serviceUrl}
                    className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#fdf2f2] border border-[#fbd4d8] flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs"
                  >
                    {service.icon}
                  </Link>

                  {/* Card Title */}
                  <Link href={serviceUrl}>
                    <h3 className="font-lora font-bold text-base sm:text-lg text-[#761318] group-hover:text-[#550c10] transition-colors leading-snug mb-3">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Card Description */}
                  <p className="font-lora text-xs sm:text-[13.5px] text-[#423c35] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Action Button / Link */}
                <div className="pt-5 mt-4 border-t border-[#ebdcb3]/60 w-full">
                  <Link
                    href={serviceUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#761318] hover:text-[#550c10] transition-colors"
                  >
                    <span>Learn More & Scope</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-r from-[#761318] to-[#45070a] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#55090d]">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2cbcf]">
              Tailored Marketing Strategy
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-bold text-white">
              Ready to take your brand to the next level?
            </h3>
            <p className="font-lora text-sm sm:text-base text-white/85 max-w-xl">
              Get in touch with our team today to discuss how our digital marketing and promotional products can work together for your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-white text-[#761318] hover:bg-[#f6f2e1] font-lora font-bold text-sm sm:text-base rounded-xl shadow-md transition-all whitespace-nowrap hover:scale-105"
          >
            Start Your Project →
          </Link>
        </div>
      </Container>
    </div>
  );
}

