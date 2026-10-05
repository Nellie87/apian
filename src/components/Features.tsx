import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { honeyFeatures } from "@/lib/site";

export function Features() {
  return (
    <section id="honey" className="relative">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div className="reveal relative lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_35%,#fff3c4_0%,#f6c445_70%,#e3a21b_100%)] sm:aspect-[5/4] lg:aspect-square lg:rounded-[3rem]">
            <div aria-hidden className="hex-pattern absolute inset-0 opacity-70" />
            <Image
              src="/images/honey-jar.png"
              alt="Jar of golden honey with a wooden dipper and honeycomb"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain p-8 drop-shadow-[0_28px_30px_rgba(90,55,20,0.28)] sm:p-12"
            />
          </div>
          <p className="absolute -bottom-5 right-5 rounded-full bg-bark px-5 py-3 font-display text-lg italic text-cream shadow-xl shadow-ink/20 sm:right-8">
            Hive to home
          </p>
        </div>

        <div className="lg:pt-6">
          <SectionTitle
            align="left"
            eyebrow="Why our honey"
            title={
              <>
                Four careful steps, <em>one pure jar.</em>
              </>
            }
          >
            Honey is simple, so we keep it that way. Here is how it gets from
            our hives to your table.
          </SectionTitle>

          <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {honeyFeatures.map((feature, index) => (
              <li
                key={feature.lead}
                className="reveal group flex gap-5 py-6 sm:gap-7 sm:py-7"
              >
                <span className="w-14 shrink-0 font-display text-4xl font-light leading-none tabular-nums text-yellow-deep/70 transition-colors group-hover:text-orange sm:w-18 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                    {feature.lead}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-ink-muted">
                    {feature.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
