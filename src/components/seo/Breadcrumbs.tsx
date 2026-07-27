"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full max-w-6xl mx-auto px-6 py-3">
      <ol className="flex items-center gap-1.5 text-[10px] md:text-xs text-zinc-500 font-mono tracking-wide">
        <li>
          <Link
            href="/"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <span className="text-zinc-700">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
