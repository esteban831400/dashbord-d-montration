import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DemoProvider } from './context/DemoContext.jsx'
import HomePage from './pages/HomePage.jsx'
import SectorPage from './pages/SectorPage.jsx'
import InfrastructurePage from './pages/InfrastructurePage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/secteur/:sectorId" element={<SectorPage />} />
          <Route path="/infrastructure-ia" element={<InfrastructurePage />} />
        </Routes>
      </BrowserRouter>
    </DemoProvider>
  )
}
