'use client'

import { useTheme } from '@/context/theme-context'

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme()
  const enabled = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center gap-2 justify-center rounded-md w-full px-4 py-2 font-semibold transition duration-200 ${enabled ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
        }`}
      aria-pressed={enabled}
    >
      <img src="/icon-light-theme.svg" alt="Light Theme" className="mr-3" />
      <span className={`relative inline-flex p-0.5 h-6 w-11 items-center cursor-pointer rounded-full transition-colors duration-200 bg-primary-500`}>
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
      </span>
      <img src="/icon-dark-theme.svg" alt="Dark Theme" className="ml-3" />
    </button>
  )
}

export default ToggleButton