import type { Metadata } from "next";
import { CategoryHero } from "@/components/editorial/CategoryHero";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { TraitGrid } from "@/components/editorial/TraitGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLatestArticles } from "@/data/articles";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trends",
  description:
    "Seasonal fashion trends, what is selling in Dhaka and how global style is landing in Bangladesh. Current and next season coverage.",
  alternates: { canonical: "/trends" },
  ...ogMeta({
    title: "Trends | SWAG.bd",
    description: "Seasonal fashion trends and what is moving in Dhaka and Bangladesh.",
    path: "/trends",
    image: imageFor("street-urban")!,
  }),
};

export default function TrendsPage() {
  const latest = getLatestArticles(3);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Trends", href: "/trends" },
        ]}
      />

      <CategoryHero
        label="Trends / 2026"
        heading="What's moving now."
        copy="Seasonal trends, what is selling in Dhaka and how global fashion is landing locally. Reported, not invented."
        imageLabel="TRENDS"
        image={imageFor("street-urban")}
        primaryCta={{ href: "/guides/fashion-trends-2026-dhaka", text: "Read the 2026 report" }}
        secondaryCta={{ href: "/guides", text: "All guides" }}
      />

      <section className="border-t border-line py-16 sm:py-24">
        <TraitGrid
          label="Right Now"
          title="The signals we are watching"
          traits={[
            { name: "Quiet pieces, loud details", description: "Clean silhouettes with one deliberate detail, from a clay accent to a good strap." },
            { name: "Oversized, balanced", description: "One oversized piece per outfit, never stacked. Proportion is the discipline." },
            { name: "The wrist is back", description: "Everyday watches read as a finishing touch, not a status symbol." },
            { name: "Local over imported", description: "Homegrown Dhaka labels winning on cut, fabric and price." },
            { name: "Seasonal dressing", description: "Light cotton in summer, smart layering in the short winter." },
            { name: "Heavyweight basics", description: "Fabric weight replacing prints as the marker of quality." },
          ]}
        />
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Latest"
            title="Latest trends coverage"
            description="Fresh reporting on what is moving in Bangladesh."
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}