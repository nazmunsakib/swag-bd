"use client";

import { useState } from "react";
import { ShareIcon } from "@/components/ui/Icons";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-4 border-y border-line py-4">
      <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-label text-mist">
        <ShareIcon className="h-4 w-4" aria-hidden />
        Share
      </span>
      <div className="flex items-center gap-5 text-[12px] font-semibold uppercase tracking-label text-ink-soft">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-clay"
        >
          X
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-clay"
        >
          Facebook
        </a>
        <button onClick={copy} className="transition-colors hover:text-clay">
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}