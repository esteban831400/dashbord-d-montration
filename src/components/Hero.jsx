import { Suspense, lazy } from 'react'

const AIOrb = lazy(() => import('./AIOrb.jsx'))

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-6 pt-14 sm:pt-20 lg:flex-row lg:justify-between lg:gap-10">
      <div className="animate-fade-in max-w-2xl text-center lg:text-left">
        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          L'IA qui reprend les tâches répétitives, pour que votre équipe garde le temps utile.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Chaque module ci-dessous est un cas d'usage réel, adaptable à votre activité en quelques
          jours. Choisissez votre secteur pour voir des démos concrètes, construites autour
          d'exemples réels.
        </p>
      </div>

      <div className="shrink-0 opacity-90">
        <Suspense fallback={<div className="h-56 w-56 sm:h-64 sm:w-64" />}>
          <AIOrb className="h-56 w-56 sm:h-64 sm:w-64" />
        </Suspense>
      </div>
    </section>
  )
}
