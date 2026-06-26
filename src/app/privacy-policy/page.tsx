"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";

export default function PrivacyPolicy() {
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
              <Shield className="w-3.5 h-3.5" />
              / SECURITY & DISCRETION
            </div>
            <h1 className="font-absans text-4xl md:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
              Privacy <span className="gold-text-gradient">Policy</span>
            </h1>
            <p className="text-xs text-zinc-500 font-mono">LAST UPDATED: JUNE 27, 2026</p>
          </div>

          {/* Intro */}
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            At Nexyrium, operational security and absolute discretion are the cornerstones of our advisory. This Privacy Policy describes how we collect, handle, and secure your information when you interact with our website and fundraising advisory services.
          </p>

          {/* Sections */}
          <div className="space-y-8 text-left">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">01/</span> INFORMATION WE COLLECT
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                We only collect information directly necessary for advising on and preparing your fundraising materials. This includes your name, company name, email address, round size targets, and message contents submitted through our secure strategy session request form. We do not use third-party tracking cookies or collect automated behavioral logs for advertising.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">02/</span> DATA DISCRETION & NDAS
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                As a premium partner to high-growth startups, all investor-facing materials, strategic documents, and financial metrics shared during advisory sessions are treated with strict confidentiality. Custom Non-Disclosure Agreements (NDAs) are signed prior to reviewing proprietary materials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">03/</span> HOW WE SHARE DATA
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                We never sell, rent, or lease client data to third parties. Information is exclusively utilized internally by the Nexyrium advisory team to prepare pitch materials, financial models, and support investor matchmaking outreach.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">04/</span> DATA RETENTION & SECURITY
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                All client archives, draft presentation files, and strategy briefs are stored on isolated, encrypted vault servers with restricted access. Data is retained only as long as necessary to support your capital raises or as requested under custom client retention arrangements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-absans">
                <span className="text-amber-500 text-sm">05/</span> CONTACT US
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                If you have questions regarding this policy or wish to request data purging, please contact us directly at{" "}
                <a href="mailto:hello@nexyrium.com" className="text-amber-400 hover:underline">
                  hello@nexyrium.com
                </a>
                .
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
