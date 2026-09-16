// Habillage "fenêtre de navigateur" pour donner aux démos l'apparence d'une
// vraie application plutôt que d'un composant nu dans une carte.
export default function DeviceFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
        {url && (
          <div className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-xs text-zinc-400 dark:bg-zinc-900 dark:text-zinc-500">
            {url}
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}
