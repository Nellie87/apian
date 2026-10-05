import Image from "next/image";
import { honeyFeatures } from "@/lib/site";

const onLeft = {
  leftTop: true,
  leftBottom: true,
  top: false,
  bottom: false,
} as const;

/*
 * A dotted bee flight-path that links each point to the jar, drawn in the style of
 * public/images/line.jpg. The base drawing points right and rises; the four
 * positions are reached by mirroring, so one path serves every corner.
 */
function BeeTrail({ place }: { place: (typeof honeyFeatures)[number]["place"] }) {
  const mirrorX = !onLeft[place];
  const flipY = place === "leftTop" || place === "top";
  const flip = mirrorX ? (flipY ? "-scale-100" : "-scale-x-100") : flipY ? "-scale-y-100" : "";

  return (
    <svg
      viewBox="0 0 104 44"
      fill="none"
      aria-hidden
      className={`pointer-events-none absolute top-1/2 h-5 w-9 -translate-y-1/2 text-ink/70 sm:h-7 sm:w-12 lg:h-8 lg:w-16 xl:h-9 xl:w-20 ${flip} ${
        onLeft[place]
          ? "-right-9 sm:-right-12 lg:-right-16 xl:-right-20"
          : "-left-9 sm:-left-12 lg:-left-16 xl:-left-20"
      }`}
    >
      <path
        d="M3 38C14 38 20 32 28 29C50 9 22 7 42 27C54 33 62 24 74 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3.5 4.5"
      />
      <g transform="translate(86 12) rotate(-15)">
        <ellipse
          cx="-2"
          cy="-6"
          rx="5"
          ry="2.8"
          transform="rotate(-30 -2 -6)"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="3.2"
          cy="-5.4"
          rx="4.2"
          ry="2.4"
          transform="rotate(12 3.2 -5.4)"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse cx="0" cy="0" rx="6.4" ry="4.6" fill="#ffd237" stroke="currentColor" strokeWidth="1.4" />
        <path d="M-2.2 -3.8v7.6M1.3 -4v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="7" cy="-0.8" r="2.8" fill="currentColor" />
        <path
          d="M8.4 -3.2c1-2.2 3.2-2.6 3.8-1"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
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
        <header className="text-blur mx-auto w-fit px-4 text-center">
          <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-4xl">
            Why our
          </p>
          <h2 className="font-display -mt-1 text-5xl font-medium italic leading-none tracking-tight text-ink sm:-mt-3 sm:text-8xl">
            Honey
          </h2>
        </header>

        {/* points | jar | points as real grid columns at every width. The jar is in flow, so nothing drifts out of alignment. */}
        <div className="mx-auto mt-4 grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-9 sm:gap-x-12 lg:mt-8 lg:gap-x-16 xl:gap-x-20">
          {(["left", "right"] as const).map((side) => (
            <ul
              key={side}
              className={`row-start-1 flex min-w-0 flex-col justify-between gap-6 py-2 sm:gap-8 lg:gap-10 lg:py-4 ${
                side === "left" ? "col-start-1 items-end text-right" : "col-start-3 items-start text-left"
              }`}
            >
              {honeyFeatures
                .filter((feature) => onLeft[feature.place] === (side === "left"))
                .map((feature) => {
                  const detail = feature.detail
                    .replace(/^-\s*/, "")
                    .replace(/\s+\./, ".")
                    .replace(/^./, (c) => c.toUpperCase());
                  return (
                    <li key={feature.lead} className="relative min-w-0 hyphens-auto max-w-[16rem]">
                      <BeeTrail place={feature.place} />
                      <h3 className="text-[11.5px] font-semibold leading-tight tracking-tight text-ink sm:text-[14px] lg:text-[16px]">
                        {feature.lead}
                      </h3>
                      <p className="mt-0.5 text-[10.5px] leading-[1.35] text-[#6b5a4e] sm:mt-1 sm:text-[12.5px] sm:leading-snug lg:text-[14px] lg:leading-relaxed">
                        {detail}
                      </p>
                    </li>
                  );
                })}
            </ul>
          ))}

          <div className="pointer-events-none relative col-start-2 row-start-1 aspect-[728/665] w-24 self-center sm:w-44 lg:w-[18rem] xl:w-[22rem]">
            <Image
              src="/images/honey-jar.png"
              alt="Jar of golden honey with a wooden dipper and honeycomb"
              fill
              sizes="(min-width: 1280px) 352px, (min-width: 1024px) 288px, (min-width: 640px) 176px, 96px"
              className="object-contain drop-shadow-[0_22px_28px_rgba(90,55,20,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
