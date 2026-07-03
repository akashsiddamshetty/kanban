'use client'
import { useTheme } from '@/context/theme-context'
import ToggleButton from './ToggleButton'
import { useUI } from '@/context/ui-context'
import { cn } from '@/utils/utils'

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useUI()
  const { theme } = useTheme()

  return (
    <aside className={cn("sm:hidden h-full w-3xs",
      isSidebarOpen ? 'md:flex flex-col' : 'sm:hidden',
      theme === 'dark' ? 'bg-dark-800' : 'bg-white'
    )}>
      <div className='p-8 '>
        <a href='/'>
          {theme === 'dark' ? <img src="/logo-light.svg" alt='logo-light' /> : <img src="/logo-dark.svg" alt='logo-dark' />}
        </a>
      </div>
      <div className='flex-1 overflow-y-auto px-8 py-4'>
        <h2 className="mb-6 text-xs uppercase tracking-widest text-gray-500">
      All Boards (8)
    </h2>

      </div>
      <div className=' flex items-center w-full justify-between gap-4 flex-col  p-8'>
        <ToggleButton />
        <button onClick={() => {
          toggleSidebar()
        }} className='text-sm flex hover:cursor items-start gap-2 w-full text-gray-500 '>
          <img src="/icon-hide-sidebar.svg" alt="Hide Sidebar" />
          <span className="hover:cursor-pointer">Hide Sidebar</span>
        </button>
      </div>
    </aside>
  )
}

export default SideBar