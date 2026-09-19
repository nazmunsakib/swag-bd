import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalShell } from "@/components/ui/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SWAG.bd collects, uses and protects your data.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <LegalShell title="Privacy Policy" updated="September 2026">
        <h2>What we collect</h2>
        <p>
          We collect the minimum needed to run the platform: analytics that tell us which
          pages are read, and any details you choose to share when you contact us or
          subscribe to the newsletter.
        </p>
        <h2>How we use it</h2>
        <p>
          We use analytics to improve content, and contact details only to reply to you.
          We do not sell personal data to anyone, ever.
        </p>
        <h2>Cookies</h2>
        <p>
          We use a small set of functional cookies, including ones that remember your recent
          searches on your own device.
        </p>
        <h2>Your choices</h2>
        <p>
          You can unsubscribe from any email at any time, and you can clear your stored
          search history through your browser settings.
        </p>
      </LegalShell>
    </>
  );
}