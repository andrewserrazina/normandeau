import type { GalleryItem } from "@/types";

/**
 * Gallery placeholder data. Replace each entry's imageAlt/caption with
 * real photography details once photos are supplied — see
 * CONTENT_TODO.md. Keep the id stable if you add real image src fields.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    title: "Upright Monument",
    category: "Upright",
    caption: "Photograph placeholder — upright granite monument.",
    imageAlt: "Placeholder photograph of an upright granite monument",
  },
  {
    id: "gallery-02",
    title: "Companion Memorial",
    category: "Companion",
    caption: "Photograph placeholder — companion memorial for two.",
    imageAlt: "Placeholder photograph of a companion granite memorial",
  },
  {
    id: "gallery-03",
    title: "Flat Marker",
    category: "Flat",
    caption: "Photograph placeholder — flat granite marker.",
    imageAlt: "Placeholder photograph of a flat granite grave marker",
  },
  {
    id: "gallery-04",
    title: "Slant Marker",
    category: "Slant",
    caption: "Photograph placeholder — slant granite marker.",
    imageAlt: "Placeholder photograph of a slant granite memorial marker",
  },
  {
    id: "gallery-05",
    title: "Custom Design",
    category: "Custom",
    caption: "Photograph placeholder — custom-designed memorial.",
    imageAlt: "Placeholder photograph of a custom-designed granite memorial",
  },
  {
    id: "gallery-06",
    title: "Detailed Lettering",
    category: "Lettering",
    caption: "Photograph placeholder — detailed cemetery lettering.",
    imageAlt: "Placeholder photograph of detailed granite lettering",
  },
  {
    id: "gallery-07",
    title: "Restored Memorial",
    category: "Restoration",
    caption: "Photograph placeholder — restored older memorial.",
    imageAlt: "Placeholder photograph of a restored granite memorial",
  },
  {
    id: "gallery-08",
    title: "Upright Monument with Etching",
    category: "Upright",
    caption: "Photograph placeholder — upright monument with etched artwork.",
    imageAlt: "Placeholder photograph of an upright monument with etched artwork",
  },
  {
    id: "gallery-09",
    title: "Companion Base Detail",
    category: "Companion",
    caption: "Photograph placeholder — companion memorial base detail.",
    imageAlt: "Placeholder photograph of a companion memorial base detail",
  },
  {
    id: "gallery-10",
    title: "Bevel Marker",
    category: "Flat",
    caption: "Photograph placeholder — bevel-style marker.",
    imageAlt: "Placeholder photograph of a bevel-style granite marker",
  },
  {
    id: "gallery-11",
    title: "Custom Emblem",
    category: "Custom",
    caption: "Photograph placeholder — custom carved emblem detail.",
    imageAlt: "Placeholder photograph of a custom carved emblem",
  },
  {
    id: "gallery-12",
    title: "Cleaning Before and After",
    category: "Restoration",
    caption: "Photograph placeholder — monument cleaning result.",
    imageAlt: "Placeholder photograph showing a monument cleaning result",
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
