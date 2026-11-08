"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";

interface ApproachNode {
  id: string;
  step: number;
  title: string;
  desc: string;
  style: {
    left: string;
    top: string;
    width: string;
  };
  animationClass: string;
  imageSrc: string;
}

const APPROACH_NODES: ApproachNode[] = [
  {
    id: "strategy",
    step: 1,
    title: "Strategy",
    desc: "Understand your goals and target audience.",
    style: { left: "36.47%", top: "4.44%", width: "26.99%" },
    animationClass: "animate-seq-1",
    imageSrc: "/images/home/our-approch/parts/node-strategy.png",
  },
  {
    id: "execute",
    step: 2,
    title: "Execute",
    desc: "Launch digital and offline campaigns.",
    style: { left: "61.19%", top: "26.22%", width: "26.99%" },
    animationClass: "animate-seq-2",
    imageSrc: "/images/home/our-approch/parts/node-execute.png",
  },
  {
    id: "connect",
    step: 3,
    title: "Connect",
    desc: "Create real-world experiences.",
    style: { left: "51.86%", top: "57.06%", width: "26.99%" },
    animationClass: "animate-seq-3",
    imageSrc: "/images/home/our-approch/parts/node-connect.png",
  },
  {
    id: "amplify",
    step: 4,
    title: "Amplify",
    desc: "Engage across all channels.",
    style: { left: "21.08%", top: "57.06%", width: "26.99%" },
    animationClass: "animate-seq-4",
    imageSrc: "/images/home/our-approch/parts/node-amplify.png",
  },
  {
    id: "grow",
    step: 5,
    title: "Grow",
    desc: "Measure, optimize and scale.",
    style: { left: "11.74%", top: "26.22%", width: "26.99%" },
    animationClass: "animate-seq-5",
    imageSrc: "/images/home/our-approch/parts/node-grow.png",
  },
];

const CENTER_NODE = {
  style: { left: "32.09%", top: "30.49%", width: "35.74%" },
  imageSrc: "/images/home/our-approch/parts/node-center.png",
};

export const OurApproach: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#2b0407] bg-[#0a0103] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/our-approch/our-approch-bg.png')",
      }}
    >
      {/* Background Next.js Image layer for instant high-quality rendering */}
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

          {/* Right Column: Animated 360 Diagram with component-level animations */}
          <div className="lg:col-span-6 flex items-center justify-center z-10 mt-6 lg:mt-0">
            <div className="relative w-full max-w-[580px] aspect-[1371/1148] flex items-center justify-center select-none">
              
              {/* 1. Ambient Pulsing Glow Aura behind center */}
              <div className="absolute inset-0 m-auto w-[68%] h-[68%] rounded-full bg-gradient-to-tr from-[#98141c]/45 via-[#d32f2f]/30 to-[#f59e0b]/20 blur-3xl pointer-events-none animate-approach-glow" />

              {/* 2. Rotating Outer Orbit Ring with glowing gold/ruby beads */}
              <div className="absolute inset-0 m-auto w-[88%] h-[88%] rounded-full border border-dashed border-[#ffcf73]/25 pointer-events-none animate-approach-orbit">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ffcf73] shadow-[0_0_12px_#ffcf73]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e53935] shadow-[0_0_10px_#e53935]" />
              </div>

              {/* 3. Base Image (Structure, arrows, gold chains, pearls) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                  src="/images/home/our-approch/360.png"
                  alt="Our 360° Approach Base Diagram"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 540px, 580px"
                  className="object-contain drop-shadow-[0_16px_45px_rgba(0,0,0,0.7)]"
                  priority
                />
              </div>

              {/* 4. Flowing Energy Pulse along the 5 arrows (SVG Neon Flow) */}
              <svg
                viewBox="0 0 1371 1148"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                fill="none"
              >
                {/* Clockwise curved pentagonal arrow path linking nodes */}
                <path
                  d="M 685 236 Q 960 260 1024 486 Q 1060 760 896 840 Q 685 960 474 840 Q 300 760 346 486 Q 400 260 685 236 Z"
                  stroke="url(#arrowEnergyGradient)"
                  strokeWidth="3.5"
                  strokeDasharray="25 65"
                  className="animate-arrow-flow opacity-70"
                />
                <defs>
                  <linearGradient
                    id="arrowEnergyGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffcf73" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#ff4d4d" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffd54f" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 5. Center Component Node ("OUR 360° APPROACH") */}
              <div
                style={CENTER_NODE.style}
                className="absolute aspect-square z-20 flex items-center justify-center animate-center-pulse cursor-pointer group"
                onMouseEnter={() => setActiveNode("center")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={CENTER_NODE.imageSrc}
                    alt="Our 360° Approach Center"
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 6. Surrounding 5 Component Nodes with Sequential & Hover Animations */}
              {APPROACH_NODES.map((node) => {
                const isHovered = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    style={node.style}
                    className={`absolute aspect-square z-20 flex items-center justify-center cursor-pointer group transition-transform duration-300 ${
                      isHovered ? "scale-110 z-30" : node.animationClass
                    }`}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Glowing highlight aura on hover */}
                    <div
                      className={`absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none ${
                        isHovered
                          ? "opacity-100 bg-[#ffcf73]/30 blur-lg shadow-[0_0_24px_#ffcf73]"
                          : "opacity-0"
                      }`}
                    />

                    {/* Node Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={node.imageSrc}
                        alt={`${node.title} Step`}
                        fill
                        sizes="180px"
                        className="object-contain"
                      />
                    </div>

                    {/* Interactive Floating Tooltip Pill */}
                    {isHovered && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 text-white text-xs px-3 py-1.5 rounded-full border border-[#ffcf73]/60 shadow-[0_4px_16px_rgba(0,0,0,0.8)] pointer-events-none z-40 animate-fadeIn">
                        <span className="font-bold text-[#ffcf73]">
                          Step {node.step}:
                        </span>{" "}
                        {node.title}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurApproach;
