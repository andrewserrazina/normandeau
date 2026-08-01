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
- TinaCMS — lets the business owner edit text and photos through a web
  UI instead of code; see "Editing Content with TinaCMS" below.
- Deployed on Cloudflare Pages/Workers via `@opennextjs/cloudflare`.

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
content/                   JSON content edited via the TinaCMS admin (see below)
tina/
  config.ts                TinaCMS schema — defines every editable field
  __generated__/            Build output (gitignored, regenerated on every build)
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
    site-config.ts          Reads content/site-settings.json; adds url/locale constants
  data/
    navigation.ts           Primary/footer nav + Services dropdown links (code, not CMS)
    services.ts             Reads content/services.json; maps icon names to components
    memorial-categories.ts  Reads content/memorial-categories.json
    gallery-items.ts        Reads content/gallery-items.json
    faqs.ts                 Reads content/faqs.json
    service-areas.ts        Reads content/service-areas.json
    process-steps.ts        Reads content/process-steps.json
    testimonials.ts         Reads content/testimonials.json
  lib/
    metadata.ts             buildMetadata() helper for per-page SEO
    form-service.ts         Form submission abstraction (see below)
    validation.ts           Consultation form validation
    utils.ts                cn() class-name helper
  types/                    Shared TypeScript types
public/
  uploads/                  Photos managed through the TinaCMS media picker
  images/                   Logo (not CMS-managed — see below)
```

## Editing Content with TinaCMS

The business owner can update text and photos at **`/admin/index.html`**
without touching code. It's backed by TinaCMS (free tier covers up to 2
editors) and commits changes straight to this repo, which redeploys
automatically on Cloudflare.

**One-time setup required before this works in production:**

1. Sign up at [tina.io](https://tina.io) and connect this GitHub repository.
2. From the Tina Cloud project dashboard, copy the **Client ID** and
   generate a **Content Token**.
3. In the Cloudflare Pages project settings, add two environment
   variables: `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` (use the
   values from step 2), then redeploy.
4. Confirm the Cloudflare Pages build command runs `npm run build` (it
   now runs `tinacms build` before `next build` — see `package.json`).
   If Cloudflare's dashboard has a custom build command instead, prefix
   it with `npx tinacms build &&`.
5. Give the business owner the tina.io login you set up in step 1 (or
   invite their email as a collaborator from the Tina Cloud dashboard)
   plus the `/admin/index.html` URL.

**What's editable:** services, memorial categories, gallery photos, the
homepage hero photo, FAQs, testimonials, service areas, the five-step
process, and site settings (contact info, hours, guarantee language,
social links). Each maps to a JSON file in `content/` — see
`tina/config.ts` for the exact fields.

**What's intentionally not CMS-managed:** navigation links
(`src/data/navigation.ts`), the domain (`src/config/site-config.ts`),
and the logo (below) — these are rare, technical changes better made in
code with review, not casual day-to-day edits.

**Local development:** `npm run dev` now runs `tinacms dev -c "next dev"`,
which starts a local Tina server alongside Next.js so you can use
`/admin/index.html` locally too, without needing Tina Cloud credentials
for content stored in this repo (only production deploys need the
`NEXT_PUBLIC_TINA_CLIENT_ID`/`TINA_TOKEN` env vars from step 3 above).

## Where the Logo Belongs

The real Normandeau Memorials logo is at `public/images/normandeau-logo.png`,
rendered via `next/image` in `src/components/layout/Logo.tsx`. It's
deliberately outside `content/`/`public/uploads/` and not TinaCMS-managed —
the brand mark shouldn't be swapped casually. To replace it, add the new
file at that same path (same guidance applies: don't redraw, distort, or
recreate supplied artwork).

## Replacing or Adding Photos

Preferred path: use the TinaCMS admin at `/admin/index.html` — its media
picker uploads directly into `public/uploads/` and updates the relevant
JSON file automatically.

To do it by hand instead: add the image file under `public/uploads/...`,
then set the matching `image` field in the relevant `content/*.json`
file to that path. Any photo slot without an `image` value falls back to
a labeled placeholder box (`src/components/ui/ImagePlaceholder.tsx`)
instead of a stock photo, so nothing misleading ships before real
photography exists.

## Updating Contact Information

Preferred path: edit "Site Settings" in the TinaCMS admin at
`/admin/index.html` — phone, email, address, hours, appointment policy,
and social links live there. Under the hood it writes to
`content/site-settings.json`, which `src/config/site-config.ts` reads;
update either one and the header, footer, contact page, and structured
data all pick it up automatically.

## Updating Navigation

Edit `src/data/navigation.ts`:

- `primaryNavigation` — the header nav, including the Services dropdown.
- `footerNavigation` / `footerServiceLinks` — footer link columns.

## Updating Service Areas

Preferred path: edit "Service Areas" in the TinaCMS admin at
`/admin/index.html`. Under the hood it writes to
`content/service-areas.json` (the `serviceAreas` array and
`serviceAreaStatement` string), read by `src/data/service-areas.ts`.
Used on the homepage, footer, and in LocalBusiness structured data.

## Connecting the Contact Form

`src/lib/form-service.ts` exports `submitConsultationForm()`, which posts
the consultation form directly to [Formspree](https://formspree.io):

1. Create a free Formspree account and a form for this site; copy its
   endpoint URL (`https://formspree.io/f/xxxxxxxx`).
2. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to that URL — locally in
   `.env.local` (copy `.env.example`), and in production as a Cloudflare
   Pages **build variable** (same place as `NEXT_PUBLIC_TINA_CLIENT_ID` —
   see "Editing Content with TinaCMS" above). It's a `NEXT_PUBLIC_*`
   variable because it's read at build time and inlined into the client
   bundle, so it must be set before `npm run build` runs, not just at
   runtime.
3. Redeploy. Submissions will arrive in the Formspree dashboard and be
   emailed to whatever address you configured there.

If `NEXT_PUBLIC_FORMSPREE_ENDPOINT` isn't set, the form fails closed with
a message telling the visitor to call directly, instead of silently
pretending to succeed.

To switch providers later, only `submitConsultationForm()` needs to
change — the form component (`src/components/forms/ConsultationForm.tsx`)
doesn't:

- **Resend / custom email** — call an internal API route
  (`src/app/api/consultation/route.ts`) that sends mail via Resend.
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

## Deploying

This project deploys to **Cloudflare Pages/Workers** via
`@opennextjs/cloudflare` (see the `deploy`/`preview`/`upload` scripts in
`package.json`, and `wrangler.jsonc`/`wrangler.toml` if present).

1. Push this repository to GitHub; Cloudflare Pages is already
   connected via its GitHub App and builds `main` automatically.
2. Required environment variables (set in the Cloudflare Pages project
   settings): `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` — see
   "Editing Content with TinaCMS" above. Without these, the production
   build fails at the `tinacms build` step.
3. Once a form backend or analytics provider is added, set their
   environment variables here too before deploying.

The site could also be deployed elsewhere Next.js runs (Vercel, Node
hosting, etc.) — the `@opennextjs/cloudflare` pieces are only needed for
the Cloudflare-specific `deploy`/`preview`/`upload` scripts, not for
`npm run build` itself.

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
