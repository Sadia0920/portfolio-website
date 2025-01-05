import React from 'react'
import picture from '../assets/formal.png'


export default function() {
  return (
    <div>
    <div className="hero bg-base-100 w-9/12 mx-auto min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse justify-center  w-full">
      <div className='flex-1'>
      <img
        src={picture}
        className="w-72 mx-auto" />
      </div>
      <div className='text-center flex-1'>
        <div className='flex items-center justify-center gap-14'>
        <div className='flex flex-col'>
            <a href="https://www.linkedin.com/in/sadia-afrin-597515301/" target="_blank"><i className="fa-brands fa-linkedin text-xl text-[#008080]"></i></a>
            <br></br>
            <a href="https://github.com/Sadia0920" target="_blank"><i className="fa-brands fa-github text-xl text-[#008080]"></i></a>
            <br></br>
            <a href="https://www.facebook.com/sadia.afrin.khan.52" target="_blank"><i 
        className="fa-brands fa-facebook text-xl text-[#008080]"></i></a>
        </div>
       <div className='text-left'>
       <h1 className="text-3xl font-bold">Hi!👋, I'm Sadia Afrin</h1>
        <p className="py-4 text-gray-600 text-2xl font-semibold">
        and I'm a Web developer
        </p>
        <p className="pb-4 text-gray-500 text-lg font-medium">
        Step into my digital realm where creativity meets functionality! As a web developer specializing in JavaScript , React, and Node.js. Dive into my portfolio to witness the fusion of cutting-edge technology with visionary design. Let's embark on a journey together, shaping the digital landscape one pixel at a time.
        </p>
        <a href="https://drive.google.com/file/d/112deS8fOfTG_nJUwiaycLSk-Zk5K92xj/view?usp=sharing" target="_blank" className="btn bg-[#008080] text-white">Download Resume <i className="fa-solid fa-download"></i></a>
       </div>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  )
}
