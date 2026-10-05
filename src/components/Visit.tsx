import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type ContactRowProps = {
  label: string;
  icon: ReactNode;
  children: ReactNode;
  href?: string;
  external?: boolean;
};

function ContactRow({ label, icon, children, href, external }: ContactRowProps) {
  const base =
    "flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream/60 p-4 lg:gap-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0";
  const content = (
    <>
      <span
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-orange shadow-sm ring-1 ring-ink/5 lg:hidden"
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-base font-medium leading-snug text-ink lg:mt-1.5">
          {children}
        </span>
      </span>
    </>
  );

  if (!href) return <div className={base}>{content}</div>;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} transition active:scale-[0.99] active:bg-cream hover:border-orange/40 lg:hover:border-0 lg:hover:text-orange`}
    >
      {content}
    </a>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Visit() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`;
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Pollinators — I would like to get in touch.")}`;
  const mailUrl = `mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}`;

  return (
    <section id="visit">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-x-12 lg:px-10 lg:py-20 xl:px-16">
        {/* Intro */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="font-script text-4xl text-orange sm:text-5xl lg:text-5xl">Visit us</p>
          <h2 className="mt-1 font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-ink sm:mt-2 sm:text-4xl lg:text-6xl">
            Come see us in Ruiru, or Buzz us today
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:mt-5 lg:text-lg">
            We welcome visitors by appointment. Call, WhatsApp, or write and we will
            help you with products, hive work, or a farm visit.
          </p>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center py-6 sm:py-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:py-0">
          <div className="relative aspect-[736/957] w-full max-w-[15rem] sm:max-w-[20rem] lg:max-w-[26rem]">
            <Image
              src="/images/bee.png"
              alt="A phone showing a jar of honey, with bees around it"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 416px"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Contact details + actions */}
        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="space-y-3 lg:mt-8 lg:space-y-5">
            <ContactRow
              label="Location"
              href={mapsUrl}
              external
              icon={
                <svg {...iconProps}>
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              }
            >
              {site.location}
            </ContactRow>
            <ContactRow
              label="Phone / WhatsApp"
              href={`tel:${site.phoneTel}`}
              icon={
                <svg {...iconProps}>
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              }
            >
              {site.phoneDisplay}
            </ContactRow>
            <ContactRow
              label="Email"
              href={`mailto:${site.email}`}
              icon={
                <svg {...iconProps}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              }
            >
              <span className="break-all">{site.email}</span>
            </ContactRow>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-semibold text-white transition hover:bg-ink/85 active:scale-[0.98] sm:w-auto sm:text-sm"
            >
              Message on WhatsApp
            </a>
            <a
              href={mailUrl}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-base font-semibold text-ink transition hover:border-ink active:scale-[0.98] sm:w-auto sm:text-sm"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
