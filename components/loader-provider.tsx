'use client'

import React, { useEffect, useState } from 'react'
import Loader from './loader'

const LOADER_SESSION_KEY = 'zerovo_loader_shown'

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [shouldShowLoader, setShouldShowLoader] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if loader has been shown in this session
    const loaderShown = sessionStorage.getItem(LOADER_SESSION_KEY)
    
    if (!loaderShown) {
      // First time visiting or new session - show loader
      setShouldShowLoader(true)
      // Mark that loader has been shown in this session
      sessionStorage.setItem(LOADER_SESSION_KEY, 'true')
    } else {
      // Loader already shown in this session - hide it
      setShouldShowLoader(false)
    }
  }, [])

  // Don't render anything until hydration is complete
  if (shouldShowLoader === null) {
    return <>{children}</>
  }

  return (
    <>
      {shouldShowLoader && <Loader />}
      {children}
    </>
  )
}
