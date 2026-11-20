# The Berry Coworks — Website

<img width="1895" height="916" alt="image" src="https://github.com/user-attachments/assets/03fba91a-19c6-479b-a341-a806e99f1eec" />

A multi-page coworking and managed-office website for The Berry Coworks, built with Next.js and React. The site helps individuals, teams and businesses discover workspaces across Delhi NCR, explore membership options and connect with the booking and enquiry channels.

**Website:** [theberrycoworks.com](https://theberrycoworks.com)

## Features

- Responsive, editorial-style interface with motion, smooth scrolling and workspace photography.
- Dedicated pages for solutions, locations, enterprise offices, company information and contact.
- Statically generated location pages for Barakhamba, Jhandewalan and Noida Sector 142, with separate upcoming-location listings.
- Workspace galleries, location information, maps and plan details.
- External meeting-room and day-pass booking flows, including a multi-visit plan picker.
- Contact enquiries via Web3Forms, with telephone and WhatsApp contact options.
- Privacy policy, terms of service, page metadata and custom 404 page.

## Technology

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, JavaScript |
| Styling | Tailwind CSS 4, CSS, Manrope and Inter |
| Motion | Framer Motion, Lenis |
| Icons | React Icons |
| Deployment | Static export, Firebase Hosting configuration |

## Getting started

Use Node.js 22 LTS (recommended) and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # Run ESLint
npm run build   # Generate the static production site in out/
```

To preview the exported site locally, serve `out/` using a static HTTP server, for example `npx serve out`. The project uses `output: 'export'`, so `next start` is not the production serving method.

Google Fonts are fetched during the build; internet access is required unless the fonts are configured locally. The booking platform, maps and contact form use external services. Configure an authorized Web3Forms integration before accepting real submissions; do not submit test enquiries to a live business without permission.

## Project structure

```text
src/
  app/                  # App Router layouts, routes and metadata
    locations/[id]/     # Generated location detail pages
    legal/              # Privacy policy and terms
  components/           # Shared UI and page sections
  data/                 # Site, booking, location and content configuration
public/
  images/               # Website photography and brand assets
next.config.mjs         # Static export configuration
firebase.json           # Static hosting configuration
```

## Deployment

Run `npm run build` and publish the generated `out/` directory to a static web host. The export uses trailing-slash routes so each page has its own `index.html`. The included Firebase Hosting configuration also points to `out/`; use only an authorized hosting project and account.

## Rights and attribution

This repository documents a website implementation for The Berry Coworks. Brand names, logos, photography and third-party materials may be subject to separate rights. Public visibility does not grant a licence to reuse these materials or the source code. No open-source licence is asserted here; obtain the appropriate permission before reuse or redistribution.
