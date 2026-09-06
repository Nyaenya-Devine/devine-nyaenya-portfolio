"use client";

import { useState, useEffect } from "react";
import type { CaseSection } from "@/data/chokepointCase";

export function CaseNav({ items }: { items: CaseSection[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Case study sections" className="hidden lg:block">
      <p className="key-label mb-3">On this page</p>
      <ul className="space-y-1 border-l border-line">
        {items.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                active === s.id
                  ? "border-accent text-accent"
                  : "border-transparent text-ink-low hover:text-ink-high"
              }`}
            >
              {s.navLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
