import { siteConfig } from "@/config/site-config";
import { serviceAreas } from "@/data/service-areas";

/**
 * LocalBusiness structured data. Several fields are placeholders pending
 * verified business information — see CONTENT_TODO.md. Do not treat this
 * markup as confirmed legal/business fact.
 */
export function LocalBusinessSchema() {
  const { contact, geo } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phoneDisplay,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    })),
    openingHoursSpecification: contact.hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      description: entry.hours,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
