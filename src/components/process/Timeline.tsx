"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface TimelineProps {
  stepsCount: number;
  activeStep: number;
  progress: MotionValue<number>;
}

export default function Timeline({ stepsCount, activeStep, progress }: TimelineProps) {
  return (
    <div className="relative h-full flex flex-col justify-between items-center py-2 md:py-4">
      {/* Background Line */}
      <div className="absolute top-0 bottom-0 w-[1.5px] bg-zinc-800/80 rounded-full" />
      
      {/* Scroll-Linked Progress Line */}
      <motion.div
        style={{ scaleY: progress }}
        className="absolute top-0 w-[1.5px] bg-gradient-to-b from-amber-500 to-amber-600 origin-top rounded-full shadow-[0_0_12px_rgba(245,158,11,0.4)]"
      />

      {/* Nodes */}
      {Array.from({ length: stepsCount }).map((_, idx) => {
        const isCurrent = idx === activeStep;
        const isCompleted = idx < activeStep;
        
        return (
          <div key={idx} className="relative z-10 flex items-center justify-center">
            {/* Outer Glow Circle */}
            <motion.div
              animate={{
                scale: isCurrent ? 1.2 : 1,
                borderColor: isCurrent ? "#f59e0b" : isCompleted ? "#d97706" : "rgba(63, 63, 70, 0.5)",
                backgroundColor: isCurrent ? "rgba(245, 158, 11, 0.12)" : isCompleted ? "rgba(217, 119, 6, 0.05)" : "rgba(9, 9, 14, 0.95)"
              }}
              transition={{ duration: 0.35 }}
              className="w-7 h-7 rounded-full border bg-zinc-950 flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.8)]"
            >
              {/* Inner Node Circle */}
              <motion.div
                animate={{
                  backgroundColor: isCurrent ? "#f59e0b" : isCompleted ? "#d97706" : "#27272a",
                  scale: isCurrent ? 1.05 : 1
                }}
                className="w-3 h-3 rounded-full"
              />
            </motion.div>

            {/* Glowing Accent Ring on Current */}
            {isCurrent && (
              <motion.div
                layoutId="activeTimelineGlow"
                className="absolute w-10 h-10 rounded-full border border-amber-500/25 bg-amber-500/[0.02] blur-[2px] animate-pulse pointer-events-none"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
