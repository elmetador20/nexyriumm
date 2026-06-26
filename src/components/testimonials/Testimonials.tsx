"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialMarquee from "./TestimonialMarquee";
import TestimonialModal from "./TestimonialModal";
import { TestimonialData } from "./TestimonialCard";

const testimonialsData: TestimonialData[] = [
  {
    quote: "Nexyrium completely transformed our fundraising story. Our deck finally communicated the vision clearly, and investor meetings became much more productive.",
    name: "Arjun Mehta",
    role: "Founder",
    company: "HealthTech Startup",
    industry: "HealthTech",
    stage: "Pre-Seed",
    services: ["Pitch Deck", "Storytelling Strategy"]
  },
  {
    quote: "The financial model alone saved us weeks of work. Investors appreciated the clarity, assumptions, and realistic projections.",
    name: "Priya Kapoor",
    role: "Founder",
    company: "AI Startup",
    industry: "Artificial Intelligence",
    stage: "Seed Stage",
    services: ["Financial Model", "Financial Planning"]
  },
  {
    quote: "Our pitch deck looked like something a Series A startup would present. The quality exceeded our expectations.",
    name: "Rohan Sharma",
    role: "Co-Founder",
    company: "SaaS Startup",
    industry: "B2B SaaS",
    stage: "Seed Stage",
    services: ["Pitch Deck Design", "Brand Strategy"]
  },
  {
    quote: "The investor database helped us connect with relevant VCs instead of wasting time on cold outreach.",
    name: "Neha Verma",
    role: "Founder",
    company: "FinTech Startup",
    industry: "FinTech",
    stage: "Pre-Seed",
    services: ["Investor Database", "Fundraising Strategy"]
  },
  {
    quote: "Everything—from the website to the data room—looked incredibly polished. It gave us confidence before our first investor meeting.",
    name: "Aditya Singh",
    role: "Founder",
    company: "DeepTech Startup",
    industry: "DeepTech",
    stage: "Angel Round",
    services: ["Startup Website", "Data Room Prep", "Pitch Deck"]
  },
  {
    quote: "We came to Nexyrium with scattered ideas and left with a complete fundraising strategy that made perfect sense.",
    name: "Rahul Jain",
    role: "Founder",
    company: "ClimateTech Startup",
    industry: "ClimateTech",
    stage: "Seed Stage",
    services: ["Fundraising Strategy", "Pitch Deck Review"]
  },
  {
    quote: "The storytelling was exceptional. Investors immediately understood our problem, solution, and business model.",
    name: "Ananya Patel",
    role: "Founder",
    company: "EdTech Startup",
    industry: "EdTech",
    stage: "Pre-Seed",
    services: ["Pitch Deck", "Storytelling Review"]
  },
  {
    quote: "Our fundraising materials looked like they belonged to a much larger company. The attention to detail was outstanding.",
    name: "Karan Malhotra",
    role: "Founder",
    company: "Cybersecurity Startup",
    industry: "Cybersecurity",
    stage: "Seed Stage",
    services: ["Pitch Deck", "Financial Model", "Website Design"]
  },
  {
    quote: "Nexyrium became more than a service provider—they became our fundraising partner throughout the entire process.",
    name: "Aman Khurana",
    role: "Founder",
    company: "B2B SaaS Startup",
    industry: "B2B SaaS",
    stage: "Series A Prep",
    services: ["Pitch Deck", "Financial Model", "VC Introductions", "Strategy"]
  }
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (testimonial: TestimonialData) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  // Segregate testimonials into rows
  const row1 = testimonialsData.slice(0, 3);
  const row2 = testimonialsData.slice(3, 6);
  const row3 = testimonialsData.slice(6, 9);

  return (
    <section id="testimonials" className="w-full bg-[#070707] relative overflow-hidden pt-24 md:pt-36 pb-12 md:pb-16 border-t border-zinc-900/60">

      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />

      {/* Soft Gold Glow */}
      <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Luxury Float particles */}
      <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-amber-500/20 blur-[1px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[30%] right-[15%] w-2 h-2 rounded-full bg-amber-500/10 blur-[2px] animate-pulse pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-4 max-w-3xl"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
            / TESTIMONIALS
          </span>
          <h2 className="font-absans text-[clamp(1.8rem,4.5vw,3rem)] font-bold uppercase leading-[1.1] text-white tracking-wide">
            Trusted by Founders. <br />
            <span className="gold-text-gradient">Built for Fundraising.</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
            Every startup has a different journey, but one thing remains the same—clear storytelling, strong financials, and investor-ready assets create better fundraising conversations. Here's what founders say about working with Nexyrium.
          </p>
        </motion.div>

        {/* Testimonials Wall */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="w-full space-y-4 pt-4 relative"
        >
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070707] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070707] to-transparent z-20 pointer-events-none" />

          {/* Row 1 LTR */}
          <TestimonialMarquee
            testimonials={row1}
            direction="ltr"
            onCardClick={handleCardClick}
          />

          {/* Row 2 RTL */}
          <TestimonialMarquee
            testimonials={row2}
            direction="rtl"
            onCardClick={handleCardClick}
          />

          {/* Row 3 LTR */}
          <TestimonialMarquee
            testimonials={row3}
            direction="ltr"
            onCardClick={handleCardClick}
          />
        </motion.div>

      </div>

      {/* Details Dialog Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </section>
  );
}
