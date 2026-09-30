import { NextResponse, type NextRequest } from "next/server";

/**
 * Security headers for the statically rendered portfolio. Next.js emits inline
 * bootstrap code for these pages, so the policy must permit that code rather
 * than advertising a per-request nonce that static script tags do not carry.
 */
export function proxy(_request: NextRequest) {
  const isProd = process.env.NODE_ENV === "production";
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
    `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    `media-src 'self'`,
    `connect-src 'self'${formOrigin ? ` ${formOrigin}` : ""}${isProd ? "" : " ws: wss:"}`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'${formOrigin ? ` ${formOrigin}` : ""}`,
    `frame-ancestors 'none'`,
    `worker-src 'self'`,
    `manifest-src 'self'`,
    ...(isProd ? ["upgrade-insecure-requests"] : []),
  ].join("; ");

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=()"
  );
  if (isProd) {
    response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  }
  response.headers.delete("x-powered-by");
  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|webmanifest)).*)",
    },
  ],
};
