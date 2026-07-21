import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text";
type Size = "default" | "large";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-sage disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-charcoal text-white hover:bg-graphite border border-charcoal rounded-sm",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white rounded-sm",
  text: "text-charcoal underline underline-offset-4 decoration-stone hover:decoration-charcoal px-0 h-auto",
};

// Used on dark section backgrounds (e.g. CTASection) where the light-mode
// variant colors would be invisible.
const onDarkVariantStyles: Record<Variant, string> = {
  primary: "bg-white text-charcoal hover:bg-stone border border-white rounded-sm",
  secondary:
    "bg-transparent text-white border border-stone hover:bg-white hover:text-charcoal rounded-sm",
  text: "text-white underline underline-offset-4 decoration-stone hover:decoration-white px-0 h-auto",
};

const sizeStyles: Record<Size, string> = {
  default: "h-12 px-6 text-[15px]",
  large: "h-14 px-8 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  /** Use on dark section backgrounds so variant colors stay visible. */
  onDark?: boolean;
}

interface ButtonAsLinkProps extends CommonProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

interface ButtonAsButtonProps extends CommonProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  "aria-label"?: string;
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

function useButtonClasses(props: CommonProps) {
  const { variant = "primary", size = "default", className, onDark = false } = props;
  return cn(
    baseStyles,
    onDark ? onDarkVariantStyles[variant] : variantStyles[variant],
    variant !== "text" && sizeStyles[size],
    className
  );
}

export function Button(props: ButtonProps) {
  const classes = useButtonClasses(props);
  const content = (
    <>
      {props.children}
      {props.showArrow && <ArrowRight aria-hidden="true" className="size-4" />}
    </>
  );

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props["aria-label"]}
      className={classes}
    >
      {content}
    </button>
  );
}
