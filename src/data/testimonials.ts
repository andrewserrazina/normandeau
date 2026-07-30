import type { Testimonial } from "@/types";
import testimonialsContent from "@content/testimonials.json";

/**
 * Homepage testimonials, sourced from content/testimonials.json
 * (editable via the TinaCMS admin at /admin — see README.md).
 *
 * TODO(content): These are labeled placeholders, not real customer
 * reviews. Replace with verified testimonials before launch.
 */
export const testimonials: Testimonial[] = testimonialsContent.testimonials;
