"use client"

import { useEffect } from "react"

/**
 * Lightweight momentum smoothing for a more premium scroll feel.
 * Respects reduced-motion preferences and disables itself on touch devices.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (prefersReduced || isTouch) return

    let current = window.scrollY
    let target = window.scrollY
    let raf = 0
    let running = false

    const ease = 0.09

    const onWheel = (e: WheelEvent) => {
      target += e.deltaY
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight))
      e.preventDefault()
      if (!running) {
        running = true
        loop()
      }
    }

    const loop = () => {
      current += (target - current) * ease
      if (Math.abs(target - current) < 0.5) {
        current = target
        running = false
      }
      window.scrollTo(0, current)
      if (running) raf = requestAnimationFrame(loop)
    }

    const sync = () => {
      current = window.scrollY
      target = window.scrollY
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("resize", sync)

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("resize", sync)
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
