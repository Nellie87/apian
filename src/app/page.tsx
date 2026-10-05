import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0">
        <Hero />
        <Features />
        <Products />
        <Services />
        <Testimonials />
        <News />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
