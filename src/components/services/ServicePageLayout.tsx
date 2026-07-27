"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  TrendingUp,
  Workflow,
  Users,
  Shield,
  Cpu,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  TrendingUp,
  Workflow,
  Users,
  Shield,
  Cpu,
  CheckCircle2,
  Sparkles,
};

interface ServicePageLayoutProps {
  service: {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    benefits: string[];
    process: string[];
    deliverables: string[];
    timeline: string;
    faqs: { question: string; answer: string }[];
    relatedBlogs: string[];
  };
  relatedBlogTitles?: Record<string, string>;
}

function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl overflow-hidden transition-colors duration-300 hover:border-amber-500/25 shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 text-white hover:text-amber-300 transition-colors duration-300"
      >
        <span className="text-sm md:text-base font-bold tracking-wide">
          {question}
        </span>
        <span className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 shrink-0 text-xs font-bold">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-900/40">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ServicePageLayout({
  service,
  relatedBlogTitles = {},
}: ServicePageLayoutProps) {
  const IconComponent = iconMap[service.icon] || Layers;

  return (
    <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none" />

      {/* Breadcrumbs */}
      <div className="relative z-10 w-full pt-20">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold tracking-wider">
            <IconComponent className="w-4 h-4" />
            <span>{service.title}</span>
          </div>

          <h1 className="font-absans text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.1] text-white tracking-wide max-w-3xl">
            {service.title} <br />
            <span className="gold-text-gradient">for Startups</span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/918979952549"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 hover:border-amber-500/40 hover:text-white transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-5xl px-6 py-12 relative z-10">
        <div className="rounded-[32px] border border-zinc-900/60 bg-zinc-950/70 p-8 md:p-12 backdrop-blur-md">
          <h2 className="font-absans text-2xl md:text-3xl font-bold uppercase text-white tracking-wide mb-6">
            About {service.title}
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      {/* Why Founders Need This */}
      <section className="w-full max-w-5xl px-6 py-12 relative z-10">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
              / Benefits
            </span>
            <h2 className="font-absans text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
              Why Founders Need <span className="gold-text-gradient">This</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl border border-zinc-900/40 bg-zinc-950/30"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300 font-light leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full max-w-5xl px-6 py-12 relative z-10">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
              / Our Process
            </span>
            <h2 className="font-absans text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
              How We <span className="gold-text-gradient">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative p-6 rounded-2xl border border-zinc-900/60 bg-zinc-950/40 backdrop-blur-md hover:border-amber-500/25 transition-all"
              >
                <span className="font-absans text-3xl font-extrabold text-amber-500/20 absolute top-4 right-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-zinc-300 font-light leading-relaxed relative z-10">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Timeline */}
      <section className="w-full max-w-5xl px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Deliverables */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
                / Deliverables
              </span>
              <h2 className="font-absans text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                What You Get
              </h2>
            </div>
            <div className="space-y-3">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <FileText className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
                / Timeline
              </span>
              <h2 className="font-absans text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                Expected Duration
              </h2>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-900/60 bg-zinc-950/40">
              <Clock className="w-8 h-8 text-amber-500" />
              <div>
                <p className="text-2xl font-bold text-white font-absans">
                  {service.timeline}
                </p>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  From kickoff to final delivery
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/[0.03]">
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                <strong className="text-amber-400 font-medium">Note:</strong>{" "}
                Timelines may vary based on project complexity, feedback cycles,
                and scope. We always provide a detailed timeline during the
                discovery call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full max-w-5xl px-6 py-16 relative z-10 border-t border-zinc-900/60">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
              / FAQs
            </span>
            <h2 className="font-absans text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
              Frequently Asked{" "}
              <span className="gold-text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {service.relatedBlogs.length > 0 && Object.keys(relatedBlogTitles).length > 0 && (
        <section className="w-full max-w-5xl px-6 py-12 relative z-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
                / Related Articles
              </span>
              <h2 className="font-absans text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                Further Reading
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.relatedBlogs.map((blogSlug) => (
                <Link
                  key={blogSlug}
                  href={`/blog/${blogSlug}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-zinc-900/40 bg-zinc-950/30 hover:border-amber-500/25 transition-all group"
                >
                  <span className="text-sm text-zinc-300 group-hover:text-amber-300 transition-colors font-light flex-1">
                    {relatedBlogTitles[blogSlug] || blogSlug}
                  </span>
                  <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24 relative z-10 border-t border-zinc-900/60">
        <div className="text-center space-y-6">
          <h2 className="font-absans text-2xl md:text-4xl font-bold uppercase text-white tracking-wide">
            Ready to Get Started?
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-lg mx-auto">
            Book a free strategy call to discuss how our {service.title.toLowerCase()} services can help your startup become investor-ready.
          </p>
          <a
            href="https://wa.me/918979952549"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
          >
            Book Your Free Strategy Session
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
