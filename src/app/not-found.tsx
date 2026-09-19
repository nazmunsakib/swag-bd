import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="label-editorial-accent mb-5">404</p>
      <h1 className="font-display text-display-md font-extrabold text-ink">
        This page walked off the set.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
        The link may be old or the page may have moved. Try a category below or head back
        home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-label text-paper transition-colors hover:bg-ink-soft"
        >
          Back home
        </Link>
        <Link
          href="/guides"
          className="border border-ink/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Browse guides
        </Link>
      </div>
    </section>
  );
}