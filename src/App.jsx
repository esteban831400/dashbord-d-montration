import { useMemo, useState } from 'react'
import { DemoProvider, useDemo } from './context/DemoContext.jsx'
import { buildModules } from './data/modules.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SectorFilter from './components/SectorFilter.jsx'
import ModuleGrid from './components/ModuleGrid.jsx'
import DemoModal from './components/DemoModal.jsx'
import Footer from './components/Footer.jsx'

function Dashboard() {
  const { dataset } = useDemo()
  const [activeSector, setActiveSector] = useState('tous')
  const [openModuleId, setOpenModuleId] = useState(null)

  // Reconstruit tous les modules à chaque changement de jeu de données :
  // cards, tags et démos reflètent instantanément le nouveau contexte.
  const modules = useMemo(() => buildModules(dataset), [dataset])

  const filteredModules = useMemo(() => {
    if (activeSector === 'tous') return modules
    return modules.filter((m) => m.sectors.includes(activeSector))
  }, [modules, activeSector])

  const openModule = modules.find((m) => m.id === openModuleId) ?? null

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <main>
        <Hero />
        <SectorFilter active={activeSector} onChange={setActiveSector} />
        <ModuleGrid modules={filteredModules} onOpen={(m) => setOpenModuleId(m.id)} />
      </main>
      <Footer />
      <DemoModal module={openModule} onClose={() => setOpenModuleId(null)} />
    </div>
  )
}

export default function App() {
  return (
    <DemoProvider>
      <Dashboard />
    </DemoProvider>
  )
}
