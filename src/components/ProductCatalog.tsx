"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type {
  CatalogCategory,
  CatalogIcon,
  CatalogProduct,
} from "@/lib/catalog";
import { catalog } from "@/lib/catalog";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Small visual helpers                                                */
/* ------------------------------------------------------------------ */

export function Icon({ name, className }: { name: CatalogIcon; className?: string }) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "jar":
      return (
        <svg {...common}>
          <path d="M10 6h12v3H10zM9 9h14v3.5c1.5 1 2.5 2.7 2.5 4.5v7a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-7c0-1.800 1-3.500 2.500-4.500z" />
          <path d="M11 18h10M11 22h10" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M6 26C6 14 13 6 26 6c0 13-8 20-20 20Z" />
          <path d="M6 26 18 14" />
        </svg>
      );
    case "drop":
      return (
        <svg {...common}>
          <path d="M16 4C11 11 8 15 8 19.500a8 8 0 0 0 16 0C24 15 21 11 16 4Z" />
          <path d="M12.500 20a3.500 3.500 0 0 0 3 3" />
        </svg>
      );
    case "cup":
      return (
        <svg {...common}>
          <path d="M6 12h17v8a6 6 0 0 1-6 6h-5a6 6 0 0 1-6-6zM23 14h1.500a3 3 0 0 1 0 6H23" />
          <path d="M12 4c-1 1.500 1 2.500 0 4M17 4c-1 1.500 1 2.500 0 4" />
        </svg>
      );
    case "hive":
      return (
        <svg {...common}>
          <path d="m16 4 10 6v12l-10 6-10-6V10z" />
          <path d="m16 11 5 3v5.500l-5 3-5-3V14z" />
        </svg>
      );
  }
}

