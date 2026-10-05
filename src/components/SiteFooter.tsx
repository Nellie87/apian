import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-bark text-cream">
      <div
        aria-hidden
        className="hex-pattern absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_90%_100%,black,transparent_60%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-5">
          <Link
            href="/"
            aria-label={`${site.name} - home`}
            className="inline-block rounded-2xl bg-cream px-3 py-1"
          >
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={240}
              height={118}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-cream/90">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-5 space-y-3 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/75 transition hover:text-yellow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <FooterHeading>Visit the apiary</FooterHeading>
          <address className="mt-5 space-y-3 text-base not-italic text-cream/75">
            <p>{site.location}</p>
            <p>
              <a
                href={`tel:${site.phoneTel}`}
                className="transition hover:text-yellow"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="break-all transition hover:text-yellow"
              >
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs uppercase tracking-[0.16em] text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Made by Nelicore Systems</p>
        </div>
      </div>
    </footer>
  );
}
