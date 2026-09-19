import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/categories";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the SWAG.bd editorial and custom merchandise team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <section className="container-site py-12 sm:py-16">
        <p className="label-editorial-accent mb-4">Contact</p>
        <h1 className="max-w-2xl font-display text-display-md font-extrabold text-ink">
          Talk to the team.
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <ContactCard
            title="Editorial"
            description="Story pitches, corrections and feedback on guides."
            href="mailto:editorial@swag.bd"
            label="editorial@swag.bd"
          />
          <ContactCard
            title="SWAG.bd Custom"
            description="Quotes for custom merchandise, teams and events."
            href="mailto:custom@swag.bd"
            label="custom@swag.bd"
          />
          <ContactCard
            title="Partnerships"
            description="Brands, retailers and creators who want to work together."
            href="mailto:partners@swag.bd"
            label="partners@swag.bd"
          />
        </div>
        <div className="mt-16 border-t border-line pt-8">
          <p className="label-editorial mb-4">Social</p>
          <div className="flex flex-wrap gap-6 text-[13px] font-semibold uppercase tracking-label text-ink">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">Facebook</a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">X</a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">YouTube</a>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ title, description, href, label }: { title: string; description: string; href: string; label: string }) {
  return (
    <div className="border border-line p-6 sm:p-8">
      <h2 className="font-display text-[18px] font-semibold text-ink">{title}</h2>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{description}</p>
      <a href={href} className="link-underline mt-5 inline-block text-[14px] font-medium text-clay">
        {label}
      </a>
    </div>
  );
}