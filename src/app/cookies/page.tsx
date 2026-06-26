"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Cookie, Sparkles, ShieldCheck } from "lucide-react";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-[#070707] text-zinc-300 selection:bg-amber-500/30 selection:text-white relative overflow-hidden font-sans pb-20">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />
      
      {/* Gold Radial Glows */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-amber-500/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-amber-500/[0.01] rounded-full blur-[130px] pointer-events-none" />

      {/* Header / Nav */}
      <header className="w-full max-w-4xl mx-auto px-6 pt-8 pb-12 relative z-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors duration-300">
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
        <span className="font-semibold text-xs tracking-[0.2em] text-zinc-500">NEXYRIUM</span>
      </header>

      {/* Main Content Container */}
      <main className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header Title */}
          <div className="space-y-4 border-b border-zinc-900 pb-8">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-amber-500 uppercase">
              <Cookie className="w-3.5 h-3.5" />
              / cookie guidelines
            </div>
            <h1 className="font-absans text-4xl md:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
              Cookie <span className="gold-text-gradient">Policy</span>
            </h1>
            <p className="text-xs text-zinc-500 font-mono">LAST UPDATED: JUNE 27, 2026</p>
          </div>

          {/* Intro */}
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Nexyrium prioritizes a clean, uninterrupted, and privacy-first browsing experience. We only use minimal cookie technologies essential to platform performance.
          </p>

          {/* Sections */}
          <div className="space-y-8 text-left">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">01/</span> WHAT ARE COOKIES
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                Cookies are small text files stored on your browser or device when you load a web page. They serve functional purposes like preserving active sessions, logging into dashboards, and tracking high-level, anonymized system performance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">02/</span> ESSENTIAL COOKIES ONLY
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                Our site uses only strictly necessary cookies to protect our inquiry form submission process and prevent spam. We do **not** run remarketing tags, advertising trackers, or share data with social media pixels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">03/</span> ANONYMOUS PLATFORM STATS
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                If we use analytics, they are hosted internally or anonymized to strip IP addresses, ensuring that we never track you across other platforms or record personal identifiers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">04/</span> MANAGING PREFERENCES
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                You can block, disable, or delete cookies via your browser's security settings. However, doing so might restrict access to certain interactive elements or form actions on our advisory page.
              </p>
            </section>
          </div>

          {/* Footer inside page */}
          <div className="pt-12 border-t border-zinc-900 text-center">
            <p className="text-xs text-zinc-600 font-mono">
              © {new Date().getFullYear()} NEXYRIUM. All rights reserved. Zurich • New York • Singapore.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
