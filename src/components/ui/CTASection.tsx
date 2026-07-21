import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site-config";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-graphite py-16 sm:py-20">
      <Container width="medium" className="text-center">
        <h2 className="text-3xl sm:text-4xl font-medium text-white text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-stone leading-relaxed text-pretty">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant="primary" size="large" onDark>
            {primaryLabel}
          </Button>
          <Button href={siteConfig.contact.phoneHref} variant="secondary" size="large" onDark>
            <Phone aria-hidden="true" className="size-4" />
            Call {siteConfig.contact.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
