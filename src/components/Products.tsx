"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  BenefitsDialog,
  CategoryFilter,
  Icon,
  ProductCard,
  type SelectedProduct,
} from "@/components/ProductCatalog";
import { SectionTitle } from "@/components/SectionTitle";
import { catalog } from "@/lib/catalog";

const desktopQuery = "(min-width: 1024px)";

function useIsDesktop() {
  return useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia(desktopQuery);
      mq.addEventListener("change", notify);
      return () => mq.removeEventListener("change", notify);
    },
    () => window.matchMedia(desktopQuery).matches,
    () => false,
  );
}

export function Products() {
  // "all" = every product (phones/tablets default); otherwise a category id.
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState<SelectedProduct | null>(null);
  const isDesktop = useIsDesktop();

  // Desktop always has a category open in the sidebar tree.
  const activeCategory =
    catalog.find((c) => c.id === tab) ?? catalog[0];
  // Phones/tablets start on a grid of category tiles (Apple/Samsung style)
  // instead of one endless list; picking a tile opens just that category.
  // Search (phones/tablets) lists matching products across every category.
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const searching = !isDesktop && needle.length > 0;
  const results = searching
    ? catalog.flatMap((category) =>
        category.products
          .filter((p) =>
            [p.name, p.tagline, p.summary, category.label, ...p.benefits]
              .join(" ")
              .toLowerCase()
              .includes(needle),
          )
          .map((product) => ({ product, category })),
      )
    : [];
  const showTiles = !isDesktop && !searching && tab === "all";
  const visibleCategories = showTiles || searching ? [] : [activeCategory];
  // Show the floating filter button only while the products section is on screen.
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      // Any overlap counts: the section is very tall when every product is
      // listed, so a percentage threshold could never be reached.
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Switch category (or back to the tiles) and bring the list into view.
  const chooseCategory = (id: string) => {
    setQuery("");
    setTab(id);
    requestAnimationFrame(() =>
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  return (
    <>
      <section id="products" ref={sectionRef}>
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-12 lg:py-12">
          <SectionTitle title="Our Products" />
        
          <div className="mt-6 lg:mt-12 lg:grid lg:grid-cols-[18rem_1fr] lg:gap-10">
            {/* Desktop: category tree with products nested */}
            <nav
              aria-label="Product categories"
              className="hidden self-start rounded-3xl bg-white p-2 shadow-sm ring-1 ring-ink/10 lg:block"
            >
              <ul className="space-y-1">
                {catalog.map((category) => {
                  const active = tab === category.id;
                  return (
                    <li key={category.id}>
                      <button
                        type="button"
                        aria-expanded={active}
                        aria-controls={`tree-${category.id}`}
                        onClick={() => setTab(category.id)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                          active
                            ? "bg-orange text-white shadow-md shadow-orange/30"
                            : "text-ink hover:bg-yellow/30"
                        }`}
                      >
                        <span
                          className={`grid size-8 shrink-0 place-items-center rounded-full ${
                            active ? "bg-white/20" : "bg-yellow/40 text-orange"
                          }`}
                        >
                          <Icon name={category.icon} className="size-4.5" />
                        </span>
                        <span className="flex-1 leading-tight">
                          {category.label}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            active ? "text-white/80" : "text-ink/40"
                          }`}
                        >
                          {category.products.length}
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                          className={`size-4 shrink-0 transition-transform duration-200 ${
                            active ? "rotate-90" : ""
                          }`}
                        >
                          <path d="m7 4 6 6-6 6" />
                        </svg>
                      </button>

                      {/* Nested products */}
                      <div
                        id={`tree-${category.id}`}
                        className={`grid transition-all duration-300 ${
                          active
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul
                          className="ml-7 overflow-hidden border-l-2 border-yellow pl-3"
                          inert={!active}
                        >
                          {category.products.map((product) => (
                            <li key={product.id} className="first:mt-2 last:mb-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setSelected({ product, category })
                                }
                                className="w-full rounded-lg px-2.5 py-1.5 text-left text-sm text-ink-muted transition hover:bg-yellow/30 hover:text-ink focus-visible:outline-2 focus-visible:outline-orange"
                              >
                                {product.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 lg:mt-0">
              <div ref={listRef} className="scroll-mt-4 space-y-10">
                {showTiles ? (
                  <div>
                    <p className="text-sm text-ink-muted">
                      Pick a category to see its products.
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                      {catalog.map((category) => (
                        <li key={category.id}>
                          <button
                            type="button"
                            onClick={() => chooseCategory(category.id)}
                            className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-sm transition duration-300 active:scale-[0.98] hover:border-orange hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                          >
                            <span className="relative block aspect-4/3 w-full overflow-hidden bg-yellow/30">
                              <Image
                                src={category.image}
                                alt={category.imageAlt}
                                fill
                                sizes="(max-width: 640px) 50vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-105"
                              />
                            </span>
                            <span className="flex flex-1 flex-col items-start gap-2 p-3.5 sm:p-4">
                              <span className="font-display text-base font-semibold leading-snug text-ink">
                                {category.label}
                              </span>
                              <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-ink/50">
                                {category.products.length}{" "}
                                {category.products.length === 1
                                  ? "item"
                                  : "items"}
                              </span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {searching ? (
                  <div>
                    <div className="flex items-end justify-between gap-4 border-b-2 border-yellow pb-3">
                      <div>
                        <h3 className="font-display text-2xl font-bold tracking-tight">
                          Search results
                        </h3>
                        <p className="mt-0.5 text-sm text-ink-muted">
                          {results.length}{" "}
                          {results.length === 1 ? "product" : "products"} for
                          &ldquo;{query.trim()}&rdquo;
                        </p>
                      </div>
                    </div>
                    {results.length > 0 ? (
                      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
                        {results.map(({ product, category }) => (
                          <ProductCard
                            key={`${category.id}-${product.id}`}
                            product={product}
                            icon={category.icon}
                            onOpen={(p) => setSelected({ product: p, category })}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="mt-8 text-center text-ink-muted">
                        No products match your search.
                      </p>
                    )}
                  </div>
                ) : null}
                {!isDesktop && !searching && !showTiles ? (
                  <button
                    type="button"
                    onClick={() => chooseCategory("all")}
                    className="-mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition hover:text-orange focus-visible:outline-2 focus-visible:outline-orange"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="size-4"
                    >
                      <path d="m13 4-6 6 6 6" />
                    </svg>
                    All categories
                  </button>
                ) : null}
                {visibleCategories.map((category, categoryIndex) => (
                  <div key={category.id}>
                    <div className="flex items-end justify-between gap-4 border-b-2 border-yellow pb-3">
                      <div className="text-blur">
                        <h3 className="font-display text-2xl font-bold tracking-tight">
                          {category.label}
                        </h3>
                        <p className="mt-0.5 text-sm text-ink-muted">
                          {category.blurb}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
                      {category.products
                        .map((product, index) => (
                        <ProductCard
                          key={`${category.id}-${product.id}`}
                          eager={categoryIndex === 0 && index < 3}
                          product={product}
                          icon={category.icon}
                          onOpen={(p) => setSelected({ product: p, category })}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-3 text-center lg:justify-start">
                {/* An open category already lists everything, so the
                    catalogue link only appears on the tiles view. */}
                {showTiles ? (
                  <Link
                    href="/products"
                    className="inline-flex rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
                  >
                    View full catalogue
                  </Link>
                ) : null}
                <a
                  href="#visit"
                  className={`inline-flex rounded-full px-7 py-3 text-sm font-semibold transition ${
                    showTiles
                      ? "border border-ink/20 text-ink hover:border-ink"
                      : "bg-orange text-white hover:bg-orange-deep"
                  }`}
                >
                  Enquire to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryFilter
        hideFrom="lg"
        allLabel="All categories"
        visible={inView}
        query={query}
        onQueryChange={(value) => {
          // Bring the results into view when the user starts typing.
          if (!needle && value.trim()) {
            requestAnimationFrame(() =>
              listRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              }),
            );
          }
          setQuery(value);
        }}
        activeId={tab}
        onChoose={chooseCategory}
        options={catalog.map((c) => ({
          id: c.id,
          label: c.label,
          icon: c.icon,
          count: c.products.length,
        }))}
      />

      <BenefitsDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}
