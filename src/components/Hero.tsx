import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate text-ink">
      <div className="mx-auto grid min-w-0 max-w-[90rem] grid-cols-1 items-center gap-6 px-6 pb-8 pt-24 md:grid-cols-2 md:gap-6 md:px-10 md:pb-6 md:pt-28 lg:min-h-[600px] lg:gap-8 lg:px-12 lg:pb-8 lg:pt-24 xl:px-16">
        <div className="min-w-0 text-center md:text-left">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55 lg:text-xs">
            Naturally harvested
          </p>

          <h1 className="animate-fade-up delay-1 mt-3 font-display text-[clamp(2.5rem,10vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-ink md:mt-4 md:text-[clamp(2.25rem,4.8vw,4.35rem)]">
            Purest essence
            <br />
            of <span className="text-[#c56f14]">bee kind</span>
          </h1>

          <div className="animate-fade-up delay-3 mt-6 flex flex-col items-center gap-2 md:mt-8 md:flex-row md:flex-wrap md:gap-4">
            <a
              href="#products"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-orange px-8 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(197,111,20,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4"
            >
              Shop Our Honey
            </a>
            {/* <a
              href="#honey"
              className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-semibold text-ink/75 transition hover:text-ink"
            >
              Why Us <span aria-hidden className="ml-1">↓</span>
            </a> */}
          </div>
        </div>

        <div className="mx-auto min-w-0 w-full max-w-[22rem] md:max-w-none">
          <Image
            src="/images/header9.png"
            alt="Honeycomb with a wooden honey dipper and white blossoms"
            width={2048}
            height={2048}
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 46vw, 352px"
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
