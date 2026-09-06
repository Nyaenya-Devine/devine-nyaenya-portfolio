import Link from "next/link";
import { site, socialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-soft bg-surface/40">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-ink-high">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-low">
              {site.role} · {site.location}
            </p>
            <p className="mt-3 font-mono text-xs text-ink-faint">
              build → test → break → learn → secure
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer">
            <p className="key-label mb-1">Navigate</p>
            <Link href="/projects" className="text-sm text-ink-med hover:text-accent">Projects</Link>
            <Link href="/security-lab" className="text-sm text-ink-med hover:text-accent">Security Lab</Link>
            <Link href="/about" className="text-sm text-ink-med hover:text-accent">About</Link>
            <Link href="/contact" className="text-sm text-ink-med hover:text-accent">Contact</Link>
          </nav>

          <div className="flex flex-col gap-2">
            <p className="key-label mb-1">Connect</p>
            {socialLinks.map((link) =>
              link.configured ? (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm text-ink-med hover:text-accent"
                >
                  {link.label}
                  {link.external ? " ↗" : ""}
                </a>
              ) : (
                <span key={link.label} className="text-sm text-ink-faint" title="Not configured yet">
                  {link.label} <span className="text-[10px] uppercase">(add in .env)</span>
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line-soft pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All lab exercises were performed in authorized, isolated environments.</p>
          <p className="font-mono">Built with Next.js, TypeScript &amp; Tailwind CSS. CSP-enabled, no trackers.</p>
        </div>
      </div>
    </footer>
  );
}
