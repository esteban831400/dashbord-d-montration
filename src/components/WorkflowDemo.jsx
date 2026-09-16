import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import ReportChart from './ReportChart.jsx'

const STEP_DELAY_MS = 900

// Diagramme animé : chaque étape s'active l'une après l'autre, façon
// "workflow qui s'exécute". Rejouable à la demande. `chart`, si fourni,
// se dessine juste après la dernière étape (utilisé pour le reporting).
export default function WorkflowDemo({ steps, chart }) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [runId, setRunId] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    setActiveIndex(-1)
    let index = -1

    function tick() {
      index += 1
      setActiveIndex(index)
      if (index < steps.length - 1) {
        timeoutRef.current = setTimeout(tick, STEP_DELAY_MS)
      }
    }

    timeoutRef.current = setTimeout(tick, 250)
    return () => clearTimeout(timeoutRef.current)
  }, [runId, steps])

  const isDone = activeIndex >= steps.length - 1

  return (
    <div>
      <ol>
        {steps.map((step, index) => {
          const Icon = step.icon
          const active = index <= activeIndex
          const isLast = index === steps.length - 1

          return (
            <li key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    scale: active ? 1 : 0.9,
                    opacity: active ? 1 : 0.5
                  }}
                  transition={{ duration: 0.25 }}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                    active
                      ? 'border-accent-600 bg-accent-600 text-white'
                      : 'border-zinc-200 bg-white text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900'
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </motion.div>
                {!isLast && (
                  <div className="relative my-1 h-full w-px flex-1 bg-zinc-200 dark:bg-zinc-800">
                    <motion.div
                      initial={false}
                      animate={{ height: index < activeIndex ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                      className="absolute left-0 top-0 w-px bg-accent-600"
                    />
                  </div>
                )}
              </div>

              <motion.div
                initial={false}
                animate={{ opacity: active ? 1 : 0.4, x: active ? 0 : -4 }}
                transition={{ duration: 0.3 }}
                className="pb-6"
              >
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.title}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{step.detail}</p>
              </motion.div>
            </li>
          )
        })}
      </ol>

      {chart && isDone && (
        <ReportChart label={chart.label} values={chart.values} playToken={runId} />
      )}

      <button
        type="button"
        onClick={() => setRunId((id) => id + 1)}
        disabled={!isDone}
        className="mt-1 inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-sm font-medium text-zinc-700 transition enabled:hover:border-accent-600 enabled:hover:text-accent-700 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:enabled:hover:border-accent-500 dark:enabled:hover:text-accent-400"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Rejouer la démo
      </button>
    </div>
  )
}
