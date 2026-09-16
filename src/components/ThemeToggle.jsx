import { Moon, Sun } from 'lucide-react'
import { useDemo } from '../context/DemoContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDemo()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Basculer le thème clair / sombre"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
