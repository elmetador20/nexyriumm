"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  stage: string;
  services: string[];
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  onClick: () => void;
  widthClass?: string;
}

export default function TestimonialCard({ testimonial, onClick, widthClass = "w-[360px]" }: TestimonialCardProps) {
  // Generate name initials for avatar placeholder
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      onClick={onClick}
      whileHover="hover"
      className={`relative flex-shrink-0 ${widthClass} rounded-[28px] border border-zinc-900/80 bg-zinc-950/45 backdrop-blur-xl p-6 md:p-7 flex flex-col justify-between gap-6 cursor-pointer select-none group shadow-lg transition-colors duration-300 hover:border-amber-500/25 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]`}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/[0.005] to-transparent pointer-events-none" />

      {/* Top Section: Stars and Quote Icon */}
      <div className="flex justify-between items-center w-full">
        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>

        {/* Animated Quote Icon */}
        <motion.div
          variants={{
            hover: { scale: 1.1, rotate: -10 }
          }}
          className="text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300"
        >
          <Quote className="w-6 h-6 fill-current" />
        </motion.div>
      </div>

      {/* Testimonial Quote */}
      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic grow">
        "{testimonial.quote}"
      </p>

      {/* Separator */}
      <div className="w-full h-[1px] bg-zinc-900/60" />

      {/* Bottom Section: Founder Profile Info */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Avatar with dynamic scaling */}
          <motion.div
            variants={{
              hover: { scale: 1.08 }
            }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-600/30 border border-amber-500/30 flex items-center justify-center text-xs font-bold text-amber-400 shrink-0 shadow-md"
          >
            {initials}
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
              {testimonial.name}
            </h4>
            <p className="text-[10px] text-zinc-500 font-medium">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>

        {/* Watermark/Industry Tags */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-[8px] uppercase tracking-wider font-extrabold text-amber-500/80 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            {testimonial.stage}
          </span>
          <span className="text-[7px] text-zinc-600 font-bold uppercase tracking-wider">
            {testimonial.industry}
          </span>
        </div>
      </div>

      {/* Small Nexyrium logo watermark */}
      <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 text-[9px] font-absans font-extrabold tracking-widest text-white pointer-events-none select-none">
        NEXYRIUM
      </div>
    </motion.div>
  );
}
