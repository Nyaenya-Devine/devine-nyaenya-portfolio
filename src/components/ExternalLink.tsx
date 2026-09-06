import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Safe external link:
 * - rel="noopener noreferrer" prevents reverse-tabnabbing and referrer leakage.
 * - target="_blank" opens in a new tab.
 * - Accessible: announces that the link opens in a new tab.
 */
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  /** Hide the external-link affordance (e.g. inside cards with their own arrow). */
  quiet?: boolean;
};

export const ExternalLink = forwardRef<HTMLAnchorElement, Props>(
  function ExternalLink(
    { href, children, className, quiet = false, ...rest },
    ref
  ) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...rest}
      >
        {children}
        {!quiet && (
          <span
            aria-hidden="true"
            className="ml-1 inline-block text-[0.8em] opacity-70"
          >
            ↗
          </span>
        )}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
);
