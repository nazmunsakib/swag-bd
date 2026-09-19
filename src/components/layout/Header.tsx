"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { SearchOverlay } from "./SearchOverlay";
import { SearchIcon, MenuIcon } from "@/components/ui/Icons";

const NAV = [
  { href: "/style", label: "Style" },
  { href: "/watches", label: "Watches" },
  { href: "/sunglasses", label: "Sunglasses" },
  { href: "/accessories", label: "Accessories" },
  { href: "/streetwear", label: "Streetwear" },
  { href: "/guides", label: "Guides" },
  { href: "/trends", label: "Trends" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-4 sm:py-5"
        }`}
      >
        <div className="container-site flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] font-semibold uppercase tracking-label text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 p-2 text-ink-soft transition-colors hover:text-ink"
              aria-label="Open search"
            >
              <SearchIcon className="h-[18px] w-[18px]" aria-hidden />
              <span className="hidden text-[12px] font-semibold uppercase tracking-label lg:inline">
                Search
              </span>
            </button>

            <Link
              href="/discover"
              className="hidden p-2 text-[12px] font-semibold uppercase tracking-label text-ink-soft transition-colors hover:text-ink sm:inline"
            >
              Discover
            </Link>
            <Link
              href="/custom"
              className="hidden bg-clay px-4 py-2 text-[12px] font-semibold uppercase tracking-label text-white transition-colors hover:bg-clay-deep sm:inline-block"
            >
              Custom
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-ink-soft transition-colors hover:text-ink xl:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="h-[20px] w-[20px]" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}