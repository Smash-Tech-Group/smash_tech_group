'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>
    Tawk_LoadStart?: Date
  }
}

export default function TawkTo() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Prevent duplicate initialization
    if (document.getElementById('tawk-script')) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.id = 'tawk-script'
    script.async = true
    script.src = 'https://embed.tawk.to/62f106c754f06e12d88d8525/1g9uo5038'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript?.parentNode?.insertBefore(script, firstScript)

    return () => {
      const el = document.getElementById('tawk-script')
      if (el) el.remove()
    }
  }, [])

  return null
}
