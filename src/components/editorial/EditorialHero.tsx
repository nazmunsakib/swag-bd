import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { getAllProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { imageFor } from "@/data/images";

export function EditorialHero() {
  const hero = imageFor("hero-merch");
  return (
    <section className="container-site grid grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-0 lg:py-20">
      <div className="relative lg:col-span-7">
        <ImagePlaceholder
          image={hero}
          aspect="4 / 3"
          label="THE SWAG EDIT"
          caption="Curated"
          className="lg:hidden"
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <ImagePlaceholder
          image={hero}
          aspect="auto"
          label="THE SWAG EDIT"
          caption="Curated"
          className="hidden lg:block lg:h-[600px]"
          priority
          sizes="(max-width: 1280px) 60vw, 800px"
        />
      </div>

      <div className="lg:col-span-5 lg:pl-14">
        <div className="flex flex-col border-t border-line pt-8 lg:pt-0 lg:border-t-0 lg:pl-0">
          <p className="label-editorial-accent mb-6">Style / 2026</p>
          <h1 className="font-display text-display-xl font-extrabold text-ink">
            Style that speaks for itself.
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">
            Discover men's fashion, watches, accessories, streetwear and everyday style
            through practical guides, trends and curated products.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/style" variant="ink" size="lg">
              Explore Style
            </Button>
            <Button href="/guides" variant="outline" size="lg">
              Read Guides
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <MetaStat value={`${articles.length}`} label="Guides" />
            <MetaStat value={`${categories.length}`} label="Categories" />
            <MetaStat value={`${getAllProducts().length}`} label="Catalog pieces" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function MetaStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-[24px] font-bold text-ink">{value}</dd>
      <dd className="mt-1 text-[11px] font-semibold uppercase tracking-label text-stone">
        {label}
      </dd>
    </div>
  );
}