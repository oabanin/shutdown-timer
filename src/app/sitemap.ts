import type { MetadataRoute } from "next";

const today = new Date().toISOString(); // Pre-generate the date at build time

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shutdown-timer.com",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://shutdown-timer.com/faq",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
