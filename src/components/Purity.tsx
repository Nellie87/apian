import Image from "next/image";
import { purityPoints } from "@/lib/site";

function PurityIcon({ type }: { type: (typeof purityPoints)[number]["icon"] }) {
  const common = "size-7 text-orange";
  switch (type) {
    case "collect":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path d="M12 3c2.8 2.4 6 5.8 6 9.5A6 6 0 1 1 6 12.5C6 8.8 9.2 5.4 12 3Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 10v5M10 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "process":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path d="M8 7h8v3l2 2v7H6v-7l2-2V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 7V5.5a2 2 0 0 1 4 0V7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "pure":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path d="M12 4 18.5 8v8L12 20 5.5 16V8L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="m9.5 12 1.8 1.8 3.4-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "share":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.2 7.2l1.4 1.4M15.4 15.4l1.4 1.4M7.2 16.8l1.4-1.4M15.4 8.6l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Purity() {
  return (
    <section id="purity" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-square">
          <Image
            src="/images/services-hive.jpg"
            alt="Honey jars, honeycomb, and fresh harvest"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="size-7" fill="none" aria-hidden>
              <ellipse cx="16" cy="18" rx="7" ry="8" fill="#E87A1A" />
              <path d="M16 7c1.6 0 2.9.9 3.4 2.2h-6.8C13.1 7.9 14.4 7 16 7Z" fill="#E87A1A" />
            </svg>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Purity Of Honey
            </h2>
          </div>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            Every step from hive to jar is handled with care — so you taste what
            the bees made, nothing more.
          </p>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {purityPoints.map((point) => (
              <li key={point.title} className="flex gap-3">
                <div className="hex-clip flex size-12 shrink-0 items-center justify-center bg-orange/10">
                  <PurityIcon type={point.icon} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {point.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
