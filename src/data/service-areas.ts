import type { ServiceArea } from "@/types";
import serviceAreasContent from "@content/service-areas.json";

/**
 * Communities Normandeau Memorials serves, sourced from
 * content/service-areas.json (editable via the TinaCMS admin at
 * /admin — see README.md). Used by the homepage service-area section,
 * the footer, and structured data.
 */
export const serviceAreas: ServiceArea[] = serviceAreasContent.serviceAreas;

export const serviceAreaStatement = serviceAreasContent.serviceAreaStatement;
