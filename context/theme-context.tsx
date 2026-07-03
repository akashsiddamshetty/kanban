'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { Theme, ThemeContextValue } from './types'

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = window.localStorage.getItem('kanban-theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = storedTheme ? storedTheme : prefersDark ? 'dark' : 'light'

    setThemeState(initialTheme)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('kanban-theme', theme)
  }, [theme])

  const toggleTheme = () => setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))

  const value = useMemo(
    () => ({ theme, setTheme: setThemeState, toggleTheme }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
