import type { CatalogProduct } from "@/data/types";
import { customProductDetails } from "@/data/custom";
import { articles } from "@/data/articles";
import { customProducts } from "@/data/products";
import { productImage, productDetailImages } from "@/data/images";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GetQuoteCta } from "@/components/quote/GetQuoteCta";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";

const STEPS = [
  { number: "01", title: "Tell us what you need", description: "Share your product, quantity and requirements in the quote form." },
  { number: "02", title: "Receive your quotation", description: "We reply on WhatsApp with a clear quotation, usually within a working day." },
  { number: "03", title: "Approve the design", description: "You approve a digital preview before anything is produced." },
  { number: "04", title: "We produce it", description: "Fashion-grade fabric, quality checked line by line." },
  { number: "05", title: "Receive your merchandise", description: "Delivered across Bangladesh, ready to wear or gift." },
];

type Props = {
  product: CatalogProduct;
};

export function CustomProductLayout({ product }: Props) {
  const detail = customProductDetails[product.slug];
  if (!detail) return null;

  const detailImages = productDetailImages(product);

  const faqData = detail.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  }));

  const relatedGuides = articles
    .filter((article) => article.categorySlug === "style")
    .slice(0, 3);

  const otherProducts = customProducts
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const aMatch = a.subcategory === product.subcategory ? 0 : 1;
      const bMatch = b.subcategory === product.subcategory ? 0 : 1;
      return aMatch - bMatch;
    });

  return (
    <>
      <JsonLd data={serviceSchema(product)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData,
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "SWAG.bd Custom", href: "/custom" },
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
              caption="Custom"
              className="lg:hidden"
            />
            <ImagePlaceholder
              image={productImage(product)}
              aspect="auto"
              label={product.label}
              caption="Custom"
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

            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-line py-4">
              {product.startingPrice ? (
                <p>
                  <span className="block text-[11px] font-semibold uppercase tracking-label text-mist">
                    Starting from
                  </span>
                  <span className="font-display text-[20px] font-bold text-ink">
                    {product.startingPrice}
                  </span>
                </p>
              ) : null}
              {product.minimumQuantity ? (
                <p>
                  <span className="block text-[11px] font-semibold uppercase tracking-label text-mist">
                    Minimum order
                  </span>
                  <span className="font-display text-[20px] font-bold text-ink">
                    {product.minimumQuantity} piece{product.minimumQuantity > 1 ? "s" : ""}
                  </span>
                </p>
              ) : null}
              <p>
                <span className="block text-[11px] font-semibold uppercase tracking-label text-mist">
                  Quote
                </span>
                <span className="font-display text-[20px] font-bold text-ink">Custom</span>
              </p>
            </div>

            {product.materials?.length || product.printingMethods?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.printingMethods?.map((method) => (
                  <span key={method} className="border border-line bg-paper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-label text-ink-soft">
                    {method}
                  </span>
                ))}
                {product.materials?.map((material) => (
                  <span key={material} className="border border-line bg-paper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-label text-mist">
                    {material}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-8">
              <GetQuoteCta product={product.name} />
            </div>
            <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-mist">
              Pricing depends on quantity, fabric, printing method and customization. Send a
              request and we will confirm details on WhatsApp.
            </p>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial-accent mb-4">Choose Your Style</p>
            <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
              Pick a starting point
            </h2>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {detail.styles.map((style, index) => (
                <div key={style.name} className="bg-paper p-6 sm:p-8">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[18px] font-semibold text-ink">{style.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {detailImages.length > 1 ? (
          <section className="border-t border-line py-16 sm:py-20">
            <div className="container-site">
              <p className="label-editorial-accent mb-4">In the studio</p>
              <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
                Material, method, finish
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {detailImages.map((asset) => (
                  <ImagePlaceholder
                    key={asset.src}
                    image={asset}
                    aspect="4 / 5"
                    label={product.label}
                    className="transition-opacity duration-500 hover:opacity-90"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="label-editorial-accent mb-4">What you can customize</p>
              <h2 className="mb-8 font-display text-heading font-semibold text-ink">
                Every detail is yours
              </h2>
              <ul className="divide-y divide-line border-y border-line">
                {(product.customizationOptions ?? []).map((option) => (
                  <li key={option} className="flex items-center justify-between py-3.5">
                    <span className="text-[15px] font-medium text-ink">{option}</span>
                    <span aria-hidden className="text-clay">&rarr;</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-editorial-accent mb-4">Perfect for</p>
              <h2 className="mb-8 font-display text-heading font-semibold text-ink">
                Built for your people
              </h2>
              <ul className="flex flex-wrap gap-2">
                {(product.idealFor ?? []).map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-paper px-4 py-2 text-[13px] font-medium text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {product.useCases?.length ? (
          <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
            <div className="container-site">
              <p className="label-editorial-accent mb-4">Popular Use Cases</p>
              <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
                Made for how it gets used
              </h2>
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {product.useCases.map((useCase, index) => (
                  <div key={useCase} className="bg-paper p-6 sm:p-8">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-[17px] font-semibold text-ink">{useCase}</h3>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <GetQuoteCta product={product.name} size="md" />
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial-accent mb-4">Available options</p>
            <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
              Fabric, fit and finish
            </h2>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {detail.options.map((block) => (
                <div key={block.label} className="bg-paper p-6 sm:p-8">
                  <h3 className="label-editorial mb-4">{block.label}</h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[13px] leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-clay" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial-accent mb-4">How It Works</p>
            <h2 className="mb-10 font-display text-display-md font-extrabold text-ink">
              From idea to order, cleanly
            </h2>
            <ol className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((step) => (
                <li key={step.number} className="bg-paper p-6 sm:p-7">
                  <p className="font-display text-[13px] font-bold text-clay">{step.number}</p>
                  <h3 className="mt-3 font-display text-[16px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label-editorial-accent mb-4">Questions</p>
              <h2 className="font-display text-heading font-semibold text-ink">
                Asked before you order
              </h2>
              <div className="mt-6">
                <GetQuoteCta product={product.name} size="md" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-line border-y border-line">
                {detail.faqs.map((faq) => (
                  <li key={faq.q} className="py-5">
                    <h3 className="font-display text-[17px] font-semibold text-ink">{faq.q}</h3>
                    <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-muted">{faq.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial mb-8">Related guides</p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((guide) => (
                <ArticleCard key={guide.slug} article={guide} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-site">
            <p className="label-editorial mb-8">More to customize</p>
            <ProductGrid products={otherProducts} columns={3} />
          </div>
        </section>
      </article>
    </>
  );
}