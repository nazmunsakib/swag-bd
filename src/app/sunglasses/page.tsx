import type { Metadata } from "next";
import { CategoryHero } from "@/components/editorial/CategoryHero";
import { TraitGrid } from "@/components/editorial/TraitGrid";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { StoryCard } from "@/components/editorial/StoryCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryLinks } from "@/components/editorial/CategoryLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { getArticlesByCategory, getLatestArticles } from "@/data/articles";
import { getCatalogByCategory } from "@/data/products";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sunglasses",
  description:
    "Face shapes, frame styles, UV protection and buying guides. How to find the right sunglasses for your face in Bangladesh.",
  alternates: { canonical: "/sunglasses" },
  ...ogMeta({
    title: "Sunglasses | SWAG.bd",
    description: "Face shapes, frame styles, UV protection and buying guides for sunglasses in Bangladesh.",
    path: "/sunglasses",
    image: imageFor("sun-portrait")!,
  }),
};

export default function SunglassesPage() {
  const sunArticles = getArticlesByCategory("sunglasses");
  const sunProducts = getCatalogByCategory("Sunglasses");

  const featuredProducts = ["aviator-sunglasses", "round-sunglasses-50", "wayfarer-sunglasses"]
    .map((slug) => sunProducts.find((p) => p.slug === slug))
    .filter(Boolean);

  const faceShapeArticles = sunArticles.filter((article) =>
    ["how-to-choose-sunglasses-for-your-face-shape"].includes(article.slug)
  );
  const styleArticles = sunArticles.filter((article) =>
    ["sunglasses-uv-protection-what-you-need-to-know"].includes(article.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Sunglasses", href: "/sunglasses" },
        ]}
      />

      <CategoryHero
        label="Sunglasses"
        heading="Find your frame."
        copy="Face shape, frame style and real UV protection. Everything you need to pick sunglasses that fit your face and your life in Bangladesh's sun."
        imageLabel="SUNGLASSES"
        image={imageFor("sun-portrait")}
        primaryCta={{ href: "/guides/how-to-choose-sunglasses-for-your-face-shape", text: "Read the face shape guide" }}
        secondaryCta={{ href: "/guides?filter=Sunglasses", text: "All sunglasses guides" }}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Trending"
            title="Trending frames"
            description="The shapes doing the most right now."
            link={{ href: "/discover?filter=Sunglasses", text: "Browse sunglasses" }}
          />
        </div>
        <div className="container-site">
          <ProductGrid products={featuredProducts as typeof sunProducts} columns={3} />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <TraitGrid
          label="Frame Styles"
          title="Know the shapes"
          traits={[
            { name: "Aviator", description: "Teardrop lenses and a double bridge. Suits square and oval faces." },
            { name: "Wayfarer", description: "The classic trapezoid frame. Balances round faces and reads smart casual." },
            { name: "Round", description: "Soft circular lenses. Softens strong jawlines and adds character." },
            { name: "Square", description: "Hard lines and clean corners. Works best on round and oval faces." },
            { name: "Rectangular", description: "Longer and narrower than square. Suits round faces and frames glasses wearers." },
            { name: "Oversized", description: "Bold coverage with a fashion edge. Confident, statement territory." },
          ]}
        />
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Guides"
            title="Face shape guides"
            description="The guide that settles it, once you know your shape."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {faceShapeArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
          <ArticleCard article={getLatestArticles(1)[0]} />
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="UV Protection"
            title="Protection first"
            description="Dark lenses are not automatically safe lenses. Know what UV400 means."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {styleArticles.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Latest"
            title="Latest sunglasses articles"
            link={{ href: "/guides?filter=Sunglasses", text: "All sunglasses guides" }}
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {getLatestArticles(3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CategoryLinks current="sunglasses" />

      <JsonLd
        data={itemListSchema(
          sunArticles.map((article) => ({
            name: article.title,
            url: `/guides/${article.slug}`,
          }))
        )}
      />
    </>
  );
}