import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "ink" | "accent" | "outline";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-label transition-all duration-200 select-none";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-paper hover:bg-ink-soft active:bg-ink",
  accent: "bg-clay text-white hover:bg-clay-deep active:bg-clay",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[11px]",
  md: "px-6 py-3 text-[12px]",
  lg: "px-8 py-4 text-[12px]",
};

type ButtonAsLink = CommonProps & { href: string; onClick?: () => void };
type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "ink", size = "md", className = "" } = props;
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </button>
  );
}