import type { Metadata } from "next";
import { MerchandiseHub } from "@/components/custom/MerchandiseHub";
import { imageFor } from "@/data/images";
import { ogMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Printing in Bangladesh",
  description:
    "Custom printing in Bangladesh across T-shirts, hoodies, polo shirts, caps, mugs, water bottles, tote bags, keychains, notebooks and promotional merchandise. Request a quotation on WhatsApp.",
  alternates: { canonical: "/custom/printing" },
  ...ogMeta({
    title: "Custom Printing in Bangladesh | SWAG.bd Custom",
    description: "Custom printing across apparel, drinkware, bags, accessories and stationery in Bangladesh.",
    path: "/custom/printing",
    image: imageFor("print")!,
  }),
};

export default function PrintingPage() {
  return (
    <MerchandiseHub
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "SWAG.bd Custom", href: "/custom" },
        { name: "Custom Printing", href: "/custom/printing" },
      ]}
      label="Custom Printing in Bangladesh"
      heading="Print your mark on anything."
      copy="Custom printing across apparel, drinkware, bags, accessories and stationery. One studio, one quality standard, and a quotation for your exact requirements."
      image={imageFor("print")!}
      groups={[
        {
          title: "Apparel printing",
          description: "T-shirts, hoodies, polos and jerseys.",
          productSlugs: ["t-shirts", "hoodies", "polo-shirts", "jerseys"],
        },
        {
          title: "Drinkware printing",
          description: "Mugs, water bottles and tumblers.",
          productSlugs: ["mugs", "water-bottles", "tumblers"],
        },
        {
          title: "Accessories printing",
          description: "Caps, bags, keychains and wristbands.",
          productSlugs: ["caps", "bags", "keychains", "wristbands"],
        },
        {
          title: "Stationery and labels",
          description: "Notebooks, diaries, pens and stickers.",
          productSlugs: ["stationery", "stickers"],
        },
      ]}
      sections={[
        {
          title: "How printing works here",
          body: "Every order starts with your artwork, logo or idea. We confirm the printing method that suits the product and the design, show you a digital preview, and only start production after you approve it.",
        },
        {
          title: "Print methods by product",
          body: "The right method depends on the product and the artwork. We confirm the method during the quote so you know exactly what is being used and why. Screen printing suits solid designs in volume, and direct-to-garment suits full-colour artwork.",
        },
        {
          title: "Your artwork, prepared properly",
          body: "Send PNG, JPG, AI or PDF. If you only have an idea, describe it and we will help shape it. For volume runs we prepare the artwork files so the final print is sharp across every piece.",
        },
      ]}
      useCases={[
        "T-shirt and hoodie printing",
        "Polo and jersey printing",
        "Mug and water bottle printing",
        "Cap and tote bag printing",
        "Keychain and wristband printing",
        "Notebook and pen branding",
        "Promotional merchandise printing",
      ]}
      crossLinks={[
        { name: "Custom Merchandise", href: "/custom/merchandise", description: "The full product range." },
        { name: "Corporate Merchandise", href: "/custom/corporate-merchandise", description: "Uniforms and office branding." },
        { name: "Event Merchandise", href: "/custom/event-merchandise", description: "Printed pieces for events." },
      ]}
      guides={[
        { slug: "how-to-choose-the-right-custom-water-bottle", title: "How to Choose the Right Custom Water Bottle" },
        { slug: "custom-merchandise-ideas-for-corporate-events", title: "Custom Merchandise Ideas for Corporate Events" },
      ]}
      ctaProduct="Custom Printing"
    />
  );
}