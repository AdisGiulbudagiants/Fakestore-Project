import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const NavbarLayout = () => {
  return (
    <div className=" ">
      <Suspense>
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  )
}

export default NavbarLayout
