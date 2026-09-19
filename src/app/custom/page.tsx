import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CustomQuoteForm } from "@/components/custom/CustomQuoteForm";
import { GetQuoteCta } from "@/components/quote/GetQuoteCta";
import { WhatsAppLink } from "@/components/quote/WhatsAppLink";
import { customProducts } from "@/data/products";
import { imageFor, productImage } from "@/data/images";
import { ogMeta } from "@/lib/seo";
import { ArrowRightIcon } from "@/components/ui/Icons";

// SWAG.bd Custom is structured for a future product builder flow:
// Product → Customization → Preview → WhatsApp → Quotation.
// The quote form and WhatsApp channel are the current conversion path.

export const metadata: Metadata = {
  title: "Custom Printing & Merchandise in Bangladesh",
  description:
    "Custom printing and personalized merchandise in Bangladesh. T-shirts, hoodies, polos, jerseys, caps, mugs, water bottles, tumblers, bags, keychains, lanyards, badges, stationery and promotional products for teams, events, universities and businesses.",
  alternates: { canonical: "/custom" },
  ...ogMeta({
    title: "Custom Printing & Merchandise in Bangladesh | SWAG.bd",
    description: "Custom printing and personalized merchandise in Bangladesh, from apparel to drinkware, accessories and stationery.",
    path: "/custom",
    image: imageFor("merch-hero")!,
  }),
};

