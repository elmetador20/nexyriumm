import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, services } from "@/lib/seo-data";
import { getBlogBySlug } from "@/lib/seo-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Nexyrium Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://www.nexyrium.in/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Nexyrium Blog`,
      description: post.description,
      url: `https://www.nexyrium.in/blog/${post.slug}`,
      siteName: "Nexyrium",
      authors: [post.author],
      publishedTime: post.date,
      modifiedTime: post.date,
      images: [
        {
          url: "/nexyrium.jpeg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Nexyrium Blog`,
      description: post.description,
      images: ["/nexyrium.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function BlogContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: React.ReactNode[] = [];

  const processInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-zinc-300">$1</em>');
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (trimmed === "") {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${idx}`} className="space-y-2 pl-4 mb-6">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      if (inTable && tableRows.length > 0) {
        elements.push(
          <div key={`table-${idx}`} className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left">
              <tbody>{tableRows}</tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
      return;
    }

    if (trimmed.startsWith("## ")) {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${idx}`} className="space-y-2 pl-4 mb-6">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      const id = trimmed
        .slice(3)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h2
          key={idx}
          id={id}
          className="font-absans text-xl md:text-2xl font-bold text-white tracking-wide mt-12 mb-4 scroll-mt-24"
        >
          {trimmed.slice(3)}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={idx}
          className="font-absans text-lg font-bold text-white tracking-wide mt-8 mb-3"
        >
          {trimmed.slice(4)}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith("- [ ] ") || trimmed.startsWith("- [x] ")) {
      inList = true;
      const checked = trimmed.startsWith("- [x] ");
      const text = trimmed.slice(6);
      listItems.push(
        <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300 font-light">
          <span className={`w-4 h-4 rounded border ${checked ? "bg-amber-500/20 border-amber-500/40 text-amber-400" : "border-zinc-700 text-zinc-600"} flex items-center justify-center text-[10px] shrink-0`}>
            {checked ? "✓" : ""}
          </span>
          <span dangerouslySetInnerHTML={{ __html: processInline(text) }} />
        </li>
      );
      return;
    }

    if (trimmed.startsWith("- ")) {
      inList = true;
      listItems.push(
        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300 font-light">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: processInline(trimmed.slice(2)) }} />
        </li>
      );
      return;
    }

    if (trimmed.startsWith("1. ") || /^\d+\.\s/.test(trimmed)) {
      inList = true;
      const text = trimmed.replace(/^\d+\.\s/, "");
      listItems.push(
        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
          <span className="font-absans text-amber-500 font-bold text-xs mt-0.5 shrink-0">
            {trimmed.match(/^(\d+)\./)?.[1]}.
          </span>
          <span dangerouslySetInnerHTML={{ __html: processInline(text) }} />
        </li>
      );
      return;
    }

    if (trimmed.startsWith("|")) {
      inTable = true;
      if (trimmed.includes("---")) return;
      const cells = trimmed
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());
      const isFirstRow = tableRows.length === 0;
      tableRows.push(
        <tr key={idx} className={isFirstRow ? "border-b border-zinc-800" : ""}>
          {cells.map((cell, cellIdx) =>
            isFirstRow ? (
              <th
                key={cellIdx}
                className="px-4 py-2 text-xs font-bold text-amber-400 uppercase tracking-wider"
              >
                {cell}
              </th>
            ) : (
              <td
                key={cellIdx}
                className="px-4 py-2 text-zinc-300 font-light border-b border-zinc-900/50"
              >
                {cell}
              </td>
            )
          )}
        </tr>
      );
      return;
    }

    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${idx}`} className="space-y-2 pl-4 mb-6">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }

    if (inTable && tableRows.length > 0) {
      elements.push(
        <div key={`table-${idx}`} className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left">
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }

    elements.push(
      <p
        key={idx}
        className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: processInline(trimmed) }}
      />
    );
  });

  if (inList && listItems.length > 0) {
    elements.push(
      <ul key="list-final" className="space-y-2 pl-4 mb-6">
        {listItems}
      </ul>
    );
  }
  if (inTable && tableRows.length > 0) {
    elements.push(
      <div key="table-final" className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left">
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }

  return <>{elements}</>;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((b) => b.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter(Boolean);

  const relatedServiceLinks = services.filter((s) =>
    s.relatedBlogs.includes(slug)
  );

  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          author: post.author,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.nexyrium.in" },
          { name: "Blog", url: "https://www.nexyrium.in/blog" },
          {
            name: post.title,
            url: `https://www.nexyrium.in/blog/${post.slug}`,
          },
        ])}
      />
      {post.faqs.length > 0 && (
        <JsonLd data={generateFAQSchema(post.faqs)} />
      )}

      <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

        {/* Breadcrumbs */}
        <div className="relative z-10 w-full pt-20">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </div>

        {/* Article Header */}
        <article className="w-full max-w-4xl px-6 py-12 md:py-16 relative z-10">
          <header className="space-y-6 mb-12">
            <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
              <span className="text-amber-500 font-bold tracking-widest uppercase">
                {post.category}
              </span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="font-absans text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[1.15] text-white tracking-wide">
              {post.title}
            </h1>

            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
              {post.description}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-500/20 to-amber-500/5 border border-amber-500/30 flex items-center justify-center">
                <span className="text-xs font-bold text-amber-400">
                  {post.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-[10px] text-zinc-500 font-mono">
                  {post.authorRole}
                </p>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          {post.tableOfContents.length > 0 && (
            <nav className="mb-12 p-6 rounded-2xl border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-md">
              <h2 className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-zinc-400 hover:text-amber-300 transition-colors font-light"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content */}
          <div className="prose-dark">
            <BlogContent content={post.content} />
          </div>

          {/* FAQs */}
          {post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-zinc-900/60 space-y-6">
              <h2 className="font-absans text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-950/30"
                  >
                    <h3 className="text-sm font-bold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Services */}
          {relatedServiceLinks.length > 0 && (
            <section className="mt-12 pt-12 border-t border-zinc-900/60 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                Related Services
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedServiceLinks.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950/30 text-xs text-zinc-300 hover:border-amber-500/30 hover:text-amber-300 transition-all"
                  >
                    {service.shortTitle}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-12 border-t border-zinc-900/60 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPosts.map(
                  (related) =>
                    related && (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-950/30 hover:border-amber-500/25 transition-all group"
                      >
                        <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                          {related.category}
                        </span>
                        <h3 className="text-sm font-bold text-white mt-2 group-hover:text-amber-300 transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-[10px] text-zinc-500 font-mono mt-3">
                          {related.readingTime}
                        </p>
                      </Link>
                    )
                )}
              </div>
            </section>
          )}

          {/* Previous/Next Navigation */}
          <nav className="mt-16 pt-12 border-t border-zinc-900/60 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group p-5 rounded-2xl border border-zinc-900/60 bg-zinc-950/30 hover:border-amber-500/25 transition-all"
              >
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  ← Previous
                </span>
                <h3 className="text-sm font-bold text-white mt-2 group-hover:text-amber-300 transition-colors">
                  {prevPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group p-5 rounded-2xl border border-zinc-900/60 bg-zinc-950/30 hover:border-amber-500/25 transition-all text-right"
              >
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Next →
                </span>
                <h3 className="text-sm font-bold text-white mt-2 group-hover:text-amber-300 transition-colors">
                  {nextPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>
      </div>
    </>
  );
}
