import React from 'react'

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="text-sm text-gray-800">{children}</div>
    </section>
  )
}
