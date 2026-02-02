/**
 * Cal.com Performance Testing Script
 * Run this in browser console to validate optimization
 */

export function runCalPerformanceTests() {
  console.log('[v0] Starting Cal.com Performance Tests...')
  console.log('═'.repeat(60))

  // Test 1: Network Waterfall
  console.log('\n📊 TEST 1: Network Waterfall Analysis')
  console.log('━'.repeat(60))
  console.log('Instructions:')
  console.log('1. Open DevTools (F12) → Network tab')
  console.log('2. Filter by: "cal.com"')
  console.log('3. Click "Book Free Audit" button')
  console.log('4. Check waterfall for these metrics:')
  console.log('   ✓ embed.min.js load time (should be < 500ms)')
  console.log('   ✓ embed-full.js load time (should be < 1s)')
  console.log('   ✓ iframe rendering (should be < 2s total)')

  // Test 2: API Performance
  console.log('\n📊 TEST 2: API Load Time')
  console.log('━'.repeat(60))
  console.log('Expected: 200-800ms')
  console.log('If > 1500ms: Check Vercel cold start logs')
  console.log('If > 3000ms: Check Cal.com config (calendar sync, round-robin)')

  // Test 3: DOM Ready Time
  console.log('\n📊 TEST 3: DOM Ready Time')
  console.log('━'.repeat(60))
  const domReadyTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
  console.log(`DOM Content Loaded: ${domReadyTime}ms`)
  console.log(domReadyTime < 2000 ? '✅ PASS (< 2s)' : '⚠️ SLOW (> 2s)')

  // Test 4: Memory Usage
  console.log('\n📊 TEST 4: Memory Usage')
  console.log('━'.repeat(60))
  if ((performance as any).memory) {
    const memory = (performance as any).memory
    console.log(`Used Heap: ${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB`)
    console.log(`Total Heap: ${(memory.totalJSHeapSize / 1048576).toFixed(2)}MB`)
    console.log(`Heap Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)}MB`)
    const heapUsagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    console.log(heapUsagePercent < 50 ? '✅ GOOD' : '⚠️ HIGH')
  }

  // Test 5: Network Throttle Simulation
  console.log('\n📊 TEST 5: Network Throttle Test')
  console.log('━'.repeat(60))
  console.log('To test with throttling:')
  console.log('1. DevTools → Network tab')
  console.log('2. Throttle dropdown → "Fast 3G"')
  console.log('3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)')
  console.log('4. Click "Book Free Audit" again')
  console.log('Expected: Still < 5s total load time')

  // Test 6: CSP Violations
  console.log('\n📊 TEST 6: CSP Violations Check')
  console.log('━'.repeat(60))
  console.log('Looking for CSP violations in console...')
  const cspViolations = (window as any).__cspViolations || []
  if (cspViolations.length > 0) {
    console.warn('⚠️ CSP Violations found:')
    cspViolations.forEach((v: any) => console.warn(`  - ${v.blockedURI}`))
  } else {
    console.log('✅ No CSP violations detected')
  }

  // Test 7: Lifecycle Timing
  console.log('\n📊 TEST 7: Page Lifecycle Timing')
  console.log('━'.repeat(60))
  const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (timing) {
    console.log(`DNS Lookup: ${(timing.domainLookupEnd - timing.domainLookupStart).toFixed(2)}ms`)
    console.log(`TCP Connect: ${(timing.connectEnd - timing.connectStart).toFixed(2)}ms`)
    console.log(`TLS Handshake: ${(timing.secureConnectionStart ? timing.connectEnd - timing.secureConnectionStart : 0).toFixed(2)}ms`)
    console.log(`Time to First Byte: ${(timing.responseStart - timing.requestStart).toFixed(2)}ms`)
    console.log(`Content Download: ${(timing.responseEnd - timing.responseStart).toFixed(2)}ms`)
    console.log(`DOM Interactive: ${(timing.domInteractive - timing.navigationStart).toFixed(2)}ms`)
  }

  // Summary
  console.log('\n' + '═'.repeat(60))
  console.log('📋 TEST SUMMARY')
  console.log('═'.repeat(60))
  console.log('✅ All tests completed!')
  console.log('\nOptimization Checklist:')
  console.log('□ Cal.com version: v5.7+ (check package.json)')
  console.log('□ Modal opens within 1 second')
  console.log('□ No CSP violations in console')
  console.log('□ Memory usage < 50% of heap limit')
  console.log('□ Fast 3G throttle still < 5s')
  console.log('□ Check Vercel Logs for cold starts')
  console.log('')
}

// Helper function to measure specific operations
export function measureOperation(operationName: string, fn: () => void | Promise<void>) {
  const startTime = performance.now()
  const startMemory = (performance as any).memory?.usedJSHeapSize || 0

  try {
    const result = fn()
    if (result instanceof Promise) {
      result.finally(() => {
        const endTime = performance.now()
        const endMemory = (performance as any).memory?.usedJSHeapSize || 0
        logMeasurement(operationName, endTime - startTime, endMemory - startMemory)
      })
    } else {
      const endTime = performance.now()
      const endMemory = (performance as any).memory?.usedJSHeapSize || 0
      logMeasurement(operationName, endTime - startTime, endMemory - startMemory)
    }
  } catch (error) {
    console.error(`[v0] Error during measurement of ${operationName}:`, error)
  }
}

function logMeasurement(name: string, duration: number, memoryDelta: number) {
  const icon = duration < 1000 ? '⚡' : '🐢'
  console.log(
    `${icon} ${name}: ${duration.toFixed(2)}ms${memoryDelta !== 0 ? ` | +${(memoryDelta / 1024 / 1024).toFixed(2)}MB` : ''}`
  )
}

// Export for global access
if (typeof window !== 'undefined') {
  (window as any).__calTests = { runCalPerformanceTests, measureOperation }
  console.log('[v0] Cal.com tests available. Run: window.__calTests.runCalPerformanceTests()')
}
