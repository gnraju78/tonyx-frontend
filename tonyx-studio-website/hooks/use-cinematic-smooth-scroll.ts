"use client"

import { useEffect } from "react"

type CinematicSmoothScrollOptions = {
  ease?: number
  wheelMultiplier?: number
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const getMaxScroll = () =>
  Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight

const normalizeWheelDelta = (event: WheelEvent) => {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight

  return event.deltaY
}

export function useCinematicSmoothScroll({
  ease = 0.16,
  wheelMultiplier = 1.15,
}: CinematicSmoothScrollOptions = {}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const usesCoarsePointer = window.matchMedia("(pointer: coarse)").matches

    if (prefersReducedMotion || usesCoarsePointer) return

    let current = window.scrollY
    let target = window.scrollY
    let rafId: number | null = null

    const stopAnimation = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    const tick = () => {
      current += (target - current) * ease

      if (Math.abs(target - current) < 0.5) {
        current = target
        window.scrollTo(0, current)
        rafId = null
        return
      }

      window.scrollTo(0, current)
      rafId = requestAnimationFrame(tick)
    }

    const startAnimation = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(tick)
      }
    }

    const syncToNativeScroll = () => {
      if (rafId !== null) return

      current = window.scrollY
      target = window.scrollY
    }

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return

      target = clamp(
        target + normalizeWheelDelta(event) * wheelMultiplier,
        0,
        Math.max(0, getMaxScroll()),
      )

      event.preventDefault()
      startAnimation()
    }

    const handleResize = () => {
      target = clamp(target, 0, Math.max(0, getMaxScroll()))
      current = clamp(window.scrollY, 0, Math.max(0, getMaxScroll()))
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("scroll", syncToNativeScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("scroll", syncToNativeScroll)
      window.removeEventListener("resize", handleResize)
      stopAnimation()
    }
  }, [ease, wheelMultiplier])
}
