import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/categories";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search", "/quote", "/credits", "/privacy", "/terms"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}