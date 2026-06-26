"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Mail, Calendar } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@nexyrium.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-[#050508] relative overflow-hidden z-10">

      {/* Background Grids */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-8 space-y-12">

        {/* Top 3-Col Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">

          {/* Left Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-b from-[#1c1c1e] to-[#050505] border border-amber-500/30 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <img
                  src="/nexyrium.jpeg"
                  alt="Nexyrium Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-absans text-lg font-bold text-white tracking-wider">
                NEXYRIUM
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              Helping startups become investor-ready through strategy, storytelling, financial planning, investor research, and fundraising execution. We are your dedicated <strong className="text-amber-500 font-medium">Startup Fundraising Partner</strong>.
            </p>
          </div>

          {/* Middle Nav Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.25em] text-amber-500 uppercase">
              / NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm font-light">
              {[
                { name: "Services", href: "#services" },
                { name: "Process", href: "#process" },
                { name: "Why Nexyrium", href: "#why-us" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group text-zinc-400 hover:text-white transition-colors duration-300 w-fit py-1"
                >
                  <span>{link.name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Contact Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.25em] text-amber-500 uppercase">
              / CONTACT
            </h4>
            <div className="flex flex-col gap-3.5 text-xs md:text-sm font-light">

              {/* Copyable Email Link */}
              <div className="relative">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 group text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  title="Click to copy email address"
                >
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-mono">nexyriumtechnologies@gmail.com</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-zinc-500 hover:text-white" />
                    )}
                  </div>
                </button>

                {/* Inline copied notification */}
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute left-0 top-full mt-1.5 text-[9px] bg-zinc-900 text-amber-400 border border-zinc-800 px-2 py-0.5 rounded shadow-lg"
                    >
                      Copied address!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Call Link */}
              <a
                href="https://wa.me/918979952549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 w-fit"
              >
                <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Book Strategy Call</span>
              </a>

              {/* Social links */}
              <div className="flex gap-4 pt-1">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-zinc-900 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-500/25 hover:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-zinc-900 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-500/25 hover:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom divider thin gold line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        {/* Bottom Credits row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-zinc-500">
          <div className="space-y-0.5 text-center md:text-left">
            <p>© {new Date().getFullYear()} Nexyrium. All Rights Reserved.</p>
            <p className="text-zinc-600 font-light">Built for ambitious founders raising the future.</p>
          </div>

          <div className="flex gap-4 font-mono text-[9px]">
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms-of-use" className="hover:text-amber-400 transition-colors">TERMS OF USE</Link>
            <Link href="/cookies" className="hover:text-amber-400 transition-colors">COOKIES</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
