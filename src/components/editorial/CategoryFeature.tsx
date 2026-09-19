import Link from "next/link";
import { categories } from "@/data/categories";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { categoryImage } from "@/data/images";

export function CategoryFeature() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/${category.slug}`}
          className="group flex flex-col"
        >
          <ImagePlaceholder
            image={categoryImage(category)}
            aspect="3 / 4"
            label={category.imageLabel}
            className="transition-opacity duration-500 group-hover:opacity-90"
          />
          <div className="mt-4 flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="font-display text-[17px] font-semibold text-ink transition-colors group-hover:text-clay">
              {category.name}
            </h3>
            <span className="text-[11px] font-semibold uppercase tracking-label text-stone">
              Explore
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
            {category.tagline}
          </p>
        </Link>
      ))}
    </div>
  );
}