import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { customProducts, catalogProducts } from "@/data/products";
import { businessContact, whatsappLink } from "@/data/business";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quotation for custom T-shirts, hoodies, caps, mugs, bags and merchandise in Bangladesh. Share your requirements and we reply on WhatsApp.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/quote" },
};

type Props = {
  searchParams: Promise<{ product?: string }>;
};

const steps = [
  { number: "01", title: "Tell us what you need", description: "Fill in the form. It takes two minutes." },
  { number: "02", title: "Receive your quotation", description: "We reply on WhatsApp, usually within a working day." },
  { number: "03", title: "Approve the design", description: "You approve a digital preview before production." },
  { number: "04", title: "Production and delivery", description: "We produce, quality check and deliver across Bangladesh." },
];

export default async function QuotePage({ searchParams }: Props) {
  const { product } = await searchParams;
  const options = [...customProducts, ...catalogProducts].map((p) => p.name);
  const initial = product && options.includes(product) ? product : "";

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Get a Quote", href: "/quote" },
        ]}
      />

      <section className="container-site grid grid-cols-1 gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="label-editorial-accent mb-5">Quotation</p>
          <h1 className="font-display text-display-md font-extrabold text-ink">
            Get a Quote
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Tell us what you need and we will send a clear quotation. No payment, no
            commitment, no pressure. The conversation happens on WhatsApp because that is
            how everyone actually talks in Bangladesh.
          </p>

          <div className="mt-10 border-t border-line pt-8">
            <p className="label-editorial mb-6">What happens next</p>
            <ol className="space-y-6">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="font-display text-[14px] font-bold text-clay">{step.number}</span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 border border-line bg-paper-deep p-5">
            <p className="label-editorial mb-2">Prefer to chat directly?</p>
            <p className="text-[14px] text-ink-muted">
              Message us on WhatsApp at{" "}
              <a
                href={whatsappLink(businessContact.defaultMessage)}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-ink transition-colors hover:text-clay"
              >
                {businessContact.whatsappDisplay}
              </a>{" "}
              <span className="text-mist">({businessContact.whatsappName})</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm productOptions={options} initialProduct={initial} />
        </div>
      </section>
    </>
  );
}