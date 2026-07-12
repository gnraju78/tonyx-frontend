import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { placeholder } from "@/lib/site-data"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={placeholder("elegant wedding reception evening candlelight tablescape luxury romantic", 1600, 900) || "/placeholder.svg"}
          alt="An elegant candlelit wedding reception in the evening"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container-luxe relative z-10 py-32 text-center text-background md:py-44">
        <Reveal>
          <p className="text-xs uppercase tracking-luxe text-accent">Begin Your Story</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-balance md:text-6xl">
            Only a select number of weddings are accepted each year.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            We would be honored to hear about your day. Reach out to check availability and begin a
            conversation.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Link
            href="/book"
            className="mt-12 inline-flex items-center justify-center bg-background px-10 py-4 text-xs uppercase tracking-luxe text-foreground transition-transform duration-500 hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
