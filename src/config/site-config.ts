/**
 * Centralized site configuration.
 * Update contact details, domain, and business info here — every page and
 * structured-data component reads from this single source of truth.
 *
 * Contact info, address, phone numbers, email, founding year, guarantee
 * language, and Barre Guild affiliation below are sourced directly from
 * the previous normandeaumemorials.com site (home, services,
 * purchasing-an-engraving-or-monument, and contact-us pages). Remaining
 * TODOs are for details that site did not provide. See CONTENT_TODO.md.
 */

export const siteConfig = {
  name: "Normandeau Memorials",
  shortName: "Normandeau Memorials",
  tagline: "Memorial Craftsmanship in Western Massachusetts",
  description:
    "Family owned since 1937, Normandeau Memorials helps families throughout West Springfield and Western Massachusetts create meaningful, enduring granite memorials with thoughtful guidance and careful craftsmanship.",

  // Family-owned since this year — confirmed on the previous site's homepage.
  familyOwnedSince: 1937,

  // Guarantee language as stated on the previous site's Services page.
  guarantee: "Our monuments are fully guaranteed against any defect in material and workmanship.",

  // TODO(content): Confirm production domain before launch.
  url: "https://www.normandeaumemorials.com",

  locale: "en_US",

  // Centralized contact information.
  contact: {
    phoneDisplay: "(413) 734-0168",
    phoneHref: "tel:+14137340168",
    // Secondary line, confirmed on the previous site's home and contact pages.
    phoneAltDisplay: "(413) 237-0764",
    phoneAltHref: "tel:+14132370764",
    email: "service@normandeaumemorials.com",
    address: {
      line1: "1635 Riverdale St.",
      line2: "",
      city: "West Springfield",
      state: "MA",
      stateFull: "Massachusetts",
      zip: "01089",
      country: "US",
    },
    // The previous site did not publish set daily hours anywhere —
    // "by appointment only" was the only stated policy, on the homepage.
    hours: [{ days: "All visits", hours: "By appointment only" }],
    appointmentNote:
      "Normandeau Memorials operates by appointment only — please call ahead to schedule a time to visit our showroom.",
  },

  social: {
    // TODO(content): Add verified social profile URLs, or remove.
    facebook: "",
    instagram: "",
  },

  geo: {
    // Coordinates as used in the previous site's embedded map.
    latitude: 42.1478777,
    longitude: -72.6301729,
  },
} as const;

export type SiteConfig = typeof siteConfig;
