"use client";

import Link from "next/link";
import { whatsappLink, quoteMessage } from "@/data/business";
import { track } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/Icons";

type Props = {
  product?: string;
  size?: "md" | "lg";
  align?: "left" | "center";
  onDark?: boolean;
};

export function GetQuoteCta({ product, size = "lg", align = "left", onDark = false }: Props) {
  const quoteHref = product
    ? `/quote?product=${encodeURIComponent(product)}`
    : "/quote";

  const padding = size === "lg" ? "px-8 py-4 text-[12px]" : "px-6 py-3 text-[12px]";
  const secondary = onDark
    ? "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink"
    : "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper";

  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <Link
        href={quoteHref}
        onClick={() => track("quote_button_clicked", { product })}
        className={`inline-flex items-center justify-center gap-2 ${padding} bg-clay font-sans font-semibold uppercase tracking-label text-white transition-colors hover:bg-clay-deep`}
      >
        Get a Quote
      </Link>
      <a
        href={whatsappLink(quoteMessage(product))}
        target="_blank"
        rel="noreferrer"
        onClick={() => track("whatsapp_clicked", { product })}
        className={`inline-flex items-center gap-2 ${padding} ${secondary} font-sans font-semibold uppercase tracking-label transition-colors`}
      >
        <WhatsAppIcon className="h-4 w-4" aria-hidden />
        Ask on WhatsApp
      </a>
    </div>
  );
}