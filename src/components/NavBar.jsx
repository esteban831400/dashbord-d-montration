import { Fragment, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SECTOR_CONTENT } from '../data/sectorContent.js'
import DatasetSwitcher from './DatasetSwitcher.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const SECTOR_LINKS = Object.entries(SECTOR_CONTENT).map(([id, s]) => ({ id, label: s.label }))

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sectorMenuOpen, setSectorMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goHomeSection(hash) {
    setDrawerOpen(false)
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${hash}`)
    }
  }

  return (
    <Fragment>
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="shrink-0">
          <p className="font-display text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-lg">
            Esteban Alarcon <span className="text-zinc-400 dark:text-zinc-600">—</span> Automatisation IA
          </p>
          <p className="mt-0.5 hidden text-xs text-zinc-500 dark:text-zinc-400 sm:block">
            Solutions IA &amp; automatisation pour PME
          </p>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Accueil
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSectorMenuOpen(true)}
            onMouseLeave={() => setSectorMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => goHomeSection('secteurs')}
              className="flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Secteurs
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {sectorMenuOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                {SECTOR_LINKS.map((s) => (
                  <Link
                    key={s.id}
                    to={`/secteur/${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/infrastructure-ia"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Infrastructure IA
          </Link>

          <button
            type="button"
            onClick={() => goHomeSection('contact')}
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <DatasetSwitcher />
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-zinc-950/60" onClick={() => setDrawerOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 bg-white p-6 dark:bg-zinc-900">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-50">Menu</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <Link
              to="/"
              onClick={() => setDrawerOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Accueil
            </Link>

            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
              Secteurs
            </p>
            {SECTOR_LINKS.map((s) => (
              <Link
                key={s.id}
                to={`/secteur/${s.id}`}
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {s.label}
              </Link>
            ))}

            <Link
              to="/infrastructure-ia"
              onClick={() => setDrawerOpen(false)}
              className="mt-2 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Infrastructure IA
            </Link>
            <button
              type="button"
              onClick={() => goHomeSection('contact')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Contact
            </button>

            <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              <DatasetSwitcher />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}
