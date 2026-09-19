import type { Metadata } from "next";
import { MerchandiseHub } from "@/components/custom/MerchandiseHub";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Event Merchandise in Bangladesh",
  description:
    "Custom event merchandise in Bangladesh. Event T-shirts, hoodies, caps, mugs, water bottles, wristbands, lanyards, badges, bags and stickers for fests, conferences, concerts and campaigns.",
  alternates: { canonical: "/custom/event-merchandise" },
  ...ogMeta({
    title: "Event Merchandise in Bangladesh | SWAG.bd Custom",
    description: "Custom event merchandise for fests, conferences, concerts and campaigns in Bangladesh.",
    path: "/custom/event-merchandise",
    image: imageFor("event")!,
  }),
};

export default function EventMerchandisePage() {
  return (
    <MerchandiseHub
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "SWAG.bd Custom", href: "/custom" },
        { name: "Event Merchandise", href: "/custom/event-merchandise" },
      ]}
      label="Event Merchandise in Bangladesh"
      heading="Merch that keeps the event alive."
      copy="T-shirts, bottles, wristbands, lanyards and badges for fests, conferences, concerts and campaigns. Produced to a deadline, delivered where the event happens."
      image={imageFor("event")!}
      groups={[
        {
          title: "Event apparel",
          description: "T-shirts, hoodies, caps and jackets for crews and attendees.",
          productSlugs: ["t-shirts", "hoodies", "caps", "jackets"],
        },
        {
          title: "Event drinkware",
          description: "Water bottles, mugs and tumblers for giveaways.",
          productSlugs: ["water-bottles", "mugs", "tumblers"],
        },
        {
          title: "Access and giveaways",
          description: "Wristbands, lanyards, badges, keychains, bags and stickers.",
          productSlugs: ["wristbands", "lanyards", "badges", "keychains", "bags", "stickers"],
        },
      ]}
      sections={[
        {
          title: "Built around your deadline",
          body: "Events do not wait, so event orders are planned around a confirmed date. We work back from the event day to schedule design approval, production and delivery, and flag timing issues before they become problems.",
        },
        {
          title: "Crew and attendee pieces",
          body: "Separate the crew order from the giveaway order. Crews get durable, matching apparel and lanyards. Attendees get volume-friendly giveaways like wristbands, bottles and stickers. Both can share one design system.",
        },
        {
          title: "Wristbands that manage access",
          body: "For ticketed events, silicone and tyvek wristbands double as entry passes and branded merch. Printed bands can carry codes or numbers for simple access management.",
        },
      ]}
      useCases={[
        "Campus fests and concerts",
        "Conferences and seminars",
        "Corporate launches",
        "Sports tournaments",
        "Campaigns and rallies",
        "Exhibitions and fairs",
        "Crew and volunteer kits",
      ]}
      crossLinks={[
        { name: "Custom Merchandise", href: "/custom/merchandise", description: "The full product range." },
        { name: "University Merchandise", href: "/custom/university-merchandise", description: "Batch shirts and campus kits." },
        { name: "Corporate Merchandise", href: "/custom/corporate-merchandise", description: "Office and corporate branding." },
      ]}
      guides={[
        { slug: "custom-merchandise-ideas-for-corporate-events", title: "Custom Merchandise Ideas for Corporate Events" },
        { slug: "custom-merchandise-ideas-for-university-clubs", title: "Custom Merchandise Ideas for University Clubs" },
      ]}
      ctaProduct="Event Merchandise"
    />
  );
}