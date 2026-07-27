import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/seo-data";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Services | Nexyrium - Startup Fundraising Platform",
  description:
    "Explore Nexyrium's full range of startup fundraising services: pitch deck creation, financial modeling, investor outreach, startup valuation, and more.",
  keywords: [
    "startup fundraising services",
    "pitch deck services",
    "financial modeling",
    "investor outreach",
    "startup valuation",
    "fundraising consultant",
  ],
  alternates: {
    canonical: "https://www.nexyrium.in/services",
  },
  openGraph: {
    title: "Our Services | Nexyrium",
    description:
      "Explore Nexyrium's full range of startup fundraising services.",
    url: "https://www.nexyrium.in/services",
    siteName: "Nexyrium",
    images: [
      {
        url: "/nexyrium.jpeg",
        width: 1200,
        height: 630,
        alt: "Nexyrium Services",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Nexyrium",
    description:
      "Explore Nexyrium's full range of startup fundraising services.",
  },
};

export default function ServicesIndex() {
  return (
    <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.nexyrium.in" },
          { name: "Services", url: "https://www.nexyrium.in/services" },
        ])}
      />

      <section className="w-full max-w-6xl px-6 pt-28 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>All Services</span>
          </div>

          <h1 className="font-absans text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.1] text-white tracking-wide max-w-3xl">
            Everything You Need{" "}
            <br />
            <span className="gold-text-gradient">To Raise Capital</span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            From pitch deck creation to investor outreach, Nexyrium provides
            end-to-end fundraising services that help startup founders become
            investor-ready and close their rounds with confidence.
          </p>
        </div>
      </section>

      <section className="w-full max-w-6xl px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative p-6 md:p-8 rounded-[24px] border border-zinc-900/60 bg-zinc-950/40 backdrop-blur-md hover:border-amber-500/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/15 transition-colors">
                <span className="font-absans text-lg font-bold text-amber-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="font-absans text-lg md:text-xl font-bold text-white tracking-wide mb-3 group-hover:text-amber-300 transition-colors">
                {service.title}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 group-hover:text-amber-400 transition-colors">
                Learn More
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
