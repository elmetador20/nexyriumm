"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineStepProps {
  number: number;
  title: string;
  desc: string;
  isActive: boolean;
  isCompleted: boolean;
}

export default function TimelineStep({ number, title, desc, isActive, isCompleted }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0.25, y: 15 }}
      animate={{
        opacity: isActive ? 1 : isCompleted ? 0.6 : 0.25,
        y: 0,
        scale: isActive ? 1.02 : 1,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="space-y-1.5 md:space-y-2 cursor-default select-none transition-all duration-300 origin-left"
    >
      <div className="flex items-center gap-3">
        <span className={`font-absans text-xl md:text-2xl font-extrabold transition-colors duration-300 ${isActive ? "text-amber-500" : "text-zinc-700"}`}>
          0{number}
        </span>
        <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500"}`}>
          {title}
        </h3>
      </div>
      <p className={`text-xs md:text-sm leading-relaxed font-light transition-colors duration-300 ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
        {desc}
      </p>
    </motion.div>
  );
}
