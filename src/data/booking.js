// Booking and action URLs used throughout the site.
// DOS provides self-service booking for meeting rooms, day passes and multi-visit plans.
// Enquiry-only products route to /contact.
// Plan keys must match the IDs in data/plans.js.

const BOOKING_PLATFORM = "https://booking.theberrycoworks.com";

export const BOOKING = {
  // ── Generic CTAs ────────────────────────────────────────────────────────
  // Free tours route to the contact form.
  tour: "/contact",

  // ── Per-plan × per-location deep links ──────────────────────────────────
  // Keys must match data/plans.js. Null values route to the contact form.
  // Private Office and Dedicated Desk are enquiry-only.
  plans: {
    "private-office": {
      barakhamba:         null,   // Enquiry-only
      jhandewalan:        null,   // Enquiry-only
      "noida-sector-142": null,   // Enquiry-only
    },
    "dedicated-desk": {
      barakhamba:         null,   // Not offered at Barakhamba (no coworking floor)
      jhandewalan:        null,   // Enquiry-only
      "noida-sector-142": null,   // Enquiry-only
    },
  },

  // Meeting rooms: the site-wide link opens the campus and room picker.
    meetingRoom: {
    all: `${BOOKING_PLATFORM}/meeting-rooms/berry`,

    // Location pages link directly to their campus picker.
    barakhamba: null, // Not offered at Barakhamba
    jhandewalan: `${BOOKING_PLATFORM}/meeting-rooms/berry?campus_id=81`,
    "noida-sector-142": `${BOOKING_PLATFORM}/meeting-rooms/berry?campus_id=80`,
  },

  // ── Virtual Office — enquiry-only, routes to /contact ───────────────────
  virtualOffice: {
    barakhamba:   null,   // Enquiry-only
    jhandewalan: null,   // Enquiry-only
    "noida-sector-142":       null,   // Enquiry-only
  },

  // Day-pass bundles used by the booking picker. An empty array means unavailable.
  // Monthly passes use a consistent display label.
  dayPassBundles: {
    barakhamba: [],  // Not offered at Barakhamba
    jhandewalan: [
      { id: "single",   label: "Day Pass",       sub: "1 visit",    url: `${BOOKING_PLATFORM}/day-pass/81/90` },
      { id: "visits10", label: "10-Visit Pack",  sub: "10 visits",  url: `${BOOKING_PLATFORM}/day-pass/81/92` },
      { id: "visits15", label: "15-Visit Pack",  sub: "15 visits",  url: `${BOOKING_PLATFORM}/day-pass/81/93` },
      { id: "monthly",  label: "Monthly Pass",   sub: "30 days",    url: `${BOOKING_PLATFORM}/day-pass/81/91` },
      { id: "visits45", label: "45-Visit Pack",  sub: "45 visits",  url: `${BOOKING_PLATFORM}/day-pass/81/94` },
    ],
    "noida-sector-142": [
      { id: "single",   label: "Day Pass",       sub: "1 visit",    url: `${BOOKING_PLATFORM}/day-pass/80/85` },
      { id: "visits10", label: "10-Visit Pack",  sub: "10 visits",  url: `${BOOKING_PLATFORM}/day-pass/80/87` },
      { id: "visits15", label: "15-Visit Pack",  sub: "15 visits",  url: `${BOOKING_PLATFORM}/day-pass/80/88` },
      { id: "monthly",  label: "Monthly Pass",   sub: "30 days",    url: `${BOOKING_PLATFORM}/day-pass/80/86` },
      { id: "visits45", label: "45-Visit Pack",  sub: "45 visits",  url: `${BOOKING_PLATFORM}/day-pass/80/89` },
    ],
  },

  // WhatsApp. Keep this URL in sync with SITE.whatsappHref in data/site.js.
  whatsapp: "https://wa.me/917290811818",
  whatsappMessage: "Hi! I'd like to know more about The Berry Coworks.",

  // App store links.
  appStore:  "https://apps.apple.com/app/the-berry-coworks",                          // PLACEHOLDER
  playStore: "https://play.google.com/store/apps/details?id=com.theberrycoworks.app", // PLACEHOLDER
};

// Helper: returns the right booking URL for a plan + location combo.
// Returns "/contact" when the plan is unavailable at that location (null)
// or when the plan itself has no direct booking (e.g. Managed Office).
export function getPlanBookingUrl(planId, locationId) {
  return BOOKING.plans[planId]?.[locationId] || "/contact";
}

// Helper: returns true if the URL is external (booking platform / WhatsApp /
// etc.) vs internal (/contact). Used to decide target="_blank" on links.
export function isExternalBooking(url) {
  return typeof url === "string" && url.startsWith("http");
}

// Helper: builds a WhatsApp link with optional pre-filled message.
export function whatsappLink(customMessage) {
  const msg = encodeURIComponent(customMessage || BOOKING.whatsappMessage);
  return `${BOOKING.whatsapp}?text=${msg}`;
}