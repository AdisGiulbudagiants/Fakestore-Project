import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const NavbarLayout = () => {
  return (
    <div>
      NavbarLayout
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default NavbarLayout