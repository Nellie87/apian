"use client";

import { useEffect, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { testimonials } from "@/lib/site";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-yellow-deep" aria-hidden>
      <path d="M12 1.8l2.9 6.6 7.2.7-5.4 4.8 1.6 7-6.3-3.8-6.3 3.8 1.6-7L1.9 9.1l7.2-.7L12 1.8z" />
    </svg>
  );
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={dir === "next" ? "M4 10h12M11 5l5 5-5 5" : "M16 10H4M9 5l-5 5 5 5"} />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

const arrowButton =
  "grid size-12 place-items-center rounded-full border border-ink/30 text-ink transition hover:bg-ink hover:text-yellow";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = testimonials[active];

  const step = (delta: number) =>
    setActive((current) => {
      const len = testimonials.length;
      return (((current + delta) % len) + len) % len;
    });

  // Auto-advance; the timer restarts after every manual change.
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      9000,
    );
    return () => window.clearInterval(timer);
  }, [active, paused]);

  return (
    <section
      aria-label="Customer testimonials"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#fde7a0_0%,#f6c445_100%)] px-6 py-14 sm:px-14 sm:py-20 lg:rounded-[3.5rem] lg:px-20"
      >
        <div
          aria-hidden
          className="hex-pattern absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_100%_100%,black,transparent_65%)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -top-6 left-6 select-none font-display text-[12rem] leading-none text-ink/10 sm:left-14 sm:text-[16rem]"
        >
          &ldquo;
        </span>

        <div className="relative grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-16">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Kind words"
              title={
                <>
                  Loved by <em>customers and keepers.</em>
                </>
              }
              className="[&_em]:text-ink!"
            />

            <figure key={active} className="animate-soft-rise mt-12 max-w-3xl">
              <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              <blockquote className="mt-6 font-display text-2xl font-normal leading-snug tracking-tight text-ink text-pretty sm:text-3xl lg:text-4xl">
                {item.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid size-12 place-items-center rounded-full bg-ink font-display text-lg text-yellow"
                >
                  {initials(item.name)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{item.name}</span>
                  <span className="block text-sm text-ink/70">{item.role}</span>
                </span>
              </figcaption>
            </figure>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous testimonial"
                className={arrowButton}
              >
                <Arrow dir="prev" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next testimonial"
                className={arrowButton}
              >
                <Arrow dir="next" />
              </button>

              <div className="ml-2 flex items-center gap-2" aria-hidden>
                {testimonials.map((t, index) => (
                  <span
                    key={t.name}
                    className={`h-1.5 rounded-full bg-ink transition-all duration-300 ${
                      index === active ? "w-8" : "w-1.5 opacity-30"
                    }`}
                  />
                ))}
              </div>
              <span className="sr-only" aria-live="polite">
                Testimonial {active + 1} of {testimonials.length}
              </span>
            </div>
          </div>

          {/* Desktop: pick a voice directly */}
          <ul className="hidden self-end lg:block lg:space-y-3">
            {testimonials.map((t, index) => {
              const on = index === active;
              return (
                <li key={t.name}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={on}
                    className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                      on
                        ? "border-ink bg-ink text-cream shadow-lg shadow-ink/20"
                        : "border-ink/20 bg-paper/40 text-ink hover:border-ink/50 hover:bg-paper/70"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`grid size-10 shrink-0 place-items-center rounded-full font-display ${
                        on ? "bg-yellow text-ink" : "bg-ink text-yellow"
                      }`}
                    >
                      {initials(t.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">
                        {t.name}
                      </span>
                      <span
                        className={`block truncate text-xs ${
                          on ? "text-cream/70" : "text-ink/60"
                        }`}
                      >
                        {t.role}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
