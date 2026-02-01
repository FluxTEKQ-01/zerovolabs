'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { X, AlertCircle } from 'lucide-react'
import { CalErrorBoundary } from '@/components/cal-error-boundary'
import { CalPreloadSpinner } from '@/components/cal-preload-spinner'
import { startCalLoadTimer, endCalLoadTimer, recordCalError, startIframeTimer, endIframeTimer } from '@/lib/cal-performance'

interface CalModalOptimizedProps {
  isOpen: boolean
  onClose: () => void
  calLink?: string // e.g., "ravi-zerovo/30min"
  namespace?: string // Unique identifier for multiple embeds
}

const DEFAULT_CAL_LINK = 'ravi-zerovo/30min'
const PRELOAD_DELAY = 2000 // ms - preload after 2 seconds of user interaction
const CACHE_KEY_PREFIX = 'cal_embed_'

export function CalModalOptimized({ 
  isOpen, 
  onClose, 
  calLink = DEFAULT_CAL_LINK,
  namespace = '30min'
}: CalModalOptimizedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(isOpen)
  const [hasError, setHasError] = useState(false)
  const [preloadStarted, setPreloadStarted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const preloadTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const metricsIdRef = useRef(namespace)

  // Preload Cal.com API on mount or after delay
  const preloadCalApi = useCallback(async () => {
    if (preloadStarted) return

    console.log('[v0] Preloading Cal.com API...')
    setPreloadStarted(true)
    startCalLoadTimer(metricsIdRef.current)

    try {
      const cal = await getCalApi({ namespace })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        styles: {
          branding: { brandColor: '#38bdf8' },
        },
        cssVarsPerTheme: {
          light: {
            'cal-bg-muted': '#f5f5f5',
            'cal-border-emphasis': '#e0e0e0',
            'cal-text-emphasis': '#333333',
          },
          dark: {
            'cal-bg-muted': '#1a1a1a',
            'cal-border-emphasis': '#333333',
            'cal-text-emphasis': '#ffffff',
          },
        },
      })

      endCalLoadTimer(metricsIdRef.current)
      setIsLoaded(true)
      setHasError(false)
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to load Cal.com API')
      console.error('[v0] Cal.com preload failed:', err)
      recordCalError(err, metricsIdRef.current)
      setHasError(true)
    }
  }, [preloadStarted, namespace])

  // Preload strategy: immediate + delayed fallback
  useEffect(() => {
    if (!isOpen) return

    // Strategy 1: Preload immediately if modal is open
    preloadCalApi()

    // Strategy 2: Clean up timeout on unmount
    return () => {
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current)
      }
    }
  }, [isOpen, preloadCalApi])

  // Track iframe render performance
  useEffect(() => {
    if (!isLoaded) return

    startIframeTimer(metricsIdRef.current)
    setIsLoading(false)

    // Report iframe loaded
    const handleIframeLoad = () => {
      endIframeTimer(metricsIdRef.current)
      console.log('[v0] Calendar iframe fully rendered')
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad)
      return () => iframe.removeEventListener('load', handleIframeLoad)
    }
  }, [isLoaded])

  if (!isOpen) return null

  return (
    <CalErrorBoundary
      fallback={
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-background rounded-lg shadow-2xl overflow-hidden mx-4 p-8 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Unable to Load Calendar</h3>
            <p className="text-sm text-muted-foreground mb-4">Please try again or contact support.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Reload Page
            </button>
          </div>
        </div>
      }
    >
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cal-modal-title"
      >
        <div
          className="relative w-full max-w-4xl bg-background rounded-lg shadow-2xl overflow-hidden mx-4 h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card hover:bg-card/80 transition-colors shadow-lg"
            aria-label="Close calendar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Loading State - Custom Spinner */}
          <CalPreloadSpinner isVisible={isLoading} />

          {/* Error State */}
          {hasError && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/90 z-20 flex-col gap-4">
              <AlertCircle className="w-12 h-12 text-red-500" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Failed to load calendar. Please check your connection and try again.
                </p>
                <button
                  onClick={() => {
                    setHasError(false)
                    setIsLoading(true)
                    preloadCalApi()
                  }}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Calendar Iframe - Lazy Loaded */}
          <div className="flex-1 overflow-hidden p-4">
            {isLoaded && (
              <iframe
                ref={iframeRef}
                src={`https://cal.com/${calLink}?embed=true&theme=auto&layout=month_view`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Schedule a consultation"
                className="rounded-lg"
              />
            )}
          </div>

          {/* Footer Info */}
          {isLoaded && !isLoading && (
            <div className="px-4 py-2 border-t border-border text-xs text-muted-foreground text-center bg-card/50">
              Powered by Cal.com
            </div>
          )}
        </div>
      </div>
    </CalErrorBoundary>
  )
}
