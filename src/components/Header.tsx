"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/security-lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function LogoMark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ink-high text-[11px] font-bold tracking-tight text-base">
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-violet opacity-20 blur-[2px]" />
      <span className="relative font-display text-[13px] font-medium tracking-[-0.02em]">D</span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled 
          ? "border-line bg-base/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-base/60" 
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <LogoMark />
          <span className="flex flex-col">
            <span className="font-display text-[15px] font-medium leading-none tracking-[-0.01em] text-ink-high group-hover:text-white transition-colors">
              Devine
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-low">
              Security Engineer
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-white text-black"
                  : "text-ink-med hover:text-ink-high hover:bg-white/[0.06]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-3 h-5 w-px bg-line" />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-ink-high px-4 py-2 text-[13px] font-medium text-base transition-all duration-300 hover:bg-white hover:scale-[1.02]"
          >
            <span className="h-2 w-2 rounded-full bg-ok animate-pulse-dot" />
            GitHub
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-ink-high backdrop-blur md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-4">
            <span className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-all duration-300 ${open ? "top-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-4 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-4 bg-current transition-all duration-300 ${open ? "top-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-base/95 backdrop-blur-2xl md:hidden"
          aria-label="Mobile"
        >
          <div className="container-page flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-2xl px-5 py-4 text-[17px] font-medium tracking-[-0.01em] transition-colors ${
                  isActive(item.href)
                    ? "bg-white text-black"
                    : "text-ink-med hover:bg-white/[0.06] hover:text-ink-high"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-[15px] font-medium text-black"
            >
              <span className="h-2 w-2 rounded-full bg-ok animate-pulse-dot" />
              GitHub — 52 tests, 6/6 detection
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
