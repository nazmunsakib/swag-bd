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
  title: "Watches",
  description:
    "Watch guides, buying advice, sizing, styling and comparisons. Everything about choosing the right watch in Bangladesh, from everyday quartz to automatic.",
  alternates: { canonical: "/watches" },
  ...ogMeta({
    title: "Watches | SWAG.bd",
    description: "Watch guides, buying advice, sizing, styling and comparisons for every budget in Bangladesh.",
    path: "/watches",
    image: imageFor("watch-wrist")!,
  }),
};

export default function WatchesPage() {
  const watchArticles = getArticlesByCategory("watches");
  const watchProducts = getCatalogByCategory("Watches");

  const featuredProductSlugs = [
    "minimal-field-watch-36",
    "automatic-watch-40",
    "chronograph-steel",
    "minimal-quartz-watch",
  ];
  const featuredProducts = featuredProductSlugs
    .map((slug) => watchProducts.find((p) => p.slug === slug))
    .filter(Boolean);

  const guideArticles = watchArticles.filter((article) =>
    ["watch-size-guide", "watches-under-10000-taka", "watch-types-quartz-vs-automatic"].includes(article.slug)
  );
  const stylingArticles = watchArticles.filter((article) =>
    ["how-to-match-a-watch-with-your-outfit", "how-to-care-for-your-watches", "how-to-choose-the-right-watch"].includes(article.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Watches", href: "/watches" },
        ]}
      />

      <CategoryHero
        label="Watches"
        heading="Watches for every style"
        copy="From your first everyday quartz to a serious automatic, we cover sizing, styling, movement types and what to buy at every budget in Bangladesh."
        imageLabel="WATCHES"
        image={imageFor("watch-wrist")}
        primaryCta={{ href: "/guides/how-to-choose-the-right-watch", text: "Start with the guide" }}
        secondaryCta={{ href: "/guides?filter=Watches", text: "All watch guides" }}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Featured"
            title="Featured watches"
            description="A starter selection from our catalog."
            link={{ href: "/discover?filter=Watches", text: "Browse watches" }}
          />
        </div>
        <div className="container-site">
          <ProductGrid products={featuredProducts as typeof watchProducts} />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <TraitGrid
          label="Watch Types"
          title="Know the categories"
          traits={[
            { name: "Casual", description: "Steel bracelets and versatile dials that go anywhere. The everyday workhorse." },
            { name: "Formal", description: "Slim cases, leather straps and quiet dials that slide under a cuff." },
            { name: "Everyday", description: "The middle ground: durable, comfortable and readable in any light." },
            { name: "Sports", description: "Chronographs, dive bezels and higher water resistance for active wear." },
            { name: "Minimal", description: "No date, no clutter, just a clean dial and a precise movement." },
            { name: "Automatic", description: "Mechanical, self-winding and worth the care and the service bill." },
            { name: "Quartz", description: "Battery powered, accurate to the second and nearly maintenance free." },
          ]}
        />
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Watch Guides"
            title="Buying guides"
            description="Size, movement and budget, answered properly."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {guideArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Styling"
            title="Wear it well"
            description="The watch is part of the outfit. Make it work with it."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stylingArticles.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Latest"
            title="Latest watch articles"
            link={{ href: "/guides?filter=Watches", text: "All watch guides" }}
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {getLatestArticles(3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CategoryLinks current="watches" />

      <JsonLd
        data={itemListSchema(
          watchArticles.map((article) => ({
            name: article.title,
            url: `/guides/${article.slug}`,
          }))
        )}
      />
    </>
  );
}