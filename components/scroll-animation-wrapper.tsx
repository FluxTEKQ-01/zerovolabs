"use client"

import { useEffect, useRef } from "react"

export function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)

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

        const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
}
