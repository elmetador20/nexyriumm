"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialMarquee from "./TestimonialMarquee";
import TestimonialModal from "./TestimonialModal";
import { TestimonialData } from "./TestimonialCard";

const testimonialsData: TestimonialData[] = [
  {
    quote:
      "Nexyrium helped us put our business idea into a much clearer investor story. The pitch deck made it easier for us to explain OwnMyPin, our business model, and where we are heading.",
    name: "Sagor Das",
    role: "Founder",
    company: "OwnMyPin",
    industry: "Technology",
    stage: "Early Stage",
    services: ["Pitch Deck", "Investment Support"],
  },

  {
    quote:
      "Working with Nexyrium helped us present Savitram Foundation in a more structured and professional way. They understood what we were trying to communicate and helped us build the right presentation around it.",
    name: "Govind Goyal",
    role: "Founder",
    company: "Savitram Foundations",
    industry: "Social Impact",
    stage: "Growth Stage",
    services: ["Pitch Deck", "Investment Support"],
  },

  {
    quote:
      "The team at Nexyrium helped us organise our story and turn our ideas into a presentation that was much easier to communicate. The process was straightforward and the final deck looked professional.",
    name: "Shubham Thomson",
    role: "Founder",
    company: "Alpha Omega School Services",
    industry: "Education",
    stage: "Growth Stage",
    services: ["Pitch Deck", "Investment Support"],
  },

  {
    quote:
      "Nexyrium understood our business and helped us create a pitch deck that presented Shantilal's International Food in a much more structured way. Their support during the investment preparation was particularly useful.",
    name: "Arjun Kumar",
    role: "Founder",
    company: "Shantilal's International Food Private Limited",
    industry: "Food & Beverage",
    stage: "Growth Stage",
    services: ["Pitch Deck", "Investment Support"],
  },

  {
    quote:
      "For a manufacturing business, explaining the opportunity clearly to investors can be challenging. Nexyrium helped us structure our pitch and present our UPVC manufacturing business in a clear and professional way.",
    name: "Kiran",
    role: "Founder",
    company: "Kiran Interiors",
    industry: "UPVC Manufacturing",
    stage: "Growth Stage",
    services: ["Pitch Deck", "Investment Support"],
  },
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
