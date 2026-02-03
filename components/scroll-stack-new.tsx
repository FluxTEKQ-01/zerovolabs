"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export interface ScrollStackCard {
  title: string
  subtitle?: string
  badge?: React.ReactNode
  backgroundImage?: string
  content?: React.ReactNode
}

interface ScrollStackProps {
  cards: ScrollStackCard[]
  backgroundColor?: string
  cardHeight?: string
  sectionHeightMultiplier?: number
  intersectionThreshold?: number
  className?: string
}

const defaultBackgrounds = [
  "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
  "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
  "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
]

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-background",
  cardHeight = "60vh",
  sectionHeightMultiplier = 3,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const cardCount = Math.min(cards.length, 5)

  /**
   * 🔥 Drive animation from WINDOW scroll (like reference video)
   */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const totalScroll = viewportHeight * sectionHeightMultiplier

      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / totalScroll)
      )

      const index = Math.floor(progress * cardCount)
      setActiveCardIndex(Math.min(index, cardCount - 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [cardCount, sectionHeightMultiplier])

  /**
   * Card transform logic (your original idea — kept & optimized)
   */
  const getCardTransform = (index: number) => {
    const progressPerCard = 1 / cardCount
    const cardProgress = Math.max(
      0,
      Math.min(1, (activeCardIndex - index) / progressPerCard)
    )

    const scale = 0.88 + (1 - cardProgress) * 0.12
    const translateY = cardProgress * -110
    const opacity = index <= activeCardIndex ? 1 - cardProgress * 0.5 : 0

    return {
      transform: `translateY(${translateY}%) scale(${scale})`,
      opacity: Math.max(0, opacity),
      zIndex: cardCount - index,
      pointerEvents: opacity > 0.3 ? "auto" : "none",
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`relative w-full ${className}`}
      style={{ height: `${sectionHeightMultiplier * 100}vh` }}
    >
      {/* Sticky viewport (this creates the illusion) */}
      <div
        className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ${backgroundColor}`}
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto h-full flex items-center justify-center">
          <div
            className="relative w-full max-w-5xl mx-auto"
            style={{ height: cardHeight }}
          >
            {cards.slice(0, 5).map((card, index) => {
              const transform = getCardTransform(index)
              const backgroundImage =
                card.backgroundImage ||
                defaultBackgrounds[index % defaultBackgrounds.length]

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-0 overflow-hidden shadow-xl will-change-transform"
                  style={{
                    transform: `translateX(-50%) ${transform.transform}`,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex,
                    pointerEvents: transform.pointerEvents as React.CSSProperties["pointerEvents"],
                    height: cardHeight,
                    maxHeight: "600px",
                    width: "100%",
                    borderRadius: "24px",
                    transition:
                      "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"
                    style={{
                      backgroundImage: `url('${backgroundImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  />

                  {card.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm">
                        {card.badge}
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 p-6 md:p-8 h-full flex items-center">
                    {card.content ? (
                      card.content
                    ) : (
                      <div className="max-w-lg">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {card.title}
                        </h3>
                        {card.subtitle && (
                          <p className="text-white/80 text-lg">
                            {card.subtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollStack
