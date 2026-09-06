/**
 * Next.js configuration.
 *
 * Security headers (CSP with per-request nonce) live in `src/proxy.ts`
 * (Next.js 16's `proxy` convention, formerly middleware).
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The site ships only SVG/data-URI visuals and self-hosted fonts, so we
  // disable the image optimizer to avoid the native `sharp` dependency and
  // reduce supply-chain surface. Re-enable if you add photography.
  images: {
    unoptimized: true,
  },
  // Allow the sandboxed preview host to reach dev resources (HMR). No effect
  // on production; safe to leave configured.
  allowedDevOrigins: [
    "3000-izprx3x1yic5gvqp046va.e2b.app",
    ".e2b.app",
  ],
};

export default nextConfig;
