# Content To-Do Before Launch

This build intentionally avoids inventing business facts. Several items
below were resolved using real content pulled directly from the
previous normandeaumemorials.com site (home, services,
purchasing-an-engraving-or-monument, and contact-us pages). Everything
still marked `[ ]` must be supplied, verified, or explicitly decided
before this site goes live.

## Branding

- [ ] Supply the original Normandeau Memorials logo file and place it at
      `public/images/normandeau-logo.png` (see `public/images/README.md`).
- [ ] Update `src/components/layout/Logo.tsx` to render the real logo via
      `next/image` (currently a text-based wordmark placeholder).

## Business Facts

- [x] Founding: family owned since 1937 — confirmed on the previous
      site's homepage, now in `siteConfig.familyOwnedSince`.
- [ ] Number of generations, ownership names, or further family history
      beyond the founding year (the previous site did not state these).
- [ ] Owner/employee names.
- [ ] Any industry certifications, associations, or awards beyond Barre
      Guild (see below).
- [x] Barre Guild — the previous site's purchasing page states
      "Barre Guild / Quality Monuments at Normandeau Memorials." Now
      mentioned on the About page. TODO: confirm current membership
      status and whether more detail should be added.
- [x] Guarantee language — "Our monuments are fully guaranteed against
      any defect in material and workmanship" was stated on the previous
      site's Services page and is now in `siteConfig.guarantee`, used on
      the About page. TODO: confirm this guarantee is still offered
      as-is before publishing it again.
- [x] Appointment policy — the previous site stated "BY APPOINTMENT ONLY.
      Please call for an appointment," with no set daily hours published
      anywhere. `siteConfig.contact.hours` and `appointmentNote` now
      reflect this (a single "by appointment only" entry, not fabricated
      weekday hours).

## Contact Information (`src/config/site-config.ts`)

- [x] Phone: (413) 734-0168, with (413) 237-0764 as a second line —
      confirmed on the previous site's home and contact pages.
- [x] Email: service@normandeaumemorials.com — confirmed.
- [x] Address: 1635 Riverdale St., West Springfield, MA 01089 — confirmed.
- [x] Map coordinates — pulled from the previous site's embedded map
      (lat 42.1478777, long -72.6301729).
- [ ] Business hours beyond "by appointment only" — the previous site
      never published set days/hours; confirm whether the business wants
      to add any before launch.
- [ ] Social media profile URLs (Facebook/Instagram fields are currently
      empty — none were linked on the previous site either).

## Domain

- [ ] Confirm production domain (currently `https://www.normandeaumemorials.com`
      placeholder in `src/config/site-config.ts`). Note: as of this
      build, the live site's SSL certificate has expired — worth fixing
      independently of this rebuild.

## Photography

All images are currently `ImagePlaceholder` components, not stock
photos, since the previous site's photos could not be retrieved through
this build process (expired SSL cert blocked direct fetching). Real
photography still needed for:

- [ ] Hero image — professionally photographed granite memorial.
- [ ] Memorial category images (Upright, Flat, Slant, Bevel, Companion,
      Custom, Benches, Mausoleums, Veterans, Cremation).
- [ ] Featured craftsmanship gallery images on the homepage.
- [ ] Full gallery images across all filter categories
      (`src/data/gallery-items.ts`).
- [ ] About page: team and/or workshop photography.
- [ ] Map embed or static map image for the Contact page.
- Note: the previous site had real photos including a storefront photo,
  an engraver photo, bench photos, and monument slideshow photos — if
  those files can be recovered from the old Weebly hosting account
  before it's fully decommissioned, they'd be a good starting point.

## Testimonials

- [ ] The three testimonials on the homepage are explicitly labeled
      placeholders ("Customer testimonial will appear here."). The
      previous site had no customer testimonials either. Replace with
      verified, real customer reviews before launch — do not present
      placeholder text as a real review.

## Pricing & Timelines

- [ ] No prices, financing programs are stated anywhere (the previous
      site had none either). Add only if/when the business decides to
      publish them.
- [ ] No specific turnaround times are stated — copy consistently says
      timelines "vary." Add specifics only if verified.

## Legal

- [ ] `/privacy-policy` is placeholder copy and has not been reviewed by
      legal counsel. Replace before launch.
- [ ] Confirm cookie/analytics disclosure requirements once analytics is
      added (the previous site had a cookie notice banner).

## Integrations (Not Yet Connected)

- [ ] Contact/consultation form backend — see "Connecting the Contact
      Form" in `README.md` and `src/lib/form-service.ts`. Note: the
      previous site's contact form submitted to a Weebly form endpoint
      with Name/Phone/Email/Comment fields and reCAPTCHA — this build's
      form is more detailed (adds preferred contact method and memorial
      type) but will need its own backend connected.
- [ ] Spam protection (hCaptcha/reCAPTCHA or server-side rate limiting) —
      only a honeypot field exists today.
- [ ] Analytics (e.g. GA4, Plausible).
- [ ] Map embed (e.g. Google Maps) on the Contact page.
- [ ] CMS for gallery/blog content, if desired later.

## SEO

- [ ] Verify final page titles/descriptions once any remaining business
      details are confirmed.
- [ ] Submit sitemap to Google Search Console once the production domain
      is live (and once its SSL certificate is renewed).
