"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import {
  productCategories,
  products,
  type ProductCategoryId,
} from "@/lib/site";

function Stars() {
  return (
    <div className="flex justify-center gap-0.5 text-orange" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-3.5 fill-current">
          <path d="M10 1.5 12.4 7l6 .5-4.6 4 1.4 5.8L10 14.8 4.8 17.3l1.4-5.8L1.6 7.5l6-.5L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({
  product,
  showTimer,
}: {
  product: (typeof products)[number];
  showTimer?: boolean;
}) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto aspect-square max-w-[240px] overflow-hidden bg-mist">
        {showTimer && product.sale ? (
          <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded bg-ink/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white">
            02D : 15 : 22 : 32
          </div>
        ) : null}
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 70vw, 240px"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4">
        <Stars />
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">
          {product.name}
        </h3>
        <p className="mt-1.5 flex items-center justify-center gap-2 text-sm">
          <span className="font-semibold text-orange">{product.price}</span>
          {product.compareAt ? (
            <span className="text-ink-muted line-through">{product.compareAt}</span>
          ) : null}
        </p>
      </div>
    </article>
  );
}

export function Products() {
  const [tab, setTab] = useState<ProductCategoryId>("all");

  const special = products.filter((p) => p.featured).slice(0, 4);

  const trending =
    tab === "all"
      ? products.slice(0, 4)
      : products.filter((p) => p.category === tab).slice(0, 4);

  return (
    <>
      <section id="products" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <SectionTitle title="Our   Products" />
          <p className="mt-4 text-md col-span-full font-bold text-orange text-center">
            We offer a wide range of products to meet your needs. <br />Filter by the categories below.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
            {special.map((product) => (
              <ProductCard key={product.name} product={product} showTimer />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <SectionTitle title="Trending Products" />
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            role="tablist"
            aria-label="Product tabs"
          >
            {productCategories.map((category) => {
              const active = tab === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(category.id)}
                  className={`text-sm font-semibold transition ${
                    active
                      ? "text-orange"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
            {trending.map((product) => (
              <ProductCard key={`trend-${product.name}`} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#visit"
              className="inline-flex rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
            >
              Enquire to Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
