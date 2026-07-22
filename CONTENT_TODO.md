# Content To-Do Before Launch

This build intentionally avoids inventing business facts. Several items
below were resolved using real content pulled directly from the
previous normandeaumemorials.com site (home, services,
purchasing-an-engraving-or-monument, and contact-us pages). Everything
still marked `[ ]` must be supplied, verified, or explicitly decided
before this site goes live.

## Branding

- [x] The real Normandeau Memorials logo (classical column motif with
      "NORMANDEAU / MEMORIALS" wordmark) was supplied and is at
      `public/images/normandeau-logo.png`, rendered via `next/image` in
      `src/components/layout/Logo.tsx` in both the header and footer.

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

- [x] Hero image, memorial category photos (Upright, Companion, Slant,
      Bevel, Custom), the homepage featured gallery, and the full
      `/gallery` page now use 12 real photos supplied by the business
      (see `public/images/gallery/` and `public/images/README.md` for
      the full mapping). Original filenames were preserved as requested.
- [ ] Flat Marker and Restoration gallery photos — none were supplied,
      so those two gallery filters currently show the empty state.
- [ ] Memorial category photos still needed for: Benches, Mausoleums,
      Veterans Memorials, Cremation Memorials.
- [ ] About page: team and/or workshop photography.
- [ ] Map embed or static map image for the Contact page.
- Note: the previous site also had a storefront photo, an engraver
  photo, and additional bench photos in its homepage slideshow — if
  those can be recovered from the old Weebly hosting account before
  it's decommissioned, they'd be good additions.

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
