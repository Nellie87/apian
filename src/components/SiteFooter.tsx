import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/#honey", label: "Honey" },
  { href: "/products", label: "Shop" },
  { href: "/#services", label: "Services" },
  { href: "/#visit", label: "Visit" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c56f14]">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white text-ink">
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-yellow-deep/60 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:gap-12 sm:px-8 sm:py-12 md:grid-cols-12 md:gap-8 lg:py-14">
        <div className="md:col-span-5">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={240}
            height={62}
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-xs font-display text-base italic leading-relaxed text-ink-muted">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink/75 transition hover:text-[#c56f14]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <FooterHeading>Visit the apiary</FooterHeading>
          <address className="mt-5 space-y-3 text-sm not-italic text-ink/75">
            <p>{site.location}</p>
            <p>
              <a
                href={`tel:${site.phoneTel}`}
                className="transition hover:text-[#c56f14]"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-[#c56f14]"
              >
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.18em] text-ink/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Made by Nelicore Systems</p>
        </div>
      </div>
    </footer>
  );
}
