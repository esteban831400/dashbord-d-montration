import { Suspense, lazy } from 'react'
import {
  LayoutDashboard,
  HardHat,
  Receipt,
  Package,
  Settings,
  MessageSquare,
  AlertTriangle,
  CalendarCheck,
  BarChart3,
  Send
} from 'lucide-react'
import { useDemo } from '../context/DemoContext.jsx'
import { companySlug } from '../utils/slug.js'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import DeviceFrame from '../components/DeviceFrame.jsx'
import ReportChart from '../components/ReportChart.jsx'

const AIOrb = lazy(() => import('../components/AIOrb.jsx'))

const SIDE_NAV = [
  { icon: LayoutDashboard, label: 'Tableau de bord', active: true },
  { icon: HardHat, label: 'Activité' },
  { icon: Receipt, label: 'Facturation' },
  { icon: Package, label: 'Stock' },
  { icon: Settings, label: 'Paramètres' }
]

// Maquette d'une application métier combinant plusieurs automatisations.
// Toujours alimentée par le jeu de données actif : changer de contexte dans
// le menu adapte l'exemple à un autre secteur.
export default function InfrastructurePage() {
  const { dataset: d } = useDemo()
  const slug = companySlug(d.company)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <NavBar />
      <main>
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-8 pt-14 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-700 dark:text-accent-400">
              Infrastructure IA
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Ce n'est pas une maquette isolée : c'est une vraie application.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Chaque module présenté ailleurs sur ce site peut être combiné dans une seule
              application sur-mesure. Voici un exemple construit pour {d.company}, une PME{' '}
              {d.sectorLabel.toLowerCase() === 'btp' ? 'du BTP' : `du secteur ${d.sectorLabel.toLowerCase()}`}.
              Changez de contexte dans le menu pour voir cette application s'adapter à un autre
              métier.
            </p>
          </div>
          <div className="shrink-0 opacity-90">
            <Suspense fallback={<div className="h-48 w-48" />}>
              <AIOrb className="h-48 w-48" />
            </Suspense>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <DeviceFrame url={`app.${slug}.fr/tableau-de-bord`}>
            <div className="flex flex-col gap-6 sm:flex-row">
              <nav className="flex shrink-0 gap-2 sm:w-44 sm:flex-col">
                {SIDE_NAV.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium ${
                      active
                        ? 'bg-accent-600 text-white'
                        : 'text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                ))}
              </nav>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      {d.company}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      Bonjour {d.owner.split(' ')[0]}, voici votre activité aujourd'hui.
                    </p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {d.owner
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Widget icon={AlertTriangle} label="Alerte détectée automatiquement" tone="warning">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">{d.chantier.name}</p>
                    <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                      Retard de {d.chantier.delayDays} jours repéré sur les photos terrain — alerte
                      envoyée à {d.owner}.
                    </p>
                  </Widget>

                  <Widget icon={MessageSquare} label="Support client">
                    <p className="text-zinc-500 dark:text-zinc-400">« {d.supportQuestion} »</p>
                    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent-700 dark:text-accent-400">
                      <Send className="h-3 w-3" /> Réponse envoyée automatiquement
                    </p>
                  </Widget>

                  <Widget icon={Receipt} label="Facturation">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">
                      {d.invoice.number} — {d.invoice.amount}
                    </p>
                    <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                      Échéance {d.invoice.dueDate}. Relance automatique programmée.
                    </p>
                  </Widget>

                  <Widget icon={Package} label="Stock">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">{d.stock.product}</p>
                    <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                      {d.stock.daysLeft} jours de stock restants — commande envoyée à{' '}
                      {d.stock.supplier}.
                    </p>
                  </Widget>

                  <Widget icon={CalendarCheck} label="Prochain rendez-vous">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">{d.rdv.motif}</p>
                    <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                      {d.rdv.date} à {d.rdv.time}, rappel automatique programmé.
                    </p>
                  </Widget>

                  <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                      <BarChart3 className="h-3.5 w-3.5" /> Activité de la semaine
                    </p>
                    <ReportChart
                      label={`${d.company}`}
                      values={[42, 55, 48, 63, 58, 71, 66]}
                      playToken={d.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DeviceFrame>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
            Cette application est un exemple : chaque module s'active ou se retire selon vos
            besoins, et l'interface est personnalisée à votre image.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Widget({ icon: Icon, label, tone, children }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        tone === 'warning'
          ? 'border-amber-300 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/10'
          : 'border-zinc-200 dark:border-zinc-800'
      }`}
    >
      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
        <Icon className="h-3.5 w-3.5" /> {label}
      </p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}
