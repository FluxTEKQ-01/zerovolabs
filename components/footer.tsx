"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import { Logo } from "./logo"

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/ai-automation", label: "AI Automation Systems" },
    { href: "/services/ai-web-development", label: "AI Web Development" },
    { href: "/services/custom-ai", label: "Custom AI Solutions" },
    { href: "/services/saas-development", label: "SaaS Development" },
    { href: "/services/ai-orchestration", label: "AI Orchestration" },
  ],
  social: [
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "https://www.linkedin.com/company/zerovolabs/about/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/zerovo_labs?igsh=MWhhemVlamI4N2pvaw==", icon: Instagram, label: "Instagram" },
  ],
}

export function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }

  return (
    <footer className="relative border-t border-border overflow-hidden bg-card/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" onClick={handleLinkClick}>
              <Logo className="w-40 h-10" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Transforming businesses with cutting-edge AI-powered digital solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zerovo Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
