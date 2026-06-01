import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  background?: "navy" | "light" | "darker";
  className?: string;
  as?: "section" | "div";
};

const backgroundMap = {
  navy: "bg-white text-navy-900",
  darker: "bg-surface-muted text-navy-900",
  light: "bg-surface-subtle text-navy-900",
} as const;

export function Section({
  id,
  children,
  background = "navy",
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${backgroundMap[background]} ${className}`}
    >
      {children}
    </Tag>
  );
}
