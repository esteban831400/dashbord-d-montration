import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DATASETS, DEFAULT_DATASET_ID } from '../data/datasets.js'

const DemoContext = createContext(null)

export function DemoProvider({ children }) {
  const [datasetId, setDatasetId] = useState(DEFAULT_DATASET_ID)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const dataset = useMemo(
    () => DATASETS.find((entry) => entry.id === datasetId) ?? DATASETS[0],
    [datasetId]
  )

  const value = {
    dataset,
    datasetId,
    setDatasetId,
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
}

export function useDemo() {
  const ctx = useContext(DemoContext)
  if (!ctx) throw new Error('useDemo must be used within a DemoProvider')
  return ctx
}
