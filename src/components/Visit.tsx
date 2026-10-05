import Image from "next/image";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-5 py-16 sm:px-8 lg:py-24 lg:pr-16 xl:pl-24">
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
            <p className="font-script text-2xl text-orange sm:text-3xl">Visit us</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Come see us in Ruiru — or message us today
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
              We welcome visitors by appointment. Call, WhatsApp, or write and we
              will help you with products, hive work, or a farm visit.
            </p>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                  Location
                </dt>
                <dd className="mt-1.5 text-base font-medium text-ink">
                  {site.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-base font-medium text-ink transition hover:text-orange"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base font-medium text-ink transition hover:text-orange"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Pollinators — I would like to get in touch.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
              >
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}`}
                className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 py-8 lg:px-10 lg:py-12">
          <div className="relative aspect-[736/957] w-[18rem] sm:w-[22rem] lg:w-[26rem]">
            <Image
              src="/images/propolis2.png"
              alt="A phone showing a jar of honey, with bees around it"
              fill
              sizes="(max-width: 1024px) 70vw, 416px"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
