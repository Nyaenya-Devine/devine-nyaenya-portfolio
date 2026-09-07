"use client";

import { useEffect, useState } from "react";

/**
 * Thin reading-progress bar fixed under the header, plus a back-to-top button
 * that fades in after scrolling. Both use rAF-throttled scroll reads and are
 * hidden/no-op for reduced-motion (the bar still works, the button jump is
 * instant via anchor).
 */
export function ScrollChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
        setShowTop(doc.scrollTop > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-accent-dim via-accent to-accent-soft shadow-[0_0_10px_rgba(52,217,107,0.7)] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-accent/40 bg-surface/90 text-accent shadow-glow backdrop-blur transition-all duration-300 hover:bg-accent hover:text-base ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
