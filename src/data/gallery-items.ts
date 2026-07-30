import type { GalleryItem } from "@/types";
import galleryItemsContent from "@content/gallery-items.json";

/**
 * Gallery data, sourced from content/gallery-items.json (editable via
 * the TinaCMS admin at /admin — see README.md). No photos are
 * currently supplied for the Flat and Restoration filters — they'll
 * correctly show the empty state until added.
 */
export const galleryItems: GalleryItem[] = galleryItemsContent.galleryItems as GalleryItem[];

export const galleryFilters: Array<GalleryItem["category"]> = [
  "Upright",
  "Companion",
  "Flat",
  "Slant",
  "Custom",
  "Lettering",
  "Restoration",
];
