import type { MetadataRoute } from "next";
import { siteConfig, categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { customProducts, catalogProducts } from "@/data/products";

const customHubRoutes = [
  "/custom/merchandise",
  "/custom/printing",
  "/custom/corporate-merchandise",
  "/custom/event-merchandise",
  "/custom/university-merchandise",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...categories.map((category) => ({
      url: `${siteConfig.url}/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${siteConfig.url}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/discover`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/custom`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...customHubRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/guides/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const customProductRoutes: MetadataRoute.Sitemap = customProducts.map((product) => ({
    url: `${siteConfig.url}${product.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const catalogRoutes: MetadataRoute.Sitemap = catalogProducts.map((product) => ({
    url: `${siteConfig.url}${product.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...customProductRoutes,
    ...catalogRoutes,
  ];
}