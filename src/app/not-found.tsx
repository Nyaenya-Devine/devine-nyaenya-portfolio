import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="bg-tech">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 text-h1 text-ink-high">Path not found</h1>
        <p className="mt-4 max-w-md text-ink-med">
          That route doesn&apos;t exist — like an unauthorized request, it hits a
          default-deny. Let&apos;s get you back to known territory.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/projects" className="btn-ghost">View projects</Link>
        </div>
      </div>
    </div>
  );
}
