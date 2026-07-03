
'use client'

import { useTheme } from "@/context/theme-context"
import { cn } from "@/utils/utils"

const TaskBoard = () => {
    const { theme } = useTheme()
    return (
        <div className={cn(
            " flex-1 flex items-center bg-dark-900 justify-center overflow-auto",
            theme === 'dark' ? 'bg-dark-900 text-white' : 'bg-gray-50 text-black'
        )}>

            TaskBoard
        </div>
    )
}

export default TaskBoard