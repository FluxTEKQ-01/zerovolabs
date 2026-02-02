"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight, X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Vagrah Builders Premiere",
    category: "Web Development",
    client: "Vagrah Builders",
    year: "2024",
    image: "/luxury-modern-villa-with-pool-at-night-premium-rea.jpg",
    description:
      "A premium real estate website for Vagrah Builders specializing in luxury villas, apartments, and commercial complexes. The site features stunning visuals, smooth animations, and an elegant dark theme that perfectly showcases their high-end properties.",
    results: [
      "Premium brand positioning achieved",
      "40% increase in property inquiries",
      "Featured in Architectural Digest",
    ],
    link: "https://vagrah-builders-premiere.vercel.app/",
  },
{
    id: 2,
    title: "Athern Labs Agency ",
    category: "Web Development",
    client: "Athern Labs",
    year: "2025",
    image: "/athern-labs-agency-website-dark-modern.jpg",
    description:
      "This website is made for an Agency client name Athern Labs. A sophisticated digital agency website showcasing innovative web solutions, cutting-edge technology services, and premium digital transformation capabilities. The platform features a luxury dark theme with elegant animations and a modern interface designed to attract high-value enterprise clients.",
    results: [
      "Modern agency branding established",
      "50% increase in qualified leads",
      "Enhanced digital presence and credibility",
      "Premium client acquisition improved significantly",
    ],
    link: "https://athernlabs.vercel.app/",












  
  {
    id: 2,
    title: "Athern Labs Agency Portal",
    category: "Web Development",
    client: "Athern Labs",
    year: "2025",
    image: "/athern-labs-agency-website-dark-modern.jpg",
    description:
      "This website is made for an Agency client name Athern Labs. A sophisticated digital agency website showcasing innovative web solutions, cutting-edge technology services, and premium digital transformation capabilities. The platform features a luxury dark theme with elegant animations and a modern interface designed to attract high-value enterprise clients.",
    results: [
      "Modern agency branding established",
      "50% increase in qualified leads",
      "Enhanced digital presence and credibility",
      "Premium client acquisition improved significantly",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "AI-Powered Student Career & Study Platform",
    category: "Custom AI ",
    client: "StudyOrbit",
    year: "2025",
    image: "/ai-coding-development-futuristic-dark-neural-netwo.jpg",
    description:
      "A scalable, responsive AI SaaS web application built to streamline student academic and career workflows. The platform delivers AI-assisted resume generation, ATS optimization, interview preparation, SOP and recommendation letter creation, and document management—providing a seamless, cross-device experience that reduces manual effort and improves outcomes.",
    results: [
      "250+ active student users",
      "1000+ AI-generated documents",
      "90% user satisfaction rate",
      "Significant reduction in manual effort for academic and career tasks",
    ],
    link: "https://studyflow-spark-10381-33397-23175.vercel.app/",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

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

    const elements = pageRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedProject])

  return (
    <main ref={pageRef} className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll opacity-0 inline-block text-xs tracking-widest text-primary uppercase mb-4">
            Our Work
          </span>
          <h1
            className="animate-on-scroll opacity-0 text-4xl md:text-6xl font-light tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Case Studies & <span className="text-primary">Success Stories</span>
          </h1>
          <p
            className="animate-on-scroll opacity-0 mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Explore how we've helped businesses transform with AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="animate-on-scroll opacity-0 group relative overflow-hidden rounded-2xl text-left"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-widest text-primary uppercase">{project.category}</span>
                    <span className="text-xs text-muted-foreground">• {project.year}</span>
                  </div>
                  <h3 className="text-2xl font-light tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{project.client}</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          selectedProject ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
        <div className="absolute inset-0 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-6">
            {selectedProject && (
              <div className="relative w-full max-w-4xl glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-widest text-primary uppercase">{selectedProject.category}</span>
                    <span className="text-xs text-muted-foreground">• {selectedProject.year}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">{selectedProject.title}</h2>
                  <p className="text-muted-foreground mb-8">Client: {selectedProject.client}</p>

                  <p className="text-foreground/80 leading-relaxed mb-10">{selectedProject.description}</p>

                  <div>
                    <h3 className="text-lg font-light tracking-tight mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result) => (
                        <li key={result} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      Visit Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
