import { lazy } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const NavbarLayout = lazy(() => import('./layouts/NavbarLayout.jsx'))
const AllPage = lazy(() => import('./pages/AllPage.jsx'))
const ClothesPage = lazy(() => import('./pages/ClothesPage.jsx'))
const ElectronicsPage = lazy(() => import('./pages/ElectronicsPage.jsx'))
const FurniturePage = lazy(() => import('./pages/FurniturePage.jsx'))
const ShoesPage = lazy(() => import('./pages/ShoesPage.jsx'))
const MiscellaneousPage = lazy(() => import('./pages/MiscellaneousPage.jsx'))

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100%] bg-black">
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route index path="/" element={<AllPage />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/electronics" element={<ElectronicsPage />} />
            <Route path="furniture" element={<FurniturePage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/miscellaneous" element={<MiscellaneousPage />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
