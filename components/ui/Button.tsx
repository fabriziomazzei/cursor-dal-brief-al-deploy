import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral-500 text-white hover:bg-coral-600 active:bg-coral-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-navy-900 border border-slate-300 hover:border-navy-800 hover:bg-slate-50 shadow-sm",
  ghost: "bg-transparent text-slate-600 hover:text-navy-900",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsAnchor = CommonProps & { href: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;

type AsButton = CommonProps & { href?: undefined } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children"
>;

export function Button(props: AsAnchor | AsButton) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as AsButton)}>
      {children}
    </button>
  );
}
