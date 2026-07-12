import Link from "next/link"

const LINKS = {
  Studio: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
  ],
  Connect: [
    { href: "/contact", label: "Contact" },
    { href: "/book", label: "Book Consultation" },
    { href: "mailto:hello@tonyxstudio.com", label: "hello@tonyxstudio.com" },
  ],
  Social: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Pinterest" },
    { href: "#", label: "Vimeo" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-luxe py-20">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-serif text-3xl tracking-luxe">
              TONYX<span className="text-accent">.</span>
            </Link>
            <p className="mt-6 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              An international house of wedding photography and cinematography. We don&apos;t just
              capture moments — we preserve generations.
            </p>
          </div>

          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="font-sans text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                {heading}
              </h3>
              <ul className="mt-6 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TONYX Studio. All rights reserved.</p>
          <p className="tracking-luxe uppercase">Paris · New York · Lake Como</p>
        </div>
      </div>
    </footer>
  )
}
