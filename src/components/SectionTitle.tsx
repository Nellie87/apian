export function SectionTitle({
  title,
  className = "",
  blur = true,
}: {
  title: string;
  className?: string;
  /** Frost the background grid behind the title. Turn off over solid backgrounds. */
  blur?: boolean;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`${blur ? "text-blur " : ""}inline-block font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl`}>
        {title}
      </h2>
    </div>
  );
}
