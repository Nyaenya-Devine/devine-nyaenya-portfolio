import Link from "next/link";
import { site, socialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-base">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="container-page relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[11px] font-bold text-black font-display">
                D
              </span>
              <span className="font-display text-[18px] font-medium tracking-[-0.01em] text-ink-high">
                Devine Nyaenya
              </span>
            </div>
            <p className="mt-4 max-w-sm font-sans text-[15px] leading-[1.6] tracking-[-0.01em] text-ink-med">
              Security engineer who proves it. Building security systems that don't just look secure — they prove it with tests, audit logs, and detection rules.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              build → test → break → learn → secure
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="font-mono text-[11px] text-ink-low">52 tests passing · 6/6 detection · 0 CVEs</span>
            </div>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-2">Navigate</p>
            <Link href="/projects" className="group flex items-center gap-2 font-sans text-[14px] text-ink-med hover:text-ink-high transition-colors">
              <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
              Projects
            </Link>
            <Link href="/security-lab" className="group flex items-center gap-2 font-sans text-[14px] text-ink-med hover:text-ink-high transition-colors">
              <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
              Security Lab
            </Link>
            <Link href="/about" className="group flex items-center gap-2 font-sans text-[14px] text-ink-med hover:text-ink-high transition-colors">
              <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
              About
            </Link>
            <Link href="/contact" className="group flex items-center gap-2 font-sans text-[14px] text-ink-med hover:text-ink-high transition-colors">
              <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-2">Connect</p>
            {socialLinks.map((link) =>
              link.configured ? (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-2 font-sans text-[14px] text-ink-med hover:text-ink-high transition-colors"
                >
                  <span className="h-px w-0 bg-violet transition-all duration-300 group-hover:w-4" />
                  {link.label}
                  {link.external ? <span className="text-[11px] opacity-50 group-hover:opacity-100 transition-opacity">↗</span> : ""}
                </a>
              ) : (
                <span key={link.label} className="font-sans text-[14px] text-ink-faint" title="Not configured yet">
                  {link.label} <span className="font-mono text-[10px] uppercase">(add in .env)</span>
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.02em] text-ink-faint">
            © {year} {site.name}. All lab exercises in authorized, isolated environments.
          </p>
          <p className="font-mono text-[11px] tracking-[0.02em] text-ink-faint">
            Next.js 16 · TypeScript · Tailwind · CSP · No trackers · <span className="text-accent">P3 hardened</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
