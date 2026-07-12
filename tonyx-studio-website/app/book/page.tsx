import type { Metadata } from "next"
import { ConsultationForm } from "@/components/consultation-form"
import { placeholder } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Begin a conversation with TONYX Studio. Enquire about availability for your wedding date and design a bespoke collection.",
}

const points = [
  "We accept a limited number of weddings each year",
  "Consultations are complimentary and unhurried",
  "Available for destinations worldwide",
]

export default function BookPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Visual side */}
      <aside className="relative hidden lg:block">
        <img
          src={placeholder("luxury bride groom portrait golden hour dramatic elegant fine art", 1000, 1400) || "/placeholder.svg"}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 flex h-full flex-col justify-end p-16 text-background">
          <h2 className="font-serif text-4xl leading-tight text-balance">
            Every great story begins with a single conversation.
          </h2>
          <ul className="mt-10 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-background/85">
                <span className="h-px w-8 bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Form side */}
      <section className="flex items-center px-6 pb-20 pt-32 md:px-16 lg:pt-32">
        <div className="mx-auto w-full max-w-xl">
          <p className="text-xs uppercase tracking-luxe text-accent">Book a Consultation</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-balance md:text-5xl">
            Let&apos;s begin your story.
          </h1>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Share a few details about your celebration and we&apos;ll be in touch personally within
            two business days.
          </p>
          <div className="mt-12">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </main>
  )
}
