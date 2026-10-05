"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function HeaderSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
    setOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Search products"
        aria-expanded={open}
        className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 3.5 3.5" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <form
          role="search"
          onSubmit={submit}
          className="animate-fade-in fixed inset-x-4 top-[calc(var(--header-h)+0.5rem)] flex items-center gap-2 rounded-full border border-ink/10 bg-paper py-1.5 pl-5 pr-1.5 shadow-xl shadow-ink/10 sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-3 sm:w-80"
        >
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search honey, propolis, tea..."
            aria-label="Search products"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
          />
          <button
            type="submit"
            className="rounded-full bg-yellow px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-orange hover:text-white"
          >
            Search
          </button>
        </form>
      ) : null}
    </div>
  );
}
