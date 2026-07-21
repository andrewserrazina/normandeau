import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  /** Set false for pages that shouldn't be indexed (e.g. thank-you states). */
  index?: boolean;
}

/**
 * Builds consistent per-page metadata (title, description, canonical,
 * Open Graph, Twitter) from a small input object so every route stays
 * in sync with site-config.ts.
 */
export function buildMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
