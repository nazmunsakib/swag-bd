"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article, GuideFilter } from "@/data/types";
import { guideFilters } from "@/data/articles";
import { ArticleCard } from "@/components/editorial/ArticleCard";
import { StoryCard } from "@/components/editorial/StoryCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRightIcon, SearchIcon } from "@/components/ui/Icons";
import { articleImage } from "@/data/images";

type Props = {
  articles: Article[];
  initialFilter?: GuideFilter;
};

export function GuidesGrid({ articles, initialFilter = "All" }: Props) {
  const [active, setActive] = useState<GuideFilter>(initialFilter);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let result = articles;
    if (active !== "All") {
      result = result.filter((article) => article.guideCategory === active);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((article) =>
        `${article.title} ${article.excerpt} ${article.category} ${article.tags.join(" ")}`
          .toLowerCase()
          .includes(q)
      );
    }
    return result;
  }, [articles, active, query]);

  const featured = filtered.find((article) => article.featured) ?? filtered[0];
  const popular = articles.filter((article) => article.popular);
  const latest = [...articles]
    .sort((x, y) => +new Date(y.publishedAt) - +new Date(x.publishedAt))
    .slice(0, 4);

  return (
    <div>
      <div className="container-site">
        <div className="flex flex-col gap-4 border-y border-line py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-1" role="tablist" aria-label="Guide categories">
            {guideFilters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={`px-3 py-1.5 text-[12px] font-semibold uppercase tracking-label transition-colors ${
                  active === filter
                    ? "bg-ink text-paper"
                    : "text-ink-muted hover:bg-paper-deep hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 border border-line px-3 lg:w-72">
            <SearchIcon className="h-4 w-4 text-stone" aria-hidden />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter guides..."
              className="w-full bg-transparent py-2 text-[14px] text-ink outline-none placeholder:text-stone"
              aria-label="Filter guides"
            />
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="container-site py-20 text-center">
          <p className="font-display text-lg font-medium text-ink">Nothing matches that filter.</p>
          <p className="mt-2 text-sm text-ink-muted">Try a different category or a broader search.</p>
        </div>
      ) : (
        <>
          {featured ? (
            <section className="container-site py-16 sm:py-20">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <Link
                  href={`/guides/${featured.slug}`}
                  className="group block lg:col-span-7"
                  aria-label={featured.title}
                >
                  <ImagePlaceholder
                    image={articleImage(featured)}
                    aspect="16 / 10"
                    label={featured.category}
                    caption="Featured"
                    className="transition-opacity duration-500 group-hover:opacity-90"
                  />
                </Link>
                <div className="lg:col-span-5">
                  <p className="label-editorial-accent mb-4">Featured guide</p>
                  <h2 className="font-display text-[26px] font-semibold leading-tight text-ink sm:text-[30px]">
                    <Link href={`/guides/${featured.slug}`} className="transition-colors hover:text-clay">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
                    {featured.excerpt}
                  </p>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-label text-stone">
                    {featured.readingTime} min read &middot; {featured.category}
                  </p>
                  <Link
                    href={`/guides/${featured.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-label text-ink transition-colors hover:text-clay"
                  >
                    Read the guide
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </section>
          ) : null}

          {active === "All" && !query ? (
            <>
              <section className="border-t border-line py-16 sm:py-20">
                <div className="container-site">
                  <p className="label-editorial mb-8">Latest</p>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {latest.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              </section>

              <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
                <div className="container-site">
                  <p className="label-editorial mb-8">Popular</p>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {popular.map((article) => (
                      <StoryCard key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="border-t border-line py-16 sm:py-20">
              <div className="container-site">
                <p className="label-editorial mb-8">
                  {query ? `Results for "${query}"` : active}
                </p>
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                  {filtered.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}