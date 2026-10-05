import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Staff login | Pollinators",
  description: "Staff access for Pollinators Beekeeping and Apitherapy.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-[100svh] flex-col bg-[radial-gradient(ellipse_at_top,#ffe9a0_0%,#ffffff_55%)]">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-5 py-16">
        <Link href="/" className="mb-8 inline-block w-fit" aria-label={site.name}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={220}
            height={56}
            priority
            className="h-11 w-auto"
          />
        </Link>
        <Link
          href="/"
          className="mb-10 text-sm font-medium text-orange transition hover:text-orange-deep"
        >
          ← Back to site
        </Link>
        

        <form className="mt-8 space-y-4" action="/dashboard" method="get">
          <label className="block">
            <span className="text-sm font-medium text-ink">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="username"
              className="mt-1.5 w-full rounded-md border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none ring-orange/30 focus:ring-2"
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
              className="mt-1.5 w-full rounded-md border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none ring-orange/30 focus:ring-2"
              placeholder="••••••••"
            />
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
          >
            Continue to dashboard
          </button>
        </form>
      </div>
    </main>
  );
}
