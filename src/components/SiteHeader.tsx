import Image from "next/image";
import Link from "next/link";
import { HeaderSearch } from "@/components/HeaderSearch";
import { MobileNav } from "@/components/MobileNav";
import { navLinks, site } from "@/lib/site";

const orderHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Pollinators - I would like to place an order.",
)}`;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto grid h-(--header-h) max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="justify-self-start"
          aria-label={`${site.name} - home`}
        >
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={220}
            height={108}
            priority
            className="-ml-2 h-16 w-auto sm:h-[4.25rem]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-ink/10 bg-paper/70 p-1 text-sm font-medium text-ink/80 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 whitespace-nowrap transition hover:bg-yellow/40 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <HeaderSearch />
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-orange sm:inline-flex"
          >
            Order on WhatsApp
          </a>
          <MobileNav links={navLinks} ctaHref={orderHref} />
        </div>
      </div>
    </header>
  );
}
