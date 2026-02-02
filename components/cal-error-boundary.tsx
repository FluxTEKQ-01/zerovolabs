'use client'

import React, { ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

export class CalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[v0] Cal.com Error Boundary caught:', error)
    console.error('[v0] Error Info:', errorInfo)

    this.setState({
      error,
      errorInfo,
    })

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Report to error tracking service
    if (typeof window !== 'undefined' && window.__SENTRY__) {
      window.__SENTRY__.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
        },
        tags: { component: 'cal-error-boundary' },
      })
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback
      return (
        <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-red-500/5 border border-red-500/20">
          <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Unable to Load Calendar</h3>
          <p className="text-sm text-muted-foreground mb-4 text-center max-w-sm">
            We encountered an issue loading the scheduling calendar. Please try again or contact support if the problem persists.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="w-full text-xs text-muted-foreground mb-4 bg-black/10 p-3 rounded">
              <summary className="cursor-pointer font-mono mb-2">Error Details</summary>
              <pre className="overflow-auto text-red-400">{this.state.error.toString()}</pre>
              {this.state.errorInfo && (
                <pre className="overflow-auto text-red-400 mt-2">{this.state.errorInfo.componentStack}</pre>
              )}
            </details>
          )}
          <button
            onClick={this.handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

declare global {
  interface Window {
    __SENTRY__?: any
  }
}
