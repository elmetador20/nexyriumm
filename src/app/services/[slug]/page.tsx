import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, blogPosts } from "@/lib/seo-data";
import { getServiceBySlug } from "@/lib/seo-data";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Nexyrium - Startup Fundraising Platform`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.nexyrium.in/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Nexyrium`,
      description: service.description,
      url: `https://www.nexyrium.in/services/${service.slug}`,
      siteName: "Nexyrium",
      images: [
        {
          url: "/nexyrium.jpeg",
          width: 1200,
          height: 630,
          alt: `${service.title} - Nexyrium`,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Nexyrium`,
      description: service.description,
      images: ["/nexyrium.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedBlogTitles: Record<string, string> = {};
  blogPosts.forEach((post) => {
    relatedBlogTitles[post.slug] = post.title;
  });

  return (
    <>
      <JsonLd
        data={generateServiceSchema({
          title: service.title,
          description: service.description,
          slug: `services/${service.slug}`,
          benefits: service.benefits,
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.nexyrium.in" },
          {
            name: "Services",
            url: "https://www.nexyrium.in/services",
          },
          {
            name: service.title,
            url: `https://www.nexyrium.in/services/${service.slug}`,
          },
        ])}
      />
      <JsonLd data={generateFAQSchema(service.faqs)} />
      <ServicePageLayout
        service={service}
        relatedBlogTitles={relatedBlogTitles}
      />
    </>
  );
}
