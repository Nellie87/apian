import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="animate-soft-rise max-w-xl">
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Get to Know Us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            We grow healthy colonies, harvest with care, and share the healing
            tradition of bee products with families and farms across Kenya.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            From the apiary to your kitchen shelf, every jar is rooted in
            sustainable practice and neighbourly trust in Ruiru.
          </p>
          <p className="mt-6 font-script text-3xl text-ink/80">{site.shortName}</p>
          <a
            href="#visit"
            className="mt-6 inline-flex rounded-full bg-yellow px-7 py-3 text-sm font-semibold text-ink transition hover:bg-yellow-deep"
          >
            Read More
          </a>
        </div>

        <div className="animate-soft-rise delay-2 relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
          {/* <div className="hex-clip absolute inset-0 bg-orange/10" /> */}
          <div className="absolute inset-[10px] overflow-hidden bg-mist">
            <Image
              src="/images/test 2.jpeg"
              alt="Honey jars with flowers and honeycomb"
              fill
              sizes="(max-width: 700px) 90vw, 350px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
