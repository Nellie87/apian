import type { ReactNode } from "react";

/** Eyebrow + serif headline (+ optional intro) used at the top of every section. */
export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "center",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  /** Wrap a word in <em> for the italic accent. */
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <header
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow ? (
        <p
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-yellow" : "text-orange"
          }`}
        >
          <span aria-hidden className="size-1.5 rotate-45 bg-current" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl [&_em]:font-normal [&_em]:italic ${
          dark ? "text-cream [&_em]:text-yellow" : "text-ink [&_em]:text-orange"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
            dark ? "text-cream/70" : "text-ink-muted"
          }`}
        >
          {children}
        </p>
      ) : null}
    </header>
  );
}
