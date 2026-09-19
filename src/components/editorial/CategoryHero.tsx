import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import type { ImageAsset } from "@/data/images";

type Props = {
  label: string;
  heading: string;
  copy: string;
  imageLabel: string;
  image?: ImageAsset;
  primaryCta?: { href: string; text: string };
  secondaryCta?: { href: string; text: string };
  aspect?: string;
};

export function CategoryHero({
  label,
  heading,
  copy,
  imageLabel,
  image,
  primaryCta,
  secondaryCta,
  aspect = "3 / 4",
}: Props) {
  return (
    <section className="container-site grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-6 xl:col-span-5">
        <p className="label-editorial-accent mb-5">{label}</p>
        <h1 className="font-display text-display-lg font-extrabold text-ink">{heading}</h1>
        <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">{copy}</p>
        {primaryCta || secondaryCta ? (
          <div className="mt-9 flex flex-wrap items-center gap-4">
            {primaryCta ? (
              <Button href={primaryCta.href} variant="ink" size="lg">
                {primaryCta.text}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.text}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="lg:col-span-6 xl:col-span-7">
        <ImagePlaceholder
          image={image}
          aspect={aspect}
          label={imageLabel}
          caption="Editorial"
          className="lg:hidden"
        />
        <ImagePlaceholder
          image={image}
          aspect="auto"
          label={imageLabel}
          caption="Editorial"
          className="hidden lg:block lg:h-[520px]"
        />
      </div>
    </section>
  );
}