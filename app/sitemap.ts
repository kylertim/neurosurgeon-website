import type { MetadataRoute } from "next";
import { expertisePages } from "@/data";
import { conditionPages } from "@/conditionData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // Replace with the final production domain before launch.
  const staticRoutes = ["", "/about", "/conditions", "/research", "/locations"];
  return [
    ...staticRoutes.map(route => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...expertisePages.map(page => ({ url: `${base}/expertise/${page.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...conditionPages.map(page => ({ url: `${base}/conditions/${page.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
