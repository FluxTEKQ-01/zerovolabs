import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  Globe,
  Zap,
  Brain,
  Layers,
  Database,
  LineChart,
  ShoppingBag,
  GraduationCap,
  Heart,
  Newspaper,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-Powered Web Development | Zerovo Labs",
  description: "Build intelligent websites that adapt. Our AI web development services deliver personalized user experiences, predictive analytics, and 2.5x higher conversions.",
  openGraph: {
    title: "AI-Powered Web Development | Zerovo Labs",
    description: "Build intelligent websites that adapt. Our AI web development services deliver personalized user experiences, predictive analytics, and 2.5x higher conversions.",
    url: "https://zerovolabs.in/services/ai-web-development",
  }
}

export default function AIWebDevelopmentPage() {
  return (
    <ServicePageLayout
      data={{
        hero: {
          icon: <Globe className="w-7 h-7 text-primary" />,
          badge: "AI-Powered Web Development",
          title: (
            <>
              Build <span className="text-primary">Intelligent Web Experiences</span> That Adapt
            </>
          ),
          description:
            "Create websites and applications that learn from user behavior, personalize experiences in real-time, and continuously optimize for maximum engagement and conversions.",
        },
        keyTakeaways: [
          "Delivers content tailored to individual user behavior in real-time.",
          "Predicts user intent to serve relevant products or information.",
          "Automatically runs A/B tests to improve conversion rates daily.",
          "Reduces bounce rates by providing hyper-relevant experiences."
        ],
        whatIs: {
          title: "What is AI-Powered Web Development?",
          content1:
            "AI-powered web development integrates machine learning and artificial intelligence directly into your website or application, creating experiences that adapt to each user's preferences, behavior, and needs.",
          content2:
            "These intelligent systems analyze user interactions in real-time, predict intent, and dynamically adjust content, layout, and functionality to maximize engagement and achieve your business goals.",
          benefits: [
            "45% higher engagement rates",
            "2.5x conversion improvement",
            "Personalized user journeys",
            "Real-time optimization",
          ],
        },
        howItWorks: {
          steps: [
            {
              step: "01",
              icon: <Brain className="w-8 h-8 text-primary mb-4" />,
              title: "User Behavior Analysis",
              description: "AI tracks interactions, preferences, and patterns across your platform.",
            },
            {
              step: "02",
              icon: <Zap className="w-8 h-8 text-primary mb-4" />,
              title: "Real-Time Personalization",
              description: "Content, layout, and features adapt instantly to each user's profile.",
            },
            {
              step: "03",
              icon: <LineChart className="w-8 h-8 text-primary mb-4" />,
              title: "Continuous Learning",
              description: "Systems improve through A/B testing and outcome analysis automatically.",
            },
          ],
        },
        howWeMakeItWork: {
          steps: [
            {
              icon: <Database className="w-7 h-7 text-primary" />,
              title: "Data Architecture Design",
              description:
                "We build robust data pipelines that capture user behavior while maintaining privacy and compliance.",
            },
            {
              icon: <Brain className="w-7 h-7 text-primary" />,
              title: "AI Model Integration",
              description:
                "Custom machine learning models are trained on your data and seamlessly integrated into your application.",
            },
            {
              icon: <Layers className="w-7 h-7 text-primary" />,
              title: "Scalable Infrastructure",
              description:
                "We deploy cloud-native architectures that handle millions of personalized experiences efficiently.",
            },
            {
              icon: <LineChart className="w-7 h-7 text-primary" />,
              title: "Performance Monitoring",
              description:
                "Real-time dashboards track AI performance, user satisfaction, and business metrics continuously.",
            },
          ],
        },
        results: {
          items: [
            {
              icon: <ShoppingBag className="w-8 h-8 text-primary" />,
              industry: "E-Commerce",
              result: "156% increase in conversions",
              example:
                "AI-powered product recommendations and dynamic pricing increased average order value by 43% and customer lifetime value by 2.3x.",
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-primary" />,
              industry: "Education",
              result: "3x course completion rate",
              example:
                "Adaptive learning platform personalizes content difficulty and pacing, resulting in 67% higher student satisfaction and 40% better test scores.",
            },
            {
              icon: <Heart className="w-8 h-8 text-primary" />,
              industry: "Healthcare",
              result: "85% patient engagement increase",
              example:
                "Personalized health portal provides tailored content and reminders, reducing missed appointments by 52% and improving treatment adherence.",
            },
            {
              icon: <Newspaper className="w-8 h-8 text-primary" />,
              industry: "Media & Publishing",
              result: "4.2x time on site",
              example:
                "AI content recommendation engine increased pageviews by 180%, ad revenue by 95%, and reduced bounce rate from 68% to 23%.",
            },
          ],
        },
        cta: {
          title: "Ready to Build Intelligent Web Experiences?",
          description:
            "Let's create a website that learns and adapts. Schedule a consultation with our team.",
        },
        faq: {
          questions: [
            {
              question: "How does AI personalization work?",
              answer: "We use machine learning algorithms to analyze user data such as browsing history, click patterns, and demographics to dynamically display the most relevant content and products for each visitor."
            },
            {
              question: "Is it GDPR/privacy compliant?",
              answer: "Yes, our systems are built with privacy-first architecture. We use anonymized data and give users full control over their data preferences, ensuring complete compliance with GDPR and CCPA."
            },
            {
              question: "Can this be added to my existing site?",
              answer: "In many cases, yes. We can integrate AI layers via APIs into modern Tech stacks (React, Next.js). For older legacy sites, we may recommend a partial or full migration to unlock full capabilities."
            }
          ]
        }
      }}
    />
  )
}
