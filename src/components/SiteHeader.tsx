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
      <div className="mx-auto grid max-w-[90rem] items-center px-6 py-4 sm:px-10 lg:grid-cols-2 lg:pl-12 lg:pr-0 xl:pl-16">
        <div className="flex items-center gap-5 xl:gap-8">
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
            className="hidden min-w-0 flex-1 items-center justify-end gap-5 whitespace-nowrap text-sm font-medium text-ink/80 lg:flex xl:gap-7"
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

          <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 lg:ml-1">
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
      </div>
    </header>
  );
}
