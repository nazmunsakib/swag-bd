import Link from "next/link";

type Props = {
  label: string;
  title: string;
  description?: string;
  link?: { href: string; text: string };
  className?: string;
  onDark?: boolean;
};

export function SectionHeading({ label, title, description, link, className = "", onDark = false }: Props) {
  return (
    <div className={`mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div className="max-w-xl">
        <p className={`label-editorial mb-4 ${onDark ? "!text-stone" : ""}`}>{label}</p>
        <h2 className={`text-heading font-semibold ${onDark ? "text-white" : "text-ink"}`}>{title}</h2>
        {description ? (
          <p className={`mt-3 text-[15px] leading-relaxed ${onDark ? "text-paper/60" : "text-ink-muted"}`}>
            {description}
          </p>
        ) : null}
      </div>
      {link ? (
        <Link
          href={link.href}
          className={`group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold uppercase tracking-label transition-colors hover:text-clay ${
            onDark ? "text-paper" : "text-ink"
          }`}
        >
          {link.text}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      ) : null}
    </div>
  );
}