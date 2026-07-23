import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site-config";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
];

export const metadata = buildMetadata({
  title: "Privacy Policy | Normandeau Memorials",
  description: "How Normandeau Memorials collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy",
  index: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero title="Privacy Policy" />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container width="narrow">
          <div className="prose-like flex flex-col gap-8 text-[15px] text-taupe leading-relaxed">
            <p>
              TODO(content): This is placeholder privacy policy language and
              has not been reviewed by legal counsel. Replace it with a
              verified policy before launch.
            </p>

            <div>
              <h2 className="text-xl font-medium text-charcoal">Information We Collect</h2>
              <p className="mt-2">
                When you submit a consultation request or contact form on
                this website, we collect the information you provide, which
                may include your name, email address, phone number,
                preferred contact method, and any details you share about
                your memorial or service needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-charcoal">How We Use Information</h2>
              <p className="mt-2">
                Information submitted through this website is used solely to
                respond to your inquiry and to provide the services you
                request. We do not sell your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-charcoal">Data Storage</h2>
              <p className="mt-2">
                TODO(content): Describe how form submissions are stored once
                a form provider (e.g. Resend, Formspree, HubSpot, or a
                custom backend) is connected.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-charcoal">Contact Us</h2>
              <p className="mt-2">
                If you have questions about this privacy policy, contact us
                at {siteConfig.contact.email} or {siteConfig.contact.phoneDisplay}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
