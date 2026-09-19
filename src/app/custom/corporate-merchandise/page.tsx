import type { Metadata } from "next";
import { MerchandiseHub } from "@/components/custom/MerchandiseHub";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Corporate Merchandise in Bangladesh",
  description:
    "Custom corporate merchandise in Bangladesh. Branded polo shirts, T-shirts, hoodies, mugs, water bottles, tumblers, notebooks, pens, keychains, lanyards and corporate gift sets for offices, teams and events.",
  alternates: { canonical: "/custom/corporate-merchandise" },
  ...ogMeta({
    title: "Corporate Merchandise in Bangladesh | SWAG.bd Custom",
    description: "Branded corporate merchandise, uniforms and gift sets for offices and teams in Bangladesh.",
    path: "/custom/corporate-merchandise",
    image: imageFor("corp")!,
  }),
};

export default function CorporateMerchandisePage() {
  return (
    <MerchandiseHub
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "SWAG.bd Custom", href: "/custom" },
        { name: "Corporate Merchandise", href: "/custom/corporate-merchandise" },
      ]}
      label="Corporate Merchandise in Bangladesh"
      heading="Your brand, on everything your people use."
      copy="Branded uniforms, desk kits, gifts and promotional products for offices, teams and events. One design system, one quality standard, delivered across Bangladesh."
      image={imageFor("corp")!}
      groups={[
        {
          title: "Uniforms and staff wear",
          description: "Polo shirts, T-shirts, hoodies and aprons for teams.",
          productSlugs: ["polo-shirts", "t-shirts", "hoodies", "aprons"],
        },
        {
          title: "Desk and office items",
          description: "Mugs, tumblers, notebooks, diaries and pens.",
          productSlugs: ["mugs", "tumblers", "stationery"],
        },
        {
          title: "Corporate gifts and giveaways",
          description: "Water bottles, keychains, lanyards, badges, leather wallets and bags.",
          productSlugs: ["water-bottles", "keychains", "lanyards", "badges", "leather-wallets", "bags"],
        },
      ]}
      sections={[
        {
          title: "Built for daily office use",
          body: "Corporate merchandise works when it is used every day. A branded mug on the desk, a polo on the team, a notebook in the meeting. We design the range around daily use, not one-time giveaways.",
        },
        {
          title: "Staff, clients and events",
          body: "The same brand system can cover staff uniforms, client gift sets and event giveaways. Planning the range together keeps it consistent and cheaper than ordering each piece separately.",
        },
        {
          title: "Quoted on your requirements",
          body: "Every corporate order starts with a quotation on your actual quantities and products. We confirm materials, printing and delivery, then show a preview before production.",
        },
      ]}
      useCases={[
        "Staff uniforms and dress codes",
        "Office and desk branding",
        "Client and partner gifts",
        "Employee appreciation",
        "Corporate events and launches",
        "Conference and seminar kits",
        "Promotional giveaways",
      ]}
      crossLinks={[
        { name: "Custom Merchandise", href: "/custom/merchandise", description: "The full product range." },
        { name: "Event Merchandise", href: "/custom/event-merchandise", description: "Printed pieces for events." },
        { name: "Custom Printing", href: "/custom/printing", description: "The printing methods behind the range." },
      ]}
      guides={[
        { slug: "custom-merchandise-ideas-for-corporate-events", title: "Custom Merchandise Ideas for Corporate Events" },
        { slug: "how-to-choose-the-right-custom-water-bottle", title: "How to Choose the Right Custom Water Bottle" },
      ]}
      ctaProduct="Corporate Merchandise"
    />
  );
}