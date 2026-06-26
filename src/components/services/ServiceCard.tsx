"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  index: number;
}

export default function ServiceCard({ title, desc, icon: Icon, image }: ServiceCardProps) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      animate={isToggled ? "active" : "initial"}
      onClick={() => setIsToggled(!isToggled)}
      className="relative flex-shrink-0 w-[270px] sm:w-[320px] md:w-[340px] h-[310px] sm:h-[350px] md:h-[375px] rounded-[24px] overflow-hidden border border-zinc-800/80 bg-zinc-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group transition-colors duration-300 hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(245,158,11,0.12)] cursor-pointer"
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        variants={{
          initial: { scale: 1, filter: "grayscale(100%) contrast(1) brightness(0.25)" },
          hover: { scale: 1.08, filter: "grayscale(0%) contrast(1.15) brightness(0.55)" },
          tap: { scale: 1.05, filter: "grayscale(0%) contrast(1.15) brightness(0.55)" },
          active: { scale: 1.05, filter: "grayscale(0%) contrast(1.15) brightness(0.55)" }
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Dark Overlay with subtle gold tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75 z-0" />

      {/* Content wrapper */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
        
        {/* Top Section: Icon */}
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-5 h-5" />
        </div>

        {/* Bottom Section: Text + Button */}
        <div className="space-y-3.5">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {desc}
            </p>
          </div>

          <div className="flex justify-between items-center pt-1.5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-amber-500 transition-colors duration-300 font-semibold">
              EXPLORE MODULE
            </span>
            
            <motion.div
              variants={{
                initial: { rotate: 0, backgroundColor: "rgba(9, 9, 14, 0.8)", color: "#f59e0b" },
                hover: { rotate: 45, backgroundColor: "#fbbf24", color: "#000000" },
                tap: { rotate: 45, backgroundColor: "#fbbf24", color: "#000000" },
                active: { rotate: 45, backgroundColor: "#fbbf24", color: "#000000" }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-9 h-9 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 bg-zinc-950/80 shadow-md"
            >
              <ArrowUpRight className="w-4.5 h-4.5" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
