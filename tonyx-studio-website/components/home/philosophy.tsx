import { Reveal } from "@/components/reveal"
import { placeholder } from "@/lib/site-data"

export function Philosophy() {
  return (
    <section className="container-luxe py-28 md:py-40">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-accent">The Philosophy</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-balance md:text-5xl">
              A quiet devotion to the moments that outlive us.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              For over a decade, TONYX Studio has been entrusted with the most intimate day in a
              family&apos;s history. We approach each wedding not as a job, but as a responsibility —
              to see clearly, to feel deeply, and to render it all with restraint and grace.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { n: "12+", l: "Years" },
                { n: "300+", l: "Weddings" },
                { n: "40+", l: "Countries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-4xl">{s.n}</div>
                  <div className="mt-2 text-xs uppercase tracking-luxe text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={placeholder("fine art wedding portrait bride veil natural window light editorial", 900, 1100) || "/placeholder.svg"}
              alt="Fine-art bridal portrait in natural light"
              className="size-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
