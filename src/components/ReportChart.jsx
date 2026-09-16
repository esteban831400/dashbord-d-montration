import { motion } from 'framer-motion'

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

// Petit graphique qui "se dessine" pour illustrer un rapport généré automatiquement.
export default function ReportChart({ label, values, playToken }) {
  const max = Math.max(...values)

  return (
    <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
        {label}
      </p>
      <div className="mt-4 flex h-32 gap-3">
        {values.map((value, index) => (
          <div key={index} className="flex h-full flex-1 items-end">
            <motion.div
              key={playToken}
              initial={{ height: 0 }}
              animate={{ height: `${(value / max) * 100}%` }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="w-full rounded-t-md bg-accent-500"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-3">
        {DAYS.map((day) => (
          <span key={day} className="flex-1 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
            {day}
          </span>
        ))}
      </div>
    </div>
  )
}
