// Priced, enquiry-only workspace products.
// `priceUnit` defines the billing unit; a null price means unavailable.
// Optional `pricePrefix` is rendered before the price.
// Day passes and meeting rooms are defined in data/solutions.js and booked through DOS.
export const PLANS = [
  {
    id: "private-office",
    name: "Private Office",
    alias: "Also called a private cabin",
    tagline: "A closed, furnished office for your team",
    description:
      "A closed, furnished office built for privacy and comfort, ready for your team to move straight in.",
    image: "/images/private-cabin-window.webp",
    availableAt: ["barakhamba", "jhandewalan", "noida-sector-142"],
    priceUnit: "per seat + taxes",
    pricing: {
      barakhamba:   18500,
      jhandewalan: 14000,
      "noida-sector-142":        9000,
    },
    badge: null,
  },
  {
    id: "dedicated-desk",
    name: "Dedicated Desk",
    alias: "Open seat, hot desk and dedicated desk all describe the same thing here",
    tagline: "A place on the floor that is yours",
    description:
      "A desk on our coworking floor, whether you need it for a single day, want the same one held for you, or just want the flexibility of moving around. A place on the floor that is yours whenever you need it.",
    image: "/images/dedicated-desks.webp",
    availableAt: ["jhandewalan", "noida-sector-142"],   // Barakhamba: coworking not offered
    priceUnit: "per month + taxes",
    pricePrefix: "starting at",   // Optional price label
    pricing: {
      barakhamba:   null,                     // not offered
      jhandewalan: 8500,
      "noida-sector-142":       5500,
    },
    badge: "Most Popular",
  },
];
