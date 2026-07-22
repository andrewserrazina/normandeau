# Image Assets

## Logo

The real Normandeau Memorials logo (classical column motif with
"NORMANDEAU / MEMORIALS" wordmark, 1024×1024 PNG) is supplied and lives at:

```
public/images/normandeau-logo.png
```

`src/components/layout/Logo.tsx` renders it via `next/image` in both the
header and footer. It hasn't been redrawn, distorted, cropped, or
recreated — used exactly as supplied.

## Gallery and section photography

`public/images/gallery/` now contains 12 real photos supplied by the
business (original filenames preserved: `BlackRose.jpg`, `GrayCross.jpg`,
`Mahogany.jpg`, `Pink1.jpg`, `Pink2.jpg`, `Traditional.jpg`,
`Traditional1.jpg`, `Types.jpg`, `artisticetchings.jpg`,
`enduringgranite.jpg`, `father.jpg`, `perpetuate.jpg`). They're wired into
the homepage hero, the memorial category cards, the featured gallery
section, and the full `/gallery` page via `src/data/gallery-items.ts` and
`src/data/memorial-categories.ts`.

Everywhere a photo hasn't been supplied yet, `ImagePlaceholder`
(`src/components/ui/ImagePlaceholder.tsx`) still renders a labeled
placeholder box instead of a stock image — pass it a `src` prop pointing
under `/public` to swap in a real photo; omit `src` to keep the
placeholder. Still needed:

- Flat marker and restoration-work photography (no gallery filter results
  yet for those two categories).
- Memorial category photos for Benches, Mausoleums, Veterans Memorials,
  and Cremation Memorials on `/memorials`.
- `public/images/about/` — team/workshop photography for the About page.
- A map embed or static map image for the Contact page.

See `CONTENT_TODO.md` in the project root for the full list.
