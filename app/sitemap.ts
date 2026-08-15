import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/brand";

/**
 * sitemap.xml を生成する。
 * LP（/lp/line）は広告からの流入専用で検索には載せないため、含めない。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();

  return [
    { url: SITE_URL, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/company`, lastModified: updated, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: updated, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/tokushoho`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
