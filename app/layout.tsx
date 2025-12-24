import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const _outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Zerovo Labs | Premium AI-Powered Digital Solutions",
  description:
    "Zerovo Labs specializes in AI-powered web development, AI automation, custom AI solutions, and SaaS development. Transform your business with cutting-edge technology.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
