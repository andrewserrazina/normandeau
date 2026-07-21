/**
 * Centralized site configuration.
 * Update contact details, domain, and business info here — every page and
 * structured-data component reads from this single source of truth.
 *
 * TODO(content): Every value below marked "placeholder" must be verified
 * and replaced with real business information before launch. See
 * CONTENT_TODO.md for the full list.
 */

export const siteConfig = {
  name: "Normandeau Memorials",
  shortName: "Normandeau Memorials",
  tagline: "Memorial Craftsmanship in Western Massachusetts",
  description:
    "Normandeau Memorials helps families throughout West Springfield and Western Massachusetts create meaningful, enduring granite memorials with thoughtful guidance and careful craftsmanship.",

  // TODO(content): Confirm production domain before launch.
  url: "https://www.normandeaumemorials.com",

  locale: "en_US",

  // Centralized contact information — placeholder values.
  // TODO(content): Replace with verified business details.
  contact: {
    phoneDisplay: "(413) 555-0142",
    phoneHref: "tel:+14135550142",
    email: "info@normandeaumemorials.com",
    address: {
      line1: "123 Memorial Avenue",
      line2: "",
      city: "West Springfield",
      state: "MA",
      stateFull: "Massachusetts",
      zip: "01089",
      country: "US",
    },
    hours: [
      { days: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
      { days: "Saturday", hours: "By appointment" },
      { days: "Sunday", hours: "Closed" },
    ],
    // TODO(content): Confirm whether appointments are required, walk-ins
    // are accepted, and whether any after-hours contact method exists.
    appointmentNote:
      "Appointments are recommended so we can give your family our full attention. TODO(content): confirm walk-in policy.",
  },

  social: {
    // TODO(content): Add verified social profile URLs, or remove.
    facebook: "",
    instagram: "",
  },

  geo: {
    // TODO(content): Replace with verified coordinates for structured data / map embed.
    latitude: 42.1084,
    longitude: -72.6162,
  },
} as const;

export type SiteConfig = typeof siteConfig;
