import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'

const TYPING_DELAY_MS = 900
const MESSAGE_DELAY_MS = 700

// Simule une conversation qui se déroule progressivement, avec un indicateur
// "en train d'écrire" avant chaque réponse de l'IA.
export default function ChatDemo({ messages, channelLabel }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [runId, setRunId] = useState(0)
  const timeoutRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [visibleCount, typing])

  useEffect(() => {
    setVisibleCount(0)
    setTyping(false)
    let index = 0

    function scheduleNext() {
      if (index >= messages.length) return
      const message = messages[index]
      const showTyping = message.from === 'ia'
      const delay = showTyping ? TYPING_DELAY_MS : MESSAGE_DELAY_MS

      if (showTyping) setTyping(true)

      timeoutRef.current = setTimeout(() => {
        setTyping(false)
        index += 1
        setVisibleCount(index)
        timeoutRef.current = setTimeout(scheduleNext, 350)
      }, delay)
    }

    timeoutRef.current = setTimeout(scheduleNext, 300)
    return () => clearTimeout(timeoutRef.current)
  }, [runId, messages])

  const isDone = visibleCount >= messages.length

  return (
    <div>
      {channelLabel && (
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
          Canal : {channelLabel}
        </p>
      )}

      <div ref={scrollRef} className="thin-scrollbar flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {messages.slice(0, visibleCount).map((message, index) => (
            <ChatBubble key={index} message={message} />
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-zinc-100 px-4 py-2.5 dark:bg-zinc-800"
            >
              <Dot delay={0} />
              <Dot delay={0.15} />
              <Dot delay={0.3} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => setRunId((id) => id + 1)}
        disabled={!isDone}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-sm font-medium text-zinc-700 transition enabled:hover:border-accent-600 enabled:hover:text-accent-700 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:enabled:hover:border-accent-500 dark:enabled:hover:text-accent-400"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Rejouer la démo
      </button>
    </div>
  )
}

function ChatBubble({ message }) {
  if (message.from === 'system') {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-[90%] rounded-full bg-accent-50 px-3 py-1.5 text-center text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-400"
      >
        {message.text}
      </motion.p>
    )
  }

  const isClient = message.from === 'client'

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
        isClient
          ? 'self-end rounded-br-sm bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900'
          : 'self-start rounded-bl-sm bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'
      }`}
    >
      {message.text}
    </motion.div>
  )
}

function Dot({ delay }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
    />
  )
}
