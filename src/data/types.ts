export type CategorySlug =
  | "style"
  | "watches"
  | "sunglasses"
  | "streetwear"
  | "accessories"
  | "trends";

export type Category = {
  slug: string;
  name: string;
  navName: string;
  tagline: string;
  description: string;
  imageTone: string;
  imageLabel: string;
};

export type Author = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: CategorySlug;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  imageTone: string;
  featured?: boolean;
  popular?: boolean;
  tags: string[];
  guideCategory: GuideFilter;
  content: ArticleBlock[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  compareAt?: string;
  rating?: number;
  reviews?: number;
  imageTone: string;
  badge?: string;
  description: string;
};

export type CatalogProduct = {
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  shortDescription: string;
  description: string;
  features: string[];
  customizationOptions?: string[];
  useCases?: string[];
  idealFor?: string[];
  minimumQuantity?: number;
  startingPrice?: string;
  materials?: string[];
  printingMethods?: string[];
  tone: string;
  label: string;
  href: string;
  quoteEnabled: boolean;
  whatsappEnabled: boolean;
};

export type ProductOptionBlock = {
  label: string;
  items: string[];
};

export type GuideFilter =
  | "All"
  | "Men's Fashion"
  | "Watches"
  | "Sunglasses"
  | "Accessories"
  | "Streetwear"
  | "Outfit Ideas"
  | "Buying Guides";