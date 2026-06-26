"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl overflow-hidden transition-colors duration-300 hover:border-amber-500/25 shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 text-white hover:text-amber-300 transition-colors duration-300"
      >
        <span className="text-sm md:text-base font-bold tracking-wide">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 shrink-0"
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-900/40">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqData = [
  {
    question: "Do you guarantee funding?",
    answer: (
      <span>
        No. No company can ethically guarantee investment. Our role as a <strong className="text-amber-500 font-medium">Startup Fundraising Partner</strong> is to maximize your fundraising readiness by preparing investor-grade materials, refining your strategy, and positioning your startup professionally. Final investment decisions are made independently by investors.
      </span>
    )
  },
  {
    question: "How long does the process take?",
    answer: (
      <span>
        Most founders receive all core deliverables within <strong className="text-amber-400 font-semibold">2–4 weeks</strong>, depending on project complexity and review cycles.
      </span>
    )
  },
  {
    question: "Can you work with idea-stage startups?",
    answer: (
      <span>
        Absolutely. Whether you're validating an initial concept or preparing for institutional funding, our <strong className="text-amber-500 font-medium">Investor Readiness Platform</strong> tailors our process to match your current startup stage.
      </span>
    )
  },
  {
    question: "Do you sign NDAs?",
    answer: (
      <span>
        Yes. Confidentiality is fundamental to our work. We are happy to sign a Non-Disclosure Agreement before discussing sensitive information.
      </span>
    )
  },
  {
    question: "What industries do you work with?",
    answer: (
      <span>
        We partner with startups across AI, SaaS, FinTech, HealthTech, ClimateTech, DeepTech, Manufacturing, EdTech, Consumer Brands, and many more.
      </span>
    )
  },
  {
    question: "What deliverables do I receive?",
    answer: (
      <div className="space-y-1.5">
        <p>Depending on your engagement package, you may receive:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Investor-ready Pitch Deck</li>
          <li>Financial Model</li>
          <li>Startup Website</li>
          <li>Investor Database</li>
          <li>Market Research</li>
          <li>Data Room</li>
          <li>GTM Strategy</li>
          <li>Investor Outreach Assets</li>
        </ul>
      </div>
    )
  },
  {
    question: "Can you help after delivery?",
    answer: (
      <span>
        Yes. We continue supporting founders with revisions, fundraising guidance, investor preparation, and future updates whenever required.
      </span>
    )
  }
];

export default function FAQ() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column */}
      <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
          / FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="font-absans text-[clamp(1.8rem,4.5vw,3rem)] font-bold uppercase leading-[1.1] text-white tracking-wide">
          Everything You <br />
          <span className="gold-text-gradient font-absans">Need to Know</span>
        </h2>
        <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
          Still have questions? Here's everything founders usually ask before working with Nexyrium.
        </p>

        {/* Subtle glow effect behind FAQ title */}
        <div className="w-[200px] h-[200px] bg-amber-500/[0.015] rounded-full blur-[80px] pointer-events-none absolute -left-10 top-20 z-0" />
      </div>

      {/* Right Column Accordions */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } }
        }}
        className="lg:col-span-7 space-y-4 relative z-10"
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
            }}
          >
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
