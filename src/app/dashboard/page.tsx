import Link from "next/link";

export const metadata = {
  title: "Staff dashboard | Pollinators",
  description: "Internal staff area for Pollinators Beekeeping and Apitherapy.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-[100svh] bg-mist px-5 py-16">
      <div className="mx-auto max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
          Staff only
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink">
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
