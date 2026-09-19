import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = {
  name: string;
  href: string;
};

type Props = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="container-site">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-2 py-5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-stone">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className="text-[12px] font-medium uppercase tracking-label text-stone">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[12px] font-medium uppercase tracking-label text-ink-soft transition-colors hover:text-clay"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}