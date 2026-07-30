import siteSettings from "@content/site-settings.json";

/**
 * Centralized site configuration.
 * Contact info, address, phone numbers, email, founding year, guarantee
 * language, hero photo, and social links are sourced from
 * content/site-settings.json (editable via the TinaCMS admin at
 * /admin — see README.md). `url` and `locale` stay as plain constants
 * here since they're technical values the business owner shouldn't
 * need to touch.
 */
export const siteConfig = {
  name: siteSettings.name,
  tagline: siteSettings.tagline,
  description: siteSettings.description,
  familyOwnedSince: siteSettings.familyOwnedSince,
  guarantee: siteSettings.guarantee,
  heroImage: siteSettings.heroImage,
  heroImageAlt: siteSettings.heroImageAlt,

  // TODO(content): Confirm production domain before launch.
  url: "https://www.normandeaumemorials.com",

  locale: "en_US",

  contact: siteSettings.contact,
  social: siteSettings.social,
  geo: siteSettings.geo,
} as const;

export type SiteConfig = typeof siteConfig;
