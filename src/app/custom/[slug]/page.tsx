import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { customProducts, getCustomProduct } from "@/data/products";
import { siteConfig } from "@/data/categories";
import { productImage } from "@/data/images";
import { CustomProductLayout } from "@/components/custom/CustomProductLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return customProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getCustomProduct(slug);
  if (!product) return {};

  const image = productImage(product);
  const url = `${siteConfig.url}${product.href}`;
  const title = `${product.name} | SWAG.bd Custom`;

  return {
    title,
    description: `${product.shortDescription} Custom ${product.name.toLowerCase()} in Bangladesh. Pricing depends on quantity, fabric and printing. Request a quotation on WhatsApp.`,
    alternates: { canonical: product.href },
    openGraph: {
      type: "website",
      title,
      description: product.shortDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: image.src, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.shortDescription,
      images: [image.src],
    },
  };
}

export default async function CustomProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getCustomProduct(slug);
  if (!product) notFound();

  return <CustomProductLayout product={product} />;
}