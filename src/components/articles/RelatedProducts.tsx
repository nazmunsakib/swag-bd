import type { CatalogProduct } from "@/data/types";
import { ProductGrid } from "@/components/products/ProductGrid";

type Props = {
  products: CatalogProduct[];
};

export function RelatedProducts({ products }: Props) {
  return (
    <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
      <div className="container-site">
        <p className="label-editorial mb-8">Related pieces</p>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}