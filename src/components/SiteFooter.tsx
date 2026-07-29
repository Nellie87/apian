import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#purity", label: "Purity" },
  { href: "#news", label: "News" },
  { href: "#visit", label: "Visit" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={240}
            height={62}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            {site.tagline}
          </p>
          <p className="mt-2 text-sm text-white/55">{site.location}</p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-yellow"
            >
              {link.label}
            </a>
          ))}
          <Link href="/login" className="transition hover:text-yellow">
            Staff login
          </Link>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-white/50 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
