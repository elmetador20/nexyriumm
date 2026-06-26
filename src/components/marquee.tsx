"use client";

import React from "react";
import {
  Rocket,
  Sprout,
  TrendingUp,
  BarChart3,
  Database,
  Briefcase,
  FolderClosed,
  Globe,
  Users,
  Layers
} from "lucide-react";

const marqueeItems = [
  { label: "Pre-Seed", icon: Rocket, isStage: true },
  { label: "Seed", icon: Sprout, isStage: true },
  { label: "Series A", icon: TrendingUp, isStage: true },
  { label: "Financial Models", icon: BarChart3, isStage: false },
  { label: "Investor Database", icon: Database, isStage: false },
  { label: "Fundraising Strategy", icon: Briefcase, isStage: false },
  { label: "Data Room", icon: FolderClosed, isStage: false },
  { label: "Startup Websites", icon: Globe, isStage: false },
  { label: "Investor Outreach", icon: Users, isStage: false },
  { label: "Investor-Ready Pitch Decks", icon: Layers, isStage: false }
];

export default function Marquee() {
  return (
    <div className="w-full relative py-6 bg-zinc-950/20 border-y border-amber-500/10 backdrop-blur-xs overflow-hidden z-20">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-paused:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />

      {/* Fade Gradients (Left and Right edges) */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#050508] via-[#050508]/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#050508] via-[#050508]/70 to-transparent z-10 pointer-events-none" />

      {/* Marquee Wrapper */}
      <div className="w-full flex items-center overflow-hidden animate-marquee-paused">
        {/* Double render for seamless infinite looping */}
        <div className="flex gap-6 whitespace-nowrap animate-marquee px-3">
          {[...marqueeItems, ...marqueeItems].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border transition-all duration-300 hover:scale-103 hover:-translate-y-0.5 cursor-default
                  ${item.isStage 
                    ? "bg-amber-500/5 border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
                    : "bg-zinc-900/40 border-zinc-800/80 hover:border-amber-500/35 hover:shadow-[0_0_12px_rgba(245,158,11,0.12)]"
                  }`}
              >
                <IconComponent className={`w-4 h-4 ${item.isStage ? "text-amber-300" : "text-amber-500"}`} />
                <span className={`text-xs md:text-sm font-medium tracking-wide
                  ${item.isStage ? "text-amber-100" : "text-zinc-300"}
                `}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
