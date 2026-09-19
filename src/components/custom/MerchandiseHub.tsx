import type { ImageAsset } from "@/data/images";
import type { CatalogProduct } from "@/data/types";
import { customProducts } from "@/data/products";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GetQuoteCta } from "@/components/quote/GetQuoteCta";
import { WhatsAppLink } from "@/components/quote/WhatsAppLink";
import { ProductGrid } from "@/components/products/ProductGrid";
import { JsonLd } from "@/components/seo/JsonLd";

export type ProductGroup = {
  title: string;
  description?: string;
  productSlugs: string[];
};

export type HubSection = {
  title: string;
  body: string;
};

type Props = {
  breadcrumbs: { name: string; href: string }[];
  label: string;
  heading: string;
  copy: string;
  image: ImageAsset;
  groups: ProductGroup[];
  sections: HubSection[];
  useCases: string[];
  crossLinks: { name: string; href: string; description: string }[];
  guides: { slug: string; title: string }[];
  ctaProduct?: string;
};

function resolveProducts(slugs: string[]): CatalogProduct[] {
  return slugs
    .map((slug) => customProducts.find((p) => p.slug === slug))
    .filter(Boolean) as CatalogProduct[];
}

export function MerchandiseHub({
  breadcrumbs,
  label,
  heading,
  copy,
  image,
  groups,
  sections,
  useCases,
  crossLinks,
  guides,
  ctaProduct,
}: Props) {
  const allSlugs = groups.flatMap((group) => group.productSlugs);
  const allProducts = resolveProducts([...new Set(allSlugs)]);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: allProducts.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: `https://swag.bd${product.href}`,
          })),
        }}
      />

      <section className="container-site grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="label-editorial-accent mb-5">{label}</p>
          <h1 className="font-display text-display-lg font-extrabold text-ink">{heading}</h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">{copy}</p>
          <div className="mt-9">
            <GetQuoteCta product={ctaProduct} />
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-7">
          <ImagePlaceholder image={image} aspect="3 / 4" label={label} caption="Custom" className="lg:hidden" />
          <ImagePlaceholder image={image} aspect="auto" label={label} caption="Custom" className="hidden lg:block lg:h-[520px]" />
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-site">
          <p className="label-editorial-accent mb-4">The Range</p>
          <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
            What this covers
          </h2>
          <div className="space-y-16">
            {groups.map((group) => {
              const products = resolveProducts(group.productSlugs);
              if (products.length === 0) return null;
              return (
                <div key={group.title}>
                  <p className="label-editorial mb-6">
                    {group.title}
                    {group.description ? <span className="ml-3 normal-case tracking-normal text-ink-muted">{group.description}</span> : null}
                  </p>
                  <ProductGrid products={products} columns={4} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {sections.length > 0 ? (
        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-heading font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {useCases.length > 0 ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial-accent mb-4">Who it is for</p>
            <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
              Built for real situations
            </h2>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div key={useCase} className="bg-paper p-6 sm:p-8">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[17px] font-semibold text-ink">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {crossLinks.length > 0 ? (
        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial mb-8">Related services</p>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {crossLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-paper p-6 transition-colors duration-300 hover:bg-paper sm:p-7"
                >
                  <h3 className="font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
                    {link.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {guides.length > 0 ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial mb-8">Related guides</p>
            <ul className="divide-y divide-line border-y border-line">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <a
                    href={`/guides/${guide.slug}`}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span className="font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
                      {guide.title}
                    </span>
                    <span className="shrink-0 text-[11px] uppercase tracking-label text-stone">Read</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line bg-ink py-16 text-paper sm:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="label-editorial mb-3 !text-stone">Get started</p>
            <h2 className="max-w-xl font-display text-heading font-semibold text-white">
              Tell us what you need, and we will quote it.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <GetQuoteCta product={ctaProduct} onDark />
            <WhatsAppLink product={ctaProduct} label="Chat on WhatsApp" className="text-paper" />
          </div>
        </div>
      </section>
    </>
  );
}