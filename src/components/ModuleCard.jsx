export default function ModuleCard({ module, onOpen }) {
  const Icon = module.icon

  return (
    <div
      className={`group flex flex-col rounded-2xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5 dark:bg-zinc-900 dark:hover:shadow-black/20 ${
        module.badge
          ? 'border-accent-300 dark:border-accent-700/60'
          : 'border-zinc-200 dark:border-zinc-800'
      }`}
    >
      <div className="flex items-start justify-between">
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

      <h3 className="mt-4 font-display text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {module.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
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

      <button
        type="button"
        onClick={() => onOpen(module)}
        className="mt-5 inline-flex items-center justify-center rounded-lg border border-zinc-200 py-2 text-sm font-medium text-zinc-700 transition group-hover:border-accent-600 group-hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-300 dark:group-hover:border-accent-500 dark:group-hover:text-accent-400"
      >
        Voir la démo
      </button>
    </div>
  )
}
