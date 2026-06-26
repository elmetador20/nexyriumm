"use client";

import React from "react";
import { motion } from "framer-motion";

interface CategoryTabsProps {
  categories: string[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export default function CategoryTabs({ categories, activeIndex, onTabClick }: CategoryTabsProps) {
  return (
    <div className="w-full flex justify-start lg:justify-center py-4 overflow-x-auto no-scrollbar scroll-smooth select-none">
      <div className="flex gap-2.5 px-6">
        {categories.map((category, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={category}
              onClick={() => onTabClick(index)}
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 outline-none cursor-pointer"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-black" : "text-zinc-400 hover:text-zinc-200"}`}>
                {category}
              </span>
              {!isActive && (
                <div className="absolute inset-0 rounded-full border border-zinc-800/80 bg-zinc-950/20 backdrop-blur-xs pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
