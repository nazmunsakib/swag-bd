"use client";

import { useMemo, useState } from "react";
import type { CatalogProduct } from "@/data/types";
import { ProductCard } from "@/components/products/ProductCard";

type Props = {
  products: CatalogProduct[];
  initialFilter: string;
};

const FILTERS = [
  "All",
  "Custom",
  "Watches",
  "Sunglasses",
  "Wristbands",
  "Bracelets",
  "Bags",
  "Wallets",
  "Keychains",
];

export function DiscoverGrid({ products, initialFilter }: Props) {
  const [filter, setFilter] = useState(initialFilter);

  const visible = useMemo(() => {
    if (filter === "All") return products;
    if (filter === "Custom") return products.filter((p) => p.category.startsWith("Custom"));
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  return (
    <div>
      <div className="container-site">
        <div className="flex flex-wrap gap-1 border-y border-line py-4" role="tablist" aria-label="Catalog filters">
          {FILTERS.map((item) => (
            <button
              key={item}
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={`px-3 py-1.5 text-[12px] font-semibold uppercase tracking-label transition-colors ${
                filter === item
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:bg-paper-deep hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="container-site py-14 sm:py-16">
        <p className="label-editorial mb-8">
          {filter === "All" ? `${visible.length} items` : filter}
        </p>
        {visible.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-lg font-medium text-ink">Nothing here yet.</p>
            <p className="mt-2 text-sm text-ink-muted">This category is being built out. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}