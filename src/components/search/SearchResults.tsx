"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";
import { getAllProducts } from "@/data/products";
import { SearchIcon } from "@/components/ui/Icons";

function normalize(text: string) {
  return text.toLowerCase().trim();
}

export function SearchResults() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q")?.trim() ?? "");
  }, []);

  const { articleResults, productResults } = useMemo(() => {
    const normalizedQuery = normalize(query);

    return {
      articleResults: normalizedQuery
        ? articles.filter((article) =>
            normalize(
              `${article.title} ${article.excerpt} ${article.category} ${article.tags.join(" ")}`
            ).includes(normalizedQuery)
          )
        : [],
      productResults: normalizedQuery
        ? getAllProducts().filter((product) =>
            normalize(`${product.name} ${product.category} ${product.shortDescription}`).includes(
              normalizedQuery
            )
          )
        : [],
    };
  }, [query]);

  const total = articleResults.length + productResults.length;

  return (
    <>
      <section className="container-site py-12 sm:py-16">
        <p className="label-editorial-accent mb-5">
          <SearchIcon className="mr-1 inline h-3.5 w-3.5" aria-hidden />
          Search
        </p>
        <h1 className="font-display text-display-md font-extrabold text-ink">
          {query ? (
            <>
              Results for <span className="text-clay">&quot;{query}&quot;</span>
            </>
          ) : (
            "Search SWAG.bd"
          )}
        </h1>
        {query ? (
          <p className="mt-3 text-[15px] text-ink-muted">
            {total} result{total === 1 ? "" : "s"} across guides and products.
          </p>
        ) : (
          <p className="mt-3 max-w-md text-[15px] text-ink-muted">
            Search guides, trends, products, categories and brands in one place.
          </p>
        )}
      </section>

      {query ? (
        <div className="container-site space-y-16 pb-8">
          <section>
            <h2 className="label-editorial mb-5">Guides ({articleResults.length})</h2>
            {articleResults.length > 0 ? (
              <ul className="divide-y divide-line border-y border-line">
                {articleResults.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/guides/${article.slug}`}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
                        {article.title}
                      </span>
                      <span className="shrink-0 text-[11px] uppercase tracking-label text-stone">
                        {article.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
          </section>

          <section>
            <h2 className="label-editorial mb-5">Products ({productResults.length})</h2>
            {productResults.length > 0 ? (
              <ul className="divide-y divide-line border-y border-line">
                {productResults.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={product.href}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
                        {product.name}
                      </span>
                      <span className="shrink-0 text-[11px] uppercase tracking-label text-stone">
                        {product.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
          </section>
        </div>
      ) : (
        <div className="container-site py-16 text-center">
          <p className="font-display text-lg font-medium text-ink">Type something to search.</p>
          <p className="mt-2 text-sm text-ink-muted">
            Use the search icon in the header to search articles and products together.
          </p>
        </div>
      )}
    </>
  );
}

function EmptyState() {
  return (
    <p className="border border-line bg-paper-deep px-5 py-8 text-center text-[14px] text-ink-muted">
      No matches here. Try a broader term.
    </p>
  );
}
