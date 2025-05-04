import React from 'react'
import logo from '../assets/logo2.webp'

export default function Footer() {
    
  return (
    <div className='bg-[#008080] text-neutral-content'>
        <footer className="footer items-center w-11/12 mx-auto py-4">
    <div className="grid-flow-col items-center w-7/12 md:mx-0 mx-auto">
      <a className="btn btn-ghost text-2xl">
        <img src={logo} alt="" className='w-9 h-9 rounded-full' />
        Sadia Afrin</a>
    </div>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-self-center">
    <a href='https://www.linkedin.com/in/sadia-afrin-597515301/' target="_blank">
    <i class="fa-brands fa-linkedin text-3xl"></i>
    </a>
    <a href='https://www.facebook.com/sadia.afrin.khan.52' target="_blank">
    <i className="fa-brands fa-facebook text-3xl"></i>
    </a>
    <a href='https://github.com/Sadia0920' target="_blank">
    <i className="fa-brands fa-github text-3xl"></i>
    </a>
    <a href='https://x.com/sadiaafrin0920' target="_blank" >
    <i className="fa-brands fa-square-x-twitter text-3xl"></i>
    </a>
  </nav>
  
</footer>
<p className='text-center py-4 md:pb-4'>© Sadia Afrin {new Date().getFullYear()} - All right reserved</p>
    </div>
  )
}
