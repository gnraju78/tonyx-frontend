"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { testimonials } from "@/lib/site-data"

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const active = testimonials[index]

  return (
    <section className="bg-foreground py-28 text-background md:py-40">
      <div className="container-luxe">
        <p className="text-center text-xs uppercase tracking-luxe text-accent">In Their Words</p>
        <div className="relative mx-auto mt-12 min-h-[280px] max-w-4xl text-center md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-serif text-2xl leading-snug text-balance md:text-4xl md:leading-tight">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 text-xs uppercase tracking-luxe text-background/70">
                {active.author} — {active.location}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-px w-10 transition-colors duration-500 ${
                i === index ? "bg-accent" : "bg-background/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
