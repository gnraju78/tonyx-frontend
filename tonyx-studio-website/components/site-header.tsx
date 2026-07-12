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
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container-luxe flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          className="font-serif text-xl tracking-luxe md:text-2xl"
          aria-label="TONYX Studio home"
        >
          TONYX
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-xs uppercase tracking-luxe transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-500",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <Link
          href="/book"
          className="hidden items-center border border-foreground px-6 py-3 text-[0.7rem] uppercase tracking-luxe transition-all duration-500 hover:bg-foreground hover:text-background md:inline-flex"
        >
          Book Consultation
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-background transition-[max-height] duration-500 md:hidden",
          open ? "max-h-[420px] border-b border-border" : "max-h-0",
        )}
      >
        <nav className="container-luxe flex flex-col gap-1 py-6" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border/60 py-4 text-sm uppercase tracking-luxe text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-4 inline-flex items-center justify-center border border-foreground px-6 py-4 text-xs uppercase tracking-luxe"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}
