export function SectionTitle({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
