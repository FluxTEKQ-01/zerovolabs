'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const LOADER_SESSION_KEY = 'zerovo_loader_shown'

// Dynamically import Loader to avoid SSR issues
const Loader = dynamic(() => import('./loader'), { ssr: false })

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if loader has been shown in this session
    const loaderShown = sessionStorage.getItem(LOADER_SESSION_KEY)
    
    if (!loaderShown) {
      // First time visiting or new session - show loader
      setShowLoader(true)
      // Mark that loader has been shown in this session
      sessionStorage.setItem(LOADER_SESSION_KEY, 'true')
    }
  }, [])

  // Don't render loader until client-side hydration is complete
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      {showLoader && <Loader />}
      {children}
    </>
  )
}
