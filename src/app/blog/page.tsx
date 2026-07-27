import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/seo-data";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog | Nexyrium - Startup Fundraising Insights",
  description:
    "Expert insights on startup fundraising, pitch decks, financial modeling, investor outreach, and startup growth strategy from Nexyrium.",
  keywords: [
    "startup fundraising blog",
    "pitch deck tips",
    "financial modeling guide",
    "investor outreach strategy",
    "seed funding guide",
  ],
  alternates: {
    canonical: "https://www.nexyrium.in/blog",
  },
  openGraph: {
    title: "Blog | Nexyrium - Startup Fundraising Insights",
    description:
      "Expert insights on startup fundraising, pitch decks, financial modeling, investor outreach, and startup growth strategy.",
    url: "https://www.nexyrium.in/blog",
    siteName: "Nexyrium",
    images: [
      {
        url: "/nexyrium.jpeg",
        width: 1200,
        height: 630,
        alt: "Nexyrium Blog",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Nexyrium - Startup Fundraising Insights",
    description:
      "Expert insights on startup fundraising, pitch decks, financial modeling, and investor outreach.",
  },
};

export default function BlogIndex() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  return (
    <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.nexyrium.in" },
          { name: "Blog", url: "https://www.nexyrium.in/blog" },
        ])}
      />

      {/* Hero */}
      <section className="w-full max-w-6xl px-6 pt-28 pb-12 md:pt-32 md:pb-16 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Insights & Guides</span>
          </div>
          <h1 className="font-absans text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.1] text-white tracking-wide max-w-3xl">
            Startup Fundraising{" "}
            <br />
            <span className="gold-text-gradient">Knowledge Hub</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            Expert insights, practical guides, and actionable advice to help
            founders navigate the fundraising landscape—from pre-seed to
            Series A.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="w-full max-w-6xl px-6 pb-8 relative z-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950/30 text-xs font-medium text-zinc-400 tracking-wide"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full max-w-6xl px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative p-6 md:p-8 rounded-[24px] border border-zinc-900/60 bg-zinc-950/40 backdrop-blur-md hover:border-amber-500/25 transition-all duration-300 flex flex-col"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-bold text-base md:text-lg text-white tracking-wide mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-light leading-relaxed flex-1 mb-5">
                {post.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
