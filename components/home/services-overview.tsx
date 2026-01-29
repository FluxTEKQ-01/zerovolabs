"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Cpu, Sparkles, LayoutDashboard, Network } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Cpu,
    title: "Replace manual work with AI automations",
    description: "We design AI-powered workflows that automate repetitive tasks like internal operations and reporting, saving hours every week.",
    href: "/services/ai-automation",
    animation: "service-float 6s ease-in-out infinite",
  },
  {
    icon: Globe,
    title: "Premium Websites that Build Trust & Convert",
    description: "We build high-conversion websites for growing businesses that establish credibility, attract the right clients.",
    href: "/services/ai-web-development",
    animation: "service-pulse 4s ease-in-out infinite",
  },
  {
    icon: LayoutDashboard,
    title: "AI SaaS Development.",
    description: "AI systems for scaling operations & solutions designed around your business processes, so you can scale without increasing headcount.",
    href: "/services/saas-development",
    animation: "service-tilt 5.5s ease-in-out infinite",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Bespoke artificial intelligence tailored to your unique business challenges and goals.",
    href: "/services/custom-ai",
    animation: "service-drift 8s ease-in-out infinite",
  },
  {
    icon: Network,
    title: "AI Orchestration",
    description: "Coordinate multiple AI systems seamlessly to create unified, intelligent business solutions.",
    href: "/services/ai-orchestration",
    animation: "service-glow 7s ease-in-out infinite",
  },
]

const spans = [
  "md:col-span-4 md:row-span-2", // AI Automation - large
  "md:col-span-2 md:row-span-1", // AI Web Dev - medium
  "md:col-span-2 md:row-span-1", // SaaS - medium
  "md:col-span-3 md:row-span-1", // Custom AI - medium
  "md:col-span-3 md:row-span-1", // AI Orchestration - medium
]

export function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sectionVisible, setSectionVisible] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return
    const id = "service-animations"
    if (document.getElementById(id)) return
    const style = document.createElement("style")
    style.id = id
    style.innerHTML = `
      @keyframes service-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes service-pulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.05); opacity: 1; }
      }
      @keyframes service-tilt {
        0% { transform: rotate(-1deg); }
        50% { transform: rotate(1deg); }
        100% { transform: rotate(-1deg); }
      }
      @keyframes service-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(4%, -4%, 0); }
      }
      @keyframes service-glow {
        0%, 100% { opacity: 0.7; filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.4)); }
        50% { opacity: 1; filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.6)); }
      }
      @keyframes service-intro {
        0% { opacity: 0; transform: translate3d(0, 28px, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes service-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `
    document.head.appendChild(style)
    return () => {
      style.remove()
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return

    const node = sectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-24 motion-safe:opacity-0 ${
        sectionVisible ? "motion-safe:animate-[service-intro_0.9s_ease-out_forwards]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs tracking-widest text-primary uppercase mb-4">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Premium AI-powered solutions designed to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[minmax(160px,auto)]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              span={spans[index]}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  span = "",
  index = 0,
  isVisible = false,
}: {
  service: (typeof services)[0]
  span: string
  index: number
  isVisible: boolean
}) {
  const { icon: Icon, animation, title, description, href } = service
  const animationDelay = `${Math.max(index * 0.12, 0)}s`
  const isLarge = index === 0

  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl glass-card p-6 md:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[service-card_0.8s_ease-out_forwards]" : ""
      } hover:border-primary/30 ${span}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-card/80 transition-colors duration-500" />
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: "radial-gradient(ellipse 60% 120% at 15% 10%, rgba(56, 189, 248, 0.2), transparent 70%)",
          }}
        />
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl glass group-hover:bg-primary/10 transition-all duration-300">
          <Icon
            className="h-6 w-6 md:h-7 md:w-7 text-primary transition-all duration-300"
            strokeWidth={1.5}
            style={{ animation }}
          />
        </div>
        <div className="flex-1">
          <h3
            className={`${
              isLarge ? "text-2xl md:text-3xl" : "text-xl"
            } font-light tracking-tight mb-3 group-hover:text-primary transition-colors`}
          >
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
        Explore More →
      </div>
    </Link>
  )
}
