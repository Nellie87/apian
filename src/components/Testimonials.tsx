"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { testimonials } from "@/lib/site";

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6 fill-yellow stroke-yellow-deep sm:size-7"
      strokeWidth="1"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 1.8l2.9 6.6 7.2.7-5.4 4.8 1.6 7-6.3-3.8-6.3 3.8 1.6-7L1.9 9.1l7.2-.7L12 1.8z" />
    </svg>
  );
}

function Paperclip() {
  return (
    <svg
      viewBox="-3 -3 50 116"
      className="pointer-events-none absolute -top-7 right-8 z-10 h-20 w-auto rotate-[8deg] drop-shadow sm:-top-9 sm:right-14 sm:h-24"
      fill="none"
      stroke="#4f6b1a"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 78V24A11 11 0 0 1 35 24V88A17 17 0 0 1 1 88V40" />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const goTo = useEffectEvent((index: number) => {
    const len = testimonials.length;
    setActive(((index % len) + len) % len);
  });

  useEffect(() => {
    const timer = window.setInterval(() => goTo(active + 1), 8000);
    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16 lg:py-24">
        <h2
          className="text-center font-script text-6xl font-bold text-leaf sm:text-7xl lg:text-8xl"
          style={{ textShadow: "3px 3px 0 var(--yellow)" }}
        >
          Testimonial
        </h2>

        <div className="relative mx-auto mt-10 max-w-2xl sm:mt-16">
          {/* stacked sheets behind the card */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 -translate-y-3 rotate-[3deg] rounded-sm border border-yellow/60 bg-[#fff6d6] shadow-md"
          />
          <div
            aria-hidden
            className="absolute inset-0 translate-x-1 translate-y-3 -rotate-[2.5deg] rounded-sm border border-leaf/20 bg-[#f1f5e6] shadow-md"
          />
          <div
            aria-hidden
            className="absolute inset-0 translate-y-5 rotate-[1.5deg] rounded-sm border border-yellow/60 bg-[#fffbe9] shadow-md"
          />

          <figure
            key={active}
            role="button"
            tabIndex={0}
            aria-label="Show next testimonial"
            onClick={() => goTo(active + 1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
                e.preventDefault();
                goTo(active + 1);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                goTo(active - 1);
              }
            }}
            className="animate-soft-rise relative z-[1] -rotate-[1.5deg] cursor-pointer select-none rounded-sm border border-leaf/15 bg-white px-6 pb-8 pt-10 shadow-xl transition-transform duration-200 hover:-rotate-1 active:scale-[0.99] sm:px-12 sm:pb-10 sm:pt-12"
          >
            <Paperclip />
            <div
              className="flex justify-center gap-3"
              role="img"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            <blockquote className="mt-8 font-display text-base leading-loose tracking-wide text-leaf sm:text-lg">
              {item.quote}
            </blockquote>

            <figcaption className="mt-8 text-right">
              <span className="inline-block border-b-4 border-yellow font-display text-xl font-semibold tracking-[0.2em] text-leaf sm:text-2xl">
                {item.name}
              </span>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.25em] text-yellow-deep">
                {item.role}
              </span>
            </figcaption>
          </figure>
        </div>

        <p className="mt-10 text-center text-xs sm:mt-12 font-medium uppercase tracking-[0.25em] text-leaf/60">
          Tap the card for the next one
        </p>

        <div
          className="mt-4 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Testimonials"
        >
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(index)}
              className={`size-2.5 rounded-full transition ${
                index === active ? "bg-yellow-deep" : "bg-leaf/25 hover:bg-leaf/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
