import type { Category } from "./types";

export const siteConfig = {
  name: "SWAG.bd",
  legalName: "SWAG.bd",
  url: "https://swag.bd",
  description:
    "Bangladesh's style and lifestyle platform. Men's fashion, watches, sunglasses, streetwear and accessories through practical guides, trends and curated products.",
  locale: "en_BD",
  twitterHandle: "@swagbd",
  social: {
    instagram: "https://instagram.com/swag.bd",
    facebook: "https://facebook.com/swag.bd",
    twitter: "https://x.com/swagbd",
    youtube: "https://youtube.com/@swagbd",
  },
};

export const authors: Record<string, AuthorStub> = {
  rafiq: {
    name: "Rafiq Chowdhury",
    role: "Editor, Watches",
    initials: "RC",
    bio: "Rafiq writes about watches, timekeeping and how a good watch holds a wardrobe together. Based in Dhaka, he has been collecting affordable mechanical watches for over a decade.",
  },
  tasnia: {
    name: "Tasnia Rahman",
    role: "Style Editor",
    initials: "TR",
    bio: "Tasnia covers menswear, streetwear and everyday style in Bangladesh. She is obsessed with fit, fabric and the small details that make an outfit work.",
  },
  farhan: {
    name: "Farhan Islam",
    role: "Editor, Sunglasses & Accessories",
    initials: "FI",
    bio: "Farhan edits our eyewear and accessories coverage. He believes the right frame and the right bracelet are the fastest way to change how an outfit reads.",
  },
  priyanka: {
    name: "Priyanka Das",
    role: "Editor, Streetwear",
    initials: "PD",
    bio: "Priyanka writes about streetwear, sneakers and youth culture in Dhaka, Chattogram and beyond. She tracks how global trends land locally.",
  },
};

import type { Author as AuthorStub } from "./types";

export const categories: Category[] = [
  {
    slug: "style",
    name: "Style",
    navName: "Style",
    tagline: "The full picture.",
    description:
      "Men's fashion, outfit ideas and how to build a wardrobe that actually works in Bangladesh.",
    imageTone: "sand",
    imageLabel: "STYLE / 2026",
  },
  {
    slug: "watches",
    name: "Watches",
    navName: "Watches",
    tagline: "Time, worn well.",
    description:
      "Watch guides, buying advice, sizing, styling and comparisons for every budget.",
    imageTone: "graphite",
    imageLabel: "WATCHES",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    navName: "Sunglasses",
    tagline: "Find your frame.",
    description:
      "Face shapes, frame styles, UV protection and how to pick a pair that fits you.",
    imageTone: "slate",
    imageLabel: "SUNGLASSES",
  },
  {
    slug: "streetwear",
    name: "Streetwear",
    navName: "Streetwear",
    tagline: "Worn off the street.",
    description:
      "Oversized tees, hoodies, caps, sneakers and the culture around them.",
    imageTone: "olive",
    imageLabel: "STREETWEAR",
  },
  {
    slug: "accessories",
    name: "Accessories",
    navName: "Accessories",
    tagline: "The finishing details.",
    description:
      "Wristbands, bracelets, bags, wallets and the everyday pieces that complete a look.",
    imageTone: "tan",
    imageLabel: "ACCESSORIES",
  },
  {
    slug: "trends",
    name: "Trends",
    navName: "Trends",
    tagline: "What's moving now.",
    description:
      "Seasonal trends, what is selling in Dhaka and how global fashion is landing locally.",
    imageTone: "burgundy",
    imageLabel: "TRENDS",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const trendingTopics: { slug: string; label: string; caption: string; tone: string; imageKey: string }[] = [
  {
    slug: "watches",
    label: "Everyday Watches",
    caption: "Read on the wrist, reliable every day",
    tone: "graphite",
    imageKey: "trend-watches",
  },
  {
    slug: "sunglasses",
    label: "Modern Sunglasses",
    caption: "Frames that changed this season",
    tone: "slate",
    imageKey: "trend-sunglasses",
  },
  {
    slug: "streetwear",
    label: "Oversized T-Shirts",
    caption: "The cut is the style",
    tone: "olive",
    imageKey: "trend-tshirts",
  },
  {
    slug: "streetwear",
    label: "Streetwear",
    caption: "Hoodies, caps and the culture",
    tone: "burgundy",
    imageKey: "trend-streetwear",
  },
  {
    slug: "accessories",
    label: "Everyday Accessories",
    caption: "Small pieces, big difference",
    tone: "tan",
    imageKey: "trend-accessories",
  },
];