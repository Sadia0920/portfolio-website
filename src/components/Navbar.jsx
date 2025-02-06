import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo2.webp'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export default function Navbar() {

  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

    const links = <>
    <li className='text-gray-400 text-lg font-semibold flex items-center'>
      <Link to="home" smooth={true} 
      duration={500} 
      onClick={() => handleSetActive("home")}
      className={activeLink === "home" ? "active" : ""}
      >Home</Link></li>

    <li className='text-gray-400 text-lg font-semibold flex items-center'>
      <Link to="aboutMe" smooth={true} 
      duration={500} 
      onClick={() => handleSetActive("aboutMe")}
      className={activeLink === "aboutMe" ? "active" : ""}
      >About</Link></li>

      <li className='text-gray-400 text-lg font-semibold flex items-center'>
        <Link to="skills" smooth={true} 
        duration={500} 
        onClick={() => handleSetActive("skills")}
        className={activeLink === "skills" ? "active" : ""}
      >Skills</Link></li>

      <li className='text-gray-400 text-lg font-semibold flex items-center'>
        <Link to="qualification" smooth={true} 
        duration={500} 
        onClick={() => handleSetActive("qualification")}
        className={activeLink === "qualification" ? "active" : ""}
      >Qualification</Link></li>

      <li className='text-gray-400 text-lg font-semibold flex items-center'>
        <Link to="projects" smooth={true} 
        duration={500} 
        onClick={() => handleSetActive("projects")}
        className={activeLink === "projects" ? "active" : ""}
        >Projects</Link></li>

      <li className='text-gray-400 text-lg font-semibold flex items-center'>
        <Link to="contactMe" smooth={true} 
        duration={500} 
        onClick={() => handleSetActive("contactMe")}
        className={activeLink === "contactMe" ? "active" : ""}
        >Contact Me</Link></li>
    </>
  return (
  <div className='bg-[#FFFFFF] sticky z-10 top-0 py-2 shadow-sm'>
  <div className="navbar w-11/12 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>

    <a className="btn btn-ghost text-2xl font-bold text-[#008080]">
    <img src={logo} alt="" className='w-9 h-9 rounded-full' />
        Sadia<span className='text-gray-600'>Afrin</span></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  </div>
  </div>
  )
}
