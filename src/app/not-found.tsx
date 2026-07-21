import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container width="narrow" className="text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-sm border border-stone bg-cream text-sage">
          <Compass aria-hidden="true" className="size-6" />
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl font-medium text-charcoal">
          Page Not Found
        </h1>
        <p className="mt-4 text-[15px] text-taupe leading-relaxed">
          The page you&rsquo;re looking for may have been moved or no longer
          exists. Here are a few places to continue.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Return Home</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
