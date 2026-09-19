import type { Metadata } from "next";
import { CategoryHero } from "@/components/editorial/CategoryHero";
import { EditorialRows } from "@/components/editorial/EditorialRows";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryLinks } from "@/components/editorial/CategoryLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { getArticlesByCategory } from "@/data/articles";
import { getCatalogByCategory } from "@/data/products";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Accessories",
  description:
    "Wristbands, bracelets, wallets, bags and everyday accessories. The finishing details that complete a look in Bangladesh.",
  alternates: { canonical: "/accessories" },
  ...ogMeta({
    title: "Accessories | SWAG.bd",
    description: "Wristbands, bracelets, wallets, bags and everyday accessories that complete a look in Bangladesh.",
    path: "/accessories",
    image: imageFor("acc-flatlay")!,
  }),
};

export default function AccessoriesPage() {
  const accessoryArticles = getArticlesByCategory("accessories");
  const accessoryProducts = getCatalogByCategory("Wristbands")
    .concat(getCatalogByCategory("Bracelets"))
    .concat(getCatalogByCategory("Wallets"))
    .concat(getCatalogByCategory("Bags"))
    .concat(getCatalogByCategory("Keychains"));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Accessories", href: "/accessories" },
        ]}
      />

      <CategoryHero
        label="Accessories"
        heading="The finishing details."
        copy="Wristbands, bracelets, wallets, bags and the small pieces that quietly complete an outfit. We cover the ones worth owning and how to wear them."
        imageLabel="ACCESSORIES"
        image={imageFor("acc-flatlay")}
        primaryCta={{ href: "/guides/essential-accessories-every-man-should-own", text: "Start with the essentials" }}
        secondaryCta={{ href: "/discover", text: "Browse accessories" }}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="The Edit"
            title="Accessories, one category at a time"
            description="Everyday pieces, considered properly."
          />
        </div>
        <div className="container-site">
          <EditorialRows
            items={[
              {
                name: "Wristbands",
                description:
                  "The most worn accessory after a watch. Leather, woven or paracord, worn on the opposite wrist for balance.",
                tone: "tan",
                label: "WRISTBANDS",
                href: "/products/leather-wristband",
                image: imageFor("acc-bracelet")!,
              },
              {
                name: "Bracelets",
                description:
                  "Steel, cord or woven, a single bracelet adds warmth and texture without shouting. Weatherproof versions survive the monsoon.",
                tone: "olive",
                label: "BRACELETS",
                href: "/products/paracord-bracelet",
                image: imageFor("band-stack")!,
              },
              {
                name: "Wallets",
                description:
                  "Cash is still daily life in Bangladesh, so the right wallet holds notes and cards without bulging a pocket.",
                tone: "graphite",
                label: "WALLETS",
                href: "/guides/how-to-choose-a-wallet",
                image: imageFor("wallet-flatlay")!,
              },
              {
                name: "Bags",
                description:
                  "Totes, crossbodies and backpacks built for Dhaka's commute and its weather. Treated fabric beats raw leather in the rain.",
                tone: "sand",
                label: "BAGS",
                href: "/products/canvas-tote",
                image: imageFor("acc-bag")!,
              },
              {
                name: "Keychains",
                description:
                  "Small, steel and silent. The kind of piece you notice only when it is missing, which is exactly the point.",
                tone: "graphite",
                label: "KEYCHAINS",
                href: "/products/steel-keychain",
                image: imageFor("acc-keychain")!,
              },
              {
                name: "Everyday accessories",
                description:
                  "Caps for the sun, sunglass straps for the commute and the few pieces that make a minimal look feel complete.",
                tone: "burgundy",
                label: "EVERYDAY",
                href: "/guides/essential-accessories-every-man-should-own",
                image: imageFor("trend-accessories")!,
              },
            ]}
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Guides"
            title="Accessory guides"
            description="Which pieces, which materials and how to keep them alive."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {accessoryArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Discover"
            title="Curated accessories"
            description="Small pieces, big difference."
            link={{ href: "/discover", text: "Browse all" }}
          />
        </div>
        <div className="container-site">
          <ProductGrid products={accessoryProducts} />
        </div>
      </section>

      <CategoryLinks current="accessories" />

      <JsonLd
        data={itemListSchema(
          accessoryArticles.map((article) => ({
            name: article.title,
            url: `/guides/${article.slug}`,
          }))
        )}
      />
    </>
  );
}