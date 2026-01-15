"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source
            src="https://res.cloudinary.com/dhtva9xag/video/upload/13ac717d-b9d4-4c51-a810-ba6deb6296bf_bwamdu.mp4"
            type="video/mp4"
          />
          {/* Fallback iframe if video element fails */}
          <iframe
            ref={iframeRef}
            src="https://player.cloudinary.com/embed/?cloud_name=dhtva9xag&public_id=13ac717d-b9d4-4c51-a810-ba6deb6296bf_bwamdu&profile=cld-default&autoplay=true&muted=true&loop=true&controls=false&playsinline=true"
            className="w-full h-full"
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            title="Background Video"
          />
        </video>
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
          We help Business Owners and Agencies replace manual processes with AI automation and high-conversion websites, so they grow without operational chaos and scale faster
        </p>
      </div>
    </section>
  )
}
