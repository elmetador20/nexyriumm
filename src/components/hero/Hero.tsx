"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Layers,
  Workflow,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

import DotWaveBackground from "./DotWaveBackground";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Dot Wave Background */}
      <DotWaveBackground />

      {/* Editorial Grid and Background glows specifically for the Hero bounds */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
      
      {/* Gradients / Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] h-[650px] bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[300px] left-[15%] w-[400px] h-[400px] bg-amber-600/[0.015] rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute top-[220px] right-[15%] w-[450px] h-[450px] bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-400/20 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
            style={{
              top: `${Math.random() * 85}%`,
              left: `${Math.random() * 95}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.45, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl px-6 pt-28 pb-6 md:pt-32 md:pb-8 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Small Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold tracking-wider mb-8 shadow-[0_0_15px_rgba(245,158,11,0.02)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_6px_#fbbf24]" />
            <span>🚀 Startup Fundraising Partner</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="flex flex-col items-center leading-[1.1] max-w-4xl select-none">
            <span className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-light text-zinc-400 tracking-wide mb-2 sm:mb-3">
              Helping Startups
            </span>
            <span className="text-[clamp(2.4rem,7vw,5.2rem)] font-extrabold font-absans tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 filter drop-shadow-[0_0_20px_rgba(245,158,11,0.18)]">
              Become Investor-Ready.
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="mt-8 text-[clamp(0.95rem,1.8vw,1.15rem)] text-zinc-400 max-w-[700px] font-light leading-relaxed">
            From investor-ready pitch decks and financial models to fundraising strategy, investor databases, market research, and startup websites—we equip founders with everything they need to approach investors with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/918979952549"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 text-black font-bold text-sm tracking-wider shadow-[0_8px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_35px_rgba(245,158,11,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950/40 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-white font-semibold text-sm tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Services</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          {/* Overlapping Founder Avatars */}
          <div className="flex -space-x-3.5">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
              "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80",
              "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=100&h=100&q=80",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
            ].map((src, i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[#050508] object-cover bg-zinc-800 shadow-md"
                src={src}
                alt={`Founder ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start text-left">
            <div className="flex items-center gap-0.5 text-amber-400 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <p className="text-zinc-500 text-xs font-light tracking-wide text-center sm:text-left max-w-sm leading-relaxed">
              Trusted by ambitious founders building the next generation of startups.
            </p>
          </div>
        </motion.div>

        {/* 6. Service Row Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 w-full"
        >
          <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-6 font-semibold">
            OUR CORE CAPABILITIES
          </div>
          
          <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
            {[
              { label: "Pitch Deck", icon: Layers },
              { label: "Financial Model", icon: TrendingUp },
              { label: "Investor Database", icon: Database },
              { label: "Market Research", icon: Cpu },
              { label: "Startup Website", icon: Sparkles },
              { label: "Fundraising Strategy", icon: Workflow }
            ].map((service, i) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.label}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-amber-500/10 bg-zinc-950/45 backdrop-blur-md text-sm text-zinc-300 hover:text-amber-400 hover:border-amber-500/25 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] cursor-default"
                >
                  <IconComponent className="w-4 h-4 text-amber-500" />
                  <span className="font-medium tracking-wide">{service.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
