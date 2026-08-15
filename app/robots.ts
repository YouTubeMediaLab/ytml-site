import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/brand";

/**
 * robots.txt を生成する。
 * /lp/ 配下は広告専用のため、検索結果に出さない。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/lp/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
