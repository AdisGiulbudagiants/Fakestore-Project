import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const NavbarLayout = () => {
  return (
    <div className=" bg-purple-700">
      <Navbar />
      <Suspense fallback={<h1 className="flex justify-end">Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default NavbarLayout
