import type { ReactNode } from "react";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="container-site py-12 sm:py-16">
      <p className="label-editorial-accent mb-4">Updated {updated}</p>
      <h1 className="font-display text-display-md font-extrabold text-ink">{title}</h1>
      <div className="prose-article mt-10 max-w-measure">{children}</div>
    </section>
  );
}