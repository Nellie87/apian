import Image from "next/image";
import Link from "next/link";
import { HeaderSearch } from "@/components/HeaderSearch";
import { site } from "@/lib/site";

const links = [
  { href: "/#honey", label: "Honey" },
  { href: "/products", label: "Shop" },
  { href: "/#services", label: "Services" },
  { href: "/#visit", label: "Visit" },
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
          <HeaderSearch />

        </div>
      </div>
    </header>
  );
}
