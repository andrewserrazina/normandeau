import { cn } from "@/lib/utils";

const widths = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  medium: "max-w-5xl",
} as const;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: keyof typeof widths;
  as?: "div" | "section";
}

export function Container({
  children,
  className,
  width = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", widths[width], className)}>
      {children}
    </Tag>
  );
}
