import { placeholder } from "@/lib/site-data"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  query,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  query: string
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={placeholder(query, 1600, 1000) || "/placeholder.svg"}
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/40 to-foreground/30" />
      </div>

      <div className="container-luxe relative z-10 pb-16 pt-32">
        <p className="text-xs uppercase tracking-luxe text-accent">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-background text-balance md:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
