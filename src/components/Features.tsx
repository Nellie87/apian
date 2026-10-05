import Image from "next/image";
import { honeyFeatures } from "@/lib/site";

const onLeft = {
  leftTop: true,
  leftBottom: true,
  top: false,
  bottom: false,
} as const;

function CalloutArrow({ place }: { place: (typeof honeyFeatures)[number]["place"] }) {
  const onLeft = place === "leftTop" || place === "leftBottom";
  const curveUp = place === "leftTop" || place === "top";
  const curve = onLeft
    ? curveUp
      ? "M90 8C62 8 40 20 16 20"
      : "M90 32C62 32 40 20 16 20"
    : curveUp
      ? "M8 8C36 8 58 20 82 20"
      : "M8 32C36 32 58 20 82 20";
  const head = onLeft ? "M28 12 14 20 28 28" : "M70 12 84 20 70 28";

  return (
    <svg
      viewBox="0 0 96 40"
      fill="none"
      aria-hidden
      className={`pointer-events-none absolute top-1/2 h-8 w-24 -translate-y-1/2 text-[#8a7364] ${
        onLeft
          ? "-right-[4.75rem]"
          : "-left-[4.75rem]"
      }`}
    >
      <path d={curve} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d={head} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Features() {
  return (
    <section id="honey" className="relative z-10 overflow-x-clip">
      {/* Lets the honeycomb pattern fade back in after the hero's fade-out */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white to-transparent sm:h-40"
      />
      <div className="mx-auto max-w-6xl px-3 pb-6 pt-10 sm:px-8 sm:pb-10 sm:pt-16 lg:pb-12 lg:pt-20">
        {/* Small honeycomb cluster as a section marker */}
        <div aria-hidden className="relative -top-8 mb-6 flex justify-center sm:-top-12 sm:mb-8 lg:-top-16">
          <svg viewBox="0 0 56 40" className="h-10 w-14 text-[#e8a812]" strokeLinejoin="round">
            <path
              d="M28 4 34.93 8v8L28 20l-6.93-4V8z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M19.34 19 26.27 23v8l-6.93 4-6.93-4v-8z"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <path
              d="M36.66 19 43.59 23v8l-6.93 4-6.93-4v-8z"
              fill="currentColor"
              fillOpacity="0.18"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <header className="text-center">
          <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-4xl">
            Why our
          </p>
          <h2 className="font-display -mt-1 text-5xl font-medium italic leading-none tracking-tight text-ink sm:-mt-3 sm:text-8xl">
            Honey
          </h2>
        </header>

        {/* Below lg: jar on top, the four points in a readable 2x2 grid (no shrinking) */}
        <div className="mt-6 lg:hidden">
          <div className="relative mx-auto aspect-[728/665] w-40 sm:w-56">
            <Image
              src="/images/honey-jar.png"
              alt="Jar of golden honey with a wooden dipper and honeycomb"
              fill
              sizes="(min-width: 640px) 224px, 160px"
              className="object-contain drop-shadow-[0_22px_28px_rgba(90,55,20,0.16)]"
            />
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            {honeyFeatures.map((feature) => {
              const detail = feature.detail
                .replace(/^-\s*/, "")
                .replace(/\s+\./, ".")
                .replace(/^./, (c) => c.toUpperCase());
              return (
                <li
                  key={feature.lead}
                  className="rounded-xl border border-[#e8a812]/30 border-t-2 border-t-[#e8a812] bg-white/90 p-3 shadow-[0_6px_16px_-10px_rgba(90,55,20,0.35)] sm:p-4"
                >
                  <h3 className="text-[15px] font-semibold leading-snug text-ink">{feature.lead}</h3>
                  <p className="mt-1 text-[14px] leading-snug text-[#5e4e44]">{detail}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* lg+: points | jar | points as real grid columns. The jar is in flow, so nothing drifts out of alignment. */}
        <div className="mx-auto mt-8 hidden w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-24 lg:grid xl:gap-x-28">
          {(["left", "right"] as const).map((side) => (
            <ul
              key={side}
              className={`row-start-1 flex min-w-0 flex-col justify-between gap-10 py-4 ${
                side === "left" ? "col-start-1 items-end text-right" : "col-start-3 items-start text-left"
              }`}
            >
              {honeyFeatures
                .filter((feature) => onLeft[feature.place] === (side === "left"))
                .map((feature) => (
                  <li key={feature.lead} className="relative min-w-0 max-w-[16rem]">
                    <CalloutArrow place={feature.place} />
                    <p className="text-[15px] leading-relaxed text-[#5e4e44]">
                      <span className="font-semibold text-ink">{feature.lead}</span> {feature.detail}
                    </p>
                  </li>
                ))}
            </ul>
          ))}

          <div className="pointer-events-none relative col-start-2 row-start-1 aspect-[728/665] w-[18rem] self-center xl:w-[22rem]">
            <Image
              src="/images/honey-jar.png"
              alt="Jar of golden honey with a wooden dipper and honeycomb"
              fill
              sizes="(min-width: 1280px) 352px, 288px"
              className="object-contain drop-shadow-[0_22px_28px_rgba(90,55,20,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
