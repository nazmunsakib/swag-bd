import type { Metadata } from "next";
import { CategoryHero } from "@/components/editorial/CategoryHero";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { StoryCard } from "@/components/editorial/StoryCard";
import { FeatureStory } from "@/components/editorial/FeatureStory";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CategoryLinks } from "@/components/editorial/CategoryLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";
import { getArticlesByCategory, getLatestArticles, getArticle } from "@/data/articles";

export const metadata: Metadata = {
  title: "Style",
  description:
    "Men's fashion, outfit ideas and how to build a wardrobe that works in Bangladesh. Practical style advice from the SWAG.bd editorial team.",
  alternates: { canonical: "/style" },
  ...ogMeta({
    title: "Style | SWAG.bd",
    description: "Men's fashion, outfit ideas and wardrobe building for Bangladesh.",
    path: "/style",
    image: imageFor("hero2")!,
  }),
};

export default function StylePage() {
  const styleArticles = getArticlesByCategory("style");
  const feature = getArticle("how-to-build-a-minimal-wardrobe")!;
  const supporting = [
    getArticle("capsule-wardrobe-for-bangladesh-summer")!,
    getArticle("essential-accessories-every-man-should-own")!,
  ];

  const outfitArticles = styleArticles.filter((article) =>
    ["how-to-build-a-minimal-wardrobe", "capsule-wardrobe-for-bangladesh-summer"].includes(article.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Style", href: "/style" },
        ]}
      />

      <CategoryHero
        label="Style / 2026"
        heading="Dress like it matters."
        copy="Men's fashion for the way you actually live: fit, colour, fabric and the wardrobe-building skills that survive a Bangladesh summer."
        imageLabel="STYLE / 2026"
        image={imageFor("hero2")}
        primaryCta={{ href: "/guides/how-to-build-a-minimal-wardrobe", text: "Read the wardrobe guide" }}
        secondaryCta={{ href: "/guides", text: "All style guides" }}
      />

      <section className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <FeatureStory
          label="Style Edit"
          title="How to build a better everyday wardrobe"
          feature={feature}
          supporting={supporting}
        />
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="The Edit"
            title="From the style desk"
            description="What the team is reading this month."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {getLatestArticles(3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="label-editorial-accent mb-3">Made for Bangladesh</p>
            <h2 className="font-display text-heading font-semibold text-ink">
              Style for the local season
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Summer heat, monsoon rain and Eid, weddings and campus life. Wardrobe advice
              built around the year we actually live in.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2">
            {outfitArticles.map((article) => (
              <StoryCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Guides"
            title="Style guides"
            link={{ href: "/guides", text: "All guides" }}
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {styleArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CategoryLinks current="style" />

      <JsonLd
        data={itemListSchema(
          styleArticles.map((article) => ({
            name: article.title,
            url: `/guides/${article.slug}`,
          }))
        )}
      />
    </>
  );
}