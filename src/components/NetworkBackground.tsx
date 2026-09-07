"use client";

import { useEffect, useRef } from "react";

/**
 * NetworkBackground — a lightweight canvas "security mesh": slow-drifting
 * nodes, distance-based links, and glowing packets traveling along active
 * connections. It evokes a live network/SOC visual without any video asset,
 * third-party library, or CSP exception.
 *
 * - Honors prefers-reduced-motion (renders nothing → static page).
 * - Pauses when the tab is hidden; caps DPR and node count for perf.
 * - Pointer gently repels nodes (subtle interactivity).
 * - aria-hidden, pointer-events: none (purely decorative).
 */
type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = { a: number; b: number; t: number; speed: number };

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const LINK = 140;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    let spawnTimer = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(86, Math.floor((w * h) / 21000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 0.8 + Math.random() * 1.7,
      }));
      packets = [];
    };

    const step = (dt: number) => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        const dx = n.x - pointer.x;
        const dy = n.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          const d = Math.sqrt(d2) || 1;
          const f = ((130 - d) / 130) * 0.55;
          n.x += (dx / d) * f;
          n.y += (dy / d) * f;
        }
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      ctx.clearRect(0, 0, w, h);

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(52,217,107,${(1 - dist / LINK) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      ctx.fillStyle = "rgba(116,236,157,0.5)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // spawn packets on random active edges
      spawnTimer += dt;
      if (spawnTimer > 620 && nodes.length > 1) {
        spawnTimer = 0;
        for (let k = 0; k < 8; k++) {
          const i = Math.floor(Math.random() * nodes.length);
          const j = Math.floor(Math.random() * nodes.length);
          if (i !== j && Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y) < LINK) {
            packets.push({ a: i, b: j, t: 0, speed: 0.007 + Math.random() * 0.012 });
            break;
          }
        }
      }

      // packets
      packets = packets.filter((p) => {
        p.t += (p.speed * dt) / 16;
        const A = nodes[p.a];
        const B = nodes[p.b];
        if (!A || !B) return false;
        const x = A.x + (B.x - A.x) * p.t;
        const y = A.y + (B.y - A.y) * p.t;
        ctx.beginPath();
        ctx.fillStyle = "rgba(140,240,171,0.95)";
        ctx.shadowColor = "rgba(52,217,107,0.9)";
        ctx.shadowBlur = 9;
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        return p.t < 1;
      });
    };

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(40, now - last);
      last = now;
      step(dt);
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => resize();
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  );
}
