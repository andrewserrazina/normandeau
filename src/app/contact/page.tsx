import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { serviceAreaStatement } from "@/data/service-areas";
import { siteConfig } from "@/config/site-config";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

export const metadata = buildMetadata({
  title: "Contact Normandeau Memorials | West Springfield, MA",
  description:
    "Get in touch with Normandeau Memorials to schedule a consultation, ask a question, or learn more about memorial options in Western Massachusetts.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        eyebrow="Contact"
        title="We'd Welcome the Chance to Talk"
        description="Reach out by phone, email, or the form below to schedule a consultation or ask a question."
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Details" title="Visit or Reach Us" />

              <ul className="mt-8 flex flex-col gap-6">
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-sage" />
                  <div>
                    <p className="font-medium text-charcoal">Address</p>
                    <p className="text-[15px] text-taupe">
                      {contact.address.line1}
                      <br />
                      {contact.address.city}, {contact.address.state} {contact.address.zip}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-sage" />
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <a href={contact.phoneHref} className="block text-[15px] text-taupe hover:text-charcoal">
                      {contact.phoneDisplay}
                    </a>
                    <a href={contact.phoneAltHref} className="block text-[15px] text-taupe hover:text-charcoal">
                      {contact.phoneAltDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-sage" />
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-[15px] text-taupe hover:text-charcoal">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-sage" />
                  <div>
                    <p className="font-medium text-charcoal">Business Hours</p>
                    <ul className="text-[15px] text-taupe">
                      {contact.hours.map((entry) => (
                        <li key={entry.days} className="flex justify-between gap-6">
                          <span>{entry.days}</span>
                          <span>{entry.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-sm border border-stone bg-cream p-5 text-[15px] text-taupe leading-relaxed">
                <p>{contact.appointmentNote}</p>
                <p className="mt-3">
                  We are not staffed for 24-hour emergency service. If you
                  need to reach us outside business hours, please leave a
                  message or send an email and we&rsquo;ll follow up as soon
                  as we&rsquo;re able.
                </p>
              </div>

              <p className="mt-6 text-[15px] text-taupe">{serviceAreaStatement}</p>

              <div className="mt-8">
                <p className="flex items-center gap-2 text-sm font-medium text-charcoal">
                  <Navigation aria-hidden="true" className="size-4 text-sage" />
                  Driving Directions
                </p>
                {/* TODO(content): Add turn-by-turn directions or a driving-directions link once the address is verified. */}
                <p className="mt-1 text-sm text-taupe">
                  Driving directions placeholder — detailed directions will
                  be added once the address above is confirmed.
                </p>
              </div>

              <div className="mt-6">
                {/* TODO(integration): Replace with an embedded map (e.g. Google Maps) once the address is verified. */}
                <div className="flex aspect-video items-center justify-center rounded-sm border border-dashed border-stone bg-stone/30 text-sm text-taupe">
                  Map placeholder
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionHeading eyebrow="Consultation Request" title="Send Us a Message" />
              <div className="mt-8 rounded-sm border border-stone bg-cream p-6 sm:p-8">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
