# Devine Nyaenya — Cybersecurity & Security Engineering Portfolio

[![CI](https://github.com/Nyaenya-Devine/devine-nyaenya-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Nyaenya-Devine/devine-nyaenya-portfolio/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js_16-App_Router-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38bdf8?logo=tailwindcss)
![Security](https://img.shields.io/badge/CSP-nonce%20%2B%20strict--dynamic-38E1C4)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNyaenya-Devine%2Fdevine-nyaenya-portfolio)

Live portfolio for **Devine Nyaenya**, a Kenya-based cybersecurity /
security-engineering builder. It presents real, verifiable security work — not
fabricated achievements — with the flagship **Chokepoint** case study front and
center.

> **Positioning:** *Building security systems that don't just look secure — they prove it.*
> Method: **Build → Test → Break → Learn → Secure.**

**Related security projects (case studies in this site):**

| Project | What it is | Repository |
| --- | --- | --- |
| **Chokepoint** (flagship) | Least-privilege access control & tamper-evident audit for humans + AI agents | [`Nyaenya-Devine-chokepoint`](https://github.com/Nyaenya-Devine/Nyaenya-Devine-chokepoint) |
| **Android Reset Lab** | Simulation-only MDM reset lab: RBAC, four-eyes, hash-chained logs, 6/6 attacks detected | [`android-reset-lab`](https://github.com/Nyaenya-Devine/android-reset-lab) |
| **Android Device Management Tool** | Experimental full-stack Android Enterprise app (honest WIP) | [`android-device-management-tool`](https://github.com/Nyaenya-Devine/android-device-management-tool) |

---

## ✨ What this is

A fast, accessible, static-first personal portfolio built with a modern stack and
a security-product aesthetic (dark, restrained, one accent color, technical
diagrams — no "movie hacker" clichés).

- **Home** — hero, featured projects, an *interactive security-control pipeline*
  (click each gate to see the security principle), security-lab preview, grouped
  skills, certifications, and about.
- **Projects / case studies** — `/projects`, with full case studies for:
  - **Chokepoint** — least-privilege access control & tamper-evident audit for
    humans and AI agents (flagship, full threat-model → future-work walkthrough).
  - **Android Reset Lab** — simulation-only MDM-reset security lab (RBAC,
    four-eyes, hash-chained/HMAC logs, 6/6 self-run attacks detected).
  - **Android Device Management Tool** — presented honestly as an experimental
    WIP; it does **not** remotely wipe real devices.
- **Security Lab** (`/security-lab`) — hands-on write-ups from **authorized,
  isolated lab environments**, each following Scenario → Recon → Vulnerability →
  Exploitation → Privilege Escalation → Lessons → Mitigation.
- **About** and **Contact** — honest background, configurable contact channels,
  and a validated contact form (mailto fallback or a pluggable form endpoint).

---

## 🧱 Tech stack

| Concern | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router, React 19) |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS** (design tokens in `tailwind.config.ts`) |
| Fonts | Inter + JetBrains Mono via `next/font` (self-hosted, no runtime CDN) |
| Diagrams | Hand-built, dependency-free SVG (keeps CSP tight) |
| Security | Nonce-based **CSP** + full security headers in `src/proxy.ts` |
| Deployment | Optimized for **Vercel** (any Node host works) |

Why this stack: first-class App Router support for per-page SEO metadata, static
generation for speed, a file-based structure that stays maintainable, and no
runtime third-party scripts — which makes a strict Content Security Policy
practical on a security portfolio.

---

## 🚀 Local development

```bash
# 1. install dependencies
npm install

# 2. (optional) configure personal details
cp .env.example .env.local
#   edit .env.local — at minimum set NEXT_PUBLIC_SITE_URL,
#   NEXT_PUBLIC_CONTACT_EMAIL, and NEXT_PUBLIC_LINKEDIN_URL when ready.

# 3. run the dev server
npm run dev          # http://localhost:3000

# production build + serve
npm run build
npm run start

# lint
npm run lint
```

Requires **Node 18.18+** (Node 20+ recommended).

---

## ⚙️ Configuration (where to edit content)

Almost everything lives in **`src/data/`** — edit content there, no component
changes needed.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Name, role, tagline, **email / LinkedIn / GitHub links**, site URL, contact-form endpoint |
| `src/data/projects.ts` | Project cards: summaries, tech, concepts, status, repo links |
| `src/data/chokepointCase.ts` | Flagship case-study sections, modules, controls, attacks, tests, limitations, future work |
| `src/data/skills.ts` | Grouped skills + proficiency labels |
| `src/data/certifications.ts` | Certifications/training (Cisco/security prioritized) |
| `src/data/labs.ts` | Security-lab categories and write-ups (add new ones here) |

### Environment variables

See **`.env.example`** for the full, commented list. Nothing is secret, but
contact details are kept in one place:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (used for sitemap, canonical URLs, Open Graph) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown on contact page; powers the `mailto:` fallback |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL (leave blank to hide the link) |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile (defaults to the real profile) |
| `CONTACT_FORM_ENDPOINT` | **Optional** form backend (Formspree/Basin/custom). Blank = `mailto:` fallback |

**Nothing is invented.** If an email or LinkedIn URL is not set, the UI hides the
link and shows an explicit "add this in `.env.local`" placeholder instead of
faking one.

### Adding a security-lab write-up

Add an object to the `labs` array in `src/data/labs.ts` following the existing
shape (`scenario → reconnaissance → vulnerability → exploitation →
privilege escalation → lessons → mitigation`). Each entry is rendered
automatically on `/security-lab`.

---

## 🔐 Security (the site itself)

Because this is a security portfolio, the site is built to a high baseline. See
**[SECURITY.md](./SECURITY.md)** for full details. Highlights:

- **Strict Content-Security-Policy** with a per-request **nonce** +
  `strict-dynamic` (no `'unsafe-inline'` for scripts); no third-party scripts,
  trackers, or analytics.
- Security headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`,
  `Referrer-Policy`, `Permissions-Policy`, and HSTS in production.
- External links use `target="_blank" rel="noopener noreferrer"`;
  `frame-ancestors 'none'`.
- No hardcoded secrets or credentials; configuration via environment variables.
- Contact form: client-side validation with bounded lengths, a honeypot field,
  and a note that server-side rate limiting/spam protection must be enforced by
  the chosen form provider.
- **Dependency hygiene:** `npm audit` reports **0 vulnerabilities**; `next`/`react`
  kept on patched releases.
- Accessibility: semantic landmarks/headings, skip link, labelled form fields,
  visible focus states, `prefers-reduced-motion` support.

---

## 🔍 SEO

- Per-page titles, meta descriptions, canonical URLs, and Open Graph/Twitter
  metadata via the App Router `metadata` API.
- JSON-LD `Person` structured data in the root layout.
- `sitemap.xml` (`src/app/sitemap.ts`) and `robots.txt` (`src/app/robots.ts`).
- Semantic heading hierarchy, descriptive link text, and clean, stable URLs.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain before deploying so canonical
  and Open Graph URLs are correct.

---

## ☁️ Deployment (Vercel)

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step instructions. In short:

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new) (it auto-detects Next.js).
3. Add environment variables from `.env.example` (at minimum
   `NEXT_PUBLIC_SITE_URL`, then contact details as you wish).
4. Deploy. All pages are statically generated; the edge `proxy` injects the CSP
   headers on every response.

---

## 📁 Project structure

```
src/
  app/
    layout.tsx            # root layout, fonts, global metadata, JSON-LD
    page.tsx              # home
    projects/             # projects index + 3 case studies
    security-lab/         # hands-on lab write-ups
    about/ contact/
    sitemap.ts robots.ts manifest.ts not-found.tsx
  components/             # UI (Header, Footer, cards, pipeline, diagrams)
  data/                   # ALL content/config lives here
  proxy.ts                # CSP + security headers (edge; Next 16 convention)
```

---

## 📝 Content honesty

This portfolio deliberately **never fabricates** employers, clients, degrees,
job titles, years of experience, statistics, production deployments, or real-world
penetration tests. Lab exercises are clearly labeled as authorized, isolated
training; the Android Device Management Tool is explicitly presented as an
incomplete WIP; Chokepoint is described as a productized demo with documented
limitations.
