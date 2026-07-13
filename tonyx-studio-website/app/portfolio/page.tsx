import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioSmoothScroll } from "@/components/portfolio/portfolio-smooth-scroll"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated selection of TONYX Studio weddings, destinations, portraits, and films from around the world.",
}

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioSmoothScroll />

      <PageHero
        eyebrow="Selected Work"
        title="Weddings, told as they deserve to be remembered."
        subtitle="A curated collection from celebrations across the world — each one singular, each one enduring."
        query="luxury wedding portfolio collage editorial elegant destination"
      />

      <PortfolioGrid />

      <section className="border-t border-border">
        <div className="container-luxe flex flex-col items-center gap-8 py-20 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="max-w-xl font-serif text-3xl leading-tight text-balance md:text-4xl">
            Your day belongs in this collection.
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
