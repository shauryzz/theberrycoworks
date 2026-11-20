// Content for /for-enterprises.
// The shared five-step process is defined in data/solutions.js as PROCESS.

export const ENTERPRISE_HERO = {
  // "looking for an office that's built for your business?"
  headline: { lead: "Looking for an office that's built for your", accent: "business?" },

  // Render the introductory labels as separate paragraphs.
  introLead:  "Introducing",
  introBrand: "managed spaces by The Berry Coworks",
  introBody:
    "A one-stop solution that plans your space, brings good design into it, and makes the everyday experience of working there better for your team.",
};

export const ENTERPRISE_INTRO = {
  // "an office, built and run for you."
  heading: { lead: "An office, built and", accent: "run for you." },
  body:
    "For businesses that need more than a desk, we build and manage the entire office ourselves. Our team sources the space, designs it around your brand, builds it out, and keeps it running once your team has moved in, so setting up an office is never something you have to manage on your own.",
};

// Hero image band, matching the treatment on the Solutions page.
export const ENTERPRISE_HERO_IMAGE =
  "/images/noida-cafe.webp";

// Managed-office showcase.
export const MANAGED_OFFICE = {
  // "an office that runs itself."
  heading: { lead: "An office that", accent: "runs itself." },
  body:
    "Our team designs, builds and runs a workspace built around your requirements, so you can focus on the work. Available at Noida.",
  image:
    "/images/noida-private-cabin.webp",
  points: [
    {
      title: "End-to-end setup",
      desc:  "We design, build, furnish and brand the space, then hand over the keys once you've signed off.",
    },
    {
      title: "Built around your team",
      desc:  "Every choice, from furniture to conference rooms, is shaped around how your team works.",
    },
    {
      title: "One team, start to finish",
      desc:  "Our in-house team handles sourcing, design, construction and day-to-day operations.",
    },
    {
      title: "Community access",
      desc:  "Plug into 500+ members and a calendar of events worth knowing about.",
    },
  ],
};

export const SHAPED_AROUND = {
  heading: { lead: "Shaped around your", accent: "team." },
  body:
    "From a furnished suite to a fully branded office, we build around your team's size and how you like to work, so it's ready the day you move in.",
};

// Interactive photo panels expand on hover; no visible captions.
export const SPACE_GALLERY = [
  { src: "/images/jhandewalan-private-cabin.webp", alt: "Furnished private suite" },
  { src: "/images/desks-rows.webp", alt: "Open team floor"         },
  { src: "/images/meeting-mural.webp", alt: "Conference room"         },
  { src: "/images/lounge-ottoman.webp", alt: "Branded office floor"    },
];

// Heading for the five step block. The steps themselves come from PROCESS
// in data/solutions.js.
export const PROCESS_HEADING = { lead: "Start to", accent: "move-in." };

export const ENTERPRISE_CTA = {
  // "tell us what you need."
  heading: { lead: "Tell us what", accent: "you need." },
  body:
    "A 30-minute call is usually enough for us to point you at the right option. Book a tour, or drop us a message.",
  primary:   { label: "Get in touch", href: "/contact" },
  secondary: { label: "WhatsApp us" },   // href built from booking.js
};
