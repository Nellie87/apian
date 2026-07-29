import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-yellow text-ink">
      {/* Soft background lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 z-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-white/20 blur-[110px]"
      />

      {/* Subtle decorative honeycomb shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[28%] hidden h-20 w-20 rotate-12 rounded-[28px] border border-ink/5 lg:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[9%] top-[38%] hidden h-14 w-14 -rotate-12 rounded-[20px] border border-ink/5 lg:block"
      />

      {/* Honey drip artwork */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-0
          h-[clamp(17rem,37vw,35rem)]
          bg-[url('/images/yellow_bg.png')]
          bg-[length:100%_auto]
          bg-bottom
          bg-no-repeat
        "
      />

      {/* Hero content */}
      <div
        className="
          relative z-10 mx-auto flex
          min-h-[780px]
          max-w-7xl
          items-start
          justify-center
          px-5
          pb-[clamp(17rem,35vw,31rem)]
          pt-32
          sm:min-h-[820px]
          sm:px-8
          sm:pt-36
          lg:min-h-[850px]
          lg:px-10
          lg:pt-28
        "
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/25 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-orange" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/70 sm:text-xs">
              Naturally harvested in Ruiru
            </span>
          </div>

          {/* Main title */}
          <h1
            className="
              animate-fade-up delay-1
              mt-6
              font-display
              text-[clamp(3.8rem,8vw,7.5rem)]
              font-bold
              leading-[0.82]
              tracking-[-0.055em]
              text-ink
            "
          >
            {site.shortName}
          </h1>

          {/* Script subtitle */}
          <p
            className="
              animate-fade-up delay-2
              mt-5
              rotate-[-1deg]
              font-script
              text-[clamp(1.65rem,3vw,2.5rem)]
              leading-none
              text-ink/90
            "
          >
            Beekeeping &amp; Apitherapy
          </p>

          {/* Description */}
          <p
            className="
              animate-fade-up delay-3
              mx-auto
              mt-7
              max-w-xl
              text-base
              font-medium
              leading-7
              text-ink/70
              sm:text-lg
              sm:leading-8
            "
          >
            Pure, carefully harvested honey from our Ruiru apiaries,
            delivered naturally from the hive to your table.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-4 mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="
                inline-flex min-h-13 items-center justify-center
                rounded-full
                bg-ink
                px-8
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_14px_30px_rgba(45,21,7,0.18)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-ink/90
                hover:shadow-[0_18px_38px_rgba(45,21,7,0.24)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ink
                focus-visible:ring-offset-4
                focus-visible:ring-offset-yellow
              "
            >
              Shop Our Honey
            </a>

            <a
              href="#story"
              className="
                inline-flex min-h-13 items-center justify-center
                rounded-full
                border border-ink/15
                bg-white/20
                px-7
                py-3.5
                text-sm
                font-semibold
                text-ink
                backdrop-blur-sm
                transition
                duration-300
                hover:border-ink/25
                hover:bg-white/35
              "
            >
              Discover Our Story
            </a>
          </div>

          {/* Trust points */}
          <div
            className="
              animate-fade-up delay-4
              mt-9
              flex flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              text-xs
              font-medium
              text-ink/60
              sm:text-sm
            "
          >
            <span>100% Pure Honey</span>

            <span
              aria-hidden
              className="hidden h-1 w-1 rounded-full bg-ink/30 sm:block"
            />

            <span>Locally Harvested</span>

            <span
              aria-hidden
              className="hidden h-1 w-1 rounded-full bg-ink/30 sm:block"
            />

            <span>Nothing Artificial</span>
          </div>
        </div>
      </div>

      {/* Smooth white transition at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-b from-transparent to-white/80"
      />
    </section>
  );
}