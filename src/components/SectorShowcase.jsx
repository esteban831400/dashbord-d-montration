import { Link } from 'react-router-dom'
import { ArrowRight, HardHat, ConciergeBell, Package, ShieldCheck, Store, Users } from 'lucide-react'
import { SECTOR_CONTENT } from '../data/sectorContent.js'

const SECTOR_ICONS = {
  btp: HardHat,
  hotellerie: ConciergeBell,
  pharmacie: Package,
  assurance: ShieldCheck,
  commerce: Store,
  rh: Users
}

export default function SectorShowcase() {
  return (
    <section id="secteurs" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Explorez par secteur
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Chaque secteur a sa page dédiée : des cas d'usage détaillés, avec des démos concrètes
          construites autour d'exemples réels de votre métier.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(SECTOR_CONTENT).map(([id, sector]) => {
          const Icon = SECTOR_ICONS[id]
          return (
            <Link
              key={id}
              to={`/secteur/${id}`}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent-600 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-accent-500 dark:hover:shadow-black/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {sector.label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {sector.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-700 dark:text-accent-400">
                Voir les cas d'usage
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
