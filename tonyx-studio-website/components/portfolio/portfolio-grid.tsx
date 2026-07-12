"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { categories, portfolio, placeholder, type Category } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function PortfolioGrid() {
  const [active, setActive] = useState<Category>("All")

  const items = portfolio.filter((p) => active === "All" || p.category === active)

  return (
    <section className="container-luxe py-24 md:py-32">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b border-border pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "relative text-xs uppercase tracking-luxe transition-colors duration-300",
              active === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {cat}
            {active === cat ? (
              <motion.span
                layoutId="portfolio-filter"
                className="absolute -bottom-[33px] left-0 h-px w-full bg-accent"
              />
            ) : null}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-14 grid auto-rows-[280px] grid-cols-2 gap-4 md:auto-rows-[360px] md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden",
                item.span === "tall" && "row-span-2",
                item.span === "wide" && "col-span-2",
              )}
            >
              <img
                src={placeholder(item.query, 900, 1100) || "/placeholder.svg"}
                alt={`${item.title} — ${item.location}`}
                className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[0.65rem] uppercase tracking-luxe text-accent">{item.category}</p>
                <p className="mt-2 font-serif text-2xl text-background">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-luxe text-background/80">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
