import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Layout/Footer'
import NavbarComponent from '../Components/Layout/Navbar'


export default function MainLayouts() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  )
}
