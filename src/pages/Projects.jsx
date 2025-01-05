import React from 'react'
import '../components/Logos.css'
import project11 from '../assets/project-1/pic1.png'
import project12 from '../assets/project-1/pic2.png'
import project13 from '../assets/project-1/pic3.png'
import project21 from '../assets/project-2/pic1.png'
import project22 from '../assets/project-2/pic2.png'
import project23 from '../assets/project-2/pic3.png'
import project31 from '../assets/project-3/pic1.png'
import project32 from '../assets/project-3/pic2.png'
import project33 from '../assets/project-3/pic3.png'


export default function Projects() {
  return (
    <div className='w-9/12 mx-auto my-20'>
      <h2 className='text-3xl text-center font-semibold mb-1'>Projects</h2>
      <p className='text-gray-500 font-medium mb-7 text-center'>Most recent work
      </p>
      <div className="card bg-base-100 shadow-xl projectCard">
      <h2 className='text-2xl text-center font-semibold mb-4'>Project - 1</h2>
      <div className="carousel carousel-vertical rounded-box h-60 mx-auto">
  <div className="carousel-item w-full h-full">
    <img src={project11} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project12} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project13} />
  </div>
</div>

  <div className="card-body md:w-5/12 w-10/12 lg:w-4/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">VolunForce</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a volunteer management website.</p>
    <a href='https://github.com/programming-hero-web-course2/b10a11-client-side-Sadia0920' target="_blank" className="btn bg-[#008080] text-white">Github Link</a>
    <a href='https://volunforce-client.web.app/' target="_blank" className="btn bg-[#008080] text-white">Live Link</a>
  </div>
      </div>
      <div className="card bg-base-100 shadow-xl projectCard">
      <h2 className='text-2xl text-center font-semibold mb-4'>Project - 2</h2>
      <div className="carousel carousel-vertical rounded-box h-60 mx-auto">
  <div className="carousel-item w-full h-full">
    <img src={project21} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project22} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project23} />
  </div>
</div>

  <div className="card-body md:w-5/12 w-10/12 lg:w-4/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Game Freak Reviews</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a game reviewing website.</p>
    <a href='https://github.com/programming-hero-web-course2/b10-a10-client-side-Sadia0920' target="_blank" className="btn bg-[#008080] text-white">Github Link</a>
    <a href='https://game-freak-reviews-client.web.app/' target="_blank" className="btn bg-[#008080] text-white">Live Link</a>
  </div>
      </div>
      <div className="card bg-base-100 shadow-xl projectCard">
      <h2 className='text-2xl text-center font-semibold mb-4'>Project - 3</h2>
      <div className="carousel carousel-vertical rounded-box h-60 mx-auto">
  <div className="carousel-item w-full h-full">
    <img src={project31} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project32} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project33} />
  </div>
</div>

  <div className="card-body md:w-5/12 w-10/12 lg:w-4/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Discount pro</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a discount coupon finding website.</p>
    <a href='https://github.com/programming-hero-web-course1/b10-a9-authentication-Sadia0920' target="_blank" className="btn bg-[#008080] text-white">Github Link</a>
    <a href='https://discount-pro-bbfa4.web.app/' target="_blank" className="btn bg-[#008080] text-white">Live Link</a>
  </div>
      </div>
    </div>
  )
}
