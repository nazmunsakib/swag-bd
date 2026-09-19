import Link from "next/link";
import type { Article } from "@/data/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { articleImage } from "@/data/images";

type Props = {
  article: Article;
  className?: string;
  imageAspect?: string;
};

export function ArticleCard({ article, className = "", imageAspect = "4 / 3" }: Props) {
  return (
    <article className={`group flex flex-col ${className}`}>
      <Link href={`/guides/${article.slug}`} className="block" aria-label={article.title}>
        <ImagePlaceholder
          image={articleImage(article)}
          aspect={imageAspect}
          label={article.category}
          className="transition-opacity duration-500 group-hover:opacity-90"
        />
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <p className="label-editorial mb-2">{article.category}</p>
        <h3 className="font-display text-[19px] font-semibold leading-snug text-ink transition-colors group-hover:text-clay sm:text-[21px]">
          <Link href={`/guides/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-ink-muted">
          {article.excerpt}
        </p>
        <p className="mt-4 text-[11px] font-medium uppercase tracking-label text-stone">
          {article.readingTime} min read &middot; {formatDate(article.publishedAt)}
        </p>
      </div>
    </article>
  );
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}