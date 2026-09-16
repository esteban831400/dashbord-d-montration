import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useDemo } from '../context/DemoContext.jsx'
import { buildModules } from '../data/modules.js'
import { SECTOR_CONTENT } from '../data/sectorContent.js'
import { companySlug } from '../utils/slug.js'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import DeviceFrame from '../components/DeviceFrame.jsx'
import WorkflowDemo from '../components/WorkflowDemo.jsx'
import ChatDemo from '../components/ChatDemo.jsx'

export default function SectorPage() {
  const { sectorId } = useParams()
  const { dataset } = useDemo()
  const sector = SECTOR_CONTENT[sectorId]
  const slug = companySlug(dataset.company)

  const modules = useMemo(() => buildModules(dataset), [dataset])
  const sectorModules = useMemo(
    () => modules.filter((m) => m.sectors.includes(sectorId)),
    [modules, sectorId]
  )

  if (!sector) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
        <NavBar />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">Secteur introuvable.</p>
          <Link to="/" className="mt-4 inline-block text-accent-700 underline dark:text-accent-400">
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <NavBar />
      <main>
        <section className="mx-auto max-w-6xl px-6 pb-8 pt-14">
          <Link
            to="/#secteurs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Tous les secteurs
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent-700 dark:text-accent-400">
            {sector.label}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {sector.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {sector.description}
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            Démos construites avec le contexte « {dataset.company} » — changez de contexte dans le
            menu pour voir un autre exemple.
          </p>
        </section>

        <section className="mx-auto max-w-6xl space-y-14 px-6 pb-20">
          {sectorModules.map((module) => (
            <SectorModuleDetail key={module.id} module={module} slug={slug} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

function SectorModuleDetail({ module, slug }) {
  const Icon = module.icon

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              module.badge
                ? 'bg-accent-50 text-accent-700 dark:bg-accent-900/40 dark:text-accent-400'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          {module.badge && (
            <span className="rounded-full bg-accent-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              Cas client
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {module.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {module.benefit}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {module.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3">
        <DeviceFrame url={`${module.demoType === 'chat' ? 'messages' : 'app'}.${slug}.fr`}>
          {module.demoType === 'chat' && (
            <ChatDemo messages={module.demo.messages} channelLabel={module.demo.channelLabel} />
          )}
          {module.demoType === 'workflow' && <WorkflowDemo steps={module.demo.steps} />}
          {module.demoType === 'chart' && (
            <WorkflowDemo
              steps={module.demo.steps}
              chart={{ label: module.demo.chartLabel, values: module.demo.chartValues }}
            />
          )}
        </DeviceFrame>
      </div>
    </div>
  )
}
