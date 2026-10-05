import Image from "next/image";
import { services } from "@/lib/site";

// Alternating corner shapes give each card the cut-paper look.
const shapes = [
  "rounded-[2rem_0.6rem_2rem_0.6rem]",
  "rounded-[0.6rem_2rem_0.6rem_2rem]",
] as const;

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16 lg:py-24">
        <header className="text-center">
          <p className="font-script text-2xl text-orange sm:text-3xl">What we do</p>
          <h2 className="mt-1 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Our <span className="italic">services</span>
          </h2>
        </header>

        <ul className="mt-20 flex flex-wrap sm:mt-28 justify-center gap-x-5 gap-y-20 lg:mt-32 lg:grid lg:grid-cols-5 lg:items-start lg:gap-x-6">
          {services.map((service, index) => (
            <li
              key={service.name}
              className={`group relative flex w-full flex-col items-center bg-[linear-gradient(165deg,#f4f7ef_0%,#e6ecdc_55%,#d8e2cb_100%)] px-5 pb-8 pt-16 text-center ring-1 ring-[#8fa386]/40 shadow-[0_26px_44px_-24px_rgba(70,95,60,0.45)] transition duration-500 hover:-translate-y-1.5 sm:w-[calc(50%-0.625rem)] lg:w-auto ${
                shapes[index % 2]
              } ${index % 2 === 1 ? "lg:mt-12" : ""}`}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(145deg,#f6d27a_0%,#c9962f_45%,#f1cf7a_100%)] p-[3px] shadow-[0_14px_28px_rgba(150,100,20,0.3)]">
                <div className="rounded-full bg-white p-1.5">
                  <div className="relative size-28 overflow-hidden rounded-full">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="112px"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {service.name}
              </h3>
              <span aria-hidden className="mt-3 block h-px w-8 bg-orange/70" />
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center sm:mt-16 lg:mt-20">
          <a
            href="#visit"
            className="inline-flex rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
