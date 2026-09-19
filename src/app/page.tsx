import Link from "next/link";
import type { CatalogProduct } from "@/data/types";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { TrendingSection } from "@/components/editorial/TrendingSection";
import { FeatureStory } from "@/components/editorial/FeatureStory";
import { CategoryFeature } from "@/components/editorial/CategoryFeature";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterCta } from "@/components/NewsletterCta";
import { getArticle } from "@/data/articles";
import { customProducts } from "@/data/products";
import { GetQuoteCta } from "@/components/quote/GetQuoteCta";
import { WhatsAppLink } from "@/components/quote/WhatsAppLink";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { imageFor, productImage } from "@/data/images";

export default function HomePage() {
  const feature = getArticle("how-to-build-a-minimal-wardrobe")!;
  const supporting = [
    getArticle("essential-accessories-every-man-should-own")!,
    getArticle("how-to-match-a-watch-with-your-outfit")!,
  ];

  const styleGuides = [
    "how-to-choose-the-right-watch",
    "how-to-choose-sunglasses-for-your-face-shape",
    "oversized-vs-regular-fit-t-shirts",
    "how-to-build-a-minimal-wardrobe",
  ]
    .map(getArticle)
    .filter(Boolean);

  const editPicks = ["t-shirts", "hoodies", "caps", "water-bottles", "wristbands"]
    .map((slug) => customProducts.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      <EditorialHero />

      <section className="py-16 sm:py-24">
        <TrendingSection />
      </section>

      <section className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <FeatureStory
          label="Style Edit"
          title="How to build a better everyday wardrobe"
          feature={feature}
          supporting={supporting}
        />
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Categories"
            title="Start with a category"
            description="Watches, sunglasses, streetwear and accessories, each with guides, styling and buying advice built around it."
          />
        </div>
        <div className="container-site">
          <CategoryFeature />
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="Style Guides"
            title="Evergreen guides, written once, used for years"
            description="Practical, specific and built around how men in Bangladesh actually dress."
            link={{ href: "/guides", text: "All guides" }}
          />
        </div>
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {styleGuides.map((article) => (
            <ArticleCard key={article!.slug} article={article!} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink py-16 text-paper sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="The SWAG Edit"
            title="Made for your people"
            description="Custom merchandise and catalog pieces chosen by the editorial team. Every item leads to a conversation, not a checkout."
            link={{ href: "/discover", text: "Explore the edit" }}
            onDark
          />
        </div>
        <div className="container-site">
          <ProductGrid products={editPicks as typeof customProducts} onDark />
        </div>
      </section>

      <section className="container-site py-16 sm:py-24">
        <div className="relative overflow-hidden bg-ink">
          <ImagePlaceholder
            image={imageFor("merch-hero")}
            aspect="21 / 9"
            label="SWAG.BD CUSTOM"
            caption="Made in Bangladesh"
            className="opacity-90"
          />
          <div className="absolute inset-0 flex items-center p-6 sm:p-10">
            <div className="max-w-lg">
              <p className="label-editorial mb-3 !text-stone">SWAG.bd Custom</p>
              <h2 className="font-display text-[28px] font-bold leading-tight text-white sm:text-[34px]">
                Made for your people.
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                Custom merchandise for teams, brands, events, creators and communities.
                Request a quote, approve a preview, we produce it.
              </p>
              <div className="mt-6">
                <GetQuoteCta onDark />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            label="SWAG.bd Custom"
            title="Explore custom products"
            description="T-shirts, hoodies, caps, mugs, bags and full merchandise runs, each with its own page and its own quote path."
            link={{ href: "/custom", text: "Explore Custom" }}
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {editPicks.slice(0, 4).map((product) => (
              <EditItem key={product!.slug} product={product!} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <NewsletterCta />
      </section>
    </>
  );
}

function EditItem({ product }: { product: CatalogProduct }) {
  return (
    <article className="group">
      <Link href={product.href} aria-label={product.name} className="block">
        <ImagePlaceholder
          image={productImage(product)}
          aspect="4 / 5"
          label={product.label}
          className="transition-opacity duration-500 group-hover:opacity-90"
        />
      </Link>
      <h3 className="mt-4 font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
        <Link href={product.href}>{product.name}</Link>
      </h3>
      <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-ink-muted">
        {product.shortDescription}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[12px] font-semibold uppercase tracking-label text-ink transition-colors group-hover:text-clay">
          <Link href={product.href}>View details</Link>
        </span>
        <WhatsAppLink product={product.name} label="WhatsApp" className="text-[12px]" />
      </div>
    </article>
  );
}