"use client";

import { useEffect } from "react";
import Link from "next/link";
import { categories, siteConfig } from "@/data/categories";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-paper lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="container-site flex items-center justify-between py-5">
        <Link href="/" onClick={onClose} className="font-display text-[20px] font-extrabold uppercase tracking-tight text-ink">
          SWAG<span className="text-clay">.bd</span>
        </Link>
        <button
          onClick={onClose}
          className="border border-line px-4 py-2 text-[11px] font-semibold uppercase tracking-label text-ink-muted transition-colors hover:border-ink hover:text-ink"
          aria-label="Close menu"
        >
          Close
        </button>
      </div>

      <nav className="container-site flex-1 overflow-y-auto" aria-label="Mobile navigation">
        <ul className="border-t border-line">
          {categories.map((category, index) => (
            <li key={category.slug} className="border-b border-line">
              <Link
                href={`/${category.slug}`}
                onClick={onClose}
                className="group flex items-baseline justify-between py-4"
              >
                <span className="font-display text-[26px] font-semibold text-ink transition-colors group-hover:text-clay">
                  {category.name}
                </span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
          <li className="border-b border-line">
            <Link href="/guides" onClick={onClose} className="group flex items-baseline justify-between py-4">
              <span className="font-display text-[26px] font-semibold text-ink transition-colors group-hover:text-clay">
                Guides
              </span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
                {String(categories.length + 1).padStart(2, "0")}
              </span>
            </Link>
          </li>
        </ul>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link
            href="/discover"
            onClick={onClose}
            className="bg-ink py-4 text-center text-[12px] font-semibold uppercase tracking-label text-paper transition-colors hover:bg-ink-soft"
          >
            Discover
          </Link>
          <Link
            href="/custom"
            onClick={onClose}
            className="bg-clay py-4 text-center text-[12px] font-semibold uppercase tracking-label text-white transition-colors hover:bg-clay-deep"
          >
            Custom
          </Link>
        </div>
      </nav>

      <footer className="container-site border-t border-line py-6">
        <p className="text-[13px] text-ink-muted">
          Style. Accessories. Culture.
        </p>
        <div className="mt-3 flex gap-5 text-[12px] font-medium uppercase tracking-label text-ink">
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-clay">Instagram</a>
          <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="hover:text-clay">Facebook</a>
          <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="hover:text-clay">X</a>
        </div>
      </footer>
    </div>
  );
}