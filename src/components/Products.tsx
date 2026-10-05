"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BenefitsDialog,
  Icon,
  ProductCard,
  type SelectedProduct,
} from "@/components/ProductCatalog";
import { SectionTitle } from "@/components/SectionTitle";
import { catalog } from "@/lib/catalog";

export function Products() {
  const [tab, setTab] = useState(catalog[0].id);
  const [selected, setSelected] = useState<SelectedProduct | null>(null);

  const activeCategory = catalog.find((c) => c.id === tab) ?? catalog[0];

  // Show the mobile bottom category bar only while the products section is on screen.
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="products" ref={sectionRef} className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8 lg:py-20">
          <SectionTitle title="Our Products" />
        
          <div className="mt-6 lg:mt-12 lg:grid lg:grid-cols-[18rem_1fr] lg:gap-10">
            {/* Phones/tablets: chip bar pinned to the bottom (thumb reach) while this section is on screen */}
            <nav
              aria-label="Product categories"
              aria-hidden={!inView}
              inert={!inView}
              className={`fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 lg:hidden ${
                inView ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <ul className="flex gap-2 overflow-x-auto px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {catalog.map((category) => {
                  const active = tab === category.id;
                  return (
                    <li key={category.id} className="shrink-0">
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setTab(category.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                          active
                            ? "border-orange bg-orange text-white shadow-sm shadow-orange/30"
                            : "border-ink/15 text-ink/80 hover:border-orange"
                        }`}
                      >
                        <Icon name={category.icon} className="size-4" />
                        {category.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

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
              <div className="flex items-end justify-between gap-4 border-b-2 border-yellow pb-3">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {activeCategory.label}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {activeCategory.blurb}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
                {activeCategory.products.slice(0, 6).map((product, index) => (
                  <ProductCard
                    key={`${activeCategory.id}-${product.id}`}
                    eager={index < 3}
                    product={product}
                    icon={activeCategory.icon}
                    onOpen={(p) =>
                      setSelected({ product: p, category: activeCategory })
                    }
                  />
                ))}
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-3 text-center lg:justify-start">
                <Link
                  href={`/products#${activeCategory.id}`}
                  className="inline-flex rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
                >
                  {activeCategory.products.length > 6
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

      <BenefitsDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}
