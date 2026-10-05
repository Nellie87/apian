import Image from "next/image";
import Link from "next/link";

const assurances = ["From our own apiaries", "No additives", "Hive-to-home delivery"];

const marqueeItems = [
  "Raw honey",
  "Propolis",
  "Beeswax skincare",
  "Herbal teas",
  "Apitourism",
  "Hive installation",
  "Beekeeping training",
  "Bee removal",
];

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4 shrink-0 text-orange"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* honeycomb lattice that fades out toward the bottom-left */}
        <div
          aria-hidden
          className="hex-pattern absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_85%_20%,black,transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute -right-40 -top-40 -z-10 size-[44rem] rounded-full bg-yellow/30 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-16">
          <div className="min-w-0">
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              <span aria-hidden className="size-2 rounded-full bg-yellow-deep" />
              Beekeeping &amp; Apitherapy
              <span className="hidden sm:inline">· Ruiru, Kenya</span>
            </p>

            <h1 className="animate-fade-up delay-1 mt-6 font-display text-[clamp(3rem,7.4vw,6.25rem)] font-medium leading-[0.96] tracking-[-0.035em] text-balance text-ink">
              Honey, the way the bees{" "}
              <em className="font-normal text-orange">made it.</em>
            </h1>

            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">
              Raw honey, propolis and beeswax skincare from our own hives, plus
              hive installation, training and apiary visits across Kenya.
            </p>

            <div className="animate-fade-up delay-3 mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-orange"
              >
                Shop our honey
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/#honey"
                className="inline-flex items-center rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold text-ink transition hover:border-ink hover:bg-paper"
              >
                Why our honey
              </Link>
            </div>

            <ul className="animate-fade-up delay-4 mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-ink/80">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-soft-rise delay-2 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,#fde7a0_0%,#f6c445_55%,#e3a21b_100%)] shadow-2xl shadow-yellow-deep/30 lg:rounded-[3rem]">
              <Image
                src="/images/header9.png"
                alt="Golden honeycomb with a wooden dipper and white blossoms"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="scale-110 object-contain"
              />
            </div>

            <div
              className="animate-float absolute -bottom-6 left-3 flex items-center gap-3 rounded-2xl bg-paper px-5 py-4 shadow-xl shadow-ink/15 ring-1 ring-ink/5 sm:-left-6"
              style={{ "--r": "-2deg" } as React.CSSProperties}
            >
              <span
                aria-hidden
                className="hex-clip grid size-11 place-items-center bg-yellow text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3C8 9 6 12 6 15a6 6 0 0 0 12 0c0-3-2-6-6-12Z" />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg leading-tight text-ink">
                  Raw &amp; unheated
                </p>
                <p className="text-xs text-ink-muted">Enzymes and pollen intact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling range strip */}
      <div
        aria-label="What we offer"
        className="overflow-hidden border-y border-bark bg-bark py-4 text-cream"
      >
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {marqueeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center font-display text-xl italic sm:text-2xl"
                >
                  <span className="px-6 sm:px-9">{item}</span>
                  <span
                    aria-hidden
                    className="hex-clip size-3 shrink-0 bg-yellow"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
