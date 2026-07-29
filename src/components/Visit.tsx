import Image from "next/image";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-yellow text-ink">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/contact-field.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="font-script text-2xl text-orange sm:text-3xl">Visit us</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Come see us in Ruiru — or message us today
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
          We welcome visitors by appointment. Call, WhatsApp, or write and we
          will help you with products, hive work, or a farm visit.
        </p>

        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              Location
            </dt>
            <dd className="mt-2 text-base font-medium">{site.location}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              Phone / WhatsApp
            </dt>
            <dd className="mt-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="text-base font-medium transition hover:text-orange-deep"
              >
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              Email
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.email}`}
                className="text-base font-medium transition hover:text-orange-deep"
              >
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Pollinators — I would like to get in touch.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            Message on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}`}
            className="rounded-full border-2 border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-white/40"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
