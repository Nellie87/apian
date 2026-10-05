import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/site";

function ContactIcon({ name }: { name: "pin" | "phone" | "mail" }) {
  const paths = {
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.800 12 21 12 21Z" />
        <circle cx="12" cy="9.500" r="2.500" />
      </>
    ),
    phone: (
      <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.500 7 8.500 6 8.500-6" />
      </>
    ),
  } as const;

  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Pollinators — I would like to get in touch.",
)}`;

export function Visit() {
  const details = [
    { icon: "pin", label: "Location", value: site.location, href: undefined },
    {
      icon: "phone",
      label: "Phone / WhatsApp",
      value: site.phoneDisplay,
      href: `tel:${site.phoneTel}`,
    },
    {
      icon: "mail",
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ] as const;

  return (
    <section id="visit" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Visit us"
            title={
              <>
                Come see us in Ruiru, or <em>buzz us today.</em>
              </>
            }
          >
            We welcome visitors by appointment. Call, WhatsApp or write, and we
            will help with products, hive work or a farm visit.
          </SectionTitle>

          <dl className="mt-10 grid gap-3">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4 sm:p-5"
              >
                <span className="hex-clip grid size-12 shrink-0 place-items-center bg-yellow text-ink">
                  <ContactIcon name={item.icon} />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 break-words font-medium text-ink">
                    {item.href ? (
                      <a href={item.href} className="transition hover:text-orange">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition hover:bg-orange"
            >
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}`}
              className="inline-flex rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold text-ink transition hover:border-ink hover:bg-paper"
            >
              Send an email
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_30%,#fff3c4_0%,#f6c445_75%,#e3a21b_100%)] lg:max-w-none lg:rounded-[3rem]">
          <div
            aria-hidden
            className="hex-pattern absolute inset-0 opacity-70"
          />
          <Image
            src="/images/bee.png"
            alt="A phone showing a jar of honey, with bees around it"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-contain object-center p-6"
          />
        </div>
      </div>
    </section>
  );
}
