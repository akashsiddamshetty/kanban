'use client'
import { useUI } from '@/context/ui-context'
import { cn } from '@/utils/utils'

export const ShowSideBarButton = () => {
      const { isSidebarOpen, toggleSidebar } = useUI()

      return (
            <button onClick={() => toggleSidebar()}
                  className={cn(
                        "fixed bottom-8 left-0 flex h-11 w-14 items-center justify-center rounded-r-full bg-primary-500 text-gray-50 transition-colors hover:cursor-pointer hover:bg-primary-400",
                        isSidebarOpen ? "hidden" : "md:flex"
                  )}>
                  <img src="/icon-show-sidebar.svg" alt="Toggle Sidebar" />
            </button>
      )
}
