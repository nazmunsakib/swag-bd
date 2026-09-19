import type { Metadata } from "next";
import { MerchandiseHub } from "@/components/custom/MerchandiseHub";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Merchandise in Bangladesh",
  description:
    "Custom printed and branded merchandise in Bangladesh. Custom T-shirts, hoodies, polo shirts, jerseys, caps, mugs, water bottles, tumblers, bags, keychains, wristbands, lanyards, stationery and promotional products for teams, events, universities and businesses.",
  alternates: { canonical: "/custom/merchandise" },
  ...ogMeta({
    title: "Custom Merchandise in Bangladesh | SWAG.bd Custom",
    description: "Custom printed and branded merchandise in Bangladesh across apparel, drinkware, bags, accessories and stationery.",
    path: "/custom/merchandise",
    image: imageFor("merch-hero")!,
  }),
};

export default function MerchandisePage() {
  return (
    <MerchandiseHub
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "SWAG.bd Custom", href: "/custom" },
        { name: "Custom Merchandise", href: "/custom/merchandise" },
      ]}
      label="Custom Merchandise in Bangladesh"
      heading="One studio, the full range."
      copy="Custom apparel, drinkware, bags, accessories, stationery and promotional products, produced under one roof with one quality standard. Discover the range, then request a quote."
      image={imageFor("merch-hero")!}
      groups={[
        {
          title: "Custom Apparel",
          description: "T-shirts, hoodies, polos, jerseys, jackets, aprons and caps.",
          productSlugs: ["t-shirts", "hoodies", "polo-shirts", "jerseys", "jackets", "aprons", "caps"],
        },
        {
          title: "Custom Drinkware",
          description: "Mugs, water bottles and tumblers.",
          productSlugs: ["mugs", "water-bottles", "tumblers"],
        },
        {
          title: "Custom Bags",
          description: "Totes and canvas carry pieces.",
          productSlugs: ["bags"],
        },
        {
          title: "Custom Accessories",
          description: "Keychains, wristbands, lanyards, badges, phone cases, stickers, wallets, lockets and rings.",
          productSlugs: ["keychains", "wristbands", "lanyards", "badges", "phone-cases", "stickers", "leather-wallets", "lockets", "rings"],
        },
        {
          title: "Custom Stationery",
          description: "Notebooks, diaries and pens.",
          productSlugs: ["stationery"],
        },
        {
          title: "Custom Design",
          description: "Logo, artwork and design for your merchandise.",
          productSlugs: ["custom-design"],
        },
      ]}
      sections={[
        {
          title: "One design system, every product",
          body: "The strongest merchandise runs use a single design system across every piece. You design the mark once, and we apply it consistently to apparel, drinkware, bags and accessories so the whole range reads as one brand.",
        },
        {
          title: "Quote first, approve the preview",
          body: "Every order starts with a clear quotation and a digital preview you approve before production. Nothing is produced without your sign-off, and pricing is confirmed on your actual requirements, not a fixed price list.",
        },
        {
          title: "Built for Bangladesh",
          body: "Fabric chosen for local weather, production scheduled around local event seasons, and delivery across Bangladesh. The range is designed around how teams, universities and businesses here actually use merchandise.",
        },
      ]}
      useCases={[
        "Corporate and office branding",
        "Event and fest merchandise",
        "University and campus kits",
        "Brand and product launches",
        "Creator and community drops",
        "Team and club identity",
        "Gifts and giveaways",
      ]}
      crossLinks={[
        { name: "Corporate Merchandise", href: "/custom/corporate-merchandise", description: "Uniforms, office kits and corporate gifts." },
        { name: "Event Merchandise", href: "/custom/event-merchandise", description: "Tees, bottles, wristbands and badges for events." },
        { name: "University Merchandise", href: "/custom/university-merchandise", description: "Batch shirts, club hoodies and campus kits." },
        { name: "Custom Printing", href: "/custom/printing", description: "The printing methods behind every product." },
        { name: "Get a Quote", href: "/quote", description: "Request a quotation for any product in the range." },
      ]}
      guides={[
        { slug: "how-to-choose-the-right-custom-water-bottle", title: "How to Choose the Right Custom Water Bottle" },
        { slug: "custom-merchandise-ideas-for-corporate-events", title: "Custom Merchandise Ideas for Corporate Events" },
        { slug: "custom-merchandise-ideas-for-university-clubs", title: "Custom Merchandise Ideas for University Clubs" },
      ]}
      ctaProduct="Custom Merchandise"
    />
  );
}