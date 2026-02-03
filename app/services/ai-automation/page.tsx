import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  Workflow,
  Database,
  Bot,
  LineChart,
  Shield,
  Code,
  Factory,
  Building2,
  Stethoscope,
  ShoppingCart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Automation Services | Zerovo Labs",
  description: "Streamline your business with AI Automation Systems. Reduce costs by 60%, eliminate errors, and boost efficiency with autonomous workflows.",
  openGraph: {
    title: "AI Automation Services | Zerovo Labs",
    description: "Streamline your business with AI Automation Systems. Reduce costs by 60%, eliminate errors, and boost efficiency with autonomous workflows.",
    url: "https://zerovolabs.in/services/ai-automation",
  }
}

export default function AIAutomationPage() {
  return (
    <ServicePageLayout
      data={{
        hero: {
          icon: <Workflow className="w-7 h-7 text-primary" />,
          badge: "AI Automation Systems",
          title: (
            <>
              Transform Operations with <span className="text-primary">Intelligent Automation</span>
            </>
          ),
          description:
            "Streamline your business operations with autonomous workflows that eliminate repetitive tasks, reduce costs by up to 60%, and boost efficiency across your entire organization.",
        },
        keyTakeaways: [
          "Reduce operational costs by 40-60% within the first year.",
          "Eliminate human error in data entry and processing.",
          "Operate 24/7 without downtime or overtime costs.",
          "Scale operations instantly to meet demand spikes."
        ],
        whatIs: {
          title: "What is AI Automation?",
          content1:
            "AI Automation Systems use artificial intelligence to handle complex business processes without human intervention. These systems learn from patterns, make intelligent decisions, and continuously optimize their performance.",
          content2:
            "Unlike traditional automation, our AI-powered solutions can handle exceptions, adapt to changing conditions, and improve over time—transforming your operations from reactive to proactive.",
          benefits: ["60% cost reduction", "99.9% accuracy rate", "24/7 operation", "Instant scalability"],
        },
        howItWorks: {
          steps: [
            {
              step: "01",
              icon: <Database className="w-8 h-8 text-primary mb-4" />,
              title: "Data Collection",
              description: "AI systems gather and analyze data from multiple sources in real-time.",
            },
            {
              step: "02",
              icon: <Bot className="w-8 h-8 text-primary mb-4" />,
              title: "Intelligent Processing",
              description: "Machine learning models make decisions based on patterns and rules.",
            },
            {
              step: "03",
              icon: <LineChart className="w-8 h-8 text-primary mb-4" />,
              title: "Continuous Optimization",
              description: "Systems learn from outcomes and automatically improve performance.",
            },
          ],
        },
        howWeMakeItWork: {
          steps: [
            {
              icon: <Workflow className="w-7 h-7 text-primary" />,
              title: "Discovery & Mapping",
              description:
                "We analyze your current workflows to identify automation opportunities with highest ROI.",
            },
            {
              icon: <Code className="w-7 h-7 text-primary" />,
              title: "Custom Development",
              description:
                "Our team builds tailored AI models trained on your specific business processes and data.",
            },
            {
              icon: <Shield className="w-7 h-7 text-primary" />,
              title: "Seamless Integration",
              description:
                "We integrate automation systems with your existing tools and platforms without disruption.",
            },
            {
              icon: <LineChart className="w-7 h-7 text-primary" />,
              title: "Monitoring & Optimization",
              description: "Continuous performance tracking and refinement ensures maximum efficiency gains.",
            },
          ],
        },
        results: {
          items: [
            {
              icon: <Factory className="w-8 h-8 text-primary" />,
              industry: "Manufacturing",
              result: "65% reduction in quality defects",
              example:
                "Predictive maintenance system reduced equipment downtime by 40 hours/month and prevented 12 critical failures.",
            },
            {
              icon: <Building2 className="w-8 h-8 text-primary" />,
              industry: "Finance",
              result: "90% faster document processing",
              example:
                "Automated loan processing system handles 10,000+ applications daily with 99.7% accuracy, reducing approval time from 5 days to 2 hours.",
            },
            {
              icon: <Stethoscope className="w-8 h-8 text-primary" />,
              industry: "Healthcare",
              result: "80% reduction in admin tasks",
              example:
                "AI-powered patient intake system processes insurance verification, scheduling, and records in under 3 minutes vs. 45 minutes manually.",
            },
            {
              icon: <ShoppingCart className="w-8 h-8 text-primary" />,
              industry: "E-Commerce",
              result: "3x increase in order fulfillment",
              example:
                "Intelligent inventory management predicted demand spikes, optimized stock levels, and reduced warehouse costs by $2M annually.",
            },
          ],
        },
        cta: {
          title: "Ready to Automate Your Operations?",
          description:
            "Let's discuss how AI automation can transform your business. Schedule a consultation with our team.",
        },
        faq: {
          questions: [
            {
              question: "What types of processes can be automated?",
              answer: "We can automate almost any rule-based or data-heavy process, including data entry, invoice processing, customer support inquiries, inventory management, and personalized marketing workflows."
            },
            {
              question: "How long does it take to implement?",
              answer: "A standard implementation takes 4-8 weeks depending on complexity. We start with a pilot program to demonstrate ROI before full-scale deployment."
            },
            {
              question: "Will this replace my current employees?",
              answer: "AI automation is designed to augment your team, handling repetitive low-value tasks so your employees can focus on high-value strategic work and creative problem solving."
            }
          ]
        }
      }}
    />
  )
}
