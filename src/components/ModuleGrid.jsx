import ModuleCard from './ModuleCard.jsx'

export default function ModuleGrid({ modules, onOpen }) {
  if (modules.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-sm text-zinc-500 dark:text-zinc-500">
        Aucun module pour ce secteur pour le moment.
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((module) => (
        <div key={module.id} className="animate-fade-in">
          <ModuleCard module={module} onOpen={onOpen} />
        </div>
      ))}
    </div>
  )
}
