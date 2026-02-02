/**
 * Vercel Edge Config for Cal.com Optimization
 * 
 * This configures caching and CDN behavior for Cal.com embeds
 * 
 * Setup instructions:
 * 1. Create Edge Config at: https://vercel.com/dashboard/edge-config
 * 2. Add items:
 *    - "cal_cache_ttl": 3600 (1 hour)
 *    - "cal_enabled": true
 *    - "cal_regions": ["us-east-1", "eu-west-1"]
 * 3. Add edge-config env var to Vercel project
 */

import { get } from '@vercel/edge-config'

export async function getCalConfig() {
  try {
    const calEnabled = await get('cal_enabled')
    const calCacheTtl = await get('cal_cache_ttl') || 3600
    const calRegions = await get('cal_regions') || ['us-east-1']

    return {
      enabled: calEnabled ?? true,
      cacheTtl: calCacheTtl,
      regions: calRegions,
    }
  } catch (error) {
    console.error('[v0] Error reading Edge Config:', error)
    return {
      enabled: true,
      cacheTtl: 3600,
      regions: ['us-east-1'],
    }
  }
}

/**
 * Cache headers for Cal.com embed responses
 * Use this in API routes to improve performance
 */
export const calCacheHeaders = {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  'CDN-Cache-Control': 'max-age=3600',
  'Vercel-CDN-Cache-Control': 'max-age=3600, stale-while-revalidate=86400',
}

/**
 * Example API route for Cal.com proxy
 * This helps with CORS and improves caching
 */
export async function handleCalProxyRequest(
  calLink: string,
  theme: string = 'auto'
) {
  const config = await getCalConfig()

  if (!config.enabled) {
    return new Response('Cal.com is disabled', { status: 503 })
  }

  // Fetch from Cal.com
  const url = `https://cal.com/${calLink}?embed=true&theme=${theme}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'text/html,application/xhtml+xml',
        'User-Agent': 'NextJS/Vercel',
      },
    })

    if (!response.ok) {
      throw new Error(`Cal.com returned ${response.status}`)
    }

    // Return with optimized cache headers
    const responseWithCache = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...Object.fromEntries(response.headers),
        ...calCacheHeaders,
      },
    })

    return responseWithCache
  } catch (error) {
    console.error('[v0] Cal.com proxy error:', error)
    return new Response('Failed to load calendar', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}

/**
 * Middleware to optimize Cal.com requests
 * Add this to your middleware.ts
 */
export function calOptimizationMiddleware() {
  return {
    headers: [
      {
        // Optimize Cal.com static assets
        source: '/api/cal/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ],
  }
}
