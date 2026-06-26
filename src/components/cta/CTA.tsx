"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div className="w-full relative py-12 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Background Soft Animated Glow */}
      <div className="absolute w-[400px] h-[400px] bg-amber-500/[0.025] rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-3xl px-4 mx-auto space-y-8 flex flex-col items-center">
        
        {/* Label */}
        <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
          READY TO RAISE?
        </span>

        {/* Heading */}
        <h2 className="font-absans text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.1] text-white tracking-wide max-w-2xl">
          Your Startup Deserves <br />
          <span className="gold-text-gradient font-absans">Investor Attention.</span>
        </h2>

        {/* Description */}
        <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
          From your first pitch deck to your final investor meeting, Nexyrium helps you prepare every asset needed to raise capital with confidence. Let's build everything before you meet your first investor.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          {/* Primary CTA */}
          <motion.a
            href="https://wa.me/918979952549"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
          >
            Book Your Free Strategy Session
            <ArrowRight className="w-4 h-4 shrink-0" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#services"
            whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-zinc-800 bg-zinc-950/20 backdrop-blur-md transition-all cursor-pointer"
          >
            View Our Services
          </motion.a>
        </div>

      </div>

    </div>
  );
}