const taxonomyGroups = [
  {
    name: "Apparel",
    title: "Custom Apparel",
    description: "T-shirts, hoodies, polos, jerseys, jackets and aprons.",
    productSlugs: ["t-shirts", "hoodies", "polo-shirts", "jerseys", "jackets", "aprons", "caps"],
  },
  {
    name: "Drinkware",
    title: "Custom Drinkware",
    description: "Mugs, water bottles and tumblers.",
    productSlugs: ["mugs", "water-bottles", "tumblers"],
  },
  {
    name: "Bags",
    title: "Custom Bags",
    description: "Totes and canvas carry pieces.",
    productSlugs: ["bags"],
  },
  {
    name: "Accessories",
    title: "Custom Accessories",
    description: "Keychains, wristbands, lanyards, badges, phone cases, stickers, wallets, lockets and rings.",
    productSlugs: ["keychains", "wristbands", "lanyards", "badges", "phone-cases", "stickers", "leather-wallets", "lockets", "rings"],
  },
  {
    name: "Stationery",
    title: "Custom Stationery",
    description: "Notebooks, diaries and pens.",
    productSlugs: ["stationery"],
  },
  {
    name: "Design",
    title: "Custom Design",
    description: "Logo, artwork and design for your merchandise.",
    productSlugs: ["custom-design"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Pick a product and share your requirements in the quote form.",
  },
  {
    number: "02",
    title: "Receive your quotation",
    description: "We reply on WhatsApp with a clear quotation, usually within a working day.",
  },
  {
    number: "03",
    title: "Approve the design",
    description: "You approve a digital preview before anything is produced.",
  },
  {
    number: "04",
    title: "We produce it",
    description: "Fashion-grade fabric, quality checked line by line.",
  },
  {
    number: "05",
    title: "Receive your merchandise",
    description: "Delivered across Bangladesh, ready to wear or gift.",
  },
];

export default function CustomPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "SWAG.bd Custom", href: "/custom" },
        ]}
      />

      <section className="container-site grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="label-editorial-accent mb-5">SWAG.bd Custom</p>
          <h1 className="font-display text-display-lg font-extrabold text-ink">Make it yours.</h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">
            Custom T-shirts, hoodies, caps, mugs, bags and merchandise for yourself, your
            team, your event or your brand. Fashion-grade fabric, printed and delivered in
            Bangladesh.
          </p>
          <div className="mt-9">
            <GetQuoteCta />
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-7">
          <ImagePlaceholder
            image={imageFor("merch-hero")}
            aspect="3 / 4"
            label="SWAG.BD CUSTOM"
            caption="Made in Bangladesh"
            className="lg:hidden"
          />
          <ImagePlaceholder
            image={imageFor("merch-hero")}
            aspect="auto"
            label="SWAG.BD CUSTOM"
            caption="Made in Bangladesh"
            className="hidden lg:block lg:h-[520px]"
          />
        </div>
      </section>

      <section id="services" className="border-t border-line py-16 sm:py-20">
        <div className="container-site">
          <p className="label-editorial-accent mb-3">Start Here</p>
          <h2 className="mb-10 max-w-xl font-display text-display-md font-extrabold text-ink">
            Custom printing and merchandise in Bangladesh
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Custom Merchandise", href: "/custom/merchandise", description: "The full product range, from apparel to stationery." },
              { name: "Custom Printing", href: "/custom/printing", description: "The printing methods behind every product." },
              { name: "Corporate Merchandise", href: "/custom/corporate-merchandise", description: "Uniforms, desk kits and corporate gifts." },
              { name: "Event Merchandise", href: "/custom/event-merchandise", description: "Tees, bottles, wristbands and badges for events." },
              { name: "University Merchandise", href: "/custom/university-merchandise", description: "Batch shirts, club hoodies and campus kits." },
              { name: "Get a Quote", href: "/quote", description: "Request a quotation for any product or run." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between bg-paper p-6 transition-colors duration-300 hover:bg-paper-deep sm:p-7"
              >
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-ink transition-colors group-hover:text-clay">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{item.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-label text-ink transition-colors group-hover:text-clay">
                  Explore
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-line py-16 sm:py-24">
        <div className="container-site space-y-20">
          {taxonomyGroups.map((group) => (
            <div key={group.name}>
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="label-editorial-accent mb-2">{group.name}</p>
                  <h2 className="font-display text-[26px] font-semibold text-ink">
                    {group.title}
                  </h2>
                </div>
                <p className="max-w-xs text-[13px] leading-relaxed text-ink-muted sm:text-right">
                  {group.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.productSlugs.map((slug) => {
                  const product = customProducts.find((p) => p.slug === slug);
                  if (!product) return null;
                  return (
                    <Link
                      key={product.slug}
                      href={product.href}
                      className="group flex flex-col"
                    >
                      <ImagePlaceholder
                        image={productImage(product)}
                        aspect="4 / 5"
                        label={product.label}
                        className="transition-opacity duration-500 group-hover:opacity-90"
                      />
                      <div className="mt-4 flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
                          {product.name}
                        </h3>
                        {product.startingPrice ? (
                          <span className="shrink-0 text-[12px] font-medium text-mist">
                            From {product.startingPrice}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-ink-muted">
                        {product.shortDescription}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-label text-ink transition-colors group-hover:text-clay">
                        View details
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="border-t border-line bg-paper-deep py-16 sm:py-24">
        <div className="container-site">
          <div className="mb-12">
            <p className="label-editorial-accent mb-3">The Process</p>
            <h2 className="font-display text-display-md font-extrabold text-ink">
              From idea to order, cleanly
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.number} className="bg-paper p-7 sm:p-8">
                <p className="font-display text-[13px] font-bold text-clay">{step.number}</p>
                <h3 className="mt-3 font-display text-[18px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="quote" className="border-t border-line py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-editorial-accent mb-3">Get a Quote</p>
            <h2 className="font-display text-heading font-semibold text-ink">
              Tell us what you need
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
              Tell us the product, quantity and deadline. The team replies on WhatsApp
              within two working days with a clear quote. No pressure, no obligation.
            </p>
            <div className="mt-6">
              <WhatsAppLink label="Chat on WhatsApp" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <CustomQuoteForm />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-16 text-paper sm:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="label-editorial mb-3 !text-stone">Built for teams and creators</p>
            <h2 className="max-w-xl font-display text-heading font-semibold text-white">
              Your mark, on fashion-grade products.
            </h2>
          </div>
          <GetQuoteCta onDark />
        </div>
      </section>
    </>
  );
}