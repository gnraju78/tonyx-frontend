"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  partner: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  date: z.string().optional(),
  location: z.string().optional(),
  service: z.string().min(1, "Please select a collection"),
  message: z.string().min(10, "Tell us a little about your day"),
})

type FormValues = z.infer<typeof schema>

const collections = ["Signature Photography", "Cinematic Film", "Photography + Film", "The Heirloom Album", "Bespoke / Not sure yet"]

const fieldBase =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-0 transition-colors"

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(_values: FormValues) {
    // Simulate a network request. Wire this to a backend or email service later.
    await new Promise((r) => setTimeout(r, 900))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex min-h-[420px] flex-col items-center justify-center border border-border bg-card p-12 text-center"
      >
        <p className="font-serif text-4xl">Thank you.</p>
        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Your enquiry has reached the studio. We personally read every message and will respond
          within two business days to begin the conversation.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-10 text-xs uppercase tracking-luxe text-accent"
        >
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input type="text" placeholder="Full name" className={fieldBase} {...register("name")} />
        </Field>
        <Field label="Partner's name" error={errors.partner?.message}>
          <input type="text" placeholder="Optional" className={fieldBase} {...register("partner")} />
        </Field>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input type="email" placeholder="you@email.com" className={fieldBase} {...register("email")} />
        </Field>
        <Field label="Wedding date" error={errors.date?.message}>
          <input type="text" placeholder="Approx. or TBD" className={fieldBase} {...register("date")} />
        </Field>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Location" error={errors.location?.message}>
          <input type="text" placeholder="City / venue / TBD" className={fieldBase} {...register("location")} />
        </Field>
        <Field label="Collection of interest" error={errors.service?.message}>
          <select className={cn(fieldBase, "appearance-none")} defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select one
            </option>
            {collections.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your day" error={errors.message?.message}>
        <textarea
          rows={4}
          placeholder="How you met, the atmosphere you envision, anything you'd like us to know..."
          className={cn(fieldBase, "resize-none")}
          {...register("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center bg-foreground px-9 py-4 text-xs uppercase tracking-luxe text-background transition-transform duration-500 hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-2 block text-xs text-destructive">{error}</span> : null}
    </label>
  )
}
