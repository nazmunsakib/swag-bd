export type LeadEvent =
  | "quote_button_clicked"
  | "ask_on_whatsapp_click"
  | "quote_form_started"
  | "quote_form_submitted"
  | "product_viewed";

export type LeadEventPayload = {
  product?: string;
  category?: string;
  page?: string;
  [key: string]: string | number | boolean | undefined;
};

const EVENT_NAME = "swagbd:lead";

// Lightweight lead tracking stub, ready for Google Analytics, GTM, Meta Pixel
// or server-side tracking. Wire the real providers into `track` later without
// changing call sites. No analytics libraries are loaded today.
export function track(event: LeadEvent, payload: LeadEventPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, url: window.location.href, ts: Date.now() };

  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail }));

  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push(detail);
  }
}

export function trackClick(
  event: LeadEvent,
  element: HTMLElement,
  payload: LeadEventPayload = {}
) {
  track(event, {
    ...payload,
    button_text: element.textContent?.trim().replace(/\s+/g, " ") ?? "",
    button_id: element.id || element.dataset.trackingId || "",
    button_classes:
      typeof element.className === "string" ? element.className : "",
    page_location: window.location.href,
  });
}
