import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { gallery, placeholder } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function FeaturedGallery() {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-luxe text-accent">Selected Work</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-balance md:text-5xl">
                Stories told across the world&apos;s most beautiful places.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-luxe"
            >
              Full Portfolio
              <span className="h-px w-10 bg-foreground transition-all duration-500 group-hover:w-16" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[280px] grid-cols-2 gap-4 md:auto-rows-[340px] md:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i % 3}
              className={cn(
                "group relative overflow-hidden",
                item.span === "tall" && "row-span-2",
                item.span === "wide" && "col-span-2",
              )}
            >
              <Link href="/portfolio" className="block size-full">
                <img
                  src={placeholder(item.query, 800, 1000) || "/placeholder.svg"}
                  alt={`${item.title} — ${item.location}`}
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <p className="font-serif text-xl text-background">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-luxe text-background/80">
                    {item.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
