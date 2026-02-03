"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollStack, { type ScrollStackCard } from "@/components/scroll-stack-new"
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import { JsonLd } from "@/components/json-ld"
import {
  Globe,
  Sparkles,
  LayoutDashboard,
  Zap,
  Database,
  Shield,
  Layers,
  Code,
  LineChart,
  Bot,
  Workflow,
  Brain,
  CheckCircle2,
  Network,
  GitBranch,
  Puzzle,
} from "lucide-react"

const services = [
  {
    id: "automation",
    slug: "/services/ai-automation",
    icon: Workflow,
    title: "AI Automation Systems",
    description:
      "Streamline operations with autonomous workflows that reduce costs, eliminate errors, and boost efficiency.",
    backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop",
    included: [
      {
        id: "auto-1",
        icon: Workflow,
        title: "End-to-End Process Automation",
        description: "Complete workflow orchestration",
      },
      {
        id: "auto-2",
        icon: Database,
        title: "Intelligent Document Processing",
        description: "Extract data from any document type",
      },
      {
        id: "auto-3",
        icon: Bot,
        title: "Automated Customer Communications",
        description: "Smart email and chat responses",
      },
      {
        id: "auto-4",
        icon: LineChart,
        title: "Supply Chain Optimization",
        description: "Predictive inventory management",
      },
      {
        id: "auto-5",
        icon: Shield,
        title: "Predictive Maintenance Systems",
        description: "Prevent failures proactively",
      },
      { id: "auto-6", icon: Code, title: "Real-Time Monitoring Dashboards", description: "Live operational insights" },
    ],
  },
  {
    id: "web-development",
    slug: "/services/ai-web-development",
    icon: Globe,
    title: "AI-Powered Web Development",
    description:
      "Intelligent websites and applications that learn, adapt, and deliver personalized experiences at scale.",
    backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop",
    included: [
      {
        id: "web-1",
        icon: Zap,
        title: "Dynamic Content Personalization",
        description: "AI adapts content based on user behavior",
      },
      {
        id: "web-2",
        icon: Brain,
        title: "Predictive User Analytics",
        description: "Anticipate needs before users act",
      },
      { id: "web-3", icon: Layers, title: "Intelligent A/B Testing", description: "Automated conversion optimization" },
      { id: "web-4", icon: Database, title: "Smart Search & Recommendations", description: "Context-aware discovery" },
      { id: "web-5", icon: Bot, title: "Voice & Chatbot Integration", description: "Natural language interfaces" },
      { id: "web-6", icon: LineChart, title: "Performance Optimization", description: "Lightning-fast load times" },
    ],
  },
  {
    id: "saas",
    slug: "/services/saas-development",
    icon: LayoutDashboard,
    title: "SaaS Product Development",
    description: "End-to-end development of scalable software-as-a-service platforms built for growth and reliability.",
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
    included: [
      {
        id: "saas-1",
        icon: Layers,
        title: "Full-Stack Architecture Design",
        description: "Scalable system architecture",
      },
      { id: "saas-2", icon: Database, title: "Multi-Tenant Infrastructure", description: "Efficient resource sharing" },
      { id: "saas-3", icon: Zap, title: "Subscription & Billing Systems", description: "Automated revenue management" },
      {
        id: "saas-4",
        icon: Shield,
        title: "User Management & Authentication",
        description: "Secure identity solutions",
      },
      {
        id: "saas-5",
        icon: LineChart,
        title: "Analytics & Reporting Tools",
        description: "Actionable business insights",
      },
      {
        id: "saas-6",
        icon: Code,
        title: "API Development & Documentation",
        description: "Developer-friendly integrations",
      },
    ],
  },
  {
    id: "custom-solutions",
    slug: "/services/custom-ai",
    icon: Sparkles,
    title: "Custom AI Solutions",
    description:
      "Bespoke artificial intelligence tailored precisely to your unique business challenges and strategic goals.",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
    included: [
      {
        id: "custom-1",
        icon: Brain,
        title: "Custom ML Model Development",
        description: "Tailored machine learning solutions",
      },
      {
        id: "custom-2",
        icon: Code,
        title: "Natural Language Processing",
        description: "Understand and generate human text",
      },
      {
        id: "custom-3",
        icon: Zap,
        title: "Computer Vision Applications",
        description: "Interpret visual data intelligently",
      },
      {
        id: "custom-4",
        icon: LineChart,
        title: "Predictive Analytics Engine",
        description: "Forecast future business outcomes",
      },
      {
        id: "custom-5",
        icon: Database,
        title: "Recommendation Systems",
        description: "Personalized suggestions at scale",
      },
      { id: "custom-6", icon: Sparkles, title: "AI Strategy Consulting", description: "Roadmap for AI transformation" },
    ],
  },
  {
    id: "ai-orchestration",
    slug: "/services/ai-orchestration",
    icon: Network,
    title: "AI Orchestration",
    description:
      "Coordinate multiple AI systems seamlessly to create unified, intelligent business solutions that work together.",
    backgroundImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&auto=format&fit=crop",
    included: [
      {
        id: "orch-1",
        icon: Network,
        title: "Multi-Model Integration",
        description: "Connect diverse AI systems seamlessly",
      },
      {
        id: "orch-2",
        icon: GitBranch,
        title: "Workflow Orchestration",
        description: "Automated AI pipeline management",
      },
      {
        id: "orch-3",
        icon: Brain,
        title: "Intelligent Decision Routing",
        description: "Direct tasks to optimal AI models",
      },
      {
        id: "orch-4",
        icon: LineChart,
        title: "Performance Monitoring",
        description: "Real-time AI system analytics",
      },
      {
        id: "orch-5",
        icon: Puzzle,
        title: "API Gateway Management",
        description: "Centralized AI service access",
      },
      { id: "orch-6", icon: Shield, title: "Security & Compliance", description: "Enterprise-grade AI governance" },
    ],
  },
]

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [isCalModalOpen, setIsCalModalOpen] = useState(false)

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

  const scrollStackCards: ScrollStackCard[] = services.map((service) => ({
    title: service.title,
    subtitle: service.description,
    badge: (
      <Link href={service.slug} className="text-primary hover:underline">
        Explore More
      </Link>
    ),
    backgroundImage: service.backgroundImage,
    content: (
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 text-primary">
            <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-3 sm:mb-4 text-white">
            {service.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>

        {/* What's Included - Auto Scroll Carousel */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-base sm:text-lg font-light tracking-tight mb-3 sm:mb-4 flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            What's Included
          </h3>
          <AutoScrollCarousel items={service.included} />
        </div>

        <div className="mt-4 sm:mt-6">
          <Link href={service.slug}>
            <StardustButton>Learn More</StardustButton>
          </Link>
        </div>
      </div>
    ),
  }))

  return (
    <>
      <main ref={pageRef} className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
              Our Services
            </span>
            <h1
              className="animate-on-scroll opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Premium <span className="text-primary">AI Solutions</span> for Modern Business
            </h1>
            <p
              className="animate-on-scroll opacity-0 mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              From intelligent web experiences to autonomous automation—we deliver technology that transforms how you
              operate.
            </p>
          </div>
        </section>

        <ScrollStack
          cards={scrollStackCards}
          backgroundColor="bg-background"
          cardHeight="75vh"
          sectionHeightMultiplier={4}
          intersectionThreshold={0.2}
        />

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-card/30 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-on-scroll opacity-0 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight">
              Not Sure Which Service You Need?
            </h2>
            <p
              className="animate-on-scroll opacity-0 mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto"
              style={{ animationDelay: "0.1s" }}
            >
              Let's talk. Our team will help you identify the right solution for your business goals.
            </p>
            <div className="animate-on-scroll opacity-0 mt-6 sm:mt-8" style={{ animationDelay: "0.2s" }}>
              <StardustButton onClick={() => setIsCalModalOpen(true)}>Request Consulting</StardustButton>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <JsonLd
        data={services.map((service) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "Zerovo Labs",
            "url": "https://zerovolabs.in"
          },
          "url": `https://zerovolabs.in${service.slug}`
        }))}
      />
      <CalModal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} />
    </>
  )
}
