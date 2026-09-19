import type { Metadata } from "next";
import { CategoryHero } from "@/components/editorial/CategoryHero";
import { EditorialRows } from "@/components/editorial/EditorialRows";
import { StoryCard } from "@/components/editorial/StoryCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryLinks } from "@/components/editorial/CategoryLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { getArticlesByCategory } from "@/data/articles";
import { customProducts } from "@/data/products";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Streetwear",
  description:
    "T-shirts, oversized tees, hoodies, caps and streetwear accessories. Outfit inspiration and style guides for streetwear in Bangladesh.",
  alternates: { canonical: "/streetwear" },
  ...ogMeta({
    title: "Streetwear | SWAG.bd",
    description: "Oversized tees, hoodies, caps and streetwear style guides for Bangladesh.",
    path: "/streetwear",
    image: imageFor("street-tee")!,
  }),
};

export default function StreetwearPage() {
  const streetArticles = getArticlesByCategory("streetwear");

  const tees = customProducts.filter((p) => p.slug === "t-shirts");
  const hoodies = customProducts.filter((p) => p.slug === "hoodies");
  const caps = customProducts.filter((p) => p.slug === "caps");

  const outfitInspiration = streetArticles.filter((article) =>
    ["how-to-style-an-oversized-tee", "oversized-vs-regular-fit-t-shirts"].includes(article.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Streetwear", href: "/streetwear" },
        ]}
      />

      <CategoryHero
        label="Streetwear"
        heading="Worn off the street."
        copy="Tees, hoodies, caps and the culture around them. Oversized fits, local brands and how streetwear actually works in Dhaka's heat and rain."
        imageLabel="STREETWEAR"
        image={imageFor("street-tee")}
        primaryCta={{ href: "/guides/oversized-vs-regular-fit-t-shirts", text: "Read the fit guide" }}
        secondaryCta={{ href: "/guides?filter=Streetwear", text: "All streetwear guides" }}
      />

      <section className="container-site py-10">
        <div className="relative overflow-hidden bg-ink">
          <ImagePlaceholder
            image={imageFor("street-urban")}
            aspect="21 / 9"
            label="OUTFIT INSPIRATION"
            caption="Dhaka, 2026"
            className="opacity-90"
          />
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            <p className="max-w-xl font-display text-[22px] font-bold leading-tight text-white sm:text-[28px]">
              The silhouette is the statement. Heavy fabric, dropped shoulders, clean colours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="The Range"
            title="Streetwear, category by category"
            description="The pieces that make up the look."
          />
        </div>
        <div className="container-site">
          <EditorialRows
            items={[
              {
                name: "T-Shirts",
                description:
                  "The foundation. Regular or oversized, heavyweight cotton keeps its shape through Dhaka summers and weekly washes.",
                tone: "sand",
                label: "T-SHIRTS",
                href: "/guides/oversized-vs-regular-fit-t-shirts",
                image: imageFor("tee-folded")!,
              },
              {
                name: "Oversized T-Shirts",
                description:
                  "Dropped shoulders, boxier body, deliberate. The defining cut of modern streetwear and a campus staple in Dhaka.",
                tone: "olive",
                label: "OVERSIZED",
                href: "/guides/how-to-style-an-oversized-tee",
                image: imageFor("tee-lifestyle")!,
              },
              {
                name: "Hoodies",
                description:
                  "A winter and evening piece in Bangladesh. Boxy cuts and heavyweight cotton over thin, shapeless fabric.",
                tone: "graphite",
                label: "HOODIES",
                href: "/custom/hoodies",
                image: imageFor("hoodie-urban")!,
              },
              {
                name: "Caps",
                description:
                  "The most reliable streetwear accessory in this climate. Structured, neutral and worn daily.",
                tone: "burgundy",
                label: "CAPS",
                href: "/custom/caps",
                image: imageFor("street-cap")!,
              },
              {
                name: "Streetwear accessories",
                description:
                  "Wristbands, belts and small details that anchor a relaxed outfit and keep it from reading as unfinished.",
                tone: "tan",
                label: "ACCESSORIES",
                href: "/accessories",
                image: imageFor("trend-accessories")!,
              },
            ]}
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="label-editorial-accent mb-3">Outfit Inspiration</p>
            <h2 className="font-display text-heading font-semibold text-ink">
              Build the look
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Proportion, fabric and length are what separate streetwear that works from
              streetwear that looks borrowed.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2">
            {outfitInspiration.map((article) => (
              <StoryCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="The Range"
            title="Custom streetwear essentials"
            description="Heavyweight tees, hoodies and caps, made custom for you or your crew."
            link={{ href: "/custom", text: "Explore Custom" }}
          />
          <div className="space-y-16">
            <ProductGrid products={tees} />
            <ProductGrid products={hoodies} columns={3} />
            <ProductGrid products={caps} columns={3} />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Guides"
            title="Streetwear style guides"
            link={{ href: "/guides?filter=Streetwear", text: "All guides" }}
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {streetArticles.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CategoryLinks current="streetwear" />

      <JsonLd
        data={itemListSchema(
          streetArticles.map((article) => ({
            name: article.title,
            url: `/guides/${article.slug}`,
          }))
        )}
      />
    </>
  );
}