"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, AlertTriangle, FileText } from "lucide-react";

export default function TermsOfUse() {
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
              <FileText className="w-3.5 h-3.5" />
              / AGREEMENT TERMS
            </div>
            <h1 className="font-absans text-4xl md:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
              Terms of <span className="gold-text-gradient">Use</span>
            </h1>
            <p className="text-xs text-zinc-500 font-mono">LAST UPDATED: JUNE 27, 2026</p>
          </div>

          {/* Intro */}
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Welcome to Nexyrium. These Terms of Use govern your access to and use of our website, tools, and digital resources, as well as the initial discovery and strategic advisory services we offer.
          </p>

          {/* Sections */}
          <div className="space-y-8 text-left">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">01/</span> ACCEPTANCE OF TERMS
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                By browsing our site, registering for a strategy session, or engaging with our advisory services, you accept and agree to comply with these terms. If you do not agree to these terms, you should immediately cease using our platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">02/</span> SCOPE OF ADVISORY
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                Nexyrium provides design, financial modeling, storytelling preparation, and research database tools to assist startup founders preparing for a fundraising round. We work closely with you to structure materials, but all final strategic business choices and capital-raising decisions remain exclusively yours.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">03/</span> REGULATORY COMPLIANCE DISCLAIMER
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed flex items-start gap-2 bg-amber-500/[0.02] border border-amber-500/10 p-4 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Nexyrium is a fundraising materials advisory firm. We are <strong>not</strong> registered broker-dealers, investment advisors, or security brokers under any jurisdiction. We do not solicit investments, underwrite securities, facilitate direct transactions, or offer formal legal or tax counsel.
                </span>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">04/</span> PROPRIETARY RIGHTS
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                All templates, source code files, design systems, and software tools provided or utilized by Nexyrium belong to Nexyrium or its licensors. Upon payment, clients receive full and exclusive ownership of their bespoke pitch decks, financial sheets, and custom strategic plans.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">05/</span> LIMITATION OF LIABILITY
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                Nexyrium cannot guarantee fundraising success, investor replies, round closures, or financing valuations. We are not liable for any financial or operational outcomes resulting from your use of our pitch decks, models, databases, or strategic suggestions.
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
