'use client'

import { useTheme } from "@/context/theme-context"
import { Button } from "./ui/Button"
import { cn } from "@/utils/utils"

const TopBar = () => {
  const { theme } = useTheme()
  return (
    <header className={cn(
      'relative  h-16 md:h-20 lg:h-24 px-6  w-full flex items-center',
      theme === 'dark' ? 'bg-dark-800 text-white' : 'bg-white text-black'
    )}>
      <div className='flex md:hidden items-center justify-between gap-2'>
        <img src="/logo-mobile.svg" alt='logo-mobile' />
        <h1>platform launch</h1>
        <img src="/icon-chevron-down.svg" alt="icon-chevron-down" />
      </div>

      <div className='flex items-center justify-between w-full'>
        <h1 className="font-bold text-heading-xl capitalize">platform launch</h1>
        <div className='flex items-center gap-2'>

          <Button variant="primary" className="text-white" leftIcon={<img src="/icon-add-task-mobile.svg" alt="icon-add-task" />}>
            Add New Task
          </Button>
          <Button variant="ghost" loading={false}>
            <img src="/icon-vertical-ellipsis.svg" alt="icon-vertical-ellipsis" />  
          </Button>
        </div>
      </div>
    </header>
  )
}

export default TopBar