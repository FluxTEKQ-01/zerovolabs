import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  Network,
  GitBranch,
  Brain,
  LineChart,
  Puzzle,
  Shield,
  Wallet,
  Plane,
  Building,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Orchestration Services | Zerovo Labs",
  description: "Coordinate multiple AI systems seamlessly. We build unified ecosystems that connect diverse models, manage workflows, and optimize performance.",
  openGraph: {
    title: "AI Orchestration Services | Zerovo Labs",
    description: "Coordinate multiple AI systems seamlessly. We build unified ecosystems that connect diverse models, manage workflows, and optimize performance.",
    url: "https://zerovolabs.in/services/ai-orchestration",
  }
}

export default function AIOrchestrationPage() {
  return (
    <ServicePageLayout
      data={{
        hero: {
          icon: <Network className="w-7 h-7 text-primary" />,
          badge: "AI Orchestration",
          title: (
            <>
              Coordinate <span className="text-primary">Multiple AI Systems</span> Seamlessly
            </>
          ),
          description:
            "Unite diverse AI models, tools, and services into a single intelligent ecosystem that delivers unified business solutions greater than the sum of their parts.",
        },
        keyTakeaways: [
          "Connect diverse AI systems (Vision, NLP, Analytics) into a single workflow.",
          "Reduce API complexity and costs through centralized routing.",
          "Implement intelligent decision engines to route tasks to the best model.",
          "Future-proof architecture allowing you to swap AI models easily."
        ],
        whatIs: {
          title: "What is AI Orchestration?",
          content1:
            "AI Orchestration is the strategic coordination of multiple AI systems, models, and services to work together as a unified solution. It involves managing workflows, data flow, decision routing, and performance optimization across your AI infrastructure.",
          content2:
            "Modern businesses use multiple AI tools—chatbots, analytics, computer vision, NLP models. AI Orchestration ensures these systems communicate effectively, share context, and deliver cohesive experiences to your users and operations.",
          benefits: [
            "Unified AI ecosystem",
            "Reduced complexity & costs",
            "Better decision accuracy",
            "Faster deployment times",
          ],
        },
        howItWorks: {
          steps: [
            {
              step: "01",
              icon: <Network className="w-8 h-8 text-primary mb-4" />,
              title: "Model Integration",
              description: "Connect diverse AI systems through standardized APIs and data pipelines.",
            },
            {
              step: "02",
              icon: <GitBranch className="w-8 h-8 text-primary mb-4" />,
              title: "Workflow Automation",
              description: "Intelligent routing directs tasks to the most appropriate AI model automatically.",
            },
            {
              step: "03",
              icon: <LineChart className="w-8 h-8 text-primary mb-4" />,
              title: "Performance Monitoring",
              description: "Real-time analytics track each model's performance and optimize resource allocation.",
            },
          ],
        },
        howWeMakeItWork: {
          steps: [
            {
              icon: <Network className="w-7 h-7 text-primary" />,
              title: "AI Infrastructure Audit",
              description:
                "We map your current AI systems, identify integration opportunities, and design the optimal orchestration architecture.",
            },
            {
              icon: <Puzzle className="w-7 h-7 text-primary" />,
              title: "API Gateway Development",
              description:
                "Build centralized access layer that manages authentication, rate limiting, and routing across all AI services.",
            },
            {
              icon: <Brain className="w-7 h-7 text-primary" />,
              title: "Intelligent Routing Logic",
              description:
                "Implement smart decision engines that route requests to optimal models based on context, load, and performance.",
            },
            {
              icon: <Shield className="w-7 h-7 text-primary" />,
              title: "Governance & Compliance",
              description:
                "Establish security protocols, data privacy measures, and audit trails across your entire AI ecosystem.",
            },
          ],
        },
        results: {
          items: [
            {
              icon: <Wallet className="w-8 h-8 text-primary" />,
              industry: "Banking",
              result: "40% faster decision making",
              example:
                "Orchestrated 15 AI models for loan processing—fraud detection, credit scoring, document verification—reducing approval time from 3 days to 90 minutes.",
            },
            {
              icon: <Plane className="w-8 h-8 text-primary" />,
              industry: "Travel & Hospitality",
              result: "3x customer satisfaction",
              example:
                "Unified chatbot, recommendation engine, and booking systems. AI orchestration provides personalized travel suggestions with 89% booking conversion rate.",
            },
            {
              icon: <Building className="w-8 h-8 text-primary" />,
              industry: "Real Estate",
              result: "58% more qualified leads",
              example:
                "Combined property valuation AI, market analysis, and lead scoring. Orchestrated system prioritizes high-value prospects automatically, increasing sales by $4.2M.",
            },
            {
              icon: <Phone className="w-8 h-8 text-primary" />,
              industry: "Telecommunications",
              result: "73% reduction in churn",
              example:
                "Integrated sentiment analysis, usage prediction, and offer optimization. Orchestration identifies at-risk customers and deploys retention strategies automatically.",
            },
          ],
        },
        cta: {
          title: "Ready to Unify Your AI Systems?",
          description:
            "Let's design an AI orchestration strategy that maximizes your technology investments. Schedule a consultation.",
        },
        faq: {
          questions: [
            {
              question: "What is the difference between Automation and Orchestration?",
              answer: "Automation handles a single linear task. Orchestration manages multiple tasks and systems, deciding 'who' (which AI) does 'what' and 'when' based on complex logic."
            },
            {
              question: "Can I mix models from OpenAI, Anthropic, and Google?",
              answer: "Yes, that is the primary power of Orchestration. We can route creative tasks to Claude 3.5 Sonnet, analytical tasks to GPT-4o, and others to Gemini 1.5 Pro within the same workflow."
            },
            {
              question: "Does this increase latency?",
              answer: "With proper architecture, latency is minimal. In fact, routing simple queries to smaller, faster models (like Llama 3 8B) can often decrease overall system response time."
            }
          ]
        }
      }}
    />
  )
}
