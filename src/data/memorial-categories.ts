import type { MemorialCategory } from "@/types";

/**
 * Memorial category data shared by the homepage preview grid and the
 * full /memorials education page.
 */
export const memorialCategories: MemorialCategory[] = [
  {
    slug: "upright-monuments",
    title: "Upright Monuments",
    shortDescription:
      "Traditional standing memorials that offer the most space for lettering, artwork, and personalization.",
    description:
      "Upright monuments stand vertically on a base and are among the most customizable memorial styles. They offer generous surface area for inscriptions, etched artwork, emblems, and photos, and can be finished in a range of granite colors and edge styles.",
    suitableFor: [
      "Individual memorials",
      "Family plots",
      "Memorials intended to be visible from a distance",
    ],
    customization: [
      "Granite color and finish",
      "Base and die shape",
      "Lettering style and layout",
      "Etched artwork or emblems",
      "Vases and companion bases",
    ],
    imageAlt: "Black granite upright monument with an etched rose corner design",
    image: "/images/gallery/BlackRose.jpg",
  },
  {
    slug: "companion-monuments",
    title: "Companion Memorials",
    shortDescription:
      "A shared memorial designed for two, often spouses, with space for both names and dates.",
    description:
      "Companion memorials are designed to honor two people on a single monument, typically a couple. They can be arranged side by side or with a shared design element joining both names, and are often selected by families planning ahead together.",
    suitableFor: [
      "Married couples",
      "Family members sharing a plot",
      "Families planning memorials in advance",
    ],
    customization: [
      "Shared or individual design panels",
      "Dual lettering layout",
      "Matching or contrasting granite tones",
      "Center artwork or emblem",
    ],
    imageAlt: "Heart-shaped granite memorial with a porcelain photo portrait",
    image: "/images/gallery/perpetuate.jpg",
  },
  {
    slug: "flat-markers",
    title: "Flat Markers",
    shortDescription:
      "Low-profile markers set level with the ground, often required in memorial garden sections.",
    description:
      "Flat markers sit flush with the ground and are frequently required in memorial garden or lawn-level cemetery sections. They provide a clean, understated presence while still allowing for lettering, borders, and simple artwork.",
    suitableFor: [
      "Cemetery sections that require flat markers",
      "Families who prefer a simple, low-profile design",
      "Cremation memorials",
    ],
    customization: [
      "Granite or bronze-on-granite options",
      "Lettering style",
      "Border detail",
      "Small etched artwork",
    ],
    imageAlt: "Flat granite grave marker placeholder",
  },
  {
    slug: "slant-markers",
    title: "Slant Markers",
    shortDescription:
      "An angled marker that offers more visibility than a flat marker while remaining close to the ground.",
    description:
      "Slant markers are cut at an angle and set on a small base, giving them more visual presence than a flat marker while remaining a lower-profile option than an upright monument. They read easily from a standing position.",
    suitableFor: [
      "Cemeteries that allow slant markers",
      "Families wanting more visibility than a flat marker provides",
      "Individual memorials",
    ],
    customization: [
      "Granite color and finish",
      "Lettering layout",
      "Etched artwork or emblems",
    ],
    imageAlt: "Rock-pitched pink granite slant memorial marker",
    image: "/images/gallery/Pink1.jpg",
  },
  {
    slug: "bevel-markers",
    title: "Bevel Markers",
    shortDescription:
      "A marker with a gently sloped top edge, offering a subtle profile between flat and slant styles.",
    description:
      "Bevel markers have a slightly raised, angled top surface, giving them more dimension than a flat marker while staying closer to the ground than a slant or upright memorial. They're a versatile option in many cemetery sections.",
    suitableFor: [
      "Cemetery sections with height restrictions",
      "Families who want subtle dimension without a full upright memorial",
      "Individual or companion memorials",
    ],
    customization: [
      "Granite color and finish",
      "Lettering style",
      "Border and edge detail",
    ],
    imageAlt: "Gray granite memorial marker with a beveled geometric profile",
    image: "/images/gallery/Types.jpg",
  },
  {
    slug: "benches",
    title: "Memorial Benches",
    shortDescription:
      "A functional, contemplative memorial that provides a place to sit and reflect.",
    description:
      "Memorial benches serve as both a tribute and a gathering place, often chosen for family plots, gardens, or as a companion piece to an existing memorial. They can be inscribed on the seat, backrest, or base.",
    suitableFor: [
      "Family plots with space for a bench",
      "Memorial gardens",
      "Families wanting a place to sit and visit",
    ],
    customization: [
      "Granite color and finish",
      "Bench style and shape",
      "Inscription placement",
      "Etched artwork",
    ],
    imageAlt: "Granite memorial bench placeholder",
  },
  {
    slug: "mausoleums",
    title: "Mausoleums",
    shortDescription:
      "An above-ground structure for entombment, available in private and estate configurations.",
    description:
      "Mausoleums provide above-ground entombment and range from single-crypt designs to larger family estates. Because mausoleums involve significant cemetery coordination, we work closely with families and the cemetery throughout planning.",
    suitableFor: [
      "Families seeking above-ground entombment",
      "Multi-generational family planning",
      "Cemeteries with mausoleum sections available",
    ],
    customization: [
      "Structure size and configuration",
      "Granite color and finish",
      "Exterior inscriptions and artwork",
      "Interior crypt arrangement",
    ],
    imageAlt: "Granite mausoleum structure placeholder",
  },
  {
    slug: "veterans-memorials",
    title: "Veterans Memorials",
    shortDescription:
      "Memorials that honor military service with appropriate emblems and formatting.",
    description:
      "Veterans memorials recognize military service through branch emblems, service dates, and specific formatting. We help families navigate available options, including any benefits or markers that may apply to a veteran's service.",
    suitableFor: [
      "Veterans and their families",
      "Memorials recognizing service branch or rank",
      "Companion memorials that include a veteran",
    ],
    customization: [
      "Branch of service emblems",
      "Service dates and rank",
      "Flag holders and related elements",
    ],
    imageAlt: "Veterans granite memorial with service emblem placeholder",
  },
  {
    slug: "cremation-memorials",
    title: "Cremation Memorials",
    shortDescription:
      "Memorial options designed specifically for cremated remains, including niches and smaller markers.",
    description:
      "Cremation memorials include a range of options such as columbarium niches, smaller upright memorials, and flat markers designed to accompany cremation urns or ground burial of ashes.",
    suitableFor: [
      "Families choosing cremation",
      "Columbarium niche inscriptions",
      "Smaller-scale memorial designs",
    ],
    customization: [
      "Granite color and finish",
      "Niche plaque design",
      "Lettering and artwork",
    ],
    imageAlt: "Cremation memorial marker placeholder",
  },
  {
    slug: "custom-memorials",
    title: "Custom Memorials",
    shortDescription:
      "Fully custom shapes, artwork, and design elements built around your family's vision.",
    description:
      "For families with a specific vision in mind, custom memorials allow for unique shapes, sculpted elements, and personalized design work beyond standard configurations. Every custom design is reviewed for cemetery compatibility before production.",
    suitableFor: [
      "Families with a specific design vision",
      "Memorials reflecting a distinctive career, hobby, or interest",
      "Unique family plot designs",
    ],
    customization: [
      "Custom shapes and profiles",
      "Sculpted or three-dimensional elements",
      "Fully personalized artwork",
      "Combination of granite colors and finishes",
    ],
    imageAlt: "Book of Life custom-shaped granite memorial with an etched rose medallion",
    image: "/images/gallery/Traditional.jpg",
  },
];

export function getMemorialCategoryBySlug(
  slug: string
): MemorialCategory | undefined {
  return memorialCategories.find((category) => category.slug === slug);
}
