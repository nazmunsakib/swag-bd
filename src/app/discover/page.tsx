import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DiscoverGrid } from "@/components/products/DiscoverGrid";
import { getAllProducts } from "@/data/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Explore custom merchandise and catalog pieces in Bangladesh. Custom T-shirts, hoodies, caps, mugs, bags, watches, sunglasses and accessories. Every item leads to a quote, not a checkout.",
  alternates: { canonical: "/discover" },
  ...ogMeta({
    title: "Discover | SWAG.bd",
    description: "Explore custom merchandise and catalog pieces in Bangladesh. Every item leads to a quote.",
    path: "/discover",
    image: imageFor("hero-merch")!,
  }),
};

type Props = {
  searchParams: Promise<{ filter?: string }>;
};

export default async function DiscoverPage({ searchParams }: Props) {
  const { filter } = await searchParams;
  const validFilters = ["All", "Custom", "Watches", "Sunglasses", "Wristbands", "Bracelets", "Bags", "Wallets", "Keychains"];
  const initial = filter && validFilters.includes(filter) ? filter : "All";

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Discover", href: "/discover" },
        ]}
      />

      <section className="container-site py-12 sm:py-16">
        <p className="label-editorial-accent mb-5">Discover</p>
        <h1 className="max-w-3xl font-display text-display-lg font-extrabold text-ink">
          Found, then discussed.
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-muted">
          Custom merchandise and catalog pieces, chosen by the editorial team. Explore,
          learn, ask, then get a quote. The conversation is the checkout.
        </p>
      </section>

      <DiscoverGrid products={getAllProducts()} initialFilter={initial} />

      <JsonLd
        data={itemListSchema(
          getAllProducts().map((product) => ({
            name: product.name,
            url: product.href,
          }))
        )}
      />
    </>
  );
}