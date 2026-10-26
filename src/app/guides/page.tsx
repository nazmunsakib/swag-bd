import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GuidesGrid } from "@/components/guides/GuidesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { collectionPageSchema } from "@/lib/schema";
import { articles } from "@/data/articles";
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

export default function GuidesPage() {
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

      <GuidesGrid articles={articles} initialFilter="All" />
    </>
  );
}
