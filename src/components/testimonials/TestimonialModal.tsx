"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Check } from "lucide-react";
import { TestimonialData } from "./TestimonialCard";

interface TestimonialModalProps {
  testimonial: TestimonialData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestimonialModal({ testimonial, isOpen, onClose }: TestimonialModalProps) {
  if (!testimonial) return null;

  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800/80 rounded-[32px] overflow-hidden shadow-2xl p-7 md:p-9 z-10 flex flex-col gap-6"
          >
            {/* Card Glow Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-500 hover:text-white bg-zinc-900/60 p-2 rounded-full border border-zinc-800/60 hover:border-zinc-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header profile info */}
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-600/30 border border-amber-500/30 flex items-center justify-center text-lg font-bold text-amber-400 shrink-0 shadow-md">
                {initials}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                    {testimonial.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                    {testimonial.stage}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-medium">
                  {testimonial.role}, {testimonial.company} ({testimonial.industry})
                </p>
              </div>
            </div>

            {/* Quote block */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-amber-500 tracking-[0.2em] uppercase">
                / FOUNDER STORY
              </span>
              <p className="text-sm md:text-base text-zinc-200 font-light leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>

            {/* Services Engaged */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-amber-500 tracking-[0.2em] uppercase">
                / DELIVERABLES PROVIDED
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {testimonial.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full"
                  >
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call To Action Banner */}
            <div className="w-full bg-gradient-to-r from-amber-500/[0.03] to-amber-600/[0.08] border border-amber-500/15 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="space-y-1">
                <h4 className="text-xs md:text-sm font-bold text-white tracking-wide">
                  Ready to raise your next round?
                </h4>
                <p className="text-[10px] text-zinc-500">
                  Become our next success story.
                </p>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 px-4 py-2.5 rounded-full shadow-md transition-colors"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
