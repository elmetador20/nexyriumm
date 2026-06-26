"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/marquee";
import Services from "@/components/sections/Services";
import ProcessSection from "@/components/process/ProcessSection";
import WhyNexyrium from "@/components/why-nexyrium/WhyNexyrium";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/layout/footer";
import {
  Cpu,
  Database,
  Layers,
  Shield,
  Workflow,
  TrendingUp,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";

// Fade-in animation helper variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
  const [dbTab, setDbTab] = useState<"performance" | "security" | "architecture">("performance");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
      <Hero />
      <Marquee />

      {/* 2. SERVICES SECTION */}
      <Services />

      {/* PROCESS SECTION */}
      <ProcessSection />

      {/* WHY NEXYRIUM & RESULTS */}
      <WhyNexyrium />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 3. FAQ SECTION */}
      <section id="faq" className="w-full max-w-6xl px-6 pt-16 md:pt-20 pb-20 md:pb-32 relative z-10 border-t border-zinc-900/60">
        <FAQ />
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="w-full relative z-10 border-t border-zinc-900/60 bg-[#050508]/40">
        <CTA />
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="w-full max-w-4xl px-6 py-20 md:py-32 relative z-10">
        <div className="rounded-[32px] border border-amber-500/25 bg-zinc-950/70 p-6 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-md relative overflow-hidden">
          {/* Subtle gold border top highlight */}
          <div className="absolute inset-x-20 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left Col Info */}
            <div className="md:col-span-5 flex flex-col justify-between gap-8 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-500 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  / BOOK A SESSION
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white leading-tight uppercase font-absans">
                  Let's Build <br />
                  <span className="gold-text-gradient font-absans">Your Future</span>
                </h2>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Ready to become investor-ready? Reach out below to schedule your free, confidential fundraising strategy session.
                </p>
              </div>

              {/* Direct Info */}
              <div className="space-y-4 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span>hello@nexyrium.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Startup Fundraising Partner</span>
                </div>
              </div>
            </div>

            {/* Right Col Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Your Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@company.com"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Services Needed / Stage</label>
                  <input
                    type="text"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    placeholder="e.g., Pitch Deck, Financial Model, Seed Stage"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all font-light"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your startup, current round size, and fundraising goals."
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full py-4 rounded-xl font-semibold text-xs tracking-widest uppercase text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "idle" && (
                    <>
                      <span>Transmit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                  {formStatus === "sending" && <span>Processing Transmission...</span>}
                  {formStatus === "success" && <span>Transmission Successful ✓</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
