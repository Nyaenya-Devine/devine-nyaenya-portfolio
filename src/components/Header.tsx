"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/security-lab", label: "Security Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function LogoMark() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-md border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent">
      {"</>"}
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-base/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-ink-high"
          aria-label={`${site.name} — home`}
        >
          <LogoMark />
          <span className="text-sm tracking-tight">
            {site.firstName}
            <span className="text-accent">.</span>
            <span className="sr-only">{site.lastName}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "text-accent"
                  : "text-ink-med hover:text-ink-high"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md border border-line bg-raised/60 px-3.5 py-2 text-sm font-medium text-ink-high transition-colors hover:border-accent/40 hover:text-accent"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink-high md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line-soft bg-base md:hidden"
          aria-label="Mobile"
        >
          <div className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-base ${
                  isActive(item.href)
                    ? "bg-accent/10 text-accent"
                    : "text-ink-med hover:bg-raised"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md border border-line px-3 py-3 text-center text-base text-ink-high"
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
