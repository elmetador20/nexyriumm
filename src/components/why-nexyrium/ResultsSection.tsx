"use client";

import React from "react";
import { motion } from "framer-motion";
import MetricCard from "./MetricCard";

const metricsData = [
  {
    numberStr: "100+",
    label: "Founders Supported",
    desc: "Helping startups prepare for investor conversations across multiple industries."
  },
  {
    numberStr: "250+",
    label: "Investor-Ready Deliverables",
    desc: "Pitch decks, financial models, startup websites, data rooms, and more."
  },
  {
    numberStr: "12+",
    label: "Industries Served",
    desc: "Experience working with SaaS, AI, Healthcare, FinTech, DeepTech, Manufacturing, and more."
  },
  {
    numberStr: "₹500 Cr+", // Prepared fundraising asset volume
    label: "Funding Prepared",
    desc: "Investor-ready fundraising assets supporting startups seeking capital."
  }
];

export default function ResultsSection() {
  return (
    <div className="w-full space-y-10">
      {/* Results Header */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
            / RESULTS
          </span>
          <h3 className="font-absans text-2xl md:text-3xl font-bold uppercase leading-none text-white tracking-wide">
            Helping Founders <br />
            <span className="gold-text-gradient">Raise With Confidence</span>
          </h3>
        </div>
        <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-md">
          Our focus is simple: deliver fundraising assets that increase credibility, strengthen investor conversations, and help founders move faster toward their funding goals.
        </p>
      </div>

      {/* Metrics Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metricsData.map((metric, idx) => (
          <MetricCard
            key={metric.label}
            numberStr={metric.numberStr}
            label={metric.label}
            desc={metric.desc}
            index={idx}
          />
        ))}
      </motion.div>
    </div>
  );
}
