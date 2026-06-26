"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, desc, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } }
      }}
      whileHover="hover"
      className="relative rounded-[20px] border border-zinc-900 bg-zinc-950/40 backdrop-blur-xl p-6 md:p-8 flex flex-col gap-4 overflow-hidden group shadow-lg transition-colors duration-300 hover:border-amber-500/25"
    >
      {/* Background Radial Glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-amber-500/[0.015] rounded-full blur-xl group-hover:bg-amber-500/[0.045] transition-colors duration-300 pointer-events-none" />

      {/* Top Border Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent group-hover:via-amber-500/30 transition-all duration-500" />

      {/* Icon Wrapper */}
      <motion.div
        variants={{
          hover: { rotate: 8, scale: 1.05 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0"
      >
        <Icon className="w-5 h-5" />
      </motion.div>

      {/* Content */}
      <div className="space-y-2">
        <h4 className="text-base md:text-lg font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-amber-300">
          {title}
        </h4>
        <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
