import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogProducts, getCatalogProduct, getCatalogByCategory } from "@/data/products";
import { siteConfig } from "@/data/categories";
import { getLatestArticles, getArticlesByCategory } from "@/data/articles";
import { productImage } from "@/data/images";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GetQuoteCta } from "@/components/quote/GetQuoteCta";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { ProductGrid } from "@/components/products/ProductGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { catalogProductSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getCatalogProduct(slug);
  if (!product) return {};

  const image = productImage(product);
  const url = `${siteConfig.url}${product.href}`;
  const title = `${product.name} | SWAG.bd`;

  return {
    title,
    description: product.shortDescription,
    alternates: { canonical: product.href },
    openGraph: {
      type: "website",
      title,
      description: product.shortDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: image.src, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.shortDescription,
      images: [image.src],
    },
  };
}

function relatedArticlesFor(product: { category: string }) {
  const mapping: Record<string, string> = {
    Watches: "watches",
    Sunglasses: "sunglasses",
    Wristbands: "accessories",
    Bracelets: "accessories",
    Bags: "accessories",
    Wallets: "accessories",
    Keychains: "accessories",
  };
  const categorySlug = mapping[product.category];
  if (!categorySlug) return getLatestArticles(3);
  return getArticlesByCategory(categorySlug).slice(0, 3);
}

export default async function CatalogProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getCatalogProduct(slug);
  if (!product) notFound();

  const relatedProducts = getCatalogByCategory(product.category).filter(
    (p) => p.slug !== product.slug
  );
  const relatedArticles = relatedArticlesFor(product);

  return (
    <>
      <JsonLd data={catalogProductSchema(product)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Discover", href: "/discover" },
          { name: product.name, href: product.href },
        ]}
      />

      <article>
        <section className="container-site grid grid-cols-1 gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <ImagePlaceholder
              image={productImage(product)}
              aspect="4 / 5"
              label={product.label}
              caption="Request details"
              className="lg:hidden"
            />
            <ImagePlaceholder
              image={productImage(product)}
              aspect="auto"
              label={product.label}
              caption="Request details"
              className="hidden lg:block lg:h-[620px]"
            />
          </div>
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="label-editorial-accent mb-4">{product.category}</p>
            <h1 className="font-display text-display-md font-extrabold text-ink">
              {product.name}
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="label-editorial mb-4">Key details</p>
              <ul className="space-y-2.5">
                {product.features.map((featureItem) => (
                  <li key={featureItem} className="flex items-start gap-3 text-[14px] text-ink-soft">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9">
              <GetQuoteCta product={product.name} />
            </div>
            <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-mist">
              Pricing depends on availability and your requirements. Send a request and we
              will confirm details on WhatsApp.
            </p>
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
            <div className="container-site">
              <p className="label-editorial mb-8">More in {product.category}</p>
              <ProductGrid products={relatedProducts} columns={3} />
            </div>
          </section>
        ) : null}

        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  );
}