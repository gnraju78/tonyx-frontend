import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ConsultationForm } from "@/components/consultation-form"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the TONYX Studio atelier. Enquire about your wedding, availability, and bespoke collections.",
}

const details = [
  { icon: Mail, label: "Email", value: "hello@tonyxstudio.com", href: "mailto:hello@tonyxstudio.com" },
  { icon: Phone, label: "Telephone", value: "+1 (212) 555-0142", href: "tel:+12125550142" },
  { icon: MapPin, label: "Studios", value: "Paris · New York · Lake Como" },
]

const hours = [
  { day: "Monday – Friday", time: "9:00 – 18:00" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Reserved for weddings" },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title="We would love to hear from you."
        subtitle="Whether you're ready to book or simply exploring, our atelier is here to help."
        query="elegant studio interior desk flowers natural light refined minimal"
      />

      <section className="container-luxe py-28 md:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <div>
            <h2 className="font-serif text-3xl">The Atelier</h2>
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              For enquiries, availability, and bespoke commissions, reach us directly or send a note
              using the form.
            </p>

            <ul className="mt-12 space-y-8">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <div className="flex items-start gap-5">
                    <Icon className="mt-1 size-5 text-accent" />
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 text-lg">{d.value}</p>
                    </div>
                  </div>
                )
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-accent">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-12 border-t border-border pt-10">
              <p className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                Studio Hours
              </p>
              <ul className="mt-6 space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="border border-border bg-card p-8 md:p-12">
            <h2 className="font-serif text-3xl">Send an Enquiry</h2>
            <div className="mt-10">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
