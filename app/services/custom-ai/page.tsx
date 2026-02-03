import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  Sparkles,
  Brain,
  Code,
  Zap,
  LineChart,
  Database,
  Package,
  TrendingUp,
  Camera,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Custom AI Solutions | Zerovo Labs",
  description: "Bespoke artificial intelligence tailored to your business. We build custom ML models, NLP systems, and predictive analytics engines that solve unique challenges.",
  openGraph: {
    title: "Custom AI Solutions | Zerovo Labs",
    description: "Bespoke artificial intelligence tailored to your business. We build custom ML models, NLP systems, and predictive analytics engines.",
    url: "https://zerovolabs.in/services/custom-ai",
  }
}

export default function CustomAIPage() {
  return (
    <ServicePageLayout
      data={{
        hero: {
          icon: <Sparkles className="w-7 h-7 text-primary" />,
          badge: "Custom AI Solutions",
          title: (
            <>
              Build <span className="text-primary">Bespoke AI Systems</span> for Your Business
            </>
          ),
          description:
            "Solve unique business challenges with custom artificial intelligence tailored precisely to your data, processes, and strategic goals.",
        },
        keyTakeaways: [
          "ML models trained specifically on proprietary company data.",
          "Full intellectual property ownership of models and code.",
          "Seamless integration with legacy systems and data warehouses.",
          "Compliance with industry regulations (HIPAA, GDPR, SOC2)."
        ],
        whatIs: {
          title: "What are Custom AI Solutions?",
          content1:
            "Custom AI solutions are machine learning models and intelligent systems designed specifically for your business. Unlike off-the-shelf tools, these are trained on your data and optimized for your unique requirements.",
          content2:
            "From computer vision to natural language processing, predictive analytics to recommendation engines—we build AI that gives you competitive advantages and solves problems no generic solution can address.",
          benefits: [
            "Tailored to your exact needs",
            "Proprietary competitive advantage",
            "Trained on your data",
            "Full ownership & control",
          ],
        },
        howItWorks: {
          steps: [
            {
              step: "01",
              icon: <Database className="w-8 h-8 text-primary mb-4" />,
              title: "Data Collection & Preparation",
              description: "We gather, clean, and structure your data for optimal model training.",
            },
            {
              step: "02",
              icon: <Brain className="w-8 h-8 text-primary mb-4" />,
              title: "Model Development & Training",
              description: "Custom algorithms are designed, trained, and validated on your specific use case.",
            },
            {
              step: "03",
              icon: <Zap className="w-8 h-8 text-primary mb-4" />,
              title: "Deployment & Integration",
              description: "AI models are deployed into your systems with monitoring and continuous improvement.",
            },
          ],
        },
        howWeMakeItWork: {
          steps: [
            {
              icon: <Brain className="w-7 h-7 text-primary" />,
              title: "Problem Definition & Research",
              description:
                "We deeply understand your challenge, explore AI approaches, and design the optimal solution architecture.",
            },
            {
              icon: <Code className="w-7 h-7 text-primary" />,
              title: "Custom Model Development",
              description:
                "Our ML engineers build and train models using state-of-the-art algorithms tailored to your requirements.",
            },
            {
              icon: <Zap className="w-7 h-7 text-primary" />,
              title: "Testing & Validation",
              description:
                "Rigorous testing ensures models perform accurately, reliably, and meet your business objectives.",
            },
            {
              icon: <LineChart className="w-7 h-7 text-primary" />,
              title: "Ongoing Optimization",
              description:
                "We monitor performance, retrain models with new data, and continuously improve accuracy over time.",
            },
          ],
        },
        results: {
          items: [
            {
              icon: <Package className="w-8 h-8 text-primary" />,
              industry: "Logistics",
              result: "35% cost reduction",
              example:
                "Custom route optimization AI reduced fuel costs by $1.8M annually, improved delivery times by 28%, and increased customer satisfaction to 94%.",
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-primary" />,
              industry: "Finance",
              result: "94% fraud detection accuracy",
              example:
                "Custom ML model identifies fraudulent transactions in real-time with 0.3% false positive rate, preventing $12M in losses annually.",
            },
            {
              icon: <Camera className="w-8 h-8 text-primary" />,
              industry: "Manufacturing",
              result: "99.2% defect detection",
              example:
                "Computer vision system inspects 800 products/minute, catching defects human inspectors miss, reducing recalls by 87% and saving $3.5M.",
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-primary" />,
              industry: "Legal Services",
              result: "10x faster document review",
              example:
                "Custom NLP model analyzes contracts in minutes vs. hours, extracting key terms with 97% accuracy and reducing lawyer billable hours by 60%.",
            },
          ],
        },
        cta: {
          title: "Ready to Build Custom AI for Your Business?",
          description:
            "Let's discuss your unique challenges and design an AI solution that delivers results. Schedule a consultation.",
        },
        faq: {
          questions: [
            {
              question: "How much data do I need?",
              answer: "It varies by use case. For some tasks like document processing, a few hundred examples are enough. For complex computer vision, we might need thousands. We can also use 'Transfer Learning' to start with less data."
            },
            {
              question: "What if the AI makes a mistake?",
              answer: "We design 'Human-in-the-Loop' systems where low-confidence predictions are flagged for human review. This ensures safety while the system continues to learn and improve."
            },
            {
              question: "Do you offer post-deployment support?",
              answer: "Yes, AI models need monitoring to prevent 'drift' (degradation over time). We offer SLAs for performance monitoring, retraining, and updates."
            }
          ]
        }
      }}
    />
  )
}
