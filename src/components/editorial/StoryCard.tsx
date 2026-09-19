import Link from "next/link";
import type { Article } from "@/data/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { articleImage } from "@/data/images";

type Props = {
  article: Article;
};

export function StoryCard({ article }: Props) {
  return (
    <article className="group flex flex-col">
      <Link href={`/guides/${article.slug}`} aria-label={article.title} className="block">
        <ImagePlaceholder
          image={articleImage(article)}
          aspect="3 / 4"
          className="transition-opacity duration-500 group-hover:opacity-90"
        />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="label-editorial mb-1.5">{article.category}</p>
          <h3 className="font-display text-[16px] font-semibold leading-snug text-ink transition-colors group-hover:text-clay">
            <Link href={`/guides/${article.slug}`}>{article.title}</Link>
          </h3>
        </div>
        <Link
          href={`/guides/${article.slug}`}
          aria-label={`Read ${article.title}`}
          className="mt-1 shrink-0 text-ink-soft transition-all group-hover:translate-x-0.5 group-hover:text-clay"
        >
          <ArrowUpRightIcon className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}