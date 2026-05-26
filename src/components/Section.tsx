import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
        {title}
      </h2>
      <div className="space-y-4 text-slate-700 dark:text-slate-300">{children}</div>
    </section>
  )
}
