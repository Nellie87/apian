import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate bg-white text-ink">
      <div className="mx-auto grid min-w-0 max-w-[90rem] grid-cols-2 items-center gap-3 px-4 pb-2 pt-20 sm:gap-6 sm:px-10 sm:pb-6 sm:pt-28 lg:min-h-[600px] lg:gap-8 lg:px-12 lg:pb-8 lg:pt-24 xl:px-16">
        <div className="min-w-0">
          <p className="animate-fade-up text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/55 sm:text-[11px] sm:tracking-[0.22em] lg:text-xs">
            Naturally harvested 
          </p>

          <h1 className="animate-fade-up delay-1 mt-3 font-display text-[clamp(1.85rem,4.8vw,4.35rem)] font-bold leading-[0.95] tracking-[-0.04em] text-ink sm:mt-4">
            Purest essence
            <br />
            of <span className="text-[#c56f14]">bee kind</span>
          </h1>

          <div className="animate-fade-up delay-3 mt-5 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#products"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white shadow-[0_14px_30px_rgba(42,26,18,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 sm:min-h-12 sm:px-7 sm:py-3 sm:text-sm"
            >
              Shop Our Honey
            </a>
            <a
              href="#honey"
              className="inline-flex min-h-10 items-center justify-center px-1 text-xs font-semibold text-ink/75 transition hover:text-ink sm:min-h-12 sm:px-2 sm:text-sm"
            >
              Why Us
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <Image
            src="/images/header9.png"
            alt="Honeycomb with a wooden honey dipper and white blossoms"
            width={2048}
            height={2048}
            priority
            sizes="(min-width: 1024px) 40vw, 46vw"
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
