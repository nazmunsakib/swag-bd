import type { Article, Product, CatalogProduct } from "@/data/types";
import { siteConfig } from "@/data/categories";
import { businessContact } from "@/data/business";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${businessContact.whatsappNumber}`,
        contactType: "customer service",
        availableLanguage: ["en", "bn"],
        areaServed: "BD",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["en", "bn"],
        areaServed: "BD",
      },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function articleSchema(article: Article) {
  const url = `${siteConfig.url}/guides/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: url,
    wordCount: article.content.length * 40,
  };
}

export function productSchema(product: Product) {
  const price = product.price.replace(/,/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "BDT",
      price,
      availability: "https://schema.org/InStock",
    },
    ...(product.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviews ?? 1,
          },
        }
      : {}),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function serviceSchema(product: CatalogProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: product.name,
    name: product.name,
    description: product.shortDescription,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "BD",
    url: `${siteConfig.url}${product.href}`,
  };
}

export function catalogProductSchema(product: CatalogProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    url: `${siteConfig.url}${product.href}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };
}

export function collectionPageSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${siteConfig.name} Guides`,
    description: "Practical style guides for men in Bangladesh.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${siteConfig.url}${item.url}`,
      })),
    },
  };
}