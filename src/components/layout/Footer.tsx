import Link from "next/link";
import { siteConfig } from "@/data/categories";
import { whatsappLink, quoteMessage } from "@/data/business";

const explore = [
  { href: "/style", label: "Style" },
  { href: "/watches", label: "Watches" },
  { href: "/sunglasses", label: "Sunglasses" },
  { href: "/streetwear", label: "Streetwear" },
  { href: "/accessories", label: "Accessories" },
  { href: "/discover", label: "Discover" },
];

const guides = [
  { href: "/guides", label: "Fashion Guides" },
  { href: "/guides?filter=Watches", label: "Watch Guides" },
  { href: "/guides?filter=Sunglasses", label: "Sunglasses Guides" },
  { href: "/guides?filter=Buying Guides", label: "Buying Guides" },
  { href: "/guides?filter=Outfit Ideas", label: "Outfit Ideas" },
];

const custom = [
  { href: "/custom/merchandise", label: "Custom Merchandise" },
  { href: "/custom/t-shirts", label: "Custom T-Shirts" },
  { href: "/custom/hoodies", label: "Custom Hoodies" },
  { href: "/custom/water-bottles", label: "Custom Water Bottles" },
  { href: "/custom/corporate-merchandise", label: "Corporate Merch" },
  { href: "/custom/event-merchandise", label: "Event Merch" },
  { href: "/quote", label: "Get a Quote" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper-deep sm:mt-32">
      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-[24px] font-extrabold uppercase tracking-tight text-ink">
            SWAG<span className="text-clay">.bd</span>
          </p>
          <p className="mt-3 text-[14px] text-ink-muted">Style. Accessories. Culture.</p>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ink-muted">
            Bangladesh's style and lifestyle platform. Practical guides, trends and curated
            products for the way you actually live.
          </p>
        </div>

        <FooterColumn title="Explore" links={explore} />
        <FooterColumn title="Guides" links={guides} />
        <FooterColumn title="SWAG.bd Custom" links={custom} />
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-ink-muted">&copy; {new Date().getFullYear()} SWAG.bd</p>
          <div className="flex flex-wrap items-center gap-6 text-[12px] font-medium uppercase tracking-label text-ink-soft">
            <Link href="/about" className="transition-colors hover:text-clay">About</Link>
            <Link href="/privacy" className="transition-colors hover:text-clay">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-clay">Terms</Link>
            <Link href="/contact" className="transition-colors hover:text-clay">Contact</Link>
            <Link href="/credits" className="transition-colors hover:text-clay">Image Credits</Link>
          </div>
          <div className="flex items-center gap-5 text-[12px] font-medium uppercase tracking-label text-ink-soft">
            <a href={whatsappLink(quoteMessage())} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">WhatsApp</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">Facebook</a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="transition-colors hover:text-clay">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type ColumnProps = {
  title: string;
  links: { href: string; label: string }[];
};

function FooterColumn({ title, links }: ColumnProps) {
  return (
    <div>
      <h3 className="label-editorial mb-5">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-[14px] text-ink-soft transition-colors hover:text-clay">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}