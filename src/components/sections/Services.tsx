"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  Layers,
  TrendingUp,
  Database,
  Workflow,
  Cpu,
  Sparkles,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import CategoryTabs from "../services/CategoryTabs";
import ServiceCard from "../services/ServiceCard";

const servicesData = [
  {
    title: "Investor-Ready Pitch Deck",
    desc: "Craft a compelling investor pitch deck that clearly communicates your vision, traction, and growth strategy.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Pitch Deck"
  },
  {
    title: "Financial Models",
    desc: "Develop dynamic 5-year financial projections, revenue forecasts, and valuation models designed to inspire investor confidence.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Financial Models"
  },
  {
    title: "Investor Database",
    desc: "Access a curated database of VCs, angels, family offices, and accelerators aligned with your startup stage.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Investor Database"
  },
  {
    title: "Fundraising Strategy",
    desc: "Map out a fundraising roadmap with clear milestones, investor targeting, and valuation guidance.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Strategy"
  },
  {
    title: "Market Research",
    desc: "Leverage deep market insights with competitor analysis, TAM/SAM/SOM calculations, and industry benchmarks.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Research"
  },
  {
    title: "Startup Website",
    desc: "Launch a premium website that showcases your startup story, captures investor attention, and converts leads.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Websites"
  },
  {
    title: "Data Room",
    desc: "Prepare an organized, secure data room for due diligence, ensuring investors have easy access to all critical documents.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Data Room"
  },
  {
    title: "Investor Outreach",
    desc: "Design personalized investor outreach campaigns with effective email templates and follow-up strategies.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&h=800&q=80",
    category: "Outreach"
  },
  {
    title: "Go-To-Market Strategy",
    desc: "Create a go-to-market plan that defines customer segments, positioning, and growth tactics to drive early traction.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=800&q=80",
    category: "GTM"
  }
];

const categories = servicesData.map(s => s.category);

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth);
    }
    setViewportWidth(window.innerWidth);
    const handleResize = () => {
      if (scrollRef.current) {
        setScrollWidth(scrollRef.current.scrollWidth);
      }
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  // Calculate horizontal translation based on actual widths
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.95],
    [0, -(scrollWidth - viewportWidth + 60)]
  );

  // Sync active category tabs based on horizontal scrolling progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.1) {
      setActiveIndex(0);
    } else if (latest >= 0.95) {
      setActiveIndex(servicesData.length - 1);
    } else {
      const pct = (latest - 0.1) / 0.85;
      const index = Math.min(
        Math.max(Math.round(pct * (servicesData.length - 1)), 0),
        servicesData.length - 1
      );
      setActiveIndex(index);
    }
  });

  // Scroll window to match the specific card category click
  const handleTabClick = (index: number) => {
    const container = targetRef.current;
    if (!container) return;
    const startY = container.offsetTop;
    const totalHeight = container.offsetHeight - window.innerHeight;
    const progress = 0.1 + (index / (servicesData.length - 1)) * 0.85;
    const targetY = startY + totalHeight * progress;
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  return (
    <div ref={targetRef} id="services" className="relative w-full h-[350vh] bg-[#050508]">
      
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-3 md:py-6 z-10">
        
        {/* Editorial Grids & Radial Glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none z-0" />

        {/* Section Header */}
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start relative z-10">
          
          {/* Top Left: Heading */}
          <div className="space-y-2 md:space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              / Services We Offer
            </div>
            <h2 className="font-absans text-[clamp(1.8rem,4.2vw,2.8rem)] font-bold uppercase leading-[1.15] text-white tracking-wide">
              Everything You Need <br />
              <span className="gold-text-gradient">To Raise Capital</span>
            </h2>
          </div>

          {/* Top Right: Description & Action Buttons */}
          <div className="flex flex-col justify-between h-full space-y-3 md:space-y-4 md:pl-6">
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-lg">
              Fundraising requires much more than a pitch deck. We help founders prepare every asset investors expect—from strategy and financial planning to investor outreach—so they can raise capital with confidence.
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 group transition-colors duration-300"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:inline" />
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white group transition-colors duration-300"
              >
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Categories Tabs Filter */}
        <div className="w-full relative z-10">
          <CategoryTabs
            categories={categories}
            activeIndex={activeIndex}
            onTabClick={handleTabClick}
          />
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="flex-1 w-full flex items-center relative overflow-hidden z-10 my-1 md:my-2">
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex gap-6 pl-[max(24px,calc((100vw-1152px)/2))] pr-24"
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                desc={service.desc}
                icon={service.icon}
                image={service.image}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom indicator scroll helper bar */}
        <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center text-[10px] text-zinc-600 font-semibold tracking-widest relative z-10">
          <span>01 / NEXYRIUM ECOSYSTEM</span>
          <div className="w-44 h-[1px] bg-zinc-800 relative">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-amber-500 origin-left"
            />
          </div>
          <span>CAPABILITIES</span>
        </div>

      </div>

    </div>
  );
}
