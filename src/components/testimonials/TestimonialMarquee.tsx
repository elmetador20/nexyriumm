"use client";

import React from "react";
import TestimonialCard, { TestimonialData } from "./TestimonialCard";

interface TestimonialMarqueeProps {
  testimonials: TestimonialData[];
  direction: "ltr" | "rtl";
  onCardClick: (testimonial: TestimonialData) => void;
}

export default function TestimonialMarquee({ testimonials, direction, onCardClick }: TestimonialMarqueeProps) {
  // Duplicate list to achieve looping transition
  const duplicatedList = [...testimonials, ...testimonials];

  // Set card width variations to make scrolling layout feel organic
  const getCardWidthClass = (index: number) => {
    const sequence = index % 3;
    if (sequence === 0) return "w-[290px] sm:w-[330px] md:w-[350px]";
    if (sequence === 1) return "w-[260px] sm:w-[290px] md:w-[310px]";
    return "w-[310px] sm:w-[350px] md:w-[370px]";
  };

  const marqueeClass = direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl";

  return (
    <div className="w-full overflow-hidden py-3 flex relative select-none">
      <div className={`${marqueeClass} gap-6`}>
        {duplicatedList.map((item, idx) => (
          <TestimonialCard
            key={`${item.name}-${idx}`}
            testimonial={item}
            widthClass={getCardWidthClass(idx)}
            onClick={() => onCardClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
