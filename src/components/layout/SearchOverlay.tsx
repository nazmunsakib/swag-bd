"use client";

import { useEffect, useRef, useState } from "react";
import { articles, getLatestArticles } from "@/data/articles";
import { getAllProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { CloseIcon, SearchIcon, ArrowRightIcon, ClockIcon } from "@/components/ui/Icons";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

const POPULAR = ["watches", "oversized t-shirt", "sunglasses", "wristbands", "streetwear"];

function normalize(text: string) {
  return text.toLowerCase().trim();
}

export function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("swagbd-recent-searches");
      if (stored) setRecent(JSON.parse(stored));
    } catch {
      setRecent([]);
    }
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      const id = window.setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(id);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const q = normalize(query);

  const articleResults = q
    ? articles
        .filter((article) =>
          normalize(`${article.title} ${article.excerpt} ${article.category} ${article.tags.join(" ")}`).includes(q)
        )
        .slice(0, 4)
    : [];

  const productResults = q
    ? getAllProducts()
        .filter((product) =>
          normalize(`${product.name} ${product.category} ${product.shortDescription}`).includes(q)
        )
        .slice(0, 4)
    : [];

  const latest = q ? [] : getLatestArticles(4);

  const hasResults = articleResults.length > 0 || productResults.length > 0;

  const saveRecent = (term: string) => {
    const value = term.trim();
    if (!value) return;
    const next = [value, ...recent.filter((r) => r !== value)].slice(0, 5);
    setRecent(next);
    try {
      window.localStorage.setItem("swagbd-recent-searches", JSON.stringify(next));
    } catch {
      // ignore storage failures
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-paper"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="border-b border-line">
        <div className="container-site flex items-center gap-4 py-5 sm:py-6">
          <SearchIcon className="h-5 w-5 shrink-0 text-ink-muted" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && q) {
                saveRecent(q);
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
              }
            }}
            placeholder="Search style, watches, guides, products..."
            className="w-full bg-transparent font-display text-xl font-medium text-ink outline-none placeholder:text-stone sm:text-2xl"
            aria-label="Search"
          />
          <button
            onClick={onClose}
            className="shrink-0 border border-line px-4 py-2 text-[11px] font-semibold uppercase tracking-label text-ink-muted transition-colors hover:border-ink hover:text-ink"
            aria-label="Close search"
          >
            <span className="hidden sm:inline">Close</span>
            <CloseIcon className="h-4 w-4 sm:hidden" aria-hidden />
          </button>
        </div>
      </div>

      <div className="container-site flex-1 overflow-y-auto py-8 sm:py-10">
        {!q ? (
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="label-editorial mb-4">Suggestions</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/${category.slug}`}
                      onClick={() => saveRecent(category.name)}
                      className="group flex items-center justify-between border-b border-line py-2.5"
                    >
                      <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-clay">
                        {category.name}
                      </span>
                      <ArrowRightIcon className="h-4 w-4 text-stone transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="label-editorial mb-4">Popular</h3>
                <div className="flex flex-wrap gap-2">
                  {POPULAR.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="border border-line px-3 py-1.5 text-[12px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {recent.length > 0 ? (
                <div>
                  <h3 className="label-editorial mb-4">Recent</h3>
                  <ul className="space-y-2">
                    {recent.map((term) => (
                      <li key={term}>
                        <button
                          onClick={() => setQuery(term)}
                          className="flex items-center gap-2 text-[14px] text-ink-soft transition-colors hover:text-clay"
                        >
                          <ClockIcon className="h-3.5 w-3.5 text-stone" aria-hidden />
                          {term}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <h3 className="label-editorial mb-4">Latest guides</h3>
                <ul className="space-y-3">
                  {latest.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/guides/${article.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between gap-4"
                      >
                        <span className="font-display text-[15px] font-medium text-ink transition-colors group-hover:text-clay">
                          {article.title}
                        </span>
                        <span className="shrink-0 text-[11px] uppercase tracking-label text-stone">
                          {article.readingTime} min
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {hasResults ? (
              <div className="grid gap-10 lg:grid-cols-2">
                <section aria-label="Guide results">
                  <h3 className="label-editorial mb-4">Guides</h3>
                  <ul className="space-y-1">
                    {articleResults.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/guides/${article.slug}`}
                          onClick={() => saveRecent(q)}
                          className="group flex items-center justify-between gap-4 border-b border-line py-3"
                        >
                          <span className="font-display text-[16px] font-semibold text-ink transition-colors group-hover:text-clay">
                            {article.title}
                          </span>
                          <span className="shrink-0 text-[11px] uppercase tracking-label text-stone">
                            {article.category}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
                <section aria-label="Product results">
                  <h3 className="label-editorial mb-4">Products</h3>
                  <ul className="space-y-1">
                    {productResults.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={product.href}
                          onClick={() => saveRecent(q)}
                          className="group flex items-center justify-between gap-4 border-b border-line py-3"
                        >
                          <span className="font-display text-[16px] font-semibold text-ink transition-colors group-hover:text-clay">
                            {product.name}
                          </span>
                          <span className="shrink-0 text-[11px] uppercase tracking-label text-stone">
                            {product.startingPrice ? `From ${product.startingPrice}` : "Request details"}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ) : (
              <div className="py-10 text-center">
                <p className="font-display text-lg font-medium text-ink">No results for "{query}"</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Try a broader term like "watch" or "tee".
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={`/search?q=${encodeURIComponent(query.trim())}`}
                onClick={() => saveRecent(q)}
                className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-label text-paper transition-colors hover:bg-ink-soft"
              >
                View all results <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}