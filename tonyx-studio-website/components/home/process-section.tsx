import { Reveal } from "@/components/reveal"
import { process } from "@/lib/site-data"

export function ProcessSection() {
  return (
    <section className="container-luxe py-28 md:py-40">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-luxe text-accent">The Experience</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-balance md:text-5xl">
            An unhurried, deeply personal process — from first hello to final heirloom.
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {process.map((item, i) => (
          <Reveal key={item.step} delay={i} className="bg-background">
            <div className="flex h-full flex-col p-10">
              <span className="font-serif text-5xl text-accent">{item.step}</span>
              <h3 className="mt-8 font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
