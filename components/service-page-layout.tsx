import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper"
import { FaqAccordion } from "@/components/faq-accordion"
import { ConsultationWrapper } from "@/components/consultation-wrapper"

// This is now a Server Component by default (no "use client")

export interface ServicePageProps {
    hero: {
        icon: React.ReactNode // Changed from LucideIcon to ReactNode
        badge: string
        title: React.ReactNode
        description: string
    }
    whatIs: {
        title: string
        content1: React.ReactNode
        content2: React.ReactNode
        benefits: string[]
    }
    howItWorks: {
        steps: Array<{
            step: string
            icon: React.ReactNode // Changed from LucideIcon to ReactNode
            title: string
            description: string
        }>
    }
    howWeMakeItWork: {
        steps: Array<{
            icon: React.ReactNode // Changed from LucideIcon to ReactNode
            title: string
            description: string
        }>
    }
    results: {
        items: Array<{
            icon: React.ReactNode // Changed from LucideIcon to ReactNode
            industry: string
            result: string
            example: string
        }>
    }
    cta: {
        title: string
        description: string
    }
    faq?: {
        questions: Array<{
            question: string
            answer: string
        }>
    }
    keyTakeaways?: string[]
}

export function ServicePageLayout({ data }: { data: ServicePageProps }) {
    // Styles for icons need to be handled by the passing component or wrapped. 
    // But wait, the previous code applied classes here. 
    // If we pass ReactNode, we assume the node HAS the classes.
    // OR we can't easily add classes to ReactNode. 
    // So, the parent MUST apply the classes.

    return (
        <ScrollAnimationWrapper>
            <main className="min-h-screen">
                <Navigation />

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center">
                                {data.hero.icon}
                            </div>
                            <span className="animate-on-scroll opacity-0 text-xs tracking-widest text-primary uppercase">
                                {data.hero.badge}
                            </span>
                        </div>
                        <h1
                            className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
                            style={{ animationDelay: "0.1s" }}
                        >
                            {data.hero.title}
                        </h1>
                        <p
                            className="animate-on-scroll opacity-0 text-lg text-muted-foreground max-w-3xl leading-relaxed"
                            style={{ animationDelay: "0.2s" }}
                        >
                            {data.hero.description}
                        </p>
                    </div>
                </section>

                {/* Key Takeaways (AEO) */}
                {data.keyTakeaways && (
                    <section className="py-10 px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="glass-card rounded-2xl p-6 md:p-8 animate-on-scroll opacity-0">
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Key Takeaways</h3>
                                <ul className="space-y-2">
                                    {data.keyTakeaways.map((takeaway, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{takeaway}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* What It Is */}
                <section className="py-20 px-4 bg-card/30">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-8">
                            {data.whatIs.title}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
                                <div className="text-muted-foreground leading-relaxed mb-4">
                                    {data.whatIs.content1}
                                </div>
                                <div className="text-muted-foreground leading-relaxed">
                                    {data.whatIs.content2}
                                </div>
                            </div>
                            <div
                                className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <h3 className="text-xl font-light tracking-tight mb-4">Key Benefits</h3>
                                <ul className="space-y-3">
                                    {data.whatIs.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12">
                            How It Works
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {data.howItWorks.steps.map((item, index) => (
                                <div
                                    key={item.step}
                                    className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="text-primary/30 text-5xl font-light mb-4">{item.step}</div>
                                    <div className="mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-light tracking-tight mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Make It Work */}
                <section className="py-20 px-4 bg-card/30">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12">
                            How We Make It Work
                        </h2>
                        <div className="space-y-6">
                            {data.howWeMakeItWork.steps.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8 flex items-start gap-6"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-14 h-14 rounded-xl glass flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-light tracking-tight mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12">
                            Results Across Industries
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {data.results.items.map((item, index) => (
                                <div
                                    key={item.industry}
                                    className="animate-on-scroll opacity-0 glass-card rounded-2xl p-8"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {item.icon}
                                        <h3 className="text-xl font-light tracking-tight">{item.industry}</h3>
                                    </div>
                                    <div className="text-2xl font-light text-primary mb-4">{item.result}</div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.example}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                {data.faq && (
                    <section className="py-20 px-4 bg-card/30">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-12 text-center">
                                Frequently Asked Questions
                            </h2>
                            <FaqAccordion items={data.faq.questions} />
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-light tracking-tight mb-6">
                            {data.cta.title}
                        </h2>
                        <p
                            className="animate-on-scroll opacity-0 text-muted-foreground max-w-xl mx-auto mb-8"
                            style={{ animationDelay: "0.1s" }}
                        >
                            {data.cta.description}
                        </p>
                        <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
                            <ConsultationWrapper>
                                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
                            </ConsultationWrapper>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </ScrollAnimationWrapper>
    )
}
