"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { placeholder } from "@/lib/site-data"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
       <img
          src="/home/H%201.jpg.jpeg"
          alt="A couple embracing at a luxury estate wedding at golden hour"
          className="size-full object-cover"
        />
        <div className="absolute " />
        <div className="absolute inset-0 bg-foreground/20" />
      </motion.div>

      <div className="container-luxe relative z-10 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs uppercase tracking-luxe text-background/90"
        >
          International Wedding Photography &amp; Film
        </motion.p>

        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] text-background text-balance md:text-7xl lg:text-8xl">
          {["We", "preserve", "generations."].map((word, i) => (
            <span key={word} className="mr-4 inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-background/90"
        >
          More than photographs — a living archive of your family&apos;s most defining chapter,
          crafted with the discretion and artistry of a bygone era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-background px-9 py-4 text-xs uppercase tracking-luxe text-foreground transition-transform duration-500 hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center border border-background/60 px-9 py-4 text-xs uppercase tracking-luxe text-background transition-colors duration-500 hover:bg-background hover:text-foreground"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

     
    </section>
  )
}
