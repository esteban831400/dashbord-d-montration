import { Link } from 'react-router-dom'
import { ArrowRight, Network } from 'lucide-react'
import { useDemo } from '../context/DemoContext.jsx'

export default function InfrastructureCTA() {
  const { dataset } = useDemo()

  return (
    <section className="mx-auto max-w-6xl px-6 pb-4">
      <Link
        to="/infrastructure-ia"
        className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-accent-300 bg-accent-50/60 p-7 transition hover:border-accent-600 dark:border-accent-800/60 dark:bg-accent-900/10 dark:hover:border-accent-500 sm:flex-row sm:items-center"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white">
            <Network className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-700 dark:text-accent-400">
              Infrastructure IA
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Voir à quoi ressemble une vraie application, tous modules réunis
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Un exemple construit pour {dataset.company} : chantiers, support, facturation, stock
              et reporting combinés dans une seule application sur-mesure.
            </p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white transition group-hover:bg-accent-700">
          Voir l'exemple
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </section>
  )
}
