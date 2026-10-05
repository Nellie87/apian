import Image from "next/image";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="bg-white">
      <div className="grid grid-cols-2">
        <div className="flex items-center py-8 pl-4 pr-2 sm:px-8 sm:py-10 lg:py-14 lg:pr-16 xl:pl-24">
          <div className="w-full max-w-xl lg:ml-auto">
            <p className="font-script text-3xl text-orange sm:text-4xl lg:text-5xl">Visit us</p>
            <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight text-ink sm:mt-2 sm:text-4xl lg:text-6xl">
              Come see us in Ruiru, or Buzz us today
            </h2>
            <p className="mt-3 max-w-lg text-[11px] leading-snug text-ink-muted sm:mt-5 sm:text-base sm:leading-relaxed lg:text-lg">
              We welcome visitors by appointment. Call, WhatsApp, or write and we
              will help you with products, hive work, or a farm visit.
            </p>

            <dl className="mt-4 space-y-3 sm:mt-8 sm:space-y-5">
              <div>
                <dt className="text-[9px] font-semibold uppercase tracking-wider text-ink/45 sm:text-xs">
                  Location
                </dt>
                <dd className="mt-1 break-words text-xs font-medium text-ink sm:mt-1.5 sm:text-base">
                  {site.location}
                </dd>
              </div>
              <div>
                <dt className="text-[9px] font-semibold uppercase tracking-wider text-ink/45 sm:text-xs">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-1 sm:mt-1.5">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="break-words text-xs font-medium text-ink transition hover:text-orange sm:text-base"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[9px] font-semibold uppercase tracking-wider text-ink/45 sm:text-xs">
                  Email
                </dt>
                <dd className="mt-1 sm:mt-1.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-xs font-medium text-ink transition hover:text-orange sm:text-base"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-col items-start gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Pollinators — I would like to get in touch.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-ink px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-ink/85 sm:px-6 sm:py-3 sm:text-sm"
              >
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}`}
                className="inline-flex rounded-full border border-ink/20 px-3 py-2 text-[11px] font-semibold text-ink transition hover:border-ink sm:px-6 sm:py-3 sm:text-sm"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-8 pl-2 pr-3 sm:px-6 lg:px-10 lg:py-8">
          <div className="relative aspect-[736/957] w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[26rem]">
            <Image
              src="/images/bee.png"
              alt="A phone showing a jar of honey, with bees around it"
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 416px"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
