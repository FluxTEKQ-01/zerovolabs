'use client'

import React, { useEffect, useRef, useState } from 'react'
import './loader.css'

const Loader: React.FC = () => {
  const [shouldShowLoader, setShouldShowLoader] = useState(true)
  
  // Refs for direct DOM manipulation
  const wavePathRef = useRef<SVGPathElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const percentNumRef = useRef<HTMLSpanElement>(null)
  const statusTextRef = useRef<HTMLSpanElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Ensure body starts without the 'loaded' class on mount to show loader
    document.body.classList.remove('loaded')
    
    if (!shouldShowLoader) return

    let currentProgress = 0
    let targetProgress = 0
    let time = 0
    let animationFrameId: number
    
    const systemMessages = [
      { threshold: 0, text: 'System Boot' },
      { threshold: 15, text: 'Kernel.sync(assets)' },
      { threshold: 40, text: 'Neural.init(core)' },
      { threshold: 65, text: 'UI.render(shell)' },
      { threshold: 85, text: 'Build.finalize()' }
    ]

    const updateStatus = (progress: number) => {
      const statusText = statusTextRef.current
      if (!statusText) return

      for (let i = systemMessages.length - 1; i >= 0; i--) {
        if (progress >= systemMessages[i].threshold) {
          statusText.textContent = systemMessages[i].text
          break
        }
      }
    }

    const animate = () => {
      if (targetProgress < 100) {
        // Slower speed increments for a more deliberate, premium feel
        let increment = Math.random() * 0.3 + 0.1 // Slower progress
        if (targetProgress > 70 && targetProgress < 85) increment *= 0.3 // More suspense near the end
        targetProgress += increment
      }

      // Smoother interpolation (0.1 -> 0.05) for liquid feel
      currentProgress += (targetProgress - currentProgress) * 0.04 // Smoother interpolation
      time += 0.05 // Slower wave animation speed

      if (currentProgress >= 99.5) {
        currentProgress = 100
        updateUI(100)
        updateStatus(100)
        // Delay before finish to see 100%
        setTimeout(finish, 500)
        return
      }

      updateUI(currentProgress)
      updateStatus(currentProgress)
      animationFrameId = requestAnimationFrame(animate)
    }

    const updateUI = (p: number) => {
      const wavePath = wavePathRef.current
      const progressBar = progressBarRef.current
      const percentNum = percentNumRef.current
      
      const width = 900
      const height = 200

      const yThreshold = height - (p / 100) * height
      let d = `M 0 ${height} L 0 ${yThreshold} `

      const waveFrequency = 0.015
      const waveAmplitude = 12 // Increased amplitude for more visible flow
      for (let x = 0; x <= width; x += 10) {
        const calmFactor = Math.sin((p / 100) * Math.PI)
        const waveY = Math.sin((x * waveFrequency) + time) * (waveAmplitude * calmFactor)
        d += `L ${x} ${yThreshold + waveY} `
      }
      d += `L ${width} ${yThreshold} L ${width} ${height} Z`
      
      if (wavePath) wavePath.setAttribute('d', d)
      if (progressBar) progressBar.style.width = p + '%'
      if (percentNum) percentNum.innerText = Math.floor(p).toString()
    }

    const finish = () => {
      document.body.classList.add('loaded')
      setTimeout(() => {
        setShouldShowLoader(false)
      }, 1000) // Keep component mounted long enough for CSS transition to complete
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [shouldShowLoader])

  if (!shouldShowLoader) {
    return null
  }

  return (
    <div ref={wrapperRef} id="loader-wrapper">
      <div className="brand-container">
        <svg viewBox="0 0 900 200">
          <defs>
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2899c6" stopOpacity="1" />
              <stop offset="100%" stopColor="#77abab" stopOpacity="1" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <mask id="waveMask">
              <path ref={wavePathRef} id="wave-path" d="" fill="white" />
            </mask>
          </defs>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-base">ZerovoLabs</text>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-liquid" fill="url(#liquidGradient)" mask="url(#waveMask)">ZerovoLabs</text>
        </svg>
        <div className="loader-meta">
          <div className="status-box">
            <span ref={statusTextRef} id="status-text">Initializing</span>
          </div>
          <div className="progress-container">
            <div className="mini-track">
              <div ref={progressBarRef} className="mini-bar" id="progress-bar"></div>
            </div>
            <div className="percent-box">
              <span ref={percentNumRef} id="percent-num">0</span>%
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-pill"></div>
    </div>
  )
}

export default Loader
