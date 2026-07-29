import type { ReactNode } from "react";
import { honeyFeatures } from "@/lib/site";

function HexFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto flex size-[4.75rem] items-center justify-center sm:size-[5.5rem]">
      <div className="hex-clip absolute inset-0 bg-orange/15" />
      <div className="hex-clip absolute inset-[3px] bg-white" />
      <div className="hex-clip absolute inset-[5px] border border-orange/40 bg-white" />
      <div className="relative z-10 text-orange">{children}</div>
    </div>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    <path key="a" d="M8 10h8l-1 9H9l-1-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />,
    <path key="b" d="M12 4v3M9 10h6l-.7 9H9.7L9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />,
    <path key="c" d="M7 14c0 3.5 2.2 6 5 6s5-2.5 5-6c0-4-3-7-5-9-2 2-5 5-5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />,
    <path key="d" d="M12 5c2.5 2.2 5 5.2 5 8.2A5 5 0 0 1 7 13.2C7 10.2 9.5 7.2 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />,
  ];
  return (
    <svg viewBox="0 0 24 24" className="size-7 sm:size-8" fill="none" aria-hidden>
      {paths[index % paths.length]}
      {index === 0 ? (
        <path d="M9 10V8.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5V10" stroke="currentColor" strokeWidth="1.5" />
      ) : null}
    </svg>
  );
}

export function Features() {
  return (
    <section className="relative z-10 -mt-14 bg-white pb-6 sm:-mt-20 lg:-mt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 sm:gap-10 sm:px-8 lg:grid-cols-4 lg:py-14">
        {honeyFeatures.map((feature, index) => (
          <div
            key={feature.title}
            className={`animate-hex-pop text-center ${
              index === 1
                ? "delay-1"
                : index === 2
                  ? "delay-2"
                  : index === 3
                    ? "delay-3"
                    : ""
            }`}
          >
            <HexFrame>
              <FeatureIcon index={index} />
            </HexFrame>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink sm:text-xl">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {feature.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
