import { Hero } from "@/components/home/hero"
import { Philosophy } from "@/components/home/philosophy"
import { FeaturedGallery } from "@/components/home/featured-gallery"
import { ProcessSection } from "@/components/home/process-section"
import { Testimonials } from "@/components/home/testimonials"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedGallery />
      <ProcessSection />
      <Testimonials />
      <CtaSection />
    </main>
  )
}
