function BeeMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <ellipse cx="16" cy="18" rx="7" ry="8" fill="#E87A1A" />
      <path d="M16 7c1.6 0 2.9.9 3.4 2.2h-6.8C13.1 7.9 14.4 7 16 7Z" fill="#E87A1A" />
      <path d="M9 14 4.5 11.5l.8-1.5L9.5 12.5M23 14l4.5-2.5-.8-1.5L22.5 12.5" stroke="#E87A1A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11.5 16.5h9M12 20h8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SectionTitle({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <BeeMark className="mx-auto size-8" />
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
