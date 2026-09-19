"use client";

import { whatsappLink, quoteMessage } from "@/data/business";
import { track } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/Icons";

type Props = {
  product?: string;
  message?: string;
  label?: string;
  className?: string;
};

export function WhatsAppLink({
  product,
  message,
  label = "WhatsApp us",
  className = "",
}: Props) {
  const href = whatsappLink(message ?? quoteMessage(product));

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("whatsapp_clicked", { product })}
      className={`group inline-flex items-center gap-2 text-[13px] font-semibold text-ink transition-colors hover:text-clay ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 text-clay" aria-hidden />
      <span className="link-underline">{label}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
        &rarr;
      </span>
    </a>
  );
}