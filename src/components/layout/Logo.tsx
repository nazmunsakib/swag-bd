import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-baseline gap-0.5 ${className}`} aria-label="SWAG.bd home">
      <span className="font-display text-[22px] font-extrabold uppercase leading-none tracking-tight text-ink">
        SWAG
      </span>
      <span className="font-sans text-[12px] font-semibold uppercase tracking-label text-clay">
        .bd
      </span>
    </Link>
  );
}