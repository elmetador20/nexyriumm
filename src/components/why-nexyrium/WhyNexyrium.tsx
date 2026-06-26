"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Sparkles, Rocket, Clock, Users, Handshake } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ResultsSection from "./ResultsSection";

const featuresData = [
  {
    icon: Target,
    title: "Investor First",
    desc: "Every presentation, financial model, and strategy is built from an investor's perspective to maximize fundraising potential."
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Modern design, compelling storytelling, and world-class execution that makes founders stand out."
  },
  {
    icon: Rocket,
    title: "Startup Expertise",
    desc: "We understand fundraising, venture capital, investor psychology, and startup growth—not just design."
  },
  {
    icon: Clock,
    title: "Fast Execution",
    desc: "Move from planning to investor outreach in weeks with structured workflows and rapid delivery."
  },
  {
    icon: Users,
    title: "Founder Friendly",
    desc: "Collaborative reviews, strategic guidance, and unlimited support throughout the engagement."
  },
  {
    icon: Handshake,
    title: "Long-Term Partner",
    desc: "Our support continues beyond delivery with fundraising guidance, updates, and investor preparation."
  }
];

export default function WhyNexyrium() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax background glow mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-80, 120]);

  return (
    <section 
      ref={containerRef} 
      id="why-us" 
      className="w-full bg-[#050508] relative overflow-hidden py-20 md:py-32 border-t border-zinc-900/60"
    >
      {/* Background patterns and noise */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />
      
      {/* Moving Parallax Glow */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-[25%] left-[20%] w-[550px] h-[550px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none z-0" 
      />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-20 md:space-y-24">
        
        {/* Core Frame: Header + Feature Grid */}
        <div className="space-y-12 md:space-y-16">
          
          {/* Header */}
          <div className="w-full space-y-4 max-w-3xl">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
              / WHY NEXYRIUM
            </span>
            <h2 className="font-absans text-[clamp(1.8rem,4.5vw,3rem)] font-bold uppercase leading-[1.1] text-white tracking-wide">
              Built for Founders. <br />
              <span className="gold-text-gradient">Trusted by Investors.</span>
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
              Nexyrium isn't just a design agency. We're a fundraising partner that helps founders prepare every investor-facing asset required to raise capital—from strategy and storytelling to financial planning, investor research, and outreach. Every deliverable is built with one objective: helping you approach investors with confidence.
            </p>
          </div>

          {/* Feature Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {featuresData.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                index={idx}
              />
            ))}
          </motion.div>

        </div>

        {/* Divider with subtle gold gradient line */}
        <div className="w-full py-4 relative flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute w-2 h-2 rounded-full bg-amber-500 blur-[2px]" />
        </div>

        {/* Results Section */}
        <ResultsSection />

      </div>
    </section>
  );
}
