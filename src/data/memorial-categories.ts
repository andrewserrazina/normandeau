import type { MemorialCategory } from "@/types";
import memorialCategoriesContent from "@content/memorial-categories.json";

/**
 * Memorial category data shared by the homepage preview grid and the
 * full /memorials education page. Sourced from
 * content/memorial-categories.json (editable via the TinaCMS admin at
 * /admin — see README.md).
 */
export const memorialCategories: MemorialCategory[] =
  memorialCategoriesContent.memorialCategories;

export function getMemorialCategoryBySlug(
  slug: string
): MemorialCategory | undefined {
  return memorialCategories.find((category) => category.slug === slug);
}
