import type { MetadataRoute } from "next";

const today = new Date().toISOString(); // Pre-generate the date at build time

export const dynamic = "force-static";

const host = "https://shutdown-timer.com";
//
// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://shutdown-timer.com",
//       lastModified: today,
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://shutdown-timer.com/faq",
//       lastModified: today,
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//   ];
// }

import { getPathname, routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/"), getEntry("/faq")];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
  return {
    lastModified: today,
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales
          .filter((locale) => locale !== "en")
          .map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
  };
}

function getUrl(href: Href, locale: string) {
  const pathname = locale !== "en" ? getPathname({ locale, href }) : href;
  return host + pathname;
}
