type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-coral-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-sm md:text-display-md font-semibold text-navy-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
