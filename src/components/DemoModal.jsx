import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import WorkflowDemo from './WorkflowDemo.jsx'
import ChatDemo from './ChatDemo.jsx'

export default function DemoModal({ module, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!module) return null

  const Icon = module.icon

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4"
        onClick={onClose}
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="thin-scrollbar max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-900/40 dark:text-accent-400">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {module.title}
                </h2>
                {module.badge && (
                  <p className="text-xs font-medium text-accent-700 dark:text-accent-400">Cas client</p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer la démo"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {module.benefit}
          </p>

          <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
