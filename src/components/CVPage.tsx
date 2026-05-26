'use client'

import Section from './Section'
import cv from '../data/cv.json'

export default function CVPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90 dark:shadow-none">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cv.personal.name}</h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{cv.personal.title}</p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-600 dark:border-slate-800/80 dark:text-slate-300 sm:grid-cols-2">
            <div>{cv.personal.location}</div>
            <div>
              <a
                href={`mailto:${cv.personal.email}`}
                className="hover:cursor-pointer text-slate-700 dark:text-slate-300 hover:underline"
              >
                {cv.personal.email}
              </a>
            </div>
            <div>
              <a
                href={cv.personal.linkedin?.startsWith('http') ? cv.personal.linkedin : `https://${cv.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer text-slate-700 dark:text-slate-300 hover:underline"
              >
                {cv.personal.linkedin}
              </a>
            </div>
            <div>
              <a
                href={cv.personal.website?.startsWith('http') ? cv.personal.website : `https://${cv.personal.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer text-slate-700 dark:text-slate-300 hover:underline"
              >
                {cv.personal.website}
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <Section title="Summary">
              <p>{cv.summary}</p>
            </Section>

            <Section title="Experience">
              {cv.experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="space-y-2 rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800/80 dark:bg-slate-900/90">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.role}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-200/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-700/80 dark:text-slate-200">{item.period}</span>
                  </div>
                  {item.description.split('•').filter(Boolean).map((line, index) => (
    <p key={index}>• {line.trim()}</p>
  ))}
                </div>
              ))}
            </Section>

            {/* <Section title="Education">
              {cv.education.map((item) => (
                <div key={`${item.institution}-${item.degree}`}>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-100">{item.degree}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.period}</p>
                </div>
              ))}
            </Section> */}

            <Section title="Projects">
              <div className="space-y-4">
                {cv.projects.map((project) => (
                  <div key={project.name}>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{project.name}</p>
                    <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90">
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {cv.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Certifications">
              <ul className="list-disc space-y-2 pl-5">
                {cv.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </Section>
          </aside>
        </div>
      </div>
    </main>
  )
}
