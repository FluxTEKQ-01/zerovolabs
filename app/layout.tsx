import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoaderProvider } from "@/components/loader-provider"
import Script from "next/script"
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
      </head>

      <body className="font-sans antialiased">
        <LoaderProvider>
          <ScrollToTop />
          {children}
        </LoaderProvider>
        <Analytics />
      </body>
    </html>
  )
}
