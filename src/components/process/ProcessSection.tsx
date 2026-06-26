"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Check } from "lucide-react";
import TimelineStep from "./TimelineStep";
import Timeline from "./Timeline";
import FloatingCards from "./FloatingCards";

const stepsData = [
  {
    number: 1,
    title: "Discovery",
    desc: "Understand your startup, product, traction, market opportunity, business model, and fundraising goals before building anything.",
    items: [
      "Founder Consultation",
      "Startup Assessment",
      "Business Model Review",
      "Fundraising Goals",
      "Growth Planning"
    ]
  },
  {
    number: 2,
    title: "Research",
    desc: "Perform market research, competitor analysis, investor positioning, TAM/SAM/SOM validation, and fundraising strategy.",
    items: [
      "Market Analysis",
      "Competitor Mapping",
      "Industry Trends",
      "Investor Research",
      "Funding Strategy"
    ]
  },
  {
    number: 3,
    title: "Build",
    desc: "Design every investor-facing asset including your pitch deck, financial model, startup website, investor database, and data room.",
    items: [
      "Pitch Deck",
      "Financial Model",
      "Startup Website",
      "Investor Database",
      "Data Room"
    ]
  },
  {
    number: 4,
    title: "Review",
    desc: "Conduct multiple review rounds to refine messaging, improve storytelling, strengthen financials, and ensure everything meets investor expectations.",
    items: [
      "Storytelling Review",
      "Financial Validation",
      "Design Improvements",
      "Founder Feedback",
      "Final Approval"
    ]
  },
  {
    number: 5,
    title: "Launch",
    desc: "Deliver all final assets and support your investor outreach so you can confidently begin fundraising.",
    items: [
      "Final Deliverables",
      "Investor Outreach",
      "VC Introductions",
      "Fundraising Support",
      "Ready to Raise"
    ]
  }
];

export default function ProcessSection() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;
    const index = Math.min(
      Math.max(Math.floor(latest * stepsData.length), 0),
      stepsData.length - 1
    );
    if (index !== activeStep) {
      setActiveStep(index);
    }
  });

  return (
    <div ref={stickyRef} id="process" className="w-full relative h-auto md:h-[280vh]">
      
      {/* Sticky dashboard frame container */}
      <div className="relative md:sticky md:top-[10vh] w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-0 md:min-h-[80vh] flex flex-col justify-between z-10">
        
        {/* Core Dashboard Wrapper */}
        <div className="w-full bg-[#070707] rounded-[36px] border border-zinc-900/80 shadow-2xl relative overflow-hidden bg-noise p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-8 md:gap-4 md:min-h-[78vh]">
          
          {/* Subtle Glows */}
          <div className="absolute -top-[10%] -left-[10%] w-[300px] h-[300px] bg-amber-500/[0.01] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-amber-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

          {/* Section Header */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start relative z-10 border-b border-zinc-900/60 pb-6">
            
            {/* Top Left: Title */}
            <div className="md:col-span-7 space-y-2">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
                / OUR PROCESS
              </span>
              <h2 className="font-absans text-[clamp(1.8rem,4.5vw,3rem)] font-bold uppercase leading-[1.1] text-white tracking-wide">
                From Idea <br />
                <span className="gold-text-gradient">to Investment</span>
              </h2>
            </div>

            {/* Top Right: Description */}
            <div className="md:col-span-5 flex items-center md:h-full">
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                Our proven fundraising framework has helped founders transform ideas into investor-ready businesses. From strategy to execution, we guide you through every stage so you can focus on building your company.
              </p>
            </div>

          </div>

          {/* Bottom Area: Desktop Sticky Layout */}
          {isDesktop ? (
            <div className="flex-1 w-full grid grid-cols-12 gap-8 items-center relative z-10 pt-4">
              
              {/* Left Timeline Step Content */}
              <div className="col-span-5 flex flex-col justify-center gap-5 md:gap-6 pl-2">
                {stepsData.map((step, idx) => (
                  <TimelineStep
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    desc={step.desc}
                    isActive={idx === activeStep}
                    isCompleted={idx < activeStep}
                  />
                ))}
              </div>

              {/* Center Timeline Nodes Bar */}
              <div className="col-span-2 h-[80%] flex justify-center py-2">
                <Timeline
                  stepsCount={stepsData.length}
                  activeStep={activeStep}
                  progress={scrollYProgress}
                />
              </div>

              {/* Right Floating Stacked Cards */}
              <div className="col-span-5 flex justify-center items-center -translate-y-4 md:-translate-y-8">
                <FloatingCards activeStep={activeStep} />
              </div>

            </div>
          ) : (
            // Bottom Area: Mobile Natural Stack Layout
            <div className="w-full flex flex-col gap-10 pt-4 relative z-10">
              {stepsData.map((step, idx) => (
                <div key={step.number} className="w-full flex flex-col gap-5 border-l border-zinc-800/80 pl-4 py-1">
                  
                  {/* Step Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-absans text-lg font-extrabold text-amber-500">
                        0{step.number}
                      </span>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Checklist Card */}
                  <div className="w-full max-w-sm rounded-[20px] border border-zinc-900 bg-zinc-950/70 p-5 flex flex-col gap-4 shadow-lg">
                    <div className="space-y-1">
                      <span className="text-[8px] tracking-[0.2em] font-extrabold text-amber-500/80">
                        STAGE 0{step.number}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {step.items.map((item, checklistIdx) => (
                        <div key={checklistIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <div className="w-4.5 h-4.5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
