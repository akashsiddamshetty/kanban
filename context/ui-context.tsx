'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { UIContextValue } from './types'

const UIContext = createContext<UIContextValue | undefined>(undefined)

export function UIProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen((current) => !current)

  const value = useMemo(
    () => ({ isSidebarOpen, setSidebarOpen, toggleSidebar }),
    [isSidebarOpen]
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }
  return context
}
