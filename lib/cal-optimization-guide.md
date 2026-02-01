# Cal.com Performance Optimization Guide

## Diagnosis Checklist

Run these diagnostics before deploying fixes:

### 1. Frontend Performance Analysis
```bash
# Check Cal.com embed load time
- Open DevTools → Network tab
- Filter by "cal.com" requests
- Check waterfall timeline
- Look for: embed.min.js, embed-full.js load times
```

### 2. Vercel Cold Start Check
```bash
# Monitor API route performance
- Check Vercel Logs: https://vercel.com/dashboard
- Filter functions by duration > 5000ms
- Note: First request after deploy may take 7-30s (normal)
- Subsequent requests should be <500ms
```

### 3. Cal.com Configuration Issues
- [ ] Check cal.com admin: number of connected calendars (should be 1-2)
- [ ] Verify event type settings: default calendar selected
- [ ] Check for round-robin events (slower than standard events)
- [ ] Verify connected Google Calendar sync status
- [ ] Check Cal.com version: should be v5.7+ or v4.8+

### 4. Network Issues
- [ ] Test with throttled network (DevTools → Throttle → Fast 3G)
- [ ] Check for CSP (Content Security Policy) blocks in console
- [ ] Verify iframe is not blocked by browser extensions
- [ ] Test from different geographic regions

## Expected Performance Gains

| Issue | Before | After | Improvement |
|-------|--------|-------|-------------|
| Cold embed load | 3-5s | 800-1200ms | 70% faster |
| Modal open latency | 2-3s | 200-400ms | 85% faster |
| Iframe rendering | Eager | Lazy | On-demand only |
| JS bundle overhead | Full load | Preloaded on demand | 300-500ms saved |
| Multiple opens | 3-5s each | 200ms cached | Instant response |

## Implementation Steps

1. Update Cal.com embed to v1.6.1+
2. Implement lazy loading with Intersection Observer
3. Add error boundary and fallback UI
4. Enable request caching (Google Calendar webhooks)
5. Configure Vercel Edge Config for instant cache invalidation
6. Add performance monitoring with Sentry
7. Test with synthetic monitoring (Vercel Analytics)

## Deployment Strategy

1. Test locally with throttled network
2. Deploy to Vercel preview branch
3. Monitor with DevTools and Vercel Analytics
4. Roll out to production
5. Track metrics in Sentry dashboard
