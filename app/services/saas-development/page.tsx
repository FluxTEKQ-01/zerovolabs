import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  LayoutDashboard,
  Layers,
  Database,
  Zap,
  Shield,
  LineChart,
  Code,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SaaS Product Development Services | Zerovo Labs",
  description: "Launch scalable, cloud-native SaaS platforms with Zerovo Labs. We build secure, multi-tenant applications designed for growth and reliability.",
  openGraph: {
    title: "SaaS Product Development Services | Zerovo Labs",
    description: "Launch scalable, cloud-native SaaS platforms. We build secure, multi-tenant applications designed for growth and reliability.",
    url: "https://zerovolabs.in/services/saas-development",
  }
}

export default function SaaSDevelopmentPage() {
  return (
    <ServicePageLayout
      data={{
        hero: {
          icon: <LayoutDashboard className="w-7 h-7 text-primary" />,
          badge: "SaaS Product Development",
          title: (
            <>
              Build <span className="text-primary">Scalable SaaS Platforms</span> for Growth
            </>
          ),
          description:
            "Launch robust, cloud-native software-as-a-service platforms designed for reliability, security, and seamless growth from 10 to 10 million users.",
        },
        keyTakeaways: [
          "Cloud-native microservices architecture for infinite scalability.",
          "Secure multi-tenant database design ensuring data isolation.",
          "Integrated subscription billing, invoicing, and revenue management.",
          "Enterprise-grade security with SSO, 2FA, and Audit Logs."
        ],
        whatIs: {
          title: "What is SaaS Product Development?",
          content1:
            "SaaS product development is the end-to-end process of creating cloud-based software applications that customers access through subscription models. These platforms must be secure, scalable, and deliver consistent performance.",
          content2:
            "We build complete SaaS ecosystems including multi-tenant architecture, subscription management, user authentication, analytics, and integrations—everything you need to launch and grow a successful software business.",
          benefits: [
            "99.99% uptime guarantee",
            "Scales automatically",
            "Built-in security & compliance",
            "Faster time-to-market",
          ],
        },
        howItWorks: {
          steps: [
            {
              step: "01",
              icon: <Layers className="w-8 h-8 text-primary mb-4" />,
              title: "Microservices Architecture",
              description: "Independent services that scale and deploy separately for maximum flexibility.",
            },
            {
              step: "02",
              icon: <Database className="w-8 h-8 text-primary mb-4" />,
              title: "Multi-Tenant Database",
              description: "Secure data isolation with shared infrastructure for cost efficiency.",
            },
            {
              step: "03",
              icon: <Zap className="w-8 h-8 text-primary mb-4" />,
              title: "Auto-Scaling Infrastructure",
              description: "Resources automatically adjust based on demand and usage patterns.",
            },
          ],
        },
        howWeMakeItWork: {
          steps: [
            {
              icon: <Layers className="w-7 h-7 text-primary" />,
              title: "Architecture & Planning",
              description:
                "We design scalable system architecture with clear service boundaries, data models, and integration points.",
            },
            {
              icon: <Code className="w-7 h-7 text-primary" />,
              title: "Full-Stack Development",
              description:
                "Our team builds frontend, backend, APIs, and databases using modern frameworks and best practices.",
            },
            {
              icon: <Shield className="w-7 h-7 text-primary" />,
              title: "Security Implementation",
              description:
                "Enterprise-grade security including encryption, authentication, authorization, and compliance measures.",
            },
            {
              icon: <LineChart className="w-7 h-7 text-primary" />,
              title: "Launch & Growth Support",
              description:
                "We provide deployment, monitoring, maintenance, and optimization as your user base grows.",
            },
          ],
        },
        results: {
          items: [
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              industry: "Team Collaboration",
              result: "50K active users in 6 months",
              example:
                "Project management SaaS reached profitability within 8 months, processing 2M tasks/month with 99.97% uptime and $2.4M ARR.",
            },
            {
              icon: <Calendar className="w-8 h-8 text-primary" />,
              industry: "Scheduling Software",
              result: "1M+ bookings processed",
              example:
                "AI-powered scheduling platform handles 45K daily appointments across 850 businesses with automated reminders reducing no-shows by 68%.",
            },
            {
              icon: <MessageSquare className="w-8 h-8 text-primary" />,
              industry: "Customer Support",
              result: "82% automation rate",
              example:
                "AI support platform resolves 180K tickets/month automatically, reducing response time from 4 hours to 2 minutes and saving $450K/year.",
            },
            {
              icon: <CreditCard className="w-8 h-8 text-primary" />,
              industry: "Financial Services",
              result: "$15M transactions monthly",
              example:
                "Payment processing SaaS handles 250K transactions daily with 99.99% uptime, PCI compliance, and fraud detection blocking $2M in fraudulent charges.",
            },
          ],
        },
        cta: {
          title: "Ready to Build Your SaaS Platform?",
          description:
            "Let's turn your software idea into a scalable business. Schedule a consultation with our team.",
        },
        faq: {
          questions: [
            {
              question: "Do you build MVPs?",
              answer: "Yes, we specialize in rapid MVP development (8-12 weeks) to help you validate your idea quickly, gathering user feedback before investing in full-scale features."
            },
            {
              question: "Who owns the code?",
              answer: "You do. 100%. Once the project is delivered and paid for, you own all intellectual property, code, and design assets."
            },
            {
              question: "How do you handle hosting and maintenance?",
              answer: "We typically set up your infrastructure on AWS, Google Cloud, or Vercel under your accounts. We offer ongoing maintenance packages to handle updates, security patches, and scaling management."
            }
          ]
        }
      }}
    />
  )
}
