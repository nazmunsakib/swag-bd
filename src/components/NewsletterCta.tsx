"use client";

import { useState } from "react";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="container-site">
      <div className="grid gap-10 border border-line bg-paper-deep px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="label-editorial-accent mb-3">The Edit</p>
          <h2 className="font-display text-heading font-semibold text-ink">
            A style brief, once a week.
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
            New guides, trends and product picks for Bangladesh. No spam, one short email
            a week.
          </p>
        </div>
        <div>
          {done ? (
            <p className="border border-line bg-paper px-6 py-5 font-display text-[16px] font-semibold text-ink">
              Done. Watch your inbox.
            </p>
          ) : (
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full border border-line bg-paper px-4 py-3.5 text-[14px] text-ink outline-none transition-colors focus:border-clay"
              />
              <button
                type="submit"
                className="shrink-0 bg-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-label text-paper transition-colors hover:bg-ink-soft"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}