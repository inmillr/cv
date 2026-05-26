'use client'

import { useEffect, useState } from 'react'

export default function FixedPDFButtons() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const handleScroll = () => {
      setIsVisible(false)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        setIsVisible(true)
      }, 250)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div
      className={`fixed top-4 right-4 sm:flex z-50 flex-col items-center transition-all ease-in-out duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <a
        href="/Ian_Miller_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-slate-300/60 bg-transparent px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-900"
      >
        View PDF
      </a>
      <a
        href="/Ian_Miller_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Ian_Miller_Resume.pdf"
        className="rounded-full border border-slate-300/70 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:bg-slate-900"
      >
        Download PDF
      </a>
    </div>
  )
}
