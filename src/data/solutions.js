// Content for /solutions.
// Priced enquiry-only products live in data/plans.js.
// DOS supplies live prices for self-service bookings; avoid duplicating them here.
// ──────────────────────────────────────────────────────────────────────────

export const SOLUTIONS_HERO = {
  headline: { lead: "Space for the way", accent: "you work." },
  subhead:
    "Private offices, coworking space, and the day-to-day services that come with running a business, sorted by what you need.",
  intro:
    "We build spaces around how your team actually works, not a fixed idea of what a workspace should look like. That means room to move faster some weeks, slower others, and a setup that keeps up either way.",
  // Hero image displayed beside the copy.
  image: "/images/cafe-plants.webp",
};

// Section sub-labels displayed in italic.
export const SECTION_LABELS = {
  officeSpaces:        "Private cabins",
  coworkingSpaces:     "Flexible workspace.",
  additionalSolutions: "Services on top.",
  spaceIncludes:       "The basics.",
};

// ── Non-priced coworking offerings, booked through DOS ─────────────────
// `action: "picker"` opens the day-pass modal; `action: "link"` opens DOS.
export const COWORKING_EXTRAS = [
  {
    id: "day-pass",
    name: "Day Pass",
    alias: "Single day or a bundle",
    desc:
      "A single day's access to the space, or a bundle if you're in and out more often.",
    availableNote: "Jhandewalan and Noida",
    action: "picker",
    ctaLabel: "See day passes",
    image: "/images/open-seating.webp",
  },
  {
    id: "meeting-rooms",
    name: "Meeting Rooms",
    alias: "By the hour or in a bundle",
    desc:
      "Book by the hour or in a bundle, in a room sized and equipped for whatever the meeting calls for. No membership needed.",
    availableNote: "All three locations",
    action: "link",
    ctaLabel: "Book a room",
    image: "/images/meeting-window.webp",
  },
];

// ── Additional solutions — services that sit on top of a workspace ────────
export const ADDITIONAL_SOLUTIONS = [
  {
    id: "events",
    name: "Events",
    desc:
      "Host your next event at The Berry Coworks. Whether it's a workshop, a brand activation, a team celebration or a panel talk, we have a space equipped to make it memorable. Pick from a mix of room sizes and layouts, and lean on our team for the on-ground support that keeps the day running the way you planned it.",
    href: "/contact",
    ctaLabel: "Enquire",
    image: "/images/people-booth.webp",
  },
  {
    id: "virtual-office",
    name: "Virtual Office",
    desc:
      "A professional business address for company registration and correspondence, handled by our team, so your business has a presence at a prime location even while you work from wherever suits you.",
    href: "/contact",
    ctaLabel: "Get an address",
    image: "/images/barakhamba-hero.webp",
  },
  {
    id: "advertising",
    name: "Advertising",
    desc:
      "Put your brand in front of a community of engaged professionals across every centre, through the everyday spaces our members pass through. Talk to us about current formats and availability.",
    href: "/contact",
    ctaLabel: "Talk to us",
    image: "/images/lounge-berry.webp",
  },
];

// Grouped workspace inclusions.
export const SPACE_INCLUDES = [
  {
    group: "Work essentials",
    items: [
      "High-speed and secure internet",
      "Power backup on every floor",
      "Ergonomic setups",
      "Phone booths",
      "Bookable meeting rooms",
      "Business printers, scanning and courier handling",
    ],
  },
  {
    group: "Service and upkeep",
    items: [
      "Daily professional housekeeping",
      "Staffed front desk",
      "Security",
      "Mail handling",
      "Air conditioning and climate control",
    ],
  },
  {
    group: "Comfort and lifestyle",
    items: [
      "Pantry stocked with coffee, tea and snacks",
      "Comfortable lounge areas",
    ],
  },
  {
    group: "Community",
    items: [
      "A dedicated community manager",
      "A packed calendar of community events",
      "App access to book, connect and stay updated",
    ],
  },
];

// Pricing statement preceding the inclusions section.
export const PRICING_BREAK = {
  headline: { lead: "One transparent price.", accent: "Everything included." },
  body:
    "What you see is what you pay. No setup fees, no hidden charges, no surprise invoices. Every membership comes with the basics built in.",
};

export const SOLUTIONS_CLOSING = {
  headline: { lead: "Not sure which", accent: "plan fits?" },
  body:
    "Book a free 15-minute tour. We'll show you the spaces, answer questions, and help you pick the right plan. And we'll point you to the right one.",
  ctaLabel: "Talk to our team",
};

// Shared five-step process for /for-enterprises.
export const PROCESS = [
  { step: "01", title: "Consult",  desc: "We start with a call to understand your team's size, timeline and budget, and how you like to work." },
  { step: "02", title: "Design",   desc: "We lay out a space around your workflow and brand, and walk you through it before anything gets built." },
  { step: "03", title: "Build",    desc: "We handle the fit-out ourselves, from furniture to branding, and manage the process from start to finish." },
  { step: "04", title: "Move in",  desc: "You walk into a finished space on day one, ready to start working right away." },
  { step: "05", title: "Grow",     desc: "As your business changes, we stay involved, working alongside you to figure out what the space needs next." },
];
