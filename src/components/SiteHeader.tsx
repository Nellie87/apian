import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "Honey" },
  { href: "#products", label: "Shop" },
  { href: "#purity", label: "Purity" },
  { href: "#news", label: "News" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 transition opacity-95 hover:opacity-100"
          aria-label={site.name}
        >
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={220}
            height={56}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm font-medium text-ink/80 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="hidden text-ink/70 transition hover:text-ink sm:inline-flex"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 3.5 3.5" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/login"
            className="text-ink/70 transition hover:text-ink"
            aria-label="Staff login"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="9" r="3.25" />
              <path d="M5.5 19.5c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5" strokeLinecap="round" />
            </svg>
          </Link>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-orange-deep"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 8h12l-1.2 10.2a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3L6 8Z" strokeLinejoin="round" />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" strokeLinecap="round" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-orange">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
