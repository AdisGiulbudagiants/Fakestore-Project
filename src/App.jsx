import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { selectIsDark } from './redux/slices/navbarSlice.js'
const NavbarLayout = lazy(() => import('./layouts/NavbarLayout.jsx'))
const AllPage = lazy(() => import('./pages/AllPage.jsx'))
const CartPage = lazy(() => import('./pages/CartPage.jsx'))
const Favorites = lazy(() => import('./pages/Favorites.jsx'))
const ClothesPage = lazy(() => import('./pages/ClothesPage.jsx'))
const ElectronicsPage = lazy(() => import('./pages/ElectronicsPage.jsx'))
const FurniturePage = lazy(() => import('./pages/FurniturePage.jsx'))
const ShoesPage = lazy(() => import('./pages/ShoesPage.jsx'))
const MiscellaneousPage = lazy(() => import('./pages/MiscellaneousPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  const isDark = useSelector(selectIsDark)
  return (
    <BrowserRouter>
      <div className={isDark ? 'dark' : ''}>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route index path="/" element={<AllPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/electronics" element={<ElectronicsPage />} />
            <Route path="furniture" element={<FurniturePage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/miscellaneous" element={<MiscellaneousPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
