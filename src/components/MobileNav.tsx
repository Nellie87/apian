"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = { readonly href: string; readonly label: string };

/** Hamburger + drop-down panel for screens below `lg`. */
export function MobileNav({
  links,
  ctaHref,
}: {
  links: readonly NavLink[];
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="animate-fade-in absolute inset-x-0 top-full border-b border-ink/10 bg-cream px-5 pb-6 pt-2 shadow-xl shadow-ink/10 sm:px-8"
        >
          <ul className="divide-y divide-ink/10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl text-ink"
                >
                  {link.label}
                  <span aria-hidden className="text-orange">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-orange"
          >
            Order on WhatsApp
          </a>
        </nav>
      ) : null}
    </div>
  );
}
