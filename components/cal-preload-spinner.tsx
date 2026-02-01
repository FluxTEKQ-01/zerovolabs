'use client'

import React from 'react'
import './cal-preload-spinner.css'

interface CalPreloadSpinnerProps {
  isVisible: boolean
}

/**
 * Cal.com Preload Spinner
 * Shows while Cal.com embed is loading
 * Uses website's cyan accent color palette
 */
export function CalPreloadSpinner({ isVisible }: CalPreloadSpinnerProps) {
  if (!isVisible) return null

  return (
    <div className="cal-preload-overlay">
      <div className="cal-preload-container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="cal-preload-text">Loading calendar...</p>
    </div>
  )
}
