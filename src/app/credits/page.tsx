import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { allPhotographers } from "@/data/images";
import { siteConfig } from "@/data/categories";

export const metadata: Metadata = {
  title: "Image Credits",
  description: "Photography credits for imagery used across SWAG.bd.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/credits" },
};

export default function CreditsPage() {
  const photographers = allPhotographers();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Image Credits", href: "/credits" },
        ]}
      />
      <section className="container-site py-12 sm:py-16">
        <p className="label-editorial-accent mb-4">Credits</p>
        <h1 className="font-display text-display-md font-extrabold text-ink">Image Credits</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
          Photography used across SWAG.bd is sourced from Unsplash and remains under the
          Unsplash License, which allows free commercial and non-commercial use. We credit
          the photographers here.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {photographers.map(({ photographer, count }) => (
            <div key={photographer} className="flex items-center justify-between bg-paper p-5">
              <span className="text-[14px] font-medium text-ink">{photographer}</span>
              <span className="text-[12px] uppercase tracking-label text-stone">
                {count} photo{count > 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-mist">
          If you are a photographer credited here and would prefer your work be removed or
          credited differently, contact us at {siteConfig.name}.
        </p>
      </section>
    </>
  );
}