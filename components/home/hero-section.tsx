"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
     <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  poster="https://res.cloudinary.com/dhtva9xag/video/upload/so_0/13ac717d-b9d4-4c51-a810-ba6deb6296bf_bwamdu.jpg"
  className="w-full h-full object-cover"
>
  <source
    src="https://res.cloudinary.com/dhtva9xag/video/upload/fl_progressive,q_auto,f_auto,vc_h264,br_2000/13ac717d-b9d4-4c51-a810-ba6deb6296bf_bwamdu.mp4"
    type="video/mp4"
  />
</video>


        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="animate-on-scroll opacity-0 text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          Automate Operations. <br />
          Upgrade Your Digital Systems. <br />
          <span className="text-primary">Scale Smarter.</span>
        </h1>

        <p
          className="animate-on-scroll opacity-0 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
          style={{ animationDelay: "0.3s" }}
        >
          We help Business Owners and Agencies replace manual processes with AI
          automation and high-conversion websites, so they grow without
          operational chaos and scale faster.
        </p>
      </div>
    </section>
  )
}
