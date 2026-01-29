"use client"

import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MissionStatement } from "@/components/home/mission-statement"
import { Users, Target, Lightbulb, Award } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push boundaries and embrace emerging technologies to deliver solutions that define the future.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every project is measured by its impact. We're obsessed with delivering tangible business outcomes.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just build for you—we build with you. Collaboration is at the heart of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description: "Mediocrity isn't in our vocabulary. We deliver premium quality in every line of code and pixel.",
  },
]
export default function AboutPage() {
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

  return (
    <main ref={pageRef} className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            About Us
          </span>
          <h1
            className="animate-on-scroll opacity-0 text-4xl md:text-6xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Pioneering the Future of <span className="text-primary">AI-Powered</span> Solutions
          </h1>
          <p
            className="animate-on-scroll opacity-0 mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Founded in 2025, Zerovo Labs has been at the forefront of merging artificial intelligence with
            exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img
                src="/placeholder.svg"
                alt="Our team at work"
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div>
              <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
                Our Story
              </span>
              <h2
                className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight"
                style={{ animationDelay: "0.1s" }}
              >
                Built by Engineers, Driven by Vision
              </h2>
              <div
                className="animate-on-scroll opacity-0 space-y-4 mt-6 text-muted-foreground leading-relaxed"
                style={{ animationDelay: "0.2s" }}
              >
                <p>
                  Zerovo Labs began as a small team of engineers frustrated by the gap between AI potential and real-world
                  implementation. We saw businesses struggling to harness the power of artificial intelligence, held
                  back by complexity and lack of expertise.
                </p>
                <p>
                  Today, we've grown into a full-service agency that bridges that gap. Our mission is simple: make
                  cutting-edge AI accessible and impactful for businesses of all sizes.
                </p>
                <p>
                  With over 50 successful projects delivered and partnerships spanning Fortune 500 companies to
                  ambitious startups, we've proven that intelligent solutions don't have to be complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-on-scroll opacity-0 glass-card rounded-2xl p-10 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "15+", label: "Team Members" },
                { value: "4", label: "Years of Excellence" },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-light text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <MissionStatement />

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
              Our Values
            </span>
            <h2
              className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight"
              style={{ animationDelay: "0.1s" }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8 text-center"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-light tracking-tight mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      <Footer />
    </main>
  )
}
