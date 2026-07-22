import type { GalleryItem } from "@/types";

/**
 * Gallery data. Photos below are real, supplied by the business.
 * No photos are available yet for the Flat and Restoration filters —
 * they'll correctly show the empty state until supplied. See
 * CONTENT_TODO.md.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    title: "Upright Monument with Rose Etching",
    category: "Upright",
    caption: "Black granite upright monument with an etched rose corner design.",
    imageAlt: "Black granite upright monument with an etched rose corner design",
    image: "/images/gallery/BlackRose.jpg",
  },
  {
    id: "gallery-02",
    title: "Companion Memorial with Portrait",
    category: "Companion",
    caption: "Heart-shaped granite memorial with a porcelain photo portrait.",
    imageAlt: "Heart-shaped granite memorial with a porcelain photo portrait",
    image: "/images/gallery/perpetuate.jpg",
  },
  {
    id: "gallery-03",
    title: "Slant Marker",
    category: "Slant",
    caption: "Rock-pitched pink granite slant memorial marker.",
    imageAlt: "Rock-pitched pink granite slant memorial marker",
    image: "/images/gallery/Pink1.jpg",
  },
  {
    id: "gallery-04",
    title: "Upright Monument with Celtic Cross",
    category: "Upright",
    caption: "Gray granite upright monument with an etched Celtic cross.",
    imageAlt: "Gray granite upright monument with an etched Celtic cross",
    image: "/images/gallery/GrayCross.jpg",
  },
  {
    id: "gallery-05",
    title: "Book of Life Custom Memorial",
    category: "Custom",
    caption: "Custom Book of Life-shaped granite memorial with an etched rose medallion.",
    imageAlt: "Book of Life custom-shaped granite memorial with an etched rose medallion",
    image: "/images/gallery/Traditional.jpg",
  },
  {
    id: "gallery-06",
    title: "Detailed Rose Etching",
    category: "Lettering",
    caption: "Detail of a hand-etched rose corner design on polished black granite.",
    imageAlt: "Close-up detail of a hand-etched rose corner design on black granite",
    image: "/images/gallery/artisticetchings.jpg",
  },
  {
    id: "gallery-07",
    title: "Upright Monument with Calla Lily Panels",
    category: "Upright",
    caption: "Gray granite upright monument with etched calla lily side panels.",
    imageAlt: "Gray granite upright monument with etched calla lily side panels",
    image: "/images/gallery/Traditional1.jpg",
  },
  {
    id: "gallery-08",
    title: "Upright Monument, In God's Care",
    category: "Upright",
    caption: "Pink granite upright monument with an etched heart, cross, and doves.",
    imageAlt: "Pink granite upright monument with an etched heart, cross, and doves reading In God's Care",
    image: "/images/gallery/Pink2.jpg",
  },
  {
    id: "gallery-09",
    title: "Geometric Upright Monument",
    category: "Upright",
    caption: "Gray granite upright monument with a beveled geometric profile.",
    imageAlt: "Gray granite upright monument with a beveled geometric profile",
    image: "/images/gallery/Types.jpg",
  },
  {
    id: "gallery-10",
    title: "Mahogany Monument with Cross and Rose",
    category: "Upright",
    caption: "Mahogany granite upright monument with etched cross and rose corner details.",
    imageAlt: "Mahogany granite upright monument with etched cross and rose corner details",
    image: "/images/gallery/Mahogany.jpg",
  },
  {
    id: "gallery-11",
    title: "Father Lettering Detail",
    category: "Lettering",
    caption: "Detail of engraved lettering and religious artwork reading Father.",
    imageAlt: "Detail of engraved lettering and religious artwork reading Father",
    image: "/images/gallery/father.jpg",
  },
  {
    id: "gallery-12",
    title: "Enduring Granite Monument",
    category: "Upright",
    caption: "Black granite upright monument with an etched rose corner design.",
    imageAlt: "Black granite upright monument with an etched rose corner design, shown at an angle",
    image: "/images/gallery/enduringgranite.jpg",
  },
];

export const galleryFilters: Array<GalleryItem["category"]> = [
  "Upright",
  "Companion",
  "Flat",
  "Slant",
  "Custom",
  "Lettering",
  "Restoration",
];
