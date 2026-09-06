import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: Props) {
  const Heading = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading className="text-h2 text-ink-high">{title}</Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-med text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
