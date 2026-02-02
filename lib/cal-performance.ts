/**
 * Cal.com Performance Monitoring
 * Tracks embed load times, errors, and caching metrics
 */

interface PerformanceMetrics {
  calLoadStart: number
  calLoadEnd: number
  iframeStart: number
  iframeEnd: number
  modalOpenTime: number
  totalDuration: number
  error?: string
}

const metrics: Map<string, PerformanceMetrics> = new Map()

export function startCalLoadTimer(id: string = 'default') {
  console.log('[v0] Starting Cal.com load timer:', id)
  if (!metrics.has(id)) {
    metrics.set(id, { calLoadStart: 0, calLoadEnd: 0, iframeStart: 0, iframeEnd: 0, modalOpenTime: 0, totalDuration: 0 })
  }
  const metric = metrics.get(id)!
  metric.calLoadStart = performance.now()
}

export function endCalLoadTimer(id: string = 'default') {
  const metric = metrics.get(id)
  if (!metric) return

  metric.calLoadEnd = performance.now()
  metric.totalDuration = metric.calLoadEnd - metric.calLoadStart
  console.log(`[v0] Cal.com API loaded in ${metric.totalDuration.toFixed(2)}ms`)

  // Report to analytics
  reportPerformanceMetric(id, metric)
}

export function startIframeTimer(id: string = 'default') {
  console.log('[v0] Starting iframe render timer:', id)
  const metric = metrics.get(id)
  if (!metric) return

  metric.iframeStart = performance.now()
}

export function endIframeTimer(id: string = 'default') {
  const metric = metrics.get(id)
  if (!metric) return

  metric.iframeEnd = performance.now()
  const iframeLoadTime = metric.iframeEnd - metric.iframeStart
  console.log(`[v0] Iframe rendered in ${iframeLoadTime.toFixed(2)}ms`)

  reportPerformanceMetric(id, metric)
}

export function recordCalError(error: Error, id: string = 'default') {
  const metric = metrics.get(id)
  if (!metric) return

  metric.error = error.message
  console.error('[v0] Cal.com error:', error)

  // Report to Sentry or error tracking service
  if (typeof window !== 'undefined' && window.__SENTRY__) {
    window.__SENTRY__.captureException(error, {
      tags: { component: 'cal-embed', id },
    })
  }
}

function reportPerformanceMetric(id: string, metric: PerformanceMetrics) {
  // Send to your analytics service
  const payload = {
    id,
    timestamp: new Date().toISOString(),
    calLoadTime: metric.calLoadEnd - metric.calLoadStart,
    iframeLoadTime: metric.iframeEnd - metric.iframeStart,
    totalDuration: metric.totalDuration,
    error: metric.error,
  }

  console.log('[v0] Performance metric:', payload)

  // Example: Send to Vercel Analytics
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'cal_embed_loaded', {
      value: metric.totalDuration,
      event_category: 'performance',
      event_label: id,
    })
  }
}

export function getMetrics(id: string = 'default'): PerformanceMetrics | undefined {
  return metrics.get(id)
}

export function clearMetrics(id?: string) {
  if (id) {
    metrics.delete(id)
  } else {
    metrics.clear()
  }
}

// Browser Performance Observer for Core Web Vitals
export function monitorCoreWebVitals() {
  if (typeof window === 'undefined') return

  try {
    // LCP - Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('[v0] LCP:', (lastEntry as PerformanceEntry & { renderTime?: number }).renderTime || (lastEntry as PerformanceEntry).startTime)
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'first-input') {
            const delay = (entry as PerformanceEntry & { processingDuration?: number }).processingDuration || 0
            console.log('[v0] FID:', delay)
          }
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
    }
  } catch (error) {
    console.error('[v0] Failed to monitor Core Web Vitals:', error)
  }
}

// Declare global to support Sentry injection
declare global {
  interface Window {
    __SENTRY__?: any
    gtag?: any
  }
}
