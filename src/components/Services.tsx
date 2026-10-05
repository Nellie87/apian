import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/lib/site";

// Bento layout on large screens: one tall feature card, then a mix of widths.
const spans = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
] as const;

export function Services() {
  return (
    <section id="services" className="relative isolate overflow-hidden bg-bark text-cream">
      <div
        aria-hidden
        className="hex-pattern absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_10%_0%,black,transparent_65%)]"
      />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            align="left"
            tone="dark"
            eyebrow="What we do"
            title={
              <>
                Beyond the jar, <em>we work with bees.</em>
              </>
            }
          />
          <a
            href="#visit"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-yellow px-7 py-4 text-sm font-semibold text-ink transition hover:bg-cream"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[17rem] lg:gap-5">
          {services.map((service, index) => (
            <li
              key={service.name}
              className={`reveal group relative isolate min-h-72 overflow-hidden rounded-[2rem] ring-1 ring-white/10 ${spans[index] ?? "lg:col-span-6"} ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-t from-bark via-bark/55 to-transparent"
              />

              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <span className="font-display text-sm tracking-[0.2em] text-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className={`font-display font-medium leading-tight tracking-tight ${
                      index === 0 ? "text-4xl sm:text-5xl" : "text-3xl"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
                    {service.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
