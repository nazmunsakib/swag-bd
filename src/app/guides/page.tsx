import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GuidesGrid } from "@/components/guides/GuidesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { collectionPageSchema } from "@/lib/schema";
import { articles, guideFilters } from "@/data/articles";
import type { GuideFilter } from "@/data/types";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Style Guides",
  description:
    "Practical style guides for men in Bangladesh. Fashion, watches, sunglasses, streetwear, accessories, outfit ideas and buying guides.",
  alternates: { canonical: "/guides" },
  ...ogMeta({
    title: "Style Guides | SWAG.bd",
    description: "Practical style guides for men in Bangladesh. Fashion, watches, sunglasses, streetwear and buying guides.",
    path: "/guides",
    image: imageFor("wardrobe")!,
  }),
};

type Props = {
  searchParams: Promise<{ filter?: string }>;
};

function normalizeFilter(value: string | undefined): GuideFilter {
  if (value && (guideFilters as readonly string[]).includes(value)) {
    return value as GuideFilter;
  }
  return "All";
}

export default async function GuidesPage({ searchParams }: Props) {
  const { filter } = await searchParams;

  return (
    <>
      <JsonLd
        data={collectionPageSchema(
          articles.map((article) => ({ name: article.title, url: `/guides/${article.slug}` }))
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
      />

      <section className="container-site py-12 sm:py-16">
        <p className="label-editorial-accent mb-5">The Library</p>
        <h1 className="max-w-3xl font-display text-display-lg font-extrabold text-ink">
          Style guides that actually help.
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-muted">
          Practical, specific and written for how men in Bangladesh actually dress. No
          filler, no fluff, just guides you can use today.
        </p>
      </section>

      <GuidesGrid articles={articles} initialFilter={normalizeFilter(filter)} />
    </>
  );
}