/**
 * Cal.com Performance Metrics API Route
 * Track and log Cal.com embed performance
 */

import { NextRequest, NextResponse } from 'next/server'

interface CalMetricsPayload {
  id: string
  timestamp: string
  calLoadTime: number
  iframeLoadTime: number
  totalDuration: number
  error?: string
  userAgent?: string
  viewport?: {
    width: number
    height: number
  }
}

// In-memory metrics store (use Redis in production)
const metricsStore: CalMetricsPayload[] = []
const maxMetricsStored = 1000

export async function POST(request: NextRequest) {
  try {
    const payload: CalMetricsPayload = await request.json()

    // Validate payload
    if (!payload.id || !payload.calLoadTime) {
      return NextResponse.json(
        { error: 'Invalid payload: id and calLoadTime are required' },
        { status: 400 }
      )
    }

    // Add metadata
    const enrichedMetrics: CalMetricsPayload = {
      ...payload,
      userAgent: request.headers.get('user-agent') || undefined,
      timestamp: new Date().toISOString(),
    }

    // Store metrics
    metricsStore.push(enrichedMetrics)

    // Keep only recent metrics
    if (metricsStore.length > maxMetricsStored) {
      metricsStore.shift()
    }

    // Log summary
    const avgLoadTime = metricsStore.reduce((sum, m) => sum + m.calLoadTime, 0) / metricsStore.length
    const errorCount = metricsStore.filter(m => m.error).length

    console.log('[v0] Cal.com Metrics Summary:')
    console.log(`  Total samples: ${metricsStore.length}`)
    console.log(`  Average load time: ${avgLoadTime.toFixed(2)}ms`)
    console.log(`  Errors: ${errorCount}`)
    console.log(`  Latest: ${enrichedMetrics.calLoadTime.toFixed(2)}ms`)

    // Alert if slow
    if (enrichedMetrics.calLoadTime > 3000) {
      console.warn('[v0] ⚠️ SLOW Cal.com load detected:', {
        duration: enrichedMetrics.calLoadTime,
        id: payload.id,
      })
    }

    return NextResponse.json(
      {
        success: true,
        metrics: enrichedMetrics,
        summary: {
          avgLoadTime: avgLoadTime.toFixed(2),
          totalSamples: metricsStore.length,
        },
      },
      {
        status: 201,
        headers: {
          'Cache-Control': 'no-cache',
          'X-Metrics-Received': new Date().toISOString(),
        },
      }
    )
  } catch (error) {
    console.error('[v0] Error processing Cal.com metrics:', error)
    return NextResponse.json(
      { error: 'Failed to process metrics' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve metrics summary
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '100', 10)
  const errorOnly = searchParams.get('errorOnly') === 'true'

  let filtered = metricsStore

  if (errorOnly) {
    filtered = filtered.filter(m => m.error)
  }

  const summary = {
    total: metricsStore.length,
    errors: metricsStore.filter(m => m.error).length,
    avgLoadTime: metricsStore.length > 0 
      ? metricsStore.reduce((sum, m) => sum + m.calLoadTime, 0) / metricsStore.length 
      : 0,
    minLoadTime: metricsStore.length > 0 
      ? Math.min(...metricsStore.map(m => m.calLoadTime)) 
      : 0,
    maxLoadTime: metricsStore.length > 0 
      ? Math.max(...metricsStore.map(m => m.calLoadTime)) 
      : 0,
    p95LoadTime: calculatePercentile(metricsStore.map(m => m.calLoadTime), 0.95),
  }

  return NextResponse.json({
    summary,
    metrics: filtered.slice(-limit),
    timestamp: new Date().toISOString(),
  })
}

function calculatePercentile(values: number[], percentile: number): number {
  if (values.length === 0) return 0
  const sorted = values.sort((a, b) => a - b)
  const index = Math.ceil(sorted.length * percentile) - 1
  return sorted[Math.max(0, index)]
}
