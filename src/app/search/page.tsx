import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SearchResults } from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Search",
  description: "Search style guides, trends and curated products on SWAG.bd.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/search" },
};

export default function SearchPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Search", href: "/search" },
        ]}
      />

      <SearchResults />
    </>
  );
}
