"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

// Lightweight client-side validation. Real enforcement belongs server-side;
// this is for UX. Lengths are deliberately bounded.
const LIMITS = { name: 80, email: 120, message: 4000 };

function validate(values: { name: string; email: string; message: string }) {
  const errors: Record<string, string> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email address doesn't look valid.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const endpoint = site.contactFormEndpoint;
  const hasEmail = Boolean(site.email);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // Honeypot: real users leave this hidden field empty; bots fill it.
    const honeypot = (e.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setStatus("success"); // silently pretend success for bots
      return;
    }

    // No backend configured: fall back to composing an email via mailto.
    if (!endpoint) {
      if (!hasEmail) {
        setStatus("error");
        return;
      }
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    // Configured endpoint (Formspree/Basin/custom). Rate limiting & spam
    // protection must be enforced by that provider (origin allow-list, captcha).
    try {
      setStatus("submitting");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.slice(0, LIMITS.name),
          email: form.email.slice(0, LIMITS.email),
          message: form.message.slice(0, LIMITS.message),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center" role="status">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-ok/30 bg-ok/10 text-ok">
          ✓
        </div>
        <h3 className="mt-4 text-lg font-semibold text-ink-high">Message ready</h3>
        <p className="mt-2 text-sm text-ink-med">
          {endpoint
            ? "Thanks — your message has been submitted. I'll get back to you shortly."
            : hasEmail
              ? "Your email client should have opened with the message. If it didn't, email me directly using the address on this page."
              : "Thanks! Contact details are being finalized — please reach out via GitHub in the meantime."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      {/* Honeypot field (visually hidden, not for humans) */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <Field
        id="name"
        label="Your name"
        value={form.name}
        maxLength={LIMITS.name}
        error={errors.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email address"
        type="email"
        value={form.email}
        maxLength={LIMITS.email}
        error={errors.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        autoComplete="email"
      />
      <div>
        <label htmlFor="message" className="key-label mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          maxLength={LIMITS.message}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-lg border border-line bg-base px-4 py-3 text-sm text-ink-high placeholder:text-ink-faint focus:border-accent/50"
          placeholder="Tell me about the role, project, or opportunity…"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-danger">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-ink-faint">
          {endpoint
            ? "Submitted securely to a configured form endpoint."
            : "Opens your email client — no message is stored on this site."}
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-danger">
          Something went wrong. Please use the GitHub or email link on this page instead.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  maxLength,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  maxLength?: number;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="key-label mb-2 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        maxLength={maxLength}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg border border-line bg-base px-4 py-3 text-sm text-ink-high placeholder:text-ink-faint focus:border-accent/50"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-danger">{error}</p>
      )}
    </div>
  );
}
