import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { services, process, placeholder } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services & Investment",
  description:
    "Signature photography, cinematic film, and handcrafted heirloom albums. Explore TONYX Studio's collections and investment.",
}

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "Most couples reserve their date twelve to eighteen months ahead. Because we accept a limited number of weddings each year, availability for peak-season dates is limited.",
  },
  {
    q: "Do you travel internationally?",
    a: "Yes — we photograph and film weddings worldwide. Travel and accommodation are quoted separately and tailored to each destination.",
  },
  {
    q: "Can we combine photography and film?",
    a: "Absolutely. Most of our couples choose a combined collection, and our photography and film teams are trained to work seamlessly alongside one another.",
  },
  {
    q: "When will we receive our images and film?",
    a: "A preview gallery arrives within two weeks. Your full collection is delivered within eight to ten weeks, with albums crafted thereafter.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services & Investment"
        title="Collections crafted around your celebration."
        subtitle="Every wedding is bespoke. These collections are a starting point — we tailor each to your day."
        query="luxury wedding album leather bound fine art detail elegant studio"
      />

      {/* Collections */}
      <section className="container-luxe py-28 md:py-40">
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i}>
              <div className="flex h-full flex-col border border-border bg-card p-10 transition-colors duration-500 hover:border-accent">
                <h2 className="font-serif text-3xl">{service.name}</h2>
                <p className="mt-4 text-sm uppercase tracking-luxe text-accent">{service.price}</p>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-4 border-t border-border pt-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="mt-10 inline-flex items-center justify-center border border-foreground px-6 py-3 text-xs uppercase tracking-luxe transition-all duration-500 hover:bg-foreground hover:text-background"
                >
                  Enquire
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Bespoke collections and multi-day celebrations are quoted on request.
        </p>
      </section>

      {/* Process */}
      <section className="bg-secondary py-28 md:py-40">
        <div className="container-luxe">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-luxe text-accent">How We Work</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 font-serif text-4xl leading-tight text-balance md:text-5xl">
                  A considered process, from first contact to final album.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                  <img
                    src={placeholder("photographer reviewing wedding proofs studio elegant warm light", 900, 700) || "/placeholder.svg"}
                    alt="Reviewing wedding proofs in the studio"
                    className="size-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col justify-center">
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i}>
                  <div className="flex gap-8 border-b border-border py-8 last:border-b-0">
                    <span className="font-serif text-3xl text-accent">{item.step}</span>
                    <div>
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-luxe py-28 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-luxe text-accent">Questions</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-balance md:text-5xl">
            The details, considered in advance.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i % 2}>
              <div>
                <h3 className="font-serif text-xl">{faq.q}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-luxe flex flex-col items-center gap-8 py-20 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="max-w-xl font-serif text-3xl leading-tight text-balance md:text-4xl">
            Let&apos;s design a collection around your day.
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
