import Link from "next/link";
import { trendingTopics } from "@/data/categories";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { imageFor } from "@/data/images";

export function TrendingSection() {
  const [primary, ...rest] = trendingTopics;

  return (
    <section className="container-site">
      <div className="mb-10 flex items-end justify-between border-b border-line pb-6">
        <div>
          <p className="label-editorial-accent mb-3">This week</p>
          <h2 className="font-display text-display-md font-extrabold text-ink">
            Trending Now
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-ink-muted sm:block">
          What is moving in Dhaka right now, from the wrist to the street.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <TrendingCard
          topic={primary}
          className="lg:col-span-6"
          aspect="4 / 5"
          featured
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
          {rest.map((topic) => (
            <TrendingCard key={topic.label} topic={topic} aspect="4 / 5" />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrendingCard({
  topic,
  aspect,
  featured = false,
  className = "",
}: {
  topic: { slug: string; label: string; caption: string; tone: string; imageKey: string };
  aspect: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link href={`/${topic.slug}`} className={`group relative block overflow-hidden bg-ink ${className}`}>
      <ImagePlaceholder
        image={imageFor(topic.imageKey)}
        aspect={aspect}
        caption="Trending"
        className="opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-16 sm:p-7">
        <div>
          <h3
            className={`font-display font-bold text-white ${
              featured ? "text-[26px] sm:text-[32px]" : "text-[19px] sm:text-[21px]"
            }`}
          >
            {topic.label}
          </h3>
          {featured ? (
            <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-white/75">
              {topic.caption}
            </p>
          ) : null}
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 text-white transition-colors group-hover:border-clay group-hover:bg-clay">
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}