/** Branded stand-in used when a product has no photo yet. */
function Placeholder({ icon, label }: { icon: CatalogIcon; label: string }) {
  const patternId = `hex-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <div
      role="img"
      aria-label={`${label} - photo coming soon`}
      className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-yellow/40 via-[#fdeeb8] to-yellow-deep/30"
    >
      <svg
        className="absolute inset-0 size-full text-orange/15"
        aria-hidden
      >
        <defs>
          <pattern
            id={patternId}
            width="28"
            height="48.500"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M14 0 28 8v16.500L14 32.500 0 24.500V8zM14 32.500v16M0 24.500 14 32.500 28 24.500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.200"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <span className="relative grid size-20 place-items-center rounded-full bg-white/80 text-orange shadow-sm ring-1 ring-orange/20 sm:size-24">
        <Icon name={icon} className="size-10 sm:size-12" />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

export type SelectedProduct = {
  product: CatalogProduct;
  category: Pick<CatalogCategory, "id" | "label" | "icon" | "lead">;
};

export function ProductCard({
  product,
  icon,
  onOpen,
  eager = false,
}: {
  product: CatalogProduct;
  icon: CatalogIcon;
  onOpen: (product: CatalogProduct) => void;
  /** Load the image immediately - use for cards that sit above the fold. */
  eager?: boolean;
}) {
  return (
    // The whole card is clickable for mouse/touch users; the "Benefits"
    // button inside is the keyboard- and screen-reader-friendly trigger.
    <article
      onClick={() => onOpen(product)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream p-2 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-mist">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading={eager ? "eager" : undefined}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <Placeholder icon={icon} label={product.name} />
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4">
        <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-muted sm:text-sm">
          {product.tagline}
        </p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label={`Benefits of ${product.name}`}
            className="inline-flex w-full items-center justify-between gap-2 border-t border-ink/10 pt-3 text-sm font-semibold text-orange transition group-hover:text-orange-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            See benefits
            <svg
              viewBox="0 0 20 20"
              className="size-4 transition group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Benefits popup - a bold colour card with the photo popping out      */
/* ------------------------------------------------------------------ */

/** Card colourways, cycled by category - all drawn from the brand palette. */
const themes = [
  {
    // Light: warm paper card, honey check marks, dark pill button.
    card: "bg-paper border border-ink/10",
    name: "text-ink",
    body: "text-ink",
    lead: "text-orange",
    label: "text-orange",
    check: "bg-yellow text-ink",
    button: "bg-ink text-cream hover:bg-orange focus-visible:outline-orange",
    badge: "text-orange",
  },
  {
    // Dark: bark card, cream type, honey accents.
    card: "bg-bark border border-white/10",
    name: "text-cream",
    body: "text-cream/90",
    lead: "text-yellow",
    label: "text-yellow",
    check: "bg-yellow text-ink",
    button: "bg-yellow text-ink hover:bg-cream focus-visible:outline-yellow",
    badge: "text-orange",
  },
] as const;

function themeFor(categoryId: string) {
  const index = Math.max(
    0,
    catalog.findIndex((c) => c.id === categoryId),
  );
  return themes[index % themes.length];
}

export function BenefitsDialog({
  selected,
  onClose,
}: {
  selected: SelectedProduct | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const product = selected?.product ?? null;
  const category = selected?.category;
  const theme = themeFor(category?.id ?? "");

  // Keep the native dialog in sync with state, and lock page scroll while open.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (product && !dialog.open) {
      dialog.showModal();
    } else if (!product && dialog.open) {
      dialog.close();
    }

    if (!product) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [product]);

  const orderHref = product
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `Hello Pollinators - I would like to order ${product.name}.`,
      )}`
    : "#";

  return (
    <dialog
      ref={ref}
      aria-labelledby="benefits-title"
      onClose={onClose}
      // Clicks on the transparent area around the card land on the <dialog>.
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="fixed inset-0 m-auto h-fit max-h-[96dvh] w-[min(92vw,28rem)] max-w-none overflow-visible bg-transparent p-0 text-ink backdrop:bg-bark/70 backdrop:backdrop-blur-sm open:animate-dialog"
    >
      {product && category ? (
        <div className="relative flex max-h-[96dvh] flex-col">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close"
            className="absolute right-1 top-1 z-30 grid size-10 place-items-center rounded-full bg-white text-ink shadow-lg transition hover:bg-yellow focus-visible:outline-2 focus-visible:outline-orange"
          >
            <svg
              viewBox="0 0 20 20"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>

          {/* Tilted photo that pops out over the top of the card */}
          <div className="relative z-10 -mb-12 ml-5 size-40 shrink-0 -rotate-3 overflow-hidden rounded-3xl border-4 border-white bg-mist shadow-2xl shadow-ink/40 sm:ml-7 sm:size-48">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.alt ?? product.name}
                fill
                sizes="192px"
                className="object-cover"
              />
            ) : (
              <Placeholder icon={category.icon} label={product.name} />
            )}
          </div>

          {/* Colour card */}
          <div
            className={`relative flex min-h-0 flex-1 flex-col rounded-3xl shadow-2xl shadow-ink/40 ${theme.card}`}
          >
            {/* Round badge overlapping the photo, like a price sticker */}
            <div
              aria-hidden
              className="absolute -top-12 right-4 z-20 grid size-24 place-items-center rounded-full bg-white p-1 shadow-lg outline-2 outline-offset-2 outline-dashed outline-yellow-deep sm:right-6 sm:size-[6.5rem]"
            >
              <div className={`flex flex-col items-center ${theme.badge}`}>
                <Icon name={category.icon} className="size-8" />
                <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-ink/70">
                  Benefits
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-2 pt-16 [scrollbar-color:var(--yellow-deep)_transparent] [scrollbar-width:thin] sm:px-8 sm:pt-[4.5rem]">
              <p
                className={`font-display text-xl italic leading-none sm:text-2xl ${theme.lead}`}
              >
                {category.lead}
              </p>
              <h2
                id="benefits-title"
                className={`mt-1.5 text-balance break-words font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-[2.5rem] ${theme.name}`}
              >
                {product.name}
                {product.size ? (
                  <span className="ml-2 inline-block rounded-full border-2 border-yellow-deep bg-white px-2.5 py-0.5 align-middle font-sans text-xs font-bold tracking-normal text-ink">
                    {product.size}
                  </span>
                ) : null}
              </h2>

              <p
                className={`mt-3 text-base font-normal leading-relaxed ${theme.body}`}
              >
                {product.summary}
              </p>

              <h3
                className={`mt-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] ${theme.label}`}
              >
                Key benefits
                <span aria-hidden className="h-px flex-1 bg-current opacity-30" />
              </h3>

              <ul className="mt-3 space-y-2.5">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex items-start gap-3 text-[15px] font-semibold leading-snug ${theme.body}`}
                  >
                    <span
                      className={`mt-px grid size-6 shrink-0 place-items-center rounded-full ${theme.check}`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 px-6 pb-6 pt-4 sm:px-8">
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex rounded-full px-7 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${theme.button}`}
              >
                Order now
              </a>
              <p
                className={`mt-3 text-[11px] font-normal leading-snug opacity-70 ${theme.body}`}
              >
                Supports wellbeing - not a substitute for medical advice.
                Check with a professional if pregnant or on medication.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
