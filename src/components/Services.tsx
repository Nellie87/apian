import Image from "next/image";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="rounded-[1.75rem] bg-[#b7c4ae] px-5 py-8 sm:rounded-[2.25rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
            <div className="max-w-xs shrink-0 lg:w-52 xl:w-60">
              <h2 className="font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl">
                Our services
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-[15px]">
                Hive visits, inspections, and hands-on help from our Ruiru keepers.
              </p>
              <a
                href="#visit"
                className="mt-6 inline-flex rounded-full bg-[#f6f1e8] px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Get in touch
              </a>
            </div>

            <ul className="flex flex-1 flex-wrap justify-center gap-x-6 gap-y-8 lg:grid lg:grid-cols-5 lg:gap-x-4">
              {services.map((service) => (
                <li key={service.name} className="w-36 text-center sm:w-40 lg:w-auto">
                  <div className="relative mx-auto size-28 overflow-hidden rounded-full bg-[#9aab92] shadow-[0_14px_28px_rgba(42,26,18,0.16)] sm:size-32 lg:size-[6.5rem] xl:size-36">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink sm:text-base">
                    {service.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
