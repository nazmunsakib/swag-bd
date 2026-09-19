import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalShell } from "@/components/ui/LegalShell";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms that govern your use of SWAG.bd.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Terms", href: "/terms" },
        ]}
      />
      <LegalShell title="Terms of Use" updated="September 2026">
        <h2>Using the platform</h2>
        <p>
          SWAG.bd is a style and lifestyle platform. The guides and product selections are
          editorial in nature and are provided as information, not as professional advice.
        </p>
        <h2>Content</h2>
        <p>
          All editorial content, design and code belong to SWAG.bd unless stated otherwise.
          You may share links freely. Republishing our articles in full requires written
          permission.
        </p>
        <h2>Products and orders</h2>
        <p>
          Product listings are curated selections from our catalogue. Prices are in
          Bangladeshi Taka. Orders placed through SWAG.bd Custom are subject to a written
          quote agreed before production begins.
        </p>
        <h2>Liability</h2>
        <p>
          We take reasonable care with accuracy, but we cannot guarantee every guide is
          error free. We are not liable for decisions made based on editorial content.
        </p>
      </LegalShell>
    </>
  );
}