import Image from "next/image";
import { BadgeCheck, FlaskConical, Flower2, Truck } from "lucide-react";
import { honeyFeatures } from "@/lib/site";

const onLeft = {
  leftTop: true,
  leftBottom: true,
  top: false,
  bottom: false,
} as const;

// One icon per feature, in the same order as `honeyFeatures` (collect, process, pure, local).
// Plain black outline icons (Lucide), no fills.
const featureIcons = [Flower2, FlaskConical, BadgeCheck, Truck] as const;

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
    <section id="honey" className="relative z-10 overflow-x-clip">
      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-8 sm:py-10 lg:py-12">
        <header className="hidden text-center sm:block">
          <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-4xl">
            Why our
          </p>
          <h2 className="font-display -mt-1 text-5xl font-medium italic leading-none tracking-tight text-ink sm:-mt-3 sm:text-8xl">
            Honey
          </h2>
        </header>

        {/* Phone layout: honey drip strip on the left, white panel with icon badges */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_40px_-24px_rgba(90,55,20,0.5)] ring-1 ring-ink/10 sm:hidden">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-[32%] bg-[#f6ecda]"
          >
            <Image
              src="/images/honey-strip.jpg"
              alt=""
              fill
              sizes="110px"
              className="object-cover object-[46%_center]"
            />
          </div>

          <div className="relative ml-[32%] bg-white pb-9 pt-8">
            <h2 className="pl-14 pr-4 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink">
              Why our
              <br />
              <span className="italic text-[#c56f14]">Honey</span>
            </h2>

            <ul className="mt-9 space-y-7">
              {honeyFeatures.map((feature, index) => {
                const detail = feature.detail
                  .replace(/^-\s*/, "")
                  .replace(/\s+\./, ".")
                  .replace(/^./, (c) => c.toUpperCase());
                const Icon = featureIcons[index];
                return (
                  <li key={feature.lead} className="relative pl-14 pr-3">
                    {/* Same colour as the panel, so it reads as the panel bulging into the strip */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 flex size-[5.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-end rounded-full bg-white pr-2 shadow-[-4px_6px_14px_rgba(150,100,10,0.3)]"
                    >
                      <span className="grid size-[3.75rem] place-items-center rounded-full bg-white text-black ring-2 ring-[#e8a812]/70">
                        <Icon size={32} strokeWidth={1.75} aria-hidden />
                      </span>
                    </span>
                    <div className="relative py-3">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-ink/25 to-transparent"
                      />
                      <h3 className="text-base font-semibold leading-snug text-ink">
                        {feature.lead}
                      </h3>
                      <p className="mt-1 text-[13.5px] leading-snug text-ink/80">{detail}</p>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-ink/25 to-transparent"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto mt-8 hidden w-full min-w-0 max-w-5xl sm:block">
          <div className="grid grid-cols-2 items-center gap-x-52 lg:gap-x-[19rem] xl:gap-x-[23rem]">
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
                      <p className="text-sm leading-snug text-[#5e4e44] lg:text-[15px] lg:leading-relaxed">
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
