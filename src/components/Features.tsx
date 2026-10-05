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
      className={`pointer-events-none absolute top-1/2 h-5 w-11 -translate-y-1/2 text-[#8a7364] sm:h-6 sm:w-14 lg:h-8 lg:w-24 ${
        onLeft
          ? "-right-8 sm:-right-12 lg:-right-[4.75rem]"
          : "-left-8 sm:-left-12 lg:-left-[4.75rem]"
      }`}
    >
      <path d={curve} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d={head} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Features() {
  return (
    <section id="honey" className="relative z-10 overflow-x-clip bg-white">
      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-8 sm:py-10 lg:py-12">
        <header className="text-center">
          <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-4xl">
            Why our
          </p>
          <h2 className="font-display -mt-1 text-5xl font-medium italic leading-none tracking-tight text-ink sm:-mt-3 sm:text-8xl">
            Honey
          </h2>
        </header>

        <div className="honey-fit relative mx-auto mt-6 w-full min-w-0 max-w-5xl sm:mt-8">
          <div className="grid grid-cols-2 items-center gap-x-44 sm:gap-x-52 lg:gap-x-[19rem] xl:gap-x-[23rem]">
            {(["left", "right"] as const).map((side) => (
              <ul
                key={side}
                className={`min-w-0 space-y-8 ${
                  side === "left" ? "pr-1 text-right" : "pl-1 text-left"
                } lg:space-y-10 lg:px-0 lg:text-center`}
              >
                {honeyFeatures
                  .filter((feature) => onLeft[feature.place] === (side === "left"))
                  .map((feature) => (
                    <li key={feature.lead} className="relative min-w-0 lg:mx-auto lg:max-w-[16rem]">
                      <CalloutArrow place={feature.place} />
                      <p className="text-[13px] leading-snug text-[#5e4e44] lg:text-[15px] lg:leading-relaxed">
                        <span className="font-semibold text-ink">{feature.lead}</span>{" "}
                        {feature.detail}
                      </p>
                    </li>
                  ))}
              </ul>
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-[728/665] w-28 -translate-x-1/2 -translate-y-1/2 sm:w-48 lg:w-[18rem] xl:w-[22rem]">
            <Image
              src="/images/honey-jar.png"
              alt="Jar of golden honey with a wooden dipper and honeycomb"
              fill
              sizes="(min-width: 1280px) 352px, (min-width: 1024px) 288px, (min-width: 640px) 192px, 84px"
              className="object-contain drop-shadow-[0_22px_28px_rgba(90,55,20,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
