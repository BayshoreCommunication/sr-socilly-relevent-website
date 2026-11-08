"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../shared/Container";

interface StatItem {
  id: string;
  prefix?: string;
  target: number;
  suffix?: string;
  displayValue: string;
  labelTop: string;
  labelBottom: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "online-engagement",
    target: 300,
    suffix: "%",
    displayValue: "300%",
    labelTop: "Increase in Online",
    labelBottom: "Engagement",
  },
  {
    id: "clients-generated",
    target: 150,
    suffix: "+",
    displayValue: "150+",
    labelTop: "New Clients",
    labelBottom: "Generated",
  },
  {
    id: "search-rankings",
    prefix: "#",
    target: 1,
    displayValue: "#1",
    labelTop: "Local Search",
    labelBottom: "Rankings",
  },
  {
    id: "successful-campaigns",
    target: 500,
    suffix: "+",
    displayValue: "500+",
    labelTop: "Successful",
    labelBottom: "Campaigns",
  },
];

export const RealResults: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([300, 150, 1, 500]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counting numbers from 0 up to targets
          const duration = 1800; // 1.8 seconds
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease-out cubic formula for smooth decelerating animation
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              STATS_DATA.map((stat) => Math.round(stat.target * easeProgress))
            );

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    const currentEl = sectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fffceb] py-16 sm:py-20 md:py-24 border-b border-[#ebdcb3]"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-5xl mb-12 sm:mb-16 md:mb-20">
          <span className="block font-lora text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[#761318] mb-3 sm:mb-4">
            Real Results
          </span>
          <h2 className="font-lora text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#171717] leading-[1.2] tracking-tight">
            More Visibility. Better Clients. Stronger connections.
          </h2>
        </div>

        {/* Stats Row: Flush Left & Right with equal harmonious spacing across dividers */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between w-full gap-8 sm:gap-0">
          {STATS_DATA.map((stat, index) => {
            const countValue = counts[index];
            const formattedNumber = `${stat.prefix || ""}${countValue}${
              stat.suffix || ""
            }`;

            // Alignment: Item 0 is flush left, Item 3 is flush right, middle items are centered
            let alignClass = "items-center text-center";
            if (index === 0) {
              alignClass = "items-center sm:items-start text-center sm:text-left";
            } else if (index === STATS_DATA.length - 1) {
              alignClass = "items-center sm:items-end text-center sm:text-right";
            }

            return (
              <React.Fragment key={stat.id}>
                {/* Stat Item Content */}
                <div className={`flex flex-col justify-center group ${alignClass}`}>
                  {/* Big Stat Number */}
                  <div className="font-lora font-bold text-5xl sm:text-6xl md:text-[68px] lg:text-[76px] text-[#761318] leading-none mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
                    {hasAnimated ? formattedNumber : stat.displayValue}
                  </div>

                  {/* Stat Labels */}
                  <div className="font-lora text-base sm:text-lg md:text-[19px] lg:text-[20px] text-[#171717] font-medium leading-[1.3] max-w-[240px]">
                    <p>{stat.labelTop}</p>
                    <p>{stat.labelBottom}</p>
                  </div>
                </div>

                {/* Vertical Divider Line between items */}
                {index < STATS_DATA.length - 1 && (
                  <div
                    className="hidden sm:block w-[1.5px] h-24 sm:h-28 md:h-32 bg-[#ebd8cc] shrink-0 self-center"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default RealResults;
