"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/data/business";
import { track } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/Icons";

type Props = {
  productOptions: string[];
  initialProduct?: string;
};

const APPAREL = ["Custom T-Shirts", "Custom Hoodies", "Custom Caps"];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "Mixed"];

const COLORS = [
  "Off-white",
  "Sand",
  "Olive",
  "Charcoal",
  "Black",
  "Navy",
  "Burgundy",
  "Other",
];

const DEADLINES = [
  "As soon as possible",
  "Within 1 week",
  "Within 2 weeks",
  "Within a month",
  "More than a month",
];

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-b border-line pb-3 ${className}`}>
      <label className="label-editorial mb-2 block">{label}</label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full bg-transparent text-[15px] font-medium text-ink outline-none placeholder:text-stone/70";

const selectClasses =
  "w-full cursor-pointer bg-transparent text-[15px] font-medium text-ink outline-none [&>option]:text-ink";

export function QuoteForm({ productOptions, initialProduct }: Props) {
  const [product, setProduct] = useState(initialProduct ?? "");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [customization, setCustomization] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isApparel = APPAREL.includes(product);

  const isValid = useMemo(() => {
    return name.trim().length > 1 && whatsapp.trim().length >= 8 && product;
  }, [name, whatsapp, product]);

  const composeMessage = () => {
    const lines = [
      "Hi SWAG.bd, I'd like to request a quote.",
      `Product: ${product}`,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      email ? `Email: ${email}` : null,
      quantity ? `Quantity: ${quantity}` : null,
      isApparel && size ? `Preferred size: ${size}` : null,
      isApparel && color ? `Preferred colour: ${color}` : null,
      customization ? `Customization: ${customization}` : null,
      file ? `Design: attached (${file})` : null,
      deadline ? `Deadline: ${deadline}` : null,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValid) return;
    track("quote_form_submitted", { product, quantity });
    setSubmitted(true);
    window.open(whatsappLink(composeMessage()), "_blank", "noopener");
  };

  if (submitted) {
    return (
      <div className="border border-line bg-paper p-8 sm:p-10">
        <p className="label-editorial-accent mb-4">Quote request ready</p>
        <h3 className="font-display text-[24px] font-semibold text-ink">
          Your request is on the way to WhatsApp.
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          We opened a chat with your details pre-filled. Send it, and the team will reply
          with a quotation, usually within a working day.
        </p>
        <a
          href={whatsappLink(composeMessage())}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-label text-paper transition-colors hover:bg-ink-soft"
        >
          <WhatsAppIcon className="h-4 w-4" aria-hidden />
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={() => track("quote_form_started", { product })}
      className="space-y-6"
    >
      <div className="border-t border-line">
        <Field label="What do you need?">
          <select
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            required
            className={selectClasses}
          >
            <option value="" disabled>
              Select a product
            </option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Your name">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          type="text"
          placeholder="Full name"
          className={inputClasses}
        />
      </Field>

      <Field label="WhatsApp number">
        <input
          value={whatsapp}
          onChange={(event) => setWhatsapp(event.target.value)}
          required
          type="tel"
          placeholder="+880 1XXX-XXXXXX"
          className={inputClasses}
        />
        <p className="mt-1.5 text-[12px] text-mist">
          This is how we will send your quotation.
        </p>
      </Field>

      <Field label="Email (optional)">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
        />
      </Field>

      <Field label="Quantity">
        <input
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          type="text"
          inputMode="numeric"
          placeholder="How many pieces?"
          className={inputClasses}
        />
      </Field>

      {isApparel ? (
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-8">
          <Field label="Preferred size">
            <select
              value={size}
              onChange={(event) => setSize(event.target.value)}
              className={selectClasses}
            >
              <option value="" disabled>
                Select a size
              </option>
              {SIZES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Preferred colour">
            <select
              value={color}
              onChange={(event) => setColor(event.target.value)}
              className={selectClasses}
            >
              <option value="" disabled>
                Select a colour
              </option>
              {COLORS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>
      ) : null}

      <Field label="Customization">
        <textarea
          value={customization}
          onChange={(event) => setCustomization(event.target.value)}
          rows={4}
          placeholder="Describe your design, logo, text or idea..."
          className={`${inputClasses} resize-none`}
        />
      </Field>

      <Field label="Upload design (optional)">
        <label className="flex cursor-pointer items-center gap-3 border border-dashed border-line bg-paper px-4 py-3 transition-colors hover:border-ink/40">
          <span className="text-[12px] font-semibold uppercase tracking-label text-ink">
            Choose file
          </span>
          <span className="truncate text-[13px] text-mist">{file || "PNG, JPG, AI or PDF"}</span>
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.ai,.pdf,.svg"
            className="sr-only"
            onChange={(event) => setFile(event.target.files?.[0]?.name ?? "")}
          />
        </label>
      </Field>

      <Field label="Deadline (optional)">
        <select
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
          className={selectClasses}
        >
          <option value="" disabled>
            When do you need it?
          </option>
          {DEADLINES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Additional notes">
        <input
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          type="text"
          placeholder="Anything else we should know?"
          className={inputClasses}
        />
      </Field>

      <div className="pt-4">
        <button
          type="submit"
          disabled={!isValid}
          className="inline-flex w-full items-center justify-center gap-2 bg-clay px-8 py-4 text-[12px] font-semibold uppercase tracking-label text-white transition-colors hover:bg-clay-deep disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          Request Quote
        </button>
        <p className="mt-3 text-[12px] leading-relaxed text-mist">
          Submitting opens WhatsApp with your request pre-filled. No payment, no commitment.
        </p>
      </div>
    </form>
  );
}