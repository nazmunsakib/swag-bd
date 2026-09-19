import Link from "next/link";
import type { Article } from "@/data/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { articleImage } from "@/data/images";

type Props = {
  label: string;
  title: string;
  feature: Article;
  supporting: Article[];
};

export function FeatureStory({ label, title, feature, supporting }: Props) {
  return (
    <section className="container-site">
      <div className="mb-10 flex items-end justify-between border-b border-line pb-6">
        <div>
          <p className="label-editorial-accent mb-3">{label}</p>
          <h2 className="font-display text-display-md font-extrabold text-ink">{title}</h2>
        </div>
        <Link
          href={`/guides/${feature.slug}`}
          className="group hidden shrink-0 items-center gap-2 text-[12px] font-semibold uppercase tracking-label text-ink transition-colors hover:text-clay sm:inline-flex"
        >
          Read the story
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Link href={`/guides/${feature.slug}`} className="group block">
            <ImagePlaceholder
              image={articleImage(feature)}
              aspect="16 / 11"
              label={feature.category}
              caption="Feature"
              className="transition-opacity duration-500 group-hover:opacity-95"
            />
            <div className="mt-6">
              <p className="label-editorial mb-3">
                {feature.category} &middot; {feature.readingTime} min read &middot;{" "}
                {formatDate(feature.publishedAt)}
              </p>
              <h3 className="font-display text-[24px] font-semibold leading-tight text-ink transition-colors group-hover:text-clay sm:text-[28px]">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                {feature.excerpt}
              </p>
              <p className="mt-4 text-[12px] font-medium text-ink-soft">
                By {feature.author.name}, {feature.author.role}
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-end gap-10 lg:col-span-5 lg:gap-12">
          {supporting.map((article) => (
            <SupportingStory key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportingStory({ article }: { article: Article }) {
  return (
    <article className="group grid grid-cols-1 gap-5 sm:grid-cols-[220px_1fr] sm:items-center lg:grid-cols-1 xl:grid-cols-[220px_1fr]">
      <Link href={`/guides/${article.slug}`} aria-label={article.title} className="block">
        <ImagePlaceholder
          image={articleImage(article)}
          aspect="16 / 10"
          label={article.category}
          className="transition-opacity duration-500 group-hover:opacity-90"
        />
      </Link>
      <div>
        <p className="label-editorial mb-2">
          {article.readingTime} min read &middot; {formatDate(article.publishedAt)}
        </p>
        <h3 className="font-display text-[18px] font-semibold leading-snug text-ink transition-colors group-hover:text-clay">
          <Link href={`/guides/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-muted">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}