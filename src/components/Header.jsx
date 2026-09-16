import DatasetSwitcher from './DatasetSwitcher.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Esteban Alarcon <span className="text-zinc-400 dark:text-zinc-600">—</span> Automatisation IA
          </p>
          <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
            Solutions IA &amp; automatisation pour PME
          </p>
        </div>
        <div className="flex items-center gap-3">
          <DatasetSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
