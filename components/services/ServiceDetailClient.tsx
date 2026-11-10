"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { ServiceDetail, getOtherServices } from "./services-data";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({
  service,
}) => {
  const otherServices = getOtherServices(service.slug);

  return (
    <div className="w-full bg-[#fffceb] min-h-screen py-10 sm:py-14 md:py-18">
      <Container>
        {/* ================= 1. SERVICE HERO & OVERVIEW ================= */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-lora text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#761318]">
              {service.kicker}
            </span>
            {service.badge && (
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#761318] text-white px-2.5 py-0.5 rounded-full shadow-2xs">
                {service.badge}
              </span>
            )}
          </div>

          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] font-bold text-[#171717] leading-[1.2] tracking-tight mb-5">
            {service.tagline}
          </h2>

          <p className="font-lora text-base sm:text-lg text-[#3f3830] leading-relaxed mb-8">
            {service.overview}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={service.ctaHref || "/contact"}
              className="px-7 py-3.5 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-bold text-sm sm:text-base rounded-xl shadow-md transition-all hover:scale-105"
            >
              {service.ctaText || "Get Started With This Service →"}
            </Link>

            <Link
              href="/services"
              className="px-6 py-3.5 bg-white hover:bg-[#faf4df] text-[#761318] border border-[#ebdcb3] font-lora font-semibold text-sm sm:text-base rounded-xl transition-all"
            >
              ← Back to All Services
            </Link>
          </div>
        </div>

        {/* ================= 2. PROVEN METRICS / STATS ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 sm:mb-20">
          {service.stats.map((st, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#ebdcb3] p-6 shadow-sm flex flex-col justify-between"
            >
              <span className="font-lora text-3xl sm:text-4xl font-bold text-[#761318] mb-1">
                {st.value}
              </span>
              <span className="font-lora text-xs sm:text-sm text-[#5f564d] leading-snug">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= 3. KEY CAPABILITIES & OFFERINGS ================= */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-8">
            <span className="font-lora text-xs font-bold tracking-[0.25em] uppercase text-[#761318] block mb-1">
              Core Capabilities
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
              What We Deliver Under {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.keyOfferings.map((off, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ebdcb3] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#761318]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fdf2f2] text-[#761318] border border-[#ebdcb3] flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-lora font-bold text-lg text-[#171717] mb-2">
                  {off.title}
                </h4>
                <p className="font-lora text-xs sm:text-sm text-[#4d453d] leading-relaxed">
                  {off.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 4. OUR 4-STEP STRATEGIC PROCESS ================= */}
        <div className="mb-16 sm:mb-20 bg-[#faf4e1] rounded-3xl border border-[#ebdcb3] p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="font-lora text-xs font-bold tracking-[0.25em] uppercase text-[#761318] block mb-1">
              Methodology
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
              How We Execute: The 4-Step Strategic Process
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-[#ebdcb3] p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-lora text-2xl font-bold text-[#761318] block mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-lora font-bold text-base text-[#171717] mb-2">
                    {step.title}
                  </h4>
                  <p className="font-lora text-xs text-[#524b43] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 5. DELIVERABLES CHECKLIST ================= */}
        <div className="bg-white rounded-3xl border border-[#ebdcb3] p-8 sm:p-10 mb-16 sm:mb-20 shadow-sm">
          <div className="max-w-3xl">
            <span className="font-lora text-xs font-bold tracking-[0.25em] uppercase text-[#761318] block mb-1">
              Included Scope
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717] mb-6">
              Guaranteed Deliverables for Every Client
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#761318] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="font-lora text-sm sm:text-base text-[#383129] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 6. BOTTOM CTA BANNER ================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#761318] to-[#45070a] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#55090d] mb-16 sm:mb-20">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2cbcf]">
              Tailored Consultation
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-bold text-white">
              Ready to elevate your {service.title.toLowerCase()}?
            </h3>
            <p className="font-lora text-sm sm:text-base text-white/85 max-w-xl">
              Schedule a strategy call with our executive team. We will review your goals and provide an actionable blueprint tailored to your firm.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-white text-[#761318] hover:bg-[#f6f2e1] font-lora font-bold text-sm sm:text-base rounded-xl shadow-md transition-all whitespace-nowrap hover:scale-105"
          >
            Schedule Consultation →
          </Link>
        </div>

        {/* ================= 7. EXPLORE OTHER SERVICES ================= */}
        <div className="pt-10 border-t border-[#ebdcb3]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-lora text-xs font-bold tracking-[0.25em] uppercase text-[#761318] block mb-1">
                Complementary Solutions
              </span>
              <h3 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
                Explore Our Other Services
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-bold text-[#761318] hover:underline"
            >
              All Services Overview →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group bg-white rounded-2xl border border-[#ebdcb3] p-5 shadow-sm hover:border-[#761318] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-lora font-bold text-base text-[#171717] group-hover:text-[#761318] transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="font-lora text-xs text-[#524b43] line-clamp-2 leading-relaxed">
                    {other.tagline}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-[#ebdcb3]/60 flex items-center justify-between text-xs font-bold text-[#761318]">
                  <span>Explore Service</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailClient;

