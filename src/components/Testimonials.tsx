"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useState } from "react";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const goTo = useEffectEvent((index: number) => {
    const len = testimonials.length;
    setActive(((index % len) + len) % len);
  });

  useEffect(() => {
    const timer = window.setInterval(() => goTo(active + 1), 5500);
    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:py-24">
        <div className="relative mx-auto size-28 overflow-hidden rounded-full border-4 border-white shadow-md sm:size-32">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          {item.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-orange">{item.role}</p>
        <blockquote className="mt-6 font-display text-lg italic leading-relaxed text-ink-muted sm:text-xl">
          “{item.quote}”
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(index)}
              className={`size-2.5 rounded-full transition ${
                index === active ? "bg-orange" : "bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