/* ------------------------------------------------------------------ */
/* Catalog                                                             */
/* ------------------------------------------------------------------ */

export function ProductCatalog({
  categories: allCategories,
  initialQuery = "",
}: {
  categories: CatalogCategory[];
  initialQuery?: string;
}) {
  const [selected, setSelected] = useState<SelectedProduct | null>(null);
  const [query, setQuery] = useState(initialQuery);

  const needle = query.trim().toLowerCase();
  const categories = needle
    ? allCategories
        .map((category) => ({
          ...category,
          products: category.products.filter((p) =>
            [p.name, p.tagline, p.summary, category.label, ...p.benefits]
              .join(" ")
              .toLowerCase()
              .includes(needle),
          ),
        }))
        .filter((category) => category.products.length > 0)
    : allCategories;

  return (
    <>
      <div className="mx-auto max-w-xl px-5 pt-2 sm:px-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search honey, propolis, tea..."
          aria-label="Search products"
          className="w-full rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-ink/40 focus:border-orange"
        />
      </div>

      {categories.length === 0 ? (
        <p className="mx-auto max-w-6xl px-5 py-16 text-center text-ink-muted sm:px-8">
          No products match &ldquo;{query.trim()}&rdquo;.
        </p>
      ) : null}

      {/* Category quick-jump */}
      <nav
        aria-label="Product categories"
        className="sticky top-(--header-h) z-20 mt-8 border-y border-ink/10 bg-cream/90 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:justify-center sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-ink hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                <Icon name={category.icon} className="size-4" />
                {category.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl space-y-14 px-5 py-12 sm:px-8 lg:space-y-20 lg:py-16">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className="scroll-mt-40"
          >
            <div className="flex items-end justify-between gap-4 border-b border-ink/15 pb-4">
              <div className="flex items-center gap-4">
                <span className="hex-clip grid size-12 shrink-0 place-items-center bg-yellow text-ink sm:size-14">
                  <Icon name={category.icon} className="size-6" />
                </span>
                <div>
                  <h2
                    id={`${category.id}-heading`}
                    className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
                  >
                    {category.label}
                  </h2>
                  <p className="mt-0.5 hidden text-sm text-ink-muted sm:block">
                    {category.blurb}
                  </p>
                </div>
              </div>
              <span className="shrink-0 pb-1 text-xs font-semibold uppercase tracking-wider text-ink/45">
                {category.products.length} items
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-muted sm:hidden">
              {category.blurb}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  icon={category.icon}
                  onOpen={(p) =>
                    setSelected({ product: p, category })
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <BenefitsDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}
