import { Link } from 'react-router-dom'
import { SECTORS } from '../data/sectors.js'

// "Tous" reste sur la page courante ; les secteurs spécifiques mènent à leur
// page dédiée (plus de détails, démos concrètes construites pour ce métier).
export default function SectorFilter({ active = 'tous' }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap gap-2">
        {SECTORS.map((sector) => {
          const isActive = sector.id === active
          const className = `rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
            isActive
              ? 'border-accent-600 bg-accent-600 text-white'
              : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100'
          }`

          if (sector.id === 'tous') {
            return (
              <Link key={sector.id} to="/" className={className}>
                {sector.label}
              </Link>
            )
          }

          return (
            <Link key={sector.id} to={`/secteur/${sector.id}`} className={className}>
              {sector.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
