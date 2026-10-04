import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-ink">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:flex items-center justify-end pt-20 pb-8 pr-8 pl-2 xl:pr-12">
        <Image
          src="/images/header9.png"
          alt="Honeycomb with a wooden honey dipper and white blossoms"
          width={2048}
          height={2048}
          priority
          sizes="(min-width: 1024px) 46vw, 90vw"
          className="h-full w-auto max-w-full object-contain"
        />
      </div>

      <div className="relative mx-auto grid max-w-[90rem] items-center lg:min-h-[720px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:py-28 lg:pl-12 lg:pr-8 xl:pl-16">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55 sm:text-xs">
            Naturally harvested in Ruiru
          </p>

          <h1 className="animate-fade-up delay-1 mt-4 font-display text-[clamp(3.1rem,6.2vw,5.4rem)] font-bold leading-[0.92] tracking-[-0.045em] text-ink">
            Pure Honey
            <br />
            Everyday
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-md text-base font-medium leading-7 text-ink/65 sm:text-lg sm:leading-8">
            Fresh, unheated honey from our Ruiru apiaries — floral, full-bodied,
            and packed straight from the comb.
          </p>

          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(42,26,18,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
            >
              Shop Our Honey
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-semibold text-ink/75 transition hover:text-ink"
            >
              Our story
            </a>
          </div>
        </div>

        <div className="relative mx-auto mb-8 aspect-square w-full max-w-md px-4 lg:hidden">
          <Image
            src="/images/header9.png"
            alt="Honeycomb with a wooden honey dipper and white blossoms"
            fill
            priority
            sizes="90vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
