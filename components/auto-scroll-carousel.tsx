"use client"

import type React from "react"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { cn } from "@/lib/utils"

interface CarouselItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface AutoScrollCarouselProps {
  items: CarouselItem[]
  className?: string
}

export function AutoScrollCarousel({ items, className }: AutoScrollCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }) as any,
  ])

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    if (isHovered) {
      ; (emblaApi.plugins() as any).autoScroll?.stop()
    } else {
      ; (emblaApi.plugins() as any).autoScroll?.play()
    }
  }, [emblaApi, isHovered])

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-0">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="flex-shrink-0 basis-[280px] pl-4 first:pl-0">
                <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-2 text-white">{item.title}</h4>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Gradient fades on edges */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
    </div>
  )
}
