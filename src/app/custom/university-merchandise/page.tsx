import type { Metadata } from "next";
import { MerchandiseHub } from "@/components/custom/MerchandiseHub";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "University Merchandise in Bangladesh",
  description:
    "Custom university merchandise in Bangladesh. Batch T-shirts, department and club hoodies, caps, mugs, water bottles, keychains, tote bags, wristbands and lanyards for students, clubs and departments.",
  alternates: { canonical: "/custom/university-merchandise" },
  ...ogMeta({
    title: "University Merchandise in Bangladesh | SWAG.bd Custom",
    description: "Batch shirts, club hoodies and campus merchandise for universities in Bangladesh.",
    path: "/custom/university-merchandise",
    image: imageFor("uni")!,
  }),
};

export default function UniversityMerchandisePage() {
  return (
    <MerchandiseHub
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "SWAG.bd Custom", href: "/custom" },
        { name: "University Merchandise", href: "/custom/university-merchandise" },
      ]}
      label="University Merchandise in Bangladesh"
      heading="Batch shirts, club hoodies, campus identity."
      copy="Custom merchandise for batches, departments, clubs and fests. Heavyweight pieces students actually wear, planned around a student budget."
      image={imageFor("uni")!}
      groups={[
        {
          title: "Batch and club apparel",
          description: "Batch shirts, club hoodies, department tees and caps.",
          productSlugs: ["t-shirts", "hoodies", "caps"],
        },
        {
          title: "Campus kits",
          description: "Bottles, mugs, bags and stationery for orientation and kits.",
          productSlugs: ["water-bottles", "mugs", "bags", "stationery"],
        },
        {
          title: "Fest and giveaway pieces",
          description: "Wristbands, keychains, lanyards, badges and stickers.",
          productSlugs: ["wristbands", "keychains", "lanyards", "badges", "stickers"],
        },
      ]}
      sections={[
        {
          title: "Identity a batch can wear",
          body: "The batch T-shirt is where university identity starts. One clean design, heavyweight cotton and a print that survives the year. From there, hoodies, caps and kits extend the identity without reinventing it.",
        },
        {
          title: "Planned around a student budget",
          body: "University orders work on real budgets, so we plan the mix honestly: one strong piece per member, and low-cost giveaways for events. Volume is the lever, and we quote clearly at every step.",
        },
        {
          title: "Clubs, departments and fests",
          body: "One design system can carry a club across tees, hoodies, wristbands and stickers, and a fest across crew kits and giveaways. Consistent marks read as a real identity, not a one-off print.",
        },
      ]}
      useCases={[
        "Batch and department shirts",
        "Club and society hoodies",
        "Campus fest merchandise",
        "Orientation and welcome kits",
        "Inter-college tournament teams",
        "Student council branding",
        "Campus giveaways",
      ]}
      crossLinks={[
        { name: "Custom Merchandise", href: "/custom/merchandise", description: "The full product range." },
        { name: "Event Merchandise", href: "/custom/event-merchandise", description: "Fests, concerts and tournaments." },
        { name: "Custom Printing", href: "/custom/printing", description: "The printing methods behind the range." },
      ]}
      guides={[
        { slug: "custom-merchandise-ideas-for-university-clubs", title: "Custom Merchandise Ideas for University Clubs" },
        { slug: "how-to-choose-the-right-custom-water-bottle", title: "How to Choose the Right Custom Water Bottle" },
      ]}
      ctaProduct="University Merchandise"
    />
  );
}