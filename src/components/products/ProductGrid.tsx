import type { CatalogProduct } from "@/data/types";
import { ProductCard } from "./ProductCard";

type Props = {
  products: CatalogProduct[];
  columns?: 3 | 4;
  className?: string;
  onDark?: boolean;
};

export function ProductGrid({ products, columns = 4, className = "", onDark = false }: Props) {
  const gridCols =
    columns === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : "grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid gap-x-5 gap-y-10 sm:gap-x-6 ${gridCols} ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} onDark={onDark} />
      ))}
    </div>
  );
}