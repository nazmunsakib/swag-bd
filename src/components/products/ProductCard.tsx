import Link from "next/link";
import type { CatalogProduct } from "@/data/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { productImage } from "@/data/images";

type Props = {
  product: CatalogProduct;
  className?: string;
  onDark?: boolean;
};

export function ProductCard({ product, className = "", onDark = false }: Props) {
  return (
    <article className={`group flex flex-col ${className}`}>
      <Link href={product.href} aria-label={product.name} className="block">
        <ImagePlaceholder
          image={productImage(product)}
          aspect="4 / 5"
          label={product.label}
          className="transition-opacity duration-500 group-hover:opacity-90"
        />
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <p className={`label-editorial mb-1 ${onDark ? "!text-stone" : ""}`}>
          {product.category}
        </p>
        <h3
          className={`font-display text-[15px] font-semibold transition-colors group-hover:text-clay ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          <Link href={product.href}>{product.name}</Link>
        </h3>
        <p
          className={`mt-1.5 line-clamp-2 text-[13px] leading-relaxed ${
            onDark ? "text-paper/60" : "text-ink-muted"
          }`}
        >
          {product.shortDescription}
        </p>
        <div className="mt-3 flex flex-1 flex-wrap items-end justify-between gap-x-3 gap-y-1">
          {product.startingPrice ? (
            <p className={`min-w-0 text-[13px] font-semibold ${onDark ? "text-white" : "text-ink"}`}>
              From {product.startingPrice}
            </p>
          ) : (
            <p className={`min-w-0 text-[11px] uppercase tracking-label ${onDark ? "text-paper/60" : "text-mist"}`}>
              Request details
            </p>
          )}
          <Link
            href={product.href}
            className={`inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold uppercase tracking-label transition-colors ${
              onDark ? "text-paper hover:text-clay" : "text-ink hover:text-clay"
            }`}
          >
            View details
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}