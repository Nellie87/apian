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

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-[#fffaf3] text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12 md:gap-8 lg:py-16">
        <div className="md:col-span-5">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={240}
            height={62}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/45">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink/80 transition hover:text-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/45">
            Visit the apiary
          </p>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-ink/80">
            <p>{site.location}</p>
            <p>
              <a
                href={`tel:${site.phoneTel}`}
                className="transition hover:text-orange"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-orange"
              >
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/login" className="transition hover:text-orange">
            Staff login
          </Link>
        </div>
      </div>
    </footer>
  );
}
