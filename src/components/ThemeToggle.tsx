'use client'

import { useTheme } from '@/src/context/ThemeContext'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full hover:cursor-pointer border border-slate-300/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:bg-slate-900"
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    )
}
