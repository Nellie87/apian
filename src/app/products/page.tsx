import type { Metadata } from "next";
import { ProductCatalog } from "@/components/ProductCatalog";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { catalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Products | Pollinators Beekeeping and Apitherapy",
  description:
    "Browse raw honey, propolis, beeswax skincare, herbal teas and more from Pollinators - and see the benefits of each product.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0">
        <section className="bg-linear-to-b from-[#fff3c4] via-[#fffaf3] to-white px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle title="Our Products" />
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              From raw honey to beeswax skincare - tap{" "}
              <span className="font-semibold text-orange">Benefits</span> on
              any product to see what it does for you.
            </p>
          </div>
        </section>

        <ProductCatalog categories={catalog} />
      </main>
      <SiteFooter />
    </>
  );
}
