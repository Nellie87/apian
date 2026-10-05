"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BenefitsDialog,
  Icon,
  ProductCard,
  type SelectedProduct,
} from "@/components/ProductCatalog";
import { SectionTitle } from "@/components/SectionTitle";
import { catalog } from "@/lib/catalog";

const PREVIEW_COUNT = 6;

export function Products() {
  const [tab, setTab] = useState(catalog[0].id);
  const [selected, setSelected] = useState<SelectedProduct | null>(null);

  const activeCategory = catalog.find((c) => c.id === tab) ?? catalog[0];

  return (
    <>
      <section id="products" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionTitle
            eyebrow="The shop"
            title={
              <>
                From the hive, <em>to your shelf.</em>
              </>
            }
          >
            Honey, propolis, skincare and teas. Tap any product to see what it
            does for you.
          </SectionTitle>

          {/* Category pills - scroll sideways on phones, wrap on larger screens */}
          <nav aria-label="Product categories" className="mt-10">
            <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {catalog.map((category) => {
                const active = tab === category.id;
                return (
                  <li key={category.id} className="shrink-0">
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setTab(category.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                        active
                          ? "border-ink bg-ink text-cream shadow-md shadow-ink/20"
                          : "border-ink/15 bg-cream text-ink/80 hover:border-ink/40"
                      }`}
                    >
                      <Icon name={category.icon} className="size-4.5" />
                      {category.label}
                      <span
                        className={`text-xs font-medium ${active ? "text-cream/60" : "text-ink/40"}`}
                      >
                        {category.products.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col items-center gap-1 text-center">
            <h3 className="font-display text-3xl font-medium tracking-tight">
              {activeCategory.label}
            </h3>
            <p className="max-w-md text-sm text-ink-muted">{activeCategory.blurb}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {activeCategory.products.slice(0, PREVIEW_COUNT).map((product, index) => (
              <ProductCard
                key={`${activeCategory.id}-${product.id}`}
                eager={index < 3}
                product={product}
                icon={activeCategory.icon}
                onOpen={(p) => setSelected({ product: p, category: activeCategory })}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href={`/products#${activeCategory.id}`}
              className="inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-orange"
            >
              {activeCategory.products.length > PREVIEW_COUNT
                ? `See all ${activeCategory.label}`
                : "View full range"}
            </Link>
            <a
              href="#visit"
              className="inline-flex rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink"
            >
              Enquire to order
            </a>
          </div>
        </div>
      </section>

      <BenefitsDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}
