# Devine Nyaenya — Security Engineering Portfolio

The source for [devine-nyaenya-portfolio.vercel.app](https://devine-nyaenya-portfolio.vercel.app).

This portfolio presents work in application security, access control, Android Enterprise and Modern Workplace operations. Each project page states whether the work is a live product, an experimental integration or a simulation.

## Featured work

- **OrbitDesk** — a local-first Modern Workplace operations training lab
- **Chokepoint** — a dual-control authorization and tamper-evident audit plane
- **Android Reset Lab** — a simulation for evidence-aware reset and sanitization controls
- **Android Device Management Tool** — an Android Enterprise fleet-management experiment
- **EndoPima Kenya** — a bilingual health-awareness and care-navigation prototype

## Engineering baseline

- Next.js App Router and strict TypeScript
- Static-first rendering and restrained client-side JavaScript
- Content Security Policy and standard browser security headers
- Semantic structure, keyboard navigation, visible focus and reduced-motion support
- Automated lint, build and dependency checks

## Local verification

```bash
npm ci
npm run lint
npm run build
npm audit --audit-level=high
```

Personal and project content is maintained in `src/data`. Security reports should follow [SECURITY.md](SECURITY.md).
