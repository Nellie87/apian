import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#honey", label: "Honey" },
  { href: "#products", label: "Shop" },
  { href: "#services", label: "Services" },
  { href: "#news", label: "News" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto grid max-w-[90rem] grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-12 xl:px-16">
        <Link
          href="/"
          className="justify-self-start transition opacity-95 hover:opacity-100"
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
          className="hidden items-center gap-8 whitespace-nowrap text-sm font-medium text-ink/80 lg:flex xl:gap-10"
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

        <div className="flex items-center justify-end gap-4 sm:gap-5">
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
        </div>
      </div>
    </header>
  );
}
