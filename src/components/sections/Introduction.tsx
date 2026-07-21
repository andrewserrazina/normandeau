import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Introduction() {
  return (
    <section className="py-16 sm:py-20">
      <Container width="medium">
        <SectionHeading
          align="center"
          title="A Memorial Should Be as Unique as the Life It Represents"
          description="Selecting a memorial can feel overwhelming, especially when so many decisions arrive at once. Normandeau Memorials provides clear, patient guidance through every choice, from granite and shape to lettering and layout, so your family can create a tribute that feels right."
        />
      </Container>
    </section>
  );
}
