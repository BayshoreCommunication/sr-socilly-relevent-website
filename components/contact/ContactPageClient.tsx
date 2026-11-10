"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  comments: string;
}

export const ContactPageClient: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your contact phone number.");
      return;
    }
    if (!formData.comments.trim()) {
      setErrorMessage("Please share your comments, questions, or order requirements.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate reliable API submission
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      comments: "",
    });
    setIsSubmitted(false);
    setErrorMessage("");
  };

  return (
    <div className="w-full bg-[#fffceb] min-h-screen py-10 sm:py-14 md:py-16">
      <Container>
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4ebd0] border border-[#ebdcb3] text-[#761318] text-xs font-bold tracking-widest uppercase mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#761318]" />
            Direct Communication & Support
          </div>

          <h1 className="font-lora text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight leading-[1.2] mb-4">
            Socially Relevant Promo
          </h1>

          <p className="font-lora text-base sm:text-lg text-[#3f3830] leading-relaxed">
            If you have any questions or want to place a telephone order, please
            feel free to contact us via phone or email. We are here to bring
            your brand to life with high-impact promotional merchandise,
            apparel, and digital strategy.
          </p>
        </div>

        {/* ================= 2. MAIN 2-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          {/* ================= LEFT COLUMN: CONTACT DETAILS ================= */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-[#fbf8ed] border border-[#ebdcb3] rounded-3xl p-6 sm:p-9 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
              {/* Top burgundy accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#761318] via-[#a82026] to-[#761318]" />

              {/* Main Content */}
              <div>
                <div className="mb-8">
                  <h2 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717] mb-2">
                    Get In Touch Directly
                  </h2>
                  <p className="font-lora text-sm sm:text-base text-[#5a5043]">
                    Reach our team directly for telephone orders, custom quote requests, or brand consultations.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Telephone Card */}
                  <div className="flex items-start gap-4 pb-6 border-b border-[#ebdcb3]/70 group">
                    <div className="w-12 h-12 rounded-xl bg-[#761318]/10 text-[#761318] flex items-center justify-center shrink-0 group-hover:bg-[#761318] group-hover:text-white transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#761318]/80 mb-1">
                        Telephone Orders & Inquiries
                      </span>
                      <a
                        href="tel:8136790524"
                        className="font-lora text-xl font-bold text-[#171717] hover:text-[#761318] transition-colors block"
                      >
                        813.679.0524
                      </a>
                      <p className="font-lora text-xs sm:text-[13px] text-[#5a5043] mt-1 leading-snug">
                        Monday – Friday: 8:30 AM – 5:30 PM EST. Call to discuss custom options, pricing, or rush orders.
                      </p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="flex items-start gap-4 pb-6 border-b border-[#ebdcb3]/70 group">
                    <div className="w-12 h-12 rounded-xl bg-[#761318]/10 text-[#761318] flex items-center justify-center shrink-0 group-hover:bg-[#761318] group-hover:text-white transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#761318]/80 mb-1">
                        Email Consultation
                      </span>
                      <a
                        href="mailto:Jsells@sociallyrelevantpromo.com"
                        className="font-lora text-base sm:text-lg font-bold text-[#171717] hover:text-[#761318] transition-colors break-all block"
                      >
                        Jsells@sociallyrelevantpromo.com
                      </a>
                      <p className="font-lora text-xs sm:text-[13px] text-[#5a5043] mt-1 leading-snug">
                        Send us your artwork, product wishlists, or questions. We typically respond within 2–4 hours.
                      </p>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#761318]/10 text-[#761318] flex items-center justify-center shrink-0 group-hover:bg-[#761318] group-hover:text-white transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#761318]/80 mb-1">
                        Headquarters & Shipping
                      </span>
                      <p className="font-lora text-base font-bold text-[#171717]">
                        Tampa, Florida
                      </p>
                      <p className="font-lora text-xs sm:text-[13px] text-[#5a5043] mt-1 leading-snug">
                        Serving law firms, healthcare practices, and corporate businesses nationwide with direct US shipping.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Social Media Bar */}
              <div className="pt-6 mt-8 border-t border-[#ebdcb3]">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#761318] mb-3">
                  Follow & Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-lg bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all border border-[#ebdcb3]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all border border-[#ebdcb3]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 rounded-lg bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all border border-[#ebdcb3]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-lg bg-[#f4edd1] text-[#761318] flex items-center justify-center hover:bg-[#761318] hover:text-[#fffceb] transition-all border border-[#ebdcb3]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-[#fbf8ed] border border-[#ebdcb3] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
              {/* Subtle decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#761318] via-[#a82026] to-[#761318]" />

              {isSubmitted ? (
                /* Success Feedback Screen */
                <div className="py-8 sm:py-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#761318]/10 text-[#761318] mx-auto flex items-center justify-center border-2 border-[#761318]/30">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div className="max-w-md mx-auto space-y-2">
                    <h2 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
                      Thank You, {formData.fullName}!
                    </h2>
                    <p className="font-lora text-sm sm:text-base text-[#4a4237] leading-relaxed">
                      Your inquiry has been received. Our promotional products
                      specialist will review your request and get back to you at{" "}
                      <span className="font-semibold text-[#761318]">
                        {formData.email}
                      </span>{" "}
                      within 2–4 business hours.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="max-w-md mx-auto bg-[#f4ebd0]/70 border border-[#ebdcb3] rounded-xl p-4 text-left font-lora text-xs sm:text-sm space-y-1.5 text-[#3a332a]">
                    <div className="flex justify-between">
                      <span className="text-[#6d6152]">Name:</span>
                      <span className="font-semibold">{formData.fullName}</span>
                    </div>
                    {formData.company && (
                      <div className="flex justify-between">
                        <span className="text-[#6d6152]">Company:</span>
                        <span className="font-semibold">{formData.company}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#6d6152]">Phone:</span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href="tel:8136790524"
                      className="px-6 py-3 bg-[#761318] hover:bg-[#550c10] text-white font-lora font-bold text-sm rounded-xl transition-all shadow-sm"
                    >
                      Call Us Now: 813.679.0524
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-white hover:bg-[#f4ebd0] text-[#761318] border border-[#ebdcb3] font-lora font-bold text-sm rounded-xl transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <div>
                  <div className="mb-8">
                    <h2 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717] mb-2">
                      Send Us a Message
                    </h2>
                    <p className="font-lora text-sm sm:text-base text-[#5a5043]">
                      Please complete the form below. Whether you need a product
                      quote, sample kit, or have a general inquiry, we’re happy
                      to assist.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 font-lora text-sm flex items-center gap-3">
                      <svg
                        className="w-5 h-5 shrink-0 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name & Company Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-lora text-xs sm:text-sm font-bold text-[#241f1a] mb-1.5"
                        >
                          Full Name <span className="text-[#761318]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Jessica Yates"
                            className="w-full bg-white border border-[#dfcca0] focus:border-[#761318] focus:ring-2 focus:ring-[#761318]/20 rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-[#998b7a] font-lora outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block font-lora text-xs sm:text-sm font-bold text-[#241f1a] mb-1.5"
                        >
                          Company
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Apex Health Clinic"
                            className="w-full bg-white border border-[#dfcca0] focus:border-[#761318] focus:ring-2 focus:ring-[#761318]/20 rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-[#998b7a] font-lora outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-lora text-xs sm:text-sm font-bold text-[#241f1a] mb-1.5"
                        >
                          Email <span className="text-[#761318]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="e.g. jessica@example.com"
                            className="w-full bg-white border border-[#dfcca0] focus:border-[#761318] focus:ring-2 focus:ring-[#761318]/20 rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-[#998b7a] font-lora outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-lora text-xs sm:text-sm font-bold text-[#241f1a] mb-1.5"
                        >
                          Phone <span className="text-[#761318]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="e.g. (813) 679-0524"
                            className="w-full bg-white border border-[#dfcca0] focus:border-[#761318] focus:ring-2 focus:ring-[#761318]/20 rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-[#998b7a] font-lora outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div>
                      <label
                        htmlFor="comments"
                        className="block font-lora text-xs sm:text-sm font-bold text-[#241f1a] mb-1.5"
                      >
                        Comments <span className="text-[#761318]">*</span>
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={5}
                        value={formData.comments}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your questions, desired items, quantities, or telephone order request..."
                        className="w-full bg-white border border-[#dfcca0] focus:border-[#761318] focus:ring-2 focus:ring-[#761318]/20 rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-[#998b7a] font-lora outline-none transition-all resize-y"
                      />
                    </div>

                    {/* Submission Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-9 py-4 bg-[#761318] hover:bg-[#550c10] disabled:bg-[#761318]/60 text-white font-lora font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span>Submitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message & Inquire</span>
                            <span className="text-lg leading-none">→</span>
                          </>
                        )}
                      </button>

                      <p className="font-lora text-[11.5px] text-[#7a6f60] mt-3">
                        By submitting, you agree to receive follow-up communications from Socially Relevant Promo regarding your inquiry. We respect your privacy.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= 3. FREQUENTLY ASKED QUESTIONS SECTION ================= */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-[#ebdcb3]/80">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="font-lora text-xs font-bold uppercase tracking-widest text-[#761318] block mb-2">
              Common Questions
            </span>
            <h2 className="font-lora text-2xl sm:text-3xl font-bold text-[#171717]">
              Need Quick Answers?
            </h2>
            <p className="font-lora text-sm sm:text-base text-[#5a5043] mt-2">
              Here are answers to the most frequent inquiries from our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FAQ Card 1 */}
            <div className="bg-[#fbf8ed] border border-[#ebdcb3] rounded-2xl p-6 sm:p-7 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#761318]/10 text-[#761318] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717]">
                Can I place an order over the phone?
              </h3>
              <p className="font-lora text-xs sm:text-sm text-[#4a4237] leading-relaxed">
                Yes! We frequently handle telephone orders. Just call us at{" "}
                <a href="tel:8136790524" className="font-semibold text-[#761318] underline">
                  813.679.0524
                </a>{" "}
                and an account manager will walk you through product selection, artwork, and shipping.
              </p>
            </div>

            {/* FAQ Card 2 */}
            <div className="bg-[#fbf8ed] border border-[#ebdcb3] rounded-2xl p-6 sm:p-7 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#761318]/10 text-[#761318] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717]">
                Do I get to preview products before printing?
              </h3>
              <p className="font-lora text-xs sm:text-sm text-[#4a4237] leading-relaxed">
                Always. We create complimentary high-resolution digital mockups
                showing your exact logo, colors, and placement. Production only
                begins once you formally approve the proof.
              </p>
            </div>

            {/* FAQ Card 3 */}
            <div className="bg-[#fbf8ed] border border-[#ebdcb3] rounded-2xl p-6 sm:p-7 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#761318]/10 text-[#761318] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-lora font-bold text-base sm:text-lg text-[#171717]">
                What are your production and shipping turnarounds?
              </h3>
              <p className="font-lora text-xs sm:text-sm text-[#4a4237] leading-relaxed">
                Standard turnaround is 7–10 business days after proof approval.
                We also offer expedited 24–48 hour rush production on select
                apparel, drinkware, and event supplies.
              </p>
            </div>
          </div>
        </div>

        {/* ================= 4. BOTTOM ACTION STRIP ================= */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#761318] to-[#550c10] text-[#fffceb] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-lora text-xl sm:text-2xl font-bold">
              Looking to Browse Products First?
            </h3>
            <p className="font-lora text-xs sm:text-sm text-[#f4ebd0] max-w-xl">
              Explore our full catalog of curated corporate gifts, branded apparel, drinkware, and tech essentials with real-time pricing and minimums.
            </p>
          </div>
          <Link
            href="/products"
            className="px-7 py-3.5 bg-[#fffceb] text-[#761318] hover:bg-[#f4ebd0] font-lora font-bold text-sm sm:text-base rounded-xl transition-all shadow-sm shrink-0"
          >
            Explore Product Catalog →
          </Link>
        </div>
      </Container>
    </div>
  );
};

