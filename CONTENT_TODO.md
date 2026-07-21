# Content To-Do Before Launch

This build intentionally avoids inventing business facts. Everything
below is a placeholder and must be supplied, verified, or explicitly
decided before this site goes live.

## Branding

- [ ] Supply the original Normandeau Memorials logo file and place it at
      `public/images/normandeau-logo.png` (see `public/images/README.md`).
- [ ] Update `src/components/layout/Logo.tsx` to render the real logo via
      `next/image` (currently a text-based wordmark placeholder).

## Business Facts

- [ ] Founding date / years in business (not stated anywhere in this build).
- [ ] Number of generations / family history, if applicable.
- [ ] Owner/employee names.
- [ ] Any industry certifications, associations, or awards.
- [ ] Any cemetery partnerships or preferred-vendor relationships (only
      described generically as "familiarity," not partnership, in current copy).
- [ ] Confirm whether appointments are strictly required or walk-ins are
      accepted (`src/config/site-config.ts` → `contact.appointmentNote`).

## Contact Information (`src/config/site-config.ts`)

- [ ] Phone number (currently `(413) 555-0142` placeholder).
- [ ] Email address (currently `info@normandeaumemorials.com` placeholder).
- [ ] Street address, city, state, ZIP (currently `123 Memorial Avenue` placeholder).
- [ ] Business hours (currently placeholder hours).
- [ ] Verified latitude/longitude for structured data and any future map embed.
- [ ] Social media profile URLs (Facebook/Instagram fields are currently empty).

## Domain

- [ ] Confirm production domain (currently `https://www.normandeaumemorials.com`
      placeholder in `src/config/site-config.ts`).

## Photography

All images are currently `ImagePlaceholder` components, not stock
photos. Real photography needed for:

- [ ] Hero image — professionally photographed granite memorial.
- [ ] Six memorial category images (Upright, Flat, Slant, Bevel,
      Companion, Custom) on the homepage and full list on `/memorials`
      (10 categories total, including Benches, Mausoleums, Veterans,
      Cremation).
- [ ] Six featured craftsmanship gallery images on the homepage.
- [ ] Twelve (or more) full gallery images across all filter categories
      (`src/data/gallery-items.ts`).
- [ ] About page: team and/or workshop photography.
- [ ] Map embed or static map image for the Contact page.

## Testimonials

- [ ] The three testimonials on the homepage are explicitly labeled
      placeholders ("Customer testimonial will appear here."). Replace
      with verified, real customer reviews before launch — do not
      present placeholder text as a real review.

## Pricing & Timelines

- [ ] No prices, financing programs, or guarantees are stated anywhere.
      Add only if/when the business decides to publish them.
- [ ] No specific turnaround times are stated — copy consistently says
      timelines "vary." Add specifics only if verified.

## Legal

- [ ] `/privacy-policy` is placeholder copy and has not been reviewed by
      legal counsel. Replace before launch.
- [ ] Confirm cookie/analytics disclosure requirements once analytics is added.

## Integrations (Not Yet Connected)

- [ ] Contact/consultation form backend — see "Connecting the Contact
      Form" in `README.md` and `src/lib/form-service.ts`.
- [ ] Spam protection (hCaptcha/reCAPTCHA or server-side rate limiting) —
      only a honeypot field exists today.
- [ ] Analytics (e.g. GA4, Plausible).
- [ ] Map embed (e.g. Google Maps) on the Contact page.
- [ ] CMS for gallery/blog content, if desired later.

## SEO

- [ ] Verify final page titles/descriptions once real business details
      (address, service area nuances) are confirmed.
- [ ] Submit sitemap to Google Search Console once the production domain
      is live.
