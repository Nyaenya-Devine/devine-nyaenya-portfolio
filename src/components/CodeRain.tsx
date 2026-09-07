"use client";

import { useEffect, useRef } from "react";

/**
 * CodeRain — a *very* subtle falling-code background ("dropping codes").
 *
 * Design goals (per request): feel alive like code drizzling, but NEVER hurt
 * readability. So:
 *  - Low count + low opacity green glyphs on near-black.
 *  - Fixed, -z-10, pointer-events-none, behind all content.
 *  - Columns are sparse with large gaps; each streak fades out by the tail.
 *  - Honors prefers-reduced-motion (renders nothing).
 *  - Pauses when the tab is hidden; DPR capped; glyphs are monospace security
 *    tokens (not garbled katakana — more on-brand and readable).
 */
const GLYPHS = "01<>{}[]()/;=+-*#$&|?ABCDEF0123456789";

export function CodeRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FONT = 14;
    const COL_GAP = 110; // wide gap between drip columns → sparse
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let raf = 0;
    let last = 0;

    type Drop = { x: number; y: number; speed: number; len: number; glyph: string[]; rate: number };
    let drops: Drop[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const makeDrops = () => {
      const cols = Math.ceil(w / COL_GAP) + 1;
      drops = Array.from({ length: cols }, (_, i) => ({
        x: i * COL_GAP + rand(6, COL_GAP - 20),
        y: rand(-h, 0),
        speed: rand(28, 70), // px / second (slow)
        len: Math.floor(rand(6, 16)),
        glyph: Array.from({ length: 20 }, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]),
        rate: rand(0.04, 0.12),
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT}px ui-monospace, Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      makeDrops();
    };

    const step = (dt: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const d of drops) {
        d.y += (d.speed * dt) / 1000;
        if (d.y - d.len * FONT > h) {
          d.y = rand(-h * 0.4, -FONT * 4);
          d.x = Math.floor(d.x / COL_GAP) * COL_GAP + rand(6, COL_GAP - 20);
          d.speed = rand(28, 70);
        }
        // draw the streak (faded head → tail)
        for (let k = 0; k < d.len; k++) {
          const yy = d.y - k * FONT;
          if (yy < -FONT || yy > h + FONT) continue;
          const t = k / d.len; // 0 = head
          // very low opacity so text on top stays readable
          const alpha = (1 - t) * (k === 0 ? 0.5 : 0.16);
          if (Math.random() < d.rate) {
            d.glyph[k % d.glyph.length] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          ctx.fillStyle =
            k === 0
              ? `rgba(140,240,171,${alpha})`
              : `rgba(52,217,107,${alpha})`;
          ctx.fillText(d.glyph[k % d.glyph.length], d.x, yy);
        }
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(50, now - last || 16);
      last = now;
      step(dt);
      raf = requestAnimationFrame(loop);
    };

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
