'use client'

export default function FixedPDFButtons() {
  return (
    <div className="fixed top-4 right-4 sm:flex z-50 flex-col items-center">
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
