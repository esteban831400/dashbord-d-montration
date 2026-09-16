import { ChevronDown } from 'lucide-react'
import { DATASETS } from '../data/datasets.js'
import { useDemo } from '../context/DemoContext.jsx'

// Sélecteur discret permettant de changer de contexte de démo en direct,
// sans toucher au code, selon le secteur de la personne en face de soi.
export default function DatasetSwitcher() {
  const { datasetId, setDatasetId } = useDemo()

  return (
    <div className="relative">
      <label htmlFor="dataset-switcher" className="sr-only">
        Contexte de démo
      </label>
      <select
        id="dataset-switcher"
        value={datasetId}
        onChange={(e) => setDatasetId(e.target.value)}
        className="peer appearance-none rounded-full border border-zinc-200 bg-white py-1.5 pl-3 pr-8 text-xs font-medium text-zinc-600 outline-none transition hover:border-zinc-300 focus:border-accent-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
      >
        {DATASETS.map((d) => (
          <option key={d.id} value={d.id}>
            {d.switcherLabel}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
    </div>
  )
}
