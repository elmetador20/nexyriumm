"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CardData {
  title: string;
  items: string[];
}

interface FloatingCardsProps {
  activeStep: number;
}

const cardsData: CardData[] = [
  {
    title: "DISCOVERY",
    items: [
      "Founder Consultation",
      "Startup Assessment",
      "Business Model Review",
      "Fundraising Goals",
      "Growth Planning"
    ]
  },
  {
    title: "RESEARCH",
    items: [
      "Market Analysis",
      "Competitor Mapping",
      "Industry Trends",
      "Investor Research",
      "Funding Strategy"
    ]
  },
  {
    title: "BUILD",
    items: [
      "Pitch Deck",
      "Financial Model",
      "Startup Website",
      "Investor Database",
      "Data Room"
    ]
  },
  {
    title: "REVIEW",
    items: [
      "Storytelling Review",
      "Financial Validation",
      "Design Improvements",
      "Founder Feedback",
      "Final Approval"
    ]
  },
  {
    title: "LAUNCH",
    items: [
      "Final Deliverables",
      "Investor Outreach",
      "VC Introductions",
      "Fundraising Support",
      "Ready to Raise"
    ]
  }
];

export default function FloatingCards({ activeStep }: FloatingCardsProps) {
  return (
    <div className="relative w-full max-w-[290px] sm:max-w-[330px] md:max-w-[350px] h-[270px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      {/* Stack of Cards */}
      <div className="relative w-full h-full flex items-center justify-center">
        {cardsData.map((card, index) => {
          const isCurrent = index === activeStep;
          const isCompleted = index < activeStep;
          const isFuture = index > activeStep;

          // Compute offsets for stack feel
          let xOffset = 0;
          let yOffset = 0;
          let rotate = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;

          if (isCurrent) {
            zIndex = 30;
            xOffset = 0;
            yOffset = 0;
            rotate = index % 2 === 0 ? 1 : -1;
            scale = 1;
            opacity = 1;
          } else if (isFuture) {
            const stepsAhead = index - activeStep;
            zIndex = 20 - index;
            xOffset = stepsAhead * 10;
            yOffset = stepsAhead * -10;
            rotate = (index % 2 === 0 ? 3.5 : -3.5) * stepsAhead;
            scale = 1 - stepsAhead * 0.045;
            opacity = 0.85 - stepsAhead * 0.15;
          } else if (isCompleted) {
            // Completed steps slide down/left and fade out
            const stepsPast = activeStep - index;
            zIndex = 10 - stepsPast;
            xOffset = -25 - stepsPast * 8;
            yOffset = 25 + stepsPast * 8;
            rotate = -10 - stepsPast * 1.5;
            scale = 0.93;
            opacity = 0.15;
          }

          return (
            <motion.div
              key={card.title}
              animate={{
                x: xOffset,
                y: yOffset,
                rotate: rotate,
                scale: scale,
                opacity: opacity,
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ zIndex }}
              className="absolute w-[250px] sm:w-[290px] md:w-[310px] h-[240px] sm:h-[270px] md:h-[290px] rounded-[24px] border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-2xl p-4 md:p-5 flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.7)] hover:border-amber-500/20 transition-colors duration-300"
            >
              {/* Card Glow Border Accent */}
              {isCurrent && (
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />
              )}

              {/* Title Section */}
              <div className="space-y-0.5">
                <span className="text-[9px] tracking-[0.25em] font-extrabold text-amber-500/80">
                  STAGE 0{index + 1}
                </span>
                <h4 className="font-absans text-base md:text-lg font-bold text-white tracking-wide">
                  {card.title}
                </h4>
              </div>

              {/* Checklist Items */}
              <div className="flex-1 py-2 flex flex-col justify-center gap-1.5">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <div className="w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-light tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="w-full flex justify-between items-center text-[8px] text-zinc-600 font-semibold tracking-wider pt-1.5 border-t border-zinc-900/60">
                <span>NEXYRIUM FRAMEWORK</span>
                <span>{index + 1} / 5</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
