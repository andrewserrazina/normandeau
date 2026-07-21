# Image Assets

## Logo (required before launch)

Place the supplied Normandeau Memorials logo file at:

```
public/images/normandeau-logo.png
```

The logo should be the original supplied artwork (classical column motif with
"NORMANDEAU / MEMORIALS" wordmark) at a minimum width of 600px, transparent
background PNG preferred. Do not redraw, distort, crop, or recreate the mark —
use the file as supplied.

Once the file is in place, update `src/components/layout/Logo.tsx` to render
it with `next/image` instead of the current text-based placeholder wordmark
(the component already has a `TODO` marking exactly where to swap it in).

## Gallery and section photography

This build ships with descriptive placeholders (see
`src/components/ui/ImagePlaceholder.tsx`) instead of stock photography, per
project requirements. Replace them with real photographs of Normandeau
Memorials' work as they become available:

- `public/images/gallery/` — suggested location for gallery photography.
- `public/images/memorials/` — suggested location for memorial category photos.
- `public/images/about/` — suggested location for team/workshop photography.

See `CONTENT_TODO.md` in the project root for the full shot list.
