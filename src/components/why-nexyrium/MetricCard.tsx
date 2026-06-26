"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MetricCardProps {
  numberStr: string;
  label: string;
  desc: string;
  index: number;
}

function NumberCounter({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : value;

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let frame = 0;
    const totalFrames = Math.floor(duration * 60);
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out
      setCount(Math.floor(easeProgress * targetNumber));

      if (frame >= totalFrames) {
        setCount(targetNumber);
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, targetNumber, duration]);

  if (targetNumber === 0) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function MetricCard({ numberStr, label, desc, index }: MetricCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className="relative rounded-2xl border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-xl p-6 flex flex-col justify-between gap-4 overflow-hidden group shadow-md"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/[0.01] to-transparent pointer-events-none" />

      {/* Number */}
      <div className="font-absans text-3xl md:text-4xl font-extrabold text-white tracking-tight gold-text-gradient">
        <NumberCounter value={numberStr} />
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-amber-500">
          {label}
        </h4>
        <p className="text-xs text-zinc-400 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
