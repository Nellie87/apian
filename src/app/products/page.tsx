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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { q } = await searchParams;
  const initialQuery = (Array.isArray(q) ? q[0] : q) ?? "";

  return (
    <>
      <SiteHeader />
      <main className="min-w-0">
        <section className="relative isolate overflow-hidden px-5 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-24">
          <div
            aria-hidden
            className="hex-pattern absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
          />
          <SectionTitle
            eyebrow="The shop"
            title={
              <>
                Our <em>products</em>
              </>
            }
          >
            From raw honey to beeswax skincare. Tap any product to see what it
            does for you.
          </SectionTitle>
        </section>

        <ProductCatalog
          key={initialQuery}
          categories={catalog}
          initialQuery={initialQuery}
        />
      </main>
      <SiteFooter />
    </>
  );
}
