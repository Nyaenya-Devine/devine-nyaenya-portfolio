import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  accent?: "amber" | "violet" | "cyan";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  accent = "amber",
}: Props) {
  const Heading = as;
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} relative`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${accent === "violet" ? "eyebrow-violet" : ""} ${accent === "cyan" ? "text-cyan before:bg-cyan" : ""}`}>
          {eyebrow}
        </p>
      )}
      <Heading className="font-display text-h2 tracking-[-0.02em] text-ink-high">
        {title}
      </Heading>
      {description && (
        <p className="mt-5 font-sans text-[17px] leading-[1.6] tracking-[-0.01em] text-ink-med text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
