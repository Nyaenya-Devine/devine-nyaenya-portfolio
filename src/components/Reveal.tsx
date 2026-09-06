"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Subtle scroll-reveal. Wraps content in a div that fades/rises into view once.
 * - Respects prefers-reduced-motion (renders visible immediately).
 * - Unobserves after the first reveal (no layout thrash).
 * - Uses a rAF-throttled IntersectionObserver, not scroll listeners.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = { transitionDelay: `${delay}ms` } as const;
  const cls = `reveal ${visible ? "is-visible" : ""} ${className}`;

  switch (Tag) {
    case "section":
      return (
        <section ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>
          {children}
        </section>
      );
    case "li":
      return (
        <li ref={ref as React.RefObject<HTMLLIElement>} className={cls} style={style}>
          {children}
        </li>
      );
    case "article":
      return (
        <article ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>
          {children}
        </article>
      );
    default:
      return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={cls} style={style}>
          {children}
        </div>
      );
  }
}
