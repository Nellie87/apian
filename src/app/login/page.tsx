import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Staff login | Pollinators",
  description: "Staff access for Pollinators Beekeeping and Apitherapy.",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-orange focus:ring-4 focus:ring-yellow/40";

export default function LoginPage() {
  return (
    <main className="hex-pattern relative flex min-h-svh flex-col items-center justify-center bg-cream px-5 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-2xl shadow-ink/10 sm:p-10">
        <Link href="/" className="inline-block" aria-label={`${site.name} - home`}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={220}
            height={108}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-orange">
          Staff only
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink">
          Welcome <em className="font-normal">back.</em>
        </h1>

        <form className="mt-8 space-y-5" action="/dashboard" method="get">
          <label className="block">
            <span className="text-sm font-medium text-ink">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="username"
              className={inputClass}
              placeholder="you@pollinators.ke"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink">Password</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className={inputClass}
              placeholder="••••••••"
            />
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-ink px-4 py-3.5 text-sm font-semibold text-cream transition hover:bg-orange"
          >
            Continue to dashboard
          </button>
        </form>

        <Link
          href="/"
          className="mt-8 inline-block text-sm font-semibold text-orange transition hover:text-orange-deep"
        >
          ← Back to site
        </Link>
      </div>
    </main>
  );
}
