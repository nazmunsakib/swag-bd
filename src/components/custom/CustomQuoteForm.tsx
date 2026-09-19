"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/business";
import { track } from "@/lib/tracking";

export function CustomQuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [detail, setDetail] = useState("");
  const [done, setDone] = useState(false);

  const compose = () => {
    const lines = [
      "Hi SWAG.bd, I'd like to request a quote.",
      type ? `Product: ${type}` : null,
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      detail ? `Details: ${detail}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  };

  return (
    <div>
      {done ? (
        <div className="border border-line bg-paper p-8">
          <p className="label-editorial-accent mb-3">Quote request ready</p>
          <p className="font-display text-[18px] font-semibold text-ink">
            Send it on WhatsApp and the team will reply within two working days.
          </p>
          <a
            href={whatsappLink(compose())}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-label text-paper transition-colors hover:bg-ink-soft"
          >
            Continue on WhatsApp
          </a>
        </div>
      ) : (
        <form
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            track("quote_form_submitted", { product: type });
            setDone(true);
            window.open(whatsappLink(compose()), "_blank", "noopener");
          }}
        >
          <div className="border-b border-line pb-2">
            <label htmlFor="quote-name" className="label-editorial mb-2 block">
              Your name
            </label>
            <input
              id="quote-name"
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full name"
              className="w-full bg-transparent text-[15px] font-medium text-ink outline-none placeholder:text-stone/70"
            />
          </div>
          <div className="border-b border-line pb-2">
            <label htmlFor="quote-email" className="label-editorial mb-2 block">
              WhatsApp number
            </label>
            <input
              id="quote-email"
              required
              type="tel"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="+880 1XXX-XXXXXX"
              className="w-full bg-transparent text-[15px] font-medium text-ink outline-none placeholder:text-stone/70"
            />
          </div>
          <div className="border-b border-line pb-2 sm:col-span-2">
            <label htmlFor="quote-type" className="label-editorial mb-2 block">
              What do you need?
            </label>
            <select
              id="quote-type"
              required
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="w-full cursor-pointer bg-transparent text-[15px] font-medium text-ink outline-none [&>option]:text-ink"
            >
              <option value="" disabled>
                Select a product
              </option>
              <option>Custom T-Shirts</option>
              <option>Custom Hoodies</option>
              <option>Custom Caps</option>
              <option>Custom Mugs</option>
              <option>Custom Bags</option>
              <option>Custom Wristbands</option>
              <option>Custom Merchandise</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="border-b border-line pb-2 sm:col-span-2">
            <label htmlFor="quote-detail" className="label-editorial mb-2 block">
              Tell us more
            </label>
            <textarea
              id="quote-detail"
              rows={4}
              value={detail}
              onChange={(event) => setDetail(event.target.value)}
              placeholder="Quantity, colours, deadline, budget..."
              className="w-full resize-none bg-transparent text-[15px] font-medium text-ink outline-none placeholder:text-stone/70"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-clay px-8 py-4 text-[12px] font-semibold uppercase tracking-label text-white transition-colors hover:bg-clay-deep"
            >
              Request Quote
            </button>
            <p className="mt-3 text-[12px] leading-relaxed text-mist">
              Submitting opens WhatsApp with your request pre-filled. No payment, no
              commitment.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}