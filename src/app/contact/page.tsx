import type { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowRight, Calendar } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us | Nexyrium - Book a Free Strategy Session",
  description:
    "Contact Nexyrium for startup fundraising consulting, pitch deck creation, financial modeling, and investor readiness services. Book your free strategy session today.",
  keywords: [
    "contact Nexyrium",
    "startup fundraising consultant",
    "pitch deck consultant India",
    "book strategy call",
    "fundraising advisory",
  ],
  alternates: {
    canonical: "https://www.nexyrium.in/contact",
  },
  openGraph: {
    title: "Contact Us | Nexyrium",
    description:
      "Book a free strategy session with Nexyrium. Startup fundraising consulting, pitch deck creation, and investor readiness services.",
    url: "https://www.nexyrium.in/contact",
    siteName: "Nexyrium",
    images: [
      {
        url: "/nexyrium.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Nexyrium",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Nexyrium",
    description:
      "Book a free strategy session with Nexyrium for startup fundraising consulting.",
  },
};

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.nexyrium.in" },
          { name: "Contact", url: "https://www.nexyrium.in/contact" },
        ])}
      />
      <JsonLd data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <section className="w-full max-w-5xl px-6 pt-28 pb-12 md:pt-32 md:pb-16 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Get in Touch</span>
          </div>

          <h1 className="font-absans text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.1] text-white tracking-wide max-w-3xl">
            Let&apos;s Build{" "}
            <span className="gold-text-gradient">Your Future</span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
            Ready to become investor-ready? Reach out to schedule your free,
            confidential fundraising strategy session with our team.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full max-w-5xl px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-absans text-xl font-bold uppercase text-white tracking-wide">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-900/60 bg-zinc-950/30">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@nexyrium.in"
                      className="text-sm text-zinc-300 hover:text-amber-300 transition-colors font-light"
                    >
                      info@nexyrium.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-900/60 bg-zinc-950/30">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/918979952549"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-300 hover:text-amber-300 transition-colors font-light"
                    >
                      +91 89799 52549
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-900/60 bg-zinc-950/30">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-1">
                      Location
                    </p>
                    <p className="text-sm text-zinc-300 font-light">
                      India (Remote-first)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                Why Founders Trust Nexyrium
              </h3>
              <div className="space-y-3">
                {[
                  "Confidential NDA signed before every engagement",
                  "100+ founders supported across industries",
                  "250+ investor-ready deliverables created",
                  "Average 2-4 week delivery timeline",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-zinc-400 font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Call CTA */}
            <a
              href="https://wa.me/918979952549"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Strategy Call on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-zinc-900/60 bg-zinc-950/70 p-6 md:p-8 backdrop-blur-md shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-absans text-xl font-bold uppercase text-white tracking-wide">
                  Send a Message
                </h2>
                <p className="text-xs text-zinc-500 font-light">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Services Needed
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Pitch Deck, Financial Model, Fundraising Strategy"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all font-light"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Startup Stage
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Pre-Seed, Seed, Series A"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all font-light"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your startup, current round size, and fundraising goals."
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-xs tracking-widest uppercase text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
