'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from './theme-context'
import { UIProvider } from './ui-context'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  )
}
