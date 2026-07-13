"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-luxe flex h-20 items-center justify-between md:h-24">
        {/* Logo */}
        <Link
          href="/"
          aria-label="TONYX Studio home"
          className={cn(
            "font-serif text-xl tracking-luxe transition-colors duration-300 md:text-2xl",
            scrolled ? "text-black" : "text-[white]"
          )}
        >
          TONYX
          <span className="">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-xs uppercase tracking-luxe transition-colors duration-300",
                  active
                    ? "text-red-500 font-bold"
                    : scrolled
                    ? "text-black hover:text-red-600"
                    : "text-white hover:text-red-500"
                )}
              >
                {item.label}

                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-[2px] bg-red-600 transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/book"
          className={cn(
            "hidden items-center px-6 py-3 text-[0.7rem] uppercase tracking-luxe transition-all duration-300 md:inline-flex",
            scrolled
              ? "border border-black text-black hover:bg-black hover:text-white"
              : "border border-white text-white hover:bg-white hover:text-black"
          )}
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "transition-colors md:hidden",
            scrolled ? "text-black" : "text-white"
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden bg-white transition-[max-height] duration-500 md:hidden",
          open
            ? "max-h-[420px] border-b border-border"
            : "max-h-0"
        )}
      >
        <nav
          className="container-luxe flex flex-col gap-1 py-6"
          aria-label="Mobile"
        >
          {NAV.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-border/60 py-4 text-sm uppercase tracking-luxe transition-colors",
                  active
                    ? "text-red-600"
                    : "text-black hover:text-red-600"
                )}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            href="/book"
            className="mt-4 inline-flex items-center justify-center border border-black px-6 py-4 text-xs uppercase tracking-luxe text-black transition-all hover:bg-black hover:text-white"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}