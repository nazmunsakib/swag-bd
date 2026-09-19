import Image from "next/image";
import type { ImageAsset } from "@/data/images";

const TONES: Record<string, { from: string; to: string }> = {
  graphite: { from: "#3A3936", to: "#1A1916" },
  sand: { from: "#C9BEA6", to: "#8F836A" },
  claytone: { from: "#A2542E", to: "#5E2C14" },
  slate: { from: "#4B545C", to: "#22272D" },
  olive: { from: "#6E6A4E", to: "#333122" },
  burgundy: { from: "#5C2E2E", to: "#2B1414" },
  tan: { from: "#A88F6A", to: "#6C5738" },
  denim: { from: "#3F4B5D", to: "#1B212B" },
  moss: { from: "#5A6248", to: "#262A1D" },
};

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

type Props = {
  image?: ImageAsset;
  tone?: string;
  aspect?: string;
  label?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export function ImagePlaceholder({
  image,
  tone,
  aspect = "4 / 3",
  label,
  caption,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition,
}: Props) {
  if (image) {
    return (
      <div
        className={`relative overflow-hidden bg-paper-deep ${className}`}
        style={{ aspectRatio: aspect === "auto" ? undefined : aspect }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
          priority={priority}
        />
        {label ? (
          <span className="absolute left-4 top-4 font-sans text-[10px] font-semibold uppercase tracking-label text-white/80 sm:left-5 sm:top-5">
            {label}
          </span>
        ) : null}
        {caption ? (
          <span className="absolute bottom-4 right-4 font-sans text-[10px] font-medium uppercase tracking-label text-white/70 sm:bottom-5 sm:right-5">
            {caption}
          </span>
        ) : null}
      </div>
    );
  }

  const palette = TONES[tone ?? "graphite"] ?? TONES.graphite;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect === "auto" ? undefined : aspect,
        backgroundImage: `linear-gradient(155deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
      role="img"
      aria-label={label ?? "SWAG.bd imagery"}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      {label ? (
        <span className="absolute left-4 top-4 font-sans text-[10px] font-semibold uppercase tracking-label text-white/70 sm:left-5 sm:top-5">
          {label}
        </span>
      ) : null}
      {caption ? (
        <span className="absolute bottom-4 right-4 font-sans text-[10px] font-medium uppercase tracking-label text-white/55 sm:bottom-5 sm:right-5">
          {caption}
        </span>
      ) : null}
    </div>
  );
}