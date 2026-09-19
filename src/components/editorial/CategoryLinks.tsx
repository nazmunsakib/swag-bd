import Link from "next/link";
import { categories } from "@/data/categories";
import { ArrowRightIcon } from "@/components/ui/Icons";

type Props = {
  current: string;
};

export function CategoryLinks({ current }: Props) {
  return (
    <nav aria-label="Browse categories" className="container-site">
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const isCurrent = category.slug === current;
          return (
            <div
              key={category.slug}
              className={`group flex items-center justify-between gap-4 bg-paper p-6 transition-colors duration-300 sm:p-7 ${
                isCurrent ? "" : "hover:bg-paper-deep"
              }`}
            >
              {isCurrent ? (
                <>
                  <div>
                    <p className="label-editorial mb-1">{category.name}</p>
                    <p className="font-display text-[16px] font-semibold text-ink">
                      {category.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-label text-clay">
                    You are here
                  </span>
                </>
              ) : (
                <Link
                  href={`/${category.slug}`}
                  className="flex w-full items-center justify-between gap-4"
                >
                  <div>
                    <p className="label-editorial mb-1">{category.name}</p>
                    <p className="font-display text-[16px] font-semibold text-ink transition-colors group-hover:text-clay">
                      {category.tagline}
                    </p>
                  </div>
                  <ArrowRightIcon
                    className="h-4 w-4 shrink-0 text-stone transition-transform group-hover:translate-x-1 group-hover:text-clay"
                    aria-hidden
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}