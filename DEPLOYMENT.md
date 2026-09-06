# Deployment guide

The site is a Next.js App Router project that statically generates every page;
the only runtime edge code is the security-headers/CSP middleware. It deploys
cleanly to **Vercel** (recommended) or any Node host.

## Option A — Vercel (recommended)

**Fastest path:** click **Deploy with Vercel** from the README (or visit
<https://vercel.com/new> and import
`Nyaenya-Devine/devine-nyaenya-portfolio`), then add the environment variables
below. Vercel auto-detects Next.js and runs `npm run build`.

1. **Push to GitHub**
   ```bash
   git init && git add -A && git commit -m "Cybersecurity portfolio"
   gh repo create <your-name>-portfolio --public --source=. --push
   ```

2. **Import on Vercel**
   - Go to <https://vercel.com/new> and import the repository.
   - Framework preset auto-detects as **Next.js**. No build settings to change.

3. **Set environment variables** (Vercel → Project → Settings → Environment
   Variables). At minimum:
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-domain>` (e.g.
     `https://devinenyaenya.dev`)
   - Optional but recommended: `NEXT_PUBLIC_CONTACT_EMAIL`,
     `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_GITHUB_URL`
   - Optional: `CONTACT_FORM_ENDPOINT` if using a form provider.

4. **Deploy.** Vercel runs `npm run build` and serves on the edge. The CSP
   middleware runs on every document request and sets the security headers
   automatically.

5. **Custom domain** (optional): add a domain in Vercel → Domains, then update
   `NEXT_PUBLIC_SITE_URL` to it and redeploy so canonical/OG/sitemap URLs match.

## Option B — Node host (Docker/VM)

```bash
npm ci
npm run build
NEXT_PUBLIC_SITE_URL=https://<your-domain> npm run start
# serves on port 3000; put HTTPS termination (nginx/Caddy/Cloudflare) in front
```

Reverse proxy should forward `x-forwarded-proto: https` so the app's
HTTPS-aware behavior (e.g. the `Secure` cookie pattern, HSTS) works.

## Environment variables

All are documented in `.env.example`. Public variables are prefixed
`NEXT_PUBLIC_` and are inlined at build time — **rebuild after changing them**.
`CONTACT_FORM_ENDPOINT` / `CONTACT_FORM_ALLOWED_ORIGINS` are server-side only.

## Optional contact form backend

With no endpoint set, the form opens a visitor's email client (`mailto:`) — zero
backend, zero storage. To collect messages instead:

- Create a form on **Formspree**, **Basin**, or **Getform** (or deploy a small
  serverless function).
- Set `CONTACT_FORM_ENDPOINT` to its URL.
- Enable the provider's spam protection (hCaptcha/reCAPTCHA or honeypot) and
  configure origin restrictions and rate limiting there — a static site cannot do
  server-side rate limiting itself.
- The CSP `connect-src` automatically allows just that endpoint's origin.

## Pre-deploy checklist

```bash
npm install        # ensure deps
npm run lint       # eslint clean
npm run build      # production build succeeds
npm audit          # expect 0 vulnerabilities
npm run start      # smoke-test locally
```

Verify on the running site:
- All pages return 200; unknown paths show the 404 page.
- Response headers include `Content-Security-Policy`, `X-Frame-Options: DENY`,
  `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- `/sitemap.xml`, `/robots.txt`, and `/manifest.webmanifest` resolve.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Contact details appear only where you configured them.
