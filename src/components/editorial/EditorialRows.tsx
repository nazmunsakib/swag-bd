import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { ImageAsset } from "@/data/images";

type Item = {
  name: string;
  description: string;
  tone: string;
  label: string;
  href: string;
  image: ImageAsset;
};

type Props = {
  items: Item[];
};

export function EditorialRows({ items }: Props) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <Link
          key={item.name}
          href={item.href}
          className={`group grid grid-cols-1 items-center gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:gap-12 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-7">
            <ImagePlaceholder
              image={item.image}
              aspect="16 / 9"
              label={item.label}
              className="transition-opacity duration-500 group-hover:opacity-90"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-[26px] font-semibold text-ink transition-colors group-hover:text-clay sm:text-[30px]">
              {item.name}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
              {item.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-label text-ink">
              Explore
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}