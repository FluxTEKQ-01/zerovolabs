import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
    MapPin,
    Code,
    Globe,
    Zap,
    Cpu,
    Smartphone,
    Server,
    Users,
    Building,
    Rocket,
    ShoppingCart
} from "lucide-react"

export const metadata: Metadata = {
    title: "AI Development Company in Hyderabad | Zerovo Labs",
    description: "Zerovo Labs is Hyderabad's premier AI development agency. We build custom AI solutions, intelligent web apps, and automation systems for local businesses.",
    openGraph: {
        title: "AI Development Company in Hyderabad | Zerovo Labs",
        description: "Hyderabad's premier AI development agency. Custom AI solutions, intelligent web apps, and automation systems.",
        url: "https://zerovolabs.in/locations/hyderabad",
    }
}

export default function HyderabadLocationPage() {
    return (
        <ServicePageLayout
            data={{
                hero: {
                    icon: <MapPin className="w-7 h-7 text-primary" />,
                    badge: "Serving Hyderabad & Telangana",
                    title: (
                        <>
                            Hyderabad's Premier <span className="text-primary">AI Development</span> Agency
                        </>
                    ),
                    description:
                        "From HITEC City to Gachibowli, we help Hyderabad businesses scale with world-class Artificial Intelligence, Custom Web Development, and Process Automation.",
                },
                keyTakeaways: [
                    "Local Expertise: Understanding of the Hyderabad tech ecosystem.",
                    "In-person consultations available in HITEC City / Madhapur area.",
                    "Specialized in helping T-Hub startups and established enterprises.",
                    "Full stack AI implementation: Strategy, Dev, and Deployment."
                ],
                whatIs: {
                    title: "Why Choose Us in Hyderabad?",
                    content1:
                        "Hyderabad is the AI capital of India. As a local agency, we combine global technical standards with deep local market understanding. We work with clients across Jubilee Hills, Banjara Hills, and the Financial District to modernize their operations.",
                    content2: (
                        <div className="mt-4 w-full h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795855208573!3d17.412299801328906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709845230000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    ),
                    benefits: [
                        "Local Support & Maintenance",
                        "Aligned with IST Timezone",
                        "Face-to-Face Strategy Sessions",
                        "Network of Local Tech Partners",
                    ],
                },
                howItWorks: {
                    steps: [
                        {
                            step: "01",
                            icon: <Users className="w-8 h-8 text-primary mb-4" />,
                            title: "Consultation",
                            description: "We meet (virtual or local) to understand your business challenges.",
                        },
                        {
                            step: "02",
                            icon: <Code className="w-8 h-8 text-primary mb-4" />,
                            title: "Development",
                            description: "Our Hyderabad-based team builds your custom solution.",
                        },
                        {
                            step: "03",
                            icon: <Rocket className="w-8 h-8 text-primary mb-4" />,
                            title: "Launch",
                            description: "We deploy and provide ongoing local support.",
                        },
                    ],
                },
                howWeMakeItWork: {
                    steps: [
                        {
                            icon: <Globe className="w-7 h-7 text-primary" />,
                            title: "Web Development",
                            description: "High-performance React & Next.js websites.",
                        },
                        {
                            icon: <Cpu className="w-7 h-7 text-primary" />,
                            title: "AI Integration",
                            description: "Adding ChatGPT-4, Claude, or custom models to your apps.",
                        },
                        {
                            icon: <Server className="w-7 h-7 text-primary" />,
                            title: "Cloud Infrastructure",
                            description: "Secure hosting on AWS or Vercel.",
                        },
                        {
                            icon: <Smartphone className="w-7 h-7 text-primary" />,
                            title: "Mobile Solutions",
                            description: "PWA and Native app development.",
                        },
                    ],
                },
                results: {
                    items: [
                        {
                            icon: <Building className="w-8 h-8 text-primary" />,
                            industry: "Real Estate (Hyderabad)",
                            result: "40% more leads",
                            example: "Automated lead qualification for a top Gachibowli realtor.",
                        },
                        {
                            icon: <Users className="w-8 h-8 text-primary" />,
                            industry: "Education Tech",
                            result: "2x student engagement",
                            example: "Personalized learning paths for a startup in T-Hub.",
                        },
                        {
                            icon: <ShoppingCart className="w-8 h-8 text-primary" />,
                            industry: "Retail",
                            result: "24/7 Operations",
                            example: "AI Inventory management for a Banjara Hills boutique chain.",
                        },
                        {
                            icon: <Zap className="w-8 h-8 text-primary" />,
                            industry: "Services",
                            result: "60% time saved",
                            example: "Document automation for a CA firm in Somajiguda.",
                        },
                    ],
                },
                cta: {
                    title: "Grow Your Hyderabad Business with AI",
                    description: "Ready to dominate the local market? Let's build something extraordinary together.",
                },
                faq: {
                    questions: [
                        {
                            question: "Are you located in Hyderabad?",
                            answer: "Yes, our core team operates out of Hyderabad, serving clients locally and globally."
                        },
                        {
                            question: "Can we meet in person?",
                            answer: "Absolutely. We are happy to schedule meetings in the HITEC City or Financial District area for serious project discussions."
                        },
                        {
                            question: "Do you work with startups?",
                            answer: "Yes, we work closely with the startup ecosystem in Hyderabad, offering scalable MVP development and growth-focused tech stacks."
                        }
                    ]
                }
            }}
        />
    )
}
