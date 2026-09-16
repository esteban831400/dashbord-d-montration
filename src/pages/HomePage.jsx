import { useMemo, useState } from 'react'
import { useDemo } from '../context/DemoContext.jsx'
import { buildModules } from '../data/modules.js'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import InfrastructureCTA from '../components/InfrastructureCTA.jsx'
import SectorShowcase from '../components/SectorShowcase.jsx'
import SectorFilter from '../components/SectorFilter.jsx'
import ModuleGrid from '../components/ModuleGrid.jsx'
import DemoModal from '../components/DemoModal.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage() {
  const { dataset } = useDemo()
  const [openModuleId, setOpenModuleId] = useState(null)

  // Reconstruit tous les modules à chaque changement de jeu de données :
  // cards, tags et démos reflètent instantanément le nouveau contexte.
  const modules = useMemo(() => buildModules(dataset), [dataset])
  const openModule = modules.find((m) => m.id === openModuleId) ?? null

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <NavBar />
      <main>
        <Hero />
        <InfrastructureCTA />
        <SectorShowcase />

        <section id="modules" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 pt-6">
            <h2 className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Tous les cas d'usage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Un aperçu rapide de chaque automatisation. Pour une démo plus détaillée construite
              autour de votre métier, ouvrez la page de votre secteur ci-dessus.
            </p>
          </div>
          <div className="mt-6">
            <SectorFilter active="tous" />
          </div>
          <ModuleGrid modules={modules} onOpen={(m) => setOpenModuleId(m.id)} />
        </section>
      </main>
      <Footer />
      <DemoModal module={openModule} onClose={() => setOpenModuleId(null)} />
    </div>
  )
}
