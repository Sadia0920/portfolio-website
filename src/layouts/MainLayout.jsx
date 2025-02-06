import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import Home from '../pages/Home'
// import About from '../pages/About'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-200px)]">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
