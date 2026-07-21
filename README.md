# Normandeau Memorials — Website

A premium, compassionate marketing site for Normandeau Memorials, a
family-focused monument and memorial company in West Springfield,
Massachusetts. Built with Next.js (App Router), TypeScript, and Tailwind
CSS as a scalable foundation for future gallery, CMS, email, and
lead-generation features.

This is an initial-build foundation: real business facts, photography,
and integrations are still needed. See **`CONTENT_TODO.md`** for the full
list before launch.

## Tech Stack

- Next.js 16 (App Router, React Server Components)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-based theme, see `src/app/globals.css`)
- lucide-react icons
- next/font (Cormorant Garamond for headings, Inter for body)
- ESLint (`eslint-config-next`)

## Installation

```bash
npm install
```

## Development Commands

```bash
npm run dev      # start the dev server at http://localhost:3000
npm run lint     # ESLint
npx tsc --noEmit # TypeScript type-checking
npm run build    # production build
npm run start    # serve the production build locally
```

## Project Structure

```
src/
  app/                     Routes (App Router). Each folder is a page.
    services/[slug]/       Dynamic route rendering the 6 individual service pages.
    robots.ts, sitemap.ts  Generated SEO files.
  components/
    layout/                Header, Footer, Logo, MobileNav
    navigation/             NavDropdown (Services mega-menu)
    sections/               Homepage + shared page sections
    forms/                  ConsultationForm
    ui/                     Design-system primitives (Button, Card, PageHero, etc.)
    seo/                    LocalBusinessSchema, BreadcrumbSchema, FAQSchema
    gallery/                GalleryGrid (filters + lightbox)
  config/
    site-config.ts          Single source of truth for contact info, domain, hours
  data/
    navigation.ts           Primary/footer nav + Services dropdown links
    services.ts             Service copy + icons, keyed by slug
    memorial-categories.ts  Memorial type copy for homepage + /memorials
    gallery-items.ts        Gallery placeholder entries + filter categories
    faqs.ts                 FAQ content (shared by /faq and service pages)
    service-areas.ts        Towns served
    process-steps.ts        5-step process (short + detailed copy)
  lib/
    metadata.ts             buildMetadata() helper for per-page SEO
    form-service.ts         Form submission abstraction (see below)
    validation.ts           Consultation form validation
    utils.ts                cn() class-name helper
  types/                    Shared TypeScript types
public/
  images/                   Logo + photography — see README.md inside this folder
```

## Where the Logo Belongs

The supplied Normandeau Memorials logo was not available in this build
environment. Place the real file at:

```
public/images/normandeau-logo.png
```

Then update `src/components/layout/Logo.tsx` — it currently renders a
text-based wordmark placeholder and has a `TODO(logo)` comment marking
exactly where to swap in a `next/image` reference to the real file. Do
not redraw, distort, or recreate the supplied artwork.

## Replacing Placeholder Images

All photography is currently rendered by `ImagePlaceholder`
(`src/components/ui/ImagePlaceholder.tsx`) — a labeled dashed-border box,
not a stock photo — so nothing misleading ships before real photography
exists. To replace one:

1. Add the real image file under `public/images/...`.
2. Replace the `<ImagePlaceholder ... />` usage with `next/image`,
   reusing the same `alt` text (or an improved, accurate description).
3. For the gallery, add the image path to the matching entry in
   `src/data/gallery-items.ts`.

## Updating Contact Information

Everything lives in `src/config/site-config.ts` — phone, email, address,
hours, appointment policy, and social links. Update it once and the
header, footer, contact page, and structured data all pick it up
automatically.

## Updating Navigation

Edit `src/data/navigation.ts`:

- `primaryNavigation` — the header nav, including the Services dropdown.
- `footerNavigation` / `footerServiceLinks` — footer link columns.

## Updating Service Areas

Edit `src/data/service-areas.ts` (the `serviceAreas` array and
`serviceAreaStatement` string). Used on the homepage, footer, and in
LocalBusiness structured data.

## Connecting the Contact Form

`src/lib/form-service.ts` exports `submitConsultationForm()`, currently a
simulated request used so the UI (loading/success/error states) can be
built and tested without a backend. To connect a real provider, replace
the body of that function only — the form component
(`src/components/forms/ConsultationForm.tsx`) does not need to change:

- **Resend / custom email** — call an internal API route
  (`src/app/api/consultation/route.ts`) that sends mail via Resend.
- **Formspree** — `fetch()` the values directly to your Formspree endpoint.
- **HubSpot** — POST to the HubSpot Forms API with your portal/form IDs.
- **Custom CRM** — POST to whatever endpoint your CRM exposes.

Also add real spam protection before going live (see the
`TODO(spam-protection)` comment in `ConsultationForm.tsx` — a honeypot
field is in place, but it is not a substitute for hCaptcha/reCAPTCHA or
server-side rate limiting).

## Changing the Domain

Update `url` in `src/config/site-config.ts`. `buildMetadata()`,
`robots.ts`, `sitemap.ts`, and the structured-data components all derive
from that single value.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel (Framework Preset: Next.js — auto-detected).
3. No environment variables are required for this initial build.
4. Once a form backend, analytics, or CMS is added, set their
   environment variables in the Vercel project settings before deploying.

## Future Email and DNS Migration Considerations

- This build does not send email. When a provider (Resend, etc.) is
  connected, you'll need SPF/DKIM DNS records for the sending domain.
- If email hosting (e.g. Google Workspace) moves to a new domain or
  provider, coordinate MX record changes with the domain registrar to
  avoid mail downtime.
- The placeholder domain (`https://www.normandeaumemorials.com`) should
  be confirmed as the production domain before any DNS work begins.

## Content Status

This is an initial structural build. No business facts (founding date,
years in business, staff names, testimonials, prices, etc.) have been
invented — see **`CONTENT_TODO.md`** for everything that must be
supplied or verified before launch.
