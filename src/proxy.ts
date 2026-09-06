import { NextResponse, type NextRequest } from "next/server";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SECURITY PROXY (formerly middleware)
 *
 * Next.js 16 file convention: `proxy.ts` exporting `proxy()`.
 *
 * Sets a strict, nonce-based Content Security Policy and a full set of security
 * headers on every response. The nonce allows Next.js's own bootstrap scripts
 * while still blocking injected/third-party scripts.
 *
 * - No third-party trackers, analytics, or external scripts are loaded.
 * - connect-src is locked to 'self' plus the (optional) contact form endpoint.
 * - Styles allow 'unsafe-inline' only because Next/Tailwind inject inline style
 *   elements; scripts do NOT rely on 'unsafe-inline' (nonce + strict-dynamic).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function proxy(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const isProd = process.env.NODE_ENV === "production";

  // Optional external contact-form endpoint (Formspree/Basin/custom). connect-src
  // only includes it if it is configured; otherwise CSP stays fully self-contained.
  const formEndpoint = process.env.CONTACT_FORM_ENDPOINT?.trim();
  let formOrigin = "";
  if (formEndpoint) {
    try {
      formOrigin = new URL(formEndpoint).origin;
    } catch {
      formOrigin = "";
    }
  }

  const csp = [
    `default-src 'self'`,
    // Scripts: nonce + strict-dynamic in prod. In dev, Next uses eval for HMR.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isProd ? "" : " 'unsafe-eval'"}`,
    // Inline styles are required by Next/Tailwind style injection.
    `style-src 'self' 'unsafe-inline'`,
    // Images/fonts/media are same-origin only (we ship no external assets).
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    `media-src 'self'`,
    // Lock fetch/XHR to self (+ optional form endpoint). No third-party beacons.
    `connect-src 'self'${formOrigin ? ` ${formOrigin}` : ""}${isProd ? "" : " ws: wss:"}`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'${formOrigin ? ` ${formOrigin}` : ""}`,
    `frame-ancestors 'none'`,
    `worker-src 'self'`,
    `manifest-src 'self'`,
    // Upgrade any accidental http:// sub-resource references to https in prod.
    ...(isProd ? ["upgrade-insecure-requests"] : []),
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()"
  );
  // HSTS only makes sense over HTTPS in production.
  if (isProd) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }
  // Do not advertise the framework.
  response.headers.delete("x-powered-by");

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static assets and the icon/OG image files,
    // which don't need a CSP nonce on the document.
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|webmanifest)).*)",
    },
  ],
};
