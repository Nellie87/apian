import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Products } from "@/components/Products";
import { Purity } from "@/components/Purity";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Purity />
        <Testimonials />
        <News />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
