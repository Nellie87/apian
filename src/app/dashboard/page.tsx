import Link from "next/link";

export const metadata = {
  title: "Staff dashboard | Pollinators",
  description: "Internal staff area for Pollinators Beekeeping and Apitherapy.",
};

export default function DashboardPage() {
  return (
    <main className="hex-pattern flex min-h-svh items-center justify-center bg-cream px-5 py-16">
      <div className="w-full max-w-lg rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-2xl shadow-ink/10 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">
          Staff only
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink">
          Dashboard
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          The staff dashboard lives here, separate from the public marketing
          site. Connect authentication and internal tools when you are ready.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-semibold text-orange transition hover:text-orange-deep"
        >
          ← Return to public site
        </Link>
      </div>
    </main>
  );
}
