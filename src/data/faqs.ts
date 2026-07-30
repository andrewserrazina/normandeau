import type { FAQItem } from "@/types";
import faqsContent from "@content/faqs.json";

/**
 * FAQ content shared by the /faq page and individual service pages.
 * Sourced from content/faqs.json (editable via the TinaCMS admin at
 * /admin — see README.md). Keep answers general and avoid definitive
 * legal, cemetery, pricing, or timeline claims.
 */
export const faqs: FAQItem[] = faqsContent.faqs;
