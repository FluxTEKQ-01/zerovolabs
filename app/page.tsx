import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhoThisIsFor } from "@/components/home/who-this-is-for"
import { ServicesOverview } from "@/components/home/services-overview"
import { HowWeWork } from "@/components/home/how-we-work"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"
import { JsonLd } from "@/components/json-ld"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoThisIsFor />
      <ServicesOverview />
      <HowWeWork />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
