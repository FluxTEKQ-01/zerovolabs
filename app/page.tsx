import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhoThisIsFor } from "@/components/home/who-this-is-for"
import { ServicesOverview } from "@/components/home/services-overview"
import { HowWeWork } from "@/components/home/how-we-work"
import { Testimonials } from "@/components/home/testimonials"
import { CaseStudiesPreview } from "@/components/home/case-studies-preview"
import { CTASection } from "@/components/home/cta-section"
import { FAQSection } from "@/components/home/faq-section"
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
      <CaseStudiesPreview />
      <CTASection />
      <FAQSection />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are your pricing models?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer flexible pricing based on project scope—fixed-price for defined projects, retainer models for ongoing partnerships, and milestone-based payments for larger initiatives."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a typical project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines vary based on complexity. A simple AI integration might take 2-4 weeks, while a full SaaS platform could take 3-6 months."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate AI into our existing systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We specialize in seamlessly integrating AI capabilities into existing infrastructure, whether it's adding intelligent automation to your CRM or enhancing your e-commerce platform."
              }
            }
          ]
        }}
      />
      <Footer />
    </main>
  )
}
