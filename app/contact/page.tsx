"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"
import { FAQSection } from "@/components/home/faq-section"
import { JsonLd } from "@/components/json-ld"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = pageRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await sendContactEmail(formData)

    setIsLoading(false)

    if (result.success) {
      setIsSubmitted(true)
        ; (e.target as HTMLFormElement).reset()
    } else {
      setError(result.error || "Failed to send message. Please try again.")
    }
  }

  return (
    <main ref={pageRef} className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            Contact Us
          </span>
          <h1
            className="animate-on-scroll opacity-0 text-4xl md:text-6xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Let's Build Something <span className="text-primary">Extraordinary</span>
          </h1>
          <p
            className="animate-on-scroll opacity-0 mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to transform your business with AI? We'd love to hear about your project.
          </p>
        </div>
      </section>



      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-on-scroll opacity-0">
                <h2 className="text-2xl font-light tracking-tight mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind or just want to explore possibilities, our team is here to help.
                </p>
              </div>
              <div>
                <h3 className="font-light text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">contact@zerovolabs.in</p>
              </div>

              <div className="animate-on-scroll opacity-0 space-y-6" style={{ animationDelay: "0.1s" }}>

              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8 md:p-12"
                style={{ animationDelay: "0.2s" }}
              >
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light tracking-tight mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-primary hover:underline text-sm">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-light mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-light mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-light mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-light mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="AI-Powered Web Development">AI-Powered Web Development</option>
                        <option value="AI Automation Systems">AI Automation Systems</option>
                        <option value="Custom AI Solutions">Custom AI Solutions</option>
                        <option value="SaaS Product Development">SaaS Product Development</option>
                        <option value="General Consulting">General Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-light mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full neumorphic-button px-8 py-4 rounded-xl text-foreground hover:text-primary transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
