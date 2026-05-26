import React from 'react'
import cv from './data/cv.json'
import Header from './components/Header'
import Section from './components/Section'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <Header personal={cv.personal} />
        <Section title="Summary">
          <p>{cv.summary}</p>
        </Section>

        <Section title="Experience">
          {cv.experience.map((e) => (
            <div key={e.company} className="mb-4">
              <div className="font-semibold">{e.title} — {e.company}</div>
              <div className="text-sm text-gray-600">{e.period}</div>
              <p className="mt-2">{e.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Education">
          {cv.education.map((ed) => (
            <div key={ed.institution} className="mb-4">
              <div className="font-semibold">{ed.degree} — {ed.institution}</div>
              <div className="text-sm text-gray-600">{ed.period}</div>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {cv.skills.map((s) => (
              <span key={s} className="text-sm px-2 py-1 bg-gray-100 rounded">{s}</span>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
