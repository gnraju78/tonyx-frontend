import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { placeholder } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet TONYX Studio — an international house of wedding photographers and filmmakers devoted to preserving family history with artistry and discretion.",
}

const values = [
  { title: "Discretion", body: "We move through your day unseen, capturing truth rather than staging it." },
  { title: "Craft", body: "Every frame is considered, every film scored, every album made by hand." },
  { title: "Permanence", body: "We create for the grandchildren who will one day hold these images." },
]

const team = [
  { name: "Tony Xavier", role: "Founder & Principal Photographer", query: "portrait distinguished male photographer studio black and white elegant" },
  { name: "Camille Roux", role: "Director of Cinematography", query: "portrait female filmmaker cinematographer elegant natural light" },
  { name: "Elias Moreau", role: "Head of Album Design", query: "portrait male craftsman designer studio warm light refined" },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="A house built on reverence for the moment."
        subtitle="Founded in 2012, TONYX Studio has become one of the most sought-after names in luxury wedding imagery."
        query="elegant wedding photographer at work luxury venue candid cinematic"
      />

      {/* Narrative */}
      <section className="container-luxe py-28 md:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={placeholder("founder photographer portrait editorial monochrome refined studio", 900, 1100) || "/placeholder.svg"}
                alt="TONYX Studio founder"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-luxe text-accent">The Beginning</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-balance md:text-5xl">
                It began with a single, unrepeatable frame.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p>
                  What started as one photographer&apos;s obsession with light and honesty has grown
                  into an international atelier — a small, devoted team trusted by families across
                  more than forty countries.
                </p>
                <p>
                  We have never chased volume. Instead, we accept a limited number of weddings each
                  year, giving each the attention and artistry it deserves. Our work has been
                  featured in the world&apos;s leading editorial publications, but our proudest
                  moments are quieter: a grandmother&apos;s tears at the sight of her family&apos;s film.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-28 md:py-40">
        <div className="container-luxe">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-accent">What We Believe</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-balance md:text-5xl">
              Three principles guide everything we make.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i} className="bg-secondary">
                <div className="flex h-full flex-col p-10">
                  <span className="font-serif text-2xl text-accent">0{i + 1}</span>
                  <h3 className="mt-6 font-serif text-2xl">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-luxe py-28 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-luxe text-accent">The Atelier</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-balance md:text-5xl">
            A small team of specialists, entirely devoted to your day.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={placeholder(member.query, 800, 1000) || "/placeholder.svg"}
                    alt={member.name}
                    className="size-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl">{member.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-luxe text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border">
        <div className="container-luxe flex flex-col items-center gap-8 py-20 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="max-w-xl font-serif text-3xl leading-tight text-balance md:text-4xl">
            We would love to hear the story of how you met.
          </h2>
          <Link
            href="/book"
            className="inline-flex shrink-0 items-center justify-center bg-foreground px-9 py-4 text-xs uppercase tracking-luxe text-background transition-transform duration-500 hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
