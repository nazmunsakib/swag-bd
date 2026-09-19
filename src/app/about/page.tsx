import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GetQuoteCta } from "@/components/quote/GetQuoteCta";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "SWAG.bd is Bangladesh's style and lifestyle platform and custom printing and merchandise studio. Fashion and style content, plus custom T-shirts, hoodies, drinkware, bags and promotional products.",
  alternates: { canonical: "/about" },
  ...ogMeta({
    title: "About | SWAG.bd",
    description: "Bangladesh's style and lifestyle platform and custom merchandise studio.",
    path: "/about",
    image: imageFor("hero-merch")!,
  }),
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="container-site grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="label-editorial-accent mb-5">About</p>
          <h1 className="font-display text-display-lg font-extrabold text-ink">
            Bangladesh's style and lifestyle platform.
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">
            SWAG.bd is two things under one name: an editorial platform for men's fashion,
            watches, sunglasses, streetwear and accessories, and a custom printing and
            merchandise studio for apparel, drinkware, bags, accessories and stationery.
          </p>
          <div className="mt-9">
            <GetQuoteCta product="Custom Merchandise" />
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-7">
          <ImagePlaceholder image={imageFor("hero-merch")} aspect="3 / 4" label="ABOUT SWAG.BD" caption="Style, accessories, culture" className="lg:hidden" />
          <ImagePlaceholder image={imageFor("hero-merch")} aspect="auto" label="ABOUT SWAG.BD" caption="Style, accessories, culture" className="hidden lg:block lg:h-[520px]" />
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <AboutBlock
            title="The editorial side"
            body="Practical, specific style content for how men in Bangladesh actually dress. Guides on watches, sunglasses, streetwear, accessories, outfit ideas and building a wardrobe that survives the local climate."
          />
          <AboutBlock
            title="The studio side"
            body="SWAG.bd Custom produces printed and personalised merchandise: T-shirts, hoodies, polos, jerseys, caps, mugs, water bottles, tumblers, bags, keychains, lanyards, badges, stationery and more, for teams, events, universities and businesses."
          />
          <AboutBlock
            title="How we work"
            body="No checkout, no pressure. You discover a product, learn about it, request a quote, and continue the conversation on WhatsApp. Every order starts with a clear quotation and a design preview you approve."
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
        <div className="container-site">
          <p className="label-editorial mb-8">Explore</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/style", label: "Style" },
              { href: "/watches", label: "Watches" },
              { href: "/sunglasses", label: "Sunglasses" },
              { href: "/streetwear", label: "Streetwear" },
              { href: "/accessories", label: "Accessories" },
              { href: "/custom/merchandise", label: "Custom Merchandise" },
              { href: "/custom/printing", label: "Custom Printing" },
              { href: "/custom/corporate-merchandise", label: "Corporate Merchandise" },
              { href: "/custom/event-merchandise", label: "Event Merchandise" },
              { href: "/custom/university-merchandise", label: "University Merchandise" },
              { href: "/guides", label: "Style Guides" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group border border-line bg-paper p-5 transition-colors hover:bg-paper"
              >
                <span className="font-display text-[16px] font-semibold text-ink transition-colors group-hover:text-clay">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-heading font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{body}</p>
    </div>
  );
}