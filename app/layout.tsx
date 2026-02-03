import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"
import { JsonLd } from "@/components/json-ld"
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "v0vp9ezv96");
          `}
        </Script>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zerovo Labs",
            "url": "https://zerovolabs.in",
            "logo": "https://zerovolabs.in/favicon.svg",
            "description": "Premium AI-Powered Digital Solutions specializing in web development, automation, and custom AI.",
            "sameAs": [
              "https://twitter.com/zerovolabs",
              "https://linkedin.com/company/zerovolabs"
            ]
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Zerovo Labs",
            "image": "https://zerovolabs.in/favicon.svg",
            "@id": "https://zerovolabs.in",
            "url": "https://zerovolabs.in",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Remote / Online",
              "addressLocality": "Digital State",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          }}
        />
      </head>

      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  )
}
