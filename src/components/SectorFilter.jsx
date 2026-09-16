import { SECTORS } from '../data/sectors.js'

export default function SectorFilter({ active, onChange }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap gap-2">
        {SECTORS.map((sector) => {
          const isActive = sector.id === active
          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => onChange(sector.id)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                isActive
                  ? 'border-accent-600 bg-accent-600 text-white'
                  : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100'
              }`}
            >
              {sector.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
