import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const NavbarLayout = () => {
  return (
    <div className=" ">
      <Suspense
        fallback={<h1 className="text-6xl z-50 absolute top-[50dvh] left-[45vw]">Loading...</h1>}
      >
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  )
}

export default NavbarLayout
