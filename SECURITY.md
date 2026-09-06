# Security notes

This document records the security posture of the portfolio itself. A security
portfolio should practice what it preaches.

## Content Security Policy

Set per-request in `src/proxy.ts` using a random **nonce** with
`strict-dynamic`, so Next.js bootstrap scripts run while injected/third-party
scripts are blocked.

- `default-src 'self'`
- `script-src 'self' 'nonce-<random>' 'strict-dynamic'` (`'unsafe-eval'` only in
  development for Next's hot-reload; never in production)
- `style-src 'self' 'unsafe-inline'` — required because Next/Tailwind inject
  inline style elements
- `img-src 'self' data: blob:`, `font-src 'self' data:`, `media-src 'self'`
- `connect-src 'self'` (+ the configured form endpoint origin, if any)
- `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'none'`,
  `worker-src 'self'`, `manifest-src 'self'`
- `upgrade-insecure-requests` and HSTS in production

There are **no third-party analytics, trackers, fonts CDNs at runtime, or ad
scripts**. Fonts are self-hosted via `next/font`; diagrams are hand-built SVG.

## Security headers

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | nonce-based policy above |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` (and `frame-ancestors 'none'`) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera, microphone, geolocation, browsing-topics, interest-cohort disabled |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` (production/HTTPS) |
| `X-Powered-By` | removed |

## External links

Every external anchor uses `target="_blank" rel="noopener noreferrer"` (defense
against reverse-tabnabbing and referrer leakage) and is marked
`(opens in a new tab)` for screen readers.

## Data & secrets

- No secrets, tokens, or credentials are committed. Configuration comes from
  environment variables; `.env.local` is git-ignored.
- The contact form never writes to a database on this site. Without a configured
  endpoint it composes a `mailto:` message; with one, it POSTs JSON over HTTPS.

## Contact form

- Client-side validation with bounded field lengths (`name` 80, `email` 120,
  `message` 4000) and a required valid email format.
- A hidden **honeypot** field absorbs naive bot submissions.
- If you wire `CONTACT_FORM_ENDPOINT` to a provider (Formspree, Basin, Getform,
  or a serverless function), **configure rate limiting and spam protection there**
  (e.g. Formspree's reCAPTCHA/honeypot, origin allow-listing). This static site
  cannot rate-limit server-side on its own — that responsibility belongs to the
  form backend. Document the allowed origins with `CONTACT_FORM_ALLOWED_ORIGINS`.

## Dependencies

- `npm audit` → **0 vulnerabilities** (verified). Next.js/React/ESLint are kept on
  patched releases; PostCSS (build-time only) is pinned to a patched version.
- No image-optimization native dependency is shipped
  (`images.unoptimized`), reducing supply-chain surface.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `article`, `section`).
- Skip-to-content link; logical heading order; labelled form fields.
- Visible focus rings; `aria-current` on active nav; `aria-expanded` on the menu.
- `prefers-reduced-motion` disables animations and smooth scroll.
- Color is never the only signal (statuses pair a dot with a text label).

## Reporting

If you find a security issue in this site, please contact the owner via the
channels on the contact page.
