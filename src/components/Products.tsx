"use client";

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
  const showAll = !isDesktop && tab === "all";
  const visibleCategories = showAll ? catalog : [activeCategory];

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
                      {(isDesktop
                        ? category.products.slice(0, 6)
                        : category.products
                      ).map((product, index) => (
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
                <Link
                  href={showAll ? "/products" : `/products#${activeCategory.id}`}
                  className="inline-flex rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
                >
                  {showAll
                    ? "View full catalogue"
                    : isDesktop && activeCategory.products.length > 6
                      ? `See all ${activeCategory.label}`
                      : "View full range"}
                </Link>
                <a
                  href="#visit"
                  className="inline-flex rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition hover:border-ink"
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
        visible={inView}
        activeId={tab}
        onChoose={(id) => {
          setTab(id);
          requestAnimationFrame(() =>
            listRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }),
          );
        }}
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
