"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface FaqItem {
    question: string
    answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

    return (
        <div className="space-y-4">
            {items.map((faq, index) => (
                <div
                    key={index}
                    className="animate-on-scroll opacity-0 glass-card rounded-xl overflow-hidden"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                    <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="font-light text-foreground">{faq.question}</span>
                        <ArrowRight
                            className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4 ${openFaqIndex === index ? "rotate-90" : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96" : "max-h-0"
                            }`}
                    >
                        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
