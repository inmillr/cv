import React from 'react'

export default function Header({ personal }: { personal: any }) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold">{personal.name}</h1>
      <div className="text-sm text-gray-600">{personal.label} — {personal.location}</div>
      <div className="text-sm text-blue-600 mt-1">{personal.email}</div>
    </header>
  )
}
