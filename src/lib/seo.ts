import type { Metadata } from "next";
import type { ImageAsset } from "@/data/images";
import { siteConfig } from "@/data/categories";

export function ogMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: ImageAsset;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [{ url: image.src, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
  };
}