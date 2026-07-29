import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { newsPosts } from "@/lib/site";

export function News() {
  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionTitle title="Latest News" />
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {newsPosts.map((post) => (
            <li key={post.title}>
              <article>
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <a
                  href="#visit"
                  className="mt-4 inline-flex text-sm font-semibold text-orange transition hover:text-orange-deep"
                >
                  Read More »
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
