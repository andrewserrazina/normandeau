import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/memorials",
    "/services",
    "/our-process",
    "/gallery",
    "/faq",
    "/contact",
    "/privacy-policy",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
